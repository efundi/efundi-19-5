/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce
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
  }function r(a) {
    return a && a.__shady;
  };var t = window.ShadyDOM || {};t.Aa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.h = !!(fa && fa.configurable && fa.get);t.ca = t.force || !t.Aa;t.j = t.noPatch || !1;t.J = t.preferPerformance;t.ea = "on-demand" === t.j;t.qa = navigator.userAgent.match("Trident");function u(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }function w(a) {
    return a instanceof ShadowRoot;
  }function ha(a) {
    return (a = (a = r(a)) && a.root) && ia(a);
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
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.T = new Set();
  }function Ba(a) {
    a.a || (a.a = !0, na(function () {
      a.flush();
    }));
  }Aa.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.T.forEach(function (b) {
        b(a);
      });
    }
  };Aa.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ca(a, b) {
    var c = p(a);c.I || (c.I = new Aa());c.I.T.add(b);var d = c.I;return { ua: b, D: d, va: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Da(a) {
    var b = a && a.D;b && (b.T.delete(a.ua), b.T.size || (p(a.va).I = null));
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
  }var Ja = Ia("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      Ka = Ia("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function La(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var k = a,
            l = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            k = h.localName;for (var m = "<" + k, q = h.attributes, v = 0, R; R = q[v]; v++) m += " " + R.name + '="' + R.value.replace(Fa, Ha) + '"';m += ">";h = Ja[k] ? m : m + La(h, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = k && Ka[k.localName] ? h : h.replace(Ga, Ha);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Ma = t.h,
      Na = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Oa = {};function Pa(a) {
    Oa[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Qa(a, b) {
    y(a, b, "__shady_native_");for (var c in b) Pa(c);
  }function A(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Na[d] || (Na[d] = e.value) : Pa(d));
    }
  }
  var B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      C = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Ra = document.implementation.createHTMLDocument("inert");function Sa(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Ta = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Ua = ["querySelector", "querySelectorAll"];
  function Va() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? A(window.EventTarget.prototype, a) : (A(Node.prototype, a), A(Window.prototype, a));Ma ? A(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Qa(Node.prototype, { parentNode: { get: function () {
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
              Sa(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
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
        } } };Ma ? (A(Element.prototype, Ta), A(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), A(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Qa(Element.prototype, a), Qa(Element.prototype, { previousElementSibling: { get: function () {
          C.currentNode = this;return C.previousSibling();
        } }, nextElementSibling: { get: function () {
          C.currentNode = this;return C.nextSibling();
        } }, innerHTML: { get: function () {
          return La(this, ra);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Sa(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Ra.namespaceURI ? Ra.createElementNS(this.namespaceURI, d) : Ra.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));A(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));A(Element.prototype, Ua);A(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && A(window.HTMLTemplateElement.prototype, ["innerHTML"]);Ma ? A(DocumentFragment.prototype, Ta) : Qa(DocumentFragment.prototype, a);A(DocumentFragment.prototype, Ua);Ma ? (A(Document.prototype, Ta), A(Document.prototype, ["activeElement"])) : Qa(Document.prototype, a);A(Document.prototype, ["importNode", "getElementById"]);A(Document.prototype, Ua);
  };var Wa = z({ get childNodes() {
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
  }$a(Wa);$a(Ya);$a(Za);var ab = t.h || !0 === t.j,
      bb = ab ? function () {} : function (a) {
    var b = p(a);b.sa || (b.sa = !0, ua(a, Za));
  },
      cb = ab ? function () {} : function (a) {
    var b = p(a);b.ra || (b.ra = !0, ua(a, Wa), window.customElements && window.customElements.polyfillWrapFlushCallback && !t.j || ua(a, Ya));
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
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.A;
    } else b = !!a, d = c = !1;return { oa: e, capture: b, once: c, passive: d, na: fb ? a : b };
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
        c = b.map(function (k) {
      return mb(k, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;qb(a, g, "capture");if (a.X) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, qb(a, g, "bubble"), a.X) return;
    }e = 0;g = null;
  }function sb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          q = h.passive;if (b === h.node && c === k && d === l && e === m && f === q) return g;
    }return -1;
  }function tb(a) {
    za();return !t.J && this instanceof Node && !oa(document, this) ? (a.__target || ub(a, this), rb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function vb(a, b, c) {
    var d = gb(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.oa;d = d.na;if (b) {
      var k = typeof b;if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
        if (ib[a]) return this.__shady_native_addEventListener(a, b, d);var l = h || this;if (h = b[db]) {
          if (-1 < sb(h, l, a, e, f, g)) return;
        } else b[db] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || ub(m);if (l !== this) {
            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return l;
              }, configurable: !0 });var v = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!w(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (pb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
            var R = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);l !== this && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget, v ? (Object.defineProperty(m, "eventPhase", v), v = null) : delete m.eventPhase);return R;
          }
        };b[db].push({ node: l, type: a, capture: e, once: f, passive: g, Oa: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        ob[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function wb(a, b, c) {
    if (b) {
      var d = gb(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.oa;d = d.na;if (ib[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var k = null;try {
        k = b[db];
      } catch (l) {}k && (e = sb(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].Oa, k.length || (b[db] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
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
      Event.prototype.stopPropagation.call(this);this.X = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.X = this.__immediatePropagationStopped = !0;
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
            d = a.substring(2);c.w || (c.w = {});c.w[a] && this.removeEventListener(d, c.w[a]);this.__shady_addEventListener(d, b);c.w[a] = b;
      }, get: function () {
        var b = r(this);return b && b.w && b.w[a];
      }, configurable: !0 };
  };function Gb(a, b) {
    return { index: a, K: [], S: b };
  }
  function Hb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;g = k;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var l = c.length, m = 0; m < k - g && Ib(a[--h], c[--l]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Gb(e, 0); f < d;) b.K.push(c[f++]);return [b];
    }if (f == d) return [Gb(e, b - e)];k = e;g = f;d = d - g + 1;h = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;for (l = 0; l < h; l++) b[0][l] = l;for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
      var q = b[l - 1][m] + 1,
          v = b[l][m - 1] + 1;b[l][m] = q < v ? q : v;
    }k = b.length - 1;g = b[0].length - 1;d = b[k][g];for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));a.reverse();b = void 0;k = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Gb(e, 0));b.S++;e++;b.K.push(c[f]);f++;break;case 2:
        b || (b = Gb(e, 0));
        b.S++;e++;break;case 3:
        b || (b = Gb(e, 0)), b.K.push(c[f]), f++;}b && k.push(b);return k;
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
      Rb = t.J,
      Sb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Tb = Sb && Sb.get;function Ub(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Vb(a) {
    var b = r(a);if (b && void 0 !== b.W) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Vb(b);if (a = r(a)) a.W = void 0;
  }function Wb(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = r(a);(c = c && c.G) && (b = c.length ? c[0] : Wb(a.__shady_nextSibling));
    }return b;
  }
  function Xb(a, b, c) {
    if (a = (a = r(a)) && a.I) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Ba(a);
    }
  }
  var bc = z({ get parentNode() {
      var a = r(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = r(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = r(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = r(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = r(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (u(this)) {
        var a = r(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = r(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (Tb && Tb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (null === a || oa(a, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (w(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (u(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!u(this) && t.h) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Ub(this);this.__shady_native_textContent = a;
          } else Ub(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Qb && a.ownerDocument !== Qb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = r(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Xb(this, a);var d = [],
          e = (c = E(this)) ? c.host.localName : Ob(this),
          f = a.__shady_parentNode;if (f) {
        var g = Ob(a);var h = !!c || !E(a) || Rb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var k = (!Rb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Nb(a, e),
          l = c && !a.__noInsertionPoint && (!Rb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (l || k) k && (g = g || Ob(a)), Pb(a, function (m) {
        l && "slot" === m.localName && d.push(m);if (k) {
          var q = g;D() && (q && Mb(m, q), (q = D()) && q.scopeNode(m, e));
        }
      });d.length && (Yb(c), c.c.push.apply(c.c, d instanceof Array ? d : ca(ba(d))), F(c));u(this) && (Zb(a, this, b), h = r(this), h.root ? (f = !1, ha(this) && F(h.root)) : c && "slot" === this.localName && (f = !1, F(c)));f ? (c = w(this) ? this.host : this, b ? (b = Wb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !w(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Qb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Xb(this, null, a);var c = E(a),
          d = c && $b(c, a),
          e = r(this);if (u(this) && (ac(a, this), ha(this))) {
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
            c = b.W;void 0 === c && (w(this) ? (c = this, b.W = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.W = c)));return c;
      }
    }, contains: function (a) {
      return pa(this, a);
    } });var dc = z({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && cc(a);return (a = r(this)) && a.assignedSlot || null;
    } });function ec(a, b, c) {
    var d = [];fc(a, b, c, d);return d;
  }function fc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            k = f(e);k && h.push(e);g && g(k) ? e = k : (fc(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var G = z({ get firstElementChild() {
      var a = r(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = r(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return u(this) ? qa(Array.prototype.filter.call(sa(this), function (a) {
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
      hc = t.J && !t.j ? va({}, G) : G;va(G, gc);var ic = window.document;function jc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ha(a) && F(r(a).root);else if ("slot" === a.localName && "name" === b && (b = E(a))) {
      if (b.a) {
        kc(b);var c = a.ta,
            d = lc(a);if (d !== c) {
          c = b.b[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.b[d] || (b.b[d] = []);c.push(a);1 < c.length && (b.b[d] = mc(c));
        }
      }F(b);
    }
  }
  var nc = z({ get previousElementSibling() {
      var a = r(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = r(this);if (a && void 0 !== a.nextSibling) {
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
    } });t.J || Db.forEach(function (a) {
    nc[a] = Fb(a);
  });
  var sc = z({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !t.qa) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;oc(b, this, a);pc(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;Yb(c);c.c.push.apply(c.c, a instanceof Array ? a : ca(ba(a)));F(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new qc(rc, this, a);return this.__CE_shadowRoot = b;
    },
    get shadowRoot() {
      var a = r(this);return a && a.Fa || null;
    } });va(nc, sc);var tc = document.implementation.createHTMLDocument("inert"),
      uc = z({ get innerHTML() {
      return u(this) ? La("template" === this.localName ? this.content : this, sa) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Ub(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== tc.namespaceURI ? tc.createElementNS(this.namespaceURI, b) : tc.createElement(b);for (t.h ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var vc = z({ blur: function () {
      var a = r(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });t.J || Eb.forEach(function (a) {
    vc[a] = Fb(a);
  });var wc = z({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && w(b) && cc(b);return (b = r(this)) ? (a && a.flatten ? b.G : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) vb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.A = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) wb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.A = this;d.__shady_removeEventListener(a, b, c);
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
    } });var Bc = z({ dispatchEvent: tb, addEventListener: vb.bind(window), removeEventListener: wb.bind(window) });var Cc = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Cc.parentElement = bc.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Cc.contains = bc.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Cc.children = G.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Cc.innerHTML = uc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Cc.className = nc.className);
  var H = { EventTarget: [Jb], Node: [bc, window.EventTarget ? null : Jb], Text: [dc], Comment: [dc], CDATASection: [dc], ProcessingInstruction: [dc], Element: [nc, G, dc, !t.h || "innerHTML" in Element.prototype ? uc : null, window.HTMLSlotElement ? null : wc], HTMLElement: [vc, Cc], HTMLSlotElement: [wc], DocumentFragment: [hc, xc], Document: [Ac, hc, xc, yc], Window: [Bc] },
      Dc = t.h ? null : ["innerHTML", "textContent"];function I(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && y(a, e, c, d);
    });
  }
  function Ec(a) {
    var b = a ? null : Dc,
        c;for (c in H) I(window[c] && window[c].prototype, H[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;I(c, H.EventTarget);I(c, H.Node);H[a] && I(c, H[a]);b.prototype.__shady_patchedProto = c;
  });function Fc(a) {
    a.__shady_protoIsPatched = !0;I(a, H.EventTarget);I(a, H.Node);I(a, H.Element);I(a, H.HTMLElement);I(a, H.HTMLSlotElement);return a;
  };var Gc = t.ea,
      Hc = t.h;function Ic(a, b) {
    if (Gc && !a.__shady_protoIsPatched && !w(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), Fc(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }Hc || (1 === b ? bb(a) : 2 === b && cb(a));
  }
  function Jc(a, b, c, d) {
    Ic(a, 1);d = d || null;var e = p(a),
        f = d ? p(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = r(e.previousSibling)) f.nextSibling = a;if (f = r(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function Zb(a, b, c) {
    Ic(b, 2);var d = p(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Jc(a, b, d, c);else Jc(a, b, d, c);
  }
  function ac(a, b) {
    var c = p(a);b = p(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (p(a).nextSibling = d);d && (p(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function pc(a, b) {
    var c = p(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;Ic(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = p(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Ic(c, 1);
      }
    }
  };var Kc = z({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.A = c.A || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.A = c.A || this;this.host.__shady_removeEventListener(a, b, c);
    } });function Lc(a, b) {
    y(a, Kc, b);y(a, yc, b);y(a, uc, b);y(a, G, b);t.j && !b ? (y(a, bc, b), y(a, xc, b)) : t.h || (y(a, Za), y(a, Wa), y(a, Ya));
  };var rc = {},
      J = t.deferConnectionCallbacks && "loading" === document.readyState,
      Mc;function Nc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function qc(a, b, c) {
    if (a !== rc) throw new TypeError("Illegal constructor");this.a = null;oc(this, b, c);
  }
  function oc(a, b, c) {
    a.host = b;a.mode = c && c.mode;pc(a.host);b = p(a.host);b.root = a;b.Fa = "closed" !== a.mode ? a : null;b = p(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (t.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else F(a);
  }function F(a) {
    a.F || (a.F = !0, ya(function () {
      return cc(a);
    }));
  }
  function cc(a) {
    var b;if (b = a.F) {
      for (var c; a;) a: {
        a.F && (c = a), b = a;a = b.host.__shady_getRootNode();if (w(a) && (b = r(b.host)) && 0 < b.M) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  qc.prototype._renderSelf = function () {
    var a = J;J = !0;this.F = !1;if (this.a) {
      kc(this);for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];var d = r(c),
            e = d.assignedNodes;d.assignedNodes = [];d.G = [];if (d.ja = e) for (d = 0; d < e.length; d++) {
          var f = r(e[d]);f.Z = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Oc(this, b);for (b = 0; b < this.a.length; b++) {
        c = this.a[b];e = r(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Oc(this, d, c);(d = (d = r(c.__shady_parentNode)) && d.root) && (ia(d) || d.F) && d._renderSelf();Pc(this, e.G, e.assignedNodes);if (d = e.ja) {
          for (f = 0; f < d.length; f++) r(d[f]).Z = null;e.ja = null;d.length > e.assignedNodes.length && (e.ba = !0);
        }e.ba && (e.ba = !1, Qc(this, c));
      }c = this.a;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = r(f).G, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = ra(e);g = Hb(d, d.length, f, f.length);for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
          for (var m = 0, q = void 0; m < l.K.length && (q = l.K[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);k -= l.S;
        }k = 0;for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.S; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
      }
    }if (!t.preferPerformance && !this.ia) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = r(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.ia = !0;J = a;Mc && Mc();
  };function Oc(a, b, c) {
    var d = p(b),
        e = d.Z;d.Z = null;c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);c ? (p(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (p(d.assignedSlot).ba = !0);
  }function Pc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = r(e).assignedNodes;f && f.length && Pc(a, b, f);
    } else b.push(c[d]);
  }
  function Qc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = r(b);b.assignedSlot && Qc(a, b.assignedSlot);
  }function Yb(a) {
    a.c = a.c || [];a.a = a.a || [];a.b = a.b || {};
  }function kc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];pc(e);var f = e.__shady_parentNode;pc(f);f = r(f);f.M = (f.M || 0) + 1;f = lc(e);a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];a.a.push(e);
      }if (c) for (var g in c) a.b[g] = mc(a.b[g]);a.c = [];
    }
  }
  function lc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.ta = b;
  }function mc(a) {
    return a.sort(function (b, c) {
      b = Nc(b);for (var d = Nc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = sa(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function $b(a, b) {
    if (a.a) {
      kc(a);var c = a.b,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (pa(b, g)) {
          e.splice(f, 1);var h = a.a.indexOf(g);0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.M && h.M--);f--;g = r(g);if (h = g.G) for (var k = 0; k < h.length; k++) {
            var l = h[k],
                m = l.__shady_native_parentNode;m && m.__shady_native_removeChild(l);
          }g.G = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ia(a) {
    kc(a);return !(!a.a || !a.a.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;Lc(a, "__shady_");Lc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(qc.prototype);
  if (window.customElements && window.customElements.define && t.ca && !t.preferPerformance) {
    var Rc = new Map();Mc = function () {
      var a = [];Rc.forEach(function (d, e) {
        a.push([e, d]);
      });Rc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };J && document.addEventListener("readystatechange", function () {
      J = !1;Mc();
    }, { once: !0 });var Sc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        J ? Rc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        J ? this.isConnected || Rc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        Tc = window.customElements.define,
        Uc = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;Tc.call(window.customElements, a, Sc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = Uc;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Uc, configurable: !0 });
  }function E(a) {
    a = a.__shady_getRootNode();if (w(a)) return a;
  };function Vc(a) {
    this.node = a;
  }n = Vc.prototype;n.addEventListener = function (a, b, c) {
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
  da.Object.defineProperties(Vc.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
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
      } } });function Wc(a) {
    Object.defineProperty(Vc.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Db.forEach(function (a) {
    return Wc(a);
  });Eb.forEach(function (a) {
    return Wc(a);
  });var Xc = new WeakMap();function Yc(a) {
    if (w(a) || a instanceof Vc) return a;var b = Xc.get(a);b || (b = new Vc(a), Xc.set(a, b));return b;
  };if (t.ca) {
    var Zc = t.h ? function (a) {
      return a;
    } : function (a) {
      cb(a);bb(a);return a;
    },
        ShadyDOM = { inUse: t.ca, patch: Zc, isShadyRoot: w, enqueue: ya, flush: za, flushInitial: function (a) {
        !a.ia && a.F && cc(a);
      }, settings: t, filterMutations: Ea, observeChildren: Ca, unobserveChildren: Da, deferConnectionCallbacks: t.deferConnectionCallbacks, preferPerformance: t.preferPerformance, handlesDynamicScoping: !0, wrap: t.j ? Yc : Zc, wrapIfNeeded: !0 === t.j ? Yc : function (a) {
        return a;
      }, Wrapper: Vc, composedPath: lb, noPatch: t.j, patchOnDemand: t.ea, nativeMethods: Na,
      nativeTree: Oa, patchElementProto: Fc };window.ShadyDOM = ShadyDOM;Va();Ec("__shady_");Object.defineProperty(document, "_activeElement", yc.activeElement);y(Window.prototype, Bc, "__shady_");t.j ? t.ea && y(Element.prototype, sc) : (Ec(), Cb());xb();window.Event = zb;window.CustomEvent = Ab;window.MouseEvent = Bb;window.ShadowRoot = qc;
  }; /*
     Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     Google as part of the polymer project is also subject to an additional IP
     rights grant found at http://polymer.github.io/PATENTS.txt
     */
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   Google as part of the polymer project is also subject to an additional IP
   rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var $c = window.Document.prototype.createElement,
      ad = window.Document.prototype.createElementNS,
      bd = window.Document.prototype.importNode,
      cd = window.Document.prototype.prepend,
      dd = window.Document.prototype.append,
      ed = window.DocumentFragment.prototype.prepend,
      fd = window.DocumentFragment.prototype.append,
      gd = window.Node.prototype.cloneNode,
      hd = window.Node.prototype.appendChild,
      id = window.Node.prototype.insertBefore,
      jd = window.Node.prototype.removeChild,
      kd = window.Node.prototype.replaceChild,
      ld = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      md = window.Element.prototype.attachShadow,
      nd = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      od = window.Element.prototype.getAttribute,
      pd = window.Element.prototype.setAttribute,
      qd = window.Element.prototype.removeAttribute,
      rd = window.Element.prototype.getAttributeNS,
      sd = window.Element.prototype.setAttributeNS,
      td = window.Element.prototype.removeAttributeNS,
      ud = window.Element.prototype.insertAdjacentElement,
      vd = window.Element.prototype.insertAdjacentHTML,
      wd = window.Element.prototype.prepend,
      xd = window.Element.prototype.append,
      yd = window.Element.prototype.before,
      zd = window.Element.prototype.after,
      Ad = window.Element.prototype.replaceWith,
      Bd = window.Element.prototype.remove,
      Cd = window.HTMLElement,
      Dd = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      Ed = window.HTMLElement.prototype.insertAdjacentElement,
      Fd = window.HTMLElement.prototype.insertAdjacentHTML;var Gd = new Set();"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return Gd.add(a);
  });function Hd(a) {
    var b = Gd.has(a);a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return !b && a;
  }var Id = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function K(a) {
    var b = a.isConnected;if (void 0 !== b) return b;if (Id(a)) return !0;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }function Jd(a) {
    var b = a.children;if (b) return Array.prototype.slice.call(b);b = [];for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);return b;
  }
  function Kd(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;return b && b !== a ? b.nextSibling : null;
  }
  function Ld(a, b, c) {
    for (var d = a; d;) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;void 0 === c && (c = new Set());if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) Ld(d, b, c);d = Kd(a, e);continue;
        } else if ("template" === f) {
          d = Kd(a, e);continue;
        }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) Ld(e, b, c);
      }d = d.firstChild ? d.firstChild : Kd(a, d);
    }
  };function Md() {
    var a = !(null === L || void 0 === L || !L.noDocumentConstructionObserver),
        b = !(null === L || void 0 === L || !L.shadyDomFastWalk);this.H = [];this.a = [];this.C = !1;this.shadyDomFastWalk = b;this.Ma = !a;
  }function Nd(a, b, c, d) {
    var e = window.ShadyDom;if (a.shadyDomFastWalk && e && e.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else Ld(b, c, d);
  }function Od(a, b) {
    a.C = !0;a.H.push(b);
  }function Pd(a, b) {
    a.C = !0;a.a.push(b);
  }
  function Qd(a, b) {
    a.C && Nd(a, b, function (c) {
      return Rd(a, c);
    });
  }function Rd(a, b) {
    if (a.C && !b.__CE_patched) {
      b.__CE_patched = !0;for (var c = 0; c < a.H.length; c++) a.H[c](b);for (c = 0; c < a.a.length; c++) a.a[c](b);
    }
  }function M(a, b) {
    var c = [];Nd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state ? a.connectedCallback(d) : Sd(a, d);
    }
  }function N(a, b) {
    var c = [];Nd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function O(a, b, c) {
    c = void 0 === c ? {} : c;var d = c.Na,
        e = c.upgrade || function (g) {
      return Sd(a, g);
    },
        f = [];Nd(a, b, function (g) {
      a.C && Rd(a, g);if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;var l = new Set();d && (d.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));O(a, k, { Na: l, upgrade: e });
          }
        });
      } else f.push(g);
    }, d);for (b = 0; b < f.length; b++) e(f[b]);
  }
  function Sd(a, b) {
    try {
      var c = b.ownerDocument,
          d = c.__CE_registry;var e = d && (c.defaultView || c.__CE_isImportDocument) ? Td(d, b.localName) : void 0;if (e && void 0 === b.__CE_state) {
        e.constructionStack.push(b);try {
          try {
            if (new e.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            e.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }b.__CE_state = 1;b.__CE_definition = e;if (e.attributeChangedCallback && b.hasAttributes()) {
          var f = e.observedAttributes;
          for (e = 0; e < f.length; e++) {
            var g = f[e],
                h = b.getAttribute(g);null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }K(b) && a.connectedCallback(b);
      }
    } catch (k) {
      Ud(k);
    }
  }Md.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      Ud(c);
    }
  };Md.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      Ud(c);
    }
  };
  Md.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
      f.attributeChangedCallback.call(a, b, c, d, e);
    } catch (g) {
      Ud(g);
    }
  };
  function Vd(a, b, c, d) {
    var e = b.__CE_registry;if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = Td(e, c))) try {
      var f = new e.constructorFunction();if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return f;
    } catch (g) {
      return Ud(g), b = null === d ? $c.call(b, c) : ad.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, Rd(a, b), b;
    }b = null === d ? $c.call(b, c) : ad.call(b, d, c);Rd(a, b);return b;
  }
  function Ud(a) {
    var b = a.message,
        c = a.sourceURL || a.fileName || "",
        d = a.line || a.lineNumber || 0,
        e = a.column || a.columnNumber || 0,
        f = void 0;void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", { cancelable: !0, message: b, filename: c, lineno: d, colno: e, error: a }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", { configurable: !0, get: function () {
          return !0;
        } });
    });void 0 === f.error && Object.defineProperty(f, "error", { configurable: !0, enumerable: !0, get: function () {
        return a;
      } });window.dispatchEvent(f);f.defaultPrevented || console.error(a);
  };function Wd() {
    var a = this;this.a = void 0;this.ka = new Promise(function (b) {
      a.b = b;
    });
  }Wd.prototype.resolve = function (a) {
    if (this.a) throw Error("Already resolved.");this.a = a;this.b(a);
  };function Xd(a) {
    var b = document;this.D = void 0;this.v = a;this.a = b;O(this.v, this.a);"loading" === this.a.readyState && (this.D = new MutationObserver(this.b.bind(this)), this.D.observe(this.a, { childList: !0, subtree: !0 }));
  }function Yd(a) {
    a.D && a.D.disconnect();
  }Xd.prototype.b = function (a) {
    var b = this.a.readyState;"interactive" !== b && "complete" !== b || Yd(this);for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) O(this.v, c[d]);
  };function P(a) {
    this.O = new Map();this.P = new Map();this.ga = new Map();this.Y = !1;this.aa = new Map();this.N = function (b) {
      return b();
    };this.B = !1;this.R = [];this.v = a;this.ha = a.Ma ? new Xd(a) : void 0;
  }n = P.prototype;n.Da = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");Zd(this, a);this.O.set(a, b);this.R.push(a);this.B || (this.B = !0, this.N(function () {
      return $d(c);
    }));
  };
  n.define = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");Zd(this, a);ae(this, a, b);this.R.push(a);this.B || (this.B = !0, this.N(function () {
      return $d(c);
    }));
  };function Zd(a, b) {
    if (!Hd(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");if (Td(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));if (a.Y) throw Error("A custom element is already being defined.");
  }
  function ae(a, b, c) {
    a.Y = !0;var d;try {
      var e = c.prototype;if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");var f = function (m) {
        var q = e[m];if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");return q;
      };var g = f("connectedCallback");var h = f("disconnectedCallback");var k = f("adoptedCallback");var l = (d = f("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.Y = !1;
    }c = { localName: b,
      constructorFunction: c, connectedCallback: g, disconnectedCallback: h, adoptedCallback: k, attributeChangedCallback: d, observedAttributes: l, constructionStack: [] };a.P.set(b, c);a.ga.set(c.constructorFunction, c);return c;
  }n.upgrade = function (a) {
    O(this.v, a);
  };
  function $d(a) {
    if (!1 !== a.B) {
      a.B = !1;for (var b = [], c = a.R, d = new Map(), e = 0; e < c.length; e++) d.set(c[e], []);O(a.v, document, { upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
                m = d.get(l);m ? m.push(k) : a.P.has(l) && b.push(k);
          }
        } });for (e = 0; e < b.length; e++) Sd(a.v, b[e]);for (e = 0; e < c.length; e++) {
        for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) Sd(a.v, g[h]);(f = a.aa.get(f)) && f.resolve(void 0);
      }c.length = 0;
    }
  }n.get = function (a) {
    if (a = Td(this, a)) return a.constructorFunction;
  };
  n.whenDefined = function (a) {
    if (!Hd(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.aa.get(a);if (b) return b.ka;b = new Wd();this.aa.set(a, b);var c = this.P.has(a) || this.O.has(a);a = -1 === this.R.indexOf(a);c && a && b.resolve(void 0);return b.ka;
  };n.polyfillWrapFlushCallback = function (a) {
    this.ha && Yd(this.ha);var b = this.N;this.N = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function Td(a, b) {
    var c = a.P.get(b);if (c) return c;if (c = a.O.get(b)) {
      a.O.delete(b);try {
        return ae(a, b, c());
      } catch (d) {
        Ud(d);
      }
    }
  }window.CustomElementRegistry = P;P.prototype.define = P.prototype.define;P.prototype.upgrade = P.prototype.upgrade;P.prototype.get = P.prototype.get;P.prototype.whenDefined = P.prototype.whenDefined;P.prototype.polyfillDefineLazy = P.prototype.Da;P.prototype.polyfillWrapFlushCallback = P.prototype.polyfillWrapFlushCallback;function be(a, b, c) {
    function d(e) {
      return function (f) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];h = [];for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];m instanceof Element && K(m) && k.push(m);if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }e.apply(this, g);for (g = 0; g < k.length; g++) N(a, k[g]);if (K(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && M(a, k);
      };
    }void 0 !== c.prepend && (b.prepend = d(c.prepend));void 0 !== c.append && (b.append = d(c.append));
  };function ce(a) {
    Document.prototype.createElement = function (b) {
      return Vd(a, this, b, null);
    };Document.prototype.importNode = function (b, c) {
      b = bd.call(this, b, !!c);this.__CE_registry ? O(a, b) : Qd(a, b);return b;
    };Document.prototype.createElementNS = function (b, c) {
      return Vd(a, this, c, b);
    };be(a, Document.prototype, { prepend: cd, append: dd });
  };function de(a) {
    function b(d) {
      return function (e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];g = [];for (var h = [], k = 0; k < f.length; k++) {
          var l = f[k];l instanceof Element && K(l) && h.push(l);if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }d.apply(this, f);for (f = 0; f < h.length; f++) N(a, h[f]);if (K(this)) for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && M(a, h);
      };
    }var c = Element.prototype;void 0 !== yd && (c.before = b(yd));void 0 !== zd && (c.after = b(zd));void 0 !== Ad && (c.replaceWith = function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];f = [];for (var g = [], h = 0; h < e.length; h++) {
        var k = e[h];k instanceof Element && K(k) && g.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k);else f.push(k);
      }h = K(this);Ad.apply(this, e);for (e = 0; e < g.length; e++) N(a, g[e]);if (h) for (N(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && M(a, g);
    });void 0 !== Bd && (c.remove = function () {
      var d = K(this);Bd.call(this);d && N(a, this);
    });
  };function ee(a) {
    function b(e, f) {
      Object.defineProperty(e, "innerHTML", { enumerable: f.enumerable, configurable: !0, get: f.get, set: function (g) {
          var h = this,
              k = void 0;K(this) && (k = [], Nd(a, this, function (q) {
            q !== h && k.push(q);
          }));f.set.call(this, g);if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];1 === m.__CE_state && a.disconnectedCallback(m);
          }this.ownerDocument.__CE_registry ? O(a, this) : Qd(a, this);return g;
        } });
    }function c(e, f) {
      e.insertAdjacentElement = function (g, h) {
        var k = K(h);g = f.call(this, g, h);k && N(a, h);K(g) && M(a, h);return g;
      };
    }
    function d(e, f) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);for (k = 0; k < l.length; k++) O(a, l[k]);
      }e.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();if ("beforebegin" === h) {
          var l = this.previousSibling;f.call(this, h, k);g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }md && (Element.prototype.attachShadow = function (e) {
      e = md.call(this, e);if (a.C && !e.__CE_patched) {
        e.__CE_patched = !0;for (var f = 0; f < a.H.length; f++) a.H[f](e);
      }return this.__CE_shadowRoot = e;
    });nd && nd.get ? b(Element.prototype, nd) : Dd && Dd.get ? b(HTMLElement.prototype, Dd) : Pd(a, function (e) {
      b(e, { enumerable: !0, configurable: !0, get: function () {
          return gd.call(this, !0).innerHTML;
        }, set: function (f) {
          var g = "template" === this.localName,
              h = g ? this.content : this,
              k = ad.call(document, this.namespaceURI, this.localName);for (k.innerHTML = f; 0 < h.childNodes.length;) jd.call(h, h.childNodes[0]);for (f = g ? k.content : k; 0 < f.childNodes.length;) hd.call(h, f.childNodes[0]);
        } });
    });Element.prototype.setAttribute = function (e, f) {
      if (1 !== this.__CE_state) return pd.call(this, e, f);var g = od.call(this, e);pd.call(this, e, f);f = od.call(this, e);a.attributeChangedCallback(this, e, g, f, null);
    };Element.prototype.setAttributeNS = function (e, f, g) {
      if (1 !== this.__CE_state) return sd.call(this, e, f, g);var h = rd.call(this, e, f);sd.call(this, e, f, g);g = rd.call(this, e, f);a.attributeChangedCallback(this, f, h, g, e);
    };Element.prototype.removeAttribute = function (e) {
      if (1 !== this.__CE_state) return qd.call(this, e);var f = od.call(this, e);qd.call(this, e);null !== f && a.attributeChangedCallback(this, e, f, null, null);
    };Element.prototype.removeAttributeNS = function (e, f) {
      if (1 !== this.__CE_state) return td.call(this, e, f);var g = rd.call(this, e, f);td.call(this, e, f);var h = rd.call(this, e, f);g !== h && a.attributeChangedCallback(this, f, g, h, e);
    };Ed ? c(HTMLElement.prototype, Ed) : ud && c(Element.prototype, ud);Fd ? d(HTMLElement.prototype, Fd) : vd && d(Element.prototype, vd);be(a, Element.prototype, { prepend: wd, append: xd });de(a);
  };var fe = {};function ge(a) {
    function b() {
      var c = this.constructor;var d = document.__CE_registry.ga.get(c);if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e = d.constructionStack;if (0 === e.length) return e = $c.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, Rd(a, e), e;var f = e.length - 1,
          g = e[f];if (g === fe) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");e[f] = fe;Object.setPrototypeOf(g, c.prototype);Rd(a, g);return g;
    }b.prototype = Cd.prototype;Object.defineProperty(HTMLElement.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });window.HTMLElement = b;
  };function he(a) {
    function b(c, d) {
      Object.defineProperty(c, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (e) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);else {
            var f = void 0;if (this.firstChild) {
              var g = this.childNodes,
                  h = g.length;if (0 < h && K(this)) {
                f = Array(h);for (var k = 0; k < h; k++) f[k] = g[k];
              }
            }d.set.call(this, e);if (f) for (e = 0; e < f.length; e++) N(a, f[e]);
          }
        } });
    }Node.prototype.insertBefore = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = Jd(c);c = id.call(this, c, d);if (K(this)) for (d = 0; d < e.length; d++) M(a, e[d]);return c;
      }e = c instanceof Element && K(c);d = id.call(this, c, d);e && N(a, c);K(this) && M(a, c);return d;
    };Node.prototype.appendChild = function (c) {
      if (c instanceof DocumentFragment) {
        var d = Jd(c);c = hd.call(this, c);if (K(this)) for (var e = 0; e < d.length; e++) M(a, d[e]);return c;
      }d = c instanceof Element && K(c);e = hd.call(this, c);d && N(a, c);K(this) && M(a, c);return e;
    };Node.prototype.cloneNode = function (c) {
      c = gd.call(this, !!c);this.ownerDocument.__CE_registry ? O(a, c) : Qd(a, c);return c;
    };Node.prototype.removeChild = function (c) {
      var d = c instanceof Element && K(c),
          e = jd.call(this, c);d && N(a, c);return e;
    };Node.prototype.replaceChild = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = Jd(c);c = kd.call(this, c, d);if (K(this)) for (N(a, d), d = 0; d < e.length; d++) M(a, e[d]);return c;
      }e = c instanceof Element && K(c);var f = kd.call(this, c, d),
          g = K(this);g && N(a, d);e && N(a, c);g && M(a, c);return f;
    };ld && ld.get ? b(Node.prototype, ld) : Od(a, function (c) {
      b(c, { enumerable: !0, configurable: !0, get: function () {
          for (var d = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);return d.join("");
        }, set: function (d) {
          for (; this.firstChild;) jd.call(this, this.firstChild);null != d && "" !== d && hd.call(this, document.createTextNode(d));
        } });
    });
  };var L = window.customElements;function ie() {
    var a = new Md();ge(a);ce(a);be(a, DocumentFragment.prototype, { prepend: ed, append: fd });he(a);ee(a);a = new P(a);document.__CE_registry = a;Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a });
  }L && !L.forcePolyfill && "function" == typeof L.define && "function" == typeof L.get || ie();window.__CE_installPolyfill = ie; /*
                                                                                                                                  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                  */
  function je() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function ke(a) {
    var b = a = a.replace(le, "").replace(me, ""),
        c = new je();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new je();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return ne(c, a);
  }
  function ne(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = oe(c), c = c.replace(pe, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = qe : c.match(re) && (a.type = se, a.keyframesName = a.selector.split(pe).pop()) : a.type = 0 === c.indexOf("--") ? te : ue);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) ne(f, b);return a;
  }function oe(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function ve(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = ve(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(we, "").replace(xe, ""), b = b.replace(ye, "").replace(ze, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var ue = 1,
      se = 7,
      qe = 4,
      te = 1E3,
      le = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      me = /@import[^;]*;/gim,
      we = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      xe = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      ye = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ze = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      re = /^@[^\s]*keyframes/,
      pe = /\s+/g;var Q = !(window.ShadyDOM && window.ShadyDOM.inUse),
      Ae;function Be(a) {
    Ae = a && a.shimcssproperties ? !1 : Q || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var Ce;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Ce = window.ShadyCSS.cssBuild);var De = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Ae = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Be(window.ShadyCSS), window.ShadyCSS = void 0) : Be(window.WebComponents && window.WebComponents.flags);var S = Ae;var Ee = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      Fe = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      Ge = /(--[\w-]+)\s*([:,;)]|$)/gi,
      He = /(animation\s*:)|(animation-name\s*:)/,
      Ie = /@media\s(.*)/,
      Je = /\{[^}]*\}/g;var Ke = new Set();function Le(a, b) {
    if (!a) return "";"string" === typeof a && (a = ke(a));b && Me(a, b);return ve(a, S);
  }function Ne(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = ke(a.textContent));return a.__cssRules || null;
  }function Oe(a) {
    return !!a.parent && a.parent.type === se;
  }function Me(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === qe) {
        var g = a.selector.match(Ie);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === ue ? b(a) : c && f === se ? c(a) : f === te && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Me(g, b, c, d);
    }
  }
  function Pe(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Qe(e, c, d);return e;
  }var T = null;function Re(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);return T = a;
  }function Qe(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a;
  }
  function Se(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Te(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Se(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Te(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Ue(a, b) {
    Q ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Ve = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function U(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, L: c };
  }function We(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Se(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Xe(a) {
    if (void 0 !== Ce) return Ce;if (void 0 === a.__cssBuild) {
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
  function Ye(a) {
    a = void 0 === a ? "" : a;return "" !== a && S ? Q ? "shadow" === a : "shady" === a : !1;
  };function Ze() {}function $e(a, b) {
    af(V, a, function (c) {
      W(c, b || "");
    });
  }function af(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) af(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Ue(a, b)) : Ue(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function bf(a, b, c) {
    af(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function cf(a, b) {
    af(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function df(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (Q || "shady" === (void 0 === d ? "" : d) ? e = Le(b, c) : (a = U(a), e = ef(f, b, a.is, a.L, c) + "\n\n"));return e.trim();
  }function ef(a, b, c, d, e) {
    var f = ff(c, d);c = c ? "." + c : "";return Le(b, function (g) {
      g.c || (g.selector = g.g = gf(a, g, a.b, c, f), g.c = !0);e && e(g, c, f);
    });
  }function ff(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function gf(a, b, c, d, e) {
    var f = We(b.selector);if (!Oe(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (k) {
      return !!k;
    }).join(",");
  }function hf(a) {
    return a.replace(jf, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function kf(a) {
    for (var b = [], c; c = a.match(lf);) {
      var d = c.index,
          e = Se(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { fa: a, matches: b };
  }function mf(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Ze.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = jf.test(a);e && (a = a.replace(jf, function (h, k, l) {
      return ":" + k + "(" + l.replace(/\s/g, "") + ")";
    }), a = hf(a));var f = lf.test(a);if (f) {
      var g = kf(a);a = g.fa;g = g.matches;
    }a = a.replace(nf, ":host $1");a = a.replace(of, function (h, k, l) {
      d || (h = pf(l, k, b, c), d = d || h.stop, k = h.xa, l = h.value);return k + l;
    });f && (a = mf(a, g));e && (a = hf(a));return a = a.replace(qf, function (h, k, l, m) {
      return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
    });
  };
  function pf(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = rf(a, d) : 0 !== e && (a = c ? sf(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(tf, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, xa: b, stop: f };
  }function sf(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function rf(a, b) {
    var c = a.match(uf);return (c = c && c[2].trim() || "") ? c[0].match(vf) ? a.replace(uf, function (d, e, f) {
      return b + f;
    }) : c.split(vf)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function wf(a) {
    ":root" === a.selector && (a.selector = "html");
  }Ze.prototype.c = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : sf(a.trim(), ":not(.style-scope)");
  };da.Object.defineProperties(Ze.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var jf = /:(nth[-\w]+)\(([^)]+)\)/,
      of = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      vf = /[[.:#*]/,
      nf = /^(::slotted)/,
      uf = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      tf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      qf = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      lf = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new Ze();function xf(a, b, c, d, e) {
    this.o = a || null;this.b = b || null;this.da = c || [];this.l = null;this.cssBuild = e || "";this.L = d || "";this.a = this.m = this.u = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function yf(a, b) {
    return a.__styleInfo = b;
  }xf.prototype.c = function () {
    return this.o;
  };xf.prototype._getStyleRules = xf.prototype.c;function zf(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var Af = /:host\s*>\s*/,
      Bf = navigator.userAgent.match("Trident");function Cf() {}function Df(a) {
    var b = {},
        c = [],
        d = 0;Me(a, function (f) {
      Ef(f);f.index = d++;f = f.f.cssText;for (var g; g = Ge.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function Ef(a) {
    if (!a.f) {
      var b = {},
          c = {};Ff(a, c) && (b.s = c, a.rules = null);b.cssText = a.parsedCssText.replace(Je, "").replace(Ee, "");a.f = b;
    }
  }function Ff(a, b) {
    var c = a.f;if (c) {
      if (c.s) return Object.assign(b, c.s), !0;
    } else {
      c = a.parsedCssText;for (var d; a = Ee.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function Gf(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? Hf(a, b, c) : Te(b, function (d, e, f, g) {
      if (!e) return d + g;(e = Gf(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Gf(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function Hf(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      Fe.lastIndex = 0;if (f = Fe.exec(e)) e = Gf(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = Gf(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function If(a, b) {
    var c = {},
        d = [];Me(a, function (e) {
      e.f || Ef(e);var f = e.g || e.parsedSelector;b && e.f.s && f && zf.call(b, f) && (Ff(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { s: c, key: d };
  }
  function Jf(a, b, c, d) {
    b.f || Ef(b);if (b.f.s) {
      var e = U(a);a = e.is;e = e.L;e = a ? ff(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(Af) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.g || (b.g = gf(V, b, V.b, a ? "." + a : "", e)), c = b.g || e), g && "html" === e && (c = b.g || b.U), d({ fa: c, Ca: h, Pa: g });
    }
  }
  function Kf(a, b, c) {
    var d = {},
        e = {};Me(b, function (f) {
      Jf(a, f, c, function (g) {
        zf.call(a._element || a, g.fa) && (g.Ca ? Ff(f, d) : Ff(f, e));
      });
    }, null, !0);return { Ga: e, Ba: d };
  }
  function Lf(a, b, c, d) {
    var e = U(b),
        f = ff(e.is, e.L),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.o;h = h.cssBuild;var k = Mf(e, d);return df(b, e, function (l) {
      var m = "";l.f || Ef(l);l.f.cssText && (m = Hf(a, l.f.cssText, c));l.cssText = m;if (!Q && !Oe(l) && l.cssText) {
        var q = m = l.cssText;null == l.ma && (l.ma = He.test(m));if (l.ma) if (null == l.V) {
          l.V = [];for (var v in k) q = k[v], q = q(m), m !== q && (m = q, l.V.push(v));
        } else {
          for (v = 0; v < l.V.length; ++v) q = k[l.V[v]], m = q(m);q = m;
        }l.cssText = q;l.g = l.g || l.selector;
        m = "." + d;v = We(l.g);q = 0;for (var R = v.length, Xa = void 0; q < R && (Xa = v[q]); q++) v[q] = Xa.match(g) ? Xa.replace(f, m) : m + " " + Xa;l.selector = v.join(",");
      }
    }, h);
  }function Mf(a, b) {
    a = a.b;var c = {};if (!Q && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.i = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.g = f.g || f.selector;f.selector = f.g.replace(f.keyframesName, f.a);c[e.keyframesName] = Nf(e);
    }return c;
  }function Nf(a) {
    return function (b) {
      return b.replace(a.i, a.a);
    };
  }
  function Of(a, b) {
    var c = Pf,
        d = Ne(a);a.textContent = Le(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.f && e.f.cssText && (f = f.replace(we, "").replace(xe, ""), e.cssText = Hf(c, f, b));
    });
  }da.Object.defineProperties(Cf.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Pf = new Cf();var Qf = {},
      Rf = window.customElements;if (Rf && !Q && !De) {
    var Sf = Rf.define;Rf.define = function (a, b, c) {
      Qf[a] || (Qf[a] = Re(a));Sf.call(Rf, a, b, c);
    };
  };function Tf() {
    this.cache = {};
  }Tf.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ s: b, styleElement: c, m: d });100 < e.length && e.shift();this.cache[a] = e;
  };function Uf() {}var Vf = new RegExp(V.a + "\\s*([^\\s]*)");function Wf(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Vf)) ? a[1] : "";
  }function Xf(a) {
    var b = Ve(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : "";
  }
  function Yf(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Wf(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Xe(e))) cf(e, g);else if (f instanceof ShadowRoot) for (f = Xf(e), f !== g && bf(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Xf(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(Q || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Zf = new MutationObserver(Yf),
        $f = function (a) {
      Zf.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) $f(document);else {
      var ag = function () {
        $f(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(ag) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            ag();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else ag();
      });
    }Uf = function () {
      Yf(Zf.takeRecords());
    };
  };var bg = {};var cg = Promise.resolve();function dg(a) {
    if (a = bg[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function eg(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function fg(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, cg.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var gg = {},
      hg = new Tf();function Y() {
    this.la = {};this.c = document.documentElement;var a = new je();a.rules = [];this.i = yf(this.c, new xf(a));this.U = !1;this.a = this.b = null;
  }n = Y.prototype;n.flush = function () {
    Uf();
  };n.za = function (a) {
    return Ne(a);
  };n.Ka = function (a) {
    return Le(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !De) {
      Q || Qf[b] || (Qf[b] = Re(b));a._prepared = !0;a.name = b;a.extends = c;bg[b] = a;var d = Xe(a),
          e = Ye(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var k = g[h];if (k.hasAttribute("shady-unscoped")) {
          if (!Q) {
            var l = k.textContent;if (!Ke.has(l)) {
              Ke.add(l);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = l;document.head.appendChild(m);
            }k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }f = f.join("").trim() + (gg[b] || "");ig(this);if (!e) {
        if (g = !d) g = Fe.test(f) || Ee.test(f), Fe.lastIndex = 0, Ee.lastIndex = 0;h = ke(f);g && S && this.b && this.b.transformRules(h, b);a._styleAst = h;
      }g = [];S || (g = Df(a._styleAst));if (!g.length || S) h = Q ? a.content : null, b = Qf[b] || null, d = df(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Pe(d, c.is, h, b) : null, a._style = d;a.a = g;
    }
  };n.Ea = function (a, b) {
    gg[b] = a.join(" ");
  };
  n.prepareTemplateDom = function (a, b) {
    if (!De) {
      var c = Xe(a);Q || "shady" === c || a._domPrepared || (a._domPrepared = !0, $e(a.content, b));
    }
  };function jg(a) {
    var b = U(a),
        c = b.is;b = b.L;var d = Qf[c] || null,
        e = bg[c];if (e) {
      c = e._styleAst;var f = e.a;e = Xe(e);b = new xf(c, d, f, b, e);yf(a, b);return b;
    }
  }
  function kg(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
      a.pa(b);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.a.enqueued || a.U) && a.flushCustomStyles();
      });
    });
  }function ig(a) {
    if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.b = window.ShadyCSS.ApplyShim;a.b.invalidCallback = dg;var b = !0;
    } else b = !1;kg(a);return b;
  }
  n.flushCustomStyles = function () {
    if (!De) {
      var a = ig(this);if (this.a) {
        var b = this.a.processStyles();if ((a || this.a.enqueued) && !Ye(this.i.cssBuild)) {
          if (S) {
            if (!this.i.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.a.getStyleForCustomStyle(b[a]);if (c && S && this.b) {
                var d = Ne(c);ig(this);this.b.transformRules(d);c.textContent = Le(d);
              }
            }
          } else {
            lg(this, b);mg(this, this.c, this.i);for (a = 0; a < b.length; a++) (c = this.a.getStyleForCustomStyle(b[a])) && Of(c, this.i.u);this.U && this.styleDocument();
          }this.a.enqueued = !1;
        }
      }
    }
  };
  function lg(a, b) {
    b = b.map(function (c) {
      return a.a.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.i.o.rules = b.map(function (c) {
      return Ne(c);
    });
  }
  n.styleElement = function (a, b) {
    if (De) {
      if (b) {
        X(a) || yf(a, new xf(null));var c = X(a);c.l = c.l || {};Object.assign(c.l, b);ng(this, a, c);
      }
    } else if (c = X(a) || jg(a)) if (a !== this.c && (this.U = !0), b && (c.l = c.l || {}, Object.assign(c.l, b)), S) ng(this, a, c);else if (this.flush(), mg(this, a, c), c.da && c.da.length) {
      b = U(a).is;var d;a: {
        if (d = hg.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.da;for (var h = 0; h < g.length; h++) {
              var k = g[h];if (f.s[k] !== c.u[k]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;
      e = c.m;(f = d && d.m) || (f = this.la[b] = (this.la[b] || 0) + 1, f = b + "-" + f);c.m = f;f = c.m;h = Pf;h = g ? g.textContent || "" : Lf(h, a, c.u, f);k = X(a);var l = k.a;l && !Q && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));Q ? k.a ? (k.a.textContent = h, g = k.a) : h && (g = Pe(h, f, a.shadowRoot, k.b)) : g ? g.parentNode || (Bf && -1 < h.indexOf("@media") && (g.textContent = h), Qe(g, null, k.b)) : h && (g = Pe(h, f, null, k.b));g && (g._useCount = g._useCount || 0, k.a != g && g._useCount++, k.a = g);f = g;Q || (g = c.m, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && Ue(a, k));d || hg.store(b, c.u, f, c.m);
    }
  };
  function ng(a, b, c) {
    var d = U(b).is;if (c.l) {
      var e = c.l,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = bg[d];if (!(!e && b !== a.c || e && "" !== Xe(e)) && e && e._style && !eg(e)) {
      if (eg(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) ig(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = df(b, c.o), fg(e);Q && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = df(b, c.o));c.o = e._styleAst;
    }
  }
  function og(a, b) {
    return (b = Ve(b).getRootNode().host) ? X(b) || jg(b) ? b : og(a, b) : a.c;
  }function mg(a, b, c) {
    var d = og(a, b),
        e = X(d),
        f = e.u;d === a.c || f || (mg(a, d, e), f = e.u);a = Object.create(f || null);d = Kf(b, c.o, c.cssBuild);b = If(e.o, b).s;Object.assign(a, d.Ba, b, d.Ga);b = c.l;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = Pf;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = Gf(g, a[d], a);c.u = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = Ve(a),
        d = c.shadowRoot,
        e = a === this.c;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Ve(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.pa = function (a) {
    var b = this,
        c = Xe(a);c !== this.i.cssBuild && (this.i.cssBuild = c);if (!Ye(c)) {
      var d = Ne(a);Me(d, function (e) {
        if (Q) wf(e);else {
          var f = V;e.selector = e.parsedSelector;wf(e);e.selector = e.g = gf(f, e, f.c, void 0, void 0);
        }S && "" === c && (ig(b), b.b && b.b.transformRule(e));
      });S ? a.textContent = Le(d) : this.i.o.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;S || (c = (X(a) || X(og(this, a))).u[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.Ja = function (a, b) {
    var c = Ve(a).getRootNode(),
        d;b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];b = c.host && c.host.localName;if (!b && (c = a.getAttribute("class"))) {
      c = c.split(/\s/);for (var e = 0; e < c.length; e++) if (c[e] === V.a) {
        b = c[e + 1];break;
      }
    }b && d.push(V.a, b);S || (b = X(a)) && b.m && d.push(Pf.a, b.m);Ue(a, d.join(" "));
  };n.wa = function (a) {
    return X(a);
  };n.Ia = function (a, b) {
    W(a, b);
  };n.La = function (a, b) {
    W(a, b, !0);
  };n.Ha = function (a) {
    return Xf(a);
  };n.ya = function (a) {
    return Wf(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.Ja;Y.prototype._styleInfoForNode = Y.prototype.wa;Y.prototype.transformCustomStyleForDocument = Y.prototype.pa;Y.prototype.getStyleAst = Y.prototype.za;Y.prototype.styleAstToString = Y.prototype.Ka;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.Ia;Y.prototype.unscopeNode = Y.prototype.La;Y.prototype.scopeForNode = Y.prototype.Ha;Y.prototype.currentScopeForNode = Y.prototype.ya;Y.prototype.prepareAdoptedCssText = Y.prototype.Ea;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return Q;
      } }, nativeCss: { get: function () {
        return S;
      } } });var Z = new Y(),
      pg,
      qg;window.ShadyCSS && (pg = window.ShadyCSS.ApplyShim, qg = window.ShadyCSS.CustomStyleInterface);
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
    }, nativeCss: S, nativeShadow: Q, cssBuild: Ce, disableRuntime: De };pg && (window.ShadyCSS.ApplyShim = pg);qg && (window.ShadyCSS.CustomStyleInterface = qg);
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce.js.map