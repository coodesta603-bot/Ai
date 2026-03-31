import { j as U } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as F } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  a3 as Xn,
  a4 as Gn,
  a5 as Le,
  a6 as be,
  a7 as dr,
  a8 as Rt,
  a9 as Vn,
  aa as Wn,
  a2 as wt,
} from './index-bsLCy3LH.js';
import { A as Hn } from './Alert-lszDImnb.js';
import { S as Yn } from './index-DLsdvBKx.js';
import {
  f as Jt,
  a3 as Kn,
  A as hr,
  F as mr,
  I as Ft,
  k as fn,
  B as vr,
  j as it,
  du as Ct,
  i as Pt,
  dt as pn,
  cF as Jn,
  au as Qn,
  dv as Zn,
  cE as eu,
  g as Ue,
  ax as tu,
  hw as ru,
  br as nu,
} from './index-C8UyLGsD.js';
import { a as uu } from './filesScope-4KHGKDzQ.js';
import { E as dn, F as au, R as iu } from './constants-DVzeerl1.js';
import { d as hn, u as ou } from './store-8fdqmFXe.js';
import {
  J as Qt,
  U as cu,
  b4 as He,
  V as jt,
  M as su,
  aJ as ot,
  X as Zt,
  b5 as lu,
  O as fu,
  Q as pu,
  au as gr,
  b6 as yr,
  b7 as du,
  b8 as hu,
  aE as mu,
  b9 as vu,
  ba as gu,
  aC as br,
  aH as yu,
  N as bu,
  S as Du,
  az as Au,
  aB as Eu,
  $ as wu,
  a9 as Cu,
  a7 as Su,
  aU as Tu,
  E as xu,
} from './index-Br6hqyew.js';
import './providerConfig-qS2Xx-oI.js';
import { u as Nu } from './useClientDataSWRWithSync-BKXDfgeT.js';
import { d as ku } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { C as _u, c as Ou } from './plugins-BlQtwlHJ.js';
import { B as mn } from './Block-DDntSWi2.js';
import {
  bp as Lu,
  cw as Bu,
  b2 as vn,
  bF as Iu,
  _ as Ru,
  d3 as Fu,
  eu as Pu,
  bf as ju,
  bg as Mu,
  bh as qu,
  bi as Uu,
  e7 as $u,
  aS as zu,
  aR as Xu,
  bj as Gu,
  bk as Vu,
  bl as Wu,
  bm as Hu,
  bn as Yu,
  ai as Ku,
  bo as Ju,
} from '../vendor/vendor-icons-BHMUH78i.js';
import {
  as as gn,
  at as yn,
  h as Q,
  au as Qu,
  I as bn,
  i as Dn,
  K as er,
  j as tr,
  l as An,
  av as Zu,
  aw as ea,
  m as En,
  k as ta,
  g as me,
  H as ve,
  an as St,
  d as ra,
  E as Tt,
} from './index-CMcqKxKW.js';
import { I as na } from './Input-C_EgL0SG.js';
import { k as ua } from './Popover-Cg4CTqoX.js';
import { u as aa, a as ia, R as oa } from './index-BhTv9jof.js';
var le = (function (e) {
    return ((e[(e.Reject = 0)] = 'Reject'), (e[(e.Accept = 1)] = 'Accept'), e);
  })({}),
  Mt = Qt('LITEXML_DIFFNODE_COMMAND'),
  ca = Qt('LITEXML_DIFFNODE_ALL_COMMAND');
function Dr(e, t) {
  if (e.diffType === 'modify') {
    var r = e.getChildren();
    t === le.Accept
      ? e.replace(r[1], !1).selectEnd()
      : t === le.Reject && e.replace(r[0], !1).selectEnd();
  }
  if (e.diffType === 'remove') {
    if (t === le.Accept) e.remove();
    else if (t === le.Reject) {
      var u = e.getChildren();
      e.replace(u[0], !1).selectEnd();
    }
  }
  if (e.diffType === 'add')
    if (t === le.Accept) {
      var o = e.getChildren();
      e.replace(o[0], !1).selectEnd();
    } else t === le.Reject && e.remove();
  if (e.diffType === 'listItemModify') {
    var s = e.getChildren();
    if (t === le.Accept) {
      var l = s[1];
      if (!ot(l)) throw new Error('Expected element node as child of DiffNode');
      for (var h = l.getChildren(), d = h.length - 1; d >= 0; d--) e.insertAfter(h[d]);
      var v = e.getParentOrThrow();
      (e.remove(), v.selectEnd());
    } else if (t === le.Reject) {
      var E = s[0];
      if (!ot(E)) throw new Error('Expected element node as child of DiffNode');
      for (var S = E.getChildren(), k = S.length - 1; k >= 0; k--) e.insertAfter(S[k]);
      var W = e.getParentOrThrow();
      (e.remove(), W.selectEnd());
    }
  }
  if (
    (e.diffType === 'listItemRemove' &&
      (t === le.Accept
        ? e.getParentOrThrow().remove()
        : t === le.Reject &&
          (e.getChildren().forEach(function (x) {
            e.getParentOrThrow().append(x);
          }),
          e.getParentOrThrow().selectEnd(),
          e.remove())),
    e.diffType === 'listItemAdd')
  )
    if (t === le.Accept) {
      var J = e.getChildren();
      (J.forEach(function (x) {
        e.getParentOrThrow().append(x);
      }),
        e.getParentOrThrow().selectEnd(),
        e.remove());
    } else t === le.Reject && e.remove();
}
function sa(e) {
  return cu(
    e.registerCommand(
      Mt,
      function (t) {
        var r = t.action,
          u = t.nodeKey,
          o = e.getEditorState().read(function () {
            return su(u);
          });
        return (
          o &&
            e.update(function () {
              Dr(o, r);
            }),
          !1
        );
      },
      jt,
    ),
    e.registerCommand(
      ca,
      function (t) {
        var r = t.action,
          u = e.getEditorState().read(function () {
            return Array.from(e._editorState._nodeMap.values()).filter(function (o) {
              return o instanceof He && !!o.getParent();
            });
          });
        return (
          u.length &&
            e.update(function () {
              u.forEach(function (o) {
                Dr(o, r);
              });
            }),
          !1
        );
      },
      jt,
    ),
  );
}
var Xe = {},
  De = {},
  Be = {},
  Ar;
function dt() {
  if (Ar) return Be;
  Ar = 1;
  function e(s, l, h) {
    if ((h === void 0 && (h = Array.prototype), s && typeof h.find == 'function'))
      return h.find.call(s, l);
    for (var d = 0; d < s.length; d++)
      if (Object.prototype.hasOwnProperty.call(s, d)) {
        var v = s[d];
        if (l.call(void 0, v, d, s)) return v;
      }
  }
  function t(s, l) {
    return (l === void 0 && (l = Object), l && typeof l.freeze == 'function' ? l.freeze(s) : s);
  }
  function r(s, l) {
    if (s === null || typeof s != 'object') throw new TypeError('target is not an object');
    for (var h in l) Object.prototype.hasOwnProperty.call(l, h) && (s[h] = l[h]);
    return s;
  }
  var u = t({
      HTML: 'text/html',
      isHTML: function (s) {
        return s === u.HTML;
      },
      XML_APPLICATION: 'application/xml',
      XML_TEXT: 'text/xml',
      XML_XHTML_APPLICATION: 'application/xhtml+xml',
      XML_SVG_IMAGE: 'image/svg+xml',
    }),
    o = t({
      HTML: 'http://www.w3.org/1999/xhtml',
      isHTML: function (s) {
        return s === o.HTML;
      },
      SVG: 'http://www.w3.org/2000/svg',
      XML: 'http://www.w3.org/XML/1998/namespace',
      XMLNS: 'http://www.w3.org/2000/xmlns/',
    });
  return (
    (Be.assign = r),
    (Be.find = e),
    (Be.freeze = t),
    (Be.MIME_TYPE = u),
    (Be.NAMESPACE = o),
    Be
  );
}
var Er;
function wn() {
  if (Er) return De;
  Er = 1;
  var e = dt(),
    t = e.find,
    r = e.NAMESPACE;
  function u(n) {
    return n !== '';
  }
  function o(n) {
    return n ? n.split(/[\t\n\f\r ]+/).filter(u) : [];
  }
  function s(n, i) {
    return (n.hasOwnProperty(i) || (n[i] = !0), n);
  }
  function l(n) {
    if (!n) return [];
    var i = o(n);
    return Object.keys(i.reduce(s, {}));
  }
  function h(n) {
    return function (i) {
      return n && n.indexOf(i) !== -1;
    };
  }
  function d(n, i) {
    for (var p in n) Object.prototype.hasOwnProperty.call(n, p) && (i[p] = n[p]);
  }
  function v(n, i) {
    var p = n.prototype;
    if (!(p instanceof i)) {
      let b = function () {};
      ((b.prototype = i.prototype), (b = new b()), d(p, b), (n.prototype = p = b));
    }
    p.constructor != n &&
      (typeof n != 'function' && console.error('unknown Class:' + n), (p.constructor = n));
  }
  var E = {},
    S = (E.ELEMENT_NODE = 1),
    k = (E.ATTRIBUTE_NODE = 2),
    W = (E.TEXT_NODE = 3),
    J = (E.CDATA_SECTION_NODE = 4),
    x = (E.ENTITY_REFERENCE_NODE = 5),
    A = (E.ENTITY_NODE = 6),
    B = (E.PROCESSING_INSTRUCTION_NODE = 7),
    L = (E.COMMENT_NODE = 8),
    _ = (E.DOCUMENT_NODE = 9),
    z = (E.DOCUMENT_TYPE_NODE = 10),
    X = (E.DOCUMENT_FRAGMENT_NODE = 11),
    $ = (E.NOTATION_NODE = 12),
    T = {},
    V = {};
  ((T.INDEX_SIZE_ERR = ((V[1] = 'Index size error'), 1)),
    (T.DOMSTRING_SIZE_ERR = ((V[2] = 'DOMString size error'), 2)));
  var D = (T.HIERARCHY_REQUEST_ERR = ((V[3] = 'Hierarchy request error'), 3));
  T.WRONG_DOCUMENT_ERR = ((V[4] = 'Wrong document'), 4);
  var C = (T.INVALID_CHARACTER_ERR = ((V[5] = 'Invalid character'), 5));
  ((T.NO_DATA_ALLOWED_ERR = ((V[6] = 'No data allowed'), 6)),
    (T.NO_MODIFICATION_ALLOWED_ERR = ((V[7] = 'No modification allowed'), 7)));
  var R = (T.NOT_FOUND_ERR = ((V[8] = 'Not found'), 8));
  T.NOT_SUPPORTED_ERR = ((V[9] = 'Not supported'), 9);
  var I = (T.INUSE_ATTRIBUTE_ERR = ((V[10] = 'Attribute in use'), 10));
  ((T.INVALID_STATE_ERR = ((V[11] = 'Invalid state'), 11)),
    (T.SYNTAX_ERR = ((V[12] = 'Syntax error'), 12)),
    (T.INVALID_MODIFICATION_ERR = ((V[13] = 'Invalid modification'), 13)),
    (T.NAMESPACE_ERR = ((V[14] = 'Invalid namespace'), 14)),
    (T.INVALID_ACCESS_ERR = ((V[15] = 'Invalid access'), 15)));
  function N(n, i) {
    if (i instanceof Error) var p = i;
    else
      ((p = this),
        Error.call(this, V[n]),
        (this.message = V[n]),
        Error.captureStackTrace && Error.captureStackTrace(this, N));
    return ((p.code = n), i && (this.message = this.message + ': ' + i), p);
  }
  ((N.prototype = Error.prototype), d(T, N));
  function j() {}
  j.prototype = {
    length: 0,
    item: function (n) {
      return n >= 0 && n < this.length ? this[n] : null;
    },
    toString: function (n, i) {
      for (var p = [], b = 0; b < this.length; b++) Pe(this[b], p, n, i);
      return p.join('');
    },
    filter: function (n) {
      return Array.prototype.filter.call(this, n);
    },
    indexOf: function (n) {
      return Array.prototype.indexOf.call(this, n);
    },
  };
  function M(n, i) {
    ((this._node = n), (this._refresh = i), f(this));
  }
  function f(n) {
    var i = n._node._inc || n._node.ownerDocument._inc;
    if (n._inc !== i) {
      var p = n._refresh(n._node);
      if ((lr(n, 'length', p.length), !n.$$length || p.length < n.$$length))
        for (var b = p.length; b in n; b++)
          Object.prototype.hasOwnProperty.call(n, b) && delete n[b];
      (d(p, n), (n._inc = i));
    }
  }
  ((M.prototype.item = function (n) {
    return (f(this), this[n] || null);
  }),
    v(M, j));
  function a() {}
  function c(n, i) {
    for (var p = n.length; p--; ) if (n[p] === i) return p;
  }
  function m(n, i, p, b) {
    if ((b ? (i[c(i, b)] = p) : (i[i.length++] = p), n)) {
      p.ownerElement = n;
      var O = n.ownerDocument;
      O && (b && K(O, n, b), Y(O, n, p));
    }
  }
  function y(n, i, p) {
    var b = c(i, p);
    if (b >= 0) {
      for (var O = i.length - 1; b < O; ) i[b] = i[++b];
      if (((i.length = O), n)) {
        var H = n.ownerDocument;
        H && (K(H, n, p), (p.ownerElement = null));
      }
    } else throw new N(R, new Error(n.tagName + '@' + p));
  }
  a.prototype = {
    length: 0,
    item: j.prototype.item,
    getNamedItem: function (n) {
      for (var i = this.length; i--; ) {
        var p = this[i];
        if (p.nodeName == n) return p;
      }
    },
    setNamedItem: function (n) {
      var i = n.ownerElement;
      if (i && i != this._ownerElement) throw new N(I);
      var p = this.getNamedItem(n.nodeName);
      return (m(this._ownerElement, this, n, p), p);
    },
    setNamedItemNS: function (n) {
      var i = n.ownerElement,
        p;
      if (i && i != this._ownerElement) throw new N(I);
      return (
        (p = this.getNamedItemNS(n.namespaceURI, n.localName)),
        m(this._ownerElement, this, n, p),
        p
      );
    },
    removeNamedItem: function (n) {
      var i = this.getNamedItem(n);
      return (y(this._ownerElement, this, i), i);
    },
    removeNamedItemNS: function (n, i) {
      var p = this.getNamedItemNS(n, i);
      return (y(this._ownerElement, this, p), p);
    },
    getNamedItemNS: function (n, i) {
      for (var p = this.length; p--; ) {
        var b = this[p];
        if (b.localName == i && b.namespaceURI == n) return b;
      }
      return null;
    },
  };
  function g() {}
  g.prototype = {
    hasFeature: function (n, i) {
      return !0;
    },
    createDocument: function (n, i, p) {
      var b = new q();
      if (
        ((b.implementation = this),
        (b.childNodes = new j()),
        (b.doctype = p || null),
        p && b.appendChild(p),
        i)
      ) {
        var O = b.createElementNS(n, i);
        b.appendChild(O);
      }
      return b;
    },
    createDocumentType: function (n, i, p) {
      var b = new Ze();
      return ((b.name = n), (b.nodeName = n), (b.publicId = i || ''), (b.systemId = p || ''), b);
    },
  };
  function w() {}
  w.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (n, i) {
      return xe(this, n, i);
    },
    replaceChild: function (n, i) {
      (xe(this, n, i, Fe), i && this.removeChild(i));
    },
    removeChild: function (n) {
      return ue(this, n);
    },
    appendChild: function (n) {
      return this.insertBefore(n, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (n) {
      return Et(this.ownerDocument || this, this, n);
    },
    normalize: function () {
      for (var n = this.firstChild; n; ) {
        var i = n.nextSibling;
        i && i.nodeType == W && n.nodeType == W
          ? (this.removeChild(i), n.appendData(i.data))
          : (n.normalize(), (n = i));
      }
    },
    isSupported: function (n, i) {
      return this.ownerDocument.implementation.hasFeature(n, i);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (n) {
      for (var i = this; i; ) {
        var p = i._nsMap;
        if (p) {
          for (var b in p) if (Object.prototype.hasOwnProperty.call(p, b) && p[b] === n) return b;
        }
        i = i.nodeType == k ? i.ownerDocument : i.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (n) {
      for (var i = this; i; ) {
        var p = i._nsMap;
        if (p && Object.prototype.hasOwnProperty.call(p, n)) return p[n];
        i = i.nodeType == k ? i.ownerDocument : i.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (n) {
      var i = this.lookupPrefix(n);
      return i == null;
    },
  };
  function G(n) {
    return (
      (n == '<' && '&lt;') ||
      (n == '>' && '&gt;') ||
      (n == '&' && '&amp;') ||
      (n == '"' && '&quot;') ||
      '&#' + n.charCodeAt() + ';'
    );
  }
  (d(E, w), d(E, w.prototype));
  function P(n, i) {
    if (i(n)) return !0;
    if ((n = n.firstChild))
      do if (P(n, i)) return !0;
      while ((n = n.nextSibling));
  }
  function q() {
    this.ownerDocument = this;
  }
  function Y(n, i, p) {
    n && n._inc++;
    var b = p.namespaceURI;
    b === r.XMLNS && (i._nsMap[p.prefix ? p.localName : ''] = p.value);
  }
  function K(n, i, p, b) {
    n && n._inc++;
    var O = p.namespaceURI;
    O === r.XMLNS && delete i._nsMap[p.prefix ? p.localName : ''];
  }
  function te(n, i, p) {
    if (n && n._inc) {
      n._inc++;
      var b = i.childNodes;
      if (p) b[b.length++] = p;
      else {
        for (var O = i.firstChild, H = 0; O; ) ((b[H++] = O), (O = O.nextSibling));
        ((b.length = H), delete b[b.length]);
      }
    }
  }
  function ue(n, i) {
    var p = i.previousSibling,
      b = i.nextSibling;
    return (
      p ? (p.nextSibling = b) : (n.firstChild = b),
      b ? (b.previousSibling = p) : (n.lastChild = p),
      (i.parentNode = null),
      (i.previousSibling = null),
      (i.nextSibling = null),
      te(n.ownerDocument, n),
      i
    );
  }
  function de(n) {
    return (
      n &&
      (n.nodeType === w.DOCUMENT_NODE ||
        n.nodeType === w.DOCUMENT_FRAGMENT_NODE ||
        n.nodeType === w.ELEMENT_NODE)
    );
  }
  function fe(n) {
    return (
      n &&
      (ie(n) ||
        ne(n) ||
        oe(n) ||
        n.nodeType === w.DOCUMENT_FRAGMENT_NODE ||
        n.nodeType === w.COMMENT_NODE ||
        n.nodeType === w.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function oe(n) {
    return n && n.nodeType === w.DOCUMENT_TYPE_NODE;
  }
  function ie(n) {
    return n && n.nodeType === w.ELEMENT_NODE;
  }
  function ne(n) {
    return n && n.nodeType === w.TEXT_NODE;
  }
  function Re(n, i) {
    var p = n.childNodes || [];
    if (t(p, ie) || oe(i)) return !1;
    var b = t(p, oe);
    return !(i && b && p.indexOf(b) > p.indexOf(i));
  }
  function re(n, i) {
    var p = n.childNodes || [];
    function b(H) {
      return ie(H) && H !== i;
    }
    if (t(p, b)) return !1;
    var O = t(p, oe);
    return !(i && O && p.indexOf(O) > p.indexOf(i));
  }
  function Je(n, i, p) {
    if (!de(n)) throw new N(D, 'Unexpected parent node type ' + n.nodeType);
    if (p && p.parentNode !== n) throw new N(R, 'child not in parent');
    if (!fe(i) || (oe(i) && n.nodeType !== w.DOCUMENT_NODE))
      throw new N(D, 'Unexpected node type ' + i.nodeType + ' for parent node type ' + n.nodeType);
  }
  function mt(n, i, p) {
    var b = n.childNodes || [],
      O = i.childNodes || [];
    if (i.nodeType === w.DOCUMENT_FRAGMENT_NODE) {
      var H = O.filter(ie);
      if (H.length > 1 || t(O, ne)) throw new N(D, 'More than one element or text in fragment');
      if (H.length === 1 && !Re(n, p))
        throw new N(D, 'Element in fragment can not be inserted before doctype');
    }
    if (ie(i) && !Re(n, p)) throw new N(D, 'Only one element can be added and only after doctype');
    if (oe(i)) {
      if (t(b, oe)) throw new N(D, 'Only one doctype is allowed');
      var ee = t(b, ie);
      if (p && b.indexOf(ee) < b.indexOf(p))
        throw new N(D, 'Doctype can only be inserted before an element');
      if (!p && ee) throw new N(D, 'Doctype can not be appended since element is present');
    }
  }
  function Fe(n, i, p) {
    var b = n.childNodes || [],
      O = i.childNodes || [];
    if (i.nodeType === w.DOCUMENT_FRAGMENT_NODE) {
      var H = O.filter(ie);
      if (H.length > 1 || t(O, ne)) throw new N(D, 'More than one element or text in fragment');
      if (H.length === 1 && !re(n, p))
        throw new N(D, 'Element in fragment can not be inserted before doctype');
    }
    if (ie(i) && !re(n, p)) throw new N(D, 'Only one element can be added and only after doctype');
    if (oe(i)) {
      if (
        t(b, function (pe) {
          return oe(pe) && pe !== p;
        })
      )
        throw new N(D, 'Only one doctype is allowed');
      var ee = t(b, ie);
      if (p && b.indexOf(ee) < b.indexOf(p))
        throw new N(D, 'Doctype can only be inserted before an element');
    }
  }
  function xe(n, i, p, b) {
    (Je(n, i, p), n.nodeType === w.DOCUMENT_NODE && (b || mt)(n, i, p));
    var O = i.parentNode;
    if ((O && O.removeChild(i), i.nodeType === X)) {
      var H = i.firstChild;
      if (H == null) return i;
      var ee = i.lastChild;
    } else H = ee = i;
    var se = p ? p.previousSibling : n.lastChild;
    ((H.previousSibling = se),
      (ee.nextSibling = p),
      se ? (se.nextSibling = H) : (n.firstChild = H),
      p == null ? (n.lastChild = ee) : (p.previousSibling = ee));
    do {
      H.parentNode = n;
      var pe = n.ownerDocument || n;
      Z(H, pe);
    } while (H !== ee && (H = H.nextSibling));
    return (te(n.ownerDocument || n, n), i.nodeType == X && (i.firstChild = i.lastChild = null), i);
  }
  function Z(n, i) {
    if (n.ownerDocument !== i) {
      if (((n.ownerDocument = i), n.nodeType === S && n.attributes))
        for (var p = 0; p < n.attributes.length; p++) {
          var b = n.attributes.item(p);
          b && (b.ownerDocument = i);
        }
      for (var O = n.firstChild; O; ) (Z(O, i), (O = O.nextSibling));
    }
  }
  function ce(n, i) {
    (i.parentNode && i.parentNode.removeChild(i),
      (i.parentNode = n),
      (i.previousSibling = n.lastChild),
      (i.nextSibling = null),
      i.previousSibling ? (i.previousSibling.nextSibling = i) : (n.firstChild = i),
      (n.lastChild = i),
      te(n.ownerDocument, n, i));
    var p = n.ownerDocument || n;
    return (Z(i, p), i);
  }
  ((q.prototype = {
    nodeName: '#document',
    nodeType: _,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (n, i) {
      if (n.nodeType == X) {
        for (var p = n.firstChild; p; ) {
          var b = p.nextSibling;
          (this.insertBefore(p, i), (p = b));
        }
        return n;
      }
      return (
        xe(this, n, i),
        Z(n, this),
        this.documentElement === null && n.nodeType === S && (this.documentElement = n),
        n
      );
    },
    removeChild: function (n) {
      return (this.documentElement == n && (this.documentElement = null), ue(this, n));
    },
    replaceChild: function (n, i) {
      (xe(this, n, i, Fe),
        Z(n, this),
        i && this.removeChild(i),
        ie(n) && (this.documentElement = n));
    },
    importNode: function (n, i) {
      return sr(this, n, i);
    },
    getElementById: function (n) {
      var i = null;
      return (
        P(this.documentElement, function (p) {
          if (p.nodeType == S && p.getAttribute('id') == n) return ((i = p), !0);
        }),
        i
      );
    },
    getElementsByClassName: function (n) {
      var i = l(n);
      return new M(this, function (p) {
        var b = [];
        return (
          i.length > 0 &&
            P(p.documentElement, function (O) {
              if (O !== p && O.nodeType === S) {
                var H = O.getAttribute('class');
                if (H) {
                  var ee = n === H;
                  if (!ee) {
                    var se = l(H);
                    ee = i.every(h(se));
                  }
                  ee && b.push(O);
                }
              }
            }),
          b
        );
      });
    },
    createElement: function (n) {
      var i = new ge();
      ((i.ownerDocument = this),
        (i.nodeName = n),
        (i.tagName = n),
        (i.localName = n),
        (i.childNodes = new j()));
      var p = (i.attributes = new a());
      return ((p._ownerElement = i), i);
    },
    createDocumentFragment: function () {
      var n = new et();
      return ((n.ownerDocument = this), (n.childNodes = new j()), n);
    },
    createTextNode: function (n) {
      var i = new vt();
      return ((i.ownerDocument = this), i.appendData(n), i);
    },
    createComment: function (n) {
      var i = new gt();
      return ((i.ownerDocument = this), i.appendData(n), i);
    },
    createCDATASection: function (n) {
      if (n.indexOf(']]>') !== -1) throw new N(C, 'data contains "]]>"');
      var i = new yt();
      return ((i.ownerDocument = this), i.appendData(n), i);
    },
    createProcessingInstruction: function (n, i) {
      var p = new Dt();
      return (
        (p.ownerDocument = this),
        (p.tagName = p.nodeName = p.target = n),
        (p.nodeValue = p.data = i),
        p
      );
    },
    createAttribute: function (n) {
      var i = new Qe();
      return (
        (i.ownerDocument = this),
        (i.name = n),
        (i.nodeName = n),
        (i.localName = n),
        (i.specified = !0),
        i
      );
    },
    createEntityReference: function (n) {
      var i = new bt();
      return ((i.ownerDocument = this), (i.nodeName = n), i);
    },
    createElementNS: function (n, i) {
      var p = new ge(),
        b = i.split(':'),
        O = (p.attributes = new a());
      return (
        (p.childNodes = new j()),
        (p.ownerDocument = this),
        (p.nodeName = i),
        (p.tagName = i),
        (p.namespaceURI = n),
        b.length == 2 ? ((p.prefix = b[0]), (p.localName = b[1])) : (p.localName = i),
        (O._ownerElement = p),
        p
      );
    },
    createAttributeNS: function (n, i) {
      var p = new Qe(),
        b = i.split(':');
      return (
        (p.ownerDocument = this),
        (p.nodeName = i),
        (p.name = i),
        (p.namespaceURI = n),
        (p.specified = !0),
        b.length == 2 ? ((p.prefix = b[0]), (p.localName = b[1])) : (p.localName = i),
        p
      );
    },
  }),
    v(q, w));
  function ge() {
    this._nsMap = {};
  }
  ((ge.prototype = {
    nodeType: S,
    hasAttribute: function (n) {
      return this.getAttributeNode(n) != null;
    },
    getAttribute: function (n) {
      var i = this.getAttributeNode(n);
      return (i && i.value) || '';
    },
    getAttributeNode: function (n) {
      return this.attributes.getNamedItem(n);
    },
    setAttribute: function (n, i) {
      var p = this.ownerDocument.createAttribute(n);
      ((p.value = p.nodeValue = '' + i), this.setAttributeNode(p));
    },
    removeAttribute: function (n) {
      var i = this.getAttributeNode(n);
      i && this.removeAttributeNode(i);
    },
    appendChild: function (n) {
      return n.nodeType === X ? this.insertBefore(n, null) : ce(this, n);
    },
    setAttributeNode: function (n) {
      return this.attributes.setNamedItem(n);
    },
    setAttributeNodeNS: function (n) {
      return this.attributes.setNamedItemNS(n);
    },
    removeAttributeNode: function (n) {
      return this.attributes.removeNamedItem(n.nodeName);
    },
    removeAttributeNS: function (n, i) {
      var p = this.getAttributeNodeNS(n, i);
      p && this.removeAttributeNode(p);
    },
    hasAttributeNS: function (n, i) {
      return this.getAttributeNodeNS(n, i) != null;
    },
    getAttributeNS: function (n, i) {
      var p = this.getAttributeNodeNS(n, i);
      return (p && p.value) || '';
    },
    setAttributeNS: function (n, i, p) {
      var b = this.ownerDocument.createAttributeNS(n, i);
      ((b.value = b.nodeValue = '' + p), this.setAttributeNode(b));
    },
    getAttributeNodeNS: function (n, i) {
      return this.attributes.getNamedItemNS(n, i);
    },
    getElementsByTagName: function (n) {
      return new M(this, function (i) {
        var p = [];
        return (
          P(i, function (b) {
            b !== i && b.nodeType == S && (n === '*' || b.tagName == n) && p.push(b);
          }),
          p
        );
      });
    },
    getElementsByTagNameNS: function (n, i) {
      return new M(this, function (p) {
        var b = [];
        return (
          P(p, function (O) {
            O !== p &&
              O.nodeType === S &&
              (n === '*' || O.namespaceURI === n) &&
              (i === '*' || O.localName == i) &&
              b.push(O);
          }),
          b
        );
      });
    },
  }),
    (q.prototype.getElementsByTagName = ge.prototype.getElementsByTagName),
    (q.prototype.getElementsByTagNameNS = ge.prototype.getElementsByTagNameNS),
    v(ge, w));
  function Qe() {}
  ((Qe.prototype.nodeType = k), v(Qe, w));
  function $e() {}
  (($e.prototype = {
    data: '',
    substringData: function (n, i) {
      return this.data.substring(n, n + i);
    },
    appendData: function (n) {
      ((n = this.data + n), (this.nodeValue = this.data = n), (this.length = n.length));
    },
    insertData: function (n, i) {
      this.replaceData(n, 0, i);
    },
    appendChild: function (n) {
      throw new Error(V[D]);
    },
    deleteData: function (n, i) {
      this.replaceData(n, i, '');
    },
    replaceData: function (n, i, p) {
      var b = this.data.substring(0, n),
        O = this.data.substring(n + i);
      ((p = b + p + O), (this.nodeValue = this.data = p), (this.length = p.length));
    },
  }),
    v($e, w));
  function vt() {}
  ((vt.prototype = {
    nodeName: '#text',
    nodeType: W,
    splitText: function (n) {
      var i = this.data,
        p = i.substring(n);
      ((i = i.substring(0, n)), (this.data = this.nodeValue = i), (this.length = i.length));
      var b = this.ownerDocument.createTextNode(p);
      return (this.parentNode && this.parentNode.insertBefore(b, this.nextSibling), b);
    },
  }),
    v(vt, $e));
  function gt() {}
  ((gt.prototype = { nodeName: '#comment', nodeType: L }), v(gt, $e));
  function yt() {}
  ((yt.prototype = { nodeName: '#cdata-section', nodeType: J }), v(yt, $e));
  function Ze() {}
  ((Ze.prototype.nodeType = z), v(Ze, w));
  function ur() {}
  ((ur.prototype.nodeType = $), v(ur, w));
  function ar() {}
  ((ar.prototype.nodeType = A), v(ar, w));
  function bt() {}
  ((bt.prototype.nodeType = x), v(bt, w));
  function et() {}
  ((et.prototype.nodeName = '#document-fragment'), (et.prototype.nodeType = X), v(et, w));
  function Dt() {}
  ((Dt.prototype.nodeType = B), v(Dt, w));
  function ir() {}
  ((ir.prototype.serializeToString = function (n, i, p) {
    return or.call(n, i, p);
  }),
    (w.prototype.toString = or));
  function or(n, i) {
    var p = [],
      b = (this.nodeType == 9 && this.documentElement) || this,
      O = b.prefix,
      H = b.namespaceURI;
    if (H && O == null) {
      var O = b.lookupPrefix(H);
      if (O == null) var ee = [{ namespace: H, prefix: null }];
    }
    return (Pe(this, p, n, i, ee), p.join(''));
  }
  function cr(n, i, p) {
    var b = n.prefix || '',
      O = n.namespaceURI;
    if (!O || (b === 'xml' && O === r.XML) || O === r.XMLNS) return !1;
    for (var H = p.length; H--; ) {
      var ee = p[H];
      if (ee.prefix === b) return ee.namespace !== O;
    }
    return !0;
  }
  function At(n, i, p) {
    n.push(' ', i, '="', p.replace(/[<>&"\t\n\r]/g, G), '"');
  }
  function Pe(n, i, p, b, O) {
    if ((O || (O = []), b))
      if (((n = b(n)), n)) {
        if (typeof n == 'string') {
          i.push(n);
          return;
        }
      } else return;
    switch (n.nodeType) {
      case S:
        var H = n.attributes,
          ee = H.length,
          ae = n.firstChild,
          se = n.tagName;
        p = r.isHTML(n.namespaceURI) || p;
        var pe = se;
        if (!p && !n.prefix && n.namespaceURI) {
          for (var Ee, ye = 0; ye < H.length; ye++)
            if (H.item(ye).name === 'xmlns') {
              Ee = H.item(ye).value;
              break;
            }
          if (!Ee)
            for (var Ne = O.length - 1; Ne >= 0; Ne--) {
              var ke = O[Ne];
              if (ke.prefix === '' && ke.namespace === n.namespaceURI) {
                Ee = ke.namespace;
                break;
              }
            }
          if (Ee !== n.namespaceURI)
            for (var Ne = O.length - 1; Ne >= 0; Ne--) {
              var ke = O[Ne];
              if (ke.namespace === n.namespaceURI) {
                ke.prefix && (pe = ke.prefix + ':' + se);
                break;
              }
            }
        }
        i.push('<', pe);
        for (var _e = 0; _e < ee; _e++) {
          var he = H.item(_e);
          he.prefix == 'xmlns'
            ? O.push({ prefix: he.localName, namespace: he.value })
            : he.nodeName == 'xmlns' && O.push({ prefix: '', namespace: he.value });
        }
        for (var _e = 0; _e < ee; _e++) {
          var he = H.item(_e);
          if (cr(he, p, O)) {
            var Oe = he.prefix || '',
              ze = he.namespaceURI;
            (At(i, Oe ? 'xmlns:' + Oe : 'xmlns', ze), O.push({ prefix: Oe, namespace: ze }));
          }
          Pe(he, i, p, b, O);
        }
        if (se === pe && cr(n, p, O)) {
          var Oe = n.prefix || '',
            ze = n.namespaceURI;
          (At(i, Oe ? 'xmlns:' + Oe : 'xmlns', ze), O.push({ prefix: Oe, namespace: ze }));
        }
        if (ae || (p && !/^(?:meta|link|img|br|hr|input)$/i.test(se))) {
          if ((i.push('>'), p && /^script$/i.test(se)))
            for (; ae; )
              (ae.data ? i.push(ae.data) : Pe(ae, i, p, b, O.slice()), (ae = ae.nextSibling));
          else for (; ae; ) (Pe(ae, i, p, b, O.slice()), (ae = ae.nextSibling));
          i.push('</', pe, '>');
        } else i.push('/>');
        return;
      case _:
      case X:
        for (var ae = n.firstChild; ae; ) (Pe(ae, i, p, b, O.slice()), (ae = ae.nextSibling));
        return;
      case k:
        return At(i, n.name, n.value);
      case W:
        return i.push(n.data.replace(/[<&>]/g, G));
      case J:
        return i.push('<![CDATA[', n.data.replace(/]]>/g, ']]]]><![CDATA[>'), ']]>');
      case L:
        return i.push('<!--', n.data, '-->');
      case z:
        var fr = n.publicId,
          je = n.systemId;
        if ((i.push('<!DOCTYPE ', n.name), fr))
          (i.push(' PUBLIC ', fr), je && je != '.' && i.push(' ', je), i.push('>'));
        else if (je && je != '.') i.push(' SYSTEM ', je, '>');
        else {
          var pr = n.internalSubset;
          (pr && i.push(' [', pr, ']'), i.push('>'));
        }
        return;
      case B:
        return i.push('<?', n.target, ' ', n.data, '?>');
      case x:
        return i.push('&', n.nodeName, ';');
      default:
        i.push('??', n.nodeName);
    }
  }
  function sr(n, i, p) {
    var b;
    switch (i.nodeType) {
      case S:
        ((b = i.cloneNode(!1)), (b.ownerDocument = n));
      case X:
        break;
      case k:
        p = !0;
        break;
    }
    if ((b || (b = i.cloneNode(!1)), (b.ownerDocument = n), (b.parentNode = null), p))
      for (var O = i.firstChild; O; ) (b.appendChild(sr(n, O, p)), (O = O.nextSibling));
    return b;
  }
  function Et(n, i, p) {
    var b = new i.constructor();
    for (var O in i)
      if (Object.prototype.hasOwnProperty.call(i, O)) {
        var H = i[O];
        typeof H != 'object' && H != b[O] && (b[O] = H);
      }
    switch ((i.childNodes && (b.childNodes = new j()), (b.ownerDocument = n), b.nodeType)) {
      case S:
        var ee = i.attributes,
          se = (b.attributes = new a()),
          pe = ee.length;
        se._ownerElement = b;
        for (var Ee = 0; Ee < pe; Ee++) b.setAttributeNode(Et(n, ee.item(Ee), !0));
        break;
      case k:
        p = !0;
    }
    if (p) for (var ye = i.firstChild; ye; ) (b.appendChild(Et(n, ye, p)), (ye = ye.nextSibling));
    return b;
  }
  function lr(n, i, p) {
    n[i] = p;
  }
  try {
    if (Object.defineProperty) {
      let n = function (i) {
        switch (i.nodeType) {
          case S:
          case X:
            var p = [];
            for (i = i.firstChild; i; )
              (i.nodeType !== 7 && i.nodeType !== 8 && p.push(n(i)), (i = i.nextSibling));
            return p.join('');
          default:
            return i.nodeValue;
        }
      };
      (Object.defineProperty(M.prototype, 'length', {
        get: function () {
          return (f(this), this.$$length);
        },
      }),
        Object.defineProperty(w.prototype, 'textContent', {
          get: function () {
            return n(this);
          },
          set: function (i) {
            switch (this.nodeType) {
              case S:
              case X:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (i || String(i)) && this.appendChild(this.ownerDocument.createTextNode(i));
                break;
              default:
                ((this.data = i), (this.value = i), (this.nodeValue = i));
            }
          },
        }),
        (lr = function (i, p, b) {
          i['$$' + p] = b;
        }));
    }
  } catch {}
  return (
    (De.DocumentType = Ze),
    (De.DOMException = N),
    (De.DOMImplementation = g),
    (De.Element = ge),
    (De.Node = w),
    (De.NodeList = j),
    (De.XMLSerializer = ir),
    De
  );
}
var Ge = {},
  xt = {},
  wr;
function la() {
  return (
    wr ||
      ((wr = 1),
      (function (e) {
        var t = dt().freeze;
        ((e.XML_ENTITIES = t({ amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' })),
          (e.HTML_ENTITIES = t({
            Aacute: 'Á',
            aacute: 'á',
            Abreve: 'Ă',
            abreve: 'ă',
            ac: '∾',
            acd: '∿',
            acE: '∾̳',
            Acirc: 'Â',
            acirc: 'â',
            acute: '´',
            Acy: 'А',
            acy: 'а',
            AElig: 'Æ',
            aelig: 'æ',
            af: '⁡',
            Afr: '𝔄',
            afr: '𝔞',
            Agrave: 'À',
            agrave: 'à',
            alefsym: 'ℵ',
            aleph: 'ℵ',
            Alpha: 'Α',
            alpha: 'α',
            Amacr: 'Ā',
            amacr: 'ā',
            amalg: '⨿',
            AMP: '&',
            amp: '&',
            And: '⩓',
            and: '∧',
            andand: '⩕',
            andd: '⩜',
            andslope: '⩘',
            andv: '⩚',
            ang: '∠',
            ange: '⦤',
            angle: '∠',
            angmsd: '∡',
            angmsdaa: '⦨',
            angmsdab: '⦩',
            angmsdac: '⦪',
            angmsdad: '⦫',
            angmsdae: '⦬',
            angmsdaf: '⦭',
            angmsdag: '⦮',
            angmsdah: '⦯',
            angrt: '∟',
            angrtvb: '⊾',
            angrtvbd: '⦝',
            angsph: '∢',
            angst: 'Å',
            angzarr: '⍼',
            Aogon: 'Ą',
            aogon: 'ą',
            Aopf: '𝔸',
            aopf: '𝕒',
            ap: '≈',
            apacir: '⩯',
            apE: '⩰',
            ape: '≊',
            apid: '≋',
            apos: "'",
            ApplyFunction: '⁡',
            approx: '≈',
            approxeq: '≊',
            Aring: 'Å',
            aring: 'å',
            Ascr: '𝒜',
            ascr: '𝒶',
            Assign: '≔',
            ast: '*',
            asymp: '≈',
            asympeq: '≍',
            Atilde: 'Ã',
            atilde: 'ã',
            Auml: 'Ä',
            auml: 'ä',
            awconint: '∳',
            awint: '⨑',
            backcong: '≌',
            backepsilon: '϶',
            backprime: '‵',
            backsim: '∽',
            backsimeq: '⋍',
            Backslash: '∖',
            Barv: '⫧',
            barvee: '⊽',
            Barwed: '⌆',
            barwed: '⌅',
            barwedge: '⌅',
            bbrk: '⎵',
            bbrktbrk: '⎶',
            bcong: '≌',
            Bcy: 'Б',
            bcy: 'б',
            bdquo: '„',
            becaus: '∵',
            Because: '∵',
            because: '∵',
            bemptyv: '⦰',
            bepsi: '϶',
            bernou: 'ℬ',
            Bernoullis: 'ℬ',
            Beta: 'Β',
            beta: 'β',
            beth: 'ℶ',
            between: '≬',
            Bfr: '𝔅',
            bfr: '𝔟',
            bigcap: '⋂',
            bigcirc: '◯',
            bigcup: '⋃',
            bigodot: '⨀',
            bigoplus: '⨁',
            bigotimes: '⨂',
            bigsqcup: '⨆',
            bigstar: '★',
            bigtriangledown: '▽',
            bigtriangleup: '△',
            biguplus: '⨄',
            bigvee: '⋁',
            bigwedge: '⋀',
            bkarow: '⤍',
            blacklozenge: '⧫',
            blacksquare: '▪',
            blacktriangle: '▴',
            blacktriangledown: '▾',
            blacktriangleleft: '◂',
            blacktriangleright: '▸',
            blank: '␣',
            blk12: '▒',
            blk14: '░',
            blk34: '▓',
            block: '█',
            bne: '=⃥',
            bnequiv: '≡⃥',
            bNot: '⫭',
            bnot: '⌐',
            Bopf: '𝔹',
            bopf: '𝕓',
            bot: '⊥',
            bottom: '⊥',
            bowtie: '⋈',
            boxbox: '⧉',
            boxDL: '╗',
            boxDl: '╖',
            boxdL: '╕',
            boxdl: '┐',
            boxDR: '╔',
            boxDr: '╓',
            boxdR: '╒',
            boxdr: '┌',
            boxH: '═',
            boxh: '─',
            boxHD: '╦',
            boxHd: '╤',
            boxhD: '╥',
            boxhd: '┬',
            boxHU: '╩',
            boxHu: '╧',
            boxhU: '╨',
            boxhu: '┴',
            boxminus: '⊟',
            boxplus: '⊞',
            boxtimes: '⊠',
            boxUL: '╝',
            boxUl: '╜',
            boxuL: '╛',
            boxul: '┘',
            boxUR: '╚',
            boxUr: '╙',
            boxuR: '╘',
            boxur: '└',
            boxV: '║',
            boxv: '│',
            boxVH: '╬',
            boxVh: '╫',
            boxvH: '╪',
            boxvh: '┼',
            boxVL: '╣',
            boxVl: '╢',
            boxvL: '╡',
            boxvl: '┤',
            boxVR: '╠',
            boxVr: '╟',
            boxvR: '╞',
            boxvr: '├',
            bprime: '‵',
            Breve: '˘',
            breve: '˘',
            brvbar: '¦',
            Bscr: 'ℬ',
            bscr: '𝒷',
            bsemi: '⁏',
            bsim: '∽',
            bsime: '⋍',
            bsol: '\\',
            bsolb: '⧅',
            bsolhsub: '⟈',
            bull: '•',
            bullet: '•',
            bump: '≎',
            bumpE: '⪮',
            bumpe: '≏',
            Bumpeq: '≎',
            bumpeq: '≏',
            Cacute: 'Ć',
            cacute: 'ć',
            Cap: '⋒',
            cap: '∩',
            capand: '⩄',
            capbrcup: '⩉',
            capcap: '⩋',
            capcup: '⩇',
            capdot: '⩀',
            CapitalDifferentialD: 'ⅅ',
            caps: '∩︀',
            caret: '⁁',
            caron: 'ˇ',
            Cayleys: 'ℭ',
            ccaps: '⩍',
            Ccaron: 'Č',
            ccaron: 'č',
            Ccedil: 'Ç',
            ccedil: 'ç',
            Ccirc: 'Ĉ',
            ccirc: 'ĉ',
            Cconint: '∰',
            ccups: '⩌',
            ccupssm: '⩐',
            Cdot: 'Ċ',
            cdot: 'ċ',
            cedil: '¸',
            Cedilla: '¸',
            cemptyv: '⦲',
            cent: '¢',
            CenterDot: '·',
            centerdot: '·',
            Cfr: 'ℭ',
            cfr: '𝔠',
            CHcy: 'Ч',
            chcy: 'ч',
            check: '✓',
            checkmark: '✓',
            Chi: 'Χ',
            chi: 'χ',
            cir: '○',
            circ: 'ˆ',
            circeq: '≗',
            circlearrowleft: '↺',
            circlearrowright: '↻',
            circledast: '⊛',
            circledcirc: '⊚',
            circleddash: '⊝',
            CircleDot: '⊙',
            circledR: '®',
            circledS: 'Ⓢ',
            CircleMinus: '⊖',
            CirclePlus: '⊕',
            CircleTimes: '⊗',
            cirE: '⧃',
            cire: '≗',
            cirfnint: '⨐',
            cirmid: '⫯',
            cirscir: '⧂',
            ClockwiseContourIntegral: '∲',
            CloseCurlyDoubleQuote: '”',
            CloseCurlyQuote: '’',
            clubs: '♣',
            clubsuit: '♣',
            Colon: '∷',
            colon: ':',
            Colone: '⩴',
            colone: '≔',
            coloneq: '≔',
            comma: ',',
            commat: '@',
            comp: '∁',
            compfn: '∘',
            complement: '∁',
            complexes: 'ℂ',
            cong: '≅',
            congdot: '⩭',
            Congruent: '≡',
            Conint: '∯',
            conint: '∮',
            ContourIntegral: '∮',
            Copf: 'ℂ',
            copf: '𝕔',
            coprod: '∐',
            Coproduct: '∐',
            COPY: '©',
            copy: '©',
            copysr: '℗',
            CounterClockwiseContourIntegral: '∳',
            crarr: '↵',
            Cross: '⨯',
            cross: '✗',
            Cscr: '𝒞',
            cscr: '𝒸',
            csub: '⫏',
            csube: '⫑',
            csup: '⫐',
            csupe: '⫒',
            ctdot: '⋯',
            cudarrl: '⤸',
            cudarrr: '⤵',
            cuepr: '⋞',
            cuesc: '⋟',
            cularr: '↶',
            cularrp: '⤽',
            Cup: '⋓',
            cup: '∪',
            cupbrcap: '⩈',
            CupCap: '≍',
            cupcap: '⩆',
            cupcup: '⩊',
            cupdot: '⊍',
            cupor: '⩅',
            cups: '∪︀',
            curarr: '↷',
            curarrm: '⤼',
            curlyeqprec: '⋞',
            curlyeqsucc: '⋟',
            curlyvee: '⋎',
            curlywedge: '⋏',
            curren: '¤',
            curvearrowleft: '↶',
            curvearrowright: '↷',
            cuvee: '⋎',
            cuwed: '⋏',
            cwconint: '∲',
            cwint: '∱',
            cylcty: '⌭',
            Dagger: '‡',
            dagger: '†',
            daleth: 'ℸ',
            Darr: '↡',
            dArr: '⇓',
            darr: '↓',
            dash: '‐',
            Dashv: '⫤',
            dashv: '⊣',
            dbkarow: '⤏',
            dblac: '˝',
            Dcaron: 'Ď',
            dcaron: 'ď',
            Dcy: 'Д',
            dcy: 'д',
            DD: 'ⅅ',
            dd: 'ⅆ',
            ddagger: '‡',
            ddarr: '⇊',
            DDotrahd: '⤑',
            ddotseq: '⩷',
            deg: '°',
            Del: '∇',
            Delta: 'Δ',
            delta: 'δ',
            demptyv: '⦱',
            dfisht: '⥿',
            Dfr: '𝔇',
            dfr: '𝔡',
            dHar: '⥥',
            dharl: '⇃',
            dharr: '⇂',
            DiacriticalAcute: '´',
            DiacriticalDot: '˙',
            DiacriticalDoubleAcute: '˝',
            DiacriticalGrave: '`',
            DiacriticalTilde: '˜',
            diam: '⋄',
            Diamond: '⋄',
            diamond: '⋄',
            diamondsuit: '♦',
            diams: '♦',
            die: '¨',
            DifferentialD: 'ⅆ',
            digamma: 'ϝ',
            disin: '⋲',
            div: '÷',
            divide: '÷',
            divideontimes: '⋇',
            divonx: '⋇',
            DJcy: 'Ђ',
            djcy: 'ђ',
            dlcorn: '⌞',
            dlcrop: '⌍',
            dollar: '$',
            Dopf: '𝔻',
            dopf: '𝕕',
            Dot: '¨',
            dot: '˙',
            DotDot: '⃜',
            doteq: '≐',
            doteqdot: '≑',
            DotEqual: '≐',
            dotminus: '∸',
            dotplus: '∔',
            dotsquare: '⊡',
            doublebarwedge: '⌆',
            DoubleContourIntegral: '∯',
            DoubleDot: '¨',
            DoubleDownArrow: '⇓',
            DoubleLeftArrow: '⇐',
            DoubleLeftRightArrow: '⇔',
            DoubleLeftTee: '⫤',
            DoubleLongLeftArrow: '⟸',
            DoubleLongLeftRightArrow: '⟺',
            DoubleLongRightArrow: '⟹',
            DoubleRightArrow: '⇒',
            DoubleRightTee: '⊨',
            DoubleUpArrow: '⇑',
            DoubleUpDownArrow: '⇕',
            DoubleVerticalBar: '∥',
            DownArrow: '↓',
            Downarrow: '⇓',
            downarrow: '↓',
            DownArrowBar: '⤓',
            DownArrowUpArrow: '⇵',
            DownBreve: '̑',
            downdownarrows: '⇊',
            downharpoonleft: '⇃',
            downharpoonright: '⇂',
            DownLeftRightVector: '⥐',
            DownLeftTeeVector: '⥞',
            DownLeftVector: '↽',
            DownLeftVectorBar: '⥖',
            DownRightTeeVector: '⥟',
            DownRightVector: '⇁',
            DownRightVectorBar: '⥗',
            DownTee: '⊤',
            DownTeeArrow: '↧',
            drbkarow: '⤐',
            drcorn: '⌟',
            drcrop: '⌌',
            Dscr: '𝒟',
            dscr: '𝒹',
            DScy: 'Ѕ',
            dscy: 'ѕ',
            dsol: '⧶',
            Dstrok: 'Đ',
            dstrok: 'đ',
            dtdot: '⋱',
            dtri: '▿',
            dtrif: '▾',
            duarr: '⇵',
            duhar: '⥯',
            dwangle: '⦦',
            DZcy: 'Џ',
            dzcy: 'џ',
            dzigrarr: '⟿',
            Eacute: 'É',
            eacute: 'é',
            easter: '⩮',
            Ecaron: 'Ě',
            ecaron: 'ě',
            ecir: '≖',
            Ecirc: 'Ê',
            ecirc: 'ê',
            ecolon: '≕',
            Ecy: 'Э',
            ecy: 'э',
            eDDot: '⩷',
            Edot: 'Ė',
            eDot: '≑',
            edot: 'ė',
            ee: 'ⅇ',
            efDot: '≒',
            Efr: '𝔈',
            efr: '𝔢',
            eg: '⪚',
            Egrave: 'È',
            egrave: 'è',
            egs: '⪖',
            egsdot: '⪘',
            el: '⪙',
            Element: '∈',
            elinters: '⏧',
            ell: 'ℓ',
            els: '⪕',
            elsdot: '⪗',
            Emacr: 'Ē',
            emacr: 'ē',
            empty: '∅',
            emptyset: '∅',
            EmptySmallSquare: '◻',
            emptyv: '∅',
            EmptyVerySmallSquare: '▫',
            emsp: ' ',
            emsp13: ' ',
            emsp14: ' ',
            ENG: 'Ŋ',
            eng: 'ŋ',
            ensp: ' ',
            Eogon: 'Ę',
            eogon: 'ę',
            Eopf: '𝔼',
            eopf: '𝕖',
            epar: '⋕',
            eparsl: '⧣',
            eplus: '⩱',
            epsi: 'ε',
            Epsilon: 'Ε',
            epsilon: 'ε',
            epsiv: 'ϵ',
            eqcirc: '≖',
            eqcolon: '≕',
            eqsim: '≂',
            eqslantgtr: '⪖',
            eqslantless: '⪕',
            Equal: '⩵',
            equals: '=',
            EqualTilde: '≂',
            equest: '≟',
            Equilibrium: '⇌',
            equiv: '≡',
            equivDD: '⩸',
            eqvparsl: '⧥',
            erarr: '⥱',
            erDot: '≓',
            Escr: 'ℰ',
            escr: 'ℯ',
            esdot: '≐',
            Esim: '⩳',
            esim: '≂',
            Eta: 'Η',
            eta: 'η',
            ETH: 'Ð',
            eth: 'ð',
            Euml: 'Ë',
            euml: 'ë',
            euro: '€',
            excl: '!',
            exist: '∃',
            Exists: '∃',
            expectation: 'ℰ',
            ExponentialE: 'ⅇ',
            exponentiale: 'ⅇ',
            fallingdotseq: '≒',
            Fcy: 'Ф',
            fcy: 'ф',
            female: '♀',
            ffilig: 'ﬃ',
            fflig: 'ﬀ',
            ffllig: 'ﬄ',
            Ffr: '𝔉',
            ffr: '𝔣',
            filig: 'ﬁ',
            FilledSmallSquare: '◼',
            FilledVerySmallSquare: '▪',
            fjlig: 'fj',
            flat: '♭',
            fllig: 'ﬂ',
            fltns: '▱',
            fnof: 'ƒ',
            Fopf: '𝔽',
            fopf: '𝕗',
            ForAll: '∀',
            forall: '∀',
            fork: '⋔',
            forkv: '⫙',
            Fouriertrf: 'ℱ',
            fpartint: '⨍',
            frac12: '½',
            frac13: '⅓',
            frac14: '¼',
            frac15: '⅕',
            frac16: '⅙',
            frac18: '⅛',
            frac23: '⅔',
            frac25: '⅖',
            frac34: '¾',
            frac35: '⅗',
            frac38: '⅜',
            frac45: '⅘',
            frac56: '⅚',
            frac58: '⅝',
            frac78: '⅞',
            frasl: '⁄',
            frown: '⌢',
            Fscr: 'ℱ',
            fscr: '𝒻',
            gacute: 'ǵ',
            Gamma: 'Γ',
            gamma: 'γ',
            Gammad: 'Ϝ',
            gammad: 'ϝ',
            gap: '⪆',
            Gbreve: 'Ğ',
            gbreve: 'ğ',
            Gcedil: 'Ģ',
            Gcirc: 'Ĝ',
            gcirc: 'ĝ',
            Gcy: 'Г',
            gcy: 'г',
            Gdot: 'Ġ',
            gdot: 'ġ',
            gE: '≧',
            ge: '≥',
            gEl: '⪌',
            gel: '⋛',
            geq: '≥',
            geqq: '≧',
            geqslant: '⩾',
            ges: '⩾',
            gescc: '⪩',
            gesdot: '⪀',
            gesdoto: '⪂',
            gesdotol: '⪄',
            gesl: '⋛︀',
            gesles: '⪔',
            Gfr: '𝔊',
            gfr: '𝔤',
            Gg: '⋙',
            gg: '≫',
            ggg: '⋙',
            gimel: 'ℷ',
            GJcy: 'Ѓ',
            gjcy: 'ѓ',
            gl: '≷',
            gla: '⪥',
            glE: '⪒',
            glj: '⪤',
            gnap: '⪊',
            gnapprox: '⪊',
            gnE: '≩',
            gne: '⪈',
            gneq: '⪈',
            gneqq: '≩',
            gnsim: '⋧',
            Gopf: '𝔾',
            gopf: '𝕘',
            grave: '`',
            GreaterEqual: '≥',
            GreaterEqualLess: '⋛',
            GreaterFullEqual: '≧',
            GreaterGreater: '⪢',
            GreaterLess: '≷',
            GreaterSlantEqual: '⩾',
            GreaterTilde: '≳',
            Gscr: '𝒢',
            gscr: 'ℊ',
            gsim: '≳',
            gsime: '⪎',
            gsiml: '⪐',
            Gt: '≫',
            GT: '>',
            gt: '>',
            gtcc: '⪧',
            gtcir: '⩺',
            gtdot: '⋗',
            gtlPar: '⦕',
            gtquest: '⩼',
            gtrapprox: '⪆',
            gtrarr: '⥸',
            gtrdot: '⋗',
            gtreqless: '⋛',
            gtreqqless: '⪌',
            gtrless: '≷',
            gtrsim: '≳',
            gvertneqq: '≩︀',
            gvnE: '≩︀',
            Hacek: 'ˇ',
            hairsp: ' ',
            half: '½',
            hamilt: 'ℋ',
            HARDcy: 'Ъ',
            hardcy: 'ъ',
            hArr: '⇔',
            harr: '↔',
            harrcir: '⥈',
            harrw: '↭',
            Hat: '^',
            hbar: 'ℏ',
            Hcirc: 'Ĥ',
            hcirc: 'ĥ',
            hearts: '♥',
            heartsuit: '♥',
            hellip: '…',
            hercon: '⊹',
            Hfr: 'ℌ',
            hfr: '𝔥',
            HilbertSpace: 'ℋ',
            hksearow: '⤥',
            hkswarow: '⤦',
            hoarr: '⇿',
            homtht: '∻',
            hookleftarrow: '↩',
            hookrightarrow: '↪',
            Hopf: 'ℍ',
            hopf: '𝕙',
            horbar: '―',
            HorizontalLine: '─',
            Hscr: 'ℋ',
            hscr: '𝒽',
            hslash: 'ℏ',
            Hstrok: 'Ħ',
            hstrok: 'ħ',
            HumpDownHump: '≎',
            HumpEqual: '≏',
            hybull: '⁃',
            hyphen: '‐',
            Iacute: 'Í',
            iacute: 'í',
            ic: '⁣',
            Icirc: 'Î',
            icirc: 'î',
            Icy: 'И',
            icy: 'и',
            Idot: 'İ',
            IEcy: 'Е',
            iecy: 'е',
            iexcl: '¡',
            iff: '⇔',
            Ifr: 'ℑ',
            ifr: '𝔦',
            Igrave: 'Ì',
            igrave: 'ì',
            ii: 'ⅈ',
            iiiint: '⨌',
            iiint: '∭',
            iinfin: '⧜',
            iiota: '℩',
            IJlig: 'Ĳ',
            ijlig: 'ĳ',
            Im: 'ℑ',
            Imacr: 'Ī',
            imacr: 'ī',
            image: 'ℑ',
            ImaginaryI: 'ⅈ',
            imagline: 'ℐ',
            imagpart: 'ℑ',
            imath: 'ı',
            imof: '⊷',
            imped: 'Ƶ',
            Implies: '⇒',
            in: '∈',
            incare: '℅',
            infin: '∞',
            infintie: '⧝',
            inodot: 'ı',
            Int: '∬',
            int: '∫',
            intcal: '⊺',
            integers: 'ℤ',
            Integral: '∫',
            intercal: '⊺',
            Intersection: '⋂',
            intlarhk: '⨗',
            intprod: '⨼',
            InvisibleComma: '⁣',
            InvisibleTimes: '⁢',
            IOcy: 'Ё',
            iocy: 'ё',
            Iogon: 'Į',
            iogon: 'į',
            Iopf: '𝕀',
            iopf: '𝕚',
            Iota: 'Ι',
            iota: 'ι',
            iprod: '⨼',
            iquest: '¿',
            Iscr: 'ℐ',
            iscr: '𝒾',
            isin: '∈',
            isindot: '⋵',
            isinE: '⋹',
            isins: '⋴',
            isinsv: '⋳',
            isinv: '∈',
            it: '⁢',
            Itilde: 'Ĩ',
            itilde: 'ĩ',
            Iukcy: 'І',
            iukcy: 'і',
            Iuml: 'Ï',
            iuml: 'ï',
            Jcirc: 'Ĵ',
            jcirc: 'ĵ',
            Jcy: 'Й',
            jcy: 'й',
            Jfr: '𝔍',
            jfr: '𝔧',
            jmath: 'ȷ',
            Jopf: '𝕁',
            jopf: '𝕛',
            Jscr: '𝒥',
            jscr: '𝒿',
            Jsercy: 'Ј',
            jsercy: 'ј',
            Jukcy: 'Є',
            jukcy: 'є',
            Kappa: 'Κ',
            kappa: 'κ',
            kappav: 'ϰ',
            Kcedil: 'Ķ',
            kcedil: 'ķ',
            Kcy: 'К',
            kcy: 'к',
            Kfr: '𝔎',
            kfr: '𝔨',
            kgreen: 'ĸ',
            KHcy: 'Х',
            khcy: 'х',
            KJcy: 'Ќ',
            kjcy: 'ќ',
            Kopf: '𝕂',
            kopf: '𝕜',
            Kscr: '𝒦',
            kscr: '𝓀',
            lAarr: '⇚',
            Lacute: 'Ĺ',
            lacute: 'ĺ',
            laemptyv: '⦴',
            lagran: 'ℒ',
            Lambda: 'Λ',
            lambda: 'λ',
            Lang: '⟪',
            lang: '⟨',
            langd: '⦑',
            langle: '⟨',
            lap: '⪅',
            Laplacetrf: 'ℒ',
            laquo: '«',
            Larr: '↞',
            lArr: '⇐',
            larr: '←',
            larrb: '⇤',
            larrbfs: '⤟',
            larrfs: '⤝',
            larrhk: '↩',
            larrlp: '↫',
            larrpl: '⤹',
            larrsim: '⥳',
            larrtl: '↢',
            lat: '⪫',
            lAtail: '⤛',
            latail: '⤙',
            late: '⪭',
            lates: '⪭︀',
            lBarr: '⤎',
            lbarr: '⤌',
            lbbrk: '❲',
            lbrace: '{',
            lbrack: '[',
            lbrke: '⦋',
            lbrksld: '⦏',
            lbrkslu: '⦍',
            Lcaron: 'Ľ',
            lcaron: 'ľ',
            Lcedil: 'Ļ',
            lcedil: 'ļ',
            lceil: '⌈',
            lcub: '{',
            Lcy: 'Л',
            lcy: 'л',
            ldca: '⤶',
            ldquo: '“',
            ldquor: '„',
            ldrdhar: '⥧',
            ldrushar: '⥋',
            ldsh: '↲',
            lE: '≦',
            le: '≤',
            LeftAngleBracket: '⟨',
            LeftArrow: '←',
            Leftarrow: '⇐',
            leftarrow: '←',
            LeftArrowBar: '⇤',
            LeftArrowRightArrow: '⇆',
            leftarrowtail: '↢',
            LeftCeiling: '⌈',
            LeftDoubleBracket: '⟦',
            LeftDownTeeVector: '⥡',
            LeftDownVector: '⇃',
            LeftDownVectorBar: '⥙',
            LeftFloor: '⌊',
            leftharpoondown: '↽',
            leftharpoonup: '↼',
            leftleftarrows: '⇇',
            LeftRightArrow: '↔',
            Leftrightarrow: '⇔',
            leftrightarrow: '↔',
            leftrightarrows: '⇆',
            leftrightharpoons: '⇋',
            leftrightsquigarrow: '↭',
            LeftRightVector: '⥎',
            LeftTee: '⊣',
            LeftTeeArrow: '↤',
            LeftTeeVector: '⥚',
            leftthreetimes: '⋋',
            LeftTriangle: '⊲',
            LeftTriangleBar: '⧏',
            LeftTriangleEqual: '⊴',
            LeftUpDownVector: '⥑',
            LeftUpTeeVector: '⥠',
            LeftUpVector: '↿',
            LeftUpVectorBar: '⥘',
            LeftVector: '↼',
            LeftVectorBar: '⥒',
            lEg: '⪋',
            leg: '⋚',
            leq: '≤',
            leqq: '≦',
            leqslant: '⩽',
            les: '⩽',
            lescc: '⪨',
            lesdot: '⩿',
            lesdoto: '⪁',
            lesdotor: '⪃',
            lesg: '⋚︀',
            lesges: '⪓',
            lessapprox: '⪅',
            lessdot: '⋖',
            lesseqgtr: '⋚',
            lesseqqgtr: '⪋',
            LessEqualGreater: '⋚',
            LessFullEqual: '≦',
            LessGreater: '≶',
            lessgtr: '≶',
            LessLess: '⪡',
            lesssim: '≲',
            LessSlantEqual: '⩽',
            LessTilde: '≲',
            lfisht: '⥼',
            lfloor: '⌊',
            Lfr: '𝔏',
            lfr: '𝔩',
            lg: '≶',
            lgE: '⪑',
            lHar: '⥢',
            lhard: '↽',
            lharu: '↼',
            lharul: '⥪',
            lhblk: '▄',
            LJcy: 'Љ',
            ljcy: 'љ',
            Ll: '⋘',
            ll: '≪',
            llarr: '⇇',
            llcorner: '⌞',
            Lleftarrow: '⇚',
            llhard: '⥫',
            lltri: '◺',
            Lmidot: 'Ŀ',
            lmidot: 'ŀ',
            lmoust: '⎰',
            lmoustache: '⎰',
            lnap: '⪉',
            lnapprox: '⪉',
            lnE: '≨',
            lne: '⪇',
            lneq: '⪇',
            lneqq: '≨',
            lnsim: '⋦',
            loang: '⟬',
            loarr: '⇽',
            lobrk: '⟦',
            LongLeftArrow: '⟵',
            Longleftarrow: '⟸',
            longleftarrow: '⟵',
            LongLeftRightArrow: '⟷',
            Longleftrightarrow: '⟺',
            longleftrightarrow: '⟷',
            longmapsto: '⟼',
            LongRightArrow: '⟶',
            Longrightarrow: '⟹',
            longrightarrow: '⟶',
            looparrowleft: '↫',
            looparrowright: '↬',
            lopar: '⦅',
            Lopf: '𝕃',
            lopf: '𝕝',
            loplus: '⨭',
            lotimes: '⨴',
            lowast: '∗',
            lowbar: '_',
            LowerLeftArrow: '↙',
            LowerRightArrow: '↘',
            loz: '◊',
            lozenge: '◊',
            lozf: '⧫',
            lpar: '(',
            lparlt: '⦓',
            lrarr: '⇆',
            lrcorner: '⌟',
            lrhar: '⇋',
            lrhard: '⥭',
            lrm: '‎',
            lrtri: '⊿',
            lsaquo: '‹',
            Lscr: 'ℒ',
            lscr: '𝓁',
            Lsh: '↰',
            lsh: '↰',
            lsim: '≲',
            lsime: '⪍',
            lsimg: '⪏',
            lsqb: '[',
            lsquo: '‘',
            lsquor: '‚',
            Lstrok: 'Ł',
            lstrok: 'ł',
            Lt: '≪',
            LT: '<',
            lt: '<',
            ltcc: '⪦',
            ltcir: '⩹',
            ltdot: '⋖',
            lthree: '⋋',
            ltimes: '⋉',
            ltlarr: '⥶',
            ltquest: '⩻',
            ltri: '◃',
            ltrie: '⊴',
            ltrif: '◂',
            ltrPar: '⦖',
            lurdshar: '⥊',
            luruhar: '⥦',
            lvertneqq: '≨︀',
            lvnE: '≨︀',
            macr: '¯',
            male: '♂',
            malt: '✠',
            maltese: '✠',
            Map: '⤅',
            map: '↦',
            mapsto: '↦',
            mapstodown: '↧',
            mapstoleft: '↤',
            mapstoup: '↥',
            marker: '▮',
            mcomma: '⨩',
            Mcy: 'М',
            mcy: 'м',
            mdash: '—',
            mDDot: '∺',
            measuredangle: '∡',
            MediumSpace: ' ',
            Mellintrf: 'ℳ',
            Mfr: '𝔐',
            mfr: '𝔪',
            mho: '℧',
            micro: 'µ',
            mid: '∣',
            midast: '*',
            midcir: '⫰',
            middot: '·',
            minus: '−',
            minusb: '⊟',
            minusd: '∸',
            minusdu: '⨪',
            MinusPlus: '∓',
            mlcp: '⫛',
            mldr: '…',
            mnplus: '∓',
            models: '⊧',
            Mopf: '𝕄',
            mopf: '𝕞',
            mp: '∓',
            Mscr: 'ℳ',
            mscr: '𝓂',
            mstpos: '∾',
            Mu: 'Μ',
            mu: 'μ',
            multimap: '⊸',
            mumap: '⊸',
            nabla: '∇',
            Nacute: 'Ń',
            nacute: 'ń',
            nang: '∠⃒',
            nap: '≉',
            napE: '⩰̸',
            napid: '≋̸',
            napos: 'ŉ',
            napprox: '≉',
            natur: '♮',
            natural: '♮',
            naturals: 'ℕ',
            nbsp: ' ',
            nbump: '≎̸',
            nbumpe: '≏̸',
            ncap: '⩃',
            Ncaron: 'Ň',
            ncaron: 'ň',
            Ncedil: 'Ņ',
            ncedil: 'ņ',
            ncong: '≇',
            ncongdot: '⩭̸',
            ncup: '⩂',
            Ncy: 'Н',
            ncy: 'н',
            ndash: '–',
            ne: '≠',
            nearhk: '⤤',
            neArr: '⇗',
            nearr: '↗',
            nearrow: '↗',
            nedot: '≐̸',
            NegativeMediumSpace: '​',
            NegativeThickSpace: '​',
            NegativeThinSpace: '​',
            NegativeVeryThinSpace: '​',
            nequiv: '≢',
            nesear: '⤨',
            nesim: '≂̸',
            NestedGreaterGreater: '≫',
            NestedLessLess: '≪',
            NewLine: `
`,
            nexist: '∄',
            nexists: '∄',
            Nfr: '𝔑',
            nfr: '𝔫',
            ngE: '≧̸',
            nge: '≱',
            ngeq: '≱',
            ngeqq: '≧̸',
            ngeqslant: '⩾̸',
            nges: '⩾̸',
            nGg: '⋙̸',
            ngsim: '≵',
            nGt: '≫⃒',
            ngt: '≯',
            ngtr: '≯',
            nGtv: '≫̸',
            nhArr: '⇎',
            nharr: '↮',
            nhpar: '⫲',
            ni: '∋',
            nis: '⋼',
            nisd: '⋺',
            niv: '∋',
            NJcy: 'Њ',
            njcy: 'њ',
            nlArr: '⇍',
            nlarr: '↚',
            nldr: '‥',
            nlE: '≦̸',
            nle: '≰',
            nLeftarrow: '⇍',
            nleftarrow: '↚',
            nLeftrightarrow: '⇎',
            nleftrightarrow: '↮',
            nleq: '≰',
            nleqq: '≦̸',
            nleqslant: '⩽̸',
            nles: '⩽̸',
            nless: '≮',
            nLl: '⋘̸',
            nlsim: '≴',
            nLt: '≪⃒',
            nlt: '≮',
            nltri: '⋪',
            nltrie: '⋬',
            nLtv: '≪̸',
            nmid: '∤',
            NoBreak: '⁠',
            NonBreakingSpace: ' ',
            Nopf: 'ℕ',
            nopf: '𝕟',
            Not: '⫬',
            not: '¬',
            NotCongruent: '≢',
            NotCupCap: '≭',
            NotDoubleVerticalBar: '∦',
            NotElement: '∉',
            NotEqual: '≠',
            NotEqualTilde: '≂̸',
            NotExists: '∄',
            NotGreater: '≯',
            NotGreaterEqual: '≱',
            NotGreaterFullEqual: '≧̸',
            NotGreaterGreater: '≫̸',
            NotGreaterLess: '≹',
            NotGreaterSlantEqual: '⩾̸',
            NotGreaterTilde: '≵',
            NotHumpDownHump: '≎̸',
            NotHumpEqual: '≏̸',
            notin: '∉',
            notindot: '⋵̸',
            notinE: '⋹̸',
            notinva: '∉',
            notinvb: '⋷',
            notinvc: '⋶',
            NotLeftTriangle: '⋪',
            NotLeftTriangleBar: '⧏̸',
            NotLeftTriangleEqual: '⋬',
            NotLess: '≮',
            NotLessEqual: '≰',
            NotLessGreater: '≸',
            NotLessLess: '≪̸',
            NotLessSlantEqual: '⩽̸',
            NotLessTilde: '≴',
            NotNestedGreaterGreater: '⪢̸',
            NotNestedLessLess: '⪡̸',
            notni: '∌',
            notniva: '∌',
            notnivb: '⋾',
            notnivc: '⋽',
            NotPrecedes: '⊀',
            NotPrecedesEqual: '⪯̸',
            NotPrecedesSlantEqual: '⋠',
            NotReverseElement: '∌',
            NotRightTriangle: '⋫',
            NotRightTriangleBar: '⧐̸',
            NotRightTriangleEqual: '⋭',
            NotSquareSubset: '⊏̸',
            NotSquareSubsetEqual: '⋢',
            NotSquareSuperset: '⊐̸',
            NotSquareSupersetEqual: '⋣',
            NotSubset: '⊂⃒',
            NotSubsetEqual: '⊈',
            NotSucceeds: '⊁',
            NotSucceedsEqual: '⪰̸',
            NotSucceedsSlantEqual: '⋡',
            NotSucceedsTilde: '≿̸',
            NotSuperset: '⊃⃒',
            NotSupersetEqual: '⊉',
            NotTilde: '≁',
            NotTildeEqual: '≄',
            NotTildeFullEqual: '≇',
            NotTildeTilde: '≉',
            NotVerticalBar: '∤',
            npar: '∦',
            nparallel: '∦',
            nparsl: '⫽⃥',
            npart: '∂̸',
            npolint: '⨔',
            npr: '⊀',
            nprcue: '⋠',
            npre: '⪯̸',
            nprec: '⊀',
            npreceq: '⪯̸',
            nrArr: '⇏',
            nrarr: '↛',
            nrarrc: '⤳̸',
            nrarrw: '↝̸',
            nRightarrow: '⇏',
            nrightarrow: '↛',
            nrtri: '⋫',
            nrtrie: '⋭',
            nsc: '⊁',
            nsccue: '⋡',
            nsce: '⪰̸',
            Nscr: '𝒩',
            nscr: '𝓃',
            nshortmid: '∤',
            nshortparallel: '∦',
            nsim: '≁',
            nsime: '≄',
            nsimeq: '≄',
            nsmid: '∤',
            nspar: '∦',
            nsqsube: '⋢',
            nsqsupe: '⋣',
            nsub: '⊄',
            nsubE: '⫅̸',
            nsube: '⊈',
            nsubset: '⊂⃒',
            nsubseteq: '⊈',
            nsubseteqq: '⫅̸',
            nsucc: '⊁',
            nsucceq: '⪰̸',
            nsup: '⊅',
            nsupE: '⫆̸',
            nsupe: '⊉',
            nsupset: '⊃⃒',
            nsupseteq: '⊉',
            nsupseteqq: '⫆̸',
            ntgl: '≹',
            Ntilde: 'Ñ',
            ntilde: 'ñ',
            ntlg: '≸',
            ntriangleleft: '⋪',
            ntrianglelefteq: '⋬',
            ntriangleright: '⋫',
            ntrianglerighteq: '⋭',
            Nu: 'Ν',
            nu: 'ν',
            num: '#',
            numero: '№',
            numsp: ' ',
            nvap: '≍⃒',
            nVDash: '⊯',
            nVdash: '⊮',
            nvDash: '⊭',
            nvdash: '⊬',
            nvge: '≥⃒',
            nvgt: '>⃒',
            nvHarr: '⤄',
            nvinfin: '⧞',
            nvlArr: '⤂',
            nvle: '≤⃒',
            nvlt: '<⃒',
            nvltrie: '⊴⃒',
            nvrArr: '⤃',
            nvrtrie: '⊵⃒',
            nvsim: '∼⃒',
            nwarhk: '⤣',
            nwArr: '⇖',
            nwarr: '↖',
            nwarrow: '↖',
            nwnear: '⤧',
            Oacute: 'Ó',
            oacute: 'ó',
            oast: '⊛',
            ocir: '⊚',
            Ocirc: 'Ô',
            ocirc: 'ô',
            Ocy: 'О',
            ocy: 'о',
            odash: '⊝',
            Odblac: 'Ő',
            odblac: 'ő',
            odiv: '⨸',
            odot: '⊙',
            odsold: '⦼',
            OElig: 'Œ',
            oelig: 'œ',
            ofcir: '⦿',
            Ofr: '𝔒',
            ofr: '𝔬',
            ogon: '˛',
            Ograve: 'Ò',
            ograve: 'ò',
            ogt: '⧁',
            ohbar: '⦵',
            ohm: 'Ω',
            oint: '∮',
            olarr: '↺',
            olcir: '⦾',
            olcross: '⦻',
            oline: '‾',
            olt: '⧀',
            Omacr: 'Ō',
            omacr: 'ō',
            Omega: 'Ω',
            omega: 'ω',
            Omicron: 'Ο',
            omicron: 'ο',
            omid: '⦶',
            ominus: '⊖',
            Oopf: '𝕆',
            oopf: '𝕠',
            opar: '⦷',
            OpenCurlyDoubleQuote: '“',
            OpenCurlyQuote: '‘',
            operp: '⦹',
            oplus: '⊕',
            Or: '⩔',
            or: '∨',
            orarr: '↻',
            ord: '⩝',
            order: 'ℴ',
            orderof: 'ℴ',
            ordf: 'ª',
            ordm: 'º',
            origof: '⊶',
            oror: '⩖',
            orslope: '⩗',
            orv: '⩛',
            oS: 'Ⓢ',
            Oscr: '𝒪',
            oscr: 'ℴ',
            Oslash: 'Ø',
            oslash: 'ø',
            osol: '⊘',
            Otilde: 'Õ',
            otilde: 'õ',
            Otimes: '⨷',
            otimes: '⊗',
            otimesas: '⨶',
            Ouml: 'Ö',
            ouml: 'ö',
            ovbar: '⌽',
            OverBar: '‾',
            OverBrace: '⏞',
            OverBracket: '⎴',
            OverParenthesis: '⏜',
            par: '∥',
            para: '¶',
            parallel: '∥',
            parsim: '⫳',
            parsl: '⫽',
            part: '∂',
            PartialD: '∂',
            Pcy: 'П',
            pcy: 'п',
            percnt: '%',
            period: '.',
            permil: '‰',
            perp: '⊥',
            pertenk: '‱',
            Pfr: '𝔓',
            pfr: '𝔭',
            Phi: 'Φ',
            phi: 'φ',
            phiv: 'ϕ',
            phmmat: 'ℳ',
            phone: '☎',
            Pi: 'Π',
            pi: 'π',
            pitchfork: '⋔',
            piv: 'ϖ',
            planck: 'ℏ',
            planckh: 'ℎ',
            plankv: 'ℏ',
            plus: '+',
            plusacir: '⨣',
            plusb: '⊞',
            pluscir: '⨢',
            plusdo: '∔',
            plusdu: '⨥',
            pluse: '⩲',
            PlusMinus: '±',
            plusmn: '±',
            plussim: '⨦',
            plustwo: '⨧',
            pm: '±',
            Poincareplane: 'ℌ',
            pointint: '⨕',
            Popf: 'ℙ',
            popf: '𝕡',
            pound: '£',
            Pr: '⪻',
            pr: '≺',
            prap: '⪷',
            prcue: '≼',
            prE: '⪳',
            pre: '⪯',
            prec: '≺',
            precapprox: '⪷',
            preccurlyeq: '≼',
            Precedes: '≺',
            PrecedesEqual: '⪯',
            PrecedesSlantEqual: '≼',
            PrecedesTilde: '≾',
            preceq: '⪯',
            precnapprox: '⪹',
            precneqq: '⪵',
            precnsim: '⋨',
            precsim: '≾',
            Prime: '″',
            prime: '′',
            primes: 'ℙ',
            prnap: '⪹',
            prnE: '⪵',
            prnsim: '⋨',
            prod: '∏',
            Product: '∏',
            profalar: '⌮',
            profline: '⌒',
            profsurf: '⌓',
            prop: '∝',
            Proportion: '∷',
            Proportional: '∝',
            propto: '∝',
            prsim: '≾',
            prurel: '⊰',
            Pscr: '𝒫',
            pscr: '𝓅',
            Psi: 'Ψ',
            psi: 'ψ',
            puncsp: ' ',
            Qfr: '𝔔',
            qfr: '𝔮',
            qint: '⨌',
            Qopf: 'ℚ',
            qopf: '𝕢',
            qprime: '⁗',
            Qscr: '𝒬',
            qscr: '𝓆',
            quaternions: 'ℍ',
            quatint: '⨖',
            quest: '?',
            questeq: '≟',
            QUOT: '"',
            quot: '"',
            rAarr: '⇛',
            race: '∽̱',
            Racute: 'Ŕ',
            racute: 'ŕ',
            radic: '√',
            raemptyv: '⦳',
            Rang: '⟫',
            rang: '⟩',
            rangd: '⦒',
            range: '⦥',
            rangle: '⟩',
            raquo: '»',
            Rarr: '↠',
            rArr: '⇒',
            rarr: '→',
            rarrap: '⥵',
            rarrb: '⇥',
            rarrbfs: '⤠',
            rarrc: '⤳',
            rarrfs: '⤞',
            rarrhk: '↪',
            rarrlp: '↬',
            rarrpl: '⥅',
            rarrsim: '⥴',
            Rarrtl: '⤖',
            rarrtl: '↣',
            rarrw: '↝',
            rAtail: '⤜',
            ratail: '⤚',
            ratio: '∶',
            rationals: 'ℚ',
            RBarr: '⤐',
            rBarr: '⤏',
            rbarr: '⤍',
            rbbrk: '❳',
            rbrace: '}',
            rbrack: ']',
            rbrke: '⦌',
            rbrksld: '⦎',
            rbrkslu: '⦐',
            Rcaron: 'Ř',
            rcaron: 'ř',
            Rcedil: 'Ŗ',
            rcedil: 'ŗ',
            rceil: '⌉',
            rcub: '}',
            Rcy: 'Р',
            rcy: 'р',
            rdca: '⤷',
            rdldhar: '⥩',
            rdquo: '”',
            rdquor: '”',
            rdsh: '↳',
            Re: 'ℜ',
            real: 'ℜ',
            realine: 'ℛ',
            realpart: 'ℜ',
            reals: 'ℝ',
            rect: '▭',
            REG: '®',
            reg: '®',
            ReverseElement: '∋',
            ReverseEquilibrium: '⇋',
            ReverseUpEquilibrium: '⥯',
            rfisht: '⥽',
            rfloor: '⌋',
            Rfr: 'ℜ',
            rfr: '𝔯',
            rHar: '⥤',
            rhard: '⇁',
            rharu: '⇀',
            rharul: '⥬',
            Rho: 'Ρ',
            rho: 'ρ',
            rhov: 'ϱ',
            RightAngleBracket: '⟩',
            RightArrow: '→',
            Rightarrow: '⇒',
            rightarrow: '→',
            RightArrowBar: '⇥',
            RightArrowLeftArrow: '⇄',
            rightarrowtail: '↣',
            RightCeiling: '⌉',
            RightDoubleBracket: '⟧',
            RightDownTeeVector: '⥝',
            RightDownVector: '⇂',
            RightDownVectorBar: '⥕',
            RightFloor: '⌋',
            rightharpoondown: '⇁',
            rightharpoonup: '⇀',
            rightleftarrows: '⇄',
            rightleftharpoons: '⇌',
            rightrightarrows: '⇉',
            rightsquigarrow: '↝',
            RightTee: '⊢',
            RightTeeArrow: '↦',
            RightTeeVector: '⥛',
            rightthreetimes: '⋌',
            RightTriangle: '⊳',
            RightTriangleBar: '⧐',
            RightTriangleEqual: '⊵',
            RightUpDownVector: '⥏',
            RightUpTeeVector: '⥜',
            RightUpVector: '↾',
            RightUpVectorBar: '⥔',
            RightVector: '⇀',
            RightVectorBar: '⥓',
            ring: '˚',
            risingdotseq: '≓',
            rlarr: '⇄',
            rlhar: '⇌',
            rlm: '‏',
            rmoust: '⎱',
            rmoustache: '⎱',
            rnmid: '⫮',
            roang: '⟭',
            roarr: '⇾',
            robrk: '⟧',
            ropar: '⦆',
            Ropf: 'ℝ',
            ropf: '𝕣',
            roplus: '⨮',
            rotimes: '⨵',
            RoundImplies: '⥰',
            rpar: ')',
            rpargt: '⦔',
            rppolint: '⨒',
            rrarr: '⇉',
            Rrightarrow: '⇛',
            rsaquo: '›',
            Rscr: 'ℛ',
            rscr: '𝓇',
            Rsh: '↱',
            rsh: '↱',
            rsqb: ']',
            rsquo: '’',
            rsquor: '’',
            rthree: '⋌',
            rtimes: '⋊',
            rtri: '▹',
            rtrie: '⊵',
            rtrif: '▸',
            rtriltri: '⧎',
            RuleDelayed: '⧴',
            ruluhar: '⥨',
            rx: '℞',
            Sacute: 'Ś',
            sacute: 'ś',
            sbquo: '‚',
            Sc: '⪼',
            sc: '≻',
            scap: '⪸',
            Scaron: 'Š',
            scaron: 'š',
            sccue: '≽',
            scE: '⪴',
            sce: '⪰',
            Scedil: 'Ş',
            scedil: 'ş',
            Scirc: 'Ŝ',
            scirc: 'ŝ',
            scnap: '⪺',
            scnE: '⪶',
            scnsim: '⋩',
            scpolint: '⨓',
            scsim: '≿',
            Scy: 'С',
            scy: 'с',
            sdot: '⋅',
            sdotb: '⊡',
            sdote: '⩦',
            searhk: '⤥',
            seArr: '⇘',
            searr: '↘',
            searrow: '↘',
            sect: '§',
            semi: ';',
            seswar: '⤩',
            setminus: '∖',
            setmn: '∖',
            sext: '✶',
            Sfr: '𝔖',
            sfr: '𝔰',
            sfrown: '⌢',
            sharp: '♯',
            SHCHcy: 'Щ',
            shchcy: 'щ',
            SHcy: 'Ш',
            shcy: 'ш',
            ShortDownArrow: '↓',
            ShortLeftArrow: '←',
            shortmid: '∣',
            shortparallel: '∥',
            ShortRightArrow: '→',
            ShortUpArrow: '↑',
            shy: '­',
            Sigma: 'Σ',
            sigma: 'σ',
            sigmaf: 'ς',
            sigmav: 'ς',
            sim: '∼',
            simdot: '⩪',
            sime: '≃',
            simeq: '≃',
            simg: '⪞',
            simgE: '⪠',
            siml: '⪝',
            simlE: '⪟',
            simne: '≆',
            simplus: '⨤',
            simrarr: '⥲',
            slarr: '←',
            SmallCircle: '∘',
            smallsetminus: '∖',
            smashp: '⨳',
            smeparsl: '⧤',
            smid: '∣',
            smile: '⌣',
            smt: '⪪',
            smte: '⪬',
            smtes: '⪬︀',
            SOFTcy: 'Ь',
            softcy: 'ь',
            sol: '/',
            solb: '⧄',
            solbar: '⌿',
            Sopf: '𝕊',
            sopf: '𝕤',
            spades: '♠',
            spadesuit: '♠',
            spar: '∥',
            sqcap: '⊓',
            sqcaps: '⊓︀',
            sqcup: '⊔',
            sqcups: '⊔︀',
            Sqrt: '√',
            sqsub: '⊏',
            sqsube: '⊑',
            sqsubset: '⊏',
            sqsubseteq: '⊑',
            sqsup: '⊐',
            sqsupe: '⊒',
            sqsupset: '⊐',
            sqsupseteq: '⊒',
            squ: '□',
            Square: '□',
            square: '□',
            SquareIntersection: '⊓',
            SquareSubset: '⊏',
            SquareSubsetEqual: '⊑',
            SquareSuperset: '⊐',
            SquareSupersetEqual: '⊒',
            SquareUnion: '⊔',
            squarf: '▪',
            squf: '▪',
            srarr: '→',
            Sscr: '𝒮',
            sscr: '𝓈',
            ssetmn: '∖',
            ssmile: '⌣',
            sstarf: '⋆',
            Star: '⋆',
            star: '☆',
            starf: '★',
            straightepsilon: 'ϵ',
            straightphi: 'ϕ',
            strns: '¯',
            Sub: '⋐',
            sub: '⊂',
            subdot: '⪽',
            subE: '⫅',
            sube: '⊆',
            subedot: '⫃',
            submult: '⫁',
            subnE: '⫋',
            subne: '⊊',
            subplus: '⪿',
            subrarr: '⥹',
            Subset: '⋐',
            subset: '⊂',
            subseteq: '⊆',
            subseteqq: '⫅',
            SubsetEqual: '⊆',
            subsetneq: '⊊',
            subsetneqq: '⫋',
            subsim: '⫇',
            subsub: '⫕',
            subsup: '⫓',
            succ: '≻',
            succapprox: '⪸',
            succcurlyeq: '≽',
            Succeeds: '≻',
            SucceedsEqual: '⪰',
            SucceedsSlantEqual: '≽',
            SucceedsTilde: '≿',
            succeq: '⪰',
            succnapprox: '⪺',
            succneqq: '⪶',
            succnsim: '⋩',
            succsim: '≿',
            SuchThat: '∋',
            Sum: '∑',
            sum: '∑',
            sung: '♪',
            Sup: '⋑',
            sup: '⊃',
            sup1: '¹',
            sup2: '²',
            sup3: '³',
            supdot: '⪾',
            supdsub: '⫘',
            supE: '⫆',
            supe: '⊇',
            supedot: '⫄',
            Superset: '⊃',
            SupersetEqual: '⊇',
            suphsol: '⟉',
            suphsub: '⫗',
            suplarr: '⥻',
            supmult: '⫂',
            supnE: '⫌',
            supne: '⊋',
            supplus: '⫀',
            Supset: '⋑',
            supset: '⊃',
            supseteq: '⊇',
            supseteqq: '⫆',
            supsetneq: '⊋',
            supsetneqq: '⫌',
            supsim: '⫈',
            supsub: '⫔',
            supsup: '⫖',
            swarhk: '⤦',
            swArr: '⇙',
            swarr: '↙',
            swarrow: '↙',
            swnwar: '⤪',
            szlig: 'ß',
            Tab: '	',
            target: '⌖',
            Tau: 'Τ',
            tau: 'τ',
            tbrk: '⎴',
            Tcaron: 'Ť',
            tcaron: 'ť',
            Tcedil: 'Ţ',
            tcedil: 'ţ',
            Tcy: 'Т',
            tcy: 'т',
            tdot: '⃛',
            telrec: '⌕',
            Tfr: '𝔗',
            tfr: '𝔱',
            there4: '∴',
            Therefore: '∴',
            therefore: '∴',
            Theta: 'Θ',
            theta: 'θ',
            thetasym: 'ϑ',
            thetav: 'ϑ',
            thickapprox: '≈',
            thicksim: '∼',
            ThickSpace: '  ',
            thinsp: ' ',
            ThinSpace: ' ',
            thkap: '≈',
            thksim: '∼',
            THORN: 'Þ',
            thorn: 'þ',
            Tilde: '∼',
            tilde: '˜',
            TildeEqual: '≃',
            TildeFullEqual: '≅',
            TildeTilde: '≈',
            times: '×',
            timesb: '⊠',
            timesbar: '⨱',
            timesd: '⨰',
            tint: '∭',
            toea: '⤨',
            top: '⊤',
            topbot: '⌶',
            topcir: '⫱',
            Topf: '𝕋',
            topf: '𝕥',
            topfork: '⫚',
            tosa: '⤩',
            tprime: '‴',
            TRADE: '™',
            trade: '™',
            triangle: '▵',
            triangledown: '▿',
            triangleleft: '◃',
            trianglelefteq: '⊴',
            triangleq: '≜',
            triangleright: '▹',
            trianglerighteq: '⊵',
            tridot: '◬',
            trie: '≜',
            triminus: '⨺',
            TripleDot: '⃛',
            triplus: '⨹',
            trisb: '⧍',
            tritime: '⨻',
            trpezium: '⏢',
            Tscr: '𝒯',
            tscr: '𝓉',
            TScy: 'Ц',
            tscy: 'ц',
            TSHcy: 'Ћ',
            tshcy: 'ћ',
            Tstrok: 'Ŧ',
            tstrok: 'ŧ',
            twixt: '≬',
            twoheadleftarrow: '↞',
            twoheadrightarrow: '↠',
            Uacute: 'Ú',
            uacute: 'ú',
            Uarr: '↟',
            uArr: '⇑',
            uarr: '↑',
            Uarrocir: '⥉',
            Ubrcy: 'Ў',
            ubrcy: 'ў',
            Ubreve: 'Ŭ',
            ubreve: 'ŭ',
            Ucirc: 'Û',
            ucirc: 'û',
            Ucy: 'У',
            ucy: 'у',
            udarr: '⇅',
            Udblac: 'Ű',
            udblac: 'ű',
            udhar: '⥮',
            ufisht: '⥾',
            Ufr: '𝔘',
            ufr: '𝔲',
            Ugrave: 'Ù',
            ugrave: 'ù',
            uHar: '⥣',
            uharl: '↿',
            uharr: '↾',
            uhblk: '▀',
            ulcorn: '⌜',
            ulcorner: '⌜',
            ulcrop: '⌏',
            ultri: '◸',
            Umacr: 'Ū',
            umacr: 'ū',
            uml: '¨',
            UnderBar: '_',
            UnderBrace: '⏟',
            UnderBracket: '⎵',
            UnderParenthesis: '⏝',
            Union: '⋃',
            UnionPlus: '⊎',
            Uogon: 'Ų',
            uogon: 'ų',
            Uopf: '𝕌',
            uopf: '𝕦',
            UpArrow: '↑',
            Uparrow: '⇑',
            uparrow: '↑',
            UpArrowBar: '⤒',
            UpArrowDownArrow: '⇅',
            UpDownArrow: '↕',
            Updownarrow: '⇕',
            updownarrow: '↕',
            UpEquilibrium: '⥮',
            upharpoonleft: '↿',
            upharpoonright: '↾',
            uplus: '⊎',
            UpperLeftArrow: '↖',
            UpperRightArrow: '↗',
            Upsi: 'ϒ',
            upsi: 'υ',
            upsih: 'ϒ',
            Upsilon: 'Υ',
            upsilon: 'υ',
            UpTee: '⊥',
            UpTeeArrow: '↥',
            upuparrows: '⇈',
            urcorn: '⌝',
            urcorner: '⌝',
            urcrop: '⌎',
            Uring: 'Ů',
            uring: 'ů',
            urtri: '◹',
            Uscr: '𝒰',
            uscr: '𝓊',
            utdot: '⋰',
            Utilde: 'Ũ',
            utilde: 'ũ',
            utri: '▵',
            utrif: '▴',
            uuarr: '⇈',
            Uuml: 'Ü',
            uuml: 'ü',
            uwangle: '⦧',
            vangrt: '⦜',
            varepsilon: 'ϵ',
            varkappa: 'ϰ',
            varnothing: '∅',
            varphi: 'ϕ',
            varpi: 'ϖ',
            varpropto: '∝',
            vArr: '⇕',
            varr: '↕',
            varrho: 'ϱ',
            varsigma: 'ς',
            varsubsetneq: '⊊︀',
            varsubsetneqq: '⫋︀',
            varsupsetneq: '⊋︀',
            varsupsetneqq: '⫌︀',
            vartheta: 'ϑ',
            vartriangleleft: '⊲',
            vartriangleright: '⊳',
            Vbar: '⫫',
            vBar: '⫨',
            vBarv: '⫩',
            Vcy: 'В',
            vcy: 'в',
            VDash: '⊫',
            Vdash: '⊩',
            vDash: '⊨',
            vdash: '⊢',
            Vdashl: '⫦',
            Vee: '⋁',
            vee: '∨',
            veebar: '⊻',
            veeeq: '≚',
            vellip: '⋮',
            Verbar: '‖',
            verbar: '|',
            Vert: '‖',
            vert: '|',
            VerticalBar: '∣',
            VerticalLine: '|',
            VerticalSeparator: '❘',
            VerticalTilde: '≀',
            VeryThinSpace: ' ',
            Vfr: '𝔙',
            vfr: '𝔳',
            vltri: '⊲',
            vnsub: '⊂⃒',
            vnsup: '⊃⃒',
            Vopf: '𝕍',
            vopf: '𝕧',
            vprop: '∝',
            vrtri: '⊳',
            Vscr: '𝒱',
            vscr: '𝓋',
            vsubnE: '⫋︀',
            vsubne: '⊊︀',
            vsupnE: '⫌︀',
            vsupne: '⊋︀',
            Vvdash: '⊪',
            vzigzag: '⦚',
            Wcirc: 'Ŵ',
            wcirc: 'ŵ',
            wedbar: '⩟',
            Wedge: '⋀',
            wedge: '∧',
            wedgeq: '≙',
            weierp: '℘',
            Wfr: '𝔚',
            wfr: '𝔴',
            Wopf: '𝕎',
            wopf: '𝕨',
            wp: '℘',
            wr: '≀',
            wreath: '≀',
            Wscr: '𝒲',
            wscr: '𝓌',
            xcap: '⋂',
            xcirc: '◯',
            xcup: '⋃',
            xdtri: '▽',
            Xfr: '𝔛',
            xfr: '𝔵',
            xhArr: '⟺',
            xharr: '⟷',
            Xi: 'Ξ',
            xi: 'ξ',
            xlArr: '⟸',
            xlarr: '⟵',
            xmap: '⟼',
            xnis: '⋻',
            xodot: '⨀',
            Xopf: '𝕏',
            xopf: '𝕩',
            xoplus: '⨁',
            xotime: '⨂',
            xrArr: '⟹',
            xrarr: '⟶',
            Xscr: '𝒳',
            xscr: '𝓍',
            xsqcup: '⨆',
            xuplus: '⨄',
            xutri: '△',
            xvee: '⋁',
            xwedge: '⋀',
            Yacute: 'Ý',
            yacute: 'ý',
            YAcy: 'Я',
            yacy: 'я',
            Ycirc: 'Ŷ',
            ycirc: 'ŷ',
            Ycy: 'Ы',
            ycy: 'ы',
            yen: '¥',
            Yfr: '𝔜',
            yfr: '𝔶',
            YIcy: 'Ї',
            yicy: 'ї',
            Yopf: '𝕐',
            yopf: '𝕪',
            Yscr: '𝒴',
            yscr: '𝓎',
            YUcy: 'Ю',
            yucy: 'ю',
            Yuml: 'Ÿ',
            yuml: 'ÿ',
            Zacute: 'Ź',
            zacute: 'ź',
            Zcaron: 'Ž',
            zcaron: 'ž',
            Zcy: 'З',
            zcy: 'з',
            Zdot: 'Ż',
            zdot: 'ż',
            zeetrf: 'ℨ',
            ZeroWidthSpace: '​',
            Zeta: 'Ζ',
            zeta: 'ζ',
            Zfr: 'ℨ',
            zfr: '𝔷',
            ZHcy: 'Ж',
            zhcy: 'ж',
            zigrarr: '⇝',
            Zopf: 'ℤ',
            zopf: '𝕫',
            Zscr: '𝒵',
            zscr: '𝓏',
            zwj: '‍',
            zwnj: '‌',
          })),
          (e.entityMap = e.HTML_ENTITIES));
      })(xt)),
    xt
  );
}
var tt = {},
  Cr;
function fa() {
  if (Cr) return tt;
  Cr = 1;
  var e = dt().NAMESPACE,
    t =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r = new RegExp('[\\-\\.0-9' + t.source.slice(1, -1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    u = new RegExp('^' + t.source + r.source + '*(?::' + t.source + r.source + '*)?$'),
    o = 0,
    s = 1,
    l = 2,
    h = 3,
    d = 4,
    v = 5,
    E = 6,
    S = 7;
  function k(D, C) {
    ((this.message = D),
      (this.locator = C),
      Error.captureStackTrace && Error.captureStackTrace(this, k));
  }
  ((k.prototype = new Error()), (k.prototype.name = k.name));
  function W() {}
  W.prototype = {
    parse: function (D, C, R) {
      var I = this.domBuilder;
      (I.startDocument(), z(C, (C = {})), J(D, C, R, I, this.errorHandler), I.endDocument());
    },
  };
  function J(D, C, R, I, N) {
    function j(Z) {
      if (Z > 65535) {
        Z -= 65536;
        var ce = 55296 + (Z >> 10),
          ge = 56320 + (Z & 1023);
        return String.fromCharCode(ce, ge);
      } else return String.fromCharCode(Z);
    }
    function M(Z) {
      var ce = Z.slice(1, -1);
      return Object.hasOwnProperty.call(R, ce)
        ? R[ce]
        : ce.charAt(0) === '#'
          ? j(parseInt(ce.substr(1).replace('x', '0x')))
          : (N.error('entity not found:' + Z), Z);
    }
    function f(Z) {
      if (Z > P) {
        var ce = D.substring(P, Z).replace(/&#?\w+;/g, M);
        (g && a(P), I.characters(ce, 0, Z - P), (P = Z));
      }
    }
    function a(Z, ce) {
      for (; Z >= m && (ce = y.exec(D)); ) ((c = ce.index), (m = c + ce[0].length), g.lineNumber++);
      g.columnNumber = Z - c + 1;
    }
    for (
      var c = 0,
        m = 0,
        y = /.*(?:\r\n?|\n)|.*$/g,
        g = I.locator,
        w = [{ currentNSMap: C }],
        G = {},
        P = 0;
      ;
    ) {
      try {
        var q = D.indexOf('<', P);
        if (q < 0) {
          if (!D.substr(P).match(/^\s*$/)) {
            var Y = I.doc,
              K = Y.createTextNode(D.substr(P));
            (Y.appendChild(K), (I.currentElement = K));
          }
          return;
        }
        switch ((q > P && f(q), D.charAt(q + 1))) {
          case '/':
            var re = D.indexOf('>', q + 3),
              te = D.substring(q + 2, re).replace(/[ \t\n\r]+$/g, ''),
              ue = w.pop();
            re < 0
              ? ((te = D.substring(q + 2).replace(/[\s<].*/, '')),
                N.error('end tag name: ' + te + ' is not complete:' + ue.tagName),
                (re = q + 1 + te.length))
              : te.match(/\s</) &&
                ((te = te.replace(/[\s<].*/, '')),
                N.error('end tag name: ' + te + ' maybe not complete'),
                (re = q + 1 + te.length));
            var de = ue.localNSMap,
              fe = ue.tagName == te,
              oe = fe || (ue.tagName && ue.tagName.toLowerCase() == te.toLowerCase());
            if (oe) {
              if ((I.endElement(ue.uri, ue.localName, te), de))
                for (var ie in de)
                  Object.prototype.hasOwnProperty.call(de, ie) && I.endPrefixMapping(ie);
              fe ||
                N.fatalError(
                  'end tag name: ' + te + ' is not match the current start tagName:' + ue.tagName,
                );
            } else w.push(ue);
            re++;
            break;
          case '?':
            (g && a(q), (re = $(D, q, I)));
            break;
          case '!':
            (g && a(q), (re = X(D, q, I, N)));
            break;
          default:
            g && a(q);
            var ne = new T(),
              Re = w[w.length - 1].currentNSMap,
              re = A(D, q, ne, Re, M, N),
              Je = ne.length;
            if (
              (!ne.closed &&
                _(D, re, ne.tagName, G) &&
                ((ne.closed = !0), R.nbsp || N.warning('unclosed xml attribute')),
              g && Je)
            ) {
              for (var mt = x(g, {}), Fe = 0; Fe < Je; Fe++) {
                var xe = ne[Fe];
                (a(xe.offset), (xe.locator = x(g, {})));
              }
              ((I.locator = mt), B(ne, I, Re) && w.push(ne), (I.locator = g));
            } else B(ne, I, Re) && w.push(ne);
            e.isHTML(ne.uri) && !ne.closed ? (re = L(D, re, ne.tagName, M, I)) : re++;
        }
      } catch (Z) {
        if (Z instanceof k) throw Z;
        (N.error('element parse error: ' + Z), (re = -1));
      }
      re > P ? (P = re) : f(Math.max(q, P) + 1);
    }
  }
  function x(D, C) {
    return ((C.lineNumber = D.lineNumber), (C.columnNumber = D.columnNumber), C);
  }
  function A(D, C, R, I, N, j) {
    function M(g, w, G) {
      (R.attributeNames.hasOwnProperty(g) && j.fatalError('Attribute ' + g + ' redefined'),
        R.addValue(g, w.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, N), G));
    }
    for (var f, a, c = ++C, m = o; ; ) {
      var y = D.charAt(c);
      switch (y) {
        case '=':
          if (m === s) ((f = D.slice(C, c)), (m = h));
          else if (m === l) m = h;
          else throw new Error('attribute equal must after attrName');
          break;
        case "'":
        case '"':
          if (m === h || m === s)
            if (
              (m === s && (j.warning('attribute value must after "="'), (f = D.slice(C, c))),
              (C = c + 1),
              (c = D.indexOf(y, C)),
              c > 0)
            )
              ((a = D.slice(C, c)), M(f, a, C - 1), (m = v));
            else throw new Error("attribute value no end '" + y + "' match");
          else if (m == d)
            ((a = D.slice(C, c)),
              M(f, a, C),
              j.warning('attribute "' + f + '" missed start quot(' + y + ')!!'),
              (C = c + 1),
              (m = v));
          else throw new Error('attribute value must after "="');
          break;
        case '/':
          switch (m) {
            case o:
              R.setTagName(D.slice(C, c));
            case v:
            case E:
            case S:
              ((m = S), (R.closed = !0));
            case d:
            case s:
              break;
            case l:
              R.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case '':
          return (j.error('unexpected end of input'), m == o && R.setTagName(D.slice(C, c)), c);
        case '>':
          switch (m) {
            case o:
              R.setTagName(D.slice(C, c));
            case v:
            case E:
            case S:
              break;
            case d:
            case s:
              ((a = D.slice(C, c)), a.slice(-1) === '/' && ((R.closed = !0), (a = a.slice(0, -1))));
            case l:
              (m === l && (a = f),
                m == d
                  ? (j.warning('attribute "' + a + '" missed quot(")!'), M(f, a, C))
                  : ((!e.isHTML(I['']) || !a.match(/^(?:disabled|checked|selected)$/i)) &&
                      j.warning('attribute "' + a + '" missed value!! "' + a + '" instead!!'),
                    M(a, a, C)));
              break;
            case h:
              throw new Error('attribute value missed!!');
          }
          return c;
        case '':
          y = ' ';
        default:
          if (y <= ' ')
            switch (m) {
              case o:
                (R.setTagName(D.slice(C, c)), (m = E));
                break;
              case s:
                ((f = D.slice(C, c)), (m = l));
                break;
              case d:
                var a = D.slice(C, c);
                (j.warning('attribute "' + a + '" missed quot(")!!'), M(f, a, C));
              case v:
                m = E;
                break;
            }
          else
            switch (m) {
              case l:
                (R.tagName,
                  (!e.isHTML(I['']) || !f.match(/^(?:disabled|checked|selected)$/i)) &&
                    j.warning('attribute "' + f + '" missed value!! "' + f + '" instead2!!'),
                  M(f, f, C),
                  (C = c),
                  (m = s));
                break;
              case v:
                j.warning('attribute space is required"' + f + '"!!');
              case E:
                ((m = s), (C = c));
                break;
              case h:
                ((m = d), (C = c));
                break;
              case S:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      c++;
    }
  }
  function B(D, C, R) {
    for (var I = D.tagName, N = null, y = D.length; y--; ) {
      var j = D[y],
        M = j.qName,
        f = j.value,
        g = M.indexOf(':');
      if (g > 0)
        var a = (j.prefix = M.slice(0, g)),
          c = M.slice(g + 1),
          m = a === 'xmlns' && c;
      else ((c = M), (a = null), (m = M === 'xmlns' && ''));
      ((j.localName = c),
        m !== !1 &&
          (N == null && ((N = {}), z(R, (R = {}))),
          (R[m] = N[m] = f),
          (j.uri = e.XMLNS),
          C.startPrefixMapping(m, f)));
    }
    for (var y = D.length; y--; ) {
      j = D[y];
      var a = j.prefix;
      a && (a === 'xml' && (j.uri = e.XML), a !== 'xmlns' && (j.uri = R[a || '']));
    }
    var g = I.indexOf(':');
    g > 0
      ? ((a = D.prefix = I.slice(0, g)), (c = D.localName = I.slice(g + 1)))
      : ((a = null), (c = D.localName = I));
    var w = (D.uri = R[a || '']);
    if ((C.startElement(w, c, I, D), D.closed)) {
      if ((C.endElement(w, c, I), N))
        for (a in N) Object.prototype.hasOwnProperty.call(N, a) && C.endPrefixMapping(a);
    } else return ((D.currentNSMap = R), (D.localNSMap = N), !0);
  }
  function L(D, C, R, I, N) {
    if (/^(?:script|textarea)$/i.test(R)) {
      var j = D.indexOf('</' + R + '>', C),
        M = D.substring(C + 1, j);
      if (/[&<]/.test(M))
        return /^script$/i.test(R)
          ? (N.characters(M, 0, M.length), j)
          : ((M = M.replace(/&#?\w+;/g, I)), N.characters(M, 0, M.length), j);
    }
    return C + 1;
  }
  function _(D, C, R, I) {
    var N = I[R];
    return (
      N == null &&
        ((N = D.lastIndexOf('</' + R + '>')), N < C && (N = D.lastIndexOf('</' + R)), (I[R] = N)),
      N < C
    );
  }
  function z(D, C) {
    for (var R in D) Object.prototype.hasOwnProperty.call(D, R) && (C[R] = D[R]);
  }
  function X(D, C, R, I) {
    var N = D.charAt(C + 2);
    switch (N) {
      case '-':
        if (D.charAt(C + 3) === '-') {
          var j = D.indexOf('-->', C + 4);
          return j > C
            ? (R.comment(D, C + 4, j - C - 4), j + 3)
            : (I.error('Unclosed comment'), -1);
        } else return -1;
      default:
        if (D.substr(C + 3, 6) == 'CDATA[') {
          var j = D.indexOf(']]>', C + 9);
          return (R.startCDATA(), R.characters(D, C + 9, j - C - 9), R.endCDATA(), j + 3);
        }
        var M = V(D, C),
          f = M.length;
        if (f > 1 && /!doctype/i.test(M[0][0])) {
          var a = M[1][0],
            c = !1,
            m = !1;
          f > 3 &&
            (/^public$/i.test(M[2][0])
              ? ((c = M[3][0]), (m = f > 4 && M[4][0]))
              : /^system$/i.test(M[2][0]) && (m = M[3][0]));
          var y = M[f - 1];
          return (R.startDTD(a, c, m), R.endDTD(), y.index + y[0].length);
        }
    }
    return -1;
  }
  function $(D, C, R) {
    var I = D.indexOf('?>', C);
    if (I) {
      var N = D.substring(C, I).match(/^<\?(\S*)\s*([\s\S]*?)$/);
      return N ? (N[0].length, R.processingInstruction(N[1], N[2]), I + 2) : -1;
    }
    return -1;
  }
  function T() {
    this.attributeNames = {};
  }
  T.prototype = {
    setTagName: function (D) {
      if (!u.test(D)) throw new Error('invalid tagName:' + D);
      this.tagName = D;
    },
    addValue: function (D, C, R) {
      if (!u.test(D)) throw new Error('invalid attribute:' + D);
      ((this.attributeNames[D] = this.length),
        (this[this.length++] = { qName: D, value: C, offset: R }));
    },
    length: 0,
    getLocalName: function (D) {
      return this[D].localName;
    },
    getLocator: function (D) {
      return this[D].locator;
    },
    getQName: function (D) {
      return this[D].qName;
    },
    getURI: function (D) {
      return this[D].uri;
    },
    getValue: function (D) {
      return this[D].value;
    },
  };
  function V(D, C) {
    var R,
      I = [],
      N = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (N.lastIndex = C, N.exec(D); (R = N.exec(D)); ) if ((I.push(R), R[1])) return I;
  }
  return ((tt.XMLReader = W), (tt.ParseError = k), tt);
}
var Sr;
function pa() {
  if (Sr) return Ge;
  Sr = 1;
  var e = dt(),
    t = wn(),
    r = la(),
    u = fa(),
    o = t.DOMImplementation,
    s = e.NAMESPACE,
    l = u.ParseError,
    h = u.XMLReader;
  function d(A) {
    return A.replace(
      /\r[\n\u0085]/g,
      `
`,
    ).replace(
      /[\r\u0085\u2028]/g,
      `
`,
    );
  }
  function v(A) {
    this.options = A || { locator: {} };
  }
  v.prototype.parseFromString = function (A, B) {
    var L = this.options,
      _ = new h(),
      z = L.domBuilder || new S(),
      X = L.errorHandler,
      $ = L.locator,
      T = L.xmlns || {},
      V = /\/x?html?$/.test(B),
      D = V ? r.HTML_ENTITIES : r.XML_ENTITIES;
    ($ && z.setDocumentLocator($),
      (_.errorHandler = E(X, z, $)),
      (_.domBuilder = L.domBuilder || z),
      V && (T[''] = s.HTML),
      (T.xml = T.xml || s.XML));
    var C = L.normalizeLineEndings || d;
    return (
      A && typeof A == 'string' ? _.parse(C(A), T, D) : _.errorHandler.error('invalid doc source'),
      z.doc
    );
  };
  function E(A, B, L) {
    if (!A) {
      if (B instanceof S) return B;
      A = B;
    }
    var _ = {},
      z = A instanceof Function;
    L = L || {};
    function X($) {
      var T = A[$];
      (!T &&
        z &&
        (T =
          A.length == 2
            ? function (V) {
                A($, V);
              }
            : A),
        (_[$] =
          (T &&
            function (V) {
              T('[xmldom ' + $ + ']	' + V + W(L));
            }) ||
          function () {}));
    }
    return (X('warning'), X('error'), X('fatalError'), _);
  }
  function S() {
    this.cdata = !1;
  }
  function k(A, B) {
    ((B.lineNumber = A.lineNumber), (B.columnNumber = A.columnNumber));
  }
  S.prototype = {
    startDocument: function () {
      ((this.doc = new o().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (A, B, L, _) {
      var z = this.doc,
        X = z.createElementNS(A, L || B),
        $ = _.length;
      (x(this, X), (this.currentElement = X), this.locator && k(this.locator, X));
      for (var T = 0; T < $; T++) {
        var A = _.getURI(T),
          V = _.getValue(T),
          L = _.getQName(T),
          D = z.createAttributeNS(A, L);
        (this.locator && k(_.getLocator(T), D), (D.value = D.nodeValue = V), X.setAttributeNode(D));
      }
    },
    endElement: function (A, B, L) {
      var _ = this.currentElement;
      (_.tagName, (this.currentElement = _.parentNode));
    },
    startPrefixMapping: function (A, B) {},
    endPrefixMapping: function (A) {},
    processingInstruction: function (A, B) {
      var L = this.doc.createProcessingInstruction(A, B);
      (this.locator && k(this.locator, L), x(this, L));
    },
    ignorableWhitespace: function (A, B, L) {},
    characters: function (A, B, L) {
      if (((A = J.apply(this, arguments)), A)) {
        if (this.cdata) var _ = this.doc.createCDATASection(A);
        else var _ = this.doc.createTextNode(A);
        (this.currentElement
          ? this.currentElement.appendChild(_)
          : /^\s*$/.test(A) && this.doc.appendChild(_),
          this.locator && k(this.locator, _));
      }
    },
    skippedEntity: function (A) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (A) {
      (this.locator = A) && (A.lineNumber = 0);
    },
    comment: function (A, B, L) {
      A = J.apply(this, arguments);
      var _ = this.doc.createComment(A);
      (this.locator && k(this.locator, _), x(this, _));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (A, B, L) {
      var _ = this.doc.implementation;
      if (_ && _.createDocumentType) {
        var z = _.createDocumentType(A, B, L);
        (this.locator && k(this.locator, z), x(this, z), (this.doc.doctype = z));
      }
    },
    warning: function (A) {
      console.warn('[xmldom warning]	' + A, W(this.locator));
    },
    error: function (A) {
      console.error('[xmldom error]	' + A, W(this.locator));
    },
    fatalError: function (A) {
      throw new l(A, this.locator);
    },
  };
  function W(A) {
    if (A)
      return (
        `
@` +
        (A.systemId || '') +
        '#[line:' +
        A.lineNumber +
        ',col:' +
        A.columnNumber +
        ']'
      );
  }
  function J(A, B, L) {
    return typeof A == 'string'
      ? A.substr(B, L)
      : A.length >= B + L || B
        ? new java.lang.String(A, B, L) + ''
        : A;
  }
  'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
    /\w+/g,
    function (A) {
      S.prototype[A] = function () {
        return null;
      };
    },
  );
  function x(A, B) {
    A.currentElement ? A.currentElement.appendChild(B) : A.doc.appendChild(B);
  }
  return ((Ge.__DOMHandler = S), (Ge.normalizeLineEndings = d), (Ge.DOMParser = v), Ge);
}
var Tr;
function da() {
  if (Tr) return Xe;
  Tr = 1;
  var e = wn();
  return (
    (Xe.DOMImplementation = e.DOMImplementation),
    (Xe.XMLSerializer = e.XMLSerializer),
    (Xe.DOMParser = pa().DOMParser),
    Xe
  );
}
var ha = da(),
  Cn = F.forwardRef(function (e, t) {
    var r = e.editor,
      u = e.node,
      o = e.children,
      s = F.useRef(null);
    return (
      F.useImperativeHandle(
        t,
        function () {
          return s.current;
        },
        [],
      ),
      F.useEffect(
        function () {
          return function () {
            s.current && delete s.current['__lexicalKey_'.concat(r._key)];
          };
        },
        [r, u],
      ),
      U.jsx('div', {
        ref: function (h) {
          if (((s.current = h), h)) {
            var d = '__lexicalKey_'.concat(r._key);
            h[d] = u.getKey();
          }
        },
        children: o,
      })
    );
  });
Cn.displayName = 'LexicalPortalContainer';
function xr(e, t) {
  return ga(e) || va(e, t) || rr(e, t) || ma();
}
function ma() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function va(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function ga(e) {
  if (Array.isArray(e)) return e;
}
function Nr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    (t &&
      (u = u.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, u));
  }
  return r;
}
function ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nr(Object(r), !0).forEach(function (u) {
          zt(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nr(Object(r)).forEach(function (u) {
            Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
          });
  }
  return e;
}
function kr(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = rr(e)) || t) {
      r && (e = r);
      var u = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
        },
        e: function (v) {
          throw v;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0,
    l = !1,
    h;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var v = r.next();
      return ((s = v.done), v);
    },
    e: function (v) {
      ((l = !0), (h = v));
    },
    f: function () {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (l) throw h;
      }
    },
  };
}
function rt(e) {
  return Aa(e) || Da(e) || rr(e) || ba();
}
function ba() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rr(e, t) {
  if (e) {
    if (typeof e == 'string') return qt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qt(e, t);
  }
}
function Da(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Aa(e) {
  if (Array.isArray(e)) return qt(e);
}
function qt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Ea(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Ut(e, t));
}
function Ut(e, t) {
  return (
    (Ut = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    Ut(e, t)
  );
}
function wa(e) {
  var t = Sa();
  return function () {
    var u = ct(e),
      o;
    if (t) {
      var s = ct(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);
    return Ca(this, o);
  };
}
function Ca(e, t) {
  if (t && (Ce(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return $t(e);
}
function $t(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sa() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function ct(e) {
  return (
    (ct = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ct(e)
  );
}
function zt(e, t, r) {
  return (
    (t = xn(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ce(e) {
  '@babel/helpers - typeof';
  return (
    (Ce =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ce(e)
  );
}
function Sn(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ta(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      'value' in u && (u.writable = !0),
      Object.defineProperty(e, xn(u.key), u));
  }
}
function Tn(e, t, r) {
  return (t && Ta(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function xn(e) {
  var t = xa(e, 'string');
  return Ce(t) == 'symbol' ? t : String(t);
}
function xa(e, t) {
  if (Ce(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (Ce(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Nt = Zt('plugin', 'litexml'),
  Na = (function () {
    function e() {
      Sn(this, e);
    }
    return (
      Tn(e, [
        {
          key: 'createXmlNode',
          value: function (r, u, o) {
            return { attributes: u || {}, children: [], tagName: r, textContent: o };
          },
        },
      ]),
      e
    );
  })(),
  ka = (function (e) {
    Ea(r, e);
    var t = wa(r);
    function r() {
      var u,
        o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'litexml',
        s = arguments.length > 1 ? arguments[1] : void 0,
        l = arguments.length > 2 ? arguments[2] : void 0;
      return (
        Sn(this, r),
        (u = t.call(this, o)),
        zt($t(u), 'litexmlService', void 0),
        zt($t(u), 'ctx', new Na()),
        (u.dataType = o),
        (u.getService = s),
        (u.litexmlService = l || new gn()),
        u
      );
    }
    return (
      Tn(r, [
        {
          key: 'readLiteXMLToInode',
          value: function (o) {
            var s;
            if (typeof o != 'string')
              throw new Error('Invalid data type. Expected string, got ' + Ce(o));
            var l = this.parseXMLString(o),
              h = this.xmlToLexical(l);
            return (
              (s = this.getService) === null ||
                s === void 0 ||
                (s = s.call(this, yn)) === null ||
                s === void 0 ||
                s.processNodeTree(h),
              Nt.debug('Parsed XML to Lexical State:', h),
              h
            );
          },
        },
        {
          key: 'read',
          value: function (o, s) {
            try {
              var l = this.readLiteXMLToInode(s),
                h = o.parseEditorState({ root: Q.createRootNode() }, function (d) {
                  try {
                    var v = lu(l.root, o, !0, d);
                    d._nodeMap.set(v.getKey(), v);
                  } catch (E) {
                    console.error(E);
                  }
                });
              o.setEditorState(h);
            } catch (d) {
              throw (Nt.error('Failed to parse XML:', d), d);
            }
          },
        },
        {
          key: 'write',
          value: function (o, s) {
            var l = this;
            try {
              return s != null && s.selection
                ? o.getEditorState().read(function () {
                    var h = fu();
                    if (!h) return null;
                    if (pu(h)) {
                      var d = h.getNodes(),
                        v = Q.createRootNode();
                      if (
                        d.some(function (k) {
                          return k.isInline();
                        })
                      ) {
                        var E = Q.createParagraph();
                        (Q.appendChild.apply(
                          Q,
                          [E].concat(
                            rt(
                              d.map(function (k) {
                                return k.exportJSON();
                              }),
                            ),
                          ),
                        ),
                          Q.appendChild(v, E));
                      } else
                        Q.appendChild.apply(
                          Q,
                          [v].concat(
                            rt(
                              d.map(function (k) {
                                return k.exportJSON();
                              }),
                            ),
                          ),
                        );
                      var S = o.parseEditorState({ root: v });
                      return S.read(function () {
                        var k = gr();
                        return l.lexicalToXML(k);
                      });
                    }
                    return null;
                  })
                : o.getEditorState().read(function () {
                    var h = gr();
                    return l.lexicalToXML(h);
                  });
            } catch (h) {
              throw (Nt.error('Failed to export to XML:', h), h);
            }
          },
        },
        {
          key: 'parseXMLString',
          value: function (o) {
            var s = new ha.DOMParser(),
              l = s.parseFromString(o, 'text/xml');
            if (l.getElementsByTagName('parsererror').length > 0)
              throw new Error('Invalid XML: ' + o);
            return l;
          },
        },
        {
          key: 'xmlToLexical',
          value: function (o) {
            var s = Q.createRootNode(),
              l = o.documentElement;
            return (l && this.processXMLElement(l, s), { root: s });
          },
        },
        {
          key: 'processXMLElement',
          value: function (o, s) {
            var l = this,
              h = o.tagName.toLowerCase(),
              d = this.litexmlService.getXMLReaders();
            if (d[h]) {
              var v = d[h],
                E = Array.isArray(v) ? v : [v],
                S = kr(E),
                k;
              try {
                for (S.s(); !(k = S.n()).done; ) {
                  var W = k.value,
                    J = [];
                  this.processXMLChildren(o, { children: J });
                  var x = W(o, J);
                  if (x !== !1) {
                    if (Array.isArray(x)) {
                      if (x.length > 0) {
                        var A = o.getAttribute('id');
                        x[0].id = A ? yr(A) : void 0;
                      }
                      Q.appendChild.apply(Q, [s].concat(rt(x)));
                    } else if (x) {
                      var B = o.getAttribute('id');
                      ((x.id = B ? yr(B) : void 0), Q.appendChild(s, x));
                    }
                    return;
                  }
                }
              } catch (D) {
                S.e(D);
              } finally {
                S.f();
              }
            }
            switch (h) {
              case 'p':
              case 'paragraph': {
                var L = Q.createParagraph();
                (this.processXMLChildren(o, L), Q.appendChild(s, L));
                break;
              }
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
              case 'h5':
              case 'h6': {
                var _ = parseInt(h.charAt(1)),
                  z = Q.createElementNode('heading', { children: [], tag: 'h'.concat(_) });
                (this.processXMLChildren(o, z), Q.appendChild(s, z));
                break;
              }
              case 'ul':
              case 'ol': {
                o.querySelectorAll(':scope > li').forEach(function (D) {
                  var C = Q.createElementNode('listitem', { children: [], value: 1 });
                  (l.processXMLChildren(D, C), Q.appendChild(s, C));
                });
                break;
              }
              case 'blockquote': {
                var X = Q.createElementNode('quote', { children: [] });
                (this.processXMLChildren(o, X), Q.appendChild(s, X));
                break;
              }
              case 'code': {
                var $ = Q.createElementNode('codeInline', {
                  children: [Q.createTextNode(o.textContent || '')],
                });
                Q.appendChild(s, $);
                break;
              }
              case 'text': {
                var T = o.textContent || '';
                if (T) {
                  var V = Q.createTextNode(T);
                  Q.appendChild(s, V);
                }
                break;
              }
              default:
                this.processXMLChildren(o, s);
            }
          },
        },
        {
          key: 'processXMLChildren',
          value: function (o, s) {
            var l = this;
            Array.from(o.childNodes).forEach(function (h) {
              if (h.nodeType === 1) l.processXMLElement(h, s);
              else if (h.nodeType === 3) {
                var d = h.textContent || '';
                if (d.trim()) {
                  var v = Q.createTextNode(d);
                  Q.appendChild(s, v);
                }
              }
            });
          },
        },
        {
          key: 'lexicalToXML',
          value: function (o) {
            var s = this,
              l = ['<?xml version="1.0" encoding="UTF-8"?>'];
            l.push('<root>');
            var h = o.getChildren();
            return (
              h.forEach(function (d) {
                s.nodesToXML(d, l);
              }),
              l.push('</root>'),
              l.join(`
`)
            );
          },
        },
        {
          key: 'nodesToXML',
          value: function (o, s) {
            var l = this,
              h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
              d = ' '.repeat(h * 2),
              v = o.getType(),
              E = this.litexmlService.getXMLWriters(),
              S = [];
            if (E[v]) {
              var k = E[v],
                W = Array.isArray(k) ? k : [k],
                J = kr(W),
                x;
              try {
                for (J.s(); !(x = J.n()).done; ) {
                  var A = x.value,
                    B = A(o, this.ctx, h, this.nodesToXML.bind(this));
                  if (B) {
                    if ('lines' in B) {
                      s.push.apply(s, rt(B.lines));
                      return;
                    }
                    var L = this.buildXMLAttributes(ya({ id: du(o.getKey()) }, B.attributes)),
                      _ = ''.concat(d, '<').concat(B.tagName).concat(L, '>'),
                      z = '</'.concat(B.tagName, '>');
                    if (B.textContent) s.push(''.concat(_).concat(B.textContent).concat(z));
                    else if (ot(o)) {
                      var X = o.getChildren();
                      (X.forEach(function (T) {
                        l.nodesToXML(T, S, h + 1);
                      }),
                        s.push.apply(s, [_].concat(S, [''.concat(d).concat(z)])));
                    } else s.push(_, ''.concat(d).concat(z));
                    return;
                  }
                }
              } catch (T) {
                J.e(T);
              } finally {
                J.f();
              }
            }
            if (ot(o)) {
              var $ = o.getChildren();
              $.forEach(function (T) {
                l.nodesToXML(T, S, h);
              });
            }
            s.push.apply(s, S);
          },
        },
        {
          key: 'buildXMLAttributes',
          value: function (o) {
            var s = this;
            return !o || Ce(o) !== 'object'
              ? ''
              : Object.entries(o)
                  .filter(function (l) {
                    var h = xr(l, 2),
                      d = h[1];
                    return d != null && d !== '';
                  })
                  .map(function (l) {
                    var h = xr(l, 2),
                      d = h[0],
                      v = h[1],
                      E = s.escapeXML(String(v));
                    return ' '.concat(d, '="').concat(E, '"');
                  })
                  .join('');
          },
        },
        {
          key: 'escapeXML',
          value: function (o) {
            return o
              .replaceAll('&', '&amp;')
              .replaceAll('<', '&lt;')
              .replaceAll('>', '&gt;')
              .replaceAll('"', '&quot;')
              .replaceAll("'", '&apos;');
          },
        },
      ]),
      r
    );
  })(Qu),
  kt;
function Me(e) {
  '@babel/helpers - typeof';
  return (
    (Me =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Me(e)
  );
}
function _a(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Oa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      'value' in u && (u.writable = !0),
      Object.defineProperty(e, Nn(u.key), u));
  }
}
function La(e, t, r) {
  return (t && Oa(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Ba(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Xt(e, t));
}
function Xt(e, t) {
  return (
    (Xt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    Xt(e, t)
  );
}
function Ia(e) {
  var t = Fa();
  return function () {
    var u = st(e),
      o;
    if (t) {
      var s = st(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);
    return Ra(this, o);
  };
}
function Ra(e, t) {
  if (t && (Me(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Gt(e);
}
function Gt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fa() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function st(e) {
  return (
    (st = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    st(e)
  );
}
function _t(e, t, r) {
  return (
    (t = Nn(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Nn(e) {
  var t = Pa(e, 'string');
  return Me(t) == 'symbol' ? t : String(t);
}
function Pa(e, t) {
  if (Me(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (Me(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var ja =
    ((kt = (function (e) {
      Ba(r, e);
      var t = Ia(r);
      function r(u, o) {
        var s;
        (_a(this, r),
          (s = t.call(this)),
          _t(Gt(s), 'datasource', void 0),
          _t(Gt(s), 'service', void 0),
          (s.kernel = u),
          (s.config = o),
          u.registerThemes({ diffNode: o?.theme || 'editor_diffNode' }));
        var l = new gn();
        return (
          (s.service = l),
          u.registerService(bn, l),
          (s.datasource = new ka(
            'litexml',
            function (h) {
              return u.requireService(h);
            },
            l,
          )),
          u.registerNodes([He]),
          u.registerDecorator(He.getType(), {
            queryDOM: function (d) {
              return d.querySelector('.toolbar');
            },
            render: function (d, v) {
              return o != null && o.decorator ? o.decorator(d, v) : null;
            },
          }),
          o?.enabled !== !1 && u.registerDataSource(s.datasource),
          s
        );
      }
      return (
        La(r, [
          {
            key: 'onInit',
            value: function (o) {
              (this.register(hu(o, this.datasource)),
                this.register(sa(o)),
                this.registerLiteXml(),
                this.registerMarkdown());
            },
          },
          {
            key: 'registerLiteXml',
            value: function () {
              this.service.registerXMLWriter(He.getType(), function (o, s, l, h) {
                var d = o,
                  v = [];
                switch (d.diffType) {
                  case 'modify': {
                    h(d.getChildAtIndex(1), v, l);
                    break;
                  }
                  case 'add': {
                    h(d.getChildAtIndex(0), v, l);
                    break;
                  }
                  case 'remove':
                    break;
                  case 'listItemModify': {
                    d.getChildAtIndex(1)
                      .getChildren()
                      .forEach(function (E) {
                        h(E, v, l);
                      });
                    break;
                  }
                }
                return { lines: v };
              });
            },
          },
          {
            key: 'registerMarkdown',
            value: function () {
              var o = this.kernel.requireService(Dn);
              o?.registerMarkdownWriter(He.getType(), function (s, l) {
                var h = l;
                switch (h.diffType) {
                  case 'modify': {
                    s.processChild(s, h.getChildAtIndex(1));
                    break;
                  }
                  case 'add': {
                    s.processChild(s, h.getChildAtIndex(0));
                    break;
                  }
                  case 'remove':
                    break;
                  case 'listItemModify': {
                    h.getChildAtIndex(1)
                      .getChildren()
                      .forEach(function (d) {
                        s.processChild(s, d);
                      });
                    break;
                  }
                }
                return !0;
              });
            },
          },
        ]),
        r
      );
    })(er)),
    _t(kt, 'pluginName', 'LitexmlPlugin'),
    kt),
  _r,
  Or,
  Lr,
  Br;
function nt(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var ut = Jt(function (e) {
    var t = e.css,
      r = e.cssVar;
    return {
      accept: t(
        _r ||
          (_r = nt([
            `
    color: `,
            `;
  `,
          ])),
        r.colorSuccess,
      ),
      reject: t(Or || (Or = nt(['']))),
      toolbarDark: t(
        Lr ||
          (Lr = nt([
            `
    border-color: `,
            `;
    background: `,
            `;
    box-shadow:
      0 14px 28px -6px color-mix(in srgb, #000 18.75%, transparent),
      0 2px 4px -1px color-mix(in srgb, #000 12.19%, transparent);
  `,
          ])),
        r.colorFillSecondary,
        r.colorBgElevated,
      ),
      toolbarLight: t(
        Br ||
          (Br = nt([
            `
    border-color: `,
            `;
    background: `,
            `;
    box-shadow:
      0 14px 28px -6px color-mix(in srgb, #000 10.2%, transparent),
      0 2px 4px -1px color-mix(in srgb, #000 5.88%, transparent);
  `,
          ])),
        r.colorFillSecondary,
        r.colorBgElevated,
      ),
    };
  }),
  kn = function (t) {
    var r = t.editor,
      u = t.node,
      o = tr(),
      s = Kn(),
      l = s.isDarkMode;
    return U.jsx(Cn, {
      editor: r,
      node: u,
      children: U.jsxs(mn, {
        className: l ? ut.toolbarDark : ut.toolbarLight,
        gap: 2,
        horizontal: !0,
        padding: 2,
        shadow: !0,
        variant: 'outlined',
        children: [
          U.jsx(hr, {
            'aria-label': 'Reject change',
            'className': ut.reject,
            'danger': !0,
            'icon': Lu,
            'onClick': function () {
              r.dispatchCommand(Mt, { action: le.Reject, nodeKey: u.getKey() });
            },
            'size': { blockSize: 28, size: 16 },
            'title': o('modifier.reject'),
          }),
          U.jsx(hr, {
            'aria-label': 'Accept change',
            'className': ut.accept,
            'icon': Bu,
            'onClick': function () {
              r.dispatchCommand(Mt, { action: le.Accept, nodeKey: u.getKey() });
            },
            'size': { blockSize: 28, size: 16 },
            'title': o('modifier.accept'),
          }),
        ],
      }),
    });
  };
kn.displayName = 'ReactDiffNodeToolbar';
var Ir;
function Ma(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var qa = Jt(function (e) {
  var t = e.css,
    r = e.cssVar;
  return t(
    Ir ||
      (Ir = Ma([
        `
    position: relative;

    .toolbar {
      position: absolute;
      z-index: 10;
      inset-block-end: 0;
      inset-inline-end: 8px;

      opacity: 0;
    }

    &:hover {
      .toolbar {
        opacity: 1;
      }
    }

    &[data-diff-type='add'] .content {
      position: relative;
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-inline-end: 4px;
      border-inline-end: 3px solid `,
        `;
    }

    &[data-diff-type='remove'] .content {
      position: relative;
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-inline-end: 4px;
      border-inline-end: 3px solid `,
        `;

      > *:first-child * {
        color: `,
        ` !important;
        text-decoration: line-through !important;
      }
    }

    &[data-diff-type='listItemRemove'] {
      display: inline-block;
      min-width: 100%;
    }

    &[data-diff-type='listItemRemove'] .content {
      position: relative;
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-inline-end: 4px;
      border-inline-end: 3px solid `,
        `;

      /* first child: original (deleted) */

      /*  > *:first-child {}  */

      /* visually indicate deletion with strike-through for text nodes */
      > *:first-child * {
        color: `,
        ` !important;
        text-decoration: line-through !important;
      }

      /* second child: modified/new - normal appearance */
      > *:nth-child(2) {
        color: inherit;
        opacity: 1;
      }
    }

    &[data-diff-type='listItemModify'] {
      display: inline-block;
      min-width: 100%;

      p {
        display: block !important;
      }
    }

    &[data-diff-type='listItemModify'] .content {
      position: relative;
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-inline-end: 4px;
      border-inline-end: 3px solid `,
        `;

      /* first child: original (deleted) */

      /*  > *:first-child {}  */

      /* visually indicate deletion with strike-through for text nodes */
      > *:first-child * {
        color: `,
        ` !important;
        text-decoration: line-through !important;
      }

      /* second child: modified/new - normal appearance */
      > *:nth-child(2) {
        color: inherit;
        opacity: 1;
      }
    }

    &[data-diff-type='modify'] .content {
      position: relative;
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-inline-end: 4px;
      border-inline-end: 3px solid `,
        `;

      /* first child: original (deleted) */

      /*  > *:first-child {}  */

      /* visually indicate deletion with strike-through for text nodes */
      > *:first-child * {
        color: `,
        ` !important;
        text-decoration: line-through !important;
      }

      /* second child: modified/new - normal appearance */
      > *:nth-child(2) {
        color: inherit;
        opacity: 1;
      }
    }
  `,
      ])),
    r.colorSuccess,
    r.colorError,
    r.colorTextQuaternary,
    r.colorError,
    r.colorTextQuaternary,
    r.colorWarning,
    r.colorTextQuaternary,
    r.colorWarning,
    r.colorTextQuaternary,
  );
});
function Ua(e, t) {
  return Ga(e) || Xa(e, t) || za(e, t) || $a();
}
function $a() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function za(e, t) {
  if (e) {
    if (typeof e == 'string') return Rr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rr(e, t);
  }
}
function Rr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Xa(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function Ga(e) {
  if (Array.isArray(e)) return e;
}
var _n = function () {
  var t = An(),
    r = Ua(t, 1),
    u = r[0];
  return (
    F.useLayoutEffect(
      function () {
        (u.registerPlugin(Zu),
          u.registerPlugin(ja, {
            decorator: function (s, l) {
              return U.jsx(kn, { editor: l, node: s });
            },
            theme: qa,
          }));
      },
      [u],
    ),
    null
  );
};
_n.displayName = 'ReactLiteXmlPlugin';
function Ie(e) {
  '@babel/helpers - typeof';
  return (
    (Ie =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ie(e)
  );
}
function Vt() {
  Vt = function () {
    return t;
  };
  var e,
    t = {},
    r = Object.prototype,
    u = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (f, a, c) {
        f[a] = c.value;
      },
    s = typeof Symbol == 'function' ? Symbol : {},
    l = s.iterator || '@@iterator',
    h = s.asyncIterator || '@@asyncIterator',
    d = s.toStringTag || '@@toStringTag';
  function v(f, a, c) {
    return (
      Object.defineProperty(f, a, { value: c, enumerable: !0, configurable: !0, writable: !0 }),
      f[a]
    );
  }
  try {
    v({}, '');
  } catch {
    v = function (c, m, y) {
      return (c[m] = y);
    };
  }
  function E(f, a, c, m) {
    var y = a && a.prototype instanceof B ? a : B,
      g = Object.create(y.prototype),
      w = new j(m || []);
    return (o(g, '_invoke', { value: C(f, c, w) }), g);
  }
  function S(f, a, c) {
    try {
      return { type: 'normal', arg: f.call(a, c) };
    } catch (m) {
      return { type: 'throw', arg: m };
    }
  }
  t.wrap = E;
  var k = 'suspendedStart',
    W = 'suspendedYield',
    J = 'executing',
    x = 'completed',
    A = {};
  function B() {}
  function L() {}
  function _() {}
  var z = {};
  v(z, l, function () {
    return this;
  });
  var X = Object.getPrototypeOf,
    $ = X && X(X(M([])));
  $ && $ !== r && u.call($, l) && (z = $);
  var T = (_.prototype = B.prototype = Object.create(z));
  function V(f) {
    ['next', 'throw', 'return'].forEach(function (a) {
      v(f, a, function (c) {
        return this._invoke(a, c);
      });
    });
  }
  function D(f, a) {
    function c(y, g, w, G) {
      var P = S(f[y], f, g);
      if (P.type !== 'throw') {
        var q = P.arg,
          Y = q.value;
        return Y && Ie(Y) == 'object' && u.call(Y, '__await')
          ? a.resolve(Y.__await).then(
              function (K) {
                c('next', K, w, G);
              },
              function (K) {
                c('throw', K, w, G);
              },
            )
          : a.resolve(Y).then(
              function (K) {
                ((q.value = K), w(q));
              },
              function (K) {
                return c('throw', K, w, G);
              },
            );
      }
      G(P.arg);
    }
    var m;
    o(this, '_invoke', {
      value: function (g, w) {
        function G() {
          return new a(function (P, q) {
            c(g, w, P, q);
          });
        }
        return (m = m ? m.then(G, G) : G());
      },
    });
  }
  function C(f, a, c) {
    var m = k;
    return function (y, g) {
      if (m === J) throw new Error('Generator is already running');
      if (m === x) {
        if (y === 'throw') throw g;
        return { value: e, done: !0 };
      }
      for (c.method = y, c.arg = g; ; ) {
        var w = c.delegate;
        if (w) {
          var G = R(w, c);
          if (G) {
            if (G === A) continue;
            return G;
          }
        }
        if (c.method === 'next') c.sent = c._sent = c.arg;
        else if (c.method === 'throw') {
          if (m === k) throw ((m = x), c.arg);
          c.dispatchException(c.arg);
        } else c.method === 'return' && c.abrupt('return', c.arg);
        m = J;
        var P = S(f, a, c);
        if (P.type === 'normal') {
          if (((m = c.done ? x : W), P.arg === A)) continue;
          return { value: P.arg, done: c.done };
        }
        P.type === 'throw' && ((m = x), (c.method = 'throw'), (c.arg = P.arg));
      }
    };
  }
  function R(f, a) {
    var c = a.method,
      m = f.iterator[c];
    if (m === e)
      return (
        (a.delegate = null),
        (c === 'throw' &&
          f.iterator.return &&
          ((a.method = 'return'), (a.arg = e), R(f, a), a.method === 'throw')) ||
          (c !== 'return' &&
            ((a.method = 'throw'),
            (a.arg = new TypeError("The iterator does not provide a '" + c + "' method")))),
        A
      );
    var y = S(m, f.iterator, a.arg);
    if (y.type === 'throw') return ((a.method = 'throw'), (a.arg = y.arg), (a.delegate = null), A);
    var g = y.arg;
    return g
      ? g.done
        ? ((a[f.resultName] = g.value),
          (a.next = f.nextLoc),
          a.method !== 'return' && ((a.method = 'next'), (a.arg = e)),
          (a.delegate = null),
          A)
        : g
      : ((a.method = 'throw'),
        (a.arg = new TypeError('iterator result is not an object')),
        (a.delegate = null),
        A);
  }
  function I(f) {
    var a = { tryLoc: f[0] };
    (1 in f && (a.catchLoc = f[1]),
      2 in f && ((a.finallyLoc = f[2]), (a.afterLoc = f[3])),
      this.tryEntries.push(a));
  }
  function N(f) {
    var a = f.completion || {};
    ((a.type = 'normal'), delete a.arg, (f.completion = a));
  }
  function j(f) {
    ((this.tryEntries = [{ tryLoc: 'root' }]), f.forEach(I, this), this.reset(!0));
  }
  function M(f) {
    if (f || f === '') {
      var a = f[l];
      if (a) return a.call(f);
      if (typeof f.next == 'function') return f;
      if (!isNaN(f.length)) {
        var c = -1,
          m = function y() {
            for (; ++c < f.length; ) if (u.call(f, c)) return ((y.value = f[c]), (y.done = !1), y);
            return ((y.value = e), (y.done = !0), y);
          };
        return (m.next = m);
      }
    }
    throw new TypeError(Ie(f) + ' is not iterable');
  }
  return (
    (L.prototype = _),
    o(T, 'constructor', { value: _, configurable: !0 }),
    o(_, 'constructor', { value: L, configurable: !0 }),
    (L.displayName = v(_, d, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (f) {
      var a = typeof f == 'function' && f.constructor;
      return !!a && (a === L || (a.displayName || a.name) === 'GeneratorFunction');
    }),
    (t.mark = function (f) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(f, _)
          : ((f.__proto__ = _), v(f, d, 'GeneratorFunction')),
        (f.prototype = Object.create(T)),
        f
      );
    }),
    (t.awrap = function (f) {
      return { __await: f };
    }),
    V(D.prototype),
    v(D.prototype, h, function () {
      return this;
    }),
    (t.AsyncIterator = D),
    (t.async = function (f, a, c, m, y) {
      y === void 0 && (y = Promise);
      var g = new D(E(f, a, c, m), y);
      return t.isGeneratorFunction(a)
        ? g
        : g.next().then(function (w) {
            return w.done ? w.value : g.next();
          });
    }),
    V(T),
    v(T, d, 'Generator'),
    v(T, l, function () {
      return this;
    }),
    v(T, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (f) {
      var a = Object(f),
        c = [];
      for (var m in a) c.push(m);
      return (
        c.reverse(),
        function y() {
          for (; c.length; ) {
            var g = c.pop();
            if (g in a) return ((y.value = g), (y.done = !1), y);
          }
          return ((y.done = !0), y);
        }
      );
    }),
    (t.values = M),
    (j.prototype = {
      constructor: j,
      reset: function (a) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(N),
          !a)
        )
          for (var c in this)
            c.charAt(0) === 't' && u.call(this, c) && !isNaN(+c.slice(1)) && (this[c] = e);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0].completion;
        if (a.type === 'throw') throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        if (this.done) throw a;
        var c = this;
        function m(q, Y) {
          return (
            (w.type = 'throw'),
            (w.arg = a),
            (c.next = q),
            Y && ((c.method = 'next'), (c.arg = e)),
            !!Y
          );
        }
        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
          var g = this.tryEntries[y],
            w = g.completion;
          if (g.tryLoc === 'root') return m('end');
          if (g.tryLoc <= this.prev) {
            var G = u.call(g, 'catchLoc'),
              P = u.call(g, 'finallyLoc');
            if (G && P) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            } else if (G) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
            } else {
              if (!P) throw new Error('try statement without catch or finally');
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            }
          }
        }
      },
      abrupt: function (a, c) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var y = this.tryEntries[m];
          if (y.tryLoc <= this.prev && u.call(y, 'finallyLoc') && this.prev < y.finallyLoc) {
            var g = y;
            break;
          }
        }
        g &&
          (a === 'break' || a === 'continue') &&
          g.tryLoc <= c &&
          c <= g.finallyLoc &&
          (g = null);
        var w = g ? g.completion : {};
        return (
          (w.type = a),
          (w.arg = c),
          g ? ((this.method = 'next'), (this.next = g.finallyLoc), A) : this.complete(w)
        );
      },
      complete: function (a, c) {
        if (a.type === 'throw') throw a.arg;
        return (
          a.type === 'break' || a.type === 'continue'
            ? (this.next = a.arg)
            : a.type === 'return'
              ? ((this.rval = this.arg = a.arg), (this.method = 'return'), (this.next = 'end'))
              : a.type === 'normal' && c && (this.next = c),
          A
        );
      },
      finish: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.finallyLoc === a) return (this.complete(m.completion, m.afterLoc), N(m), A);
        }
      },
      catch: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.tryLoc === a) {
            var y = m.completion;
            if (y.type === 'throw') {
              var g = y.arg;
              N(m);
            }
            return g;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (a, c, m) {
        return (
          (this.delegate = { iterator: M(a), resultName: c, nextLoc: m }),
          this.method === 'next' && (this.arg = e),
          A
        );
      },
    }),
    t
  );
}
function Fr(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Va(e)) || t) {
      r && (e = r);
      var u = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
        },
        e: function (v) {
          throw v;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0,
    l = !1,
    h;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var v = r.next();
      return ((s = v.done), v);
    },
    e: function (v) {
      ((l = !0), (h = v));
    },
    f: function () {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (l) throw h;
      }
    },
  };
}
function Va(e, t) {
  if (e) {
    if (typeof e == 'string') return Pr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pr(e, t);
  }
}
function Pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function jr(e, t, r, u, o, s, l) {
  try {
    var h = e[s](l),
      d = h.value;
  } catch (v) {
    r(v);
    return;
  }
  h.done ? t(d) : Promise.resolve(d).then(u, o);
}
function Wa(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (u, o) {
      var s = e.apply(t, r);
      function l(d) {
        jr(s, u, o, l, h, 'next', d);
      }
      function h(d) {
        jr(s, u, o, l, h, 'throw', d);
      }
      l(void 0);
    });
  };
}
function Ha(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ya(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      'value' in u && (u.writable = !0),
      Object.defineProperty(e, On(u.key), u));
  }
}
function Ka(e, t, r) {
  return (t && Ya(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Ja(e, t, r) {
  return (
    (t = On(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function On(e) {
  var t = Qa(e, 'string');
  return Ie(t) == 'symbol' ? t : String(t);
}
function Qa(e, t) {
  if (Ie(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (Ie(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Za = 2,
  ei = 0,
  at = mu('UploadService'),
  ti = (function () {
    function e() {
      (Ha(this, e), Ja(this, 'uploadHandlers', [[], [], []]));
    }
    return (
      Ka(e, [
        {
          key: 'registerUpload',
          value: function (r) {
            var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Za;
            this.uploadHandlers[u].push(r);
          },
        },
        {
          key: 'uploadFile',
          value: (function () {
            var t = Wa(
              Vt().mark(function u(o, s, l) {
                var h, d, v, E, S, k, W;
                return Vt().wrap(
                  function (x) {
                    for (;;)
                      switch ((x.prev = x.next)) {
                        case 0:
                          ((h = Fr(this.uploadHandlers)), (x.prev = 1), h.s());
                        case 3:
                          if ((d = h.n()).done) {
                            x.next = 29;
                            break;
                          }
                          if (((v = d.value), v.length !== 0)) {
                            x.next = 7;
                            break;
                          }
                          return x.abrupt('continue', 27);
                        case 7:
                          ((E = Fr(v)), (x.prev = 8), E.s());
                        case 10:
                          if ((S = E.n()).done) {
                            x.next = 19;
                            break;
                          }
                          return ((k = S.value), (x.next = 14), k(o, s, l));
                        case 14:
                          if (((W = x.sent), !W)) {
                            x.next = 17;
                            break;
                          }
                          return x.abrupt('return', W);
                        case 17:
                          x.next = 10;
                          break;
                        case 19:
                          x.next = 24;
                          break;
                        case 21:
                          ((x.prev = 21), (x.t0 = x.catch(8)), E.e(x.t0));
                        case 24:
                          return ((x.prev = 24), E.f(), x.finish(24));
                        case 27:
                          x.next = 3;
                          break;
                        case 29:
                          x.next = 34;
                          break;
                        case 31:
                          ((x.prev = 31), (x.t1 = x.catch(1)), h.e(x.t1));
                        case 34:
                          return ((x.prev = 34), h.f(), x.finish(34));
                        case 37:
                          throw new Error(
                            'No upload handler registered for this file type: ' + o.type,
                          );
                        case 38:
                        case 'end':
                          return x.stop();
                      }
                  },
                  u,
                  this,
                  [
                    [1, 31, 34, 37],
                    [8, 21, 24, 27],
                  ],
                );
              }),
            );
            function r(u, o, s) {
              return t.apply(this, arguments);
            }
            return r;
          })(),
        },
      ]),
      e
    );
  })();
function ri(e) {
  if (typeof document > 'u') return null;
  var t,
    r = vu(e.target);
  if (document.caretRangeFromPoint) t = document.caretRangeFromPoint(e.clientX, e.clientY);
  else if (e.rangeParent && r !== null)
    (r.collapse(e.rangeParent, e.rangeOffset || 0), (t = r.getRangeAt(0)));
  else throw new Error('Cannot get the selection when dragging');
  return t;
}
var Ot;
function qe(e) {
  '@babel/helpers - typeof';
  return (
    (qe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    qe(e)
  );
}
function ni(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = ui(e)) || t) {
      r && (e = r);
      var u = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
        },
        e: function (v) {
          throw v;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0,
    l = !1,
    h;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var v = r.next();
      return ((s = v.done), v);
    },
    e: function (v) {
      ((l = !0), (h = v));
    },
    f: function () {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (l) throw h;
      }
    },
  };
}
function ui(e, t) {
  if (e) {
    if (typeof e == 'string') return Mr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mr(e, t);
  }
}
function Mr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function ai(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function ii(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      'value' in u && (u.writable = !0),
      Object.defineProperty(e, Bn(u.key), u));
  }
}
function oi(e, t, r) {
  return (t && ii(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function ci(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Wt(e, t));
}
function Wt(e, t) {
  return (
    (Wt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    Wt(e, t)
  );
}
function si(e) {
  var t = fi();
  return function () {
    var u = lt(e),
      o;
    if (t) {
      var s = lt(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);
    return li(this, o);
  };
}
function li(e, t) {
  if (t && (qe(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Ln(e);
}
function Ln(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fi() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function lt(e) {
  return (
    (lt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    lt(e)
  );
}
function qr(e, t, r) {
  return (
    (t = Bn(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Bn(e) {
  var t = pi(e, 'string');
  return qe(t) == 'symbol' ? t : String(t);
}
function pi(e, t) {
  if (qe(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (qe(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var di =
    ((Ot = (function (e) {
      ci(r, e);
      var t = si(r);
      function r(u, o) {
        var s;
        return (
          ai(this, r),
          (s = t.call(this)),
          qr(Ln(s), 'logger', Zt('plugin', 'upload')),
          (s.kernel = u),
          (s.config = o),
          u.registerService(at, new ti()),
          s
        );
      }
      return (
        oi(r, [
          {
            key: 'onInit',
            value: function (o) {
              var s = this;
              (this.register(
                o.registerCommand(
                  gu,
                  function (l) {
                    var h = l.dataTransfer;
                    if (h && h.files.length > 0) {
                      (l.preventDefault(), l.stopImmediatePropagation());
                      var d = h.files[0],
                        v = s.kernel.requireService(at);
                      v &&
                        v.uploadFile(d, 'drop', ri(l)).catch(function (E) {
                          s.logger.error('Upload failed:', E);
                        });
                    }
                    return !0;
                  },
                  br,
                ),
              ),
                this.register(
                  o.registerCommand(
                    ea,
                    function (l) {
                      var h = ni(l),
                        d;
                      try {
                        for (h.s(); !(d = h.n()).done; ) {
                          var v = d.value,
                            E = s.kernel.requireService(at);
                          E &&
                            E.uploadFile(v, 'drag-drop-paste', null).catch(function (S) {
                              s.logger.error('Upload failed:', S);
                            });
                        }
                      } catch (S) {
                        h.e(S);
                      } finally {
                        h.f();
                      }
                      return !0;
                    },
                    br,
                  ),
                ));
            },
          },
        ]),
        r
      );
    })(er)),
    qr(Ot, 'pluginName', 'UploadPlugin'),
    Ot),
  hi = Zt('plugin', 'image'),
  In = Qt('INSERT_IMAGE_COMMAND');
function mi(e) {
  return e.type.startsWith('image/');
}
function vi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e.registerCommand(
    In,
    function (u) {
      var o = u.file,
        s = u.range,
        l = u.block,
        h = u.maxWidth,
        d = l ?? r;
      if (!mi(o)) return !1;
      var v = URL.createObjectURL(o);
      return (
        e.update(function () {
          if (s) {
            var E = yu();
            (s != null && E.applyDOMRange(s), bu(E));
          }
          var S = d
            ? Xn({ altText: o.name, maxWidth: h || 800, src: v, status: 'loading' })
            : Gn({ altText: o.name, maxWidth: h || 800, src: v, status: 'loading' });
          (Du([S]),
            !d && Au(S.getParentOrThrow()) && Eu(S, wu).selectEnd(),
            t(o)
              .then(function (k) {
                e.update(function () {
                  S.setUploaded(k.url);
                });
              })
              .catch(function (k) {
                (hi.error('❌ Image upload failed:', k),
                  e.update(function () {
                    S.setError('Image upload failed : ' + k.message);
                  }));
              }));
        }),
        !0
      );
    },
    jt,
  );
}
var Lt;
function Se(e) {
  '@babel/helpers - typeof';
  return (
    (Se =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Se(e)
  );
}
function Ht() {
  Ht = function () {
    return t;
  };
  var e,
    t = {},
    r = Object.prototype,
    u = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (f, a, c) {
        f[a] = c.value;
      },
    s = typeof Symbol == 'function' ? Symbol : {},
    l = s.iterator || '@@iterator',
    h = s.asyncIterator || '@@asyncIterator',
    d = s.toStringTag || '@@toStringTag';
  function v(f, a, c) {
    return (
      Object.defineProperty(f, a, { value: c, enumerable: !0, configurable: !0, writable: !0 }),
      f[a]
    );
  }
  try {
    v({}, '');
  } catch {
    v = function (c, m, y) {
      return (c[m] = y);
    };
  }
  function E(f, a, c, m) {
    var y = a && a.prototype instanceof B ? a : B,
      g = Object.create(y.prototype),
      w = new j(m || []);
    return (o(g, '_invoke', { value: C(f, c, w) }), g);
  }
  function S(f, a, c) {
    try {
      return { type: 'normal', arg: f.call(a, c) };
    } catch (m) {
      return { type: 'throw', arg: m };
    }
  }
  t.wrap = E;
  var k = 'suspendedStart',
    W = 'suspendedYield',
    J = 'executing',
    x = 'completed',
    A = {};
  function B() {}
  function L() {}
  function _() {}
  var z = {};
  v(z, l, function () {
    return this;
  });
  var X = Object.getPrototypeOf,
    $ = X && X(X(M([])));
  $ && $ !== r && u.call($, l) && (z = $);
  var T = (_.prototype = B.prototype = Object.create(z));
  function V(f) {
    ['next', 'throw', 'return'].forEach(function (a) {
      v(f, a, function (c) {
        return this._invoke(a, c);
      });
    });
  }
  function D(f, a) {
    function c(y, g, w, G) {
      var P = S(f[y], f, g);
      if (P.type !== 'throw') {
        var q = P.arg,
          Y = q.value;
        return Y && Se(Y) == 'object' && u.call(Y, '__await')
          ? a.resolve(Y.__await).then(
              function (K) {
                c('next', K, w, G);
              },
              function (K) {
                c('throw', K, w, G);
              },
            )
          : a.resolve(Y).then(
              function (K) {
                ((q.value = K), w(q));
              },
              function (K) {
                return c('throw', K, w, G);
              },
            );
      }
      G(P.arg);
    }
    var m;
    o(this, '_invoke', {
      value: function (g, w) {
        function G() {
          return new a(function (P, q) {
            c(g, w, P, q);
          });
        }
        return (m = m ? m.then(G, G) : G());
      },
    });
  }
  function C(f, a, c) {
    var m = k;
    return function (y, g) {
      if (m === J) throw new Error('Generator is already running');
      if (m === x) {
        if (y === 'throw') throw g;
        return { value: e, done: !0 };
      }
      for (c.method = y, c.arg = g; ; ) {
        var w = c.delegate;
        if (w) {
          var G = R(w, c);
          if (G) {
            if (G === A) continue;
            return G;
          }
        }
        if (c.method === 'next') c.sent = c._sent = c.arg;
        else if (c.method === 'throw') {
          if (m === k) throw ((m = x), c.arg);
          c.dispatchException(c.arg);
        } else c.method === 'return' && c.abrupt('return', c.arg);
        m = J;
        var P = S(f, a, c);
        if (P.type === 'normal') {
          if (((m = c.done ? x : W), P.arg === A)) continue;
          return { value: P.arg, done: c.done };
        }
        P.type === 'throw' && ((m = x), (c.method = 'throw'), (c.arg = P.arg));
      }
    };
  }
  function R(f, a) {
    var c = a.method,
      m = f.iterator[c];
    if (m === e)
      return (
        (a.delegate = null),
        (c === 'throw' &&
          f.iterator.return &&
          ((a.method = 'return'), (a.arg = e), R(f, a), a.method === 'throw')) ||
          (c !== 'return' &&
            ((a.method = 'throw'),
            (a.arg = new TypeError("The iterator does not provide a '" + c + "' method")))),
        A
      );
    var y = S(m, f.iterator, a.arg);
    if (y.type === 'throw') return ((a.method = 'throw'), (a.arg = y.arg), (a.delegate = null), A);
    var g = y.arg;
    return g
      ? g.done
        ? ((a[f.resultName] = g.value),
          (a.next = f.nextLoc),
          a.method !== 'return' && ((a.method = 'next'), (a.arg = e)),
          (a.delegate = null),
          A)
        : g
      : ((a.method = 'throw'),
        (a.arg = new TypeError('iterator result is not an object')),
        (a.delegate = null),
        A);
  }
  function I(f) {
    var a = { tryLoc: f[0] };
    (1 in f && (a.catchLoc = f[1]),
      2 in f && ((a.finallyLoc = f[2]), (a.afterLoc = f[3])),
      this.tryEntries.push(a));
  }
  function N(f) {
    var a = f.completion || {};
    ((a.type = 'normal'), delete a.arg, (f.completion = a));
  }
  function j(f) {
    ((this.tryEntries = [{ tryLoc: 'root' }]), f.forEach(I, this), this.reset(!0));
  }
  function M(f) {
    if (f || f === '') {
      var a = f[l];
      if (a) return a.call(f);
      if (typeof f.next == 'function') return f;
      if (!isNaN(f.length)) {
        var c = -1,
          m = function y() {
            for (; ++c < f.length; ) if (u.call(f, c)) return ((y.value = f[c]), (y.done = !1), y);
            return ((y.value = e), (y.done = !0), y);
          };
        return (m.next = m);
      }
    }
    throw new TypeError(Se(f) + ' is not iterable');
  }
  return (
    (L.prototype = _),
    o(T, 'constructor', { value: _, configurable: !0 }),
    o(_, 'constructor', { value: L, configurable: !0 }),
    (L.displayName = v(_, d, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (f) {
      var a = typeof f == 'function' && f.constructor;
      return !!a && (a === L || (a.displayName || a.name) === 'GeneratorFunction');
    }),
    (t.mark = function (f) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(f, _)
          : ((f.__proto__ = _), v(f, d, 'GeneratorFunction')),
        (f.prototype = Object.create(T)),
        f
      );
    }),
    (t.awrap = function (f) {
      return { __await: f };
    }),
    V(D.prototype),
    v(D.prototype, h, function () {
      return this;
    }),
    (t.AsyncIterator = D),
    (t.async = function (f, a, c, m, y) {
      y === void 0 && (y = Promise);
      var g = new D(E(f, a, c, m), y);
      return t.isGeneratorFunction(a)
        ? g
        : g.next().then(function (w) {
            return w.done ? w.value : g.next();
          });
    }),
    V(T),
    v(T, d, 'Generator'),
    v(T, l, function () {
      return this;
    }),
    v(T, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (f) {
      var a = Object(f),
        c = [];
      for (var m in a) c.push(m);
      return (
        c.reverse(),
        function y() {
          for (; c.length; ) {
            var g = c.pop();
            if (g in a) return ((y.value = g), (y.done = !1), y);
          }
          return ((y.done = !0), y);
        }
      );
    }),
    (t.values = M),
    (j.prototype = {
      constructor: j,
      reset: function (a) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(N),
          !a)
        )
          for (var c in this)
            c.charAt(0) === 't' && u.call(this, c) && !isNaN(+c.slice(1)) && (this[c] = e);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0].completion;
        if (a.type === 'throw') throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        if (this.done) throw a;
        var c = this;
        function m(q, Y) {
          return (
            (w.type = 'throw'),
            (w.arg = a),
            (c.next = q),
            Y && ((c.method = 'next'), (c.arg = e)),
            !!Y
          );
        }
        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
          var g = this.tryEntries[y],
            w = g.completion;
          if (g.tryLoc === 'root') return m('end');
          if (g.tryLoc <= this.prev) {
            var G = u.call(g, 'catchLoc'),
              P = u.call(g, 'finallyLoc');
            if (G && P) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            } else if (G) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
            } else {
              if (!P) throw new Error('try statement without catch or finally');
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            }
          }
        }
      },
      abrupt: function (a, c) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var y = this.tryEntries[m];
          if (y.tryLoc <= this.prev && u.call(y, 'finallyLoc') && this.prev < y.finallyLoc) {
            var g = y;
            break;
          }
        }
        g &&
          (a === 'break' || a === 'continue') &&
          g.tryLoc <= c &&
          c <= g.finallyLoc &&
          (g = null);
        var w = g ? g.completion : {};
        return (
          (w.type = a),
          (w.arg = c),
          g ? ((this.method = 'next'), (this.next = g.finallyLoc), A) : this.complete(w)
        );
      },
      complete: function (a, c) {
        if (a.type === 'throw') throw a.arg;
        return (
          a.type === 'break' || a.type === 'continue'
            ? (this.next = a.arg)
            : a.type === 'return'
              ? ((this.rval = this.arg = a.arg), (this.method = 'return'), (this.next = 'end'))
              : a.type === 'normal' && c && (this.next = c),
          A
        );
      },
      finish: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.finallyLoc === a) return (this.complete(m.completion, m.afterLoc), N(m), A);
        }
      },
      catch: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.tryLoc === a) {
            var y = m.completion;
            if (y.type === 'throw') {
              var g = y.arg;
              N(m);
            }
            return g;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (a, c, m) {
        return (
          (this.delegate = { iterator: M(a), resultName: c, nextLoc: m }),
          this.method === 'next' && (this.arg = e),
          A
        );
      },
    }),
    t
  );
}
function Ur(e, t, r, u, o, s, l) {
  try {
    var h = e[s](l),
      d = h.value;
  } catch (v) {
    r(v);
    return;
  }
  h.done ? t(d) : Promise.resolve(d).then(u, o);
}
function gi(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (u, o) {
      var s = e.apply(t, r);
      function l(d) {
        Ur(s, u, o, l, h, 'next', d);
      }
      function h(d) {
        Ur(s, u, o, l, h, 'throw', d);
      }
      l(void 0);
    });
  };
}
function yi(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function bi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    ((u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      'value' in u && (u.writable = !0),
      Object.defineProperty(e, Rn(u.key), u));
  }
}
function Di(e, t, r) {
  return (t && bi(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Ai(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Yt(e, t));
}
function Yt(e, t) {
  return (
    (Yt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    Yt(e, t)
  );
}
function Ei(e) {
  var t = Si();
  return function () {
    var u = ft(e),
      o;
    if (t) {
      var s = ft(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);
    return wi(this, o);
  };
}
function wi(e, t) {
  if (t && (Se(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Ci(e);
}
function Ci(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Si() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function ft(e) {
  return (
    (ft = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ft(e)
  );
}
function Ti(e, t, r) {
  return (
    (t = Rn(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Rn(e) {
  var t = xi(e, 'string');
  return Se(t) == 'symbol' ? t : String(t);
}
function xi(e, t) {
  if (Se(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (Se(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Ni =
    ((Lt = (function (e) {
      Ai(r, e);
      var t = Ei(r);
      function r(u, o) {
        var s;
        return (
          yi(this, r),
          (s = t.call(this)),
          (s.kernel = u),
          (s.config = o),
          u.registerNodes([Le, be]),
          Le.setDecorate(o.renderImage),
          be.setDecorate(o.renderImage),
          o != null && o.theme && u.registerThemes(o.theme),
          s
        );
      }
      return (
        Di(r, [
          {
            key: 'onInit',
            value: function (o) {
              var s, l, h;
              if (
                (this.register(
                  vi(
                    o,
                    this.config.handleUpload,
                    ((s = this.config) === null || s === void 0 ? void 0 : s.defaultBlockImage) !==
                      !1,
                  ),
                ),
                this.registerMarkdown(),
                this.registerLiteXml(),
                this.registerINode(),
                this.registerUpload(o),
                (l = this.config) !== null &&
                  l !== void 0 &&
                  l.needRehost &&
                  (h = this.config) !== null &&
                  h !== void 0 &&
                  h.handleRehost)
              ) {
                var d = this.config.needRehost,
                  v = this.config.handleRehost;
                (this.register(
                  o.registerNodeTransform(Le, function (E) {
                    E.status === 'uploaded' &&
                      d(E.src) &&
                      (E.setStatus('loading'),
                      v(E.src)
                        .then(function (S) {
                          var k = S.url;
                          o.update(function () {
                            E.setUploaded(k);
                          });
                        })
                        .catch(function () {
                          o.update(function () {
                            E.setError('Rehost failed');
                          });
                        }));
                  }),
                ),
                  this.register(
                    o.registerNodeTransform(be, function (E) {
                      E.status === 'uploaded' &&
                        d(E.src) &&
                        (E.setStatus('loading'),
                        v(E.src)
                          .then(function (S) {
                            var k = S.url;
                            o.update(function () {
                              E.setUploaded(k);
                            });
                          })
                          .catch(function () {
                            o.update(function () {
                              E.setError('Rehost failed');
                            });
                          }));
                    }),
                  ));
              }
            },
          },
          {
            key: 'registerUpload',
            value: function (o) {
              var s = this,
                l = this.kernel.requireService(at);
              l &&
                l.registerUpload(
                  (function () {
                    var h = gi(
                      Ht().mark(function d(v, E, S) {
                        var k, W;
                        return Ht().wrap(function (x) {
                          for (;;)
                            switch ((x.prev = x.next)) {
                              case 0:
                                return ((x.next = 2), s.getImageWidth(v));
                              case 2:
                                return (
                                  (W = x.sent),
                                  x.abrupt(
                                    'return',
                                    o.dispatchCommand(In, {
                                      block:
                                        ((k = s.config) === null || k === void 0
                                          ? void 0
                                          : k.defaultBlockImage) !== !1,
                                      file: v,
                                      maxWidth: W,
                                      range: S,
                                    }),
                                  )
                                );
                              case 4:
                              case 'end':
                                return x.stop();
                            }
                        }, d);
                      }),
                    );
                    return function (d, v, E) {
                      return h.apply(this, arguments);
                    };
                  })(),
                  ei,
                );
            },
          },
          {
            key: 'registerLiteXml',
            value: function () {
              var o = this,
                s = this.kernel.requireService(bn);
              s &&
                (s.registerXMLWriter(Le.getType(), function (l, h) {
                  if (dr(l)) {
                    var d = { src: l.src };
                    return (l.altText && (d.alt = l.altText), h.createXmlNode('img', d));
                  }
                  return !1;
                }),
                s.registerXMLWriter(be.getType(), function (l, h) {
                  if (Rt(l)) {
                    var d = { block: 'true', src: l.src };
                    return (
                      l.altText && (d.alt = l.altText),
                      l.width && (d.width = String(l.width)),
                      l.maxWidth && (d['max-width'] = String(l.maxWidth)),
                      h.createXmlNode('img', d)
                    );
                  }
                  return !1;
                }),
                s.registerXMLReader('img', function (l) {
                  var h;
                  return ((h = o.config) === null || h === void 0
                    ? void 0
                    : h.defaultBlockImage) !== !1
                    ? Q.createElementNode(be.getType(), {
                        altText: l.getAttribute('alt') || '',
                        maxWidth: l.getAttribute('max-width')
                          ? parseInt(l.getAttribute('max-width'), 10)
                          : void 0,
                        src: l.getAttribute('src') || '',
                        width: l.getAttribute('width')
                          ? parseInt(l.getAttribute('width'), 10)
                          : void 0,
                      })
                    : l.getAttribute('block') === 'true'
                      ? Q.createElementNode(be.getType(), {
                          altText: l.getAttribute('alt') || '',
                          maxWidth: l.getAttribute('max-width')
                            ? parseInt(l.getAttribute('max-width'), 10)
                            : void 0,
                          src: l.getAttribute('src') || '',
                          width: l.getAttribute('width')
                            ? parseInt(l.getAttribute('width'), 10)
                            : void 0,
                        })
                      : Q.createElementNode(Le.getType(), {
                          altText: l.getAttribute('alt') || '',
                          maxWidth: l.getAttribute('max-width')
                            ? parseInt(l.getAttribute('max-width'), 10)
                            : void 0,
                          src: l.getAttribute('src') || '',
                          width: l.getAttribute('width')
                            ? parseInt(l.getAttribute('width'), 10)
                            : void 0,
                        });
                }));
            },
          },
          {
            key: 'registerMarkdown',
            value: function () {
              var o,
                s =
                  ((o = this.config) === null || o === void 0 ? void 0 : o.defaultBlockImage) !==
                  !1,
                l = this.kernel.requireService(Dn);
              l &&
                (l.registerMarkdownWriter(Le.getType(), function (h, d) {
                  dr(d) && h.appendLine('!['.concat(d.altText, '](').concat(d.src, ')'));
                }),
                l.registerMarkdownWriter(be.getType(), function (h, d) {
                  Rt(d) &&
                    h.appendLine(
                      '!['.concat(d.altText, '](').concat(
                        d.src,
                        `)

`,
                      ),
                    );
                }),
                l.registerMarkdownReader('image', function (h) {
                  var d = h.alt,
                    v = h.url;
                  return Q.createTypeNode(s ? be.getType() : Le.getType(), {
                    altText: d,
                    showCaption: !1,
                    src: v,
                    version: 1,
                  });
                }));
            },
          },
          {
            key: 'registerINode',
            value: function () {
              var o = this.kernel.requireService(yn);
              o &&
                o.registerProcessNodeTree(function (s) {
                  var l = s.root,
                    h = function d(v) {
                      if ('children' in v && Array.isArray(v.children)) {
                        if (
                          v.type === 'paragraph' &&
                          v.children.length === 1 &&
                          v.children[0].type === be.getType()
                        )
                          return v.children[0];
                        v.children = v.children.map(function (E) {
                          return d(E);
                        });
                      }
                      return v;
                    };
                  l.children = l.children.map(function (d) {
                    return h(d);
                  });
                });
            },
          },
          {
            key: 'getImageWidth',
            value: function (o) {
              return new Promise(function (s) {
                var l = new FileReader();
                (l.addEventListener('load', function (h) {
                  var d,
                    v = new Image();
                  (v.addEventListener('load', function () {
                    s(v.naturalWidth);
                  }),
                    v.addEventListener('error', function () {
                      s(800);
                    }),
                    (v.src = (d = h.target) === null || d === void 0 ? void 0 : d.result));
                }),
                  l.addEventListener('error', function () {
                    s(800);
                  }),
                  l.readAsDataURL(o));
              });
            },
          },
        ]),
        r
      );
    })(er)),
    Ti(Lt, 'pluginName', 'ImagePlugin'),
    Lt),
  $r,
  zr,
  Xr,
  Gr,
  Vr,
  Wr,
  Hr,
  Yr;
function we(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Ae = Jt(function (e) {
    var t = e.css,
      r = e.cssVar;
    return {
      brokenImage: t(
        $r ||
          ($r = we([
            `
    width: 200px;
    height: auto;
  `,
          ])),
      ),
      imageContainer: t(
        zr ||
          (zr = we([
            `
    cursor: default;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-block;

    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: `,
            `;

    transition: border-color 0.2s ease;

    &.selected {
      cursor: pointer;
      outline: none;

      &::after {
        pointer-events: none;
        content: '';

        position: absolute;
        z-index: 10;
        inset: 0;

        background-color: color-mix(in srgb, `,
            ` 10%, transparent);
      }
    }

    &.loading {
      &::after {
        pointer-events: none;
        content: '';

        position: absolute;
        z-index: 10;
        inset: 0;

        background-color: color-mix(in srgb, `,
            ` 40%, transparent);

        animation: image-loading-pulse 1.5s ease-in-out infinite;
      }

      @keyframes image-loading-pulse {
        0%,
        100% {
          opacity: 1;
        }

        50% {
          opacity: 0.4;
        }
      }
    }
  `,
          ])),
        r.borderRadiusSM,
        r.yellow,
        r.colorBgContainer,
      ),
      lazyImage: t(
        Xr ||
          (Xr = we([
            `
    cursor: default;
  `,
          ])),
      ),
      loadingIcon: t(
        Gr ||
          (Gr = we([
            `
    pointer-events: none;

    position: absolute;
    z-index: 11;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: `,
            `;
  `,
          ])),
        r.colorTextSecondary,
      ),
      resizeHandle: t(
        Vr ||
          (Vr = we([
            `
    pointer-events: auto;
    cursor: col-resize;

    position: absolute;
    z-index: 9999;
    inset-block-start: 0;

    width: 6px;
    height: 100%;

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 0;
      transform: translateY(-50%);

      width: 6px;
      height: min(80px, 80%);
      border: 1px solid color-mix(in srgb, rgb(255, 255, 255) 75%, transparent);
      border-radius: 3px;

      background-color: color-mix(in srgb, rgb(0, 0, 0) 50%, transparent);
    }
  `,
          ])),
      ),
      resizeHandleLeft: t(
        Wr ||
          (Wr = we([
            `
    inset-inline-start: 8px;
  `,
          ])),
      ),
      resizeHandleRight: t(
        Hr ||
          (Hr = we([
            `
    inset-inline-end: 8px;
  `,
          ])),
      ),
      scaleInfo: t(
        Yr ||
          (Yr = we([
            `
    pointer-events: none;

    position: absolute;
    z-index: 11;
    inset-block-start: 2px;
    inset-inline-start: 2px;

    padding-block: 2px;
    padding-inline: 6px;
    border-radius: `,
            `;

    font-size: 12px;
    color: white;

    background-color: color-mix(in srgb, rgb(0, 0, 0) 50%, transparent);
  `,
          ])),
        r.borderRadiusSM,
      ),
    };
  }),
  nr = function () {
    var t = tr();
    return U.jsx('img', {
      alt: t('image.broken'),
      className: Ae.brokenImage,
      draggable: 'false',
      src: Vn,
    });
  };
nr.displayName = 'BrokenImage';
function pt(e) {
  '@babel/helpers - typeof';
  return (
    (pt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    pt(e)
  );
}
function Ye() {
  Ye = function () {
    return t;
  };
  var e,
    t = {},
    r = Object.prototype,
    u = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (f, a, c) {
        f[a] = c.value;
      },
    s = typeof Symbol == 'function' ? Symbol : {},
    l = s.iterator || '@@iterator',
    h = s.asyncIterator || '@@asyncIterator',
    d = s.toStringTag || '@@toStringTag';
  function v(f, a, c) {
    return (
      Object.defineProperty(f, a, { value: c, enumerable: !0, configurable: !0, writable: !0 }),
      f[a]
    );
  }
  try {
    v({}, '');
  } catch {
    v = function (c, m, y) {
      return (c[m] = y);
    };
  }
  function E(f, a, c, m) {
    var y = a && a.prototype instanceof B ? a : B,
      g = Object.create(y.prototype),
      w = new j(m || []);
    return (o(g, '_invoke', { value: C(f, c, w) }), g);
  }
  function S(f, a, c) {
    try {
      return { type: 'normal', arg: f.call(a, c) };
    } catch (m) {
      return { type: 'throw', arg: m };
    }
  }
  t.wrap = E;
  var k = 'suspendedStart',
    W = 'suspendedYield',
    J = 'executing',
    x = 'completed',
    A = {};
  function B() {}
  function L() {}
  function _() {}
  var z = {};
  v(z, l, function () {
    return this;
  });
  var X = Object.getPrototypeOf,
    $ = X && X(X(M([])));
  $ && $ !== r && u.call($, l) && (z = $);
  var T = (_.prototype = B.prototype = Object.create(z));
  function V(f) {
    ['next', 'throw', 'return'].forEach(function (a) {
      v(f, a, function (c) {
        return this._invoke(a, c);
      });
    });
  }
  function D(f, a) {
    function c(y, g, w, G) {
      var P = S(f[y], f, g);
      if (P.type !== 'throw') {
        var q = P.arg,
          Y = q.value;
        return Y && pt(Y) == 'object' && u.call(Y, '__await')
          ? a.resolve(Y.__await).then(
              function (K) {
                c('next', K, w, G);
              },
              function (K) {
                c('throw', K, w, G);
              },
            )
          : a.resolve(Y).then(
              function (K) {
                ((q.value = K), w(q));
              },
              function (K) {
                return c('throw', K, w, G);
              },
            );
      }
      G(P.arg);
    }
    var m;
    o(this, '_invoke', {
      value: function (g, w) {
        function G() {
          return new a(function (P, q) {
            c(g, w, P, q);
          });
        }
        return (m = m ? m.then(G, G) : G());
      },
    });
  }
  function C(f, a, c) {
    var m = k;
    return function (y, g) {
      if (m === J) throw new Error('Generator is already running');
      if (m === x) {
        if (y === 'throw') throw g;
        return { value: e, done: !0 };
      }
      for (c.method = y, c.arg = g; ; ) {
        var w = c.delegate;
        if (w) {
          var G = R(w, c);
          if (G) {
            if (G === A) continue;
            return G;
          }
        }
        if (c.method === 'next') c.sent = c._sent = c.arg;
        else if (c.method === 'throw') {
          if (m === k) throw ((m = x), c.arg);
          c.dispatchException(c.arg);
        } else c.method === 'return' && c.abrupt('return', c.arg);
        m = J;
        var P = S(f, a, c);
        if (P.type === 'normal') {
          if (((m = c.done ? x : W), P.arg === A)) continue;
          return { value: P.arg, done: c.done };
        }
        P.type === 'throw' && ((m = x), (c.method = 'throw'), (c.arg = P.arg));
      }
    };
  }
  function R(f, a) {
    var c = a.method,
      m = f.iterator[c];
    if (m === e)
      return (
        (a.delegate = null),
        (c === 'throw' &&
          f.iterator.return &&
          ((a.method = 'return'), (a.arg = e), R(f, a), a.method === 'throw')) ||
          (c !== 'return' &&
            ((a.method = 'throw'),
            (a.arg = new TypeError("The iterator does not provide a '" + c + "' method")))),
        A
      );
    var y = S(m, f.iterator, a.arg);
    if (y.type === 'throw') return ((a.method = 'throw'), (a.arg = y.arg), (a.delegate = null), A);
    var g = y.arg;
    return g
      ? g.done
        ? ((a[f.resultName] = g.value),
          (a.next = f.nextLoc),
          a.method !== 'return' && ((a.method = 'next'), (a.arg = e)),
          (a.delegate = null),
          A)
        : g
      : ((a.method = 'throw'),
        (a.arg = new TypeError('iterator result is not an object')),
        (a.delegate = null),
        A);
  }
  function I(f) {
    var a = { tryLoc: f[0] };
    (1 in f && (a.catchLoc = f[1]),
      2 in f && ((a.finallyLoc = f[2]), (a.afterLoc = f[3])),
      this.tryEntries.push(a));
  }
  function N(f) {
    var a = f.completion || {};
    ((a.type = 'normal'), delete a.arg, (f.completion = a));
  }
  function j(f) {
    ((this.tryEntries = [{ tryLoc: 'root' }]), f.forEach(I, this), this.reset(!0));
  }
  function M(f) {
    if (f || f === '') {
      var a = f[l];
      if (a) return a.call(f);
      if (typeof f.next == 'function') return f;
      if (!isNaN(f.length)) {
        var c = -1,
          m = function y() {
            for (; ++c < f.length; ) if (u.call(f, c)) return ((y.value = f[c]), (y.done = !1), y);
            return ((y.value = e), (y.done = !0), y);
          };
        return (m.next = m);
      }
    }
    throw new TypeError(pt(f) + ' is not iterable');
  }
  return (
    (L.prototype = _),
    o(T, 'constructor', { value: _, configurable: !0 }),
    o(_, 'constructor', { value: L, configurable: !0 }),
    (L.displayName = v(_, d, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (f) {
      var a = typeof f == 'function' && f.constructor;
      return !!a && (a === L || (a.displayName || a.name) === 'GeneratorFunction');
    }),
    (t.mark = function (f) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(f, _)
          : ((f.__proto__ = _), v(f, d, 'GeneratorFunction')),
        (f.prototype = Object.create(T)),
        f
      );
    }),
    (t.awrap = function (f) {
      return { __await: f };
    }),
    V(D.prototype),
    v(D.prototype, h, function () {
      return this;
    }),
    (t.AsyncIterator = D),
    (t.async = function (f, a, c, m, y) {
      y === void 0 && (y = Promise);
      var g = new D(E(f, a, c, m), y);
      return t.isGeneratorFunction(a)
        ? g
        : g.next().then(function (w) {
            return w.done ? w.value : g.next();
          });
    }),
    V(T),
    v(T, d, 'Generator'),
    v(T, l, function () {
      return this;
    }),
    v(T, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (f) {
      var a = Object(f),
        c = [];
      for (var m in a) c.push(m);
      return (
        c.reverse(),
        function y() {
          for (; c.length; ) {
            var g = c.pop();
            if (g in a) return ((y.value = g), (y.done = !1), y);
          }
          return ((y.done = !0), y);
        }
      );
    }),
    (t.values = M),
    (j.prototype = {
      constructor: j,
      reset: function (a) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(N),
          !a)
        )
          for (var c in this)
            c.charAt(0) === 't' && u.call(this, c) && !isNaN(+c.slice(1)) && (this[c] = e);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0].completion;
        if (a.type === 'throw') throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        if (this.done) throw a;
        var c = this;
        function m(q, Y) {
          return (
            (w.type = 'throw'),
            (w.arg = a),
            (c.next = q),
            Y && ((c.method = 'next'), (c.arg = e)),
            !!Y
          );
        }
        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
          var g = this.tryEntries[y],
            w = g.completion;
          if (g.tryLoc === 'root') return m('end');
          if (g.tryLoc <= this.prev) {
            var G = u.call(g, 'catchLoc'),
              P = u.call(g, 'finallyLoc');
            if (G && P) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            } else if (G) {
              if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
            } else {
              if (!P) throw new Error('try statement without catch or finally');
              if (this.prev < g.finallyLoc) return m(g.finallyLoc);
            }
          }
        }
      },
      abrupt: function (a, c) {
        for (var m = this.tryEntries.length - 1; m >= 0; --m) {
          var y = this.tryEntries[m];
          if (y.tryLoc <= this.prev && u.call(y, 'finallyLoc') && this.prev < y.finallyLoc) {
            var g = y;
            break;
          }
        }
        g &&
          (a === 'break' || a === 'continue') &&
          g.tryLoc <= c &&
          c <= g.finallyLoc &&
          (g = null);
        var w = g ? g.completion : {};
        return (
          (w.type = a),
          (w.arg = c),
          g ? ((this.method = 'next'), (this.next = g.finallyLoc), A) : this.complete(w)
        );
      },
      complete: function (a, c) {
        if (a.type === 'throw') throw a.arg;
        return (
          a.type === 'break' || a.type === 'continue'
            ? (this.next = a.arg)
            : a.type === 'return'
              ? ((this.rval = this.arg = a.arg), (this.method = 'return'), (this.next = 'end'))
              : a.type === 'normal' && c && (this.next = c),
          A
        );
      },
      finish: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.finallyLoc === a) return (this.complete(m.completion, m.afterLoc), N(m), A);
        }
      },
      catch: function (a) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var m = this.tryEntries[c];
          if (m.tryLoc === a) {
            var y = m.completion;
            if (y.type === 'throw') {
              var g = y.arg;
              N(m);
            }
            return g;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (a, c, m) {
        return (
          (this.delegate = { iterator: M(a), resultName: c, nextLoc: m }),
          this.method === 'next' && (this.arg = e),
          A
        );
      },
    }),
    t
  );
}
function Kr(e, t, r, u, o, s, l) {
  try {
    var h = e[s](l),
      d = h.value;
  } catch (v) {
    r(v);
    return;
  }
  h.done ? t(d) : Promise.resolve(d).then(u, o);
}
function Jr(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (u, o) {
      var s = e.apply(t, r);
      function l(d) {
        Kr(s, u, o, l, h, 'next', d);
      }
      function h(d) {
        Kr(s, u, o, l, h, 'throw', d);
      }
      l(void 0);
    });
  };
}
function Bt(e, t) {
  return Li(e) || Oi(e, t) || _i(e, t) || ki();
}
function ki() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _i(e, t) {
  if (e) {
    if (typeof e == 'string') return Qr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qr(e, t);
  }
}
function Qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Oi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function Li(e) {
  if (Array.isArray(e)) return e;
}
var Fn = F.memo(function (e) {
  var t = e.children,
    r = e.node,
    u = e.handleUpload,
    o = e.onPickFile,
    s = F.useState(!1),
    l = Bt(s, 2),
    h = l[0],
    d = l[1],
    v = F.useState(''),
    E = Bt(v, 2),
    S = E[0],
    k = E[1],
    W = F.useState(!1),
    J = Bt(W, 2),
    x = J[0],
    A = J[1],
    B = F.useRef(null),
    L = F.useRef(null),
    _ = aa(),
    z = _.editable,
    X = tr();
  En(function (I) {
    return (
      (L.current = I),
      function () {
        L.current = null;
      }
    );
  }, []);
  var $ = F.useCallback(
      function (I) {
        (I && r.status !== 'uploaded') || (I && k(r.src), d(I));
      },
      [r],
    ),
    T = F.useCallback(function () {
      d(!1);
    }, []),
    V = F.useCallback(
      function () {
        var I = L.current;
        if (!(!I || !S.trim())) {
          var N = S.trim();
          (T(),
            I.update(function () {
              r.setUploaded(N);
            }));
        }
      },
      [r, S, T],
    ),
    D = F.useCallback(
      (function () {
        var I = Jr(
          Ye().mark(function N(j) {
            var M, f, a, c, m;
            return Ye().wrap(
              function (g) {
                for (;;)
                  switch ((g.prev = g.next)) {
                    case 0:
                      if (
                        ((f = (M = j.target.files) === null || M === void 0 ? void 0 : M[0]),
                        !(!f || !u))
                      ) {
                        g.next = 3;
                        break;
                      }
                      return g.abrupt('return');
                    case 3:
                      if ((T(), A(!0), (g.prev = 5), (a = L.current), a)) {
                        g.next = 9;
                        break;
                      }
                      return g.abrupt('return');
                    case 9:
                      return (
                        a.update(function () {
                          r.setStatus('loading');
                        }),
                        (g.next = 12),
                        u(f)
                      );
                    case 12:
                      ((c = g.sent),
                        a.update(function () {
                          r.setUploaded(c.url);
                        }),
                        (g.next = 20));
                      break;
                    case 16:
                      ((g.prev = 16),
                        (g.t0 = g.catch(5)),
                        (m = L.current),
                        m &&
                          m.update(function () {
                            r.setError('Upload failed');
                          }));
                    case 20:
                      return (
                        (g.prev = 20),
                        A(!1),
                        B.current && (B.current.value = ''),
                        g.finish(20)
                      );
                    case 24:
                    case 'end':
                      return g.stop();
                  }
              },
              N,
              null,
              [[5, 16, 20, 24]],
            );
          }),
        );
        return function (N) {
          return I.apply(this, arguments);
        };
      })(),
      [r, u, T],
    ),
    C = F.useCallback(
      Jr(
        Ye().mark(function I() {
          var N, j, M, f, a;
          return Ye().wrap(
            function (m) {
              for (;;)
                switch ((m.prev = m.next)) {
                  case 0:
                    if (!o) {
                      m.next = 27;
                      break;
                    }
                    return ((m.next = 3), o());
                  case 3:
                    if (((N = m.sent), !(N && u))) {
                      m.next = 25;
                      break;
                    }
                    if ((T(), A(!0), (m.prev = 7), (j = L.current), j)) {
                      m.next = 11;
                      break;
                    }
                    return m.abrupt('return');
                  case 11:
                    return (
                      j.update(function () {
                        r.setStatus('loading');
                      }),
                      (m.next = 14),
                      u(N)
                    );
                  case 14:
                    ((M = m.sent),
                      j.update(function () {
                        r.setUploaded(M.url);
                      }),
                      (m.next = 22));
                    break;
                  case 18:
                    ((m.prev = 18),
                      (m.t0 = m.catch(7)),
                      (f = L.current),
                      f &&
                        f.update(function () {
                          r.setError('Upload failed');
                        }));
                  case 22:
                    return ((m.prev = 22), A(!1), m.finish(22));
                  case 25:
                    m.next = 28;
                    break;
                  case 27:
                    (a = B.current) === null || a === void 0 || a.click();
                  case 28:
                  case 'end':
                    return m.stop();
                }
            },
            I,
            null,
            [[7, 18, 22, 25]],
          );
        }),
      ),
      [o, u, T, r],
    ),
    R = U.jsxs(mr, {
      gap: 8,
      style: { width: 320 },
      children: [
        U.jsx(na, {
          onChange: function (N) {
            return k(N.target.value);
          },
          onKeyDown: function (N) {
            (N.key === 'Enter' && V(), N.key === 'Escape' && T());
          },
          placeholder: 'https://...',
          prefix: U.jsx(Ft, { color: fn.colorTextDescription, icon: vn }),
          value: S,
        }),
        U.jsxs(mr, {
          gap: 8,
          horizontal: !0,
          justify: 'flex-end',
          children: [
            u &&
              U.jsxs(U.Fragment, {
                children: [
                  !o &&
                    U.jsx('input', {
                      accept: 'image/*',
                      onChange: D,
                      ref: B,
                      style: { display: 'none' },
                      type: 'file',
                    }),
                  U.jsx(vr, {
                    icon: U.jsx(Ft, { icon: Iu }),
                    loading: x,
                    onClick: C,
                    size: 'small',
                    type: 'text',
                    children: X('image.replace'),
                  }),
                ],
              }),
            U.jsx(vr, {
              onClick: V,
              size: 'small',
              type: 'text',
              variant: 'filled',
              children: X('confirm'),
            }),
          ],
        }),
      ],
    });
  return U.jsx(ua, {
    arrow: !1,
    content: R,
    disabled: !z || r.status !== 'uploaded',
    onOpenChange: $,
    open: h,
    placement: 'bottom',
    styles: { content: { padding: 12 } },
    trigger: 'click',
    children: t,
  });
});
Fn.displayName = 'ImageEditPopover';
var It = new Map(),
  Bi = function (t) {
    var r = It.get(t);
    if (typeof r == 'boolean') return r;
    throw (
      r ||
      ((r = new Promise(function (u) {
        var o = new Image();
        ((o.src = t),
          o.addEventListener('load', function () {
            return u(!1);
          }),
          o.addEventListener('error', function () {
            return u(!0);
          }));
      }).then(function (u) {
        return (It.set(t, u), u);
      })),
      It.set(t, r),
      r)
    );
  };
function Ke(e) {
  '@babel/helpers - typeof';
  return (
    (Ke =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ke(e)
  );
}
function Zr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    (t &&
      (u = u.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, u));
  }
  return r;
}
function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zr(Object(r), !0).forEach(function (u) {
          Ii(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zr(Object(r)).forEach(function (u) {
            Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
          });
  }
  return e;
}
function Ii(e, t, r) {
  return (
    (t = Ri(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ri(e) {
  var t = Fi(e, 'string');
  return Ke(t) == 'symbol' ? t : String(t);
}
function Fi(e, t) {
  if (Ke(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (Ke(u) != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Pi(e, t) {
  return Ui(e) || qi(e, t) || Mi(e, t) || ji();
}
function ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mi(e, t) {
  if (e) {
    if (typeof e == 'string') return tn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tn(e, t);
  }
}
function tn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function qi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function Ui(e) {
  if (Array.isArray(e)) return e;
}
function $i(e) {
  return e.toLowerCase().endsWith('.svg');
}
var Pn = function (t) {
  var r = t.className,
    u = t.node,
    o = t.newWidth,
    s = t.onError,
    l = t.onLoad,
    h = u.src,
    d = u.altText,
    v = u.maxWidth,
    E = u.width,
    S = F.useState(null),
    k = Pi(S, 2),
    W = k[0],
    J = k[1],
    x = $i(h),
    A = Bi(h);
  if (
    (F.useEffect(
      function () {
        A && s && s();
      },
      [A, s],
    ),
    A)
  )
    return U.jsx(nr, {});
  var B = function () {
      if (!x) return { maxWidth: v, width: E };
      var z = W?.width || 200,
        X = W?.height || 200,
        $ = z,
        T = X;
      if ($ > v) {
        var V = v / $;
        (($ = v), (T = Math.round(T * V)));
      }
      var D = 500;
      if (T > D) {
        var C = D / T;
        ((T = D), ($ = Math.round($ * C)));
      }
      return { maxWidth: v, width: $ };
    },
    L = B();
  return U.jsx('img', {
    alt: d,
    className: it(Ae.lazyImage, r || void 0),
    draggable: 'false',
    onError: s,
    onLoad: function (z) {
      var X = z.currentTarget,
        $ = Math.min(X.naturalWidth, X.getBoundingClientRect().width);
      (x && J({ height: X.naturalHeight, width: $ }), l?.({ height: X.naturalHeight, width: $ }));
    },
    src: h,
    style: en(
      en({}, L),
      {},
      { maxWidth: 'calc(min('.concat(o || L.maxWidth, 'px, 100%))'), width: o || L.width },
    ),
  });
};
Pn.displayName = 'LazyImage';
var Kt = function (t) {
  var r = t.imageRef,
    u = t.isBlock,
    o = t.onResize,
    s = t.onResizeEnd,
    l = t.onResizeStart,
    h = t.position,
    d = F.useRef(0),
    v = F.useCallback(
      function (E) {
        var S;
        (E.preventDefault(), E.stopPropagation());
        var k = ((S = r.current) === null || S === void 0 ? void 0 : S.offsetWidth) || 0;
        ((d.current = k), l(k));
        var W = E.clientX,
          J = E.clientY,
          x = u ? E.target.getBoundingClientRect() : { left: 0, width: 0 },
          A = x.left + x.width / 2,
          B = 0,
          L = 0,
          _ = function ($) {
            var T = $.clientX - W,
              V = $.clientY - J;
            switch (h) {
              case 'left': {
                T = u ? A - $.clientX : -T;
                break;
              }
              case 'right': {
                u && (T = $.clientX - A);
                break;
              }
            }
            ((B = T), (L = V), o(T, V, h));
          },
          z = function X() {
            (document.removeEventListener('mousemove', _),
              document.removeEventListener('mouseup', X),
              typeof s == 'function' && s(B, L));
          };
        (document.addEventListener('mousemove', _), document.addEventListener('mouseup', z));
      },
      [r, u, o, s, l, h],
    );
  return U.jsx('div', {
    className: it(Ae.resizeHandle, h === 'left' ? Ae.resizeHandleLeft : Ae.resizeHandleRight),
    onMouseDown: v,
  });
};
Kt.displayName = 'ResizeHandle';
function Ve(e, t) {
  return Vi(e) || Gi(e, t) || Xi(e, t) || zi();
}
function zi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xi(e, t) {
  if (e) {
    if (typeof e == 'string') return rn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rn(e, t);
  }
}
function rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Gi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function Vi(e) {
  if (Array.isArray(e)) return e;
}
var jn = F.memo(function (e) {
  var t = e.node,
    r = e.className,
    u = e.showScaleInfo,
    o = u === void 0 ? !1 : u,
    s = e.handleUpload,
    l = e.onPickFile,
    h = ta(t.getKey()),
    d = Ve(h, 2),
    v = d[0],
    E = d[1],
    S = F.useState(!1),
    k = Ve(S, 2),
    W = k[0],
    J = k[1],
    x = F.useState(1),
    A = Ve(x, 2),
    B = A[0],
    L = A[1],
    _ = F.useState({ height: 0, width: 0 }),
    z = Ve(_, 2),
    X = z[0],
    $ = z[1],
    T = F.useState(null),
    V = Ve(T, 2),
    D = V[0],
    C = V[1],
    R = F.useRef(null),
    I = F.useRef({ height: 0, width: 0 }),
    N = F.useRef(null),
    j = F.useRef(0),
    M = F.useRef(null),
    f = F.useMemo(
      function () {
        return Rt(t);
      },
      [t],
    );
  En(function (q) {
    N.current = q;
    var Y = q.registerCommand(
      Cu,
      function (K, te) {
        return !1;
      },
      Su,
    );
    return function () {
      ((N.current = null), Y());
    };
  }, []);
  var a = F.useCallback(function (q) {
      var Y;
      if (!(!I.current.width || !I.current.height) && R.current) {
        var K = I.current.width / I.current.height,
          te =
            ((Y = R.current.parentElement) === null || Y === void 0 ? void 0 : Y.clientWidth) ||
            window.innerWidth,
          ue = te,
          de = q * 2,
          fe = Math.max(50, Math.min(j.current + de, ue)),
          oe = fe / K;
        ($({ height: oe, width: fe }), C(fe));
        var ie = fe / I.current.width;
        L(ie);
      }
    }, []),
    c = F.useCallback(function (q) {
      j.current = q;
    }, []),
    m = F.useCallback(
      function (q) {
        (q.stopPropagation(), E(!0));
      },
      [E],
    ),
    y = F.useCallback(function (q) {
      var Y = N.current;
      if (Y) {
        (q.stopPropagation(), q.preventDefault());
        var K = I.current;
        !K.width ||
          !K.height ||
          ($(K),
          L(1),
          C(K.width),
          Y.update(function () {
            try {
              (t.setWidth(K.width), t.setMaxWidth(K.width));
            } catch {}
          }));
      }
    }, []),
    g = F.useCallback(function () {
      J(!0);
    }, []),
    w = F.useCallback(function () {
      J(!1);
    }, []),
    G = F.useMemo(
      function () {
        switch (t.status) {
          case 'error':
            return U.jsx(nr, {});
          case 'uploaded':
          case 'loading': {
            var q = M.current
              ? U.jsx('img', {
                  alt: t.altText,
                  className: it(Ae.lazyImage, r || void 0),
                  draggable: 'false',
                  src: M.current,
                  style: { width: '100%' },
                })
              : null;
            return U.jsx(F.Suspense, {
              fallback: q,
              children: U.jsx(Pn, {
                className: r,
                newWidth: D,
                node: t,
                onLoad: function (K) {
                  ((M.current = t.src),
                    (I.current.width = K.width),
                    (I.current.height = K.height),
                    $(K));
                },
              }),
            });
          }
          default:
            return null;
        }
      },
      [t.status, r, t, D],
    ),
    P = F.useCallback(
      function (q) {
        var Y;
        if (!(!I.current.width || !I.current.height) && R.current) {
          var K =
              ((Y = R.current.parentElement) === null || Y === void 0 ? void 0 : Y.clientWidth) ||
              window.innerWidth,
            te = K,
            ue = q / 2,
            de = Math.max(50, Math.min(j.current + ue, te)),
            fe = N.current;
          fe &&
            fe.update(function () {
              try {
                (t.setWidth(de), t.setMaxWidth(de));
              } catch {}
            });
        }
      },
      [t],
    );
  return U.jsx(Fn, {
    handleUpload: s,
    node: t,
    onPickFile: l,
    children: U.jsxs('div', {
      className: it(Ae.imageContainer, { loading: t.status === 'loading', selected: v }),
      draggable: !1,
      onClick: m,
      onDoubleClick: y,
      onMouseEnter: g,
      onMouseLeave: w,
      ref: R,
      style: { width: X.width || 'auto' },
      children: [
        G,
        t.status === 'loading' &&
          U.jsx('div', {
            className: Ae.loadingIcon,
            children: U.jsx(Ft, { icon: Ru, size: 24, spin: !0 }),
          }),
        o &&
          v &&
          B !== 1 &&
          U.jsxs('div', { className: Ae.scaleInfo, children: [Math.round(B * 100), '%'] }),
        W &&
          t.status === 'uploaded' &&
          U.jsxs(U.Fragment, {
            children: [
              U.jsx(Kt, {
                imageRef: R,
                isBlock: f,
                onResize: a,
                onResizeEnd: P,
                onResizeStart: c,
                position: 'left',
              }),
              U.jsx(Kt, {
                imageRef: R,
                isBlock: f,
                onResize: a,
                onResizeEnd: P,
                onResizeStart: c,
                position: 'right',
              }),
            ],
          }),
      ],
    }),
  });
});
jn.displayName = 'Image';
function Wi(e, t) {
  return Ji(e) || Ki(e, t) || Yi(e, t) || Hi();
}
function Hi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(e, t) {
  if (e) {
    if (typeof e == 'string') return nn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nn(e, t);
  }
}
function nn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = new Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Ki(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var u,
      o,
      s,
      l,
      h = [],
      d = !0,
      v = !1;
    try {
      if (((s = (r = r.call(e)).next), t !== 0))
        for (; !(d = (u = s.call(r)).done) && (h.push(u.value), h.length !== t); d = !0);
    } catch (E) {
      ((v = !0), (o = E));
    } finally {
      try {
        if (!d && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (v) throw o;
      }
    }
    return h;
  }
}
function Ji(e) {
  if (Array.isArray(e)) return e;
}
var un = function (t) {
    return new Promise(function (r) {
      setTimeout(function () {
        r({ url: URL.createObjectURL(t) });
      }, 1e3);
    });
  },
  Mn = function (t) {
    var r = t.theme,
      u = t.className,
      o = t.defaultBlockImage,
      s = t.handleUpload,
      l = t.needRehost,
      h = t.handleRehost,
      d = t.onPickFile,
      v = An(),
      E = Wi(v, 1),
      S = E[0];
    return (
      F.useLayoutEffect(function () {
        (S.registerPlugin(di),
          S.registerPlugin(Ni, {
            defaultBlockImage: o,
            handleRehost: h,
            handleUpload: s || un,
            needRehost: l,
            renderImage: function (W) {
              return U.jsx(jn, { className: u, handleUpload: s || un, node: W, onPickFile: d });
            },
            theme: r || Wn,
          }));
      }, []),
      null
    );
  };
Mn.displayName = 'ReactImagePlugin';
const Qi = (e, t) => ({
    content: '',
    editorData: null,
    isDirty: !1,
    lastSavedContent: '',
    lastSavedEditorData: null,
    lastUpdatedTime: null,
    saveStatus: 'idle',
    sourceType: e,
    ...t,
  }),
  Zi = { activeDocumentId: void 0, documents: {}, editor: void 0, editorState: void 0 },
  eo = (e = {}, t) => {
    switch (t.type) {
      case 'addDocument':
        return Ct(e, (r) => {
          const { id: u, value: o } = t,
            s = r[u];
          r[u] = s ? { ...s, ...o } : Qi(o.sourceType, o);
        });
      case 'updateDocument':
        return Ct(e, (r) => {
          const { id: u, value: o } = t;
          r[u] && Object.assign(r[u], o);
        });
      case 'deleteDocument':
        return Ct(e, (r) => {
          delete r[t.id];
        });
      default:
        return e;
    }
  },
  an = pn('document/editor'),
  to = (e, t, r) => new ro(e, t, r);
class ro {
  #e;
  #t;
  constructor(t, r, u) {
    ((this.#t = t), (this.#e = r));
  }
  getEditorContent = () => {
    const { editor: t } = this.#e();
    if (!t) return null;
    try {
      const r = t.getDocument('markdown') || '';
      return { editorData: t.getDocument('json'), markdown: r };
    } catch (r) {
      return (console.error('[DocumentStore] Failed to get editor content:', r), null);
    }
  };
  handleContentChange = () => {
    const {
      editor: t,
      activeDocumentId: r,
      documents: u,
      internal_dispatchDocument: o,
    } = this.#e();
    if (!t || !r) return;
    const s = u[r];
    if (s)
      try {
        const l = t.getDocument('markdown') || '',
          h = t.getDocument('json'),
          d = l !== s.lastSavedContent,
          v = !Pt(h, s.lastSavedEditorData),
          E = d || v;
        (o(
          { id: r, type: 'updateDocument', value: { content: l, editorData: h, isDirty: E } },
          'handleContentChange',
        ),
          E && s.autoSave !== !1 && this.#e().triggerDebouncedSave(r));
      } catch (l) {
        console.error('[DocumentStore] Failed to update content:', l);
      }
  };
  internal_dispatchDocument = (t, r) => {
    const { documents: u } = this.#e(),
      o = eo(u, t);
    Pt(u, o) || this.#t({ documents: o }, !1, r ?? an(`dispatchDocument/${t.type}`, { id: t.id }));
  };
  markDirty = (t) => {
    const { documents: r, internal_dispatchDocument: u } = this.#e();
    r[t] && u({ id: t, type: 'updateDocument', value: { isDirty: !0 } });
  };
  onEditorInit = async (t) => {
    const { activeDocumentId: r, documents: u } = this.#e();
    if (!t || !r) return;
    const o = u[r];
    if (!o) return;
    if (o.editorData && typeof o.editorData == 'object' && Object.keys(o.editorData).length > 0)
      try {
        t.setDocument('json', JSON.stringify(o.editorData));
        return;
      } catch {
        console.warn('[DocumentStore] Failed to load editorData, falling back to markdown');
      }
    try {
      o.content?.trim()
        ? t.setDocument('markdown', o.content)
        : t.setDocument('json', JSON.stringify(dn));
    } catch (l) {
      console.error('[DocumentStore] Failed to load markdown content:', l);
    }
    this.#t({ editor: t });
  };
  performSave = async (t, r) => {
    const u = t || this.#e().activeDocumentId;
    if (!u) return;
    const { editor: o, documents: s, internal_dispatchDocument: l } = this.#e(),
      h = s[u];
    if (!(!h || !o) && h.isDirty) {
      l({ id: u, type: 'updateDocument', value: { saveStatus: 'saving' } });
      try {
        const d = o.getDocument('markdown') || '',
          v = o.getDocument('json');
        (await hn.updateDocument({
          content: d,
          editorData: JSON.stringify(v),
          id: u,
          metadata: r?.emoji ? { emoji: r.emoji } : void 0,
          title: r?.title,
        }),
          l({
            id: u,
            type: 'updateDocument',
            value: {
              editorData: structuredClone(v),
              isDirty: !1,
              lastSavedContent: d,
              lastSavedEditorData: structuredClone(v),
              lastUpdatedTime: new Date(),
              saveStatus: 'saved',
            },
          }));
      } catch (d) {
        (console.error('[DocumentStore] Failed to save:', d),
          l({ id: u, type: 'updateDocument', value: { saveStatus: 'idle' } }));
      }
    }
  };
  setEditorState = (t) => {
    this.#t({ editorState: t }, !1, an('setEditorState'));
  };
}
const no = (e) => e.activeDocumentId,
  Te = (e) => (e.activeDocumentId ? e.documents[e.activeDocumentId] : void 0),
  uo = (e) => !!e.activeDocumentId,
  ao = (e) => (t) => t.documents[e],
  io = (e) => (t) => t.documents[e]?.isDirty ?? !1,
  oo = (e) => (t) => t.documents[e]?.saveStatus ?? 'idle',
  co = (e) => (t) => t.documents[e]?.content ?? '',
  so = (e) => (t) => t.documents[e]?.editorData,
  lo = (e) => (t) => t.documents[e]?.sourceType,
  fo = (e) => (t) => t.documents[e]?.lastUpdatedTime?.toISOString(),
  po = (e) => Te(e)?.isDirty ?? !1,
  ho = (e) => Te(e)?.saveStatus ?? 'idle',
  mo = (e) => Te(e)?.content ?? '',
  vo = (e) => Te(e)?.editorData,
  go = (e) => Te(e)?.sourceType,
  yo = (e) => Te(e)?.lastUpdatedTime,
  bo = (e) => e.editor,
  Do = (e) => e.editorState,
  Ao = (e) => {
    const t = Te(e);
    return t?.isDirty && t?.saveStatus !== 'saving';
  },
  Eo = (e) => Object.keys(e.documents),
  wo = (e) => Object.keys(e.documents).length,
  Co = (e) => (t) => e in t.documents,
  So = (e) => (t) => !e || !t.documents[e],
  on = {
    activeContent: mo,
    activeDocument: Te,
    activeDocumentId: no,
    activeEditorData: vo,
    activeIsDirty: po,
    activeLastUpdatedTime: yo,
    activeSaveStatus: ho,
    activeSourceType: go,
    content: co,
    documentById: ao,
    editorData: so,
    hasDocument: Co,
    isDocumentLoading: So,
    isDirty: io,
    lastUpdatedTime: fo,
    saveStatus: oo,
    sourceType: lo,
    canSave: Ao,
    editor: bo,
    editorState: Do,
    isEditing: uo,
    documentCount: wo,
    documentIds: Eo,
  },
  cn = pn('document/document'),
  To = (e, t, r) => new xo(e, t, r);
class xo {
  #e;
  #t;
  #r = new Map();
  constructor(t, r, u) {
    ((this.#t = t), (this.#e = r));
  }
  #n = (t) => {
    if (!this.#r.has(t)) {
      const r = ku(
        async () => {
          try {
            await this.#e().performSave(t);
          } catch (u) {
            console.error('[DocumentStore] Failed to auto-save:', u);
          }
        },
        xu,
        { leading: !1, maxWait: Tu, trailing: !0 },
      );
      this.#r.set(t, r);
    }
    return this.#r.get(t);
  };
  #u = (t) => {
    const r = this.#r.get(t);
    r && (r.cancel(), this.#r.delete(t));
  };
  closeDocument = (t) => {
    const r = this.#r.get(t);
    r && (r.flush(), this.#u(t));
    const { activeDocumentId: u, internal_dispatchDocument: o } = this.#e();
    (o({ id: t, type: 'deleteDocument' }),
      u === t && this.#t({ activeDocumentId: void 0 }, !1, cn('closeDocument:clearActive')));
  };
  flushSave = (t) => {
    const r = t || this.#e().activeDocumentId;
    r && this.#r.get(r)?.flush();
  };
  initDocumentWithEditor = (t) => {
    const {
        documentId: r,
        sourceType: u,
        content: o,
        editorData: s,
        topicId: l,
        autoSave: h,
        editor: d,
      } = t,
      { internal_dispatchDocument: v } = this.#e();
    (v({
      id: r,
      type: 'addDocument',
      value: {
        autoSave: h,
        content: o ?? void 0,
        editorData: s,
        lastSavedContent: o ?? void 0,
        lastSavedEditorData: s,
        sourceType: u,
        topicId: l,
      },
    }),
      this.#t({ activeDocumentId: r, editor: d }, !1, cn('initDocumentWithEditor:setActive')));
  };
  triggerDebouncedSave = (t) => {
    this.#n(t)();
  };
  useFetchDocument = (t, r = {}) => {
    const { autoSave: u = !0, editor: o, sourceType: s = 'page' } = r;
    return Nu(
      t && o ? ['document/editor', t] : null,
      async () => {
        const h = await hn.getDocumentById(t);
        return h || (console.warn(`[useFetchDocument] Document not found: ${t}`), null);
      },
      {
        focusThrottleInterval: 2e4,
        onData: (h) => {
          if (!h || !t || !o) return;
          const d = this.#e().activeDocumentId;
          (d && d !== t) ||
            this.#e().initDocumentWithEditor({
              autoSave: u,
              content: h.content,
              documentId: t,
              editor: o,
              editorData: h.editorData,
              sourceType: s,
            });
        },
        revalidateOnFocus: !0,
      },
    );
  };
}
const No = { ...Zi },
  ko = (...e) => ({ ...No, ...eu([To(...e), to(...e)]) }),
  _o = Zn('document'),
  We = Jn()(_o(ko), Qn),
  qn = F.memo(
    ({ floating: e, style: t, className: r, editor: u, editorState: o, extraItems: s }) => {
      const { t: l } = Ue('editor'),
        h = F.useMemo(
          () =>
            o
              ? [
                  ...(s || []),
                  s?.length ? { type: 'divider' } : null,
                  !e && {
                    disabled: !o.canUndo,
                    icon: Fu,
                    key: 'undo',
                    label: l('typobar.undo', 'Undo'),
                    onClick: o.undo,
                    tooltipProps: { hotkey: me(ve.Undo).keys },
                  },
                  !e && {
                    disabled: !o.canRedo,
                    icon: Pu,
                    key: 'redo',
                    label: l('typobar.redo', 'Redo'),
                    onClick: o.redo,
                    tooltipProps: { hotkey: me(ve.Redo).keys },
                  },
                  !e && { type: 'divider' },
                  {
                    active: o.isBold,
                    icon: ju,
                    key: 'bold',
                    label: l('typobar.bold'),
                    onClick: o.bold,
                    tooltipProps: { hotkey: me(ve.Bold).keys },
                  },
                  {
                    active: o.isItalic,
                    icon: Mu,
                    key: 'italic',
                    label: l('typobar.italic'),
                    onClick: o.italic,
                    tooltipProps: { hotkey: me(ve.Italic).keys },
                  },
                  {
                    active: o.isUnderline,
                    icon: qu,
                    key: 'underline',
                    label: l('typobar.underline'),
                    onClick: o.underline,
                    tooltipProps: { hotkey: me(ve.Underline).keys },
                  },
                  {
                    active: o.isStrikethrough,
                    icon: Uu,
                    key: 'strikethrough',
                    label: l('typobar.strikethrough'),
                    onClick: o.strikethrough,
                    tooltipProps: { hotkey: me(ve.Strikethrough).keys },
                  },
                  { type: 'divider' },
                  !e && {
                    icon: $u,
                    key: 'h1',
                    label: l('slash.h1'),
                    onClick: () => {
                      u && u.dispatchCommand(St, { tag: 'h1' });
                    },
                  },
                  !e && {
                    icon: zu,
                    key: 'h2',
                    label: l('slash.h2'),
                    onClick: () => {
                      u && u.dispatchCommand(St, { tag: 'h2' });
                    },
                  },
                  !e && {
                    icon: Xu,
                    key: 'h3',
                    label: l('slash.h3'),
                    onClick: () => {
                      u && u.dispatchCommand(St, { tag: 'h3' });
                    },
                  },
                  !e && { type: 'divider' },
                  {
                    icon: Gu,
                    key: 'bulletList',
                    label: l('typobar.bulletList'),
                    onClick: o.bulletList,
                    tooltipProps: { hotkey: me(ve.BulletList).keys },
                  },
                  {
                    icon: Vu,
                    key: 'numberlist',
                    label: l('typobar.numberList'),
                    onClick: o.numberList,
                    tooltipProps: { hotkey: me(ve.NumberList).keys },
                  },
                  { icon: Wu, key: 'tasklist', label: l('typobar.taskList'), onClick: o.checkList },
                  { type: 'divider' },
                  {
                    active: o.isBlockquote,
                    icon: Hu,
                    key: 'blockquote',
                    label: l('typobar.blockquote'),
                    onClick: o.blockquote,
                  },
                  {
                    icon: vn,
                    key: 'link',
                    label: l('typobar.link'),
                    onClick: o.insertLink,
                    tooltipProps: { hotkey: me(ve.Link).keys },
                  },
                  { icon: Yu, key: 'math', label: l('typobar.tex'), onClick: o.insertMath },
                  { type: 'divider' },
                  {
                    active: o.isCode,
                    icon: Ku,
                    key: 'code',
                    label: l('typobar.code'),
                    onClick: o.code,
                    tooltipProps: { hotkey: me(ve.CodeInline).keys },
                  },
                  !e && {
                    icon: Ju,
                    key: 'codeblock',
                    label: l('typobar.codeblock'),
                    onClick: o.codeblock,
                  },
                ].filter(Boolean)
              : [],
          [u, o, s, e, l],
        );
      return o
        ? e
          ? U.jsx(au, { className: r, items: h, style: t })
          : U.jsx(mn, {
              shadow: !0,
              className: r,
              padding: 4,
              variant: 'outlined',
              style: {
                background: fn.colorBgElevated,
                borderRadius: 8,
                marginBottom: 16,
                marginTop: 16,
                position: 'sticky',
                top: 12,
                zIndex: 10,
                ...t,
              },
              children: U.jsx(_u, { items: h }),
            })
        : null;
    },
  );
qn.displayName = 'InlineToolbar';
const Oo = () => {
    const e = ou((t) => t.uploadWithProgress);
    return F.useCallback(
      async (t) => {
        try {
          const r = await e({ file: t, skipCheckFileType: !1, source: 'page-editor' });
          if (!r) throw new Error('Upload returned empty result');
          return { url: r.url };
        } catch (r) {
          throw new Error('Image upload failed', { cause: r });
        }
      },
      [e],
    );
  },
  sn = [_n, ...Ou({ linkPlugin: oa }), ia],
  ht = F.memo(
    ({
      contentChangeLockRef: e,
      editor: t,
      extraPlugins: r,
      floatingToolbar: u = !0,
      onContentChange: o,
      onInit: s,
      placeholder: l,
      plugins: h,
      slashItems: d,
      style: v,
      toolbarExtraItems: E,
    }) => {
      const { t: S } = Ue('file'),
        k = ra(t),
        W = Oo(),
        J = F.useCallback(async () => null, []),
        x = l || S('pageEditor.editorPlaceholder'),
        A = F.useMemo(() => {
          if (h) return h;
          const _ = Tt.withProps(Mn, {
              defaultBlockImage: !0,
              handleUpload: W,
              onPickFile: void 0,
            }),
            z = r ? [...r, ...sn, _] : [...sn, _];
          return u
            ? [
                ...z,
                Tt.withProps(iu, {
                  children: U.jsx(qn, { floating: !0, editor: t, editorState: k, extraItems: E }),
                }),
              ]
            : z;
        }, [h, t, k, r, u, W, J, E]);
      F.useEffect(
        () => (
          t && (window.__editor = t),
          () => {
            window.__editor = void 0;
          }
        ),
        [t],
      );
      const B = F.useRef(void 0),
        L = F.useRef(o);
      return (
        (L.current = o),
        F.useEffect(() => {
          if (!t) return;
          const _ = t.getLexicalEditor?.();
          if (!_) return;
          B.current = t.getDocument('json');
          const z = _.registerUpdateListener(({ dirtyElements: X, dirtyLeaves: $ }) => {
            if (X.size === 0 && $.size === 0) return;
            const T = t.getDocument('json');
            if (!Pt(T, B.current)) {
              if (((B.current = T), e?.current)) return;
              L.current?.();
            }
          });
          return () => {
            z();
          };
        }, [e, t]),
        U.jsx('div', {
          onClick: (_) => {
            (_.stopPropagation(), _.preventDefault());
          },
          children: U.jsx(Tt, {
            content: '',
            editor: t,
            lineEmptyPlaceholder: x,
            placeholder: x,
            plugins: A,
            slashOption: d ? { items: d } : void 0,
            type: 'text',
            style: { paddingBottom: 64, ...v },
            onInit: s,
          }),
        })
      );
    },
  );
ht.displayName = 'InternalEditor';
const Un = F.memo(({ isDirty: e, message: t, onAutoSave: r, title: u }) => {
  const { t: o } = Ue('file'),
    { message: s } = tu.useApp(),
    l = ru(e),
    h = F.useRef(l),
    d = F.useRef(!1);
  return (
    (h.current = l),
    F.useEffect(() => {
      if (l.state !== 'blocked' || d.current) return;
      d.current = !0;
      const v = `editor-leave-auto-save-${Date.now()}`;
      (async () => {
        s.loading({ content: o('pageEditor.saving'), duration: 0, key: v });
        try {
          if (!((await r?.()) ?? !0)) {
            (s.error({ content: o('networkError'), duration: 2, key: v }), h.current?.reset?.());
            return;
          }
          (s.destroy(v), h.current?.proceed?.());
        } catch (S) {
          const k = S instanceof Error && S.message ? S.message : o('networkError');
          (s.error({ content: k, duration: 2, key: v }), h.current?.reset?.());
        } finally {
          d.current = !1;
        }
      })();
    }, [l.state, t, s, r, o]),
    F.useEffect(() => {
      if (!e) return;
      const v = (E) => {
        (E.preventDefault(), (E.returnValue = t));
      };
      return (
        window.addEventListener('beforeunload', v),
        () => {
          window.removeEventListener('beforeunload', v);
        }
      );
    }, [e, t]),
    null
  );
});
Un.displayName = 'UnsavedChangesGuard';
const Lo = F.memo(() =>
    U.jsx('div', {
      style: { paddingBlock: 24 },
      children: U.jsx(Yn, { active: !0, paragraph: { rows: 8 } }),
    }),
  ),
  Bo = F.memo(({ error: e }) => {
    const { t } = Ue('file');
    return U.jsx(Hn, {
      showIcon: !0,
      description: e.message || t('pageEditor.loadError', 'Failed to load document'),
      style: { margin: 16 },
      title: t('pageEditor.error', 'Error'),
      type: 'error',
    });
  }),
  $n = F.memo(
    ({
      editor: e,
      documentId: t,
      autoSave: r = !0,
      sourceType: u = 'page',
      onContentChange: o,
      unsavedChangesGuard: s,
      style: l,
      ...h
    }) => {
      const { t: d } = Ue(['file', 'ui']),
        v = nu(We);
      (v('activeDocumentId', t), v('editor', e));
      const [E, S, k, W, J] = We((C) => [
        C.onEditorInit,
        C.handleContentChange,
        C.useFetchDocument,
        C.performSave,
        C.flushSave,
      ]);
      uu(J);
      const { error: x } = k(t, { autoSave: r, editor: e, sourceType: u }),
        A = We(on.isDocumentLoading(t)),
        B = We(on.isDirty(t)),
        L = s?.enabled ?? !1,
        _ = F.useCallback(async () => {
          if (!L) return !0;
          (S(), await W(t));
          const C = We.getState().documents[t];
          return C ? !C.isDirty : !0;
        }, [t, S, W, L]),
        z = U.jsx(Un, {
          isDirty: L && B,
          message: s?.message || d('form.unsavedWarning', { ns: 'ui' }),
          title: s?.title || d('form.unsavedChanges', { ns: 'ui' }),
          onAutoSave: _,
        }),
        X = () => {
          (S(), o?.());
        },
        $ = !!e?.getLexicalEditor(),
        T = F.useRef(!1),
        V = F.useRef(0),
        D = F.useRef(null);
      return (
        F.useEffect(() => {
          if (e && $ && !A && D.current !== t) {
            const C = ++V.current;
            ((D.current = t),
              (T.current = !0),
              E(e).finally(() => {
                queueMicrotask(() => {
                  V.current === C && (T.current = !1);
                });
              }));
          }
        }, [t, e, $, A, E]),
        A
          ? U.jsxs(U.Fragment, { children: [z, U.jsx(Lo, {})] })
          : e
            ? U.jsxs(U.Fragment, {
                children: [
                  z,
                  x && U.jsx(Bo, { error: x }),
                  U.jsx(ht, {
                    contentChangeLockRef: T,
                    editor: e,
                    placeholder: h.placeholder || d('pageEditor.editorPlaceholder'),
                    style: l,
                    onContentChange: X,
                    onInit: E,
                    ...h,
                  }),
                ],
              })
            : z
      );
    },
  );
$n.displayName = 'DocumentIdMode';
const ln = (e, t) => {
    const r =
      t.editorData && typeof t.editorData == 'object' && Object.keys(t.editorData).length > 0;
    try {
      return r
        ? (e.setDocument('json', JSON.stringify(t.editorData)), !0)
        : t.content?.trim()
          ? (e.setDocument('markdown', t.content, { keepId: !0 }), !0)
          : (e.setDocument('json', JSON.stringify(dn)), !0);
    } catch (u) {
      return (console.error('[loadEditorContent] Error loading content:', u), !1);
    }
    return !1;
  },
  zn = F.memo(
    ({ editor: e, editorData: t, entityId: r, onContentChange: u, onInit: o, style: s, ...l }) => {
      const { t: h } = Ue('file'),
        d = F.useRef(!1),
        v = F.useRef(void 0),
        E = r === void 0 || v.current !== r,
        S = F.useCallback(
          (k) => {
            d.current = !0;
            try {
              E && ln(k, t) && (v.current = r);
            } catch (W) {
              console.error('[EditorCanvas] Failed to load content:', W);
            }
            o?.(k);
          },
          [t, r, o],
        );
      return (
        F.useEffect(() => {
          if (!(!e || !d.current) && E)
            try {
              ln(e, t) && (v.current = r);
            } catch (k) {
              console.error('[EditorCanvas] Failed to load content:', k);
            }
        }, [e, r, t, E]),
        e
          ? U.jsx('div', {
              style: { position: 'relative', ...s },
              children: U.jsx(ht, {
                editor: e,
                placeholder: l.placeholder || h('pageEditor.editorPlaceholder'),
                onContentChange: u,
                onInit: S,
                ...l,
              }),
            })
          : null
      );
    },
  );
zn.displayName = 'EditorDataMode';
const Io = F.memo(({ editor: e, documentId: t, editorData: r, entityId: u, ...o }) =>
  t
    ? U.jsx(wt, {
        alertTitle: 'Editor Error',
        variant: 'alert',
        children: U.jsx($n, { documentId: t, editor: e, ...o }),
      })
    : r
      ? U.jsx(wt, {
          alertTitle: 'Editor Error',
          variant: 'alert',
          children: U.jsx(zn, { editor: e, editorData: r, entityId: u, ...o }),
        })
      : e
        ? U.jsx(wt, {
            alertTitle: 'Editor Error',
            variant: 'alert',
            children: U.jsx(ht, { editor: e, ...o }),
          })
        : null,
);
Io.displayName = 'EditorCanvas';
export { le as D, Io as E, In as I, ca as L, on as e, We as u };
