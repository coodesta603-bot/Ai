import { r as k } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  U as Qe,
  $ as oe,
  f as De,
  C as ie,
  I as Ye,
  h as je,
  i as Je,
  K as Ze,
  j as Se,
  k as et,
  l as tt,
} from './index-CMcqKxKW.js';
import {
  J as Le,
  U as Fe,
  M as Oe,
  N as ee,
  $ as rt,
  V as le,
  O as ye,
  Q as nt,
  Y as me,
  S as at,
  W as Ge,
  X as ot,
  Z as it,
  _ as lt,
} from './index-Br6hqyew.js';
import { B as ut } from './Block-DDntSWi2.js';
import {
  k as g,
  A as ke,
  f as Be,
  F as H,
  bg as ct,
  Z as ue,
  j as ge,
  de as st,
} from './index-C8UyLGsD.js';
import { j as S } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  cw as ft,
  cO as dt,
  cl as pt,
  b4 as mt,
  R as ht,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { S as vt } from './Select-Bh2jXi9V.js';
import { I as yt } from './InputNumber-DGocrXJO.js';
import { k as gt } from './Popover-Cg4CTqoX.js';
import { S as _e } from './index-CaOmqfDS.js';
import { d as xt } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
var bt = Le('INSERT_CODEMIRROR_COMMAND'),
  Ue = Le('SELECT_BEFORE_CODEMIRROR_COMMAND'),
  xe = Le('SELECT_AFTER_CODEMIRROR_COMMAND');
function wt(t) {
  return Fe(
    t.registerCommand(
      bt,
      function () {
        return (
          t.update(function () {
            var e = De('', '');
            at([e]);
            var o = Ge();
            (o.add(e.getKey()), ee(o));
          }),
          !0
        );
      },
      le,
    ),
    t.registerCommand(
      Qe,
      function (e) {
        var o = t.getEditorState().read(function () {
          var i = ye();
          if (nt(i))
            if (i.isCollapsed()) {
              var s = me(i.anchor.getNode(), oe);
              return s;
            } else {
              var l = me(i.anchor.getNode(), oe),
                d = me(i.focus.getNode(), oe);
              return l && d && l === d ? l : null;
            }
          return !1;
        });
        return o
          ? (queueMicrotask(function () {
              t.update(function () {
                oe(o) && o.setLang(e.lang);
              });
            }),
            !0)
          : !1;
      },
      le,
    ),
    t.registerCommand(
      Ue,
      function (e) {
        return (
          t.update(function () {
            var o = Oe(e.key);
            if (o) {
              var i = o.getPreviousSibling(),
                s = i?.selectEnd();
              (console.info('SELECT_BEFORE_CODEMIRROR_COMMAND', i, s), s && ee(s), t.focus());
            }
          }),
          !1
        );
      },
      le,
    ),
    t.registerCommand(
      xe,
      function (e) {
        return (
          t.update(function () {
            var o = Oe(e.key);
            if (o) {
              var i = o.getNextSibling(),
                s = i?.selectStart();
              if (s) ee(s);
              else {
                var l = rt();
                o.insertAfter(l);
                var d = l.selectStart();
                d && ee(d);
              }
              t.focus();
            }
          }),
          !1
        );
      },
      le,
    ),
  );
}
var de = [
  { ext: ['agda'], name: 'Agda', syntax: 'text/x-agda', value: 'agda' },
  { ext: ['ets', 'arkts'], name: 'ArkTS', syntax: 'text/x-arkts', value: 'arkts' },
  { ext: ['bash'], name: 'Bash', syntax: 'shell', value: 'bash' },
  { ext: ['vbs'], name: 'Basic', syntax: 'vbscript', value: 'basic' },
  { ext: ['c', 'h', 'ino'], name: 'C', syntax: 'text/x-csrc', value: 'c' },
  {
    ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
    name: 'C++',
    syntax: 'text/x-c++src',
    value: 'cpp',
  },
  { ext: ['cs'], name: 'C#', syntax: 'text/x-csharp', value: 'csharp' },
  { ext: ['css'], name: 'CSS', syntax: 'css', value: 'css' },
  { ext: ['dart'], name: 'Dart', syntax: 'dart', value: 'dart' },
  { ext: ['diff', 'patch'], name: 'Diff', syntax: 'diff', value: 'diff' },
  { name: 'Dockerfile', syntax: 'dockerfile', value: 'dockerfile' },
  { ext: ['erl'], name: 'Erlang', syntax: 'erlang', value: 'erlang' },
  { ext: ['glsl'], name: 'Glsl', syntax: 'x-shader/x-vertex', value: 'glsl' },
  { name: 'Git', syntax: 'shell', value: 'git' },
  { ext: ['go'], name: 'Go', syntax: 'go', value: 'go' },
  { name: 'GraphQL', syntax: 'graphql', value: 'graphql' },
  { ext: ['groovy', 'gradle'], name: 'Groovy', syntax: 'groovy', value: 'groovy' },
  { ext: ['html', 'htm', 'handlebars', 'hbs'], name: 'HTML', syntax: 'htmlmixed', value: 'html' },
  { name: 'HTTP', syntax: 'http', value: 'http' },
  { ext: ['java'], name: 'Java', syntax: 'text/x-java', value: 'java' },
  { ext: ['js'], name: 'JavaScript', syntax: 'text/javascript', value: 'javascript' },
  { ext: ['json', 'map'], name: 'JSON', syntax: 'application/json', value: 'json' },
  { ext: ['jsx'], name: 'JSX', syntax: 'jsx', value: 'jsx' },
  { name: 'KaTeX', syntax: 'simplemode', value: 'katex' },
  { ext: ['kt'], name: 'Kotlin', syntax: 'text/x-kotlin', value: 'kotlin' },
  { ext: ['less'], name: 'Less', syntax: 'css', value: 'less' },
  { name: 'Makefile', syntax: 'cmake', value: 'makefile' },
  { ext: ['markdown', 'md', 'mkd'], name: 'Markdown', syntax: 'markdown', value: 'markdown' },
  { name: 'MATLAB', syntax: 'octave', value: 'matlab' },
  { ext: ['conf'], name: 'Nginx', syntax: 'nginx', value: 'nginx' },
  { ext: ['m'], name: 'Objective-C', syntax: 'text/x-objectivec', value: 'objectivec' },
  { ext: ['p', 'pas'], name: 'Pascal', syntax: 'pascal', value: 'pascal' },
  { ext: ['pl', 'pm'], name: 'Perl', syntax: 'perl', value: 'perl' },
  {
    ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
    name: 'PHP',
    syntax: 'text/x-php',
    value: 'php',
  },
  { ext: ['ps1', 'psd1', 'psm1'], name: 'PowerShell', syntax: 'powershell', value: 'powershell' },
  { ext: ['proto'], name: 'Protobuf', syntax: 'protobuf', value: 'protobuf' },
  { ext: ['build', 'bzl', 'py', 'pyw'], name: 'Python', syntax: 'python', value: 'python' },
  { ext: ['r', 'R'], name: 'R', syntax: 'r', value: 'r' },
  { ext: ['rb'], name: 'Ruby', syntax: 'ruby', value: 'ruby' },
  { ext: ['rs'], name: 'Rust', syntax: 'rust', value: 'rust' },
  { ext: ['scala'], name: 'Scala', syntax: 'text/x-scala', value: 'scala' },
  { ext: ['sh', 'ksh'], name: 'Shell', syntax: 'shell', value: 'shell' },
  { ext: ['sql'], name: 'SQL', syntax: 'text/x-sql', value: 'sql' },
  { name: 'PL/SQL', syntax: 'text/x-plsql', value: 'plsql' },
  { ext: ['swift'], name: 'Swift', syntax: 'swift', value: 'swift' },
  { ext: ['ts'], name: 'TypeScript', syntax: 'text/typescript', value: 'typescript' },
  { ext: ['vb'], name: 'VB.net', syntax: 'vb', value: 'vbnet' },
  { ext: ['vtl'], name: 'Velocity', syntax: 'velocity', value: 'velocity' },
  { ext: ['xml', 'xsl', 'xsd', 'svg'], name: 'XML', syntax: 'xml', value: 'xml' },
  { ext: ['yaml', 'yml'], name: 'YAML', syntax: 'yaml', value: 'yaml' },
  { name: 'sTeX', syntax: 'text/x-stex', value: 'stex' },
  { ext: ['text', 'ltx', 'tex'], name: 'LaTeX', syntax: 'text/x-latex', value: 'latex' },
  {
    ext: ['sv', 'svh'],
    name: 'SystemVerilog',
    syntax: 'text/x-systemverilog',
    value: 'systemverilog',
  },
  { ext: ['sass', 'scss'], name: 'Sass', syntax: 'text/x-sass', value: 'sass' },
  { ext: ['tcl'], name: 'Tcl', syntax: 'text/x-tcl', value: 'tcl' },
  { ext: ['v'], name: 'Verilog', syntax: 'text/x-verilog', value: 'verilog' },
  { name: 'Vue', syntax: 'text/x-vue', value: 'vue' },
  { ext: ['lua'], name: 'Lua', syntax: 'text/x-lua', value: 'lua' },
  { ext: ['hs'], name: 'Haskell', syntax: 'haskell', value: 'haskell' },
  {
    ext: ['properties', 'ini', 'in'],
    name: 'Properties',
    syntax: 'properties',
    value: 'properties',
  },
  { ext: ['toml'], name: 'TOML', syntax: 'toml', value: 'toml' },
  { ext: ['cyp', 'cypher'], name: 'Cypher', syntax: 'cypher', value: 'cypher' },
  { ext: ['tsx'], name: 'TSX', syntax: 'jsx', value: 'tsx' },
  { ext: ['fs'], name: 'F#', syntax: 'mllike', value: 'f#' },
  { ext: ['ml', 'mli', 'mll', 'mly'], name: 'OCaml', syntax: 'mllike', value: 'ocaml' },
  { ext: ['clj', 'cljc', 'cljx'], name: 'Clojure', syntax: 'clojure', value: 'clojure' },
  { name: 'ABAP', syntax: 'abap', value: 'abap' },
  { ext: ['jl'], name: 'Julia', syntax: 'julia', value: 'julia' },
  { ext: ['cmake'], name: 'CMake', syntax: 'cmake', value: 'cmake' },
  { ext: ['scm', 'ss'], name: 'Scheme', syntax: 'scheme', value: 'scheme' },
  { ext: ['cl', 'lisp', 'el'], name: 'Lisp', syntax: 'commonlisp', value: 'commonlisp' },
  { ext: ['f90', 'f95', 'f03'], name: 'Fortran', syntax: 'fortran', value: 'fortran' },
  { ext: ['sol'], name: 'Solidity', syntax: 'solidity', value: 'solidity' },
];
de.sort(function (t, e) {
  var o = t.name.toLowerCase(),
    i = e.name.toLowerCase();
  return o === i ? 0 : o < i ? -1 : 1;
});
de.unshift({ name: 'Plain Text', syntax: 'simplemode', value: 'plain' });
function he() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
  t = t.toLocaleLowerCase() || 'plain';
  var e = de.find(function (o) {
    var i;
    return o.value === t || ((i = o.ext) === null || i === void 0 ? void 0 : i.includes(t));
  });
  return e?.value || 'plain';
}
var ve;
function te(t) {
  '@babel/helpers - typeof';
  return (
    (te =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    te(t)
  );
}
function Ct(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function St(t, e) {
  for (var o = 0; o < e.length; o++) {
    var i = e[o];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, We(i.key), i));
  }
}
function Lt(t, e, o) {
  return (e && St(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function kt(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && be(t, e));
}
function be(t, e) {
  return (
    (be = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, s) {
          return ((i.__proto__ = s), i);
        }),
    be(t, e)
  );
}
function Et(t) {
  var e = Ot();
  return function () {
    var i = ce(t),
      s;
    if (e) {
      var l = ce(this).constructor;
      s = Reflect.construct(i, arguments, l);
    } else s = i.apply(this, arguments);
    return Tt(this, s);
  };
}
function Tt(t, e) {
  if (e && (te(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return jt(t);
}
function jt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ot() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function ce(t) {
  return (
    (ce = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        }),
    ce(t)
  );
}
function _t(t, e, o) {
  return (
    (e = We(e)),
    e in t
      ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = o),
    t
  );
}
function We(t) {
  var e = Nt(t, 'string');
  return te(e) == 'symbol' ? e : String(e);
}
function Nt(t, e) {
  if (te(t) != 'object' || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var i = o.call(t, e);
    if (te(i) != 'object') return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var Mt =
    ((ve = (function (t) {
      kt(o, t);
      var e = Et(o);
      function o(i, s) {
        var l;
        return (
          Ct(this, o),
          (l = e.call(this)),
          (l.kernel = i),
          i.registerNodes([ie]),
          i.registerThemes({ hr: s?.theme || '' }),
          l.registerDecorator(i, 'codemirror', function (d, p) {
            return s != null && s.decorator ? s.decorator(d, p) : null;
          }),
          l
        );
      }
      return (
        Lt(o, [
          {
            key: 'onInit',
            value: function (s) {
              (this.register(wt(s)), this.registerMarkdown(), this.registerLiteXml());
            },
          },
          {
            key: 'registerLiteXml',
            value: function () {
              var s = this.kernel.requireService(Ye);
              s &&
                (s.registerXMLWriter(ie.getType(), function (l, d) {
                  var p = l,
                    m = d.createXmlNode('code', { lang: p.lang || 'plain' }, p.code);
                  return m;
                }),
                s.registerXMLReader('code', function (l, d) {
                  var p = d
                      .map(function (h) {
                        return h.text || '';
                      })
                      .join(''),
                    m = l.getAttribute('lang') || 'plain';
                  return je.createTypeNode('code', {
                    code: p || l.textContent || '',
                    language: he(m),
                    version: 1,
                  });
                }));
            },
          },
          {
            key: 'registerMarkdown',
            value: function () {
              var s = this.kernel.requireService(Je);
              (s?.registerMarkdownShortCut({
                regExp: /^(```|···)(.+)?$/,
                replace: function (d, p, m) {
                  var h = De(he(m[2]), '');
                  d.replace(h);
                  var v = Ge();
                  (v.add(h.getKey()), ee(v));
                },
                trigger: 'enter',
                type: 'element',
              }),
                s?.registerMarkdownWriter(ie.getType(), function (l, d) {
                  d instanceof ie &&
                    (l.appendLine('```' + d.lang),
                    l.appendLine(`
`),
                    l.appendLine(d.code),
                    l.appendLine('\n```\n'));
                }),
                s?.registerMarkdownReader('code', function (l) {
                  var d = l.lang ? he(l.lang) : 'plain';
                  return je.createTypeNode('code', { code: l.value, language: d, version: 1 });
                }));
            },
          },
        ]),
        o
      );
    })(Ze)),
    _t(ve, 'pluginName', 'CodemirrorPlugin'),
    ve),
  Pt = {
    '&': {
      '& .cm-cursor': { 'border-left-color': g.colorPrimary },
      '& .cm-cursor.cm-cursor-primary': {
        'border-inline-start': '2px solid '.concat(g.colorPrimary, ' !important'),
      },
      '& .cm-gutters': {
        'background-color': g.colorBgContainer,
        'border': 'none',
        'color': g.colorTextQuaternary,
        'cursor': 'default',
      },
      '& .cm-line': {
        '& .cm-atom': { color: g.purple10 },
        '& .cm-attribute': { color: g.purple10 },
        '& .cm-builtin': { color: g.volcano10, fontStyle: 'italic' },
        '& .cm-comment': { color: g.colorTextQuaternary, fontStyle: 'italic' },
        '& .cm-foldPlaceholder': {
          'background': `url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect fill='%23E8E8E8' width='16' height='16' rx='2'/%3E%3Cpath d='M2.75 7.984a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.375 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.375 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Z' fill='%232A3238'/%3E%3C/g%3E%3C/svg%3E") no-repeat`,
          'border': 'none',
          'color': 'transparent',
          'display': 'inline-block',
          'height': '16px',
          'padding': 0,
          'vertical-align': 'middle',
          'width': '16px',
        },
        '& .cm-function': { color: g.geekblue10 },
        '& .cm-header': { color: g.colorInfo },
        '& .cm-keyword': { color: g.colorInfo },
        '& .cm-meta': { color: g.colorText },
        '& .cm-modifier': { color: g.colorInfo },
        '& .cm-number': { color: g.volcano10 },
        '& .cm-operator': { color: g.colorInfo },
        '& .cm-property': { color: g.volcano10 },
        '& .cm-punctuation': { color: g.colorInfo },
        '& .cm-qualifier': { color: g.colorWarning },
        '& .cm-string': { color: g.colorSuccess },
        '& .cm-string-2': { color: g.colorSuccess },
        '& .cm-tag': { color: g.volcano10 },
        '& .cm-tag.cm-bracket': { color: g.colorInfo },
        '& .cm-type': { color: g.colorWarning },
        '& .cm-variable': { color: g.colorText },
        '& .cm-variable-2': { color: g.geekblue10 },
        '& .cm-variable-3': { color: g.colorWarning },
        '& .cm-variable.cm-callee': { color: g.geekblue10 },
        '& .cm-variable.cm-def': { color: g.colorText },
        'color': g.colorText,
        'padding-inline': '12px',
      },
    },
    '& .cm-selectionBackground': { background: 'transparent' },
    '& .cm-selectionMatch': { background: ''.concat(g.colorFillSecondary, ' !important') },
    '&.cm-editor': {
      'background': 'transparent',
      'cursor': 'text',
      'padding-block': '12px',
      'width': '100%',
    },
    '&.cm-editor span': {
      'font-family': g.fontFamilyCode,
      'font-size': 'calc(var(--lobe-markdown-font-size) * 0.8)',
    },
    '&.cm-editor.cm-focused .cm-selectionBackground': { background: g.colorPrimaryBg },
    '&.cm-editor.cm-focused .cm-selectionLineGutter': { color: g.colorText },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
      background: g.yellow,
    },
  };
function se(t) {
  '@babel/helpers - typeof';
  return (
    (se =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    se(t)
  );
}
function ae() {
  ae = function () {
    return e;
  };
  var t,
    e = {},
    o = Object.prototype,
    i = o.hasOwnProperty,
    s =
      Object.defineProperty ||
      function (a, r, n) {
        a[r] = n.value;
      },
    l = typeof Symbol == 'function' ? Symbol : {},
    d = l.iterator || '@@iterator',
    p = l.asyncIterator || '@@asyncIterator',
    m = l.toStringTag || '@@toStringTag';
  function h(a, r, n) {
    return (
      Object.defineProperty(a, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
      a[r]
    );
  }
  try {
    h({}, '');
  } catch {
    h = function (n, u, f) {
      return (n[u] = f);
    };
  }
  function v(a, r, n, u) {
    var f = r && r.prototype instanceof U ? r : U,
      c = Object.create(f.prototype),
      y = new q(u || []);
    return (s(c, '_invoke', { value: re(a, n, y) }), c);
  }
  function E(a, r, n) {
    try {
      return { type: 'normal', arg: a.call(r, n) };
    } catch (u) {
      return { type: 'throw', arg: u };
    }
  }
  e.wrap = v;
  var I = 'suspendedStart',
    Q = 'suspendedYield',
    $ = 'executing',
    j = 'completed',
    L = {};
  function U() {}
  function R() {}
  function _() {}
  var G = {};
  h(G, d, function () {
    return this;
  });
  var W = Object.getPrototypeOf,
    D = W && W(W(V([])));
  D && D !== o && i.call(D, d) && (G = D);
  var A = (_.prototype = U.prototype = Object.create(G));
  function X(a) {
    ['next', 'throw', 'return'].forEach(function (r) {
      h(a, r, function (n) {
        return this._invoke(r, n);
      });
    });
  }
  function z(a, r) {
    function n(f, c, y, x) {
      var b = E(a[f], a, c);
      if (b.type !== 'throw') {
        var N = b.arg,
          T = N.value;
        return T && se(T) == 'object' && i.call(T, '__await')
          ? r.resolve(T.__await).then(
              function (M) {
                n('next', M, y, x);
              },
              function (M) {
                n('throw', M, y, x);
              },
            )
          : r.resolve(T).then(
              function (M) {
                ((N.value = M), y(N));
              },
              function (M) {
                return n('throw', M, y, x);
              },
            );
      }
      x(b.arg);
    }
    var u;
    s(this, '_invoke', {
      value: function (c, y) {
        function x() {
          return new r(function (b, N) {
            n(c, y, b, N);
          });
        }
        return (u = u ? u.then(x, x) : x());
      },
    });
  }
  function re(a, r, n) {
    var u = I;
    return function (f, c) {
      if (u === $) throw new Error('Generator is already running');
      if (u === j) {
        if (f === 'throw') throw c;
        return { value: t, done: !0 };
      }
      for (n.method = f, n.arg = c; ; ) {
        var y = n.delegate;
        if (y) {
          var x = Y(y, n);
          if (x) {
            if (x === L) continue;
            return x;
          }
        }
        if (n.method === 'next') n.sent = n._sent = n.arg;
        else if (n.method === 'throw') {
          if (u === I) throw ((u = j), n.arg);
          n.dispatchException(n.arg);
        } else n.method === 'return' && n.abrupt('return', n.arg);
        u = $;
        var b = E(a, r, n);
        if (b.type === 'normal') {
          if (((u = n.done ? j : Q), b.arg === L)) continue;
          return { value: b.arg, done: n.done };
        }
        b.type === 'throw' && ((u = j), (n.method = 'throw'), (n.arg = b.arg));
      }
    };
  }
  function Y(a, r) {
    var n = r.method,
      u = a.iterator[n];
    if (u === t)
      return (
        (r.delegate = null),
        (n === 'throw' &&
          a.iterator.return &&
          ((r.method = 'return'), (r.arg = t), Y(a, r), r.method === 'throw')) ||
          (n !== 'return' &&
            ((r.method = 'throw'),
            (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        L
      );
    var f = E(u, a.iterator, r.arg);
    if (f.type === 'throw') return ((r.method = 'throw'), (r.arg = f.arg), (r.delegate = null), L);
    var c = f.arg;
    return c
      ? c.done
        ? ((r[a.resultName] = c.value),
          (r.next = a.nextLoc),
          r.method !== 'return' && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          L)
        : c
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        L);
  }
  function J(a) {
    var r = { tryLoc: a[0] };
    (1 in a && (r.catchLoc = a[1]),
      2 in a && ((r.finallyLoc = a[2]), (r.afterLoc = a[3])),
      this.tryEntries.push(r));
  }
  function B(a) {
    var r = a.completion || {};
    ((r.type = 'normal'), delete r.arg, (a.completion = r));
  }
  function q(a) {
    ((this.tryEntries = [{ tryLoc: 'root' }]), a.forEach(J, this), this.reset(!0));
  }
  function V(a) {
    if (a || a === '') {
      var r = a[d];
      if (r) return r.call(a);
      if (typeof a.next == 'function') return a;
      if (!isNaN(a.length)) {
        var n = -1,
          u = function f() {
            for (; ++n < a.length; ) if (i.call(a, n)) return ((f.value = a[n]), (f.done = !1), f);
            return ((f.value = t), (f.done = !0), f);
          };
        return (u.next = u);
      }
    }
    throw new TypeError(se(a) + ' is not iterable');
  }
  return (
    (R.prototype = _),
    s(A, 'constructor', { value: _, configurable: !0 }),
    s(_, 'constructor', { value: R, configurable: !0 }),
    (R.displayName = h(_, m, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (a) {
      var r = typeof a == 'function' && a.constructor;
      return !!r && (r === R || (r.displayName || r.name) === 'GeneratorFunction');
    }),
    (e.mark = function (a) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(a, _)
          : ((a.__proto__ = _), h(a, m, 'GeneratorFunction')),
        (a.prototype = Object.create(A)),
        a
      );
    }),
    (e.awrap = function (a) {
      return { __await: a };
    }),
    X(z.prototype),
    h(z.prototype, p, function () {
      return this;
    }),
    (e.AsyncIterator = z),
    (e.async = function (a, r, n, u, f) {
      f === void 0 && (f = Promise);
      var c = new z(v(a, r, n, u), f);
      return e.isGeneratorFunction(r)
        ? c
        : c.next().then(function (y) {
            return y.done ? y.value : c.next();
          });
    }),
    X(A),
    h(A, m, 'Generator'),
    h(A, d, function () {
      return this;
    }),
    h(A, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (a) {
      var r = Object(a),
        n = [];
      for (var u in r) n.push(u);
      return (
        n.reverse(),
        function f() {
          for (; n.length; ) {
            var c = n.pop();
            if (c in r) return ((f.value = c), (f.done = !1), f);
          }
          return ((f.done = !0), f);
        }
      );
    }),
    (e.values = V),
    (q.prototype = {
      constructor: q,
      reset: function (r) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(B),
          !r)
        )
          for (var n in this)
            n.charAt(0) === 't' && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
      },
      stop: function () {
        this.done = !0;
        var r = this.tryEntries[0].completion;
        if (r.type === 'throw') throw r.arg;
        return this.rval;
      },
      dispatchException: function (r) {
        if (this.done) throw r;
        var n = this;
        function u(N, T) {
          return (
            (y.type = 'throw'),
            (y.arg = r),
            (n.next = N),
            T && ((n.method = 'next'), (n.arg = t)),
            !!T
          );
        }
        for (var f = this.tryEntries.length - 1; f >= 0; --f) {
          var c = this.tryEntries[f],
            y = c.completion;
          if (c.tryLoc === 'root') return u('end');
          if (c.tryLoc <= this.prev) {
            var x = i.call(c, 'catchLoc'),
              b = i.call(c, 'finallyLoc');
            if (x && b) {
              if (this.prev < c.catchLoc) return u(c.catchLoc, !0);
              if (this.prev < c.finallyLoc) return u(c.finallyLoc);
            } else if (x) {
              if (this.prev < c.catchLoc) return u(c.catchLoc, !0);
            } else {
              if (!b) throw new Error('try statement without catch or finally');
              if (this.prev < c.finallyLoc) return u(c.finallyLoc);
            }
          }
        }
      },
      abrupt: function (r, n) {
        for (var u = this.tryEntries.length - 1; u >= 0; --u) {
          var f = this.tryEntries[u];
          if (f.tryLoc <= this.prev && i.call(f, 'finallyLoc') && this.prev < f.finallyLoc) {
            var c = f;
            break;
          }
        }
        c &&
          (r === 'break' || r === 'continue') &&
          c.tryLoc <= n &&
          n <= c.finallyLoc &&
          (c = null);
        var y = c ? c.completion : {};
        return (
          (y.type = r),
          (y.arg = n),
          c ? ((this.method = 'next'), (this.next = c.finallyLoc), L) : this.complete(y)
        );
      },
      complete: function (r, n) {
        if (r.type === 'throw') throw r.arg;
        return (
          r.type === 'break' || r.type === 'continue'
            ? (this.next = r.arg)
            : r.type === 'return'
              ? ((this.rval = this.arg = r.arg), (this.method = 'return'), (this.next = 'end'))
              : r.type === 'normal' && n && (this.next = n),
          L
        );
      },
      finish: function (r) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var u = this.tryEntries[n];
          if (u.finallyLoc === r) return (this.complete(u.completion, u.afterLoc), B(u), L);
        }
      },
      catch: function (r) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var u = this.tryEntries[n];
          if (u.tryLoc === r) {
            var f = u.completion;
            if (f.type === 'throw') {
              var c = f.arg;
              B(u);
            }
            return c;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (r, n, u) {
        return (
          (this.delegate = { iterator: V(r), resultName: n, nextLoc: u }),
          this.method === 'next' && (this.arg = t),
          L
        );
      },
    }),
    e
  );
}
function Ne(t, e, o, i, s, l, d) {
  try {
    var p = t[l](d),
      m = p.value;
  } catch (h) {
    o(h);
    return;
  }
  p.done ? e(m) : Promise.resolve(m).then(i, s);
}
function Me(t) {
  return function () {
    var e = this,
      o = arguments;
    return new Promise(function (i, s) {
      var l = t.apply(e, o);
      function d(m) {
        Ne(l, i, s, d, p, 'next', m);
      }
      function p(m) {
        Ne(l, i, s, d, p, 'throw', m);
      }
      d(void 0);
    });
  };
}
var F = ot('plugin', 'codemirror-loader'),
  At = 'https://registry.npmmirror.com/@lobehub/codemirror/1.0.0/files/es/index.js',
  Rt = 1e4,
  It = 50,
  ne = null;
function zt(t) {
  return new Promise(function (e, o) {
    var i = document.querySelector('script[src="'.concat(t, '"]'));
    if (i) {
      (F.debug('Script already loaded:', t), e());
      return;
    }
    F.debug('Loading script:', t);
    var s = document.createElement('script');
    ((s.src = t),
      (s.type = 'module'),
      (s.async = !0),
      s.addEventListener('load', function () {
        (F.debug('Script loaded successfully:', t), e());
      }),
      s.addEventListener('error', function (l) {
        (F.error('Failed to load script:', t, l),
          o(new Error('Failed to load script: '.concat(t))));
      }),
      document.head.append(s));
  });
}
function $t() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rt;
  return new Promise(function (e, o) {
    var i = Date.now(),
      s = function l() {
        if (window.CodeMirror) {
          (F.debug('CodeMirror is ready'), e());
          return;
        }
        if (Date.now() - i > t) {
          (F.error('Timeout waiting for CodeMirror'),
            o(new Error('Timeout: CodeMirror failed to load from CDN')));
          return;
        }
        setTimeout(l, It);
      };
    s();
  });
}
function Dt() {
  return we.apply(this, arguments);
}
function we() {
  return (
    (we = Me(
      ae().mark(function t() {
        var e,
          o,
          i = arguments;
        return ae().wrap(function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                if (
                  ((o = i.length > 0 && i[0] !== void 0 ? i[0] : At),
                  !((e = window.CodeMirror) !== null && e !== void 0 && e.default))
                ) {
                  l.next = 4;
                  break;
                }
                return (
                  F.debug('CodeMirror already available'),
                  l.abrupt('return', window.CodeMirror.default)
                );
              case 4:
                if (!ne) {
                  l.next = 7;
                  break;
                }
                return (
                  F.debug('CodeMirror loading in progress, reusing promise'),
                  l.abrupt('return', ne)
                );
              case 7:
                return (
                  (ne = Me(
                    ae().mark(function d() {
                      var p;
                      return ae().wrap(
                        function (h) {
                          for (;;)
                            switch ((h.prev = h.next)) {
                              case 0:
                                return (
                                  (h.prev = 0),
                                  F.debug('Starting CodeMirror load from:', o),
                                  (h.next = 4),
                                  zt(o)
                                );
                              case 4:
                                return ((h.next = 6), $t());
                              case 6:
                                if ((p = window.CodeMirror) !== null && p !== void 0 && p.default) {
                                  h.next = 8;
                                  break;
                                }
                                throw new Error('CodeMirror loaded but not properly initialized');
                              case 8:
                                return (
                                  F.debug('CodeMirror loaded successfully'),
                                  h.abrupt('return', window.CodeMirror.default)
                                );
                              case 12:
                                throw (
                                  (h.prev = 12),
                                  (h.t0 = h.catch(0)),
                                  (ne = null),
                                  F.error('Failed to load CodeMirror:', h.t0),
                                  h.t0
                                );
                              case 17:
                              case 'end':
                                return h.stop();
                            }
                        },
                        d,
                        null,
                        [[0, 12]],
                      );
                    }),
                  )()),
                  l.abrupt('return', ne)
                );
              case 9:
              case 'end':
                return l.stop();
            }
        }, t);
      }),
    )),
    we.apply(this, arguments)
  );
}
function Ft(t, e) {
  return Wt(t) || Ut(t, e) || Bt(t, e) || Gt();
}
function Gt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bt(t, e) {
  if (t) {
    if (typeof t == 'string') return Pe(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ((o === 'Object' && t.constructor && (o = t.constructor.name), o === 'Map' || o === 'Set'))
      return Array.from(t);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Pe(t, e);
  }
}
function Pe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function Ut(t, e) {
  var o = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (o != null) {
    var i,
      s,
      l,
      d,
      p = [],
      m = !0,
      h = !1;
    try {
      if (((l = (o = o.call(t)).next), e !== 0))
        for (; !(m = (i = l.call(o)).done) && (p.push(i.value), p.length !== e); m = !0);
    } catch (v) {
      ((h = !0), (s = v));
    } finally {
      try {
        if (!m && o.return != null && ((d = o.return()), Object(d) !== d)) return;
      } finally {
        if (h) throw s;
      }
    }
    return p;
  }
}
function Wt(t) {
  if (Array.isArray(t)) return t;
}
var qe = function (e) {
  var o = e.onCopy,
    i = k.useState(!1),
    s = Ft(i, 2),
    l = s[0],
    d = s[1];
  return S.jsx(ke, {
    active: l,
    className: 'cm-hidden-actions',
    icon: l ? ft : dt,
    onClick: function () {
      (d(!0),
        o(),
        setTimeout(function () {
          return d(!1);
        }, 1e3));
    },
    size: 'small',
    title: 'Copy',
  });
};
qe.displayName = 'CopyButton';
var Ae;
function qt(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var Vt = Be(function (t) {
    var e = t.css;
    return {
      container: e(
        Ae ||
          (Ae = qt([
            `
    min-width: 160px;
  `,
          ])),
      ),
    };
  }),
  Ve = function (e) {
    var o = e.selectedLang,
      i = e.onLanguageChange,
      s = Se(),
      l = k.useMemo(function () {
        return de.map(function (d) {
          var p, m;
          return {
            aliases: d.ext || [],
            label: S.jsxs(H, {
              align: 'center',
              gap: 4,
              horizontal: !0,
              children: [
                S.jsx(ct, {
                  fallbackUnknownType: !1,
                  filename:
                    (p = d.ext) !== null && p !== void 0 && p[0]
                      ? '*.'.concat(d.ext[0])
                      : '*.'.concat(d.value),
                  size: 18,
                  type: 'file',
                  variant: 'raw',
                }),
                S.jsx(ue, { ellipsis: !0, fontSize: 13, children: d.name }),
              ],
            }),
            title:
              (m = d.ext) !== null && m !== void 0 && m.length
                ? d.ext
                    .map(function (h) {
                      return '*.'.concat(h);
                    })
                    .join(',')
                : '*.'.concat(d.value),
            value: d.value,
          };
        });
      }, []);
    return S.jsx(H, {
      align: 'center',
      className: 'cm-language-select',
      gap: 4,
      horizontal: !0,
      onClick: function (p) {
        return p.stopPropagation();
      },
      children: S.jsx(vt, {
        className: ge(Vt.container),
        filterOption: function (p, m) {
          var h,
            v,
            E = p.toLowerCase();
          return !!(
            (m != null &&
              (h = m.value) !== null &&
              h !== void 0 &&
              h.toLowerCase().startsWith(E)) ||
            String(m?.label).toLowerCase().includes(E) ||
            (m != null &&
              (v = m.aliases) !== null &&
              v !== void 0 &&
              v.some(function (I) {
                return I.toLowerCase().startsWith(E);
              }))
          );
        },
        onChange: i,
        options: l,
        placeholder: s('codemirror.selectLanguage'),
        showSearch: !0,
        size: 'small',
        value: o,
        variant: 'borderless',
      }),
    });
  };
Ve.displayName = 'LanguageSelect';
var Ke = function (e) {
  var o = e.tabSize,
    i = e.onTabSizeChange,
    s = e.useTabs,
    l = e.onUseTabsChange,
    d = e.showLineNumbers,
    p = e.onShowLineNumbersChange,
    m = Se(),
    h = k.useCallback(
      function () {
        var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2,
          E = v === null ? 2 : v;
        i(E);
      },
      [i],
    );
  return S.jsx(gt, {
    arrow: !1,
    content: S.jsxs(H, {
      gap: 8,
      style: { minWidth: 240 },
      children: [
        S.jsxs(H, {
          align: 'center',
          gap: 8,
          horizontal: !0,
          justify: 'space-between',
          children: [
            S.jsx(ue, { children: m('codemirror.tabSize') }),
            S.jsx(yt, { max: 8, min: 1, onChange: h, size: 'small', value: o }),
          ],
        }),
        S.jsxs(H, {
          align: 'center',
          gap: 8,
          horizontal: !0,
          justify: 'space-between',
          children: [
            S.jsx(ue, { children: m('codemirror.useTabs') }),
            S.jsx(_e, { checked: s, onChange: l, size: 'small' }),
          ],
        }),
        S.jsxs(H, {
          align: 'center',
          gap: 8,
          horizontal: !0,
          justify: 'space-between',
          children: [
            S.jsx(ue, { children: m('codemirror.showLineNumbers') }),
            S.jsx(_e, { checked: d, onChange: p, size: 'small' }),
          ],
        }),
      ],
    }),
    placement: 'bottomRight',
    trigger: 'click',
    children: S.jsx(ke, { className: 'cm-hidden-actions', icon: pt, size: 'small' }),
  });
};
Ke.displayName = 'MoreOptions';
var Xe = function (e) {
  var o = e.selectedLang,
    i = e.onLanguageChange,
    s = e.onCopy,
    l = e.tabSize,
    d = e.onTabSizeChange,
    p = e.useTabs,
    m = e.onUseTabsChange,
    h = e.showLineNumbers,
    v = e.onShowLineNumbersChange,
    E = e.onClick,
    I = e.expand,
    Q = e.toggleExpand;
  return S.jsxs(H, {
    align: 'center',
    className: 'cm-header-toolbar',
    horizontal: !0,
    justify: 'space-between',
    onClick: E,
    padding: 4,
    children: [
      S.jsx(Ve, { onLanguageChange: i, selectedLang: o }),
      S.jsxs(H, {
        gap: 4,
        horizontal: !0,
        onClick: function (j) {
          return j.stopPropagation();
        },
        children: [
          S.jsx(Ke, {
            onShowLineNumbersChange: v,
            onTabSizeChange: d,
            onUseTabsChange: m,
            showLineNumbers: h,
            tabSize: l,
            useTabs: p,
          }),
          S.jsx(qe, { onCopy: s }),
          S.jsx(ke, { icon: I ? mt : ht, onClick: Q, size: 'small' }),
        ],
      }),
    ],
  });
};
Xe.displayName = 'Toolbar';
var Re;
function Kt(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var Xt = Be(function (t) {
  var e = t.css,
    o = t.cssVar;
  return e(
    Re ||
      (Re = Kt([
        `
    cursor: pointer;

    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
    border-radius: var(--lobe-markdown-border-radius);

    background: `,
        `;

    .cm-hidden-actions {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    .cm-language-select {
      opacity: 0.5;
      filter: grayscale(100%);
      transition:
        opacity,
        grayscale 0.2s ease-in-out;
    }

    &.selected {
      user-select: none;
    }

    &.selected::after {
      pointer-events: none;
      content: '';

      position: absolute;
      z-index: 10;
      inset: 0;

      width: 100%;
      height: 100%;

      opacity: 0.2;
      background: `,
        `;

      transition: all 0.3s;
    }

    .cm-container {
      position: relative;
      width: 100%;
      border-block-start: 1px solid `,
        `;
    }

    .cm-container-collapsed {
      overflow: hidden;
      height: 0;
      border-block-start: none;
    }

    .cm-textarea {
      height: 44px;
      opacity: 0;
    }

    &:hover {
      .cm-hidden-actions {
        opacity: 1;
      }

      .cm-language-select {
        opacity: 1;
        filter: grayscale(0);
      }
    }
  `,
      ])),
    o.colorFillQuaternary,
    o.yellow,
    o.colorFillQuaternary,
  );
});
function fe(t) {
  '@babel/helpers - typeof';
  return (
    (fe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    fe(t)
  );
}
function Ce() {
  Ce = function () {
    return e;
  };
  var t,
    e = {},
    o = Object.prototype,
    i = o.hasOwnProperty,
    s =
      Object.defineProperty ||
      function (a, r, n) {
        a[r] = n.value;
      },
    l = typeof Symbol == 'function' ? Symbol : {},
    d = l.iterator || '@@iterator',
    p = l.asyncIterator || '@@asyncIterator',
    m = l.toStringTag || '@@toStringTag';
  function h(a, r, n) {
    return (
      Object.defineProperty(a, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
      a[r]
    );
  }
  try {
    h({}, '');
  } catch {
    h = function (n, u, f) {
      return (n[u] = f);
    };
  }
  function v(a, r, n, u) {
    var f = r && r.prototype instanceof U ? r : U,
      c = Object.create(f.prototype),
      y = new q(u || []);
    return (s(c, '_invoke', { value: re(a, n, y) }), c);
  }
  function E(a, r, n) {
    try {
      return { type: 'normal', arg: a.call(r, n) };
    } catch (u) {
      return { type: 'throw', arg: u };
    }
  }
  e.wrap = v;
  var I = 'suspendedStart',
    Q = 'suspendedYield',
    $ = 'executing',
    j = 'completed',
    L = {};
  function U() {}
  function R() {}
  function _() {}
  var G = {};
  h(G, d, function () {
    return this;
  });
  var W = Object.getPrototypeOf,
    D = W && W(W(V([])));
  D && D !== o && i.call(D, d) && (G = D);
  var A = (_.prototype = U.prototype = Object.create(G));
  function X(a) {
    ['next', 'throw', 'return'].forEach(function (r) {
      h(a, r, function (n) {
        return this._invoke(r, n);
      });
    });
  }
  function z(a, r) {
    function n(f, c, y, x) {
      var b = E(a[f], a, c);
      if (b.type !== 'throw') {
        var N = b.arg,
          T = N.value;
        return T && fe(T) == 'object' && i.call(T, '__await')
          ? r.resolve(T.__await).then(
              function (M) {
                n('next', M, y, x);
              },
              function (M) {
                n('throw', M, y, x);
              },
            )
          : r.resolve(T).then(
              function (M) {
                ((N.value = M), y(N));
              },
              function (M) {
                return n('throw', M, y, x);
              },
            );
      }
      x(b.arg);
    }
    var u;
    s(this, '_invoke', {
      value: function (c, y) {
        function x() {
          return new r(function (b, N) {
            n(c, y, b, N);
          });
        }
        return (u = u ? u.then(x, x) : x());
      },
    });
  }
  function re(a, r, n) {
    var u = I;
    return function (f, c) {
      if (u === $) throw new Error('Generator is already running');
      if (u === j) {
        if (f === 'throw') throw c;
        return { value: t, done: !0 };
      }
      for (n.method = f, n.arg = c; ; ) {
        var y = n.delegate;
        if (y) {
          var x = Y(y, n);
          if (x) {
            if (x === L) continue;
            return x;
          }
        }
        if (n.method === 'next') n.sent = n._sent = n.arg;
        else if (n.method === 'throw') {
          if (u === I) throw ((u = j), n.arg);
          n.dispatchException(n.arg);
        } else n.method === 'return' && n.abrupt('return', n.arg);
        u = $;
        var b = E(a, r, n);
        if (b.type === 'normal') {
          if (((u = n.done ? j : Q), b.arg === L)) continue;
          return { value: b.arg, done: n.done };
        }
        b.type === 'throw' && ((u = j), (n.method = 'throw'), (n.arg = b.arg));
      }
    };
  }
  function Y(a, r) {
    var n = r.method,
      u = a.iterator[n];
    if (u === t)
      return (
        (r.delegate = null),
        (n === 'throw' &&
          a.iterator.return &&
          ((r.method = 'return'), (r.arg = t), Y(a, r), r.method === 'throw')) ||
          (n !== 'return' &&
            ((r.method = 'throw'),
            (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        L
      );
    var f = E(u, a.iterator, r.arg);
    if (f.type === 'throw') return ((r.method = 'throw'), (r.arg = f.arg), (r.delegate = null), L);
    var c = f.arg;
    return c
      ? c.done
        ? ((r[a.resultName] = c.value),
          (r.next = a.nextLoc),
          r.method !== 'return' && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          L)
        : c
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        L);
  }
  function J(a) {
    var r = { tryLoc: a[0] };
    (1 in a && (r.catchLoc = a[1]),
      2 in a && ((r.finallyLoc = a[2]), (r.afterLoc = a[3])),
      this.tryEntries.push(r));
  }
  function B(a) {
    var r = a.completion || {};
    ((r.type = 'normal'), delete r.arg, (a.completion = r));
  }
  function q(a) {
    ((this.tryEntries = [{ tryLoc: 'root' }]), a.forEach(J, this), this.reset(!0));
  }
  function V(a) {
    if (a || a === '') {
      var r = a[d];
      if (r) return r.call(a);
      if (typeof a.next == 'function') return a;
      if (!isNaN(a.length)) {
        var n = -1,
          u = function f() {
            for (; ++n < a.length; ) if (i.call(a, n)) return ((f.value = a[n]), (f.done = !1), f);
            return ((f.value = t), (f.done = !0), f);
          };
        return (u.next = u);
      }
    }
    throw new TypeError(fe(a) + ' is not iterable');
  }
  return (
    (R.prototype = _),
    s(A, 'constructor', { value: _, configurable: !0 }),
    s(_, 'constructor', { value: R, configurable: !0 }),
    (R.displayName = h(_, m, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (a) {
      var r = typeof a == 'function' && a.constructor;
      return !!r && (r === R || (r.displayName || r.name) === 'GeneratorFunction');
    }),
    (e.mark = function (a) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(a, _)
          : ((a.__proto__ = _), h(a, m, 'GeneratorFunction')),
        (a.prototype = Object.create(A)),
        a
      );
    }),
    (e.awrap = function (a) {
      return { __await: a };
    }),
    X(z.prototype),
    h(z.prototype, p, function () {
      return this;
    }),
    (e.AsyncIterator = z),
    (e.async = function (a, r, n, u, f) {
      f === void 0 && (f = Promise);
      var c = new z(v(a, r, n, u), f);
      return e.isGeneratorFunction(r)
        ? c
        : c.next().then(function (y) {
            return y.done ? y.value : c.next();
          });
    }),
    X(A),
    h(A, m, 'Generator'),
    h(A, d, function () {
      return this;
    }),
    h(A, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (a) {
      var r = Object(a),
        n = [];
      for (var u in r) n.push(u);
      return (
        n.reverse(),
        function f() {
          for (; n.length; ) {
            var c = n.pop();
            if (c in r) return ((f.value = c), (f.done = !1), f);
          }
          return ((f.done = !0), f);
        }
      );
    }),
    (e.values = V),
    (q.prototype = {
      constructor: q,
      reset: function (r) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(B),
          !r)
        )
          for (var n in this)
            n.charAt(0) === 't' && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
      },
      stop: function () {
        this.done = !0;
        var r = this.tryEntries[0].completion;
        if (r.type === 'throw') throw r.arg;
        return this.rval;
      },
      dispatchException: function (r) {
        if (this.done) throw r;
        var n = this;
        function u(N, T) {
          return (
            (y.type = 'throw'),
            (y.arg = r),
            (n.next = N),
            T && ((n.method = 'next'), (n.arg = t)),
            !!T
          );
        }
        for (var f = this.tryEntries.length - 1; f >= 0; --f) {
          var c = this.tryEntries[f],
            y = c.completion;
          if (c.tryLoc === 'root') return u('end');
          if (c.tryLoc <= this.prev) {
            var x = i.call(c, 'catchLoc'),
              b = i.call(c, 'finallyLoc');
            if (x && b) {
              if (this.prev < c.catchLoc) return u(c.catchLoc, !0);
              if (this.prev < c.finallyLoc) return u(c.finallyLoc);
            } else if (x) {
              if (this.prev < c.catchLoc) return u(c.catchLoc, !0);
            } else {
              if (!b) throw new Error('try statement without catch or finally');
              if (this.prev < c.finallyLoc) return u(c.finallyLoc);
            }
          }
        }
      },
      abrupt: function (r, n) {
        for (var u = this.tryEntries.length - 1; u >= 0; --u) {
          var f = this.tryEntries[u];
          if (f.tryLoc <= this.prev && i.call(f, 'finallyLoc') && this.prev < f.finallyLoc) {
            var c = f;
            break;
          }
        }
        c &&
          (r === 'break' || r === 'continue') &&
          c.tryLoc <= n &&
          n <= c.finallyLoc &&
          (c = null);
        var y = c ? c.completion : {};
        return (
          (y.type = r),
          (y.arg = n),
          c ? ((this.method = 'next'), (this.next = c.finallyLoc), L) : this.complete(y)
        );
      },
      complete: function (r, n) {
        if (r.type === 'throw') throw r.arg;
        return (
          r.type === 'break' || r.type === 'continue'
            ? (this.next = r.arg)
            : r.type === 'return'
              ? ((this.rval = this.arg = r.arg), (this.method = 'return'), (this.next = 'end'))
              : r.type === 'normal' && n && (this.next = n),
          L
        );
      },
      finish: function (r) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var u = this.tryEntries[n];
          if (u.finallyLoc === r) return (this.complete(u.completion, u.afterLoc), B(u), L);
        }
      },
      catch: function (r) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var u = this.tryEntries[n];
          if (u.tryLoc === r) {
            var f = u.completion;
            if (f.type === 'throw') {
              var c = f.arg;
              B(u);
            }
            return c;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (r, n, u) {
        return (
          (this.delegate = { iterator: V(r), resultName: n, nextLoc: u }),
          this.method === 'next' && (this.arg = t),
          L
        );
      },
    }),
    e
  );
}
function Ie(t, e, o, i, s, l, d) {
  try {
    var p = t[l](d),
      m = p.value;
  } catch (h) {
    o(h);
    return;
  }
  p.done ? e(m) : Promise.resolve(m).then(i, s);
}
function Ht(t) {
  return function () {
    var e = this,
      o = arguments;
    return new Promise(function (i, s) {
      var l = t.apply(e, o);
      function d(m) {
        Ie(l, i, s, d, p, 'next', m);
      }
      function p(m) {
        Ie(l, i, s, d, p, 'throw', m);
      }
      d(void 0);
    });
  };
}
function Z(t, e) {
  return Zt(t) || Jt(t, e) || Yt(t, e) || Qt();
}
function Qt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(t, e) {
  if (t) {
    if (typeof t == 'string') return ze(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ((o === 'Object' && t.constructor && (o = t.constructor.name), o === 'Map' || o === 'Set'))
      return Array.from(t);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return ze(t, e);
  }
}
function ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function Jt(t, e) {
  var o = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (o != null) {
    var i,
      s,
      l,
      d,
      p = [],
      m = !0,
      h = !1;
    try {
      if (((l = (o = o.call(t)).next), e === 0)) {
        if (Object(o) !== o) return;
        m = !1;
      } else for (; !(m = (i = l.call(o)).done) && (p.push(i.value), p.length !== e); m = !0);
    } catch (v) {
      ((h = !0), (s = v));
    } finally {
      try {
        if (!m && o.return != null && ((d = o.return()), Object(d) !== d)) return;
      } finally {
        if (h) throw s;
      }
    }
    return p;
  }
}
function Zt(t) {
  if (Array.isArray(t)) return t;
}
var He = function (e) {
  var o,
    i,
    s,
    l = e.node,
    d = e.className,
    p = e.editor,
    m = k.useRef(null),
    h = k.useRef(''),
    v = k.useRef(null),
    E = k.useRef(!1),
    I = Se(),
    Q = et(l.getKey()),
    $ = Z(Q, 4),
    j = $[0],
    L = $[1],
    U = $[2],
    R = $[3],
    _ = k.useState(l.lang || 'javascript'),
    G = Z(_, 2),
    W = G[0],
    D = G[1],
    A = k.useState((o = l.options.tabSize) !== null && o !== void 0 ? o : 2),
    X = Z(A, 2),
    z = X[0],
    re = X[1],
    Y = k.useState((i = l.options.indentWithTabs) !== null && i !== void 0 ? i : !1),
    J = Z(Y, 2),
    B = J[0],
    q = J[1],
    V = k.useState((s = l.options.lineNumbers) !== null && s !== void 0 ? s : !1),
    a = Z(V, 2),
    r = a[0],
    n = a[1],
    u = k.useState(!0),
    f = Z(u, 2),
    c = f[0],
    y = f[1],
    x = k.useCallback(
      Ht(
        Ce().mark(function C() {
          var P;
          return Ce().wrap(
            function (w) {
              for (;;)
                switch ((w.prev = w.next)) {
                  case 0:
                    if (!v.current) {
                      w.next = 10;
                      break;
                    }
                    return (
                      (P = v.current.getValue()),
                      (w.prev = 2),
                      (w.next = 5),
                      navigator.clipboard.writeText(P)
                    );
                  case 5:
                    w.next = 10;
                    break;
                  case 7:
                    ((w.prev = 7), (w.t0 = w.catch(2)), st.error(I('codemirror.copyFailed')));
                  case 10:
                  case 'end':
                    return w.stop();
                }
            },
            C,
            null,
            [[2, 7]],
          );
        }),
      ),
      [I],
    ),
    b = k.useCallback(
      function (C) {
        (D(C),
          v.current && v.current.setOption('mode', C),
          p.update(function () {
            l.setLang(C);
          }));
      },
      [p, l],
    ),
    N = k.useCallback(
      function () {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2,
          P = C === null ? 2 : C;
        (re(P),
          v.current && v.current.setOption('tabSize', P),
          p.update(function () {
            l.setTabSize(P);
          }));
      },
      [p, l],
    ),
    T = k.useCallback(
      function (C) {
        (q(C),
          v.current && v.current.setOption('indentWithTabs', C),
          p.update(function () {
            l.setIndentWithTabs(C);
          }));
      },
      [p, l],
    ),
    M = k.useCallback(
      function (C) {
        (n(C),
          v.current && v.current.setOption('lineNumbers', C),
          p.update(function () {
            l.setLineNumbers(C);
          }));
      },
      [p, l],
    );
  return (
    k.useEffect(
      function () {
        var C,
          P = p.getEditorState().read(function () {
            return ye();
          });
        if (!((C = v.current) !== null && C !== void 0 && C.view.hasFocus && P === null)) {
          if (!j || !R) {
            v.current && v.current.blur();
            return;
          }
          if (j && v.current && R) {
            var O;
            if ((O = v.current) !== null && O !== void 0 && O.view.hasFocus) return;
            (v.current.focus(), h.current === 'end' && v.current.setSelectionToEnd());
          }
        }
      },
      [j, R, p],
    ),
    k.useEffect(
      function () {
        if (!v.current) {
          if (m.current) {
            var C = m.current;
            Dt().then(function (P) {
              if (!v.current) {
                var O = P.fromTextArea(C, {
                  indentWithTabs: B,
                  lineNumbers: r,
                  mode: l.lang,
                  tabSize: z,
                  theme: 'default',
                  value: l.code,
                });
                (console.info(O),
                  O.view.dispatch({
                    effects: O.optionHelper.theme.reconfigure(
                      O.view.constructor.theme(Pt, { dark: !1 }),
                    ),
                  }),
                  (E.current = !l.code.trim()),
                  O.on('keydown', function (w, K) {
                    if (
                      (K.stopPropagation(),
                      (K.key === 'Enter' || K.keyCode === 13) && (K.metaKey || K.ctrlKey))
                    ) {
                      var pe;
                      (K.preventDefault(),
                        (pe = v.current) === null || pe === void 0 || pe.blur(),
                        p.dispatchCommand(xe, { key: l.getKey() }),
                        queueMicrotask(function () {
                          p.focus();
                        }));
                      return;
                    }
                    if (K.key === 'Backspace' || K.keyCode === 8) {
                      if (!E.current) return;
                      (K.preventDefault(),
                        p.update(function () {
                          var Ee = l.getPreviousSibling();
                          if ((l.remove(), Ee)) {
                            var Te = Ee.selectEnd();
                            Te && ee(Te);
                          }
                        }),
                        queueMicrotask(function () {
                          p.focus();
                        }));
                    }
                  }),
                  O.on('leftOut', function () {
                    var w;
                    ((w = v.current) === null || w === void 0 || w.blur(),
                      p.dispatchCommand(Ue, { key: l.getKey() }),
                      queueMicrotask(function () {
                        p.focus();
                      }));
                  }),
                  O.on('rightOut', function () {
                    var w;
                    ((w = v.current) === null || w === void 0 || w.blur(),
                      p.dispatchCommand(xe, { key: l.getKey() }),
                      queueMicrotask(function () {
                        p.focus();
                      }));
                  }),
                  O.on('change', function () {
                    var w = O.getValue();
                    E.current = !w.trim();
                  }),
                  O.on(
                    'change',
                    xt(function () {
                      var w = O.getValue();
                      p.update(function () {
                        l.setCode(w);
                      });
                    }),
                  ),
                  O.on('focus', function () {
                    p.getEditorState().read(function () {
                      var w = ye();
                      return w
                        ? w?.getNodes().length > 1 || !(w != null && w.getNodes().includes(l))
                        : !1;
                    }) && L(!0);
                  }),
                  (v.current = O),
                  j && v.current.focus());
              }
            });
          }
          return function () {
            v.current && (v.current.destroy(), (v.current = null));
          };
        }
      },
      [m],
    ),
    k.useEffect(
      function () {
        return Fe(
          p.registerCommand(
            it,
            function (C) {
              return (
                C.key === 'ArrowLeft' || C.key === 'ArrowUp'
                  ? (h.current = 'end')
                  : (h.current = ''),
                !1
              );
            },
            lt,
          ),
        );
      },
      [U, p, j, l, L],
    ),
    S.jsxs(ut, {
      className: ge(Xt, j && !R && 'selected', d),
      onMouseDown: function (P) {
        return P.stopPropagation();
      },
      onMouseUp: function (P) {
        return P.stopPropagation();
      },
      onSelect: function (P) {
        return P.stopPropagation();
      },
      variant: 'filled',
      children: [
        S.jsx(Xe, {
          expand: c,
          onClick: function () {
            return y(!c);
          },
          onCopy: x,
          onLanguageChange: b,
          onShowLineNumbersChange: M,
          onTabSizeChange: N,
          onUseTabsChange: T,
          selectedLang: W,
          showLineNumbers: r,
          tabSize: z,
          toggleExpand: function () {
            return y(!c);
          },
          useTabs: B,
        }),
        S.jsx('div', {
          className: ge('cm-container', !c && 'cm-container-collapsed'),
          children: S.jsx('textarea', { className: 'cm-textarea', ref: m }),
        }),
      ],
    })
  );
};
He.displayName = 'ReactCodemirrorNode';
function er(t, e) {
  return ar(t) || nr(t, e) || rr(t, e) || tr();
}
function tr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rr(t, e) {
  if (t) {
    if (typeof t == 'string') return $e(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ((o === 'Object' && t.constructor && (o = t.constructor.name), o === 'Map' || o === 'Set'))
      return Array.from(t);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return $e(t, e);
  }
}
function $e(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function nr(t, e) {
  var o = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (o != null) {
    var i,
      s,
      l,
      d,
      p = [],
      m = !0,
      h = !1;
    try {
      if (((l = (o = o.call(t)).next), e !== 0))
        for (; !(m = (i = l.call(o)).done) && (p.push(i.value), p.length !== e); m = !0);
    } catch (v) {
      ((h = !0), (s = v));
    } finally {
      try {
        if (!m && o.return != null && ((d = o.return()), Object(d) !== d)) return;
      } finally {
        if (h) throw s;
      }
    }
    return p;
  }
}
function ar(t) {
  if (Array.isArray(t)) return t;
}
var or = function (e) {
  var o = e.className,
    i = tt(),
    s = er(i, 1),
    l = s[0];
  return (
    k.useLayoutEffect(
      function () {
        l.registerPlugin(Mt, {
          decorator: function (p, m) {
            return S.jsx(He, { className: o, editor: m, node: p });
          },
          theme: o,
        });
      },
      [l, o],
    ),
    null
  );
};
or.displayName = 'ReactCodemirrorPlugin';
export { bt as I, or as R, xe as S, Ue as a };
