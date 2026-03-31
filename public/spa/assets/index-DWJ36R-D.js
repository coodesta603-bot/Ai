import { c as M, p, o as v, d as L, s as $ } from './index-BGyEEg7z.js';
const g = { eof: null, asterisk: 42, underscore: 95 },
  w = { characterGroupPunctuation: 2, characterGroupWhitespace: 1 },
  d = {
    emphasis: 'emphasis',
    emphasisSequence: 'emphasisSequence',
    emphasisText: 'emphasisText',
    strong: 'strong',
    strongSequence: 'strongSequence',
    strongText: 'strongText',
  },
  I = [
    161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208,
    208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252,
    254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319,
    322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466,
    468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713,
    715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961,
    963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221,
    8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308,
    8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470,
    8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585,
    8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712,
    8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741,
    8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801,
    8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869,
    8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633,
    9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681,
    9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792,
    9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919,
    9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977,
    9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743,
    65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373,
    127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109,
  ],
  W = [12288, 12288, 65281, 65376, 65504, 65510],
  A = [
    8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518,
  ],
  G = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630],
  b = [
    4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749,
    9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918,
    9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981,
    9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071,
    10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904,
    11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543,
    12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128,
    42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126,
    65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576,
    110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933,
    110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183,
    127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568,
    127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904,
    127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066,
    128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420,
    128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732,
    128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340,
    129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741,
    129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141,
  ],
  C = (e, t) => {
    let r = 0,
      n = Math.floor(e.length / 2) - 1;
    for (; r <= n; ) {
      const i = Math.floor((r + n) / 2),
        s = i * 2;
      if (t < e[s]) n = i - 1;
      else if (t > e[s + 1]) r = i + 1;
      else return !0;
    }
    return !1;
  },
  D = I[0],
  J = I.at(-1),
  K = W[0],
  Q = W.at(-1),
  X = A[0],
  Y = A.at(-1),
  Z = G[0],
  e1 = G.at(-1),
  t1 = b[0],
  r1 = b.at(-1),
  T = 19968,
  [n1, i1] = s1(b);
function s1(e) {
  let t = e[0],
    r = e[1];
  for (let n = 0; n < e.length; n += 2) {
    const i = e[n],
      s = e[n + 1];
    if (T >= i && T <= s) return [i, s];
    s - i > r - t && ((t = i), (r = s));
  }
  return [t, r];
}
const u1 = (e) => (e < D || e > J ? !1 : C(I, e)),
  o1 = (e) => (e < K || e > Q ? !1 : C(W, e)),
  a1 = (e) => (e < X || e > Y ? !1 : C(A, e)),
  f1 = (e) => (e < Z || e > e1 ? !1 : C(G, e)),
  c1 = (e) => (e >= n1 && e <= i1 ? !0 : e < t1 || e > r1 ? !1 : C(b, e));
function l1(e) {
  return u1(e)
    ? 'ambiguous'
    : o1(e)
      ? 'fullwidth'
      : a1(e)
        ? 'halfwidth'
        : f1(e)
          ? 'narrow'
          : c1(e)
            ? 'wide'
            : 'neutral';
}
function h1(e) {
  if (!Number.isSafeInteger(e)) throw new TypeError(`Expected a code point, got \`${typeof e}\`.`);
}
function d1(e) {
  return (h1(e), l1(e));
}
var m1 = Object.defineProperty,
  p1 = (e, t, r) =>
    t in e ? m1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  g1 = (e, t, r) => p1(e, t + '', r);
function C1(e) {
  return new RegExp('^\\p{Emoji_Presentation}', 'u').test(String.fromCodePoint(e));
}
function S1(e) {
  if (!e || e < 4352) return !1;
  switch (d1(e)) {
    case 'fullwidth':
    case 'halfwidth':
      return !0;
    case 'wide':
      return !C1(e);
    case 'narrow':
      return !1;
    case 'ambiguous':
      return 917760 <= e && e <= 917999 ? null : !1;
    case 'neutral':
      return new RegExp('^\\p{sc=Hangul}', 'u').test(String.fromCodePoint(e));
  }
}
function k1(e, t) {
  return t !== 65025 || !e || e < 8216 ? !1 : e === 8216 || e === 8217 || e === 8220 || e === 8221;
}
function w1(e) {
  return e !== null && e >= 65024 && e <= 65038;
}
var b1 = z(new RegExp('\\p{P}|\\p{S}', 'u')),
  j1 = z(/\s/);
function z(e) {
  return t;
  function t(r) {
    return r !== null && r > -1 && e.test(String.fromCodePoint(r));
  }
}
var a;
((e) => {
  ((e.spaceOrPunctuation = 3),
    (e.cjk = 4096),
    (e.cjkPunctuation = 4098),
    (e.ivs = 8192),
    (e.cjkOrIvs = 12288),
    (e.nonEmojiGeneralUseVS = 16384),
    (e.variationSelector = 24576),
    (e.ivsToCjkRightShift = 1));
})(a || (a = {}));
function _(e) {
  if (e === g.eof || M(e) || j1(e)) return w.characterGroupWhitespace;
  let t = 0;
  if (e >= 4352) {
    if (w1(e)) return a.nonEmojiGeneralUseVS;
    switch (S1(e)) {
      case null:
        return a.ivs;
      case !0:
        t |= a.cjk;
        break;
    }
  }
  return (b1(e) && (t |= w.characterGroupPunctuation), t);
}
function P1(e, t, r) {
  if (!I1(e)) return e;
  const n = t(),
    i = _(n);
  return !n || y(i) ? e : k1(n, r) ? a.cjkPunctuation : x1(i);
}
function x1(e) {
  return e & ~a.ivs;
}
function y(e) {
  return !!(e & w.characterGroupWhitespace);
}
function F(e) {
  return (e & a.cjkPunctuation) === w.characterGroupPunctuation;
}
function _1(e) {
  return !!(e & a.cjk);
}
function y1(e) {
  return !!(e & a.cjkOrIvs);
}
function I1(e) {
  return e === a.nonEmojiGeneralUseVS;
}
function V(e) {
  return !!(e & a.spaceOrPunctuation);
}
function W1(e) {
  return !!(e && e >= 55296 && e <= 56319);
}
function A1(e) {
  return !!(e && e >= 56320 && e <= 57343);
}
function G1(e, t, r) {
  if (t._bufferIndex < 2) return e;
  const i = r({ start: { ...t, _bufferIndex: t._bufferIndex - 2 }, end: t }).codePointAt(0);
  return i && i >= 65536 ? i : e;
}
function q1(e, t, r) {
  const n = e >= 65536 ? 2 : 1;
  if (t._bufferIndex < 1 + n) return null;
  const i = t._bufferIndex - n - 2,
    s = r({
      start: { ...t, _bufferIndex: i >= 0 ? i : 0 },
      end: { ...t, _bufferIndex: t._bufferIndex - n },
    }),
    o = s.charCodeAt(s.length - 1);
  if (Number.isNaN(o)) return null;
  if (s.length < 2 || o < 56320 || 57343 < o) return o;
  const f = s.codePointAt(0);
  return f && f >= 65536 ? f : o;
}
var N1 = class {
  constructor(e, t, r) {
    ((this.previousCode = e),
      (this.nowPoint = t),
      (this.sliceSerialize = r),
      g1(this, 'cachedValue'));
  }
  value() {
    return (
      this.cachedValue === void 0 &&
        (this.cachedValue = q1(this.previousCode, this.nowPoint, this.sliceSerialize)),
      this.cachedValue
    );
  }
};
function B1(e, t, r) {
  const n = r({ start: t, end: { ...t, _bufferIndex: t._bufferIndex + 2 } }).codePointAt(0);
  return n && n >= 65536 ? n : e;
}
var x = { name: 'attention', resolveAll: E1, tokenize: O1 };
function E1(e, t) {
  let r = -1,
    n,
    i,
    s,
    o,
    f,
    c,
    u,
    h;
  for (; ++r < e.length; )
    if (e[r][0] === 'enter' && e[r][1].type === 'attentionSequence' && e[r][1]._close) {
      for (n = r; n--; )
        if (
          e[n][0] === 'exit' &&
          e[n][1].type === 'attentionSequence' &&
          e[n][1]._open &&
          t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[r][1]).charCodeAt(0)
        ) {
          if (
            (e[n][1]._close || e[r][1]._open) &&
            (e[r][1].end.offset - e[r][1].start.offset) % 3 &&
            !(
              (e[n][1].end.offset -
                e[n][1].start.offset +
                e[r][1].end.offset -
                e[r][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[n][1].end.offset - e[n][1].start.offset > 1 &&
            e[r][1].end.offset - e[r][1].start.offset > 1
              ? 2
              : 1;
          const S = { ...e[n][1].end },
            m = { ...e[r][1].start };
          (R(S, -c),
            R(m, c),
            (o = {
              type: c > 1 ? d.strongSequence : d.emphasisSequence,
              start: S,
              end: { ...e[n][1].end },
            }),
            (f = {
              type: c > 1 ? d.strongSequence : d.emphasisSequence,
              start: { ...e[r][1].start },
              end: m,
            }),
            (s = {
              type: c > 1 ? d.strongText : d.emphasisText,
              start: { ...e[n][1].end },
              end: { ...e[r][1].start },
            }),
            (i = { type: c > 1 ? d.strong : d.emphasis, start: { ...o.start }, end: { ...f.end } }),
            (e[n][1].end = { ...o.start }),
            (e[r][1].start = { ...f.end }),
            (u = []),
            e[n][1].end.offset - e[n][1].start.offset &&
              (u = p(u, [
                ['enter', e[n][1], t],
                ['exit', e[n][1], t],
              ])),
            (u = p(u, [
              ['enter', i, t],
              ['enter', o, t],
              ['exit', o, t],
              ['enter', s, t],
            ])),
            v(t.parser.constructs.insideSpan.null),
            (u = p(u, L(t.parser.constructs.insideSpan.null, e.slice(n + 1, r), t))),
            (u = p(u, [
              ['exit', s, t],
              ['enter', f, t],
              ['exit', f, t],
              ['exit', i, t],
            ])),
            e[r][1].end.offset - e[r][1].start.offset
              ? ((h = 2),
                (u = p(u, [
                  ['enter', e[r][1], t],
                  ['exit', e[r][1], t],
                ])))
              : (h = 0),
            $(e, n - 1, r - n + 3, u),
            (r = n + u.length - h - 2));
          break;
        }
    }
  for (r = -1; ++r < e.length; ) e[r][1].type === 'attentionSequence' && (e[r][1].type = 'data');
  return e;
}
function O1(e, t) {
  const r = this.parser.constructs.attentionMarkers.null,
    { now: n, sliceSerialize: i, previous: s } = this,
    o = A1(s) ? G1(s, n(), i) : s,
    f = _(o),
    c = new N1(o, n(), i),
    u = P1(f, c.value.bind(c), o);
  let h;
  return S;
  function S(l) {
    return ((h = l), e.enter('attentionSequence'), m(l));
  }
  function m(l) {
    if (l === h) return (e.consume(l), m);
    const q = e.exit('attentionSequence'),
      U = W1(l) ? B1(l, n(), i) : l,
      k = _(U),
      N = F(u),
      B = N || y(u),
      E = F(k),
      O = E || y(k),
      H = y1(u),
      j = !O || (E && (B || H)) || r.includes(l),
      P = !B || (N && (O || _1(k))) || r.includes(o);
    return (
      (q._open = !!(h === g.asterisk ? j : j && (V(u) || !P))),
      (q._close = !!(h === g.asterisk ? P : P && (V(k) || !j))),
      t(l)
    );
  }
}
function R(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
function T1() {
  return { text: { [g.asterisk]: x, [g.underscore]: x }, insideSpan: { null: [x] } };
}
function V1() {
  const e = this.data();
  (e.micromarkExtensions || (e.micromarkExtensions = [])).push(T1());
}
export { V1 as r };
