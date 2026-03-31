import { ix as wt } from './index-C8UyLGsD.js';
import { g as Hn } from '../vendor/vendor-emotion-DdM-9MtU.js';
const Ne = function (e) {
  if (e == null) return Un;
  if (typeof e == 'function') return je(e);
  if (typeof e == 'object') return Array.isArray(e) ? Vn(e) : vn(e);
  if (typeof e == 'string') return $n(e);
  throw new Error('Expected function, string, or object as test');
};
function Vn(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; ) n[t] = Ne(e[t]);
  return je(r);
  function r(...u) {
    let l = -1;
    for (; ++l < n.length; ) if (n[l].apply(this, u)) return !0;
    return !1;
  }
}
function vn(e) {
  const n = e;
  return je(t);
  function t(r) {
    const u = r;
    let l;
    for (l in e) if (u[l] !== n[l]) return !1;
    return !0;
  }
}
function $n(e) {
  return je(n);
  function n(t) {
    return t && t.type === e;
  }
}
function je(e) {
  return n;
  function n(t, r, u) {
    return !!(Wn(t) && e.call(this, t, typeof r == 'number' ? r : void 0, u || void 0));
  }
}
function Un() {
  return !0;
}
function Wn(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
const Wt = [],
  Qn = !0,
  nt = !1,
  Yn = 'skip';
function Qt(e, n, t, r) {
  let u;
  typeof n == 'function' && typeof t != 'function' ? ((r = t), (t = n)) : (u = n);
  const l = Ne(u),
    i = r ? -1 : 1;
  o(e, void 0, [])();
  function o(s, a, f) {
    const c = s && typeof s == 'object' ? s : {};
    if (typeof c.type == 'string') {
      const h =
        typeof c.tagName == 'string' ? c.tagName : typeof c.name == 'string' ? c.name : void 0;
      Object.defineProperty(p, 'name', {
        value: 'node (' + (s.type + (h ? '<' + h + '>' : '')) + ')',
      });
    }
    return p;
    function p() {
      let h = Wt,
        k,
        w,
        I;
      if ((!n || l(s, a, f[f.length - 1] || void 0)) && ((h = Gn(t(s, f))), h[0] === nt)) return h;
      if ('children' in s && s.children) {
        const x = s;
        if (x.children && h[0] !== Yn)
          for (
            w = (r ? x.children.length : -1) + i, I = f.concat(x);
            w > -1 && w < x.children.length;
          ) {
            const E = x.children[w];
            if (((k = o(E, w, I)()), k[0] === nt)) return k;
            w = typeof k[1] == 'number' ? k[1] : w + i;
          }
      }
      return h;
    }
  }
}
function Gn(e) {
  return Array.isArray(e) ? e : typeof e == 'number' ? [Qn, e] : e == null ? Wt : [e];
}
function Zn(e, n, t, r) {
  let u, l, i;
  (typeof n == 'function' && typeof t != 'function'
    ? ((l = void 0), (i = n), (u = t))
    : ((l = n), (i = t), (u = r)),
    Qt(e, l, o, u));
  function o(s, a) {
    const f = a[a.length - 1],
      c = f ? f.children.indexOf(s) : void 0;
    return i(s, c, f);
  }
}
function Lo() {}
function Po() {}
function Ae(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
      ? St(e.position)
      : 'start' in e || 'end' in e
        ? St(e)
        : 'line' in e || 'column' in e
          ? rt(e)
          : '';
}
function rt(e) {
  return Ct(e && e.line) + ':' + Ct(e && e.column);
}
function St(e) {
  return rt(e && e.start) + '-' + rt(e && e.end);
}
function Ct(e) {
  return e && typeof e == 'number' ? e : 1;
}
class G extends Error {
  constructor(n, t, r) {
    (super(), typeof t == 'string' && ((r = t), (t = void 0)));
    let u = '',
      l = {},
      i = !1;
    if (
      (t &&
        ('line' in t && 'column' in t
          ? (l = { place: t })
          : 'start' in t && 'end' in t
            ? (l = { place: t })
            : 'type' in t
              ? (l = { ancestors: [t], place: t.position })
              : (l = { ...t })),
      typeof n == 'string' ? (u = n) : !l.cause && n && ((i = !0), (u = n.message), (l.cause = n)),
      !l.ruleId && !l.source && typeof r == 'string')
    ) {
      const s = r.indexOf(':');
      s === -1 ? (l.ruleId = r) : ((l.source = r.slice(0, s)), (l.ruleId = r.slice(s + 1)));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const s = l.ancestors[l.ancestors.length - 1];
      s && (l.place = s.position);
    }
    const o = l.place && 'start' in l.place ? l.place.start : l.place;
    ((this.ancestors = l.ancestors || void 0),
      (this.cause = l.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = u),
      (this.line = o ? o.line : void 0),
      (this.name = Ae(l.place) || '1:1'),
      (this.place = l.place || void 0),
      (this.reason = this.message),
      (this.ruleId = l.ruleId || void 0),
      (this.source = l.source || void 0),
      (this.stack = i && l.cause && typeof l.cause.stack == 'string' ? l.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
G.prototype.file = '';
G.prototype.name = '';
G.prototype.reason = '';
G.prototype.message = '';
G.prototype.stack = '';
G.prototype.column = void 0;
G.prototype.line = void 0;
G.prototype.ancestors = void 0;
G.prototype.cause = void 0;
G.prototype.fatal = void 0;
G.prototype.place = void 0;
G.prototype.ruleId = void 0;
G.prototype.source = void 0;
const ie = { basename: Jn, dirname: Kn, extname: Xn, join: er, sep: '/' };
function Jn(e, n) {
  if (n !== void 0 && typeof n != 'string') throw new TypeError('"ext" argument must be a string');
  Le(e);
  let t = 0,
    r = -1,
    u = e.length,
    l;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; u--; )
      if (e.codePointAt(u) === 47) {
        if (l) {
          t = u + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = u + 1));
    return r < 0 ? '' : e.slice(t, r);
  }
  if (n === e) return '';
  let i = -1,
    o = n.length - 1;
  for (; u--; )
    if (e.codePointAt(u) === 47) {
      if (l) {
        t = u + 1;
        break;
      }
    } else
      (i < 0 && ((l = !0), (i = u + 1)),
        o > -1 &&
          (e.codePointAt(u) === n.codePointAt(o--) ? o < 0 && (r = u) : ((o = -1), (r = i))));
  return (t === r ? (r = i) : r < 0 && (r = e.length), e.slice(t, r));
}
function Kn(e) {
  if ((Le(e), e.length === 0)) return '.';
  let n = -1,
    t = e.length,
    r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : n === 1 && e.codePointAt(0) === 47
      ? '//'
      : e.slice(0, n);
}
function Xn(e) {
  Le(e);
  let n = e.length,
    t = -1,
    r = 0,
    u = -1,
    l = 0,
    i;
  for (; n--; ) {
    const o = e.codePointAt(n);
    if (o === 47) {
      if (i) {
        r = n + 1;
        break;
      }
      continue;
    }
    (t < 0 && ((i = !0), (t = n + 1)),
      o === 46 ? (u < 0 ? (u = n) : l !== 1 && (l = 1)) : u > -1 && (l = -1));
  }
  return u < 0 || t < 0 || l === 0 || (l === 1 && u === t - 1 && u === r + 1) ? '' : e.slice(u, t);
}
function er(...e) {
  let n = -1,
    t;
  for (; ++n < e.length; ) (Le(e[n]), e[n] && (t = t === void 0 ? e[n] : t + '/' + e[n]));
  return t === void 0 ? '.' : tr(t);
}
function tr(e) {
  Le(e);
  const n = e.codePointAt(0) === 47;
  let t = nr(e, !n);
  return (
    t.length === 0 && !n && (t = '.'),
    t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += '/'),
    n ? '/' + t : t
  );
}
function nr(e, n) {
  let t = '',
    r = 0,
    u = -1,
    l = 0,
    i = -1,
    o,
    s;
  for (; ++i <= e.length; ) {
    if (i < e.length) o = e.codePointAt(i);
    else {
      if (o === 47) break;
      o = 47;
    }
    if (o === 47) {
      if (!(u === i - 1 || l === 1))
        if (u !== i - 1 && l === 2) {
          if (
            t.length < 2 ||
            r !== 2 ||
            t.codePointAt(t.length - 1) !== 46 ||
            t.codePointAt(t.length - 2) !== 46
          ) {
            if (t.length > 2) {
              if (((s = t.lastIndexOf('/')), s !== t.length - 1)) {
                (s < 0
                  ? ((t = ''), (r = 0))
                  : ((t = t.slice(0, s)), (r = t.length - 1 - t.lastIndexOf('/'))),
                  (u = i),
                  (l = 0));
                continue;
              }
            } else if (t.length > 0) {
              ((t = ''), (r = 0), (u = i), (l = 0));
              continue;
            }
          }
          n && ((t = t.length > 0 ? t + '/..' : '..'), (r = 2));
        } else
          (t.length > 0 ? (t += '/' + e.slice(u + 1, i)) : (t = e.slice(u + 1, i)),
            (r = i - u - 1));
      ((u = i), (l = 0));
    } else o === 46 && l > -1 ? l++ : (l = -1);
  }
  return t;
}
function Le(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
const rr = { cwd: ir };
function ir() {
  return '/';
}
function it(e) {
  return !!(
    e !== null &&
    typeof e == 'object' &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function ur(e) {
  if (typeof e == 'string') e = new URL(e);
  else if (!it(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + '`',
    );
    throw ((n.code = 'ERR_INVALID_ARG_TYPE'), n);
  }
  if (e.protocol !== 'file:') {
    const n = new TypeError('The URL must be of scheme file');
    throw ((n.code = 'ERR_INVALID_URL_SCHEME'), n);
  }
  return lr(e);
}
function lr(e) {
  if (e.hostname !== '') {
    const r = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((r.code = 'ERR_INVALID_FILE_URL_HOST'), r);
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const u = new TypeError('File URL path must not include encoded / characters');
        throw ((u.code = 'ERR_INVALID_FILE_URL_PATH'), u);
      }
    }
  return decodeURIComponent(n);
}
const Ve = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class or {
  constructor(n) {
    let t;
    (n
      ? it(n)
        ? (t = { path: n })
        : typeof n == 'string' || ar(n)
          ? (t = { value: n })
          : (t = n)
      : (t = {}),
      (this.cwd = 'cwd' in t ? '' : rr.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let r = -1;
    for (; ++r < Ve.length; ) {
      const l = Ve[r];
      l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === 'history' ? [...t[l]] : t[l]);
    }
    let u;
    for (u in t) Ve.includes(u) || (this[u] = t[u]);
  }
  get basename() {
    return typeof this.path == 'string' ? ie.basename(this.path) : void 0;
  }
  set basename(n) {
    ($e(n, 'basename'), ve(n, 'basename'), (this.path = ie.join(this.dirname || '', n)));
  }
  get dirname() {
    return typeof this.path == 'string' ? ie.dirname(this.path) : void 0;
  }
  set dirname(n) {
    (It(this.basename, 'dirname'), (this.path = ie.join(n || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? ie.extname(this.path) : void 0;
  }
  set extname(n) {
    if ((ve(n, 'extname'), It(this.dirname, 'extname'), n)) {
      if (n.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (n.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = ie.join(this.dirname, this.stem + (n || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(n) {
    (it(n) && (n = ur(n)), $e(n, 'path'), this.path !== n && this.history.push(n));
  }
  get stem() {
    return typeof this.path == 'string' ? ie.basename(this.path, this.extname) : void 0;
  }
  set stem(n) {
    ($e(n, 'stem'),
      ve(n, 'stem'),
      (this.path = ie.join(this.dirname || '', n + (this.extname || ''))));
  }
  fail(n, t, r) {
    const u = this.message(n, t, r);
    throw ((u.fatal = !0), u);
  }
  info(n, t, r) {
    const u = this.message(n, t, r);
    return ((u.fatal = void 0), u);
  }
  message(n, t, r) {
    const u = new G(n, t, r);
    return (
      this.path && ((u.name = this.path + ':' + u.name), (u.file = this.path)),
      (u.fatal = !1),
      this.messages.push(u),
      u
    );
  }
  toString(n) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(n || void 0).decode(this.value);
  }
}
function ve(e, n) {
  if (e && e.includes(ie.sep))
    throw new Error('`' + n + '` cannot be a path: did not expect `' + ie.sep + '`');
}
function $e(e, n) {
  if (!e) throw new Error('`' + n + '` cannot be empty');
}
function It(e, n) {
  if (!e) throw new Error('Setting `' + n + '` requires `path` to be set too');
}
function ar(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
function sr(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
function cr(e, n, t) {
  const u = Ne((t || {}).ignore || []),
    l = fr(n);
  let i = -1;
  for (; ++i < l.length; ) Qt(e, 'text', o);
  function o(a, f) {
    let c = -1,
      p;
    for (; ++c < f.length; ) {
      const h = f[c],
        k = p ? p.children : void 0;
      if (u(h, k ? k.indexOf(h) : void 0, p)) return;
      p = h;
    }
    if (p) return s(a, f);
  }
  function s(a, f) {
    const c = f[f.length - 1],
      p = l[i][0],
      h = l[i][1];
    let k = 0;
    const I = c.children.indexOf(a);
    let x = !1,
      E = [];
    p.lastIndex = 0;
    let S = p.exec(a.value);
    for (; S; ) {
      const L = S.index,
        P = { index: S.index, input: S.input, stack: [...f, a] };
      let y = h(...S, P);
      if (
        (typeof y == 'string' && (y = y.length > 0 ? { type: 'text', value: y } : void 0),
        y === !1
          ? (p.lastIndex = L + 1)
          : (k !== L && E.push({ type: 'text', value: a.value.slice(k, L) }),
            Array.isArray(y) ? E.push(...y) : y && E.push(y),
            (k = L + S[0].length),
            (x = !0)),
        !p.global)
      )
        break;
      S = p.exec(a.value);
    }
    return (
      x
        ? (k < a.value.length && E.push({ type: 'text', value: a.value.slice(k) }),
          c.children.splice(I, 1, ...E))
        : (E = [a]),
      I + E.length
    );
  }
}
function fr(e) {
  const n = [];
  if (!Array.isArray(e)) throw new TypeError('Expected find and replace tuple or list of tuples');
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const u = t[r];
    n.push([hr(u[0]), pr(u[1])]);
  }
  return n;
}
function hr(e) {
  return typeof e == 'string' ? new RegExp(sr(e), 'g') : e;
}
function pr(e) {
  return typeof e == 'function'
    ? e
    : function () {
        return e;
      };
}
const W = pe(/[A-Za-z]/),
  Y = pe(/[\dA-Za-z]/),
  mr = pe(/[#-'*+\--9=?A-Z^-~]/);
function Me(e) {
  return e !== null && (e < 32 || e === 127);
}
const ut = pe(/\d/),
  gr = pe(/[\dA-Fa-f]/),
  kr = pe(/[!-/:-@[-`{-~]/);
function T(e) {
  return e !== null && e < -2;
}
function q(e) {
  return e !== null && (e < 0 || e === 32);
}
function _(e) {
  return e === -2 || e === -1 || e === 32;
}
const qe = pe(new RegExp('\\p{P}|\\p{S}', 'u')),
  de = pe(/\s/);
function pe(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function J(e, n, t, r) {
  const u = e.length;
  let l = 0,
    i;
  if ((n < 0 ? (n = -n > u ? 0 : u + n) : (n = n > u ? u : n), (t = t > 0 ? t : 0), r.length < 1e4))
    ((i = Array.from(r)), i.unshift(n, t), e.splice(...i));
  else
    for (t && e.splice(n, t); l < r.length; )
      ((i = r.slice(l, l + 1e4)), i.unshift(n, 0), e.splice(...i), (l += 1e4), (n += 1e4));
}
function K(e, n) {
  return e.length > 0 ? (J(e, e.length, 0, n), e) : n;
}
function He(e, n, t) {
  const r = [];
  let u = -1;
  for (; ++u < e.length; ) {
    const l = e[u].resolveAll;
    l && !r.includes(l) && ((n = l(n, t)), r.push(l));
  }
  return n;
}
const Ue = 'phrasing',
  We = ['autolink', 'link', 'image', 'label'];
function dr() {
  return {
    transforms: [Ir],
    enter: {
      literalAutolink: br,
      literalAutolinkEmail: Qe,
      literalAutolinkHttp: Qe,
      literalAutolinkWww: Qe,
    },
    exit: {
      literalAutolink: Cr,
      literalAutolinkEmail: Sr,
      literalAutolinkHttp: yr,
      literalAutolinkWww: wr,
    },
  };
}
function xr() {
  return {
    unsafe: [
      {
        character: '@',
        before: '[+\\-.\\w]',
        after: '[\\-.\\w]',
        inConstruct: Ue,
        notInConstruct: We,
      },
      { character: '.', before: '[Ww]', after: '[\\-.\\w]', inConstruct: Ue, notInConstruct: We },
      { character: ':', before: '[ps]', after: '\\/', inConstruct: Ue, notInConstruct: We },
    ],
  };
}
function br(e) {
  this.enter({ type: 'link', title: null, url: '', children: [] }, e);
}
function Qe(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function yr(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function wr(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  (n.type, (n.url = 'http://' + this.sliceSerialize(e)));
}
function Sr(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Cr(e) {
  this.exit(e);
}
function Ir(e) {
  cr(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Er],
      [new RegExp('(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)', 'gu'), zr],
    ],
    { ignore: ['link', 'linkReference'] },
  );
}
function Er(e, n, t, r, u) {
  let l = '';
  if (!Yt(u) || (/^w/i.test(n) && ((t = n + t), (n = ''), (l = 'http://')), !Ar(t))) return !1;
  const i = Tr(t + r);
  if (!i[0]) return !1;
  const o = {
    type: 'link',
    title: null,
    url: l + n + i[0],
    children: [{ type: 'text', value: n + i[0] }],
  };
  return i[1] ? [o, { type: 'text', value: i[1] }] : o;
}
function zr(e, n, t, r) {
  return !Yt(r, !0) || /[-\d_]$/.test(t)
    ? !1
    : {
        type: 'link',
        title: null,
        url: 'mailto:' + n + '@' + t,
        children: [{ type: 'text', value: n + '@' + t }],
      };
}
function Ar(e) {
  const n = e.split('.');
  return !(
    n.length < 2 ||
    (n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1]))) ||
    (n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])))
  );
}
function Tr(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n) return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0],
    r = t.indexOf(')');
  const u = wt(e, '(');
  let l = wt(e, ')');
  for (; r !== -1 && u > l; )
    ((e += t.slice(0, r + 1)), (t = t.slice(r + 1)), (r = t.indexOf(')')), l++);
  return [e, t];
}
function Yt(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || de(t) || qe(t)) && (!n || t !== 47);
}
function re(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
Gt.peek = Or;
function Fr() {
  this.buffer();
}
function Lr(e) {
  this.enter({ type: 'footnoteReference', identifier: '', label: '' }, e);
}
function Pr() {
  this.buffer();
}
function _r(e) {
  this.enter({ type: 'footnoteDefinition', identifier: '', label: '', children: [] }, e);
}
function Dr(e) {
  const n = this.resume(),
    t = this.stack[this.stack.length - 1];
  (t.type, (t.identifier = re(this.sliceSerialize(e)).toLowerCase()), (t.label = n));
}
function Rr(e) {
  this.exit(e);
}
function Br(e) {
  const n = this.resume(),
    t = this.stack[this.stack.length - 1];
  (t.type, (t.identifier = re(this.sliceSerialize(e)).toLowerCase()), (t.label = n));
}
function Mr(e) {
  this.exit(e);
}
function Or() {
  return '[';
}
function Gt(e, n, t, r) {
  const u = t.createTracker(r);
  let l = u.move('[^');
  const i = t.enter('footnoteReference'),
    o = t.enter('reference');
  return (
    (l += u.move(t.safe(t.associationId(e), { after: ']', before: l }))),
    o(),
    i(),
    (l += u.move(']')),
    l
  );
}
function Nr() {
  return {
    enter: {
      gfmFootnoteCallString: Fr,
      gfmFootnoteCall: Lr,
      gfmFootnoteDefinitionLabelString: Pr,
      gfmFootnoteDefinition: _r,
    },
    exit: {
      gfmFootnoteCallString: Dr,
      gfmFootnoteCall: Rr,
      gfmFootnoteDefinitionLabelString: Br,
      gfmFootnoteDefinition: Mr,
    },
  };
}
function jr(e) {
  let n = !1;
  return (
    e && e.firstLineBlank && (n = !0),
    {
      handlers: { footnoteDefinition: t, footnoteReference: Gt },
      unsafe: [{ character: '[', inConstruct: ['label', 'phrasing', 'reference'] }],
    }
  );
  function t(r, u, l, i) {
    const o = l.createTracker(i);
    let s = o.move('[^');
    const a = l.enter('footnoteDefinition'),
      f = l.enter('label');
    return (
      (s += o.move(l.safe(l.associationId(r), { before: s, after: ']' }))),
      f(),
      (s += o.move(']:')),
      r.children &&
        r.children.length > 0 &&
        (o.shift(4),
        (s += o.move(
          (n
            ? `
`
            : ' ') + l.indentLines(l.containerFlow(r, o.current()), n ? Zt : qr),
        ))),
      a(),
      s
    );
  }
}
function qr(e, n, t) {
  return n === 0 ? e : Zt(e, n, t);
}
function Zt(e, n, t) {
  return (t ? '' : '    ') + e;
}
const Hr = [
  'autolink',
  'destinationLiteral',
  'destinationRaw',
  'reference',
  'titleQuote',
  'titleApostrophe',
];
Jt.peek = Wr;
function Vr() {
  return { canContainEols: ['delete'], enter: { strikethrough: $r }, exit: { strikethrough: Ur } };
}
function vr() {
  return {
    unsafe: [{ character: '~', inConstruct: 'phrasing', notInConstruct: Hr }],
    handlers: { delete: Jt },
  };
}
function $r(e) {
  this.enter({ type: 'delete', children: [] }, e);
}
function Ur(e) {
  this.exit(e);
}
function Jt(e, n, t, r) {
  const u = t.createTracker(r),
    l = t.enter('strikethrough');
  let i = u.move('~~');
  return (
    (i += t.containerPhrasing(e, { ...u.current(), before: i, after: '~' })),
    (i += u.move('~~')),
    l(),
    i
  );
}
function Wr() {
  return '~';
}
function Qr(e) {
  return e.length;
}
function Yr(e, n) {
  const t = n || {},
    r = (t.align || []).concat(),
    u = t.stringLength || Qr,
    l = [],
    i = [],
    o = [],
    s = [];
  let a = 0,
    f = -1;
  for (; ++f < e.length; ) {
    const w = [],
      I = [];
    let x = -1;
    for (e[f].length > a && (a = e[f].length); ++x < e[f].length; ) {
      const E = Gr(e[f][x]);
      if (t.alignDelimiters !== !1) {
        const S = u(E);
        ((I[x] = S), (s[x] === void 0 || S > s[x]) && (s[x] = S));
      }
      w.push(E);
    }
    ((i[f] = w), (o[f] = I));
  }
  let c = -1;
  if (typeof r == 'object' && 'length' in r) for (; ++c < a; ) l[c] = Et(r[c]);
  else {
    const w = Et(r);
    for (; ++c < a; ) l[c] = w;
  }
  c = -1;
  const p = [],
    h = [];
  for (; ++c < a; ) {
    const w = l[c];
    let I = '',
      x = '';
    w === 99 ? ((I = ':'), (x = ':')) : w === 108 ? (I = ':') : w === 114 && (x = ':');
    let E = t.alignDelimiters === !1 ? 1 : Math.max(1, s[c] - I.length - x.length);
    const S = I + '-'.repeat(E) + x;
    (t.alignDelimiters !== !1 &&
      ((E = I.length + E + x.length), E > s[c] && (s[c] = E), (h[c] = E)),
      (p[c] = S));
  }
  (i.splice(1, 0, p), o.splice(1, 0, h), (f = -1));
  const k = [];
  for (; ++f < i.length; ) {
    const w = i[f],
      I = o[f];
    c = -1;
    const x = [];
    for (; ++c < a; ) {
      const E = w[c] || '';
      let S = '',
        L = '';
      if (t.alignDelimiters !== !1) {
        const P = s[c] - (I[c] || 0),
          y = l[c];
        y === 114
          ? (S = ' '.repeat(P))
          : y === 99
            ? P % 2
              ? ((S = ' '.repeat(P / 2 + 0.5)), (L = ' '.repeat(P / 2 - 0.5)))
              : ((S = ' '.repeat(P / 2)), (L = S))
            : (L = ' '.repeat(P));
      }
      (t.delimiterStart !== !1 && !c && x.push('|'),
        t.padding !== !1 &&
          !(t.alignDelimiters === !1 && E === '') &&
          (t.delimiterStart !== !1 || c) &&
          x.push(' '),
        t.alignDelimiters !== !1 && x.push(S),
        x.push(E),
        t.alignDelimiters !== !1 && x.push(L),
        t.padding !== !1 && x.push(' '),
        (t.delimiterEnd !== !1 || c !== a - 1) && x.push('|'));
    }
    k.push(t.delimiterEnd === !1 ? x.join('').replace(/ +$/, '') : x.join(''));
  }
  return k.join(`
`);
}
function Gr(e) {
  return e == null ? '' : String(e);
}
function Et(e) {
  const n = typeof e == 'string' ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function Zr(e, n, t, r) {
  const u = t.enter('blockquote'),
    l = t.createTracker(r);
  (l.move('> '), l.shift(2));
  const i = t.indentLines(t.containerFlow(e, l.current()), Jr);
  return (u(), i);
}
function Jr(e, n, t) {
  return '>' + (t ? '' : ' ') + e;
}
function Kr(e, n) {
  return zt(e, n.inConstruct, !0) && !zt(e, n.notInConstruct, !1);
}
function zt(e, n, t) {
  if ((typeof n == 'string' && (n = [n]), !n || n.length === 0)) return t;
  let r = -1;
  for (; ++r < n.length; ) if (e.includes(n[r])) return !0;
  return !1;
}
function At(e, n, t, r) {
  let u = -1;
  for (; ++u < t.unsafe.length; )
    if (
      t.unsafe[u].character ===
        `
` &&
      Kr(t.stack, t.unsafe[u])
    )
      return /[ \t]/.test(r.before) ? '' : ' ';
  return `\\
`;
}
function Xr(e, n) {
  const t = String(e);
  let r = t.indexOf(n),
    u = r,
    l = 0,
    i = 0;
  if (typeof n != 'string') throw new TypeError('Expected substring');
  for (; r !== -1; )
    (r === u ? ++l > i && (i = l) : (l = 1), (u = r + n.length), (r = t.indexOf(n, u)));
  return i;
}
function ei(e, n) {
  return !!(
    n.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function ti(e) {
  const n = e.options.fence || '`';
  if (n !== '`' && n !== '~')
    throw new Error(
      'Cannot serialize code with `' + n + '` for `options.fence`, expected `` ` `` or `~`',
    );
  return n;
}
function ni(e, n, t, r) {
  const u = ti(t),
    l = e.value || '',
    i = u === '`' ? 'GraveAccent' : 'Tilde';
  if (ei(e, t)) {
    const c = t.enter('codeIndented'),
      p = t.indentLines(l, ri);
    return (c(), p);
  }
  const o = t.createTracker(r),
    s = u.repeat(Math.max(Xr(l, u) + 1, 3)),
    a = t.enter('codeFenced');
  let f = o.move(s);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${i}`);
    ((f += o.move(t.safe(e.lang, { before: f, after: ' ', encode: ['`'], ...o.current() }))), c());
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${i}`);
    ((f += o.move(' ')),
      (f += o.move(
        t.safe(e.meta, {
          before: f,
          after: `
`,
          encode: ['`'],
          ...o.current(),
        }),
      )),
      c());
  }
  return (
    (f += o.move(`
`)),
    l &&
      (f += o.move(
        l +
          `
`,
      )),
    (f += o.move(s)),
    a(),
    f
  );
}
function ri(e, n, t) {
  return (t ? '' : '    ') + e;
}
function st(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      'Cannot serialize title with `' + n + '` for `options.quote`, expected `"`, or `\'`',
    );
  return n;
}
function ii(e, n, t, r) {
  const u = st(t),
    l = u === '"' ? 'Quote' : 'Apostrophe',
    i = t.enter('definition');
  let o = t.enter('label');
  const s = t.createTracker(r);
  let a = s.move('[');
  return (
    (a += s.move(t.safe(t.associationId(e), { before: a, after: ']', ...s.current() }))),
    (a += s.move(']: ')),
    o(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((o = t.enter('destinationLiteral')),
        (a += s.move('<')),
        (a += s.move(t.safe(e.url, { before: a, after: '>', ...s.current() }))),
        (a += s.move('>')))
      : ((o = t.enter('destinationRaw')),
        (a += s.move(
          t.safe(e.url, {
            before: a,
            after: e.title
              ? ' '
              : `
`,
            ...s.current(),
          }),
        ))),
    o(),
    e.title &&
      ((o = t.enter(`title${l}`)),
      (a += s.move(' ' + u)),
      (a += s.move(t.safe(e.title, { before: a, after: u, ...s.current() }))),
      (a += s.move(u)),
      o()),
    i(),
    a
  );
}
function ui(e) {
  const n = e.options.emphasis || '*';
  if (n !== '*' && n !== '_')
    throw new Error(
      'Cannot serialize emphasis with `' + n + '` for `options.emphasis`, expected `*`, or `_`',
    );
  return n;
}
function Fe(e) {
  return '&#x' + e.toString(16).toUpperCase() + ';';
}
function Se(e) {
  if (e === null || q(e) || de(e)) return 1;
  if (qe(e)) return 2;
}
function Oe(e, n, t) {
  const r = Se(e),
    u = Se(n);
  return r === void 0
    ? u === void 0
      ? t === '_'
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : u === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : r === 1
      ? u === void 0
        ? { inside: !1, outside: !1 }
        : u === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : u === void 0
        ? { inside: !1, outside: !1 }
        : u === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
Kt.peek = li;
function Kt(e, n, t, r) {
  const u = ui(t),
    l = t.enter('emphasis'),
    i = t.createTracker(r),
    o = i.move(u);
  let s = i.move(t.containerPhrasing(e, { after: u, before: o, ...i.current() }));
  const a = s.charCodeAt(0),
    f = Oe(r.before.charCodeAt(r.before.length - 1), a, u);
  f.inside && (s = Fe(a) + s.slice(1));
  const c = s.charCodeAt(s.length - 1),
    p = Oe(r.after.charCodeAt(0), c, u);
  p.inside && (s = s.slice(0, -1) + Fe(c));
  const h = i.move(u);
  return (
    l(),
    (t.attentionEncodeSurroundingInfo = { after: p.outside, before: f.outside }),
    o + s + h
  );
}
function li(e, n, t) {
  return t.options.emphasis || '*';
}
const oi = {};
function ct(e, n) {
  const t = oi,
    r = typeof t.includeImageAlt == 'boolean' ? t.includeImageAlt : !0,
    u = typeof t.includeHtml == 'boolean' ? t.includeHtml : !0;
  return Xt(e, r, u);
}
function Xt(e, n, t) {
  if (ai(e)) {
    if ('value' in e) return e.type === 'html' && !t ? '' : e.value;
    if (n && 'alt' in e && e.alt) return e.alt;
    if ('children' in e) return Tt(e.children, n, t);
  }
  return Array.isArray(e) ? Tt(e, n, t) : '';
}
function Tt(e, n, t) {
  const r = [];
  let u = -1;
  for (; ++u < e.length; ) r[u] = Xt(e[u], n, t);
  return r.join('');
}
function ai(e) {
  return !!(e && typeof e == 'object');
}
function si(e, n) {
  let t = !1;
  return (
    Zn(e, function (r) {
      if (('value' in r && /\r?\n|\r/.test(r.value)) || r.type === 'break') return ((t = !0), nt);
    }),
    !!((!e.depth || e.depth < 3) && ct(e) && (n.options.setext || t))
  );
}
function ci(e, n, t, r) {
  const u = Math.max(Math.min(6, e.depth || 1), 1),
    l = t.createTracker(r);
  if (si(e, t)) {
    const f = t.enter('headingSetext'),
      c = t.enter('phrasing'),
      p = t.containerPhrasing(e, {
        ...l.current(),
        before: `
`,
        after: `
`,
      });
    return (
      c(),
      f(),
      p +
        `
` +
        (u === 1 ? '=' : '-').repeat(
          p.length -
            (Math.max(
              p.lastIndexOf('\r'),
              p.lastIndexOf(`
`),
            ) +
              1),
        )
    );
  }
  const i = '#'.repeat(u),
    o = t.enter('headingAtx'),
    s = t.enter('phrasing');
  l.move(i + ' ');
  let a = t.containerPhrasing(e, {
    before: '# ',
    after: `
`,
    ...l.current(),
  });
  return (
    /^[\t ]/.test(a) && (a = Fe(a.charCodeAt(0)) + a.slice(1)),
    (a = a ? i + ' ' + a : i),
    t.options.closeAtx && (a += ' ' + i),
    s(),
    o(),
    a
  );
}
en.peek = fi;
function en(e) {
  return e.value || '';
}
function fi() {
  return '<';
}
tn.peek = hi;
function tn(e, n, t, r) {
  const u = st(t),
    l = u === '"' ? 'Quote' : 'Apostrophe',
    i = t.enter('image');
  let o = t.enter('label');
  const s = t.createTracker(r);
  let a = s.move('![');
  return (
    (a += s.move(t.safe(e.alt, { before: a, after: ']', ...s.current() }))),
    (a += s.move('](')),
    o(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((o = t.enter('destinationLiteral')),
        (a += s.move('<')),
        (a += s.move(t.safe(e.url, { before: a, after: '>', ...s.current() }))),
        (a += s.move('>')))
      : ((o = t.enter('destinationRaw')),
        (a += s.move(t.safe(e.url, { before: a, after: e.title ? ' ' : ')', ...s.current() })))),
    o(),
    e.title &&
      ((o = t.enter(`title${l}`)),
      (a += s.move(' ' + u)),
      (a += s.move(t.safe(e.title, { before: a, after: u, ...s.current() }))),
      (a += s.move(u)),
      o()),
    (a += s.move(')')),
    i(),
    a
  );
}
function hi() {
  return '!';
}
nn.peek = pi;
function nn(e, n, t, r) {
  const u = e.referenceType,
    l = t.enter('imageReference');
  let i = t.enter('label');
  const o = t.createTracker(r);
  let s = o.move('![');
  const a = t.safe(e.alt, { before: s, after: ']', ...o.current() });
  ((s += o.move(a + '][')), i());
  const f = t.stack;
  ((t.stack = []), (i = t.enter('reference')));
  const c = t.safe(t.associationId(e), { before: s, after: ']', ...o.current() });
  return (
    i(),
    (t.stack = f),
    l(),
    u === 'full' || !a || a !== c
      ? (s += o.move(c + ']'))
      : u === 'shortcut'
        ? (s = s.slice(0, -1))
        : (s += o.move(']')),
    s
  );
}
function pi() {
  return '!';
}
rn.peek = mi;
function rn(e, n, t) {
  let r = e.value || '',
    u = '`',
    l = -1;
  for (; new RegExp('(^|[^`])' + u + '([^`]|$)').test(r); ) u += '`';
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = ' ' + r + ' ');
    ++l < t.unsafe.length;
  ) {
    const i = t.unsafe[l],
      o = t.compilePattern(i);
    let s;
    if (i.atBreak)
      for (; (s = o.exec(r)); ) {
        let a = s.index;
        (r.charCodeAt(a) === 10 && r.charCodeAt(a - 1) === 13 && a--,
          (r = r.slice(0, a) + ' ' + r.slice(s.index + 1)));
      }
  }
  return u + r + u;
}
function mi() {
  return '`';
}
function un(e, n) {
  const t = ct(e);
  return !!(
    !n.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === 'text' &&
    (t === e.url || 'mailto:' + t === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
ln.peek = gi;
function ln(e, n, t, r) {
  const u = st(t),
    l = u === '"' ? 'Quote' : 'Apostrophe',
    i = t.createTracker(r);
  let o, s;
  if (un(e, t)) {
    const f = t.stack;
    ((t.stack = []), (o = t.enter('autolink')));
    let c = i.move('<');
    return (
      (c += i.move(t.containerPhrasing(e, { before: c, after: '>', ...i.current() }))),
      (c += i.move('>')),
      o(),
      (t.stack = f),
      c
    );
  }
  ((o = t.enter('link')), (s = t.enter('label')));
  let a = i.move('[');
  return (
    (a += i.move(t.containerPhrasing(e, { before: a, after: '](', ...i.current() }))),
    (a += i.move('](')),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = t.enter('destinationLiteral')),
        (a += i.move('<')),
        (a += i.move(t.safe(e.url, { before: a, after: '>', ...i.current() }))),
        (a += i.move('>')))
      : ((s = t.enter('destinationRaw')),
        (a += i.move(t.safe(e.url, { before: a, after: e.title ? ' ' : ')', ...i.current() })))),
    s(),
    e.title &&
      ((s = t.enter(`title${l}`)),
      (a += i.move(' ' + u)),
      (a += i.move(t.safe(e.title, { before: a, after: u, ...i.current() }))),
      (a += i.move(u)),
      s()),
    (a += i.move(')')),
    o(),
    a
  );
}
function gi(e, n, t) {
  return un(e, t) ? '<' : '[';
}
on.peek = ki;
function on(e, n, t, r) {
  const u = e.referenceType,
    l = t.enter('linkReference');
  let i = t.enter('label');
  const o = t.createTracker(r);
  let s = o.move('[');
  const a = t.containerPhrasing(e, { before: s, after: ']', ...o.current() });
  ((s += o.move(a + '][')), i());
  const f = t.stack;
  ((t.stack = []), (i = t.enter('reference')));
  const c = t.safe(t.associationId(e), { before: s, after: ']', ...o.current() });
  return (
    i(),
    (t.stack = f),
    l(),
    u === 'full' || !a || a !== c
      ? (s += o.move(c + ']'))
      : u === 'shortcut'
        ? (s = s.slice(0, -1))
        : (s += o.move(']')),
    s
  );
}
function ki() {
  return '[';
}
function ft(e) {
  const n = e.options.bullet || '*';
  if (n !== '*' && n !== '+' && n !== '-')
    throw new Error(
      'Cannot serialize items with `' + n + '` for `options.bullet`, expected `*`, `+`, or `-`',
    );
  return n;
}
function di(e) {
  const n = ft(e),
    t = e.options.bulletOther;
  if (!t) return n === '*' ? '-' : '*';
  if (t !== '*' && t !== '+' && t !== '-')
    throw new Error(
      'Cannot serialize items with `' +
        t +
        '` for `options.bulletOther`, expected `*`, `+`, or `-`',
    );
  if (t === n)
    throw new Error(
      'Expected `bullet` (`' + n + '`) and `bulletOther` (`' + t + '`) to be different',
    );
  return t;
}
function xi(e) {
  const n = e.options.bulletOrdered || '.';
  if (n !== '.' && n !== ')')
    throw new Error(
      'Cannot serialize items with `' + n + '` for `options.bulletOrdered`, expected `.` or `)`',
    );
  return n;
}
function an(e) {
  const n = e.options.rule || '*';
  if (n !== '*' && n !== '-' && n !== '_')
    throw new Error(
      'Cannot serialize rules with `' + n + '` for `options.rule`, expected `*`, `-`, or `_`',
    );
  return n;
}
function bi(e, n, t, r) {
  const u = t.enter('list'),
    l = t.bulletCurrent;
  let i = e.ordered ? xi(t) : ft(t);
  const o = e.ordered ? (i === '.' ? ')' : '.') : di(t);
  let s = n && t.bulletLastUsed ? i === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      ((i === '*' || i === '-') &&
        f &&
        (!f.children || !f.children[0]) &&
        t.stack[t.stack.length - 1] === 'list' &&
        t.stack[t.stack.length - 2] === 'listItem' &&
        t.stack[t.stack.length - 3] === 'list' &&
        t.stack[t.stack.length - 4] === 'listItem' &&
        t.indexStack[t.indexStack.length - 1] === 0 &&
        t.indexStack[t.indexStack.length - 2] === 0 &&
        t.indexStack[t.indexStack.length - 3] === 0 &&
        (s = !0),
      an(t) === i && f)
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (
          p &&
          p.type === 'listItem' &&
          p.children &&
          p.children[0] &&
          p.children[0].type === 'thematicBreak'
        ) {
          s = !0;
          break;
        }
      }
    }
  }
  (s && (i = o), (t.bulletCurrent = i));
  const a = t.containerFlow(e, r);
  return ((t.bulletLastUsed = i), (t.bulletCurrent = l), u(), a);
}
function yi(e) {
  const n = e.options.listItemIndent || 'one';
  if (n !== 'tab' && n !== 'one' && n !== 'mixed')
    throw new Error(
      'Cannot serialize items with `' +
        n +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`',
    );
  return n;
}
function wi(e, n, t, r) {
  const u = yi(t);
  let l = t.bulletCurrent || ft(t);
  n &&
    n.type === 'list' &&
    n.ordered &&
    (l =
      (typeof n.start == 'number' && n.start > -1 ? n.start : 1) +
      (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) +
      l);
  let i = l.length + 1;
  (u === 'tab' || (u === 'mixed' && ((n && n.type === 'list' && n.spread) || e.spread))) &&
    (i = Math.ceil(i / 4) * 4);
  const o = t.createTracker(r);
  (o.move(l + ' '.repeat(i - l.length)), o.shift(i));
  const s = t.enter('listItem'),
    a = t.indentLines(t.containerFlow(e, o.current()), f);
  return (s(), a);
  function f(c, p, h) {
    return p ? (h ? '' : ' '.repeat(i)) + c : (h ? l : l + ' '.repeat(i - l.length)) + c;
  }
}
function Si(e, n, t, r) {
  const u = t.enter('paragraph'),
    l = t.enter('phrasing'),
    i = t.containerPhrasing(e, r);
  return (l(), u(), i);
}
const Ci = Ne([
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'inlineMath',
  'link',
  'linkReference',
  'mdxJsxTextElement',
  'mdxTextExpression',
  'strong',
  'text',
  'textDirective',
]);
function Ii(e, n, t, r) {
  return (
    e.children.some(function (i) {
      return Ci(i);
    })
      ? t.containerPhrasing
      : t.containerFlow
  ).call(t, e, r);
}
function Ei(e) {
  const n = e.options.strong || '*';
  if (n !== '*' && n !== '_')
    throw new Error(
      'Cannot serialize strong with `' + n + '` for `options.strong`, expected `*`, or `_`',
    );
  return n;
}
sn.peek = zi;
function sn(e, n, t, r) {
  const u = Ei(t),
    l = t.enter('strong'),
    i = t.createTracker(r),
    o = i.move(u + u);
  let s = i.move(t.containerPhrasing(e, { after: u, before: o, ...i.current() }));
  const a = s.charCodeAt(0),
    f = Oe(r.before.charCodeAt(r.before.length - 1), a, u);
  f.inside && (s = Fe(a) + s.slice(1));
  const c = s.charCodeAt(s.length - 1),
    p = Oe(r.after.charCodeAt(0), c, u);
  p.inside && (s = s.slice(0, -1) + Fe(c));
  const h = i.move(u + u);
  return (
    l(),
    (t.attentionEncodeSurroundingInfo = { after: p.outside, before: f.outside }),
    o + s + h
  );
}
function zi(e, n, t) {
  return t.options.strong || '*';
}
function Ai(e, n, t, r) {
  return t.safe(e.value, r);
}
function Ti(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      'Cannot serialize rules with repetition `' +
        n +
        '` for `options.ruleRepetition`, expected `3` or more',
    );
  return n;
}
function Fi(e, n, t) {
  const r = (an(t) + (t.options.ruleSpaces ? ' ' : '')).repeat(Ti(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const cn = {
    blockquote: Zr,
    break: At,
    code: ni,
    definition: ii,
    emphasis: Kt,
    hardBreak: At,
    heading: ci,
    html: en,
    image: tn,
    imageReference: nn,
    inlineCode: rn,
    link: ln,
    linkReference: on,
    list: bi,
    listItem: wi,
    paragraph: Si,
    root: Ii,
    strong: sn,
    text: Ai,
    thematicBreak: Fi,
  },
  Ft = document.createElement('i');
function ht(e) {
  const n = '&' + e + ';';
  Ft.innerHTML = n;
  const t = Ft.textContent;
  return (t.charCodeAt(t.length - 1) === 59 && e !== 'semi') || t === n ? !1 : t;
}
function fn(e, n) {
  const t = Number.parseInt(e, n);
  return t < 9 ||
    t === 11 ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    (t & 65535) === 65535 ||
    (t & 65535) === 65534 ||
    t > 1114111
    ? '�'
    : String.fromCodePoint(t);
}
const Li = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Pi(e) {
  return e.replace(Li, _i);
}
function _i(e, n, t) {
  if (n) return n;
  if (t.charCodeAt(0) === 35) {
    const u = t.charCodeAt(1),
      l = u === 120 || u === 88;
    return fn(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return ht(t) || e;
}
function Di() {
  return {
    enter: { table: Ri, tableData: Lt, tableHeader: Lt, tableRow: Mi },
    exit: { codeText: Oi, table: Bi, tableData: Ye, tableHeader: Ye, tableRow: Ye },
  };
}
function Ri(e) {
  const n = e._align;
  (this.enter(
    {
      type: 'table',
      align: n.map(function (t) {
        return t === 'none' ? null : t;
      }),
      children: [],
    },
    e,
  ),
    (this.data.inTable = !0));
}
function Bi(e) {
  (this.exit(e), (this.data.inTable = void 0));
}
function Mi(e) {
  this.enter({ type: 'tableRow', children: [] }, e);
}
function Ye(e) {
  this.exit(e);
}
function Lt(e) {
  this.enter({ type: 'tableCell', children: [] }, e);
}
function Oi(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, Ni));
  const t = this.stack[this.stack.length - 1];
  (t.type, (t.value = n), this.exit(e));
}
function Ni(e, n) {
  return n === '|' ? n : e;
}
function ji(e) {
  const n = e || {},
    t = n.tableCellPadding,
    r = n.tablePipeAlign,
    u = n.stringLength,
    l = t ? ' ' : '|';
  return {
    unsafe: [
      { character: '\r', inConstruct: 'tableCell' },
      {
        character: `
`,
        inConstruct: 'tableCell',
      },
      { atBreak: !0, character: '|', after: '[	 :-]' },
      { character: '|', inConstruct: 'tableCell' },
      { atBreak: !0, character: ':', after: '-' },
      { atBreak: !0, character: '-', after: '[:|-]' },
    ],
    handlers: { inlineCode: p, table: i, tableCell: s, tableRow: o },
  };
  function i(h, k, w, I) {
    return a(f(h, w, I), h.align);
  }
  function o(h, k, w, I) {
    const x = c(h, w, I),
      E = a([x]);
    return E.slice(
      0,
      E.indexOf(`
`),
    );
  }
  function s(h, k, w, I) {
    const x = w.enter('tableCell'),
      E = w.enter('phrasing'),
      S = w.containerPhrasing(h, { ...I, before: l, after: l });
    return (E(), x(), S);
  }
  function a(h, k) {
    return Yr(h, { align: k, alignDelimiters: r, padding: t, stringLength: u });
  }
  function f(h, k, w) {
    const I = h.children;
    let x = -1;
    const E = [],
      S = k.enter('table');
    for (; ++x < I.length; ) E[x] = c(I[x], k, w);
    return (S(), E);
  }
  function c(h, k, w) {
    const I = h.children;
    let x = -1;
    const E = [],
      S = k.enter('tableRow');
    for (; ++x < I.length; ) E[x] = s(I[x], h, k, w);
    return (S(), E);
  }
  function p(h, k, w) {
    let I = cn.inlineCode(h, k, w);
    return (w.stack.includes('tableCell') && (I = I.replace(/\|/g, '\\$&')), I);
  }
}
function qi() {
  return {
    exit: { taskListCheckValueChecked: Pt, taskListCheckValueUnchecked: Pt, paragraph: Vi },
  };
}
function Hi() {
  return { unsafe: [{ atBreak: !0, character: '-', after: '[:|-]' }], handlers: { listItem: vi } };
}
function Pt(e) {
  const n = this.stack[this.stack.length - 2];
  (n.type, (n.checked = e.type === 'taskListCheckValueChecked'));
}
function Vi(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === 'listItem' && typeof n.checked == 'boolean') {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === 'text') {
      const u = n.children;
      let l = -1,
        i;
      for (; ++l < u.length; ) {
        const o = u[l];
        if (o.type === 'paragraph') {
          i = o;
          break;
        }
      }
      i === t &&
        ((r.value = r.value.slice(1)),
        r.value.length === 0
          ? t.children.shift()
          : t.position &&
            r.position &&
            typeof r.position.start.offset == 'number' &&
            (r.position.start.column++,
            r.position.start.offset++,
            (t.position.start = Object.assign({}, r.position.start))));
    }
  }
  this.exit(e);
}
function vi(e, n, t, r) {
  const u = e.children[0],
    l = typeof e.checked == 'boolean' && u && u.type === 'paragraph',
    i = '[' + (e.checked ? 'x' : ' ') + '] ',
    o = t.createTracker(r);
  l && o.move(i);
  let s = cn.listItem(e, n, t, { ...r, ...o.current() });
  return (l && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, a)), s);
  function a(f) {
    return f + i;
  }
}
function $i() {
  return [dr(), Nr(), Vr(), Di(), qi()];
}
function Ui(e) {
  return { extensions: [xr(), jr(e), vr(), ji(e), Hi()] };
}
const _t = {}.hasOwnProperty;
function hn(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; ) Wi(n, e[t]);
  return n;
}
function Wi(e, n) {
  let t;
  for (t in n) {
    const u = (_t.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      l = n[t];
    let i;
    if (l)
      for (i in l) {
        _t.call(u, i) || (u[i] = []);
        const o = l[i];
        Qi(u[i], Array.isArray(o) ? o : o ? [o] : []);
      }
  }
}
function Qi(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; ) (n[t].add === 'after' ? e : r).push(n[t]);
  J(e, 0, 0, r);
}
const Yi = { tokenize: eu, partial: !0 },
  pn = { tokenize: tu, partial: !0 },
  mn = { tokenize: nu, partial: !0 },
  gn = { tokenize: ru, partial: !0 },
  Gi = { tokenize: iu, partial: !0 },
  kn = { name: 'wwwAutolink', tokenize: Ki, previous: xn },
  dn = { name: 'protocolAutolink', tokenize: Xi, previous: bn },
  ce = { name: 'emailAutolink', tokenize: Ji, previous: yn },
  ue = {};
function Zi() {
  return { text: ue };
}
let ke = 48;
for (; ke < 123; ) ((ue[ke] = ce), ke++, ke === 58 ? (ke = 65) : ke === 91 && (ke = 97));
ue[43] = ce;
ue[45] = ce;
ue[46] = ce;
ue[95] = ce;
ue[72] = [ce, dn];
ue[104] = [ce, dn];
ue[87] = [ce, kn];
ue[119] = [ce, kn];
function Ji(e, n, t) {
  const r = this;
  let u, l;
  return i;
  function i(c) {
    return !lt(c) || !yn.call(r, r.previous) || pt(r.events)
      ? t(c)
      : (e.enter('literalAutolink'), e.enter('literalAutolinkEmail'), o(c));
  }
  function o(c) {
    return lt(c) ? (e.consume(c), o) : c === 64 ? (e.consume(c), s) : t(c);
  }
  function s(c) {
    return c === 46
      ? e.check(Gi, f, a)(c)
      : c === 45 || c === 95 || Y(c)
        ? ((l = !0), e.consume(c), s)
        : f(c);
  }
  function a(c) {
    return (e.consume(c), (u = !0), s);
  }
  function f(c) {
    return l && u && W(r.previous)
      ? (e.exit('literalAutolinkEmail'), e.exit('literalAutolink'), n(c))
      : t(c);
  }
}
function Ki(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return (i !== 87 && i !== 119) || !xn.call(r, r.previous) || pt(r.events)
      ? t(i)
      : (e.enter('literalAutolink'),
        e.enter('literalAutolinkWww'),
        e.check(Yi, e.attempt(pn, e.attempt(mn, l), t), t)(i));
  }
  function l(i) {
    return (e.exit('literalAutolinkWww'), e.exit('literalAutolink'), n(i));
  }
}
function Xi(e, n, t) {
  const r = this;
  let u = '',
    l = !1;
  return i;
  function i(c) {
    return (c === 72 || c === 104) && bn.call(r, r.previous) && !pt(r.events)
      ? (e.enter('literalAutolink'),
        e.enter('literalAutolinkHttp'),
        (u += String.fromCodePoint(c)),
        e.consume(c),
        o)
      : t(c);
  }
  function o(c) {
    if (W(c) && u.length < 5) return ((u += String.fromCodePoint(c)), e.consume(c), o);
    if (c === 58) {
      const p = u.toLowerCase();
      if (p === 'http' || p === 'https') return (e.consume(c), s);
    }
    return t(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), l ? a : ((l = !0), s)) : t(c);
  }
  function a(c) {
    return c === null || Me(c) || q(c) || de(c) || qe(c)
      ? t(c)
      : e.attempt(pn, e.attempt(mn, f), t)(c);
  }
  function f(c) {
    return (e.exit('literalAutolinkHttp'), e.exit('literalAutolink'), n(c));
  }
}
function eu(e, n, t) {
  let r = 0;
  return u;
  function u(i) {
    return (i === 87 || i === 119) && r < 3
      ? (r++, e.consume(i), u)
      : i === 46 && r === 3
        ? (e.consume(i), l)
        : t(i);
  }
  function l(i) {
    return i === null ? t(i) : n(i);
  }
}
function tu(e, n, t) {
  let r, u, l;
  return i;
  function i(a) {
    return a === 46 || a === 95
      ? e.check(gn, s, o)(a)
      : a === null || q(a) || de(a) || (a !== 45 && qe(a))
        ? s(a)
        : ((l = !0), e.consume(a), i);
  }
  function o(a) {
    return (a === 95 ? (r = !0) : ((u = r), (r = void 0)), e.consume(a), i);
  }
  function s(a) {
    return u || r || !l ? t(a) : n(a);
  }
}
function nu(e, n) {
  let t = 0,
    r = 0;
  return u;
  function u(i) {
    return i === 40
      ? (t++, e.consume(i), u)
      : i === 41 && r < t
        ? l(i)
        : i === 33 ||
            i === 34 ||
            i === 38 ||
            i === 39 ||
            i === 41 ||
            i === 42 ||
            i === 44 ||
            i === 46 ||
            i === 58 ||
            i === 59 ||
            i === 60 ||
            i === 63 ||
            i === 93 ||
            i === 95 ||
            i === 126
          ? e.check(gn, n, l)(i)
          : i === null || q(i) || de(i)
            ? n(i)
            : (e.consume(i), u);
  }
  function l(i) {
    return (i === 41 && r++, e.consume(i), u);
  }
}
function ru(e, n, t) {
  return r;
  function r(o) {
    return o === 33 ||
      o === 34 ||
      o === 39 ||
      o === 41 ||
      o === 42 ||
      o === 44 ||
      o === 46 ||
      o === 58 ||
      o === 59 ||
      o === 63 ||
      o === 95 ||
      o === 126
      ? (e.consume(o), r)
      : o === 38
        ? (e.consume(o), l)
        : o === 93
          ? (e.consume(o), u)
          : o === 60 || o === null || q(o) || de(o)
            ? n(o)
            : t(o);
  }
  function u(o) {
    return o === null || o === 40 || o === 91 || q(o) || de(o) ? n(o) : r(o);
  }
  function l(o) {
    return W(o) ? i(o) : t(o);
  }
  function i(o) {
    return o === 59 ? (e.consume(o), r) : W(o) ? (e.consume(o), i) : t(o);
  }
}
function iu(e, n, t) {
  return r;
  function r(l) {
    return (e.consume(l), u);
  }
  function u(l) {
    return Y(l) ? t(l) : n(l);
  }
}
function xn(e) {
  return (
    e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || q(e)
  );
}
function bn(e) {
  return !W(e);
}
function yn(e) {
  return !(e === 47 || lt(e));
}
function lt(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Y(e);
}
function pt(e) {
  let n = e.length,
    t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === 'labelLink' || r.type === 'labelImage') && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return (e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t);
}
const ot = { name: 'attention', resolveAll: uu, tokenize: lu };
function uu(e, n) {
  let t = -1,
    r,
    u,
    l,
    i,
    o,
    s,
    a,
    f;
  for (; ++t < e.length; )
    if (e[t][0] === 'enter' && e[t][1].type === 'attentionSequence' && e[t][1]._close) {
      for (r = t; r--; )
        if (
          e[r][0] === 'exit' &&
          e[r][1].type === 'attentionSequence' &&
          e[r][1]._open &&
          n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[t][1]._open) &&
            (e[t][1].end.offset - e[t][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[t][1].end.offset -
                e[t][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[t][1].end.offset - e[t][1].start.offset > 1
              ? 2
              : 1;
          const c = { ...e[r][1].end },
            p = { ...e[t][1].start };
          (Dt(c, -s),
            Dt(p, s),
            (i = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: c,
              end: { ...e[r][1].end },
            }),
            (o = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...e[t][1].start },
              end: p,
            }),
            (l = {
              type: s > 1 ? 'strongText' : 'emphasisText',
              start: { ...e[r][1].end },
              end: { ...e[t][1].start },
            }),
            (u = { type: s > 1 ? 'strong' : 'emphasis', start: { ...i.start }, end: { ...o.end } }),
            (e[r][1].end = { ...i.start }),
            (e[t][1].start = { ...o.end }),
            (a = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (a = K(a, [
                ['enter', e[r][1], n],
                ['exit', e[r][1], n],
              ])),
            (a = K(a, [
              ['enter', u, n],
              ['enter', i, n],
              ['exit', i, n],
              ['enter', l, n],
            ])),
            (a = K(a, He(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n))),
            (a = K(a, [
              ['exit', l, n],
              ['enter', o, n],
              ['exit', o, n],
              ['exit', u, n],
            ])),
            e[t][1].end.offset - e[t][1].start.offset
              ? ((f = 2),
                (a = K(a, [
                  ['enter', e[t][1], n],
                  ['exit', e[t][1], n],
                ])))
              : (f = 0),
            J(e, r - 1, t - r + 3, a),
            (t = r + a.length - f - 2));
          break;
        }
    }
  for (t = -1; ++t < e.length; ) e[t][1].type === 'attentionSequence' && (e[t][1].type = 'data');
  return e;
}
function lu(e, n) {
  const t = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    u = Se(r);
  let l;
  return i;
  function i(s) {
    return ((l = s), e.enter('attentionSequence'), o(s));
  }
  function o(s) {
    if (s === l) return (e.consume(s), o);
    const a = e.exit('attentionSequence'),
      f = Se(s),
      c = !f || (f === 2 && u) || t.includes(s),
      p = !u || (u === 2 && f) || t.includes(r);
    return (
      (a._open = !!(l === 42 ? c : c && (u || !p))),
      (a._close = !!(l === 42 ? p : p && (f || !c))),
      n(s)
    );
  }
}
function Dt(e, n) {
  ((e.column += n), (e.offset += n), (e._bufferIndex += n));
}
const ou = { name: 'autolink', tokenize: au };
function au(e, n, t) {
  let r = 0;
  return u;
  function u(h) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(h),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      l
    );
  }
  function l(h) {
    return W(h) ? (e.consume(h), i) : h === 64 ? t(h) : a(h);
  }
  function i(h) {
    return h === 43 || h === 45 || h === 46 || Y(h) ? ((r = 1), o(h)) : a(h);
  }
  function o(h) {
    return h === 58
      ? (e.consume(h), (r = 0), s)
      : (h === 43 || h === 45 || h === 46 || Y(h)) && r++ < 32
        ? (e.consume(h), o)
        : ((r = 0), a(h));
  }
  function s(h) {
    return h === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(h),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        n)
      : h === null || h === 32 || h === 60 || Me(h)
        ? t(h)
        : (e.consume(h), s);
  }
  function a(h) {
    return h === 64 ? (e.consume(h), f) : mr(h) ? (e.consume(h), a) : t(h);
  }
  function f(h) {
    return Y(h) ? c(h) : t(h);
  }
  function c(h) {
    return h === 46
      ? (e.consume(h), (r = 0), f)
      : h === 62
        ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
          e.enter('autolinkMarker'),
          e.consume(h),
          e.exit('autolinkMarker'),
          e.exit('autolink'),
          n)
        : p(h);
  }
  function p(h) {
    if ((h === 45 || Y(h)) && r++ < 63) {
      const k = h === 45 ? p : c;
      return (e.consume(h), k);
    }
    return t(h);
  }
}
function R(e, n, t, r) {
  const u = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return i;
  function i(s) {
    return _(s) ? (e.enter(t), o(s)) : n(s);
  }
  function o(s) {
    return _(s) && l++ < u ? (e.consume(s), o) : (e.exit(t), n(s));
  }
}
const Pe = { partial: !0, tokenize: su };
function su(e, n, t) {
  return r;
  function r(l) {
    return _(l) ? R(e, u, 'linePrefix')(l) : u(l);
  }
  function u(l) {
    return l === null || T(l) ? n(l) : t(l);
  }
}
const wn = { continuation: { tokenize: fu }, exit: hu, name: 'blockQuote', tokenize: cu };
function cu(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    if (i === 62) {
      const o = r.containerState;
      return (
        o.open || (e.enter('blockQuote', { _container: !0 }), (o.open = !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(i),
        e.exit('blockQuoteMarker'),
        l
      );
    }
    return t(i);
  }
  function l(i) {
    return _(i)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(i),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        n)
      : (e.exit('blockQuotePrefix'), n(i));
  }
}
function fu(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return _(i)
      ? R(
          e,
          l,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(i)
      : l(i);
  }
  function l(i) {
    return e.attempt(wn, n, t)(i);
  }
}
function hu(e) {
  e.exit('blockQuote');
}
const Sn = { name: 'characterEscape', tokenize: pu };
function pu(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(l),
      e.exit('escapeMarker'),
      u
    );
  }
  function u(l) {
    return kr(l)
      ? (e.enter('characterEscapeValue'),
        e.consume(l),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        n)
      : t(l);
  }
}
const Cn = { name: 'characterReference', tokenize: mu };
function mu(e, n, t) {
  const r = this;
  let u = 0,
    l,
    i;
  return o;
  function o(c) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(c),
      e.exit('characterReferenceMarker'),
      s
    );
  }
  function s(c) {
    return c === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(c),
        e.exit('characterReferenceMarkerNumeric'),
        a)
      : (e.enter('characterReferenceValue'), (l = 31), (i = Y), f(c));
  }
  function a(c) {
    return c === 88 || c === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(c),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (l = 6),
        (i = gr),
        f)
      : (e.enter('characterReferenceValue'), (l = 7), (i = ut), f(c));
  }
  function f(c) {
    if (c === 59 && u) {
      const p = e.exit('characterReferenceValue');
      return i === Y && !ht(r.sliceSerialize(p))
        ? t(c)
        : (e.enter('characterReferenceMarker'),
          e.consume(c),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          n);
    }
    return i(c) && u++ < l ? (e.consume(c), f) : t(c);
  }
}
const Rt = { partial: !0, tokenize: ku },
  Bt = { concrete: !0, name: 'codeFenced', tokenize: gu };
function gu(e, n, t) {
  const r = this,
    u = { partial: !0, tokenize: P };
  let l = 0,
    i = 0,
    o;
  return s;
  function s(y) {
    return a(y);
  }
  function a(y) {
    const B = r.events[r.events.length - 1];
    return (
      (l = B && B[1].type === 'linePrefix' ? B[2].sliceSerialize(B[1], !0).length : 0),
      (o = y),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      f(y)
    );
  }
  function f(y) {
    return y === o
      ? (i++, e.consume(y), f)
      : i < 3
        ? t(y)
        : (e.exit('codeFencedFenceSequence'), _(y) ? R(e, c, 'whitespace')(y) : c(y));
  }
  function c(y) {
    return y === null || T(y)
      ? (e.exit('codeFencedFence'), r.interrupt ? n(y) : e.check(Rt, w, L)(y))
      : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), p(y));
  }
  function p(y) {
    return y === null || T(y)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), c(y))
      : _(y)
        ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), R(e, h, 'whitespace')(y))
        : y === 96 && y === o
          ? t(y)
          : (e.consume(y), p);
  }
  function h(y) {
    return y === null || T(y)
      ? c(y)
      : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), k(y));
  }
  function k(y) {
    return y === null || T(y)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), c(y))
      : y === 96 && y === o
        ? t(y)
        : (e.consume(y), k);
  }
  function w(y) {
    return e.attempt(u, L, I)(y);
  }
  function I(y) {
    return (e.enter('lineEnding'), e.consume(y), e.exit('lineEnding'), x);
  }
  function x(y) {
    return l > 0 && _(y) ? R(e, E, 'linePrefix', l + 1)(y) : E(y);
  }
  function E(y) {
    return y === null || T(y) ? e.check(Rt, w, L)(y) : (e.enter('codeFlowValue'), S(y));
  }
  function S(y) {
    return y === null || T(y) ? (e.exit('codeFlowValue'), E(y)) : (e.consume(y), S);
  }
  function L(y) {
    return (e.exit('codeFenced'), n(y));
  }
  function P(y, B, H) {
    let O = 0;
    return d;
    function d(M) {
      return (y.enter('lineEnding'), y.consume(M), y.exit('lineEnding'), z);
    }
    function z(M) {
      return (
        y.enter('codeFencedFence'),
        _(M)
          ? R(
              y,
              A,
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
            )(M)
          : A(M)
      );
    }
    function A(M) {
      return M === o ? (y.enter('codeFencedFenceSequence'), N(M)) : H(M);
    }
    function N(M) {
      return M === o
        ? (O++, y.consume(M), N)
        : O >= i
          ? (y.exit('codeFencedFenceSequence'), _(M) ? R(y, V, 'whitespace')(M) : V(M))
          : H(M);
    }
    function V(M) {
      return M === null || T(M) ? (y.exit('codeFencedFence'), B(M)) : H(M);
    }
  }
}
function ku(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return i === null ? t(i) : (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), l);
  }
  function l(i) {
    return r.parser.lazy[r.now().line] ? t(i) : n(i);
  }
}
const Ge = { name: 'codeIndented', tokenize: xu },
  du = { partial: !0, tokenize: bu };
function xu(e, n, t) {
  const r = this;
  return u;
  function u(a) {
    return (e.enter('codeIndented'), R(e, l, 'linePrefix', 5)(a));
  }
  function l(a) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === 'linePrefix' && f[2].sliceSerialize(f[1], !0).length >= 4
      ? i(a)
      : t(a);
  }
  function i(a) {
    return a === null ? s(a) : T(a) ? e.attempt(du, i, s)(a) : (e.enter('codeFlowValue'), o(a));
  }
  function o(a) {
    return a === null || T(a) ? (e.exit('codeFlowValue'), i(a)) : (e.consume(a), o);
  }
  function s(a) {
    return (e.exit('codeIndented'), n(a));
  }
}
function bu(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return r.parser.lazy[r.now().line]
      ? t(i)
      : T(i)
        ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), u)
        : R(e, l, 'linePrefix', 5)(i);
  }
  function l(i) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === 'linePrefix' && o[2].sliceSerialize(o[1], !0).length >= 4
      ? n(i)
      : T(i)
        ? u(i)
        : t(i);
  }
}
const yu = { name: 'codeText', previous: Su, resolve: wu, tokenize: Cu };
function wu(e) {
  let n = e.length - 4,
    t = 3,
    r,
    u;
  if (
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space') &&
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space')
  ) {
    for (r = t; ++r < n; )
      if (e[r][1].type === 'codeTextData') {
        ((e[t][1].type = 'codeTextPadding'),
          (e[n][1].type = 'codeTextPadding'),
          (t += 2),
          (n -= 2));
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    u === void 0
      ? r !== n && e[r][1].type !== 'lineEnding' && (u = r)
      : (r === n || e[r][1].type === 'lineEnding') &&
        ((e[u][1].type = 'codeTextData'),
        r !== u + 2 &&
          ((e[u][1].end = e[r - 1][1].end),
          e.splice(u + 2, r - u - 2),
          (n -= r - u - 2),
          (r = u + 2)),
        (u = void 0));
  return e;
}
function Su(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function Cu(e, n, t) {
  let r = 0,
    u,
    l;
  return i;
  function i(c) {
    return (e.enter('codeText'), e.enter('codeTextSequence'), o(c));
  }
  function o(c) {
    return c === 96 ? (e.consume(c), r++, o) : (e.exit('codeTextSequence'), s(c));
  }
  function s(c) {
    return c === null
      ? t(c)
      : c === 32
        ? (e.enter('space'), e.consume(c), e.exit('space'), s)
        : c === 96
          ? ((l = e.enter('codeTextSequence')), (u = 0), f(c))
          : T(c)
            ? (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), s)
            : (e.enter('codeTextData'), a(c));
  }
  function a(c) {
    return c === null || c === 32 || c === 96 || T(c)
      ? (e.exit('codeTextData'), s(c))
      : (e.consume(c), a);
  }
  function f(c) {
    return c === 96
      ? (e.consume(c), u++, f)
      : u === r
        ? (e.exit('codeTextSequence'), e.exit('codeText'), n(c))
        : ((l.type = 'codeTextData'), a(c));
  }
}
class Iu {
  constructor(n) {
    ((this.left = n ? [...n] : []), (this.right = []));
  }
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          n +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return n < this.left.length
      ? this.left[n]
      : this.right[this.right.length - n + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(n, r)
      : n > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - n + this.left.length,
            )
            .reverse()
        : this.left
            .slice(n)
            .concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  splice(n, t, r) {
    const u = t || 0;
    this.setCursor(Math.trunc(n));
    const l = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return (r && ze(this.left, r), l.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n));
  }
  pushMany(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), ze(this.left, n));
  }
  unshift(n) {
    (this.setCursor(0), this.right.push(n));
  }
  unshiftMany(n) {
    (this.setCursor(0), ze(this.right, n.reverse()));
  }
  setCursor(n) {
    if (
      !(
        n === this.left.length ||
        (n > this.left.length && this.right.length === 0) ||
        (n < 0 && this.left.length === 0)
      )
    )
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        ze(this.right, t.reverse());
      } else {
        const t = this.right.splice(
          this.left.length + this.right.length - n,
          Number.POSITIVE_INFINITY,
        );
        ze(this.left, t.reverse());
      }
  }
}
function ze(e, n) {
  let t = 0;
  if (n.length < 1e4) e.push(...n);
  else for (; t < n.length; ) (e.push(...n.slice(t, t + 1e4)), (t += 1e4));
}
function In(e) {
  const n = {};
  let t = -1,
    r,
    u,
    l,
    i,
    o,
    s,
    a;
  const f = new Iu(e);
  for (; ++t < f.length; ) {
    for (; t in n; ) t = n[t];
    if (
      ((r = f.get(t)),
      t &&
        r[1].type === 'chunkFlow' &&
        f.get(t - 1)[1].type === 'listItemPrefix' &&
        ((s = r[1]._tokenizer.events),
        (l = 0),
        l < s.length && s[l][1].type === 'lineEndingBlank' && (l += 2),
        l < s.length && s[l][1].type === 'content'))
    )
      for (; ++l < s.length && s[l][1].type !== 'content'; )
        s[l][1].type === 'chunkText' && ((s[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === 'enter') r[1].contentType && (Object.assign(n, Eu(f, t)), (t = n[t]), (a = !0));
    else if (r[1]._container) {
      for (l = t, u = void 0; l--; )
        if (((i = f.get(l)), i[1].type === 'lineEnding' || i[1].type === 'lineEndingBlank'))
          i[0] === 'enter' &&
            (u && (f.get(u)[1].type = 'lineEndingBlank'), (i[1].type = 'lineEnding'), (u = l));
        else if (!(i[1].type === 'linePrefix' || i[1].type === 'listItemIndent')) break;
      u &&
        ((r[1].end = { ...f.get(u)[1].start }),
        (o = f.slice(u, t)),
        o.unshift(r),
        f.splice(u, t - u + 1, o));
    }
  }
  return (J(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !a);
}
function Eu(e, n) {
  const t = e.get(n)[1],
    r = e.get(n)[2];
  let u = n - 1;
  const l = [];
  let i = t._tokenizer;
  i ||
    ((i = r.parser[t.contentType](t.start)),
    t._contentTypeTextTrailing && (i._contentTypeTextTrailing = !0));
  const o = i.events,
    s = [],
    a = {};
  let f,
    c,
    p = -1,
    h = t,
    k = 0,
    w = 0;
  const I = [w];
  for (; h; ) {
    for (; e.get(++u)[1] !== h; );
    (l.push(u),
      h._tokenizer ||
        ((f = r.sliceStream(h)),
        h.next || f.push(null),
        c && i.defineSkip(h.start),
        h._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = !0),
        i.write(f),
        h._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = void 0)),
      (c = h),
      (h = h.next));
  }
  for (h = t; ++p < o.length; )
    o[p][0] === 'exit' &&
      o[p - 1][0] === 'enter' &&
      o[p][1].type === o[p - 1][1].type &&
      o[p][1].start.line !== o[p][1].end.line &&
      ((w = p + 1), I.push(w), (h._tokenizer = void 0), (h.previous = void 0), (h = h.next));
  for (
    i.events = [], h ? ((h._tokenizer = void 0), (h.previous = void 0)) : I.pop(), p = I.length;
    p--;
  ) {
    const x = o.slice(I[p], I[p + 1]),
      E = l.pop();
    (s.push([E, E + x.length - 1]), e.splice(E, 2, x));
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    ((a[k + s[p][0]] = k + s[p][1]), (k += s[p][1] - s[p][0] - 1));
  return a;
}
const zu = { resolve: Tu, tokenize: Fu },
  Au = { partial: !0, tokenize: Lu };
function Tu(e) {
  return (In(e), e);
}
function Fu(e, n) {
  let t;
  return r;
  function r(o) {
    return (e.enter('content'), (t = e.enter('chunkContent', { contentType: 'content' })), u(o));
  }
  function u(o) {
    return o === null ? l(o) : T(o) ? e.check(Au, i, l)(o) : (e.consume(o), u);
  }
  function l(o) {
    return (e.exit('chunkContent'), e.exit('content'), n(o));
  }
  function i(o) {
    return (
      e.consume(o),
      e.exit('chunkContent'),
      (t.next = e.enter('chunkContent', { contentType: 'content', previous: t })),
      (t = t.next),
      u
    );
  }
}
function Lu(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(i),
      e.exit('lineEnding'),
      R(e, l, 'linePrefix')
    );
  }
  function l(i) {
    if (i === null || T(i)) return t(i);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes('codeIndented') &&
      o &&
      o[1].type === 'linePrefix' &&
      o[2].sliceSerialize(o[1], !0).length >= 4
      ? n(i)
      : e.interrupt(r.parser.constructs.flow, t, n)(i);
  }
}
function En(e, n, t, r, u, l, i, o, s) {
  const a = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60
      ? (e.enter(r), e.enter(u), e.enter(l), e.consume(x), e.exit(l), p)
      : x === null || x === 32 || x === 41 || Me(x)
        ? t(x)
        : (e.enter(r),
          e.enter(i),
          e.enter(o),
          e.enter('chunkString', { contentType: 'string' }),
          w(x));
  }
  function p(x) {
    return x === 62
      ? (e.enter(l), e.consume(x), e.exit(l), e.exit(u), e.exit(r), n)
      : (e.enter(o), e.enter('chunkString', { contentType: 'string' }), h(x));
  }
  function h(x) {
    return x === 62
      ? (e.exit('chunkString'), e.exit(o), p(x))
      : x === null || x === 60 || T(x)
        ? t(x)
        : (e.consume(x), x === 92 ? k : h);
  }
  function k(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), h) : h(x);
  }
  function w(x) {
    return !f && (x === null || x === 41 || q(x))
      ? (e.exit('chunkString'), e.exit(o), e.exit(i), e.exit(r), n(x))
      : f < a && x === 40
        ? (e.consume(x), f++, w)
        : x === 41
          ? (e.consume(x), f--, w)
          : x === null || x === 32 || x === 40 || Me(x)
            ? t(x)
            : (e.consume(x), x === 92 ? I : w);
  }
  function I(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), w) : w(x);
  }
}
function zn(e, n, t, r, u, l) {
  const i = this;
  let o = 0,
    s;
  return a;
  function a(h) {
    return (e.enter(r), e.enter(u), e.consume(h), e.exit(u), e.enter(l), f);
  }
  function f(h) {
    return o > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !s) ||
      (h === 94 && !o && '_hiddenFootnoteSupport' in i.parser.constructs)
      ? t(h)
      : h === 93
        ? (e.exit(l), e.enter(u), e.consume(h), e.exit(u), e.exit(r), n)
        : T(h)
          ? (e.enter('lineEnding'), e.consume(h), e.exit('lineEnding'), f)
          : (e.enter('chunkString', { contentType: 'string' }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || T(h) || o++ > 999
      ? (e.exit('chunkString'), f(h))
      : (e.consume(h), s || (s = !_(h)), h === 92 ? p : c);
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), o++, c) : c(h);
  }
}
function An(e, n, t, r, u, l) {
  let i;
  return o;
  function o(p) {
    return p === 34 || p === 39 || p === 40
      ? (e.enter(r), e.enter(u), e.consume(p), e.exit(u), (i = p === 40 ? 41 : p), s)
      : t(p);
  }
  function s(p) {
    return p === i ? (e.enter(u), e.consume(p), e.exit(u), e.exit(r), n) : (e.enter(l), a(p));
  }
  function a(p) {
    return p === i
      ? (e.exit(l), s(i))
      : p === null
        ? t(p)
        : T(p)
          ? (e.enter('lineEnding'), e.consume(p), e.exit('lineEnding'), R(e, a, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), f(p));
  }
  function f(p) {
    return p === i || p === null || T(p)
      ? (e.exit('chunkString'), a(p))
      : (e.consume(p), p === 92 ? c : f);
  }
  function c(p) {
    return p === i || p === 92 ? (e.consume(p), f) : f(p);
  }
}
function Te(e, n) {
  let t;
  return r;
  function r(u) {
    return T(u)
      ? (e.enter('lineEnding'), e.consume(u), e.exit('lineEnding'), (t = !0), r)
      : _(u)
        ? R(e, r, t ? 'linePrefix' : 'lineSuffix')(u)
        : n(u);
  }
}
const Pu = { name: 'definition', tokenize: Du },
  _u = { partial: !0, tokenize: Ru };
function Du(e, n, t) {
  const r = this;
  let u;
  return l;
  function l(h) {
    return (e.enter('definition'), i(h));
  }
  function i(h) {
    return zn.call(
      r,
      e,
      o,
      t,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(h);
  }
  function o(h) {
    return (
      (u = re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      h === 58 ? (e.enter('definitionMarker'), e.consume(h), e.exit('definitionMarker'), s) : t(h)
    );
  }
  function s(h) {
    return q(h) ? Te(e, a)(h) : a(h);
  }
  function a(h) {
    return En(
      e,
      f,
      t,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(h);
  }
  function f(h) {
    return e.attempt(_u, c, c)(h);
  }
  function c(h) {
    return _(h) ? R(e, p, 'whitespace')(h) : p(h);
  }
  function p(h) {
    return h === null || T(h) ? (e.exit('definition'), r.parser.defined.push(u), n(h)) : t(h);
  }
}
function Ru(e, n, t) {
  return r;
  function r(o) {
    return q(o) ? Te(e, u)(o) : t(o);
  }
  function u(o) {
    return An(e, l, t, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(o);
  }
  function l(o) {
    return _(o) ? R(e, i, 'whitespace')(o) : i(o);
  }
  function i(o) {
    return o === null || T(o) ? n(o) : t(o);
  }
}
const Bu = { name: 'hardBreakEscape', tokenize: Mu };
function Mu(e, n, t) {
  return r;
  function r(l) {
    return (e.enter('hardBreakEscape'), e.consume(l), u);
  }
  function u(l) {
    return T(l) ? (e.exit('hardBreakEscape'), n(l)) : t(l);
  }
}
const Ou = { name: 'headingAtx', resolve: Nu, tokenize: ju };
function Nu(e, n) {
  let t = e.length - 2,
    r = 3,
    u,
    l;
  return (
    e[r][1].type === 'whitespace' && (r += 2),
    t - 2 > r && e[t][1].type === 'whitespace' && (t -= 2),
    e[t][1].type === 'atxHeadingSequence' &&
      (r === t - 1 || (t - 4 > r && e[t - 2][1].type === 'whitespace')) &&
      (t -= r + 1 === t ? 2 : 4),
    t > r &&
      ((u = { type: 'atxHeadingText', start: e[r][1].start, end: e[t][1].end }),
      (l = { type: 'chunkText', start: e[r][1].start, end: e[t][1].end, contentType: 'text' }),
      J(e, r, t - r + 1, [
        ['enter', u, n],
        ['enter', l, n],
        ['exit', l, n],
        ['exit', u, n],
      ])),
    e
  );
}
function ju(e, n, t) {
  let r = 0;
  return u;
  function u(f) {
    return (e.enter('atxHeading'), l(f));
  }
  function l(f) {
    return (e.enter('atxHeadingSequence'), i(f));
  }
  function i(f) {
    return f === 35 && r++ < 6
      ? (e.consume(f), i)
      : f === null || q(f)
        ? (e.exit('atxHeadingSequence'), o(f))
        : t(f);
  }
  function o(f) {
    return f === 35
      ? (e.enter('atxHeadingSequence'), s(f))
      : f === null || T(f)
        ? (e.exit('atxHeading'), n(f))
        : _(f)
          ? R(e, o, 'whitespace')(f)
          : (e.enter('atxHeadingText'), a(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit('atxHeadingSequence'), o(f));
  }
  function a(f) {
    return f === null || f === 35 || q(f) ? (e.exit('atxHeadingText'), o(f)) : (e.consume(f), a);
  }
}
const qu = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  Mt = ['pre', 'script', 'style', 'textarea'],
  Hu = { concrete: !0, name: 'htmlFlow', resolveTo: $u, tokenize: Uu },
  Vu = { partial: !0, tokenize: Qu },
  vu = { partial: !0, tokenize: Wu };
function $u(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === 'enter' && e[n][1].type === 'htmlFlow'); );
  return (
    n > 1 &&
      e[n - 2][1].type === 'linePrefix' &&
      ((e[n][1].start = e[n - 2][1].start),
      (e[n + 1][1].start = e[n - 2][1].start),
      e.splice(n - 2, 2)),
    e
  );
}
function Uu(e, n, t) {
  const r = this;
  let u, l, i, o, s;
  return a;
  function a(g) {
    return f(g);
  }
  function f(g) {
    return (e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(g), c);
  }
  function c(g) {
    return g === 33
      ? (e.consume(g), p)
      : g === 47
        ? (e.consume(g), (l = !0), w)
        : g === 63
          ? (e.consume(g), (u = 3), r.interrupt ? n : m)
          : W(g)
            ? (e.consume(g), (i = String.fromCharCode(g)), I)
            : t(g);
  }
  function p(g) {
    return g === 45
      ? (e.consume(g), (u = 2), h)
      : g === 91
        ? (e.consume(g), (u = 5), (o = 0), k)
        : W(g)
          ? (e.consume(g), (u = 4), r.interrupt ? n : m)
          : t(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? n : m) : t(g);
  }
  function k(g) {
    const te = 'CDATA[';
    return g === te.charCodeAt(o++)
      ? (e.consume(g), o === te.length ? (r.interrupt ? n : A) : k)
      : t(g);
  }
  function w(g) {
    return W(g) ? (e.consume(g), (i = String.fromCharCode(g)), I) : t(g);
  }
  function I(g) {
    if (g === null || g === 47 || g === 62 || q(g)) {
      const te = g === 47,
        me = i.toLowerCase();
      return !te && !l && Mt.includes(me)
        ? ((u = 1), r.interrupt ? n(g) : A(g))
        : qu.includes(i.toLowerCase())
          ? ((u = 6), te ? (e.consume(g), x) : r.interrupt ? n(g) : A(g))
          : ((u = 7), r.interrupt && !r.parser.lazy[r.now().line] ? t(g) : l ? E(g) : S(g));
    }
    return g === 45 || Y(g) ? (e.consume(g), (i += String.fromCharCode(g)), I) : t(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? n : A) : t(g);
  }
  function E(g) {
    return _(g) ? (e.consume(g), E) : d(g);
  }
  function S(g) {
    return g === 47
      ? (e.consume(g), d)
      : g === 58 || g === 95 || W(g)
        ? (e.consume(g), L)
        : _(g)
          ? (e.consume(g), S)
          : d(g);
  }
  function L(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Y(g) ? (e.consume(g), L) : P(g);
  }
  function P(g) {
    return g === 61 ? (e.consume(g), y) : _(g) ? (e.consume(g), P) : S(g);
  }
  function y(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96
      ? t(g)
      : g === 34 || g === 39
        ? (e.consume(g), (s = g), B)
        : _(g)
          ? (e.consume(g), y)
          : H(g);
  }
  function B(g) {
    return g === s ? (e.consume(g), (s = null), O) : g === null || T(g) ? t(g) : (e.consume(g), B);
  }
  function H(g) {
    return g === null ||
      g === 34 ||
      g === 39 ||
      g === 47 ||
      g === 60 ||
      g === 61 ||
      g === 62 ||
      g === 96 ||
      q(g)
      ? P(g)
      : (e.consume(g), H);
  }
  function O(g) {
    return g === 47 || g === 62 || _(g) ? S(g) : t(g);
  }
  function d(g) {
    return g === 62 ? (e.consume(g), z) : t(g);
  }
  function z(g) {
    return g === null || T(g) ? A(g) : _(g) ? (e.consume(g), z) : t(g);
  }
  function A(g) {
    return g === 45 && u === 2
      ? (e.consume(g), U)
      : g === 60 && u === 1
        ? (e.consume(g), v)
        : g === 62 && u === 4
          ? (e.consume(g), ee)
          : g === 63 && u === 3
            ? (e.consume(g), m)
            : g === 93 && u === 5
              ? (e.consume(g), le)
              : T(g) && (u === 6 || u === 7)
                ? (e.exit('htmlFlowData'), e.check(Vu, oe, N)(g))
                : g === null || T(g)
                  ? (e.exit('htmlFlowData'), N(g))
                  : (e.consume(g), A);
  }
  function N(g) {
    return e.check(vu, V, oe)(g);
  }
  function V(g) {
    return (e.enter('lineEnding'), e.consume(g), e.exit('lineEnding'), M);
  }
  function M(g) {
    return g === null || T(g) ? N(g) : (e.enter('htmlFlowData'), A(g));
  }
  function U(g) {
    return g === 45 ? (e.consume(g), m) : A(g);
  }
  function v(g) {
    return g === 47 ? (e.consume(g), (i = ''), X) : A(g);
  }
  function X(g) {
    if (g === 62) {
      const te = i.toLowerCase();
      return Mt.includes(te) ? (e.consume(g), ee) : A(g);
    }
    return W(g) && i.length < 8 ? (e.consume(g), (i += String.fromCharCode(g)), X) : A(g);
  }
  function le(g) {
    return g === 93 ? (e.consume(g), m) : A(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), ee) : g === 45 && u === 2 ? (e.consume(g), m) : A(g);
  }
  function ee(g) {
    return g === null || T(g) ? (e.exit('htmlFlowData'), oe(g)) : (e.consume(g), ee);
  }
  function oe(g) {
    return (e.exit('htmlFlow'), n(g));
  }
}
function Wu(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return T(i) ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), l) : t(i);
  }
  function l(i) {
    return r.parser.lazy[r.now().line] ? t(i) : n(i);
  }
}
function Qu(e, n, t) {
  return r;
  function r(u) {
    return (e.enter('lineEnding'), e.consume(u), e.exit('lineEnding'), e.attempt(Pe, n, t));
  }
}
const Yu = { name: 'htmlText', tokenize: Gu };
function Gu(e, n, t) {
  const r = this;
  let u, l, i;
  return o;
  function o(m) {
    return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(m), s);
  }
  function s(m) {
    return m === 33
      ? (e.consume(m), a)
      : m === 47
        ? (e.consume(m), P)
        : m === 63
          ? (e.consume(m), S)
          : W(m)
            ? (e.consume(m), H)
            : t(m);
  }
  function a(m) {
    return m === 45
      ? (e.consume(m), f)
      : m === 91
        ? (e.consume(m), (l = 0), k)
        : W(m)
          ? (e.consume(m), E)
          : t(m);
  }
  function f(m) {
    return m === 45 ? (e.consume(m), h) : t(m);
  }
  function c(m) {
    return m === null
      ? t(m)
      : m === 45
        ? (e.consume(m), p)
        : T(m)
          ? ((i = c), v(m))
          : (e.consume(m), c);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), h) : c(m);
  }
  function h(m) {
    return m === 62 ? U(m) : m === 45 ? p(m) : c(m);
  }
  function k(m) {
    const ee = 'CDATA[';
    return m === ee.charCodeAt(l++) ? (e.consume(m), l === ee.length ? w : k) : t(m);
  }
  function w(m) {
    return m === null
      ? t(m)
      : m === 93
        ? (e.consume(m), I)
        : T(m)
          ? ((i = w), v(m))
          : (e.consume(m), w);
  }
  function I(m) {
    return m === 93 ? (e.consume(m), x) : w(m);
  }
  function x(m) {
    return m === 62 ? U(m) : m === 93 ? (e.consume(m), x) : w(m);
  }
  function E(m) {
    return m === null || m === 62 ? U(m) : T(m) ? ((i = E), v(m)) : (e.consume(m), E);
  }
  function S(m) {
    return m === null
      ? t(m)
      : m === 63
        ? (e.consume(m), L)
        : T(m)
          ? ((i = S), v(m))
          : (e.consume(m), S);
  }
  function L(m) {
    return m === 62 ? U(m) : S(m);
  }
  function P(m) {
    return W(m) ? (e.consume(m), y) : t(m);
  }
  function y(m) {
    return m === 45 || Y(m) ? (e.consume(m), y) : B(m);
  }
  function B(m) {
    return T(m) ? ((i = B), v(m)) : _(m) ? (e.consume(m), B) : U(m);
  }
  function H(m) {
    return m === 45 || Y(m) ? (e.consume(m), H) : m === 47 || m === 62 || q(m) ? O(m) : t(m);
  }
  function O(m) {
    return m === 47
      ? (e.consume(m), U)
      : m === 58 || m === 95 || W(m)
        ? (e.consume(m), d)
        : T(m)
          ? ((i = O), v(m))
          : _(m)
            ? (e.consume(m), O)
            : U(m);
  }
  function d(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || Y(m) ? (e.consume(m), d) : z(m);
  }
  function z(m) {
    return m === 61 ? (e.consume(m), A) : T(m) ? ((i = z), v(m)) : _(m) ? (e.consume(m), z) : O(m);
  }
  function A(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96
      ? t(m)
      : m === 34 || m === 39
        ? (e.consume(m), (u = m), N)
        : T(m)
          ? ((i = A), v(m))
          : _(m)
            ? (e.consume(m), A)
            : (e.consume(m), V);
  }
  function N(m) {
    return m === u
      ? (e.consume(m), (u = void 0), M)
      : m === null
        ? t(m)
        : T(m)
          ? ((i = N), v(m))
          : (e.consume(m), N);
  }
  function V(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96
      ? t(m)
      : m === 47 || m === 62 || q(m)
        ? O(m)
        : (e.consume(m), V);
  }
  function M(m) {
    return m === 47 || m === 62 || q(m) ? O(m) : t(m);
  }
  function U(m) {
    return m === 62 ? (e.consume(m), e.exit('htmlTextData'), e.exit('htmlText'), n) : t(m);
  }
  function v(m) {
    return (e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(m), e.exit('lineEnding'), X);
  }
  function X(m) {
    return _(m)
      ? R(
          e,
          le,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(m)
      : le(m);
  }
  function le(m) {
    return (e.enter('htmlTextData'), i(m));
  }
}
const mt = { name: 'labelEnd', resolveAll: Xu, resolveTo: el, tokenize: tl },
  Zu = { tokenize: nl },
  Ju = { tokenize: rl },
  Ku = { tokenize: il };
function Xu(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (
      (t.push(e[n]), r.type === 'labelImage' || r.type === 'labelLink' || r.type === 'labelEnd')
    ) {
      const u = r.type === 'labelImage' ? 4 : 2;
      ((r.type = 'data'), (n += u));
    }
  }
  return (e.length !== t.length && J(e, 0, e.length, t), e);
}
function el(e, n) {
  let t = e.length,
    r = 0,
    u,
    l,
    i,
    o;
  for (; t--; )
    if (((u = e[t][1]), l)) {
      if (u.type === 'link' || (u.type === 'labelLink' && u._inactive)) break;
      e[t][0] === 'enter' && u.type === 'labelLink' && (u._inactive = !0);
    } else if (i) {
      if (
        e[t][0] === 'enter' &&
        (u.type === 'labelImage' || u.type === 'labelLink') &&
        !u._balanced &&
        ((l = t), u.type !== 'labelLink')
      ) {
        r = 2;
        break;
      }
    } else u.type === 'labelEnd' && (i = t);
  const s = {
      type: e[l][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...e[l][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    a = { type: 'label', start: { ...e[l][1].start }, end: { ...e[i][1].end } },
    f = { type: 'labelText', start: { ...e[l + r + 2][1].end }, end: { ...e[i - 2][1].start } };
  return (
    (o = [
      ['enter', s, n],
      ['enter', a, n],
    ]),
    (o = K(o, e.slice(l + 1, l + r + 3))),
    (o = K(o, [['enter', f, n]])),
    (o = K(o, He(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, i - 3), n))),
    (o = K(o, [['exit', f, n], e[i - 2], e[i - 1], ['exit', a, n]])),
    (o = K(o, e.slice(i + 1))),
    (o = K(o, [['exit', s, n]])),
    J(e, l, e.length, o),
    e
  );
}
function tl(e, n, t) {
  const r = this;
  let u = r.events.length,
    l,
    i;
  for (; u--; )
    if (
      (r.events[u][1].type === 'labelImage' || r.events[u][1].type === 'labelLink') &&
      !r.events[u][1]._balanced
    ) {
      l = r.events[u][1];
      break;
    }
  return o;
  function o(p) {
    return l
      ? l._inactive
        ? c(p)
        : ((i = r.parser.defined.includes(re(r.sliceSerialize({ start: l.end, end: r.now() })))),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(p),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          s)
      : t(p);
  }
  function s(p) {
    return p === 40
      ? e.attempt(Zu, f, i ? f : c)(p)
      : p === 91
        ? e.attempt(Ju, f, i ? a : c)(p)
        : i
          ? f(p)
          : c(p);
  }
  function a(p) {
    return e.attempt(Ku, f, c)(p);
  }
  function f(p) {
    return n(p);
  }
  function c(p) {
    return ((l._balanced = !0), t(p));
  }
}
function nl(e, n, t) {
  return r;
  function r(c) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(c),
      e.exit('resourceMarker'),
      u
    );
  }
  function u(c) {
    return q(c) ? Te(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41
      ? f(c)
      : En(
          e,
          i,
          o,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32,
        )(c);
  }
  function i(c) {
    return q(c) ? Te(e, s)(c) : f(c);
  }
  function o(c) {
    return t(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40
      ? An(e, a, t, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(c)
      : f(c);
  }
  function a(c) {
    return q(c) ? Te(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41
      ? (e.enter('resourceMarker'), e.consume(c), e.exit('resourceMarker'), e.exit('resource'), n)
      : t(c);
  }
}
function rl(e, n, t) {
  const r = this;
  return u;
  function u(o) {
    return zn.call(r, e, l, i, 'reference', 'referenceMarker', 'referenceString')(o);
  }
  function l(o) {
    return r.parser.defined.includes(
      re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? n(o)
      : t(o);
  }
  function i(o) {
    return t(o);
  }
}
function il(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(l),
      e.exit('referenceMarker'),
      u
    );
  }
  function u(l) {
    return l === 93
      ? (e.enter('referenceMarker'),
        e.consume(l),
        e.exit('referenceMarker'),
        e.exit('reference'),
        n)
      : t(l);
  }
}
const ul = { name: 'labelStartImage', resolveAll: mt.resolveAll, tokenize: ll };
function ll(e, n, t) {
  const r = this;
  return u;
  function u(o) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(o),
      e.exit('labelImageMarker'),
      l
    );
  }
  function l(o) {
    return o === 91
      ? (e.enter('labelMarker'), e.consume(o), e.exit('labelMarker'), e.exit('labelImage'), i)
      : t(o);
  }
  function i(o) {
    return o === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? t(o) : n(o);
  }
}
const ol = { name: 'labelStartLink', resolveAll: mt.resolveAll, tokenize: al };
function al(e, n, t) {
  const r = this;
  return u;
  function u(i) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(i),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      l
    );
  }
  function l(i) {
    return i === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? t(i) : n(i);
  }
}
const Ze = { name: 'lineEnding', tokenize: sl };
function sl(e, n) {
  return t;
  function t(r) {
    return (e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), R(e, n, 'linePrefix'));
  }
}
const Be = { name: 'thematicBreak', tokenize: cl };
function cl(e, n, t) {
  let r = 0,
    u;
  return l;
  function l(a) {
    return (e.enter('thematicBreak'), i(a));
  }
  function i(a) {
    return ((u = a), o(a));
  }
  function o(a) {
    return a === u
      ? (e.enter('thematicBreakSequence'), s(a))
      : r >= 3 && (a === null || T(a))
        ? (e.exit('thematicBreak'), n(a))
        : t(a);
  }
  function s(a) {
    return a === u
      ? (e.consume(a), r++, s)
      : (e.exit('thematicBreakSequence'), _(a) ? R(e, o, 'whitespace')(a) : o(a));
  }
}
const Q = { continuation: { tokenize: ml }, exit: kl, name: 'list', tokenize: pl },
  fl = { partial: !0, tokenize: dl },
  hl = { partial: !0, tokenize: gl };
function pl(e, n, t) {
  const r = this,
    u = r.events[r.events.length - 1];
  let l = u && u[1].type === 'linePrefix' ? u[2].sliceSerialize(u[1], !0).length : 0,
    i = 0;
  return o;
  function o(h) {
    const k =
      r.containerState.type || (h === 42 || h === 43 || h === 45 ? 'listUnordered' : 'listOrdered');
    if (k === 'listUnordered' ? !r.containerState.marker || h === r.containerState.marker : ut(h)) {
      if (
        (r.containerState.type || ((r.containerState.type = k), e.enter(k, { _container: !0 })),
        k === 'listUnordered')
      )
        return (e.enter('listItemPrefix'), h === 42 || h === 45 ? e.check(Be, t, a)(h) : a(h));
      if (!r.interrupt || h === 49)
        return (e.enter('listItemPrefix'), e.enter('listItemValue'), s(h));
    }
    return t(h);
  }
  function s(h) {
    return ut(h) && ++i < 10
      ? (e.consume(h), s)
      : (!r.interrupt || i < 2) &&
          (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46)
        ? (e.exit('listItemValue'), a(h))
        : t(h);
  }
  function a(h) {
    return (
      e.enter('listItemMarker'),
      e.consume(h),
      e.exit('listItemMarker'),
      (r.containerState.marker = r.containerState.marker || h),
      e.check(Pe, r.interrupt ? t : f, e.attempt(fl, p, c))
    );
  }
  function f(h) {
    return ((r.containerState.initialBlankLine = !0), l++, p(h));
  }
  function c(h) {
    return _(h)
      ? (e.enter('listItemPrefixWhitespace'), e.consume(h), e.exit('listItemPrefixWhitespace'), p)
      : t(h);
  }
  function p(h) {
    return (
      (r.containerState.size = l + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      n(h)
    );
  }
}
function ml(e, n, t) {
  const r = this;
  return ((r.containerState._closeFlow = void 0), e.check(Pe, u, l));
  function u(o) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
      R(e, n, 'listItemIndent', r.containerState.size + 1)(o)
    );
  }
  function l(o) {
    return r.containerState.furtherBlankLines || !_(o)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        i(o))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(hl, n, i)(o));
  }
  function i(o) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      R(
        e,
        e.attempt(Q, n, t),
        'linePrefix',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(o)
    );
  }
}
function gl(e, n, t) {
  const r = this;
  return R(e, u, 'listItemIndent', r.containerState.size + 1);
  function u(l) {
    const i = r.events[r.events.length - 1];
    return i &&
      i[1].type === 'listItemIndent' &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? n(l)
      : t(l);
  }
}
function kl(e) {
  e.exit(this.containerState.type);
}
function dl(e, n, t) {
  const r = this;
  return R(
    e,
    u,
    'listItemPrefixWhitespace',
    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function u(l) {
    const i = r.events[r.events.length - 1];
    return !_(l) && i && i[1].type === 'listItemPrefixWhitespace' ? n(l) : t(l);
  }
}
const Ot = { name: 'setextUnderline', resolveTo: xl, tokenize: bl };
function xl(e, n) {
  let t = e.length,
    r,
    u,
    l;
  for (; t--; )
    if (e[t][0] === 'enter') {
      if (e[t][1].type === 'content') {
        r = t;
        break;
      }
      e[t][1].type === 'paragraph' && (u = t);
    } else
      (e[t][1].type === 'content' && e.splice(t, 1),
        !l && e[t][1].type === 'definition' && (l = t));
  const i = {
    type: 'setextHeading',
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[u][1].type = 'setextHeadingText'),
    l
      ? (e.splice(u, 0, ['enter', i, n]),
        e.splice(l + 1, 0, ['exit', e[r][1], n]),
        (e[r][1].end = { ...e[l][1].end }))
      : (e[r][1] = i),
    e.push(['exit', i, n]),
    e
  );
}
function bl(e, n, t) {
  const r = this;
  let u;
  return l;
  function l(a) {
    let f = r.events.length,
      c;
    for (; f--; )
      if (
        r.events[f][1].type !== 'lineEnding' &&
        r.events[f][1].type !== 'linePrefix' &&
        r.events[f][1].type !== 'content'
      ) {
        c = r.events[f][1].type === 'paragraph';
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c)
      ? (e.enter('setextHeadingLine'), (u = a), i(a))
      : t(a);
  }
  function i(a) {
    return (e.enter('setextHeadingLineSequence'), o(a));
  }
  function o(a) {
    return a === u
      ? (e.consume(a), o)
      : (e.exit('setextHeadingLineSequence'), _(a) ? R(e, s, 'lineSuffix')(a) : s(a));
  }
  function s(a) {
    return a === null || T(a) ? (e.exit('setextHeadingLine'), n(a)) : t(a);
  }
}
const yl = { tokenize: Tl, partial: !0 };
function wl() {
  return {
    document: {
      91: { name: 'gfmFootnoteDefinition', tokenize: El, continuation: { tokenize: zl }, exit: Al },
    },
    text: {
      91: { name: 'gfmFootnoteCall', tokenize: Il },
      93: { name: 'gfmPotentialFootnoteCall', add: 'after', tokenize: Sl, resolveTo: Cl },
    },
  };
}
function Sl(e, n, t) {
  const r = this;
  let u = r.events.length;
  const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; u--; ) {
    const s = r.events[u][1];
    if (s.type === 'labelImage') {
      i = s;
      break;
    }
    if (
      s.type === 'gfmFootnoteCall' ||
      s.type === 'labelLink' ||
      s.type === 'label' ||
      s.type === 'image' ||
      s.type === 'link'
    )
      break;
  }
  return o;
  function o(s) {
    if (!i || !i._balanced) return t(s);
    const a = re(r.sliceSerialize({ start: i.end, end: r.now() }));
    return a.codePointAt(0) !== 94 || !l.includes(a.slice(1))
      ? t(s)
      : (e.enter('gfmFootnoteCallLabelMarker'),
        e.consume(s),
        e.exit('gfmFootnoteCallLabelMarker'),
        n(s));
  }
}
function Cl(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === 'labelImage' && e[t][0] === 'enter') {
      e[t][1];
      break;
    }
  ((e[t + 1][1].type = 'data'), (e[t + 3][1].type = 'gfmFootnoteCallLabelMarker'));
  const r = {
      type: 'gfmFootnoteCall',
      start: Object.assign({}, e[t + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    u = {
      type: 'gfmFootnoteCallMarker',
      start: Object.assign({}, e[t + 3][1].end),
      end: Object.assign({}, e[t + 3][1].end),
    };
  (u.end.column++, u.end.offset++, u.end._bufferIndex++);
  const l = {
      type: 'gfmFootnoteCallString',
      start: Object.assign({}, u.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    i = {
      type: 'chunkString',
      contentType: 'string',
      start: Object.assign({}, l.start),
      end: Object.assign({}, l.end),
    },
    o = [
      e[t + 1],
      e[t + 2],
      ['enter', r, n],
      e[t + 3],
      e[t + 4],
      ['enter', u, n],
      ['exit', u, n],
      ['enter', l, n],
      ['enter', i, n],
      ['exit', i, n],
      ['exit', l, n],
      e[e.length - 2],
      e[e.length - 1],
      ['exit', r, n],
    ];
  return (e.splice(t, e.length - t + 1, ...o), e);
}
function Il(e, n, t) {
  const r = this,
    u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0,
    i;
  return o;
  function o(c) {
    return (
      e.enter('gfmFootnoteCall'),
      e.enter('gfmFootnoteCallLabelMarker'),
      e.consume(c),
      e.exit('gfmFootnoteCallLabelMarker'),
      s
    );
  }
  function s(c) {
    return c !== 94
      ? t(c)
      : (e.enter('gfmFootnoteCallMarker'),
        e.consume(c),
        e.exit('gfmFootnoteCallMarker'),
        e.enter('gfmFootnoteCallString'),
        (e.enter('chunkString').contentType = 'string'),
        a);
  }
  function a(c) {
    if (l > 999 || (c === 93 && !i) || c === null || c === 91 || q(c)) return t(c);
    if (c === 93) {
      e.exit('chunkString');
      const p = e.exit('gfmFootnoteCallString');
      return u.includes(re(r.sliceSerialize(p)))
        ? (e.enter('gfmFootnoteCallLabelMarker'),
          e.consume(c),
          e.exit('gfmFootnoteCallLabelMarker'),
          e.exit('gfmFootnoteCall'),
          n)
        : t(c);
    }
    return (q(c) || (i = !0), l++, e.consume(c), c === 92 ? f : a);
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, a) : a(c);
  }
}
function El(e, n, t) {
  const r = this,
    u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l,
    i = 0,
    o;
  return s;
  function s(k) {
    return (
      (e.enter('gfmFootnoteDefinition')._container = !0),
      e.enter('gfmFootnoteDefinitionLabel'),
      e.enter('gfmFootnoteDefinitionLabelMarker'),
      e.consume(k),
      e.exit('gfmFootnoteDefinitionLabelMarker'),
      a
    );
  }
  function a(k) {
    return k === 94
      ? (e.enter('gfmFootnoteDefinitionMarker'),
        e.consume(k),
        e.exit('gfmFootnoteDefinitionMarker'),
        e.enter('gfmFootnoteDefinitionLabelString'),
        (e.enter('chunkString').contentType = 'string'),
        f)
      : t(k);
  }
  function f(k) {
    if (i > 999 || (k === 93 && !o) || k === null || k === 91 || q(k)) return t(k);
    if (k === 93) {
      e.exit('chunkString');
      const w = e.exit('gfmFootnoteDefinitionLabelString');
      return (
        (l = re(r.sliceSerialize(w))),
        e.enter('gfmFootnoteDefinitionLabelMarker'),
        e.consume(k),
        e.exit('gfmFootnoteDefinitionLabelMarker'),
        e.exit('gfmFootnoteDefinitionLabel'),
        p
      );
    }
    return (q(k) || (o = !0), i++, e.consume(k), k === 92 ? c : f);
  }
  function c(k) {
    return k === 91 || k === 92 || k === 93 ? (e.consume(k), i++, f) : f(k);
  }
  function p(k) {
    return k === 58
      ? (e.enter('definitionMarker'),
        e.consume(k),
        e.exit('definitionMarker'),
        u.includes(l) || u.push(l),
        R(e, h, 'gfmFootnoteDefinitionWhitespace'))
      : t(k);
  }
  function h(k) {
    return n(k);
  }
}
function zl(e, n, t) {
  return e.check(Pe, n, e.attempt(yl, n, t));
}
function Al(e) {
  e.exit('gfmFootnoteDefinition');
}
function Tl(e, n, t) {
  const r = this;
  return R(e, u, 'gfmFootnoteDefinitionIndent', 5);
  function u(l) {
    const i = r.events[r.events.length - 1];
    return i &&
      i[1].type === 'gfmFootnoteDefinitionIndent' &&
      i[2].sliceSerialize(i[1], !0).length === 4
      ? n(l)
      : t(l);
  }
}
function Fl(e) {
  let t = (e || {}).singleTilde;
  const r = { name: 'strikethrough', tokenize: l, resolveAll: u };
  return (
    t == null && (t = !0),
    { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } }
  );
  function u(i, o) {
    let s = -1;
    for (; ++s < i.length; )
      if (
        i[s][0] === 'enter' &&
        i[s][1].type === 'strikethroughSequenceTemporary' &&
        i[s][1]._close
      ) {
        let a = s;
        for (; a--; )
          if (
            i[a][0] === 'exit' &&
            i[a][1].type === 'strikethroughSequenceTemporary' &&
            i[a][1]._open &&
            i[s][1].end.offset - i[s][1].start.offset === i[a][1].end.offset - i[a][1].start.offset
          ) {
            ((i[s][1].type = 'strikethroughSequence'), (i[a][1].type = 'strikethroughSequence'));
            const f = {
                type: 'strikethrough',
                start: Object.assign({}, i[a][1].start),
                end: Object.assign({}, i[s][1].end),
              },
              c = {
                type: 'strikethroughText',
                start: Object.assign({}, i[a][1].end),
                end: Object.assign({}, i[s][1].start),
              },
              p = [
                ['enter', f, o],
                ['enter', i[a][1], o],
                ['exit', i[a][1], o],
                ['enter', c, o],
              ],
              h = o.parser.constructs.insideSpan.null;
            (h && J(p, p.length, 0, He(h, i.slice(a + 1, s), o)),
              J(p, p.length, 0, [
                ['exit', c, o],
                ['enter', i[s][1], o],
                ['exit', i[s][1], o],
                ['exit', f, o],
              ]),
              J(i, a - 1, s - a + 3, p),
              (s = a + p.length - 2));
            break;
          }
      }
    for (s = -1; ++s < i.length; )
      i[s][1].type === 'strikethroughSequenceTemporary' && (i[s][1].type = 'data');
    return i;
  }
  function l(i, o, s) {
    const a = this.previous,
      f = this.events;
    let c = 0;
    return p;
    function p(k) {
      return a === 126 && f[f.length - 1][1].type !== 'characterEscape'
        ? s(k)
        : (i.enter('strikethroughSequenceTemporary'), h(k));
    }
    function h(k) {
      const w = Se(a);
      if (k === 126) return c > 1 ? s(k) : (i.consume(k), c++, h);
      if (c < 2 && !t) return s(k);
      const I = i.exit('strikethroughSequenceTemporary'),
        x = Se(k);
      return ((I._open = !x || (x === 2 && !!w)), (I._close = !w || (w === 2 && !!x)), o(k));
    }
  }
}
class Ll {
  constructor() {
    this.map = [];
  }
  add(n, t, r) {
    Pl(this, n, t, r);
  }
  consume(n) {
    if (
      (this.map.sort(function (l, i) {
        return l[0] - i[0];
      }),
      this.map.length === 0)
    )
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      ((t -= 1),
        r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
        (n.length = this.map[t][0]));
    (r.push(n.slice()), (n.length = 0));
    let u = r.pop();
    for (; u; ) {
      for (const l of u) n.push(l);
      u = r.pop();
    }
    this.map.length = 0;
  }
}
function Pl(e, n, t, r) {
  let u = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; u < e.map.length; ) {
      if (e.map[u][0] === n) {
        ((e.map[u][1] += t), e.map[u][2].push(...r));
        return;
      }
      u += 1;
    }
    e.map.push([n, t, r]);
  }
}
function _l(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const u = e[n];
    if (t) {
      if (u[0] === 'enter')
        u[1].type === 'tableContent' &&
          r.push(e[n + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
      else if (u[1].type === 'tableContent') {
        if (e[n - 1][1].type === 'tableDelimiterMarker') {
          const l = r.length - 1;
          r[l] = r[l] === 'left' ? 'center' : 'right';
        }
      } else if (u[1].type === 'tableDelimiterRow') break;
    } else u[0] === 'enter' && u[1].type === 'tableDelimiterRow' && (t = !0);
    n += 1;
  }
  return r;
}
function Dl() {
  return { flow: { null: { name: 'table', tokenize: Rl, resolveAll: Bl } } };
}
function Rl(e, n, t) {
  const r = this;
  let u = 0,
    l = 0,
    i;
  return o;
  function o(d) {
    let z = r.events.length - 1;
    for (; z > -1; ) {
      const V = r.events[z][1].type;
      if (V === 'lineEnding' || V === 'linePrefix') z--;
      else break;
    }
    const A = z > -1 ? r.events[z][1].type : null,
      N = A === 'tableHead' || A === 'tableRow' ? y : s;
    return N === y && r.parser.lazy[r.now().line] ? t(d) : N(d);
  }
  function s(d) {
    return (e.enter('tableHead'), e.enter('tableRow'), a(d));
  }
  function a(d) {
    return (d === 124 || ((i = !0), (l += 1)), f(d));
  }
  function f(d) {
    return d === null
      ? t(d)
      : T(d)
        ? l > 1
          ? ((l = 0),
            (r.interrupt = !0),
            e.exit('tableRow'),
            e.enter('lineEnding'),
            e.consume(d),
            e.exit('lineEnding'),
            h)
          : t(d)
        : _(d)
          ? R(e, f, 'whitespace')(d)
          : ((l += 1),
            i && ((i = !1), (u += 1)),
            d === 124
              ? (e.enter('tableCellDivider'), e.consume(d), e.exit('tableCellDivider'), (i = !0), f)
              : (e.enter('data'), c(d)));
  }
  function c(d) {
    return d === null || d === 124 || q(d)
      ? (e.exit('data'), f(d))
      : (e.consume(d), d === 92 ? p : c);
  }
  function p(d) {
    return d === 92 || d === 124 ? (e.consume(d), c) : c(d);
  }
  function h(d) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? t(d)
        : (e.enter('tableDelimiterRow'),
          (i = !1),
          _(d)
            ? R(
                e,
                k,
                'linePrefix',
                r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
              )(d)
            : k(d))
    );
  }
  function k(d) {
    return d === 45 || d === 58
      ? I(d)
      : d === 124
        ? ((i = !0), e.enter('tableCellDivider'), e.consume(d), e.exit('tableCellDivider'), w)
        : P(d);
  }
  function w(d) {
    return _(d) ? R(e, I, 'whitespace')(d) : I(d);
  }
  function I(d) {
    return d === 58
      ? ((l += 1),
        (i = !0),
        e.enter('tableDelimiterMarker'),
        e.consume(d),
        e.exit('tableDelimiterMarker'),
        x)
      : d === 45
        ? ((l += 1), x(d))
        : d === null || T(d)
          ? L(d)
          : P(d);
  }
  function x(d) {
    return d === 45 ? (e.enter('tableDelimiterFiller'), E(d)) : P(d);
  }
  function E(d) {
    return d === 45
      ? (e.consume(d), E)
      : d === 58
        ? ((i = !0),
          e.exit('tableDelimiterFiller'),
          e.enter('tableDelimiterMarker'),
          e.consume(d),
          e.exit('tableDelimiterMarker'),
          S)
        : (e.exit('tableDelimiterFiller'), S(d));
  }
  function S(d) {
    return _(d) ? R(e, L, 'whitespace')(d) : L(d);
  }
  function L(d) {
    return d === 124
      ? k(d)
      : d === null || T(d)
        ? !i || u !== l
          ? P(d)
          : (e.exit('tableDelimiterRow'), e.exit('tableHead'), n(d))
        : P(d);
  }
  function P(d) {
    return t(d);
  }
  function y(d) {
    return (e.enter('tableRow'), B(d));
  }
  function B(d) {
    return d === 124
      ? (e.enter('tableCellDivider'), e.consume(d), e.exit('tableCellDivider'), B)
      : d === null || T(d)
        ? (e.exit('tableRow'), n(d))
        : _(d)
          ? R(e, B, 'whitespace')(d)
          : (e.enter('data'), H(d));
  }
  function H(d) {
    return d === null || d === 124 || q(d)
      ? (e.exit('data'), B(d))
      : (e.consume(d), d === 92 ? O : H);
  }
  function O(d) {
    return d === 92 || d === 124 ? (e.consume(d), H) : H(d);
  }
}
function Bl(e, n) {
  let t = -1,
    r = !0,
    u = 0,
    l = [0, 0, 0, 0],
    i = [0, 0, 0, 0],
    o = !1,
    s = 0,
    a,
    f,
    c;
  const p = new Ll();
  for (; ++t < e.length; ) {
    const h = e[t],
      k = h[1];
    h[0] === 'enter'
      ? k.type === 'tableHead'
        ? ((o = !1),
          s !== 0 && (Nt(p, n, s, a, f), (f = void 0), (s = 0)),
          (a = { type: 'table', start: Object.assign({}, k.start), end: Object.assign({}, k.end) }),
          p.add(t, 0, [['enter', a, n]]))
        : k.type === 'tableRow' || k.type === 'tableDelimiterRow'
          ? ((r = !0),
            (c = void 0),
            (l = [0, 0, 0, 0]),
            (i = [0, t + 1, 0, 0]),
            o &&
              ((o = !1),
              (f = {
                type: 'tableBody',
                start: Object.assign({}, k.start),
                end: Object.assign({}, k.end),
              }),
              p.add(t, 0, [['enter', f, n]])),
            (u = k.type === 'tableDelimiterRow' ? 2 : f ? 3 : 1))
          : u &&
              (k.type === 'data' ||
                k.type === 'tableDelimiterMarker' ||
                k.type === 'tableDelimiterFiller')
            ? ((r = !1),
              i[2] === 0 &&
                (l[1] !== 0 && ((i[0] = i[1]), (c = De(p, n, l, u, void 0, c)), (l = [0, 0, 0, 0])),
                (i[2] = t)))
            : k.type === 'tableCellDivider' &&
              (r
                ? (r = !1)
                : (l[1] !== 0 && ((i[0] = i[1]), (c = De(p, n, l, u, void 0, c))),
                  (l = i),
                  (i = [l[1], t, 0, 0])))
      : k.type === 'tableHead'
        ? ((o = !0), (s = t))
        : k.type === 'tableRow' || k.type === 'tableDelimiterRow'
          ? ((s = t),
            l[1] !== 0
              ? ((i[0] = i[1]), (c = De(p, n, l, u, t, c)))
              : i[1] !== 0 && (c = De(p, n, i, u, t, c)),
            (u = 0))
          : u &&
            (k.type === 'data' ||
              k.type === 'tableDelimiterMarker' ||
              k.type === 'tableDelimiterFiller') &&
            (i[3] = t);
  }
  for (s !== 0 && Nt(p, n, s, a, f), p.consume(n.events), t = -1; ++t < n.events.length; ) {
    const h = n.events[t];
    h[0] === 'enter' && h[1].type === 'table' && (h[1]._align = _l(n.events, t));
  }
  return e;
}
function De(e, n, t, r, u, l) {
  const i = r === 1 ? 'tableHeader' : r === 2 ? 'tableDelimiter' : 'tableData',
    o = 'tableContent';
  t[0] !== 0 && ((l.end = Object.assign({}, we(n.events, t[0]))), e.add(t[0], 0, [['exit', l, n]]));
  const s = we(n.events, t[1]);
  if (
    ((l = { type: i, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(t[1], 0, [['enter', l, n]]),
    t[2] !== 0)
  ) {
    const a = we(n.events, t[2]),
      f = we(n.events, t[3]),
      c = { type: o, start: Object.assign({}, a), end: Object.assign({}, f) };
    if ((e.add(t[2], 0, [['enter', c, n]]), r !== 2)) {
      const p = n.events[t[2]],
        h = n.events[t[3]];
      if (
        ((p[1].end = Object.assign({}, h[1].end)),
        (p[1].type = 'chunkText'),
        (p[1].contentType = 'text'),
        t[3] > t[2] + 1)
      ) {
        const k = t[2] + 1,
          w = t[3] - t[2] - 1;
        e.add(k, w, []);
      }
    }
    e.add(t[3] + 1, 0, [['exit', c, n]]);
  }
  return (
    u !== void 0 &&
      ((l.end = Object.assign({}, we(n.events, u))), e.add(u, 0, [['exit', l, n]]), (l = void 0)),
    l
  );
}
function Nt(e, n, t, r, u) {
  const l = [],
    i = we(n.events, t);
  (u && ((u.end = Object.assign({}, i)), l.push(['exit', u, n])),
    (r.end = Object.assign({}, i)),
    l.push(['exit', r, n]),
    e.add(t + 1, 0, l));
}
function we(e, n) {
  const t = e[n],
    r = t[0] === 'enter' ? 'start' : 'end';
  return t[1][r];
}
const Ml = { name: 'tasklistCheck', tokenize: Nl };
function Ol() {
  return { text: { 91: Ml } };
}
function Nl(e, n, t) {
  const r = this;
  return u;
  function u(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? t(s)
      : (e.enter('taskListCheck'),
        e.enter('taskListCheckMarker'),
        e.consume(s),
        e.exit('taskListCheckMarker'),
        l);
  }
  function l(s) {
    return q(s)
      ? (e.enter('taskListCheckValueUnchecked'),
        e.consume(s),
        e.exit('taskListCheckValueUnchecked'),
        i)
      : s === 88 || s === 120
        ? (e.enter('taskListCheckValueChecked'),
          e.consume(s),
          e.exit('taskListCheckValueChecked'),
          i)
        : t(s);
  }
  function i(s) {
    return s === 93
      ? (e.enter('taskListCheckMarker'),
        e.consume(s),
        e.exit('taskListCheckMarker'),
        e.exit('taskListCheck'),
        o)
      : t(s);
  }
  function o(s) {
    return T(s) ? n(s) : _(s) ? e.check({ tokenize: jl }, n, t)(s) : t(s);
  }
}
function jl(e, n, t) {
  return R(e, r, 'whitespace');
  function r(u) {
    return u === null ? t(u) : n(u);
  }
}
function ql(e) {
  return hn([Zi(), wl(), Fl(e), Dl(), Ol()]);
}
const Hl = {};
function _o(e) {
  const n = this,
    t = e || Hl,
    r = n.data(),
    u = r.micromarkExtensions || (r.micromarkExtensions = []),
    l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  (u.push(ql(t)), l.push($i()), i.push(Ui(t)));
}
const Vl = { tokenize: vl };
function vl(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, u);
  let t;
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), R(e, n, 'linePrefix'));
  }
  function u(o) {
    return (e.enter('paragraph'), l(o));
  }
  function l(o) {
    const s = e.enter('chunkText', { contentType: 'text', previous: t });
    return (t && (t.next = s), (t = s), i(o));
  }
  function i(o) {
    if (o === null) {
      (e.exit('chunkText'), e.exit('paragraph'), e.consume(o));
      return;
    }
    return T(o) ? (e.consume(o), e.exit('chunkText'), l) : (e.consume(o), i);
  }
}
const $l = { tokenize: Ul },
  jt = { tokenize: Wl };
function Ul(e) {
  const n = this,
    t = [];
  let r = 0,
    u,
    l,
    i;
  return o;
  function o(S) {
    if (r < t.length) {
      const L = t[r];
      return ((n.containerState = L[1]), e.attempt(L[0].continuation, s, a)(S));
    }
    return a(S);
  }
  function s(S) {
    if ((r++, n.containerState._closeFlow)) {
      ((n.containerState._closeFlow = void 0), u && E());
      const L = n.events.length;
      let P = L,
        y;
      for (; P--; )
        if (n.events[P][0] === 'exit' && n.events[P][1].type === 'chunkFlow') {
          y = n.events[P][1].end;
          break;
        }
      x(r);
      let B = L;
      for (; B < n.events.length; ) ((n.events[B][1].end = { ...y }), B++);
      return (J(n.events, P + 1, 0, n.events.slice(L)), (n.events.length = B), a(S));
    }
    return o(S);
  }
  function a(S) {
    if (r === t.length) {
      if (!u) return p(S);
      if (u.currentConstruct && u.currentConstruct.concrete) return k(S);
      n.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return ((n.containerState = {}), e.check(jt, f, c)(S));
  }
  function f(S) {
    return (u && E(), x(r), p(S));
  }
  function c(S) {
    return ((n.parser.lazy[n.now().line] = r !== t.length), (i = n.now().offset), k(S));
  }
  function p(S) {
    return ((n.containerState = {}), e.attempt(jt, h, k)(S));
  }
  function h(S) {
    return (r++, t.push([n.currentConstruct, n.containerState]), p(S));
  }
  function k(S) {
    if (S === null) {
      (u && E(), x(0), e.consume(S));
      return;
    }
    return (
      (u = u || n.parser.flow(n.now())),
      e.enter('chunkFlow', { _tokenizer: u, contentType: 'flow', previous: l }),
      w(S)
    );
  }
  function w(S) {
    if (S === null) {
      (I(e.exit('chunkFlow'), !0), x(0), e.consume(S));
      return;
    }
    return T(S)
      ? (e.consume(S), I(e.exit('chunkFlow')), (r = 0), (n.interrupt = void 0), o)
      : (e.consume(S), w);
  }
  function I(S, L) {
    const P = n.sliceStream(S);
    if (
      (L && P.push(null),
      (S.previous = l),
      l && (l.next = S),
      (l = S),
      u.defineSkip(S.start),
      u.write(P),
      n.parser.lazy[S.start.line])
    ) {
      let y = u.events.length;
      for (; y--; )
        if (
          u.events[y][1].start.offset < i &&
          (!u.events[y][1].end || u.events[y][1].end.offset > i)
        )
          return;
      const B = n.events.length;
      let H = B,
        O,
        d;
      for (; H--; )
        if (n.events[H][0] === 'exit' && n.events[H][1].type === 'chunkFlow') {
          if (O) {
            d = n.events[H][1].end;
            break;
          }
          O = !0;
        }
      for (x(r), y = B; y < n.events.length; ) ((n.events[y][1].end = { ...d }), y++);
      (J(n.events, H + 1, 0, n.events.slice(B)), (n.events.length = y));
    }
  }
  function x(S) {
    let L = t.length;
    for (; L-- > S; ) {
      const P = t[L];
      ((n.containerState = P[1]), P[0].exit.call(n, e));
    }
    t.length = S;
  }
  function E() {
    (u.write([null]), (l = void 0), (u = void 0), (n.containerState._closeFlow = void 0));
  }
}
function Wl(e, n, t) {
  return R(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
const Ql = { tokenize: Yl };
function Yl(e) {
  const n = this,
    t = e.attempt(
      Pe,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        u,
        R(e, e.attempt(this.parser.constructs.flow, u, e.attempt(zu, u)), 'linePrefix'),
      ),
    );
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(l),
      e.exit('lineEndingBlank'),
      (n.currentConstruct = void 0),
      t
    );
  }
  function u(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(l),
      e.exit('lineEnding'),
      (n.currentConstruct = void 0),
      t
    );
  }
}
const Gl = { resolveAll: Fn() },
  Zl = Tn('string'),
  Jl = Tn('text');
function Tn(e) {
  return { resolveAll: Fn(e === 'text' ? Kl : void 0), tokenize: n };
  function n(t) {
    const r = this,
      u = this.parser.constructs[e],
      l = t.attempt(u, i, o);
    return i;
    function i(f) {
      return a(f) ? l(f) : o(f);
    }
    function o(f) {
      if (f === null) {
        t.consume(f);
        return;
      }
      return (t.enter('data'), t.consume(f), s);
    }
    function s(f) {
      return a(f) ? (t.exit('data'), l(f)) : (t.consume(f), s);
    }
    function a(f) {
      if (f === null) return !0;
      const c = u[f];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const h = c[p];
          if (!h.previous || h.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function Fn(e) {
  return n;
  function n(t, r) {
    let u = -1,
      l;
    for (; ++u <= t.length; )
      l === void 0
        ? t[u] && t[u][1].type === 'data' && ((l = u), u++)
        : (!t[u] || t[u][1].type !== 'data') &&
          (u !== l + 2 &&
            ((t[l][1].end = t[u - 1][1].end), t.splice(l + 2, u - l - 2), (u = l + 2)),
          (l = void 0));
    return e ? e(t, r) : t;
  }
}
function Kl(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === 'lineEnding') && e[t - 1][1].type === 'data') {
      const r = e[t - 1][1],
        u = n.sliceStream(r);
      let l = u.length,
        i = -1,
        o = 0,
        s;
      for (; l--; ) {
        const a = u[l];
        if (typeof a == 'string') {
          for (i = a.length; a.charCodeAt(i - 1) === 32; ) (o++, i--);
          if (i) break;
          i = -1;
        } else if (a === -2) ((s = !0), o++);
        else if (a !== -1) {
          l++;
          break;
        }
      }
      if ((n._contentTypeTextTrailing && t === e.length && (o = 0), o)) {
        const a = {
          type: t === e.length || s || o < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: l ? i : r.start._bufferIndex + i,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - o,
            offset: r.end.offset - o,
          },
          end: { ...r.end },
        };
        ((r.end = { ...a.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, a)
            : (e.splice(t, 0, ['enter', a, n], ['exit', a, n]), (t += 2)));
      }
      t++;
    }
  return e;
}
const Xl = {
    42: Q,
    43: Q,
    45: Q,
    48: Q,
    49: Q,
    50: Q,
    51: Q,
    52: Q,
    53: Q,
    54: Q,
    55: Q,
    56: Q,
    57: Q,
    62: wn,
  },
  eo = { 91: Pu },
  to = { [-2]: Ge, [-1]: Ge, 32: Ge },
  no = { 35: Ou, 42: Be, 45: [Ot, Be], 60: Hu, 61: Ot, 95: Be, 96: Bt, 126: Bt },
  ro = { 38: Cn, 92: Sn },
  io = {
    [-5]: Ze,
    [-4]: Ze,
    [-3]: Ze,
    33: ul,
    38: Cn,
    42: ot,
    60: [ou, Yu],
    91: ol,
    92: [Bu, Sn],
    93: mt,
    95: ot,
    96: yu,
  },
  uo = { null: [ot, Gl] },
  lo = { null: [42, 95] },
  oo = { null: [] },
  ao = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: lo,
        contentInitial: eo,
        disable: oo,
        document: Xl,
        flow: no,
        flowInitial: to,
        insideSpan: uo,
        string: ro,
        text: io,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function so(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (t && t.line) || 1,
    column: (t && t.column) || 1,
    offset: (t && t.offset) || 0,
  };
  const u = {},
    l = [];
  let i = [],
    o = [];
  const s = {
      attempt: B(P),
      check: B(y),
      consume: E,
      enter: S,
      exit: L,
      interrupt: B(y, { interrupt: !0 }),
    },
    a = {
      code: null,
      containerState: {},
      defineSkip: w,
      events: [],
      now: k,
      parser: e,
      previous: null,
      sliceSerialize: p,
      sliceStream: h,
      write: c,
    };
  let f = n.tokenize.call(a, s);
  return (n.resolveAll && l.push(n), a);
  function c(z) {
    return (
      (i = K(i, z)),
      I(),
      i[i.length - 1] !== null ? [] : (H(n, 0), (a.events = He(l, a.events, a)), a.events)
    );
  }
  function p(z, A) {
    return fo(h(z), A);
  }
  function h(z) {
    return co(i, z);
  }
  function k() {
    const { _bufferIndex: z, _index: A, line: N, column: V, offset: M } = r;
    return { _bufferIndex: z, _index: A, line: N, column: V, offset: M };
  }
  function w(z) {
    ((u[z.line] = z.column), d());
  }
  function I() {
    let z;
    for (; r._index < i.length; ) {
      const A = i[r._index];
      if (typeof A == 'string')
        for (
          z = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === z && r._bufferIndex < A.length;
        )
          x(A.charCodeAt(r._bufferIndex));
      else x(A);
    }
  }
  function x(z) {
    f = f(z);
  }
  function E(z) {
    (T(z)
      ? (r.line++, (r.column = 1), (r.offset += z === -3 ? 2 : 1), d())
      : z !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === i[r._index].length && ((r._bufferIndex = -1), r._index++)),
      (a.previous = z));
  }
  function S(z, A) {
    const N = A || {};
    return ((N.type = z), (N.start = k()), a.events.push(['enter', N, a]), o.push(N), N);
  }
  function L(z) {
    const A = o.pop();
    return ((A.end = k()), a.events.push(['exit', A, a]), A);
  }
  function P(z, A) {
    H(z, A.from);
  }
  function y(z, A) {
    A.restore();
  }
  function B(z, A) {
    return N;
    function N(V, M, U) {
      let v, X, le, m;
      return Array.isArray(V) ? oe(V) : 'tokenize' in V ? oe([V]) : ee(V);
      function ee($) {
        return Ce;
        function Ce(fe) {
          const xe = fe !== null && $[fe],
            be = fe !== null && $.null,
            _e = [
              ...(Array.isArray(xe) ? xe : xe ? [xe] : []),
              ...(Array.isArray(be) ? be : be ? [be] : []),
            ];
          return oe(_e)(fe);
        }
      }
      function oe($) {
        return ((v = $), (X = 0), $.length === 0 ? U : g($[X]));
      }
      function g($) {
        return Ce;
        function Ce(fe) {
          return (
            (m = O()),
            (le = $),
            $.partial || (a.currentConstruct = $),
            $.name && a.parser.constructs.disable.null.includes($.name)
              ? me()
              : $.tokenize.call(A ? Object.assign(Object.create(a), A) : a, s, te, me)(fe)
          );
        }
      }
      function te($) {
        return (z(le, m), M);
      }
      function me($) {
        return (m.restore(), ++X < v.length ? g(v[X]) : U);
      }
    }
  }
  function H(z, A) {
    (z.resolveAll && !l.includes(z) && l.push(z),
      z.resolve && J(a.events, A, a.events.length - A, z.resolve(a.events.slice(A), a)),
      z.resolveTo && (a.events = z.resolveTo(a.events, a)));
  }
  function O() {
    const z = k(),
      A = a.previous,
      N = a.currentConstruct,
      V = a.events.length,
      M = Array.from(o);
    return { from: V, restore: U };
    function U() {
      ((r = z), (a.previous = A), (a.currentConstruct = N), (a.events.length = V), (o = M), d());
    }
  }
  function d() {
    r.line in u && r.column < 2 && ((r.column = u[r.line]), (r.offset += u[r.line] - 1));
  }
}
function co(e, n) {
  const t = n.start._index,
    r = n.start._bufferIndex,
    u = n.end._index,
    l = n.end._bufferIndex;
  let i;
  if (t === u) i = [e[t].slice(r, l)];
  else {
    if (((i = e.slice(t, u)), r > -1)) {
      const o = i[0];
      typeof o == 'string' ? (i[0] = o.slice(r)) : i.shift();
    }
    l > 0 && i.push(e[u].slice(0, l));
  }
  return i;
}
function fo(e, n) {
  let t = -1;
  const r = [];
  let u;
  for (; ++t < e.length; ) {
    const l = e[t];
    let i;
    if (typeof l == 'string') i = l;
    else
      switch (l) {
        case -5: {
          i = '\r';
          break;
        }
        case -4: {
          i = `
`;
          break;
        }
        case -3: {
          i = `\r
`;
          break;
        }
        case -2: {
          i = n ? ' ' : '	';
          break;
        }
        case -1: {
          if (!n && u) continue;
          i = ' ';
          break;
        }
        default:
          i = String.fromCharCode(l);
      }
    ((u = l === -2), r.push(i));
  }
  return r.join('');
}
function ho(e) {
  const r = {
    constructs: hn([ao, ...((e || {}).extensions || [])]),
    content: u(Vl),
    defined: [],
    document: u($l),
    flow: u(Ql),
    lazy: {},
    string: u(Zl),
    text: u(Jl),
  };
  return r;
  function u(l) {
    return i;
    function i(o) {
      return so(r, l, o);
    }
  }
}
function po(e) {
  for (; !In(e); );
  return e;
}
const qt = /[\0\t\n\r]/g;
function mo() {
  let e = 1,
    n = '',
    t = !0,
    r;
  return u;
  function u(l, i, o) {
    const s = [];
    let a, f, c, p, h;
    for (
      l = n + (typeof l == 'string' ? l.toString() : new TextDecoder(i || void 0).decode(l)),
        c = 0,
        n = '',
        t && (l.charCodeAt(0) === 65279 && c++, (t = void 0));
      c < l.length;
    ) {
      if (
        ((qt.lastIndex = c),
        (a = qt.exec(l)),
        (p = a && a.index !== void 0 ? a.index : l.length),
        (h = l.charCodeAt(p)),
        !a)
      ) {
        n = l.slice(c);
        break;
      }
      if (h === 10 && c === p && r) (s.push(-3), (r = void 0));
      else
        switch (
          (r && (s.push(-5), (r = void 0)), c < p && (s.push(l.slice(c, p)), (e += p - c)), h)
        ) {
          case 0: {
            (s.push(65533), e++);
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, s.push(-2); e++ < f; ) s.push(-1);
            break;
          }
          case 10: {
            (s.push(-4), (e = 1));
            break;
          }
          default:
            ((r = !0), (e = 1));
        }
      c = p + 1;
    }
    return (o && (r && s.push(-5), n && s.push(n), s.push(null)), s);
  }
}
const Ln = {}.hasOwnProperty;
function go(e, n, t) {
  return (
    n && typeof n == 'object' && ((t = n), (n = void 0)),
    ko(t)(
      po(
        ho(t)
          .document()
          .write(mo()(e, n, !0)),
      ),
    )
  );
}
function ko(e) {
  const n = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: l(bt),
      autolinkProtocol: O,
      autolinkEmail: O,
      atxHeading: l(kt),
      blockQuote: l(be),
      characterEscape: O,
      characterReference: O,
      codeFenced: l(_e),
      codeFencedFenceInfo: i,
      codeFencedFenceMeta: i,
      codeIndented: l(_e, i),
      codeText: l(_n, i),
      codeTextData: O,
      data: O,
      codeFlowValue: O,
      definition: l(Dn),
      definitionDestinationString: i,
      definitionLabelString: i,
      definitionTitleString: i,
      emphasis: l(Rn),
      hardBreakEscape: l(dt),
      hardBreakTrailing: l(dt),
      htmlFlow: l(xt, i),
      htmlFlowData: O,
      htmlText: l(xt, i),
      htmlTextData: O,
      image: l(Bn),
      label: i,
      link: l(bt),
      listItem: l(Mn),
      listItemValue: p,
      listOrdered: l(yt, c),
      listUnordered: l(yt),
      paragraph: l(On),
      reference: g,
      referenceString: i,
      resourceDestinationString: i,
      resourceTitleString: i,
      setextHeading: l(kt),
      strong: l(Nn),
      thematicBreak: l(qn),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: P,
      autolink: s(),
      autolinkEmail: xe,
      autolinkProtocol: fe,
      blockQuote: s(),
      characterEscapeValue: d,
      characterReferenceMarkerHexadecimal: me,
      characterReferenceMarkerNumeric: me,
      characterReferenceValue: $,
      characterReference: Ce,
      codeFenced: s(I),
      codeFencedFence: w,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: k,
      codeFlowValue: d,
      codeIndented: s(x),
      codeText: s(M),
      codeTextData: d,
      data: d,
      definition: s(),
      definitionDestinationString: L,
      definitionLabelString: E,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(A),
      hardBreakTrailing: s(A),
      htmlFlow: s(N),
      htmlFlowData: d,
      htmlText: s(V),
      htmlTextData: d,
      image: s(v),
      label: le,
      labelText: X,
      lineEnding: z,
      link: s(U),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: te,
      resourceDestinationString: m,
      resourceTitleString: ee,
      resource: oe,
      setextHeading: s(H),
      setextHeadingLineSequence: B,
      setextHeadingText: y,
      strong: s(),
      thematicBreak: s(),
    },
  };
  Pn(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(b) {
    let C = { type: 'root', children: [] };
    const F = {
        stack: [C],
        tokenStack: [],
        config: n,
        enter: o,
        exit: a,
        buffer: i,
        resume: f,
        data: t,
      },
      D = [];
    let j = -1;
    for (; ++j < b.length; )
      if (b[j][1].type === 'listOrdered' || b[j][1].type === 'listUnordered')
        if (b[j][0] === 'enter') D.push(j);
        else {
          const ne = D.pop();
          j = u(b, ne, j);
        }
    for (j = -1; ++j < b.length; ) {
      const ne = n[b[j][0]];
      Ln.call(ne, b[j][1].type) &&
        ne[b[j][1].type].call(
          Object.assign({ sliceSerialize: b[j][2].sliceSerialize }, F),
          b[j][1],
        );
    }
    if (F.tokenStack.length > 0) {
      const ne = F.tokenStack[F.tokenStack.length - 1];
      (ne[1] || Ht).call(F, void 0, ne[0]);
    }
    for (
      C.position = {
        start: he(b.length > 0 ? b[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: he(b.length > 0 ? b[b.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        j = -1;
      ++j < n.transforms.length;
    )
      C = n.transforms[j](C) || C;
    return C;
  }
  function u(b, C, F) {
    let D = C - 1,
      j = -1,
      ne = !1,
      ge,
      ae,
      Ie,
      Ee;
    for (; ++D <= F; ) {
      const Z = b[D];
      switch (Z[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (Z[0] === 'enter' ? j++ : j--, (Ee = void 0));
          break;
        }
        case 'lineEndingBlank': {
          Z[0] === 'enter' && (ge && !Ee && !j && !Ie && (Ie = D), (Ee = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          Ee = void 0;
      }
      if (
        (!j && Z[0] === 'enter' && Z[1].type === 'listItemPrefix') ||
        (j === -1 &&
          Z[0] === 'exit' &&
          (Z[1].type === 'listUnordered' || Z[1].type === 'listOrdered'))
      ) {
        if (ge) {
          let ye = D;
          for (ae = void 0; ye--; ) {
            const se = b[ye];
            if (se[1].type === 'lineEnding' || se[1].type === 'lineEndingBlank') {
              if (se[0] === 'exit') continue;
              (ae && ((b[ae][1].type = 'lineEndingBlank'), (ne = !0)),
                (se[1].type = 'lineEnding'),
                (ae = ye));
            } else if (
              !(
                se[1].type === 'linePrefix' ||
                se[1].type === 'blockQuotePrefix' ||
                se[1].type === 'blockQuotePrefixWhitespace' ||
                se[1].type === 'blockQuoteMarker' ||
                se[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Ie && (!ae || Ie < ae) && (ge._spread = !0),
            (ge.end = Object.assign({}, ae ? b[ae][1].start : Z[1].end)),
            b.splice(ae || D, 0, ['exit', ge, Z[2]]),
            D++,
            F++);
        }
        if (Z[1].type === 'listItemPrefix') {
          const ye = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, Z[1].start),
            end: void 0,
          };
          ((ge = ye), b.splice(D, 0, ['enter', ye, Z[2]]), D++, F++, (Ie = void 0), (Ee = !0));
        }
      }
    }
    return ((b[C][1]._spread = ne), F);
  }
  function l(b, C) {
    return F;
    function F(D) {
      (o.call(this, b(D), D), C && C.call(this, D));
    }
  }
  function i() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function o(b, C, F) {
    (this.stack[this.stack.length - 1].children.push(b),
      this.stack.push(b),
      this.tokenStack.push([C, F || void 0]),
      (b.position = { start: he(C.start), end: void 0 }));
  }
  function s(b) {
    return C;
    function C(F) {
      (b && b.call(this, F), a.call(this, F));
    }
  }
  function a(b, C) {
    const F = this.stack.pop(),
      D = this.tokenStack.pop();
    if (D) D[0].type !== b.type && (C ? C.call(this, b, D[0]) : (D[1] || Ht).call(this, b, D[0]));
    else
      throw new Error(
        'Cannot close `' + b.type + '` (' + Ae({ start: b.start, end: b.end }) + '): it’s not open',
      );
    F.position.end = he(b.end);
  }
  function f() {
    return ct(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(b) {
    if (this.data.expectingFirstListItemValue) {
      const C = this.stack[this.stack.length - 2];
      ((C.start = Number.parseInt(this.sliceSerialize(b), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function h() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.lang = b;
  }
  function k() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.meta = b;
  }
  function w() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function I() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    ((C.value = b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function x() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = b.replace(/(\r?\n|\r)$/g, '');
  }
  function E(b) {
    const C = this.resume(),
      F = this.stack[this.stack.length - 1];
    ((F.label = C), (F.identifier = re(this.sliceSerialize(b)).toLowerCase()));
  }
  function S() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.title = b;
  }
  function L() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.url = b;
  }
  function P(b) {
    const C = this.stack[this.stack.length - 1];
    if (!C.depth) {
      const F = this.sliceSerialize(b).length;
      C.depth = F;
    }
  }
  function y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function B(b) {
    const C = this.stack[this.stack.length - 1];
    C.depth = this.sliceSerialize(b).codePointAt(0) === 61 ? 1 : 2;
  }
  function H() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function O(b) {
    const F = this.stack[this.stack.length - 1].children;
    let D = F[F.length - 1];
    ((!D || D.type !== 'text') &&
      ((D = jn()), (D.position = { start: he(b.start), end: void 0 }), F.push(D)),
      this.stack.push(D));
  }
  function d(b) {
    const C = this.stack.pop();
    ((C.value += this.sliceSerialize(b)), (C.position.end = he(b.end)));
  }
  function z(b) {
    const C = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const F = C.children[C.children.length - 1];
      ((F.position.end = he(b.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      n.canContainEols.includes(C.type) &&
      (O.call(this, b), d.call(this, b));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = b;
  }
  function V() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = b;
  }
  function M() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = b;
  }
  function U() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || 'shortcut';
      ((b.type += 'Reference'), (b.referenceType = C), delete b.url, delete b.title);
    } else (delete b.identifier, delete b.label);
    this.data.referenceType = void 0;
  }
  function v() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || 'shortcut';
      ((b.type += 'Reference'), (b.referenceType = C), delete b.url, delete b.title);
    } else (delete b.identifier, delete b.label);
    this.data.referenceType = void 0;
  }
  function X(b) {
    const C = this.sliceSerialize(b),
      F = this.stack[this.stack.length - 2];
    ((F.label = Pi(C)), (F.identifier = re(C).toLowerCase()));
  }
  function le() {
    const b = this.stack[this.stack.length - 1],
      C = this.resume(),
      F = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), F.type === 'link')) {
      const D = b.children;
      F.children = D;
    } else F.alt = C;
  }
  function m() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.url = b;
  }
  function ee() {
    const b = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.title = b;
  }
  function oe() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = 'collapsed';
  }
  function te(b) {
    const C = this.resume(),
      F = this.stack[this.stack.length - 1];
    ((F.label = C),
      (F.identifier = re(this.sliceSerialize(b)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function me(b) {
    this.data.characterReferenceType = b.type;
  }
  function $(b) {
    const C = this.sliceSerialize(b),
      F = this.data.characterReferenceType;
    let D;
    F
      ? ((D = fn(C, F === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (D = ht(C));
    const j = this.stack[this.stack.length - 1];
    j.value += D;
  }
  function Ce(b) {
    const C = this.stack.pop();
    C.position.end = he(b.end);
  }
  function fe(b) {
    d.call(this, b);
    const C = this.stack[this.stack.length - 1];
    C.url = this.sliceSerialize(b);
  }
  function xe(b) {
    d.call(this, b);
    const C = this.stack[this.stack.length - 1];
    C.url = 'mailto:' + this.sliceSerialize(b);
  }
  function be() {
    return { type: 'blockquote', children: [] };
  }
  function _e() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function _n() {
    return { type: 'inlineCode', value: '' };
  }
  function Dn() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function Rn() {
    return { type: 'emphasis', children: [] };
  }
  function kt() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function dt() {
    return { type: 'break' };
  }
  function xt() {
    return { type: 'html', value: '' };
  }
  function Bn() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function bt() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function yt(b) {
    return {
      type: 'list',
      ordered: b.type === 'listOrdered',
      start: null,
      spread: b._spread,
      children: [],
    };
  }
  function Mn(b) {
    return { type: 'listItem', spread: b._spread, checked: null, children: [] };
  }
  function On() {
    return { type: 'paragraph', children: [] };
  }
  function Nn() {
    return { type: 'strong', children: [] };
  }
  function jn() {
    return { type: 'text', value: '' };
  }
  function qn() {
    return { type: 'thematicBreak' };
  }
}
function he(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Pn(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? Pn(e, r) : xo(e, r);
  }
}
function xo(e, n) {
  let t;
  for (t in n)
    if (Ln.call(n, t))
      switch (t) {
        case 'canContainEols': {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case 'transforms': {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case 'enter':
        case 'exit': {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function Ht(e, n) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          Ae({ start: e.start, end: e.end }) +
          '): a different token (`' +
          n.type +
          '`, ' +
          Ae({ start: n.start, end: n.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          n.type +
          '`, ' +
          Ae({ start: n.start, end: n.end }) +
          ') is still open',
      );
}
function Do(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return go(r, {
      ...n.data('settings'),
      ...e,
      extensions: n.data('micromarkExtensions') || [],
      mdastExtensions: n.data('fromMarkdownExtensions') || [],
    });
  }
}
function Vt(e) {
  if (e) throw e;
}
var Je, vt;
function bo() {
  if (vt) return Je;
  vt = 1;
  var e = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    t = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    u = function (a) {
      return typeof Array.isArray == 'function' ? Array.isArray(a) : n.call(a) === '[object Array]';
    },
    l = function (a) {
      if (!a || n.call(a) !== '[object Object]') return !1;
      var f = e.call(a, 'constructor'),
        c =
          a.constructor &&
          a.constructor.prototype &&
          e.call(a.constructor.prototype, 'isPrototypeOf');
      if (a.constructor && !f && !c) return !1;
      var p;
      for (p in a);
      return typeof p > 'u' || e.call(a, p);
    },
    i = function (a, f) {
      t && f.name === '__proto__'
        ? t(a, f.name, { enumerable: !0, configurable: !0, value: f.newValue, writable: !0 })
        : (a[f.name] = f.newValue);
    },
    o = function (a, f) {
      if (f === '__proto__')
        if (e.call(a, f)) {
          if (r) return r(a, f).value;
        } else return;
      return a[f];
    };
  return (
    (Je = function s() {
      var a,
        f,
        c,
        p,
        h,
        k,
        w = arguments[0],
        I = 1,
        x = arguments.length,
        E = !1;
      for (
        typeof w == 'boolean' && ((E = w), (w = arguments[1] || {}), (I = 2)),
          (w == null || (typeof w != 'object' && typeof w != 'function')) && (w = {});
        I < x;
        ++I
      )
        if (((a = arguments[I]), a != null))
          for (f in a)
            ((c = o(w, f)),
              (p = o(a, f)),
              w !== p &&
                (E && p && (l(p) || (h = u(p)))
                  ? (h ? ((h = !1), (k = c && u(c) ? c : [])) : (k = c && l(c) ? c : {}),
                    i(w, { name: f, newValue: s(E, k, p) }))
                  : typeof p < 'u' && i(w, { name: f, newValue: p })));
      return w;
    }),
    Je
  );
}
var yo = bo();
const Ke = Hn(yo);
function at(e) {
  if (typeof e != 'object' || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function wo() {
  const e = [],
    n = { run: t, use: r };
  return n;
  function t(...u) {
    let l = -1;
    const i = u.pop();
    if (typeof i != 'function') throw new TypeError('Expected function as last argument, not ' + i);
    o(null, ...u);
    function o(s, ...a) {
      const f = e[++l];
      let c = -1;
      if (s) {
        i(s);
        return;
      }
      for (; ++c < u.length; ) (a[c] === null || a[c] === void 0) && (a[c] = u[c]);
      ((u = a), f ? So(f, o)(...a) : i(null, ...a));
    }
  }
  function r(u) {
    if (typeof u != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + u);
    return (e.push(u), n);
  }
}
function So(e, n) {
  let t;
  return r;
  function r(...i) {
    const o = e.length > i.length;
    let s;
    o && i.push(u);
    try {
      s = e.apply(this, i);
    } catch (a) {
      const f = a;
      if (o && t) throw f;
      return u(f);
    }
    o ||
      (s && s.then && typeof s.then == 'function'
        ? s.then(l, u)
        : s instanceof Error
          ? u(s)
          : l(s));
  }
  function u(i, ...o) {
    t || ((t = !0), n(i, ...o));
  }
  function l(i) {
    u(null, i);
  }
}
const Co = function (e) {
    const r = this.constructor.prototype,
      u = r[e],
      l = function () {
        return u.apply(l, arguments);
      };
    return (Object.setPrototypeOf(l, r), l);
  },
  Io = {}.hasOwnProperty;
class gt extends Co {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = wo()));
  }
  copy() {
    const n = new gt();
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return (n.data(Ke(!0, {}, this.namespace)), n);
  }
  data(n, t) {
    return typeof n == 'string'
      ? arguments.length === 2
        ? (tt('data', this.frozen), (this.namespace[n] = t), this)
        : (Io.call(this.namespace, n) && this.namespace[n]) || void 0
      : n
        ? (tt('data', this.frozen), (this.namespace = n), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const n = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const u = t.call(n, ...r);
      typeof u == 'function' && this.transformers.use(u);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(n) {
    this.freeze();
    const t = Re(n),
      r = this.parser || this.Parser;
    return (Xe('parse', r), r(String(t), t));
  }
  process(n, t) {
    const r = this;
    return (
      this.freeze(),
      Xe('process', this.parser || this.Parser),
      et('process', this.compiler || this.Compiler),
      t ? u(void 0, t) : new Promise(u)
    );
    function u(l, i) {
      const o = Re(n),
        s = r.parse(o);
      r.run(s, o, function (f, c, p) {
        if (f || !c || !p) return a(f);
        const h = c,
          k = r.stringify(h, p);
        (zo(k) ? (p.value = k) : (p.result = k), a(f, p));
      });
      function a(f, c) {
        f || !c ? i(f) : l ? l(c) : t(void 0, c);
      }
    }
  }
  processSync(n) {
    let t = !1,
      r;
    return (
      this.freeze(),
      Xe('processSync', this.parser || this.Parser),
      et('processSync', this.compiler || this.Compiler),
      this.process(n, u),
      Ut('processSync', 'process', t),
      r
    );
    function u(l, i) {
      ((t = !0), Vt(l), (r = i));
    }
  }
  run(n, t, r) {
    ($t(n), this.freeze());
    const u = this.transformers;
    return (
      !r && typeof t == 'function' && ((r = t), (t = void 0)),
      r ? l(void 0, r) : new Promise(l)
    );
    function l(i, o) {
      const s = Re(t);
      u.run(n, s, a);
      function a(f, c, p) {
        const h = c || n;
        f ? o(f) : i ? i(h) : r(void 0, h, p);
      }
    }
  }
  runSync(n, t) {
    let r = !1,
      u;
    return (this.run(n, t, l), Ut('runSync', 'run', r), u);
    function l(i, o) {
      (Vt(i), (u = o), (r = !0));
    }
  }
  stringify(n, t) {
    this.freeze();
    const r = Re(t),
      u = this.compiler || this.Compiler;
    return (et('stringify', u), $t(n), u(n, r));
  }
  use(n, ...t) {
    const r = this.attachers,
      u = this.namespace;
    if ((tt('use', this.frozen), n != null))
      if (typeof n == 'function') s(n, t);
      else if (typeof n == 'object') Array.isArray(n) ? o(n) : i(n);
      else throw new TypeError('Expected usable value, not `' + n + '`');
    return this;
    function l(a) {
      if (typeof a == 'function') s(a, []);
      else if (typeof a == 'object')
        if (Array.isArray(a)) {
          const [f, ...c] = a;
          s(f, c);
        } else i(a);
      else throw new TypeError('Expected usable value, not `' + a + '`');
    }
    function i(a) {
      if (!('plugins' in a) && !('settings' in a))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
        );
      (o(a.plugins), a.settings && (u.settings = Ke(!0, u.settings, a.settings)));
    }
    function o(a) {
      let f = -1;
      if (a != null)
        if (Array.isArray(a))
          for (; ++f < a.length; ) {
            const c = a[f];
            l(c);
          }
        else throw new TypeError('Expected a list of plugins, not `' + a + '`');
    }
    function s(a, f) {
      let c = -1,
        p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === a) {
          p = c;
          break;
        }
      if (p === -1) r.push([a, ...f]);
      else if (f.length > 0) {
        let [h, ...k] = f;
        const w = r[p][1];
        (at(w) && at(h) && (h = Ke(!0, w, h)), (r[p] = [a, h, ...k]));
      }
    }
  }
}
const Ro = new gt().freeze();
function Xe(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `parser`');
}
function et(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `compiler`');
}
function tt(e, n) {
  if (n)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function $t(e) {
  if (!at(e) || typeof e.type != 'string') throw new TypeError('Expected node, got `' + e + '`');
}
function Ut(e, n, t) {
  if (!t) throw new Error('`' + e + '` finished async. Use `' + n + '` instead');
}
function Re(e) {
  return Eo(e) ? e : new or(e);
}
function Eo(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e);
}
function zo(e) {
  return typeof e == 'string' || Ao(e);
}
function Ao(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
export {
  si as A,
  Pi as B,
  Fe as C,
  Kr as D,
  cn as E,
  Yn as S,
  G as V,
  or as a,
  Po as b,
  q as c,
  He as d,
  cr as e,
  R as f,
  _o as g,
  Ne as h,
  Qt as i,
  Y as j,
  ht as k,
  Xr as l,
  T as m,
  Ae as n,
  Lo as o,
  K as p,
  _ as q,
  Do as r,
  J as s,
  de as t,
  Ro as u,
  Zn as v,
  W as w,
  Pe as x,
  hn as y,
  ei as z,
};
