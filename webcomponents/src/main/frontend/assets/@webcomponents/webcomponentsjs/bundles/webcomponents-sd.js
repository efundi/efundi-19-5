/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var n;function aa(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }function ba(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: aa(a) };
  }function ca(a) {
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);return c;
  }var da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function ea() {}ea.prototype.toJSON = function () {
    return {};
  };
  function p(a) {
    a.__shady || (a.__shady = new ea());return a.__shady;
  }function q(a) {
    return a && a.__shady;
  };var t = window.ShadyDOM || {};t.na = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.h = !!(fa && fa.configurable && fa.get);t.R = t.force || !t.na;t.j = t.noPatch || !1;t.D = t.preferPerformance;t.T = "on-demand" === t.j;t.ca = navigator.userAgent.match("Trident");function v(a) {
    return (a = q(a)) && void 0 !== a.firstChild;
  }function w(a) {
    return a instanceof ShadowRoot;
  }function ha(a) {
    return (a = (a = q(a)) && a.root) && ia(a);
  }
  var x = Element.prototype,
      ja = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
      ka = document.createTextNode(""),
      la = 0,
      ma = [];new MutationObserver(function () {
    for (; ma.length;) try {
      ma.shift()();
    } catch (a) {
      throw ka.textContent = la++, a;
    }
  }).observe(ka, { characterData: !0 });function na(a) {
    ma.push(a);ka.textContent = la++;
  }var oa = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };
  function pa(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.__shady_parentNode;
    }return !1;
  }function qa(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (e) {
      return a[e];
    };a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ba(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
    };return a;
  }
  function ra(a) {
    var b = [];for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);return b;
  }function sa(a) {
    var b = [];for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);return b;
  }function ta(a, b, c) {
    c.configurable = !0;if (c.value) a[b] = c.value;else try {
      Object.defineProperty(a, b, c);
    } catch (d) {}
  }function y(a, b, c, d) {
    c = void 0 === c ? "" : c;for (var e in b) d && 0 <= d.indexOf(e) || ta(a, c + e, b[e]);
  }function ua(a, b) {
    for (var c in b) c in a && ta(a, c, b[c]);
  }
  function z(a) {
    var b = {};Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });return b;
  }function va(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e];
  };var wa = [],
      xa;function ya(a) {
    xa || (xa = !0, na(za));wa.push(a);
  }function za() {
    xa = !1;for (var a = !!wa.length; wa.length;) wa.shift()();return a;
  }za.list = wa;function Aa() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.J = new Set();
  }function Ba(a) {
    a.a || (a.a = !0, na(function () {
      a.flush();
    }));
  }Aa.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.J.forEach(function (b) {
        b(a);
      });
    }
  };Aa.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ca(a, b) {
    var c = p(a);c.C || (c.C = new Aa());c.C.J.add(b);var d = c.C;return { ga: b, ia: d, ha: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Da(a) {
    var b = a && a.ia;b && (b.J.delete(a.ga), b.J.size || (p(a.ha).C = null));
  }
  function Ea(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  };var Fa = /[&\u00A0"]/g,
      Ga = /[&\u00A0<>]/g;function Ha(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function Ia(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var Ka = Ia("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      La = Ia("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Ma(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var l = a,
            k = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            l = h.localName;for (var m = "<" + l, r = h.attributes, u = 0, L; L = r[u]; u++) m += " " + L.name + '="' + L.value.replace(Fa, Ha) + '"';m += ">";h = Ka[l] ? m : m + Ma(h, k) + "</" + l + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = l && La[l.localName] ? h : h.replace(Ga, Ha);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Na = t.h,
      Oa = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Pa = {};function Qa(a) {
    Pa[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Ra(a, b) {
    y(a, b, "__shady_native_");for (var c in b) Qa(c);
  }function A(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Oa[d] || (Oa[d] = e.value) : Qa(d));
    }
  }
  var B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      C = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Sa = document.implementation.createHTMLDocument("inert");function Ta(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Ua = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Va = ["querySelector", "querySelectorAll"];
  function Wa() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? A(window.EventTarget.prototype, a) : (A(Node.prototype, a), A(Window.prototype, a));Na ? A(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ra(Node.prototype, { parentNode: { get: function () {
          B.currentNode = this;return B.parentNode();
        } }, firstChild: { get: function () {
          B.currentNode = this;return B.firstChild();
        } }, lastChild: { get: function () {
          B.currentNode = this;return B.lastChild();
        } }, previousSibling: { get: function () {
          B.currentNode = this;return B.previousSibling();
        } }, nextSibling: { get: function () {
          B.currentNode = this;return B.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];B.currentNode = this;for (var c = B.firstChild(); c;) b.push(c), c = B.nextSibling();return b;
        } }, parentElement: { get: function () {
          C.currentNode = this;return C.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              Ta(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });A(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    A(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          C.currentNode = this;return C.firstChild();
        } }, lastElementChild: { get: function () {
          C.currentNode = this;return C.lastChild();
        } }, children: { get: function () {
          var b = [];C.currentNode = this;for (var c = C.firstChild(); c;) b.push(c), c = C.nextSibling();return qa(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };Na ? (A(Element.prototype, Ua), A(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), A(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Ra(Element.prototype, a), Ra(Element.prototype, { previousElementSibling: { get: function () {
          C.currentNode = this;return C.previousSibling();
        } }, nextElementSibling: { get: function () {
          C.currentNode = this;return C.nextSibling();
        } }, innerHTML: { get: function () {
          return Ma(this, ra);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Ta(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Sa.namespaceURI ? Sa.createElementNS(this.namespaceURI, d) : Sa.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));A(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));A(Element.prototype, Va);A(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && A(window.HTMLTemplateElement.prototype, ["innerHTML"]);Na ? A(DocumentFragment.prototype, Ua) : Ra(DocumentFragment.prototype, a);A(DocumentFragment.prototype, Va);Na ? (A(Document.prototype, Ua), A(Document.prototype, ["activeElement"])) : Ra(Document.prototype, a);A(Document.prototype, ["importNode", "getElementById"]);A(Document.prototype, Va);
  };var Xa = z({ get childNodes() {
      return this.__shady_childNodes;
    }, get firstChild() {
      return this.__shady_firstChild;
    }, get lastChild() {
      return this.__shady_lastChild;
    }, get childElementCount() {
      return this.__shady_childElementCount;
    }, get children() {
      return this.__shady_children;
    }, get firstElementChild() {
      return this.__shady_firstElementChild;
    }, get lastElementChild() {
      return this.__shady_lastElementChild;
    }, get shadowRoot() {
      return this.__shady_shadowRoot;
    } }),
      Ya = z({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      return this.__shady_innerHTML = a;
    } }),
      Za = z({ get parentElement() {
      return this.__shady_parentElement;
    }, get parentNode() {
      return this.__shady_parentNode;
    }, get nextSibling() {
      return this.__shady_nextSibling;
    }, get previousSibling() {
      return this.__shady_previousSibling;
    }, get nextElementSibling() {
      return this.__shady_nextElementSibling;
    }, get previousElementSibling() {
      return this.__shady_previousElementSibling;
    }, get className() {
      return this.__shady_className;
    },
    set className(a) {
      return this.__shady_className = a;
    } });function $a(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }$a(Xa);$a(Ya);$a(Za);var ab = t.h || !0 === t.j,
      bb = ab ? function () {} : function (a) {
    var b = p(a);b.ea || (b.ea = !0, ua(a, Za));
  },
      cb = ab ? function () {} : function (a) {
    var b = p(a);b.da || (b.da = !0, ua(a, Xa), window.customElements && window.customElements.polyfillWrapFlushCallback && !t.j || ua(a, Ya));
  };var db = "__eventWrappers" + Date.now(),
      eb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      fb = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function gb(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.w;
    } else b = !!a, d = c = !1;return { aa: e, capture: b, once: c, passive: d, Z: fb ? a : b };
  }
  var hb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      ib = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function jb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function kb(a, b) {
    var c = [],
        d = a;for (a = jb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function lb(a) {
    a.__composedPath || (a.__composedPath = kb(a.target, !0));return a.__composedPath;
  }function mb(a, b) {
    if (!w) return a;a = kb(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = jb(d), f !== e && (g = a.indexOf(f), e = f), !w(f) || -1 < g) return d;
  }
  function nb(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var ob = { focus: !0, blur: !0 };function pb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function qb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!pb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function rb(a) {
    var b = a.composedPath(),
        c = b.map(function (l) {
      return mb(l, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;qb(a, g, "capture");if (a.N) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, qb(a, g, "bubble"), a.N) return;
    }e = 0;g = null;
  }function sb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          l = h.type,
          k = h.capture,
          m = h.once,
          r = h.passive;if (b === h.node && c === l && d === k && e === m && f === r) return g;
    }return -1;
  }function tb(a) {
    za();return !t.D && this instanceof Node && !oa(document, this) ? (a.__target || ub(a, this), rb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function vb(a, b, c) {
    var d = gb(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.aa;d = d.Z;if (b) {
      var l = typeof b;if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
        if (ib[a]) return this.__shady_native_addEventListener(a, b, d);var k = h || this;if (h = b[db]) {
          if (-1 < sb(h, k, a, e, f, g)) return;
        } else b[db] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || ub(m);if (k !== this) {
            var r = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });var u = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!w(k) && "slot" !== k.localName || -1 != m.composedPath().indexOf(k)) if (m.composed || -1 < m.composedPath().indexOf(k)) if (pb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === k || k instanceof Window) {
            var L = "function" === l ? b.call(k, m) : b.handleEvent && b.handleEvent(m);k !== this && (r ? (Object.defineProperty(m, "currentTarget", r), r = null) : delete m.currentTarget, u ? (Object.defineProperty(m, "eventPhase", u), u = null) : delete m.eventPhase);return L;
          }
        };b[db].push({ node: k, type: a, capture: e, once: f, passive: g, ya: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        ob[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function wb(a, b, c) {
    if (b) {
      var d = gb(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.aa;d = d.Z;if (ib[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var l = null;try {
        l = b[db];
      } catch (k) {}l && (e = sb(l, h, a, c, e, f), -1 < e && (g = l.splice(e, 1)[0].ya, l.length || (b[db] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function xb() {
    for (var a in ob) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (ub(b), rb(b));
    }, !0);
  }
  var yb = z({ get composed() {
      void 0 === this.__composed && (eb ? this.__composed = "focusin" === this.type || "focusout" === this.type || eb(this) : !1 !== this.isTrusted && (this.__composed = hb[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = kb(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return mb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = kb(this.__relatedTarget, !0));return mb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.N = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.N = this.__immediatePropagationStopped = !0;
    } });
  function ub(a, b) {
    b = void 0 === b ? a.target : b;a.__target = b;a.__relatedTarget = a.relatedTarget;if (t.h) {
      b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;y(c, yb);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else y(a, yb);
  }var zb = nb(Event),
      Ab = nb(CustomEvent),
      Bb = nb(MouseEvent);
  function Cb() {
    if (!eb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Db = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  }),
      Eb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Fb(a) {
    return { set: function (b) {
        var c = p(this),
            d = a.substring(2);c.v || (c.v = {});c.v[a] && this.removeEventListener(d, c.v[a]);this.__shady_addEventListener(d, b);c.v[a] = b;
      }, get: function () {
        var b = q(this);return b && b.v && b.v[a];
      }, configurable: !0 };
  };function Gb(a, b) {
    return { index: a, F: [], I: b };
  }
  function Hb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;g = l;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var k = c.length, m = 0; m < l - g && Ib(a[--h], c[--k]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Gb(e, 0); f < d;) b.F.push(c[f++]);return [b];
    }if (f == d) return [Gb(e, b - e)];l = e;g = f;d = d - g + 1;h = b - l + 1;b = Array(d);for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;for (k = 0; k < h; k++) b[0][k] = k;for (k = 1; k < d; k++) for (m = 1; m < h; m++) if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1];else {
      var r = b[k - 1][m] + 1,
          u = b[k][m - 1] + 1;b[k][m] = r < u ? r : u;
    }l = b.length - 1;g = b[0].length - 1;d = b[l][g];for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], r = k < m ? k < h ? k : h : m < h ? m : h, r == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : r == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m));a.reverse();b = void 0;l = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (l.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Gb(e, 0));b.I++;e++;b.F.push(c[f]);f++;break;case 2:
        b || (b = Gb(e, 0));
        b.I++;e++;break;case 3:
        b || (b = Gb(e, 0)), b.F.push(c[f]), f++;}b && l.push(b);return l;
  }function Ib(a, b) {
    return a === b;
  };var Jb = z({ dispatchEvent: tb, addEventListener: vb, removeEventListener: wb });var Kb = null;function D() {
    Kb || (Kb = window.ShadyCSS && window.ShadyCSS.ScopingShim);return Kb || null;
  }function Lb(a, b, c) {
    var d = D();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function Mb(a, b) {
    var c = D();c && c.unscopeNode(a, b);
  }function Nb(a, b) {
    var c = D();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Nb(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Ob(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = D();return b ? b.currentScopeForNode(a) : "";
  }function Pb(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Pb(a, b);
  };var Qb = window.document,
      Rb = t.D,
      Sb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Tb = Sb && Sb.get;function Ub(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Vb(a) {
    var b = q(a);if (b && void 0 !== b.M) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Vb(b);if (a = q(a)) a.M = void 0;
  }function Wb(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = q(a);(c = c && c.B) && (b = c.length ? c[0] : Wb(a.__shady_nextSibling));
    }return b;
  }
  function Xb(a, b, c) {
    if (a = (a = q(a)) && a.C) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Ba(a);
    }
  }
  var bc = z({ get parentNode() {
      var a = q(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = q(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = q(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = q(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = q(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (v(this)) {
        var a = q(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = q(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (Tb && Tb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (null === a || oa(a, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (w(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (v(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!v(this) && t.h) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Ub(this);this.__shady_native_textContent = a;
          } else Ub(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Qb && a.ownerDocument !== Qb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = q(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Xb(this, a);var d = [],
          e = (c = E(this)) ? c.host.localName : Ob(this),
          f = a.__shady_parentNode;if (f) {
        var g = Ob(a);var h = !!c || !E(a) || Rb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var l = (!Rb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Nb(a, e),
          k = c && !a.__noInsertionPoint && (!Rb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (k || l) l && (g = g || Ob(a)), Pb(a, function (m) {
        k && "slot" === m.localName && d.push(m);if (l) {
          var r = g;D() && (r && Mb(m, r), (r = D()) && r.scopeNode(m, e));
        }
      });d.length && (Yb(c), c.c.push.apply(c.c, d instanceof Array ? d : ca(ba(d))), F(c));v(this) && (Zb(a, this, b), h = q(this), h.root ? (f = !1, ha(this) && F(h.root)) : c && "slot" === this.localName && (f = !1, F(c)));f ? (c = w(this) ? this.host : this, b ? (b = Wb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !w(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Qb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Xb(this, null, a);var c = E(a),
          d = c && $b(c, a),
          e = q(this);if (v(this) && (ac(a, this), ha(this))) {
        F(e.root);
        var f = !0;
      }if (D() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Ob(a);Pb(a, function (h) {
          Mb(h, g);
        });
      }Vb(a);c && ((b = "slot" === this.localName) && (f = !0), (d || b) && F(c));f || (f = w(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);var b = this.__shady_native_cloneNode(!1);
      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = p(this),
            c = b.M;void 0 === c && (w(this) ? (c = this, b.M = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.M = c)));return c;
      }
    }, contains: function (a) {
      return pa(this, a);
    } });var dc = z({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && cc(a);return (a = q(this)) && a.assignedSlot || null;
    } });function ec(a, b, c) {
    var d = [];fc(a, b, c, d);return d;
  }function fc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            l = f(e);l && h.push(e);g && g(l) ? e = l : (fc(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var G = z({ get firstElementChild() {
      var a = q(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = q(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return v(this) ? qa(Array.prototype.filter.call(sa(this), function (a) {
        return a.nodeType === Node.ELEMENT_NODE;
      })) : this.__shady_native_children;
    }, get childElementCount() {
      var a = this.__shady_children;return a ? a.length : 0;
    } }),
      gc = z({ querySelector: function (a) {
      return ec(this, function (b) {
        return ja.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return qa(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return qa(ec(this, function (d) {
        return ja.call(d, a);
      }));
    } }),
      hc = t.D && !t.j ? va({}, G) : G;va(G, gc);var ic = window.document;function jc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ha(a) && F(q(a).root);else if ("slot" === a.localName && "name" === b && (b = E(a))) {
      if (b.a) {
        kc(b);var c = a.fa,
            d = lc(a);if (d !== c) {
          c = b.b[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.b[d] || (b.b[d] = []);c.push(a);1 < c.length && (b.b[d] = mc(c));
        }
      }F(b);
    }
  }
  var nc = z({ get previousElementSibling() {
      var a = q(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = q(this);if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_nextElementSibling;
    }, get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    }, get className() {
      return this.getAttribute("class") || "";
    }, set className(a) {
      this.__shady_setAttribute("class", a);
    }, setAttribute: function (a, b) {
      this.ownerDocument !== ic ? this.__shady_native_setAttribute(a, b) : Lb(this, a, b) || (this.__shady_native_setAttribute(a, b), jc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== ic ? this.__shady_native_removeAttribute(a) : Lb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), jc(this, a));
    } });t.D || Db.forEach(function (a) {
    nc[a] = Fb(a);
  });
  var sc = z({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !t.ca) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;oc(b, this, a);pc(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;Yb(c);c.c.push.apply(c.c, a instanceof Array ? a : ca(ba(a)));F(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new qc(rc, this, a);return this.__CE_shadowRoot = b;
    },
    get shadowRoot() {
      var a = q(this);return a && a.ra || null;
    } });va(nc, sc);var tc = document.implementation.createHTMLDocument("inert"),
      uc = z({ get innerHTML() {
      return v(this) ? Ma("template" === this.localName ? this.content : this, sa) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Ub(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== tc.namespaceURI ? tc.createElementNS(this.namespaceURI, b) : tc.createElement(b);for (t.h ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var vc = z({ blur: function () {
      var a = q(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });t.D || Eb.forEach(function (a) {
    vc[a] = Fb(a);
  });var wc = z({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && w(b) && cc(b);return (b = q(this)) ? (a && a.flatten ? b.B : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) vb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) wb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var xc = z({ getElementById: function (a) {
      return "" === a ? null : ec(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });var yc = z({ get activeElement() {
      var a = t.h ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!w(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = E(a); b && b !== this;) a = b.host, b = E(a);return this === document ? b ? null : a : b === this ? a : null;
    } });var zc = window.document,
      Ac = z({ importNode: function (a, b) {
      if (a.ownerDocument !== zc || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Bc = z({ dispatchEvent: tb, addEventListener: vb.bind(window), removeEventListener: wb.bind(window) });var H = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (H.parentElement = bc.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (H.contains = bc.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (H.children = G.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (H.innerHTML = uc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (H.className = nc.className);
  var I = { EventTarget: [Jb], Node: [bc, window.EventTarget ? null : Jb], Text: [dc], Comment: [dc], CDATASection: [dc], ProcessingInstruction: [dc], Element: [nc, G, dc, !t.h || "innerHTML" in Element.prototype ? uc : null, window.HTMLSlotElement ? null : wc], HTMLElement: [vc, H], HTMLSlotElement: [wc], DocumentFragment: [hc, xc], Document: [Ac, hc, xc, yc], Window: [Bc] },
      Cc = t.h ? null : ["innerHTML", "textContent"];function J(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && y(a, e, c, d);
    });
  }
  function Dc(a) {
    var b = a ? null : Cc,
        c;for (c in I) J(window[c] && window[c].prototype, I[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;J(c, I.EventTarget);J(c, I.Node);I[a] && J(c, I[a]);b.prototype.__shady_patchedProto = c;
  });function Ec(a) {
    a.__shady_protoIsPatched = !0;J(a, I.EventTarget);J(a, I.Node);J(a, I.Element);J(a, I.HTMLElement);J(a, I.HTMLSlotElement);return a;
  };var Fc = t.T,
      Gc = t.h;function Hc(a, b) {
    if (Fc && !a.__shady_protoIsPatched && !w(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), Ec(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }Gc || (1 === b ? bb(a) : 2 === b && cb(a));
  }
  function Ic(a, b, c, d) {
    Hc(a, 1);d = d || null;var e = p(a),
        f = d ? p(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = q(e.previousSibling)) f.nextSibling = a;if (f = q(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function Zb(a, b, c) {
    Hc(b, 2);var d = p(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Ic(a, b, d, c);else Ic(a, b, d, c);
  }
  function ac(a, b) {
    var c = p(a);b = p(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (p(a).nextSibling = d);d && (p(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function pc(a, b) {
    var c = p(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;Hc(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = p(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Hc(c, 1);
      }
    }
  };var Jc = z({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_removeEventListener(a, b, c);
    } });function Kc(a, b) {
    y(a, Jc, b);y(a, yc, b);y(a, uc, b);y(a, G, b);t.j && !b ? (y(a, bc, b), y(a, xc, b)) : t.h || (y(a, Za), y(a, Xa), y(a, Ya));
  };var rc = {},
      K = t.deferConnectionCallbacks && "loading" === document.readyState,
      Lc;function Mc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function qc(a, b, c) {
    if (a !== rc) throw new TypeError("Illegal constructor");this.a = null;oc(this, b, c);
  }
  function oc(a, b, c) {
    a.host = b;a.mode = c && c.mode;pc(a.host);b = p(a.host);b.root = a;b.ra = "closed" !== a.mode ? a : null;b = p(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (t.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else F(a);
  }function F(a) {
    a.A || (a.A = !0, ya(function () {
      return cc(a);
    }));
  }
  function cc(a) {
    var b;if (b = a.A) {
      for (var c; a;) a: {
        a.A && (c = a), b = a;a = b.host.__shady_getRootNode();if (w(a) && (b = q(b.host)) && 0 < b.H) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  qc.prototype._renderSelf = function () {
    var a = K;K = !0;this.A = !1;if (this.a) {
      kc(this);for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];var d = q(c),
            e = d.assignedNodes;d.assignedNodes = [];d.B = [];if (d.W = e) for (d = 0; d < e.length; d++) {
          var f = q(e[d]);f.O = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Nc(this, b);for (b = 0; b < this.a.length; b++) {
        c = this.a[b];e = q(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Nc(this, d, c);
        (d = (d = q(c.__shady_parentNode)) && d.root) && (ia(d) || d.A) && d._renderSelf();Oc(this, e.B, e.assignedNodes);if (d = e.W) {
          for (f = 0; f < d.length; f++) q(d[f]).O = null;e.W = null;d.length > e.assignedNodes.length && (e.P = !0);
        }e.P && (e.P = !1, Pc(this, c));
      }c = this.a;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = q(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = q(f).B, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = ra(e);g = Hb(d, d.length, f, f.length);for (var l = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
          for (var m = 0, r = void 0; m < k.F.length && (r = k.F[m]); m++) r.__shady_native_parentNode === e && e.__shady_native_removeChild(r), f.splice(k.index + l, 1);l -= k.I;
        }l = 0;for (k = void 0; l < g.length && (k = g[l]); l++) for (h = f[k.index], m = k.index; m < k.index + k.I; m++) r = d[m], e.__shady_native_insertBefore(r, h), f.splice(m, 0, r);
      }
    }if (!t.preferPerformance && !this.V) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = q(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.V = !0;K = a;Lc && Lc();
  };function Nc(a, b, c) {
    var d = p(b),
        e = d.O;d.O = null;c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);c ? (p(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (p(d.assignedSlot).P = !0);
  }function Oc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = q(e).assignedNodes;f && f.length && Oc(a, b, f);
    } else b.push(c[d]);
  }
  function Pc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = q(b);b.assignedSlot && Pc(a, b.assignedSlot);
  }function Yb(a) {
    a.c = a.c || [];a.a = a.a || [];a.b = a.b || {};
  }function kc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];pc(e);var f = e.__shady_parentNode;pc(f);f = q(f);f.H = (f.H || 0) + 1;f = lc(e);a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];a.a.push(e);
      }if (c) for (var g in c) a.b[g] = mc(a.b[g]);a.c = [];
    }
  }
  function lc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.fa = b;
  }function mc(a) {
    return a.sort(function (b, c) {
      b = Mc(b);for (var d = Mc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = sa(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function $b(a, b) {
    if (a.a) {
      kc(a);var c = a.b,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (pa(b, g)) {
          e.splice(f, 1);var h = a.a.indexOf(g);0 <= h && (a.a.splice(h, 1), (h = q(g.__shady_parentNode)) && h.H && h.H--);f--;g = q(g);if (h = g.B) for (var l = 0; l < h.length; l++) {
            var k = h[l],
                m = k.__shady_native_parentNode;m && m.__shady_native_removeChild(k);
          }g.B = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ia(a) {
    kc(a);return !(!a.a || !a.a.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;Kc(a, "__shady_");Kc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(qc.prototype);
  if (window.customElements && window.customElements.define && t.R && !t.preferPerformance) {
    var Qc = new Map();Lc = function () {
      var a = [];Qc.forEach(function (d, e) {
        a.push([e, d]);
      });Qc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };K && document.addEventListener("readystatechange", function () {
      K = !1;Lc();
    }, { once: !0 });var Rc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        K ? Qc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        K ? this.isConnected || Qc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        Sc = window.customElements.define,
        Tc = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;Sc.call(window.customElements, a, Rc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = Tc;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Tc, configurable: !0 });
  }function E(a) {
    a = a.__shady_getRootNode();if (w(a)) return a;
  };function M(a) {
    this.node = a;
  }n = M.prototype;n.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };n.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };n.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };n.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };n.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };n.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  n.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };n.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };n.contains = function (a) {
    return this.node.__shady_contains(a);
  };n.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };n.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };n.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };n.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };n.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  n.focus = function () {
    this.node.__shady_native_focus();
  };n.blur = function () {
    this.node.__shady_blur();
  };n.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };n.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };n.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };n.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  n.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };
  da.Object.defineProperties(M.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (w(this.node)) return this.node.host;
      } }, parentNode: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_parentNode;
      } }, firstChild: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_firstChild;
      } }, lastChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastChild;
      } }, nextSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextSibling;
      } }, previousSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousSibling;
      } }, childNodes: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childNodes;
      } }, parentElement: { configurable: !0, enumerable: !0,
      get: function () {
        return this.node.__shady_parentElement;
      } }, firstElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_firstElementChild;
      } }, lastElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastElementChild;
      } }, nextElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextElementSibling;
      } }, previousElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousElementSibling;
      } },
    children: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_children;
      } }, childElementCount: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childElementCount;
      } }, shadowRoot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_shadowRoot;
      } }, assignedSlot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_assignedSlot;
      } }, isConnected: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_isConnected;
      } }, innerHTML: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_innerHTML;
      }, set: function (a) {
        this.node.__shady_innerHTML = a;
      } }, textContent: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_textContent;
      }, set: function (a) {
        this.node.__shady_textContent = a;
      } }, slot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_slot;
      }, set: function (a) {
        this.node.__shady_slot = a;
      } }, className: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_className;
      }, set: function (a) {
        return this.node.__shady_className = a;
      } } });function Uc(a) {
    Object.defineProperty(M.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Db.forEach(function (a) {
    return Uc(a);
  });Eb.forEach(function (a) {
    return Uc(a);
  });var Vc = new WeakMap();function Wc(a) {
    if (w(a) || a instanceof M) return a;var b = Vc.get(a);b || (b = new M(a), Vc.set(a, b));return b;
  };if (t.R) {
    var Xc = t.h ? function (a) {
      return a;
    } : function (a) {
      cb(a);bb(a);return a;
    },
        ShadyDOM = { inUse: t.R, patch: Xc, isShadyRoot: w, enqueue: ya, flush: za, flushInitial: function (a) {
        !a.V && a.A && cc(a);
      }, settings: t, filterMutations: Ea, observeChildren: Ca, unobserveChildren: Da, deferConnectionCallbacks: t.deferConnectionCallbacks, preferPerformance: t.preferPerformance, handlesDynamicScoping: !0, wrap: t.j ? Wc : Xc, wrapIfNeeded: !0 === t.j ? Wc : function (a) {
        return a;
      }, Wrapper: M, composedPath: lb, noPatch: t.j, patchOnDemand: t.T, nativeMethods: Oa,
      nativeTree: Pa, patchElementProto: Ec };window.ShadyDOM = ShadyDOM;Wa();Dc("__shady_");Object.defineProperty(document, "_activeElement", yc.activeElement);y(Window.prototype, Bc, "__shady_");t.j ? t.T && y(Element.prototype, sc) : (Dc(), Cb());xb();window.Event = zb;window.CustomEvent = Ab;window.MouseEvent = Bb;window.ShadowRoot = qc;
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function Yc() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function Zc(a) {
    var b = a = a.replace($c, "").replace(ad, ""),
        c = new Yc();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new Yc();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return bd(c, a);
  }
  function bd(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = cd(c), c = c.replace(dd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ed : c.match(fd) && (a.type = gd, a.keyframesName = a.selector.split(dd).pop()) : a.type = 0 === c.indexOf("--") ? hd : id);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) bd(f, b);return a;
  }function cd(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function jd(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = jd(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(kd, "").replace(ld, ""), b = b.replace(md, "").replace(nd, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var id = 1,
      gd = 7,
      ed = 4,
      hd = 1E3,
      $c = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      ad = /@import[^;]*;/gim,
      kd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      ld = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      md = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      nd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      fd = /^@[^\s]*keyframes/,
      dd = /\s+/g;var N = !(window.ShadyDOM && window.ShadyDOM.inUse),
      od;function pd(a) {
    od = a && a.shimcssproperties ? !1 : N || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var qd;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (qd = window.ShadyCSS.cssBuild);var O = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? od = window.ShadyCSS.nativeCss : window.ShadyCSS ? (pd(window.ShadyCSS), window.ShadyCSS = void 0) : pd(window.WebComponents && window.WebComponents.flags);var P = od;var rd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      sd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      td = /(--[\w-]+)\s*([:,;)]|$)/gi,
      ud = /(animation\s*:)|(animation-name\s*:)/,
      vd = /@media\s(.*)/,
      wd = /\{[^}]*\}/g;var xd = new Set();function Q(a, b) {
    if (!a) return "";"string" === typeof a && (a = Zc(a));b && R(a, b);return jd(a, P);
  }function yd(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Zc(a.textContent));return a.__cssRules || null;
  }function zd(a) {
    return !!a.parent && a.parent.type === gd;
  }function R(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === ed) {
        var g = a.selector.match(vd);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === id ? b(a) : c && f === gd ? c(a) : f === hd && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) R(g, b, c, d);
    }
  }
  function Ad(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Bd(e, c, d);return e;
  }var S = null;function Cd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (S ? S.nextSibling : null) || b.firstChild);return S = a;
  }function Bd(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);S ? a.compareDocumentPosition(S) === Node.DOCUMENT_POSITION_PRECEDING && (S = a) : S = a;
  }
  function Dd(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Ed(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Dd(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Ed(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Fd(a, b) {
    N ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Gd = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function T(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, G: c };
  }function Hd(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Dd(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function U(a) {
    if (void 0 !== qd) return qd;if (void 0 === a.__cssBuild) {
      var b = a.getAttribute("css-build");if (b) a.__cssBuild = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.__cssBuild = b;
      }
    }return a.__cssBuild || "";
  }
  function Id(a) {
    a = void 0 === a ? "" : a;return "" !== a && P ? N ? "shadow" === a : "shady" === a : !1;
  };function Jd() {}function Kd(a, b) {
    Ld(V, a, function (c) {
      W(c, b || "");
    });
  }function Ld(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) Ld(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Fd(a, b)) : Fd(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Md(a, b, c) {
    Ld(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function Nd(a, b) {
    Ld(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function Od(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (N || "shady" === (void 0 === d ? "" : d) ? e = Q(b, c) : (a = T(a), e = Pd(f, b, a.is, a.G, c) + "\n\n"));return e.trim();
  }function Pd(a, b, c, d, e) {
    var f = Qd(c, d);c = c ? "." + c : "";return Q(b, function (g) {
      g.c || (g.selector = g.g = Rd(a, g, a.b, c, f), g.c = !0);e && e(g, c, f);
    });
  }function Qd(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function Rd(a, b, c, d, e) {
    var f = Hd(b.selector);if (!zd(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (l) {
      return !!l;
    }).join(",");
  }function Sd(a) {
    return a.replace(Td, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function Ud(a) {
    for (var b = [], c; c = a.match(Vd);) {
      var d = c.index,
          e = Dd(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { U: a, matches: b };
  }function Wd(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Jd.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = Td.test(a);e && (a = a.replace(Td, function (h, l, k) {
      return ":" + l + "(" + k.replace(/\s/g, "") + ")";
    }), a = Sd(a));var f = Vd.test(a);if (f) {
      var g = Ud(a);a = g.U;g = g.matches;
    }a = a.replace(Xd, ":host $1");a = a.replace(Yd, function (h, l, k) {
      d || (h = Zd(k, l, b, c), d = d || h.stop, l = h.ka, k = h.value);return l + k;
    });f && (a = Wd(a, g));e && (a = Sd(a));return a = a.replace($d, function (h, l, k, m) {
      return '[dir="' + k + '"] ' + l + m + ", " + l + '[dir="' + k + '"]' + m;
    });
  };
  function Zd(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = ae(a, d) : 0 !== e && (a = c ? be(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(ce, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, ka: b, stop: f };
  }function be(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function ae(a, b) {
    var c = a.match(de);return (c = c && c[2].trim() || "") ? c[0].match(ee) ? a.replace(de, function (d, e, f) {
      return b + f;
    }) : c.split(ee)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function fe(a) {
    ":root" === a.selector && (a.selector = "html");
  }Jd.prototype.c = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : be(a.trim(), ":not(.style-scope)");
  };da.Object.defineProperties(Jd.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var Td = /:(nth[-\w]+)\(([^)]+)\)/,
      Yd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      ee = /[[.:#*]/,
      Xd = /^(::slotted)/,
      de = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ce = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      $d = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      Vd = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new Jd();function ge(a, b, c, d, e) {
    this.o = a || null;this.b = b || null;this.S = c || [];this.l = null;this.cssBuild = e || "";this.G = d || "";this.a = this.m = this.u = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function he(a, b) {
    return a.__styleInfo = b;
  }ge.prototype.c = function () {
    return this.o;
  };ge.prototype._getStyleRules = ge.prototype.c;function ie(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var je = /:host\s*>\s*/,
      ke = navigator.userAgent.match("Trident");function le() {}function me(a) {
    var b = {},
        c = [],
        d = 0;R(a, function (f) {
      ne(f);f.index = d++;f = f.f.cssText;for (var g; g = td.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function ne(a) {
    if (!a.f) {
      var b = {},
          c = {};oe(a, c) && (b.s = c, a.rules = null);b.cssText = a.parsedCssText.replace(wd, "").replace(rd, "");a.f = b;
    }
  }function oe(a, b) {
    var c = a.f;if (c) {
      if (c.s) return Object.assign(b, c.s), !0;
    } else {
      c = a.parsedCssText;for (var d; a = rd.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function pe(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? qe(a, b, c) : Ed(b, function (d, e, f, g) {
      if (!e) return d + g;(e = pe(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = pe(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function qe(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      sd.lastIndex = 0;if (f = sd.exec(e)) e = pe(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = pe(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function re(a, b) {
    var c = {},
        d = [];R(a, function (e) {
      e.f || ne(e);var f = e.g || e.parsedSelector;b && e.f.s && f && ie.call(b, f) && (oe(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { s: c, key: d };
  }
  function se(a, b, c, d) {
    b.f || ne(b);if (b.f.s) {
      var e = T(a);a = e.is;e = e.G;e = a ? Qd(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(je) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.g || (b.g = Rd(V, b, V.b, a ? "." + a : "", e)), c = b.g || e), g && "html" === e && (c = b.g || b.K), d({ U: c, pa: h, za: g });
    }
  }
  function te(a, b, c) {
    var d = {},
        e = {};R(b, function (f) {
      se(a, f, c, function (g) {
        ie.call(a._element || a, g.U) && (g.pa ? oe(f, d) : oe(f, e));
      });
    }, null, !0);return { sa: e, oa: d };
  }
  function ue(a, b, c, d) {
    var e = T(b),
        f = Qd(e.is, e.G),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.o;h = h.cssBuild;var l = ve(e, d);return Od(b, e, function (k) {
      var m = "";k.f || ne(k);k.f.cssText && (m = qe(a, k.f.cssText, c));k.cssText = m;if (!N && !zd(k) && k.cssText) {
        var r = m = k.cssText;null == k.Y && (k.Y = ud.test(m));if (k.Y) if (null == k.L) {
          k.L = [];for (var u in l) r = l[u], r = r(m), m !== r && (m = r, k.L.push(u));
        } else {
          for (u = 0; u < k.L.length; ++u) r = l[k.L[u]], m = r(m);r = m;
        }k.cssText = r;k.g = k.g || k.selector;
        m = "." + d;u = Hd(k.g);r = 0;for (var L = u.length, Ja = void 0; r < L && (Ja = u[r]); r++) u[r] = Ja.match(g) ? Ja.replace(f, m) : m + " " + Ja;k.selector = u.join(",");
      }
    }, h);
  }function ve(a, b) {
    a = a.b;var c = {};if (!N && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.i = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.g = f.g || f.selector;f.selector = f.g.replace(f.keyframesName, f.a);c[e.keyframesName] = we(e);
    }return c;
  }function we(a) {
    return function (b) {
      return b.replace(a.i, a.a);
    };
  }
  function xe(a, b) {
    var c = ye,
        d = yd(a);a.textContent = Q(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.f && e.f.cssText && (f = f.replace(kd, "").replace(ld, ""), e.cssText = qe(c, f, b));
    });
  }da.Object.defineProperties(le.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var ye = new le();var ze = {},
      Ae = window.customElements;if (Ae && !N && !O) {
    var Be = Ae.define;Ae.define = function (a, b, c) {
      ze[a] || (ze[a] = Cd(a));Be.call(Ae, a, b, c);
    };
  };function Ce() {
    this.cache = {};
  }Ce.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ s: b, styleElement: c, m: d });100 < e.length && e.shift();this.cache[a] = e;
  };function De() {}var Ee = new RegExp(V.a + "\\s*([^\\s]*)");function Fe(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Ee)) ? a[1] : "";
  }function Ge(a) {
    var b = Gd(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? T(a).is : "";
  }
  function He(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Fe(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === U(e))) Nd(e, g);else if (f instanceof ShadowRoot) for (f = Ge(e), f !== g && Md(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Ge(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(N || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Ie = new MutationObserver(He),
        Je = function (a) {
      Ie.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Je(document);else {
      var Ke = function () {
        Je(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Ke) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Ke();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Ke();
      });
    }De = function () {
      He(Ie.takeRecords());
    };
  };var Le = {};var Me = Promise.resolve();function Ne(a) {
    if (a = Le[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Oe(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Pe(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, Me.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var Qe = {},
      Re = new Ce();function Y() {
    this.X = {};this.c = document.documentElement;var a = new Yc();a.rules = [];this.i = he(this.c, new ge(a));this.K = !1;this.a = this.b = null;
  }n = Y.prototype;n.flush = function () {
    De();
  };n.ma = function (a) {
    return yd(a);
  };n.wa = function (a) {
    return Q(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !O) {
      N || ze[b] || (ze[b] = Cd(b));a._prepared = !0;a.name = b;a.extends = c;Le[b] = a;var d = U(a),
          e = Id(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var l = g[h];if (l.hasAttribute("shady-unscoped")) {
          if (!N) {
            var k = l.textContent;if (!xd.has(k)) {
              xd.add(k);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = k;document.head.appendChild(m);
            }l.parentNode.removeChild(l);
          }
        } else f.push(l.textContent), l.parentNode.removeChild(l);
      }f = f.join("").trim() + (Qe[b] || "");Se(this);if (!e) {
        if (g = !d) g = sd.test(f) || rd.test(f), sd.lastIndex = 0, rd.lastIndex = 0;h = Zc(f);g && P && this.b && this.b.transformRules(h, b);a._styleAst = h;
      }g = [];P || (g = me(a._styleAst));if (!g.length || P) h = N ? a.content : null, b = ze[b] || null, d = Od(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Ad(d, c.is, h, b) : null, a._style = d;a.a = g;
    }
  };n.qa = function (a, b) {
    Qe[b] = a.join(" ");
  };
  n.prepareTemplateDom = function (a, b) {
    if (!O) {
      var c = U(a);N || "shady" === c || a._domPrepared || (a._domPrepared = !0, Kd(a.content, b));
    }
  };function Te(a) {
    var b = T(a),
        c = b.is;b = b.G;var d = ze[c] || null,
        e = Le[c];if (e) {
      c = e._styleAst;var f = e.a;e = U(e);b = new ge(c, d, f, b, e);he(a, b);return b;
    }
  }
  function Ue(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
      a.ba(b);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.a.enqueued || a.K) && a.flushCustomStyles();
      });
    });
  }function Se(a) {
    if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.b = window.ShadyCSS.ApplyShim;a.b.invalidCallback = Ne;var b = !0;
    } else b = !1;Ue(a);return b;
  }
  n.flushCustomStyles = function () {
    if (!O) {
      var a = Se(this);if (this.a) {
        var b = this.a.processStyles();if ((a || this.a.enqueued) && !Id(this.i.cssBuild)) {
          if (P) {
            if (!this.i.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.a.getStyleForCustomStyle(b[a]);if (c && P && this.b) {
                var d = yd(c);Se(this);this.b.transformRules(d);c.textContent = Q(d);
              }
            }
          } else {
            Ve(this, b);We(this, this.c, this.i);for (a = 0; a < b.length; a++) (c = this.a.getStyleForCustomStyle(b[a])) && xe(c, this.i.u);this.K && this.styleDocument();
          }this.a.enqueued = !1;
        }
      }
    }
  };
  function Ve(a, b) {
    b = b.map(function (c) {
      return a.a.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.i.o.rules = b.map(function (c) {
      return yd(c);
    });
  }
  n.styleElement = function (a, b) {
    if (O) {
      if (b) {
        X(a) || he(a, new ge(null));var c = X(a);c.l = c.l || {};Object.assign(c.l, b);Xe(this, a, c);
      }
    } else if (c = X(a) || Te(a)) if (a !== this.c && (this.K = !0), b && (c.l = c.l || {}, Object.assign(c.l, b)), P) Xe(this, a, c);else if (this.flush(), We(this, a, c), c.S && c.S.length) {
      b = T(a).is;var d;a: {
        if (d = Re.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.S;for (var h = 0; h < g.length; h++) {
              var l = g[h];if (f.s[l] !== c.u[l]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.m;
      (f = d && d.m) || (f = this.X[b] = (this.X[b] || 0) + 1, f = b + "-" + f);c.m = f;f = c.m;h = ye;h = g ? g.textContent || "" : ue(h, a, c.u, f);l = X(a);var k = l.a;k && !N && k !== g && (k._useCount--, 0 >= k._useCount && k.parentNode && k.parentNode.removeChild(k));N ? l.a ? (l.a.textContent = h, g = l.a) : h && (g = Ad(h, f, a.shadowRoot, l.b)) : g ? g.parentNode || (ke && -1 < h.indexOf("@media") && (g.textContent = h), Bd(g, null, l.b)) : h && (g = Ad(h, f, null, l.b));g && (g._useCount = g._useCount || 0, l.a != g && g._useCount++, l.a = g);f = g;N || (g = c.m, l = h = a.getAttribute("class") || "", e && (l = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), l += (l ? " " : "") + "x-scope " + g, h !== l && Fd(a, l));d || Re.store(b, c.u, f, c.m);
    }
  };
  function Xe(a, b, c) {
    var d = T(b).is;if (c.l) {
      var e = c.l,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = Le[d];if (!(!e && b !== a.c || e && "" !== U(e)) && e && e._style && !Oe(e)) {
      if (Oe(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Se(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Od(b, c.o), Pe(e);N && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Od(b, c.o));c.o = e._styleAst;
    }
  }
  function Ye(a, b) {
    return (b = Gd(b).getRootNode().host) ? X(b) || Te(b) ? b : Ye(a, b) : a.c;
  }function We(a, b, c) {
    var d = Ye(a, b),
        e = X(d),
        f = e.u;d === a.c || f || (We(a, d, e), f = e.u);a = Object.create(f || null);d = te(b, c.o, c.cssBuild);b = re(e.o, b).s;Object.assign(a, d.oa, b, d.sa);b = c.l;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = ye;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = pe(g, a[d], a);c.u = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = Gd(a),
        d = c.shadowRoot,
        e = a === this.c;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Gd(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ba = function (a) {
    var b = this,
        c = U(a);c !== this.i.cssBuild && (this.i.cssBuild = c);if (!Id(c)) {
      var d = yd(a);R(d, function (e) {
        if (N) fe(e);else {
          var f = V;e.selector = e.parsedSelector;fe(e);e.selector = e.g = Rd(f, e, f.c, void 0, void 0);
        }P && "" === c && (Se(b), b.b && b.b.transformRule(e));
      });P ? a.textContent = Q(d) : this.i.o.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;P || (c = (X(a) || X(Ye(this, a))).u[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.va = function (a, b) {
    var c = Gd(a).getRootNode(),
        d;b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];b = c.host && c.host.localName;if (!b && (c = a.getAttribute("class"))) {
      c = c.split(/\s/);for (var e = 0; e < c.length; e++) if (c[e] === V.a) {
        b = c[e + 1];break;
      }
    }b && d.push(V.a, b);P || (b = X(a)) && b.m && d.push(ye.a, b.m);Fd(a, d.join(" "));
  };n.ja = function (a) {
    return X(a);
  };n.ua = function (a, b) {
    W(a, b);
  };n.xa = function (a, b) {
    W(a, b, !0);
  };n.ta = function (a) {
    return Ge(a);
  };n.la = function (a) {
    return Fe(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.va;Y.prototype._styleInfoForNode = Y.prototype.ja;Y.prototype.transformCustomStyleForDocument = Y.prototype.ba;Y.prototype.getStyleAst = Y.prototype.ma;Y.prototype.styleAstToString = Y.prototype.wa;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.ua;Y.prototype.unscopeNode = Y.prototype.xa;Y.prototype.scopeForNode = Y.prototype.ta;Y.prototype.currentScopeForNode = Y.prototype.la;Y.prototype.prepareAdoptedCssText = Y.prototype.qa;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return N;
      } }, nativeCss: { get: function () {
        return P;
      } } });var Z = new Y(),
      Ze,
      $e;window.ShadyCSS && (Ze = window.ShadyCSS.ApplyShim, $e = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: P, nativeShadow: N, cssBuild: qd, disableRuntime: O };Ze && (window.ShadyCSS.ApplyShim = Ze);$e && (window.ShadyCSS.CustomStyleInterface = $e);
}).call(this);

//# sourceMappingURL=webcomponents-sd.js.map