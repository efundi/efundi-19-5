package za.ac.nwu;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import ac.za.nwu.academic.dates.dto.AcademicPeriodInfo;
import ac.za.nwu.common.dto.MetaInfo;
import ac.za.nwu.courseoffering.service.CourseOfferingService;
import ac.za.nwu.courseoffering.service.factory.CourseOfferingServiceClientFactory;
import ac.za.nwu.moduleoffering.dto.ModuleOfferingInfo;
import ac.za.nwu.moduleoffering.dto.ModuleOfferingSearchCriteriaInfo;
import ac.za.nwu.registry.utility.GenericServiceClientFactory;
import ac.za.nwu.utility.ServiceRegistryLookupUtility;
import assemble.edu.common.dto.ContextInfo;
import assemble.edu.exceptions.DoesNotExistException;
import assemble.edu.exceptions.InvalidParameterException;
import assemble.edu.exceptions.MissingParameterException;
import assemble.edu.exceptions.OperationFailedException;
import assemble.edu.exceptions.PermissionDeniedException;
import nwu.student.assesment.service.crud.StudentAssessmentServiceCRUD;
import nwu.student.assesment.service.crud.factory.StudentAssessmentCRUDServiceClientFactory;
import nwu.student.assesment.service.dto.MaintainStudentResponseWrapper;
import nwu.student.assesment.service.dto.StudentMarkInfo;

/**
 * 
 * @author Joseph Gillman
 *
 */
public class NWUGradebookPublishUtil {
	private static final Logger log = LogManager.getLogger(NWUGradebookPublishUtil.class);
	
	private static Connection connection = null;
	private static PropertiesHolder properties = null;
	private static StudentAssessmentServiceCRUD studentAssessmentServiceCRUDService = null;
	private static AcademicPeriodInfo academicPeriodInfo = null;
	private static MetaInfo metaInfo = null;
	private static ContextInfo contextInfo = new ContextInfo("EFUNDI");
	private static CourseOfferingService courseOfferingService = null;
	private Map<Long, List> studentInfoMap = null;
	
	private final static String STUDENT_GRDB_MARKS_SELECT = "SELECT gr.STUDENT_ID, gr.POINTS_EARNED, gr.ID, gr.DATE_RECORDED, go.NAME, go.POINTS_POSSIBLE, go.DUE_DATE"
			+ " FROM gb_grade_record_t gr JOIN gb_gradable_object_t go ON go.ID = gr.GRADABLE_OBJECT_ID JOIN gb_grade_map_t gm ON gm.GRADEBOOK_ID = go.GRADEBOOK_ID JOIN gb_gradebook_t g ON "
			+ "g.SELECTED_GRADE_MAPPING_ID = gm.ID WHERE go.ID = ? g.NAME = ? AND go.DUE_DATE IS NOT NULL";		
	
	private final static String NWU_GRDB_RECORDS_SELECT = "SELECT * FROM NWU_GRADEBOOK_DATA WHERE SITE_ID = ? AND STUDENT_NUMBER = ? AND GRADABLE_OBJECT_ID = ? AND MODULE = ?";
	private final static String NWU_GRDB_RECORDS_INSERT = "INSERT INTO NWU_GRADEBOOK_DATA (SITE_ID, SITE_TITLE, MODULE, ASSESSMENT_NAME, STUDENT_NUMBER, EVAL_DESCR_ID, GRADE, "
			+ "TOTAL_MARK, GRADABLE_OBJECT_ID, RECORDED_DATE, DUE_DATE, CREATED_DATE, STATUS, RETRY_COUNT) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	private final static String NWU_GRDB_RECORDS_GRADE_UPDATE = "UPDATE NWU_GRADEBOOK_DATA SET GRADE = ?, RECORDED_DATE = ?, MODIFIED_DATE = ?, STATUS = ? WHERE ID = ?";
	private final static String NWU_GRDB_RECORDS_STATUS_UPDATE = "UPDATE NWU_GRADEBOOK_DATA SET STATUS = ?, MODIFIED_DATE = ?, DESCRIPTION = ? WHERE SITE_ID = ? AND STUDENT_NUMBER = ? AND MODULE = ?";
	
	private final static String NWU_GRDB_INFO_SELECT = "SELECT * FROM NWU_GRADEBOOK_DATA WHERE SITE_ID = ? AND GRADABLE_OBJECT_ID = ?";

    public NWUGradebookPublishUtil() {		
	}
	
    public NWUGradebookPublishUtil(String siteId, List<Long> assignmentIds) {
    	properties = new PropertiesHolder();
    	
    	try {
			connection = DriverManager.getConnection(properties.getUrl(), properties.getUsername(), properties.getPassword());
			log.info("Database connection successfully made.");
			
			getStudentInfo(siteId, assignmentIds);

		} catch (Exception e) {
			log.error("Could not get student info. See error log: " + e);
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					log.error("Could not close Database connection. See error log: " + e);
				}
			}
		}
	}

    /**
     * 
     * @param siteId
     * @param assignmentIds
     */
	private void getStudentInfo(String siteId, List<Long> assignmentIds) throws SQLException {

		PreparedStatement studentGBMarksInfoPrepStmt = null;
		ResultSet studentGBMarksInfoResultSet = null;
		List<NWUGradebookRecord> studentInfoList = null;
		NWUGradebookRecord gradebookRecord = null;
		
		for (Long assignmentId : assignmentIds) {
			
			if(studentInfoMap == null) {
				studentInfoMap = new HashMap<Long, List>();
			}

			// # Get matching data for students from NWU_GRADEBOOK_DATA
			studentGBMarksInfoPrepStmt = connection.prepareStatement(NWU_GRDB_INFO_SELECT);
			studentGBMarksInfoPrepStmt.setString(1, siteId);
			studentGBMarksInfoPrepStmt.setLong(2, assignmentId);
			studentGBMarksInfoResultSet = studentGBMarksInfoPrepStmt.executeQuery();
			
			studentInfoList = new ArrayList<NWUGradebookRecord>();
			
			if (studentGBMarksInfoResultSet.next()) {
				gradebookRecord = new NWUGradebookRecord();
				gradebookRecord.setId(studentGBMarksInfoResultSet.getLong("ID"));
				gradebookRecord.setSiteId(studentGBMarksInfoResultSet.getString("SITE_ID"));
				gradebookRecord.setSiteTitle(studentGBMarksInfoResultSet.getString("SITE_TITLE"));
				gradebookRecord.setModule(studentGBMarksInfoResultSet.getString("MODULE"));
				gradebookRecord.setAssessmentName(studentGBMarksInfoResultSet.getString("ASSESSMENT_NAME"));
				gradebookRecord.setStudentNumber(studentGBMarksInfoResultSet.getString("STUDENT_NUMBER"));
				gradebookRecord.setEvalDescrId(studentGBMarksInfoResultSet.getInt("EVAL_DESCR_ID"));
				gradebookRecord.setGrade(studentGBMarksInfoResultSet.getDouble("GRADE"));
				gradebookRecord.setTotalMark(studentGBMarksInfoResultSet.getDouble("TOTAL_MARK"));
				gradebookRecord.setGradableObjectId(studentGBMarksInfoResultSet.getLong("GRADABLE_OBJECT_ID"));
				gradebookRecord.setRecordedDate(studentGBMarksInfoResultSet.getTimestamp("RECORDED_DATE").toLocalDateTime());
				gradebookRecord.setDueDate(studentGBMarksInfoResultSet.getTimestamp("DUE_DATE").toLocalDateTime());
				gradebookRecord.setCreatedDate(studentGBMarksInfoResultSet.getTimestamp("CREATED_DATE").toLocalDateTime());
				gradebookRecord.setModifiedDate(studentGBMarksInfoResultSet.getTimestamp("MODIFIED_DATE").toLocalDateTime());
				gradebookRecord.setStatus(studentGBMarksInfoResultSet.getString("STATUS"));
				gradebookRecord.setRetryCount(studentGBMarksInfoResultSet.getInt("RETRY_COUNT"));
				gradebookRecord.setDescription(studentGBMarksInfoResultSet.getString("DESCRIPTION"));
				studentInfoList.add(gradebookRecord);
			}
			studentInfoMap.put(assignmentId, studentInfoList);
		}		
	}
    
	/**
	 * 
	 */
	private static void connectToDBAndInitWS() {

		try {
			connection = DriverManager.getConnection(properties.getUrl(), properties.getUsername(), properties.getPassword());

			log.info("Database connection successfully made.");

			boolean initializeSuccess = initializeWebserviceObjects();
			if (!initializeSuccess) {
				log.error("initializeWebserviceObjects was unsuccessful, please see error log");
				return;
			}

			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
			log.info("Start Publishing NWU Gradebook Data at " + dtf.format(LocalDateTime.now()));

//			publishGradebookDataToMPS();

			log.info("Publishing NWU Gradebook Data complete! Finished at " + dtf.format(LocalDateTime.now()));

		} catch (Exception e) {
			log.error("Could not publish Gradebook Data to VSS. See error log: " + e);
		} finally {
			if (connection != null) {
//				connection.close();
			}
		}
	} 
	
    /**
     * 
     * @param siteId
     * @param assignmentIds 
     * @throws SQLException
     */
	public static void publishGradebookDataToMPS(String siteId, List<String> assignmentIds) {
		
//		getDatabaseConnection();

		PreparedStatement siteModulesPrepStmt = null;
		PreparedStatement studentGradebookMarksPrepStmt = null;
		PreparedStatement nwuGradebookRecordsSelectPrepStmt = null;

		ResultSet siteModulesResultSet = null;
		ResultSet studentGradebookMarksResultSet = null;
		ResultSet nwuGradebookRecordsSelectResultSet = null;
		
		try {

			// #1 Get all current year sites to process 
//			siteModulesPrepStmt = connection.prepareStatement(CURRENT_YEAR_SITES_SELECT);
//			siteModulesPrepStmt.setString(1, siteId);
//			siteModulesResultSet = siteModulesPrepStmt.executeQuery();
			
			
			String module = "", siteTitle ="", studentNumber, assessmentName = "", evalDescr = "";
			HashMap<Integer, Double> studentGradeMap = null;
			double grade, total = 0.0;
			int evalDescrId;
			LocalDateTime dueDate = null;
			LocalDateTime recordedDate = null;
			List<String> moduleList = null;
			List<String> moduleValues = null;
			
			moduleList = Collections.list(new StringTokenizer(siteModulesResultSet.getString("module").replaceAll("/", ""), ",")).stream()
				      .map(token -> (String) token)
				      .collect(Collectors.toList());
			
//			for (String module : moduleList) {
//			
//			}
				

			for (String assignmentId : assignmentIds) {

				studentGradeMap = new HashMap<>();

				// # Get all student numbers and their grades for siteId and the date recorded between start and end date
				studentGradebookMarksPrepStmt = connection.prepareStatement(STUDENT_GRDB_MARKS_SELECT);
				studentGradebookMarksPrepStmt.setInt(1, Integer.parseInt(assignmentId));
				studentGradebookMarksPrepStmt.setString(2, siteId);
				studentGradebookMarksResultSet = studentGradebookMarksPrepStmt.executeQuery();
				while (studentGradebookMarksResultSet.next()) {
					
					studentNumber = studentGradebookMarksResultSet.getString("STUDENT_ID");
					grade = studentGradebookMarksResultSet.getDouble("POINTS_EARNED");
					
					recordedDate = studentGradebookMarksResultSet.getTimestamp("DATE_RECORDED").toLocalDateTime();	
					assessmentName = studentGradebookMarksResultSet.getString("NAME");
					total = studentGradebookMarksResultSet.getDouble("POINTS_POSSIBLE");
					dueDate = studentGradebookMarksResultSet.getTimestamp("DUE_DATE").toLocalDateTime();
					int gradableObjectId = studentGradebookMarksResultSet.getInt("ID");

					//*******************
					evalDescr = getEvalDesc();
					evalDescrId = getEvalDescId();
					evalDescrId = generateEvalDescId();
					//*******************
					
					// # Get matching data for students from NWU_GRADEBOOK_DATA
					nwuGradebookRecordsSelectPrepStmt = connection.prepareStatement(NWU_GRDB_RECORDS_SELECT);
					nwuGradebookRecordsSelectPrepStmt.setString(1, siteId);
					nwuGradebookRecordsSelectPrepStmt.setString(2, studentNumber);
					nwuGradebookRecordsSelectPrepStmt.setInt(3, gradableObjectId);
					nwuGradebookRecordsSelectPrepStmt.setString(4, module);
//					nwuGradebookRecordsSelectPrepStmt.setInt(5, evalDescrId);
					nwuGradebookRecordsSelectResultSet = nwuGradebookRecordsSelectPrepStmt.executeQuery();
					
					if (nwuGradebookRecordsSelectResultSet.next()) {
			            do {
			            	int id = nwuGradebookRecordsSelectResultSet.getInt("ID");
							double existingGrade = nwuGradebookRecordsSelectResultSet.getDouble("GRADE");							
							LocalDateTime existingRecordedDate = nwuGradebookRecordsSelectResultSet.getTimestamp("RECORDED_DATE").toLocalDateTime();	
							
							// # If the grade and recordedDate differ, update NWU_GRADEBOOK_DATA record and add to map for WS
							if (existingGrade != grade || (existingRecordedDate != null && !existingRecordedDate.isEqual(recordedDate))) {
								
								updateNWUGradebookData(studentNumber, studentGradeMap, grade, recordedDate, id);
							}
			            } while (nwuGradebookRecordsSelectResultSet.next());
			        } else {

						// # If the record does not exist in NWU_GRADEBOOK_DATA, insert new with status STATUS_NEW
						insertNWUGradebookData(siteId, siteTitle, studentNumber, assessmentName, studentGradeMap, grade, total, evalDescrId, dueDate,
								recordedDate, gradableObjectId, module);
			        }										
				}
				
				if(!studentGradeMap.isEmpty()) {

					moduleValues = Collections.list(new StringTokenizer(module, " ")).stream()
						      .map(token -> (String) token)
						      .collect(Collectors.toList());
					
					// # If the INSERT was successful and studentGradeMap not empty, send student grades/data via Webservice StudentAssessmentServiceCRUD
					publishGrades(siteId, module, moduleValues, studentGradeMap, siteTitle, assessmentName, evalDescr, total, dueDate, recordedDate);						
				}	
			}
			
		} catch (Exception e) {
			log.error("Grades could not be published to MPS, see error log for siteId: " + siteId + "; assignmentIds: " + assignmentIds, e);
        } finally {

			try {
				if (studentGradebookMarksResultSet != null) { studentGradebookMarksResultSet.close(); }
				if (nwuGradebookRecordsSelectResultSet != null) { nwuGradebookRecordsSelectResultSet.close(); }
				
	            if (studentGradebookMarksPrepStmt != null) { studentGradebookMarksPrepStmt.close(); }
	            if (nwuGradebookRecordsSelectPrepStmt != null) { nwuGradebookRecordsSelectPrepStmt.close(); }
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		}
	}

	/**
	 * 
	 * @param siteId 
	 * @param module 
	 * @param moduleValues
	 * @param studentGradeMap
	 * @param siteTitle
	 * @param assessmentName
	 * @param evalDescr
	 * @param total
	 * @param dueDate
	 * @param recordedDate
	 */
	private static void publishGrades(String siteId, String module, List<String> moduleValues, HashMap<Integer, Double> studentGradeMap, String siteTitle, String assessmentName, String evalDescr,
			double total, LocalDateTime dueDate, LocalDateTime recordedDate)  {

		log.info("publishGrades start");
		log.info("		siteId = " + siteId);
		log.info("		module = " + module);
		log.info("		studentGradeMap = " + studentGradeMap);
		log.info("		assessmentName = " + assessmentName);
		log.info("		evalDescr = " + evalDescr);
		log.info("		total = " + total);
		log.info("		dueDate = " + dueDate);
		log.info("		recordedDate = " + recordedDate);

        String strValue = moduleValues.get(2);
        int indexOf = strValue.indexOf("-");
		String enrolmentCategoryTypeKey = "vss.code.ENROLCAT." + strValue.substring(0, indexOf);
		String modeOfDeliveryTypeKey = "vss.code.PRESENTCAT." + strValue.substring(indexOf + 1);
		
		String moduleSite = Campus.getNumber(moduleValues.get(3));
		ModuleOfferingInfo moduleOfferingInfo = getModuleOfferingInfo(academicPeriodInfo, moduleValues.get(0), moduleValues.get(1), moduleSite, enrolmentCategoryTypeKey, modeOfDeliveryTypeKey, contextInfo);
        
		if(moduleOfferingInfo == null) {
			log.error("Grades could not be published, see error log for siteTitle: " + siteTitle + "; assessmentName: " + assessmentName);
			log.error("Could not find ModuleOfferingInfo, see error log for subjectCode: " + moduleValues.get(0) + "; moduleNumber: " + moduleValues.get(1) + 
					"; moduleSite: " + moduleSite + "; enrolmentCategoryTypeKey: " + enrolmentCategoryTypeKey + "; modeOfDeliveryTypeKey: " + modeOfDeliveryTypeKey);
			return;
		}
		
		StudentMarkInfo studentMarkInfo = new StudentMarkInfo();
		studentMarkInfo.setModuleSubjectCode(moduleValues.get(0));
		studentMarkInfo.setModuleNumber(moduleValues.get(1));
		studentMarkInfo.setAcademicPeriod(academicPeriodInfo);
		studentMarkInfo.setEnrolmentCategoryTypeKey(enrolmentCategoryTypeKey);
		studentMarkInfo.setModeOfDeliveryTypeKey(modeOfDeliveryTypeKey);
		studentMarkInfo.setTermTypeKey(moduleOfferingInfo.getTermTypeKey());
		studentMarkInfo.setModuleOrgEnt(Integer.parseInt(moduleOfferingInfo.getModuleOrgEnt()));
		studentMarkInfo.setModuleSite(Integer.parseInt(moduleSite));
		studentMarkInfo.setClassGroupDescription(siteTitle);
		studentMarkInfo.setLanguageTypeKey("vss.code.LANGUAGE.2");
		studentMarkInfo.setEvaluationDesc(assessmentName);
		studentMarkInfo.setEvaluationShortDesc(evalDescr);
		studentMarkInfo.setEvaluationCutOffDate(Date.from(dueDate.atZone(ZoneId.systemDefault()).toInstant()));
		studentMarkInfo.setEvaluationMarkOutOff((int) total);
		studentMarkInfo.setEvaluationNoOfSubmissions(1);
		studentMarkInfo.setEvaluationSubminimum(0);
		studentMarkInfo.setEvaluationAssessmentDateTime(Date.from(recordedDate.atZone(ZoneId.systemDefault()).toInstant()));
		studentMarkInfo.setEvaluationIsRequiredForExam(true);
		studentMarkInfo.setStudentAndMark(studentGradeMap);
		studentMarkInfo.setMetaInfo(metaInfo);

		try {
			MaintainStudentResponseWrapper result = studentAssessmentServiceCRUDService.maintainStudentMark(studentMarkInfo, contextInfo);

			HashMap<String, String> maintainStudentResponse = result.getMaintainStudentResponse();
			if(maintainStudentResponse == null) {
				log.error("Response from publishGrades is empty for siteId: " + siteId + "; siteTitle: " + siteTitle + "; module: " + module + "; assessmentName: " + assessmentName + "; studentGradeMap: " + studentGradeMap);

				updateNWUGradebookRecordsWithStatus(siteId, module, studentGradeMap, NWUGradebookRecord.STATUS_FAIL, "MaintainStudentResponse is null");
			} else {
				updateNWUGradebookRecords(siteId, module, maintainStudentResponse);
			}
				
		} catch (DoesNotExistException | InvalidParameterException | MissingParameterException
				| OperationFailedException | PermissionDeniedException e) {
			log.error("Grades could not be published, see error log for siteTitle: " + siteTitle + "; assessmentName: " + assessmentName, e);
			
			updateNWUGradebookRecordsWithStatus(siteId, module, studentGradeMap, NWUGradebookRecord.STATUS_FAIL, e.getMessage());
		} catch (Exception e) {
			log.error("Grades could not be published, see error log for siteTitle: " + siteTitle + "; assessmentName: " + assessmentName, e);

			updateNWUGradebookRecordsWithStatus(siteId, module, studentGradeMap, NWUGradebookRecord.STATUS_FAIL, e.getMessage());
        }

		log.info("publishGrades end");
	}
	
	/**
	 * 
	 * @param siteId
	 * @param module
	 * @param maintainStudentResponse
	 */
	private static void updateNWUGradebookRecords(String siteId, String module, HashMap<String, String> maintainStudentResponse) {
		
		PreparedStatement nwuGradebookRecordsUpdateStatusPrepStmt = null;
		
		for (Entry<String, String> entry : maintainStudentResponse.entrySet()) {
			String studentNumber = entry.getKey();
			String resultValue = entry.getValue();
			boolean success = false;
			log.debug("updateNWUGradebookRecords - studentNumber: " + studentNumber + " resultValue: " + resultValue);

			// # IF WS update was successful, update status in new table to DONE, else update status to FAIL / RETRY
			if(resultValue != null && resultValue.equals("Create or Update of student mark successful")) {
				success = true;
			}

			try {
				nwuGradebookRecordsUpdateStatusPrepStmt = connection.prepareStatement(NWU_GRDB_RECORDS_STATUS_UPDATE);

				// if WS success / else status = FAIL with description
				if(success) {
					nwuGradebookRecordsUpdateStatusPrepStmt.setString(1, NWUGradebookRecord.STATUS_SUCCESS);
					nwuGradebookRecordsUpdateStatusPrepStmt.setTimestamp(2, Timestamp.valueOf(LocalDateTime.now()));
					nwuGradebookRecordsUpdateStatusPrepStmt.setString(3, null);
				} else {
					nwuGradebookRecordsUpdateStatusPrepStmt.setString(1, NWUGradebookRecord.STATUS_FAIL);
					nwuGradebookRecordsUpdateStatusPrepStmt.setTimestamp(2, Timestamp.valueOf(LocalDateTime.now()));
					nwuGradebookRecordsUpdateStatusPrepStmt.setString(3, resultValue);
				}

				nwuGradebookRecordsUpdateStatusPrepStmt.setString(4, siteId);
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(5, studentNumber);
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(6, module);

				// execute the preparedstatement
				nwuGradebookRecordsUpdateStatusPrepStmt.executeUpdate();
				
		        log.debug("Published NWU Student data & updated NWU_GRADEBOOK_DATA - siteId = " + siteId + ", module = " + module + ", studentNumber = " + studentNumber);
			} catch (SQLException e) {
				log.error("Could not update NWU Gradebook data for: siteId: " + siteId + "; studentNumber: " + studentNumber
						+ "; module: " + module, e);
			}
		}
	}
	
	/**
	 * 
	 * @param siteId
	 * @param module
	 * @param studentGradeMap
	 * @param status
	 * @param description
	 */
	private static void updateNWUGradebookRecordsWithStatus(String siteId, String module, HashMap<Integer, Double> studentGradeMap, String status, String description) {
		PreparedStatement nwuGradebookRecordsUpdateStatusPrepStmt = null;
		Integer studentNumber = null;
		try {
			for (Entry<Integer, Double> entry : studentGradeMap.entrySet()) {
				studentNumber = entry.getKey();

				nwuGradebookRecordsUpdateStatusPrepStmt = connection.prepareStatement(NWU_GRDB_RECORDS_STATUS_UPDATE);
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(1, status);
				nwuGradebookRecordsUpdateStatusPrepStmt.setTimestamp(2, Timestamp.valueOf(LocalDateTime.now()));
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(3, description);
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(4, siteId);
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(5, Integer.toString(studentNumber));
				nwuGradebookRecordsUpdateStatusPrepStmt.setString(6, module);

				// execute the preparedstatement
				nwuGradebookRecordsUpdateStatusPrepStmt.executeUpdate();
			}
	        log.debug("Published NWU Student data & updated NWU_GRADEBOOK_DATA - siteId = " + siteId + ", module = " + module + ", studentNumber = " + studentNumber);
		} catch (SQLException e) {
			log.error("Could not update NWU Gradebook data for: siteId: " + siteId + "; studentNumber: " + studentNumber
					+ "; module: " + module, e);
		}
	}
	
	/**
	 * 
	 * @param academicPeriodInfo
	 * @param subjectCode
	 * @param moduleNumber
	 * @param moduleSite
	 * @param enrolmentCategoryTypeKey
	 * @param modeOfDeliveryTypeKey
	 * @param contextInfo
	 * @return
	 */
	private static ModuleOfferingInfo getModuleOfferingInfo(AcademicPeriodInfo academicPeriodInfo, String subjectCode, String moduleNumber, String moduleSite, String enrolmentCategoryTypeKey, String modeOfDeliveryTypeKey, ContextInfo contextInfo) {
			
		ModuleOfferingSearchCriteriaInfo searchCriteria = new ModuleOfferingSearchCriteriaInfo();
		searchCriteria.setAcademicPeriod(academicPeriodInfo);
		searchCriteria.setModuleSubjectCode(subjectCode);
		searchCriteria.setModuleNumber(moduleNumber);
		searchCriteria.setModuleSite(moduleSite);
		searchCriteria.setMethodOfDeliveryTypeKey(enrolmentCategoryTypeKey);
		searchCriteria.setModeOfDeliveryTypeKey(modeOfDeliveryTypeKey);
		
		try {
			List<ModuleOfferingInfo> moduleOfferingList = courseOfferingService
					.getModuleOfferingBySearchCriteria(searchCriteria, "vss.code.LANGUAGE.2", contextInfo);

			if(moduleOfferingList != null && !moduleOfferingList.isEmpty()) {
				return moduleOfferingList.get(0);
			}
			
		} catch (DoesNotExistException | InvalidParameterException | MissingParameterException
				| OperationFailedException | PermissionDeniedException e) {
			log.error("Could not find ModuleOfferingInfo, see error log for subjectCode: " + subjectCode + "; moduleNumber: " + moduleNumber + 
					"; moduleSite: " + moduleSite + "; enrolmentCategoryTypeKey: " + enrolmentCategoryTypeKey + "; modeOfDeliveryTypeKey: " + modeOfDeliveryTypeKey, e);
		} catch (Exception e) {
			log.error("Could not find ModuleOfferingInfo, see error log for subjectCode: " + subjectCode + "; moduleNumber: " + moduleNumber + 
					"; moduleSite: " + moduleSite + "; enrolmentCategoryTypeKey: " + enrolmentCategoryTypeKey + "; modeOfDeliveryTypeKey: " + modeOfDeliveryTypeKey, e);
        }

		return null;
	}

	/**
	 * 
	 * @param studentNumber
	 * @param studentGradeMap
	 * @param grade
	 * @param recordedDate
	 * @param id
	 */
	private static void updateNWUGradebookData(String studentNumber, HashMap<Integer, Double> studentGradeMap, double grade, LocalDateTime recordedDate, int id){
		
		PreparedStatement nwuGradebookRecordsUpdatePrepStmt = null;
		try {
			nwuGradebookRecordsUpdatePrepStmt = connection.prepareStatement(NWU_GRDB_RECORDS_GRADE_UPDATE);
			nwuGradebookRecordsUpdatePrepStmt.setDouble(1, grade);
			nwuGradebookRecordsUpdatePrepStmt.setTimestamp(2, Timestamp.valueOf(recordedDate));
			nwuGradebookRecordsUpdatePrepStmt.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
			nwuGradebookRecordsUpdatePrepStmt.setString(4, NWUGradebookRecord.STATUS_UPDATED);
			nwuGradebookRecordsUpdatePrepStmt.setInt(5, id);
			
			// execute the preparedstatement
			int count = nwuGradebookRecordsUpdatePrepStmt.executeUpdate();
			
			if(count > 0) {
				// If Updated successfully, add student and grade data to Map
				studentGradeMap.put(Integer.parseInt(studentNumber), grade);

                log.debug("Updated NWU_GRADEBOOK_DATA - ID = " + id + ", GRADE = " + grade);
			}
		} catch (SQLException e) {
			log.error("Could not update NWU Gradebook data: ", e);
		}
	}

	/**
	 * 
	 * @param siteId
	 * @param siteTitle
	 * @param studentNumber
	 * @param assessmentName
	 * @param studentGradeMap
	 * @param grade
	 * @param total
	 * @param evalDescrId
	 * @param dueDate
	 * @param recordedDate
	 * @param gradableObjectId
	 * @param module
	 */
	private static void insertNWUGradebookData(String siteId, String siteTitle,
			String studentNumber, String assessmentName, HashMap<Integer, Double> studentGradeMap, double grade, double total,
			int evalDescrId, LocalDateTime dueDate, LocalDateTime recordedDate, int gradableObjectId, String module) {
		
		PreparedStatement nwuGradebookRecordsInsertPrepStmt = null;
		try {
			nwuGradebookRecordsInsertPrepStmt = connection.prepareStatement(NWU_GRDB_RECORDS_INSERT);

			nwuGradebookRecordsInsertPrepStmt.setString(1, siteId);
			nwuGradebookRecordsInsertPrepStmt.setString(2, siteTitle);
			nwuGradebookRecordsInsertPrepStmt.setString(3, module);
			nwuGradebookRecordsInsertPrepStmt.setString(4, assessmentName);					
			nwuGradebookRecordsInsertPrepStmt.setString(5, studentNumber);
			nwuGradebookRecordsInsertPrepStmt.setInt(6, evalDescrId);
			nwuGradebookRecordsInsertPrepStmt.setDouble(7, grade);
			nwuGradebookRecordsInsertPrepStmt.setDouble(8, total);
			nwuGradebookRecordsInsertPrepStmt.setInt(9, gradableObjectId);
			nwuGradebookRecordsInsertPrepStmt.setTimestamp(10, Timestamp.valueOf(recordedDate));
			nwuGradebookRecordsInsertPrepStmt.setTimestamp(11, Timestamp.valueOf(dueDate));	
			nwuGradebookRecordsInsertPrepStmt.setTimestamp(12, Timestamp.valueOf(LocalDateTime.now()));							
			nwuGradebookRecordsInsertPrepStmt.setString(13, NWUGradebookRecord.STATUS_NEW);
			nwuGradebookRecordsInsertPrepStmt.setInt(14, 0);
			
			// execute the preparedstatement
			int count = nwuGradebookRecordsInsertPrepStmt.executeUpdate();			
			if(count > 0) {
				// If inserted successfully, add student and grade data to Map
				studentGradeMap.put(Integer.parseInt(studentNumber), grade);

                log.debug("Inserted NWU_GRADEBOOK_DATA - siteId = " + siteId + ", module = " + module + ", assessmentName = " + assessmentName + ", studentNumber = " + studentNumber + ", grade = " + grade);
			}
		} catch (SQLException e) {
			log.error("Could not insert NWU Gradebook data for: siteId: " + siteId + "; module: " + module + "; studentNumber: " + studentNumber + "; assessmentName: " + assessmentName, e);
		}
	}
    
    /**
	 * 
	 * @return
	 */
	private static boolean initializeWebserviceObjects() {
		if(academicPeriodInfo == null) {
			Calendar calendar = Calendar.getInstance();	
			academicPeriodInfo = new AcademicPeriodInfo();
			academicPeriodInfo.setAcadPeriodtTypeKey("vss.code.AcademicPeriod.YEAR");
			academicPeriodInfo.setAcadPeriodValue(Integer.toString(calendar.get(Calendar.YEAR)));
		}
		
		if (metaInfo == null) {
			metaInfo = new MetaInfo();
			metaInfo.setCreateId(properties.getWSMetaInfoCreateId());
			metaInfo.setAuditFunction(properties.getWSMetaInfoAuditFunction());
		}
		
		if(studentAssessmentServiceCRUDService == null) {
			String studentServiceLookupKey = ServiceRegistryLookupUtility.getServiceRegistryLookupKey(properties.getWSRuntimeEnvironment(),
	                StudentAssessmentCRUDServiceClientFactory.STUDENTASSESSMENTCRUDSERVICE, properties.getWSMajorVersion(), properties.getWSDatabase());

			try {
				studentAssessmentServiceCRUDService = (StudentAssessmentServiceCRUD) GenericServiceClientFactory.getService(
				        studentServiceLookupKey, properties.getWSUsername(), properties.getWSPassword(), StudentAssessmentServiceCRUD.class);
			} catch (PermissionDeniedException e) {
				log.error("initializeWebserviceObjects - Initializing StudentAssessmentServiceCRUD failed with PermissionDeniedException: ", e);
				return false;
			} catch (DoesNotExistException e) {
				log.error("initializeWebserviceObjects - Initializing StudentAssessmentServiceCRUD failed with DoesNotExistException: ", e);
				return false;
			} catch (MissingParameterException e) {
				log.error("initializeWebserviceObjects - Initializing StudentAssessmentServiceCRUD failed with MissingParameterException: ", e);
			} catch (OperationFailedException e) {
				log.error("initializeWebserviceObjects - Initializing StudentAssessmentServiceCRUD failed with OperationFailedException: ", e);
				return false;
			}
		}
		
		if (courseOfferingService == null) {
			try {
				courseOfferingService = (CourseOfferingService) CourseOfferingServiceClientFactory
						.getCourseOfferingService(properties.getWSModuleEnvTypeKey(), properties.getNWUContextInfoUsername(), properties.getNWUContextInfoPassword());
			} catch (PermissionDeniedException e) {
				log.error("initializeWebserviceObjects - Initializing CourseOfferingService failed with PermissionDeniedException: ", e);
				return false;
			} catch (DoesNotExistException e) {
				log.error("initializeWebserviceObjects - Initializing CourseOfferingService failed with DoesNotExistException: ", e);
				return false;
			} catch (MissingParameterException e) {
				log.error("initializeWebserviceObjects - Initializing CourseOfferingService failed with MissingParameterException: ", e);
				return false;
			} catch (OperationFailedException e) {
				log.error("initializeWebserviceObjects - Initializing CourseOfferingService failed with OperationFailedException: ", e);
				return false;
			}
		}

        log.info("Initializing Webservice Objects was successful.");
		return true;
	}

	public Map<Long, List> getStudentInfoMap() {
		return studentInfoMap;
	}

	private static String getEvalDesc() {
		// TODO Auto-generated method stub
		return "TEST1";
	}

	private static int getEvalDescId() {
		
//		RandomStringUtils.
		return 1;
	}
	
	private static int generateEvalDescId() {
//		RandomStringUtils.
		return 1;
	}
}
