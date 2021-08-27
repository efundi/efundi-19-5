package org.sakaiproject.gradebookng.tool.model;

import org.apache.wicket.util.io.IClusterable;

import lombok.Data;

/**
 * GbStudentInfoData
 *
 * @author Joseph Gillman
 */
@Data
public class GbStudentInfoData implements IClusterable {

	private static final long serialVersionUID = 1L;

	private String userId;

	private String status;

	private String errorMessage;
}
