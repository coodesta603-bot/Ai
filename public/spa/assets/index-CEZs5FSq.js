import { R as g, _ as ne, r as ae } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { _ as G, R as Re } from './ReloadOutlined-Cfln6sz3.js';
import {
  d2 as J,
  d3 as j,
  e3 as v,
  ct as Me,
  e4 as oe,
  e5 as we,
  e6 as pe,
  bh as Se,
  aG as Ae,
  b8 as Ne,
  b9 as ye,
  ba as be,
  bN as Pe,
  dl as ke,
  bb as Ie,
  be as Le,
  cV as ze,
  bS as Oe,
} from './index-C8UyLGsD.js';
import { u as Fe, o as Be, c as re } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as Te } from './index-Bc7JilPY.js';
var W, K;
function b(a, o, e) {
  if (o < 0 || o > 31 || a >>> o) throw new RangeError('Value out of range');
  for (var t = o - 1; t >= 0; t--) e.push((a >>> t) & 1);
}
function _(a, o) {
  return ((a >>> o) & 1) != 0;
}
function I(a) {
  if (!a) throw new Error('Assertion error');
}
var T = (function () {
  function a(o, e) {
    (j(this, a),
      v(this, 'modeBits', void 0),
      v(this, 'numBitsCharCount', void 0),
      (this.modeBits = o),
      (this.numBitsCharCount = e));
  }
  return (
    J(a, [
      {
        key: 'numCharCountBits',
        value: function (e) {
          return this.numBitsCharCount[Math.floor((e + 7) / 17)];
        },
      },
    ]),
    a
  );
})();
W = T;
v(T, 'NUMERIC', new W(1, [10, 12, 14]));
v(T, 'ALPHANUMERIC', new W(2, [9, 11, 13]));
v(T, 'BYTE', new W(4, [8, 16, 16]));
v(T, 'KANJI', new W(8, [8, 10, 12]));
v(T, 'ECI', new W(7, [0, 0, 0]));
var z = J(function a(o, e) {
  (j(this, a),
    v(this, 'ordinal', void 0),
    v(this, 'formatBits', void 0),
    (this.ordinal = o),
    (this.formatBits = e));
});
K = z;
v(z, 'LOW', new K(0, 1));
v(z, 'MEDIUM', new K(1, 0));
v(z, 'QUARTILE', new K(2, 3));
v(z, 'HIGH', new K(3, 2));
var Q = (function () {
  function a(o, e, t) {
    if (
      (j(this, a),
      v(this, 'mode', void 0),
      v(this, 'numChars', void 0),
      v(this, 'bitData', void 0),
      (this.mode = o),
      (this.numChars = e),
      (this.bitData = t),
      e < 0)
    )
      throw new RangeError('Invalid argument');
    this.bitData = t.slice();
  }
  return (
    J(
      a,
      [
        {
          key: 'getData',
          value: function () {
            return this.bitData.slice();
          },
        },
      ],
      [
        {
          key: 'makeBytes',
          value: function (e) {
            var t = [],
              r = G(e),
              n;
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var i = n.value;
                b(i, 8, t);
              }
            } catch (s) {
              r.e(s);
            } finally {
              r.f();
            }
            return new a(T.BYTE, e.length, t);
          },
        },
        {
          key: 'makeNumeric',
          value: function (e) {
            if (!a.isNumeric(e)) throw new RangeError('String contains non-numeric characters');
            for (var t = [], r = 0; r < e.length; ) {
              var n = Math.min(e.length - r, 3);
              (b(parseInt(e.substring(r, r + n), 10), n * 3 + 1, t), (r += n));
            }
            return new a(T.NUMERIC, e.length, t);
          },
        },
        {
          key: 'makeAlphanumeric',
          value: function (e) {
            if (!a.isAlphanumeric(e))
              throw new RangeError('String contains unencodable characters in alphanumeric mode');
            var t = [],
              r;
            for (r = 0; r + 2 <= e.length; r += 2) {
              var n = a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)) * 45;
              ((n += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1))), b(n, 11, t));
            }
            return (
              r < e.length && b(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, t),
              new a(T.ALPHANUMERIC, e.length, t)
            );
          },
        },
        {
          key: 'makeSegments',
          value: function (e) {
            return e == ''
              ? []
              : a.isNumeric(e)
                ? [a.makeNumeric(e)]
                : a.isAlphanumeric(e)
                  ? [a.makeAlphanumeric(e)]
                  : [a.makeBytes(a.toUtf8ByteArray(e))];
          },
        },
        {
          key: 'makeEci',
          value: function (e) {
            var t = [];
            if (e < 0) throw new RangeError('ECI assignment value out of range');
            if (e < 128) b(e, 8, t);
            else if (e < 16384) (b(2, 2, t), b(e, 14, t));
            else if (e < 1e6) (b(6, 3, t), b(e, 21, t));
            else throw new RangeError('ECI assignment value out of range');
            return new a(T.ECI, 0, t);
          },
        },
        {
          key: 'isNumeric',
          value: function (e) {
            return a.NUMERIC_REGEX.test(e);
          },
        },
        {
          key: 'isAlphanumeric',
          value: function (e) {
            return a.ALPHANUMERIC_REGEX.test(e);
          },
        },
        {
          key: 'getTotalBits',
          value: function (e, t) {
            var r = 0,
              n = G(e),
              i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var s = i.value,
                  l = s.mode.numCharCountBits(t);
                if (s.numChars >= 1 << l) return 1 / 0;
                r += 4 + l + s.bitData.length;
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
            return r;
          },
        },
        {
          key: 'toUtf8ByteArray',
          value: function (e) {
            for (var t = encodeURI(e), r = [], n = 0; n < t.length; n++)
              t.charAt(n) != '%'
                ? r.push(t.charCodeAt(n))
                : (r.push(parseInt(t.substring(n + 1, n + 3), 16)), (n += 2));
            return r;
          },
        },
      ],
    ),
    a
  );
})();
v(Q, 'NUMERIC_REGEX', /^[0-9]*$/);
v(Q, 'ALPHANUMERIC_REGEX', /^[A-Z0-9 $%*+.\/:-]*$/);
v(Q, 'ALPHANUMERIC_CHARSET', '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:');
var D = (function () {
  function a(o, e, t, r) {
    (j(this, a),
      v(this, 'size', void 0),
      v(this, 'mask', void 0),
      v(this, 'modules', []),
      v(this, 'isFunction', []),
      v(this, 'version', void 0),
      v(this, 'errorCorrectionLevel', void 0));
    var n = r;
    if (
      ((this.version = o), (this.errorCorrectionLevel = e), o < a.MIN_VERSION || o > a.MAX_VERSION)
    )
      throw new RangeError('Version value out of range');
    if (n < -1 || n > 7) throw new RangeError('Mask value out of range');
    this.size = o * 4 + 17;
    for (var i = [], s = 0; s < this.size; s++) i.push(!1);
    for (var l = 0; l < this.size; l++)
      (this.modules.push(i.slice()), this.isFunction.push(i.slice()));
    this.drawFunctionPatterns();
    var u = this.addEccAndInterleave(t);
    if ((this.drawCodewords(u), n == -1))
      for (var c = 1e9, h = 0; h < 8; h++) {
        (this.applyMask(h), this.drawFormatBits(h));
        var d = this.getPenaltyScore();
        (d < c && ((n = h), (c = d)), this.applyMask(h));
      }
    (I(0 <= n && n <= 7),
      (this.mask = n),
      this.applyMask(n),
      this.drawFormatBits(n),
      (this.isFunction = []));
  }
  return (
    J(
      a,
      [
        {
          key: 'getModule',
          value: function (e, t) {
            return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e];
          },
        },
        {
          key: 'getModules',
          value: function () {
            return this.modules;
          },
        },
        {
          key: 'drawFunctionPatterns',
          value: function () {
            for (var e = 0; e < this.size; e++)
              (this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0));
            (this.drawFinderPattern(3, 3),
              this.drawFinderPattern(this.size - 4, 3),
              this.drawFinderPattern(3, this.size - 4));
            for (var t = this.getAlignmentPatternPositions(), r = t.length, n = 0; n < r; n++)
              for (var i = 0; i < r; i++)
                (n == 0 && i == 0) ||
                  (n == 0 && i == r - 1) ||
                  (n == r - 1 && i == 0) ||
                  this.drawAlignmentPattern(t[n], t[i]);
            (this.drawFormatBits(0), this.drawVersion());
          },
        },
        {
          key: 'drawFormatBits',
          value: function (e) {
            for (var t = (this.errorCorrectionLevel.formatBits << 3) | e, r = t, n = 0; n < 10; n++)
              r = (r << 1) ^ ((r >>> 9) * 1335);
            var i = ((t << 10) | r) ^ 21522;
            I(i >>> 15 == 0);
            for (var s = 0; s <= 5; s++) this.setFunctionModule(8, s, _(i, s));
            (this.setFunctionModule(8, 7, _(i, 6)),
              this.setFunctionModule(8, 8, _(i, 7)),
              this.setFunctionModule(7, 8, _(i, 8)));
            for (var l = 9; l < 15; l++) this.setFunctionModule(14 - l, 8, _(i, l));
            for (var u = 0; u < 8; u++) this.setFunctionModule(this.size - 1 - u, 8, _(i, u));
            for (var c = 8; c < 15; c++) this.setFunctionModule(8, this.size - 15 + c, _(i, c));
            this.setFunctionModule(8, this.size - 8, !0);
          },
        },
        {
          key: 'drawVersion',
          value: function () {
            if (!(this.version < 7)) {
              for (var e = this.version, t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973);
              var r = (this.version << 12) | e;
              I(r >>> 18 == 0);
              for (var n = 0; n < 18; n++) {
                var i = _(r, n),
                  s = this.size - 11 + (n % 3),
                  l = Math.floor(n / 3);
                (this.setFunctionModule(s, l, i), this.setFunctionModule(l, s, i));
              }
            }
          },
        },
        {
          key: 'drawFinderPattern',
          value: function (e, t) {
            for (var r = -4; r <= 4; r++)
              for (var n = -4; n <= 4; n++) {
                var i = Math.max(Math.abs(n), Math.abs(r)),
                  s = e + n,
                  l = t + r;
                0 <= s &&
                  s < this.size &&
                  0 <= l &&
                  l < this.size &&
                  this.setFunctionModule(s, l, i != 2 && i != 4);
              }
          },
        },
        {
          key: 'drawAlignmentPattern',
          value: function (e, t) {
            for (var r = -2; r <= 2; r++)
              for (var n = -2; n <= 2; n++)
                this.setFunctionModule(e + n, t + r, Math.max(Math.abs(n), Math.abs(r)) != 1);
          },
        },
        {
          key: 'setFunctionModule',
          value: function (e, t, r) {
            ((this.modules[t][e] = r), (this.isFunction[t][e] = !0));
          },
        },
        {
          key: 'addEccAndInterleave',
          value: function (e) {
            var t = this.version,
              r = this.errorCorrectionLevel;
            if (e.length != a.getNumDataCodewords(t, r)) throw new RangeError('Invalid argument');
            for (
              var n = a.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],
                i = a.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],
                s = Math.floor(a.getNumRawDataModules(t) / 8),
                l = n - (s % n),
                u = Math.floor(s / n),
                c = [],
                h = a.reedSolomonComputeDivisor(i),
                d = 0,
                m = 0;
              d < n;
              d++
            ) {
              var C = e.slice(m, m + u - i + (d < l ? 0 : 1));
              m += C.length;
              var M = a.reedSolomonComputeRemainder(C, h);
              (d < l && C.push(0), c.push(C.concat(M)));
            }
            for (
              var f = [],
                E = function (R) {
                  c.forEach(function (w, A) {
                    (R != u - i || A >= l) && f.push(w[R]);
                  });
                },
                S = 0;
              S < c[0].length;
              S++
            )
              E(S);
            return (I(f.length == s), f);
          },
        },
        {
          key: 'drawCodewords',
          value: function (e) {
            if (e.length != Math.floor(a.getNumRawDataModules(this.version) / 8))
              throw new RangeError('Invalid argument');
            for (var t = 0, r = this.size - 1; r >= 1; r -= 2) {
              r == 6 && (r = 5);
              for (var n = 0; n < this.size; n++)
                for (var i = 0; i < 2; i++) {
                  var s = r - i,
                    l = ((r + 1) & 2) == 0,
                    u = l ? this.size - 1 - n : n;
                  !this.isFunction[u][s] &&
                    t < e.length * 8 &&
                    ((this.modules[u][s] = _(e[t >>> 3], 7 - (t & 7))), t++);
                }
            }
            I(t == e.length * 8);
          },
        },
        {
          key: 'applyMask',
          value: function (e) {
            if (e < 0 || e > 7) throw new RangeError('Mask value out of range');
            for (var t = 0; t < this.size; t++)
              for (var r = 0; r < this.size; r++) {
                var n = void 0;
                switch (e) {
                  case 0:
                    n = (r + t) % 2 == 0;
                    break;
                  case 1:
                    n = t % 2 == 0;
                    break;
                  case 2:
                    n = r % 3 == 0;
                    break;
                  case 3:
                    n = (r + t) % 3 == 0;
                    break;
                  case 4:
                    n = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                    break;
                  case 5:
                    n = ((r * t) % 2) + ((r * t) % 3) == 0;
                    break;
                  case 6:
                    n = (((r * t) % 2) + ((r * t) % 3)) % 2 == 0;
                    break;
                  case 7:
                    n = (((r + t) % 2) + ((r * t) % 3)) % 2 == 0;
                    break;
                  default:
                    throw new Error('Unreachable');
                }
                !this.isFunction[t][r] && n && (this.modules[t][r] = !this.modules[t][r]);
              }
          },
        },
        {
          key: 'getPenaltyScore',
          value: function () {
            for (var e = 0, t = 0; t < this.size; t++) {
              for (var r = !1, n = 0, i = [0, 0, 0, 0, 0, 0, 0], s = 0; s < this.size; s++)
                this.modules[t][s] == r
                  ? (n++, n == 5 ? (e += a.PENALTY_N1) : n > 5 && e++)
                  : (this.finderPenaltyAddHistory(n, i),
                    r || (e += this.finderPenaltyCountPatterns(i) * a.PENALTY_N3),
                    (r = this.modules[t][s]),
                    (n = 1));
              e += this.finderPenaltyTerminateAndCount(r, n, i) * a.PENALTY_N3;
            }
            for (var l = 0; l < this.size; l++) {
              for (var u = !1, c = 0, h = [0, 0, 0, 0, 0, 0, 0], d = 0; d < this.size; d++)
                this.modules[d][l] == u
                  ? (c++, c == 5 ? (e += a.PENALTY_N1) : c > 5 && e++)
                  : (this.finderPenaltyAddHistory(c, h),
                    u || (e += this.finderPenaltyCountPatterns(h) * a.PENALTY_N3),
                    (u = this.modules[d][l]),
                    (c = 1));
              e += this.finderPenaltyTerminateAndCount(u, c, h) * a.PENALTY_N3;
            }
            for (var m = 0; m < this.size - 1; m++)
              for (var C = 0; C < this.size - 1; C++) {
                var M = this.modules[m][C];
                M == this.modules[m][C + 1] &&
                  M == this.modules[m + 1][C] &&
                  M == this.modules[m + 1][C + 1] &&
                  (e += a.PENALTY_N2);
              }
            var f = 0,
              E = G(this.modules),
              S;
            try {
              for (E.s(); !(S = E.n()).done; ) {
                var P = S.value;
                f = P.reduce(function (A, y) {
                  return A + (y ? 1 : 0);
                }, f);
              }
            } catch (A) {
              E.e(A);
            } finally {
              E.f();
            }
            var R = this.size * this.size,
              w = Math.ceil(Math.abs(f * 20 - R * 10) / R) - 1;
            return (I(0 <= w && w <= 9), (e += w * a.PENALTY_N4), I(0 <= e && e <= 2568888), e);
          },
        },
        {
          key: 'getAlignmentPatternPositions',
          value: function () {
            if (this.version == 1) return [];
            for (
              var e = Math.floor(this.version / 7) + 2,
                t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2,
                r = [6],
                n = this.size - 7;
              r.length < e;
              n -= t
            )
              r.splice(1, 0, n);
            return r;
          },
        },
        {
          key: 'finderPenaltyCountPatterns',
          value: function (e) {
            var t = e[1];
            I(t <= this.size * 3);
            var r = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
            return (
              (r && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (r && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
            );
          },
        },
        {
          key: 'finderPenaltyTerminateAndCount',
          value: function (e, t, r) {
            var n = t;
            return (
              e && (this.finderPenaltyAddHistory(n, r), (n = 0)),
              (n += this.size),
              this.finderPenaltyAddHistory(n, r),
              this.finderPenaltyCountPatterns(r)
            );
          },
        },
        {
          key: 'finderPenaltyAddHistory',
          value: function (e, t) {
            var r = e;
            (t[0] == 0 && (r += this.size), t.pop(), t.unshift(r));
          },
        },
      ],
      [
        {
          key: 'encodeText',
          value: function (e, t) {
            var r = Q.makeSegments(e);
            return a.encodeSegments(r, t);
          },
        },
        {
          key: 'encodeBinary',
          value: function (e, t) {
            var r = Q.makeBytes(e);
            return a.encodeSegments([r], t);
          },
        },
        {
          key: 'encodeSegments',
          value: function (e, t) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
              n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 40,
              i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1,
              s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
            if (!(a.MIN_VERSION <= r && r <= n && n <= a.MAX_VERSION) || i < -1 || i > 7)
              throw new RangeError('Invalid value');
            var l, u;
            for (l = r; ; l++) {
              var c = a.getNumDataCodewords(l, t) * 8,
                h = Q.getTotalBits(e, l);
              if (h <= c) {
                u = h;
                break;
              }
              if (l >= n) throw new RangeError('Data too long');
            }
            for (var d = t, m = 0, C = [z.MEDIUM, z.QUARTILE, z.HIGH]; m < C.length; m++) {
              var M = C[m];
              s && u <= a.getNumDataCodewords(l, M) * 8 && (d = M);
            }
            var f = [],
              E = G(e),
              S;
            try {
              for (E.s(); !(S = E.n()).done; ) {
                var P = S.value;
                (b(P.mode.modeBits, 4, f), b(P.numChars, P.mode.numCharCountBits(l), f));
                var R = G(P.getData()),
                  w;
                try {
                  for (R.s(); !(w = R.n()).done; ) {
                    var A = w.value;
                    f.push(A);
                  }
                } catch (k) {
                  R.e(k);
                } finally {
                  R.f();
                }
              }
            } catch (k) {
              E.e(k);
            } finally {
              E.f();
            }
            I(f.length == u);
            var y = a.getNumDataCodewords(l, d) * 8;
            (I(f.length <= y),
              b(0, Math.min(4, y - f.length), f),
              b(0, (8 - (f.length % 8)) % 8, f),
              I(f.length % 8 == 0));
            for (var N = 236; f.length < y; N ^= 253) b(N, 8, f);
            for (var O = []; O.length * 8 < f.length; ) O.push(0);
            return (
              f.forEach(function (k, F) {
                O[F >>> 3] |= k << (7 - (F & 7));
              }),
              new a(l, d, O, i)
            );
          },
        },
        {
          key: 'getNumRawDataModules',
          value: function (e) {
            if (e < a.MIN_VERSION || e > a.MAX_VERSION)
              throw new RangeError('Version number out of range');
            var t = (16 * e + 128) * e + 64;
            if (e >= 2) {
              var r = Math.floor(e / 7) + 2;
              ((t -= (25 * r - 10) * r - 55), e >= 7 && (t -= 36));
            }
            return (I(208 <= t && t <= 29648), t);
          },
        },
        {
          key: 'getNumDataCodewords',
          value: function (e, t) {
            return (
              Math.floor(a.getNumRawDataModules(e) / 8) -
              a.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e] * a.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]
            );
          },
        },
        {
          key: 'reedSolomonComputeDivisor',
          value: function (e) {
            if (e < 1 || e > 255) throw new RangeError('Degree out of range');
            for (var t = [], r = 0; r < e - 1; r++) t.push(0);
            t.push(1);
            for (var n = 1, i = 0; i < e; i++) {
              for (var s = 0; s < t.length; s++)
                ((t[s] = a.reedSolomonMultiply(t[s], n)), s + 1 < t.length && (t[s] ^= t[s + 1]));
              n = a.reedSolomonMultiply(n, 2);
            }
            return t;
          },
        },
        {
          key: 'reedSolomonComputeRemainder',
          value: function (e, t) {
            var r = t.map(function () {
                return 0;
              }),
              n = G(e),
              i;
            try {
              var s = function () {
                var u = i.value,
                  c = u ^ r.shift();
                (r.push(0),
                  t.forEach(function (h, d) {
                    r[d] ^= a.reedSolomonMultiply(h, c);
                  }));
              };
              for (n.s(); !(i = n.n()).done; ) s();
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
            return r;
          },
        },
        {
          key: 'reedSolomonMultiply',
          value: function (e, t) {
            if (e >>> 8 || t >>> 8) throw new RangeError('Byte out of range');
            for (var r = 0, n = 7; n >= 0; n--)
              ((r = (r << 1) ^ ((r >>> 7) * 285)), (r ^= ((t >>> n) & 1) * e));
            return (I(r >>> 8 == 0), r);
          },
        },
      ],
    ),
    a
  );
})();
v(D, 'MIN_VERSION', 1);
v(D, 'MAX_VERSION', 40);
v(D, 'PENALTY_N1', 3);
v(D, 'PENALTY_N2', 3);
v(D, 'PENALTY_N3', 40);
v(D, 'PENALTY_N4', 10);
v(D, 'ECC_CODEWORDS_PER_BLOCK', [
  [
    -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30,
    30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
  ],
  [
    -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28,
    28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
  ],
  [
    -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30,
    30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
  ],
  [
    -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
  ],
]);
v(D, 'NUM_ERROR_CORRECTION_BLOCKS', [
  [
    -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14,
    15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
  ],
  [
    -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23,
    25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49,
  ],
  [
    -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34,
    34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68,
  ],
  [
    -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35,
    37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81,
  ],
]);
var _e = { L: z.LOW, M: z.MEDIUM, Q: z.QUARTILE, H: z.HIGH },
  ie = 128,
  se = 'L',
  le = '#FFFFFF',
  ue = '#000000',
  ce = !1,
  de = 1,
  De = 4,
  Ue = 0,
  $e = 0.1,
  he = function (o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      t = [];
    return (
      o.forEach(function (r, n) {
        var i = null;
        r.forEach(function (s, l) {
          if (!s && i !== null) {
            (t.push(
              'M'
                .concat(i + e, ' ')
                .concat(n + e, 'h')
                .concat(l - i, 'v1H')
                .concat(i + e, 'z'),
            ),
              (i = null));
            return;
          }
          if (l === r.length - 1) {
            if (!s) return;
            i === null
              ? t.push(
                  'M'
                    .concat(l + e, ',')
                    .concat(n + e, ' h1v1H')
                    .concat(l + e, 'z'),
                )
              : t.push(
                  'M'
                    .concat(i + e, ',')
                    .concat(n + e, ' h')
                    .concat(l + 1 - i, 'v1H')
                    .concat(i + e, 'z'),
                );
            return;
          }
          s && i === null && (i = l);
        });
      }),
      t.join('')
    );
  },
  ve = function (o, e) {
    return o.slice().map(function (t, r) {
      return r < e.y || r >= e.y + e.h
        ? t
        : t.map(function (n, i) {
            return i < e.x || i >= e.x + e.w ? n : !1;
          });
    });
  },
  Qe = function (o, e, t, r) {
    if (r == null) return null;
    var n = o.length + t * 2,
      i = Math.floor(e * $e),
      s = n / e,
      l = (r.width || i) * s,
      u = (r.height || i) * s,
      c = r.x == null ? o.length / 2 - l / 2 : r.x * s,
      h = r.y == null ? o.length / 2 - u / 2 : r.y * s,
      d = r.opacity == null ? 1 : r.opacity,
      m = null;
    if (r.excavate) {
      var C = Math.floor(c),
        M = Math.floor(h),
        f = Math.ceil(l + c - C),
        E = Math.ceil(u + h - M);
      m = { x: C, y: M, w: f, h: E };
    }
    var S = r.crossOrigin;
    return { x: c, y: h, h: u, w: l, excavation: m, opacity: d, crossOrigin: S };
  },
  Ve = function (o, e) {
    return e != null ? Math.max(Math.floor(e), 0) : o ? De : Ue;
  },
  He = (function () {
    try {
      new Path2D().addPath(new Path2D());
    } catch {
      return !1;
    }
    return !0;
  })(),
  fe = function (o) {
    var e = o.value,
      t = o.level,
      r = o.minVersion,
      n = o.includeMargin,
      i = o.marginSize,
      s = o.imageSettings,
      l = o.size,
      u = o.boostLevel,
      c = g.useMemo(
        function () {
          var h = Array.isArray(e) ? e : [e],
            d = h.reduce(function (m, C) {
              return (m.push.apply(m, Me(Q.makeSegments(C))), m);
            }, []);
          return D.encodeSegments(d, _e[t], r, void 0, void 0, u);
        },
        [e, t, r, u],
      );
    return g.useMemo(
      function () {
        var h = c.getModules(),
          d = Ve(n, i),
          m = h.length + d * 2,
          C = Qe(h, l, d, s);
        return { cells: h, margin: d, numCells: m, calculatedImageSettings: C, qrcode: c };
      },
      [c, l, s, n, i],
    );
  },
  Ge = [
    'value',
    'size',
    'level',
    'bgColor',
    'fgColor',
    'includeMargin',
    'minVersion',
    'marginSize',
    'style',
    'imageSettings',
    'boostLevel',
  ],
  We = g.forwardRef(function (a, o) {
    var e = a.value,
      t = a.size,
      r = t === void 0 ? ie : t,
      n = a.level,
      i = n === void 0 ? se : n,
      s = a.bgColor,
      l = s === void 0 ? le : s,
      u = a.fgColor,
      c = u === void 0 ? ue : u,
      h = a.includeMargin,
      d = h === void 0 ? ce : h,
      m = a.minVersion,
      C = m === void 0 ? de : m,
      M = a.marginSize,
      f = a.style,
      E = a.imageSettings,
      S = a.boostLevel,
      P = oe(a, Ge),
      R = E?.src,
      w = g.useRef(null),
      A = g.useRef(null),
      y = g.useCallback(
        function (B) {
          ((w.current = B), typeof o == 'function' ? o(B) : o && (o.current = B));
        },
        [o],
      ),
      N = g.useState(!1),
      O = we(N, 2),
      k = O[1],
      F = fe({
        value: e,
        level: i,
        minVersion: C,
        includeMargin: d,
        marginSize: M,
        imageSettings: E,
        size: r,
        boostLevel: S,
      }),
      $ = F.margin,
      V = F.cells,
      H = F.numCells,
      p = F.calculatedImageSettings;
    (g.useEffect(function () {
      if (w.current) {
        var B = w.current,
          L = B.getContext('2d');
        if (!L) return;
        var x = V,
          U = A.current,
          Z =
            p != null && U !== null && U.complete && U.naturalHeight !== 0 && U.naturalWidth !== 0;
        Z && p.excavation != null && (x = ve(V, p.excavation));
        var q = window.devicePixelRatio || 1;
        B.height = B.width = r * q;
        var X = (r / H) * q;
        (L.scale(X, X),
          (L.fillStyle = l),
          L.fillRect(0, 0, H, H),
          (L.fillStyle = c),
          He
            ? L.fill(new Path2D(he(x, $)))
            : V.forEach(function (me, ge) {
                me.forEach(function (Ce, Ee) {
                  Ce && L.fillRect(Ee + $, ge + $, 1, 1);
                });
              }),
          p && (L.globalAlpha = p.opacity),
          Z && L.drawImage(U, p.x + $, p.y + $, p.w, p.h));
      }
    }),
      g.useEffect(
        function () {
          k(!1);
        },
        [R],
      ));
    var ee = pe({ height: r, width: r }, f),
      Y = null;
    return (
      R != null &&
        (Y = g.createElement('img', {
          alt: 'QR-Code',
          src: R,
          key: R,
          style: { display: 'none' },
          onLoad: function () {
            k(!0);
          },
          ref: A,
          crossOrigin: p?.crossOrigin,
        })),
      g.createElement(
        g.Fragment,
        null,
        g.createElement('canvas', ne({ style: ee, height: r, width: r, ref: y, role: 'img' }, P)),
        Y,
      )
    );
  }),
  Ke = [
    'value',
    'size',
    'level',
    'bgColor',
    'fgColor',
    'includeMargin',
    'minVersion',
    'title',
    'marginSize',
    'imageSettings',
    'boostLevel',
  ],
  Ye = g.forwardRef(function (a, o) {
    var e = a.value,
      t = a.size,
      r = t === void 0 ? ie : t,
      n = a.level,
      i = n === void 0 ? se : n,
      s = a.bgColor,
      l = s === void 0 ? le : s,
      u = a.fgColor,
      c = u === void 0 ? ue : u,
      h = a.includeMargin,
      d = h === void 0 ? ce : h,
      m = a.minVersion,
      C = m === void 0 ? de : m,
      M = a.title,
      f = a.marginSize,
      E = a.imageSettings,
      S = a.boostLevel,
      P = oe(a, Ke),
      R = fe({
        value: e,
        level: i,
        minVersion: C,
        includeMargin: d,
        marginSize: f,
        imageSettings: E,
        size: r,
        boostLevel: S,
      }),
      w = R.margin,
      A = R.cells,
      y = R.numCells,
      N = R.calculatedImageSettings,
      O = A,
      k = null;
    E != null &&
      N != null &&
      (N.excavation != null && (O = ve(A, N.excavation)),
      (k = g.createElement('image', {
        href: E.src,
        height: N.h,
        width: N.w,
        x: N.x + w,
        y: N.y + w,
        preserveAspectRatio: 'none',
        opacity: N.opacity,
        crossOrigin: N.crossOrigin,
      })));
    var F = he(O, w);
    return g.createElement(
      'svg',
      ne({ height: r, width: r, viewBox: '0 0 '.concat(y, ' ').concat(y), ref: o, role: 'img' }, P),
      !!M && g.createElement('title', null, M),
      g.createElement('path', {
        fill: l,
        d: 'M0,0 h'.concat(y, 'v').concat(y, 'H0z'),
        shapeRendering: 'crispEdges',
      }),
      g.createElement('path', { fill: c, d: F, shapeRendering: 'crispEdges' }),
      k,
    );
  });
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var o = 1; o < arguments.length; o++) {
            var e = arguments[o];
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
          }
          return a;
        }),
    te.apply(this, arguments)
  );
}
const xe = (a, o) => ae.createElement(Se, te({}, a, { ref: o, icon: Re })),
  Ze = ae.forwardRef(xe),
  qe = g.createElement(Te, null);
function Xe({ prefixCls: a, locale: o, onRefresh: e, statusRender: t, status: r }) {
  const n = g.createElement(
      g.Fragment,
      null,
      g.createElement('p', { className: `${a}-expired` }, o?.expired),
      e &&
        g.createElement(
          Ae,
          { type: 'link', icon: g.createElement(Ze, null), onClick: e },
          o?.refresh,
        ),
    ),
    i = g.createElement('p', { className: `${a}-scanned` }, o?.scanned),
    s = { expired: n, loading: qe, scanned: i };
  return (t ?? ((c) => s[c.status]))({ status: r, locale: o, onRefresh: e });
}
const Je = (a) => {
    const { componentCls: o, lineWidth: e, lineType: t, colorSplit: r } = a;
    return {
      [o]: {
        ...be(a),
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'padding': a.paddingSM,
        'backgroundColor': a.colorWhite,
        'borderRadius': a.borderRadiusLG,
        'border': `${Fe(e)} ${t} ${r}`,
        'position': 'relative',
        'overflow': 'hidden',
        [`& > ${o}-cover`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: a.colorText,
          lineHeight: a.lineHeight,
          background: a.QRCodeCoverBackgroundColor,
          textAlign: 'center',
          [`& > ${o}-expired, & > ${o}-scanned`]: { color: a.QRCodeTextColor },
        },
        '> canvas': { alignSelf: 'stretch', flex: 'auto', minWidth: 0 },
        '&-icon': { marginBlockEnd: a.marginXS, fontSize: a.controlHeight },
      },
      [`${o}-borderless`]: { borderColor: 'transparent', padding: 0, borderRadius: 0 },
    };
  },
  je = (a) => ({ QRCodeCoverBackgroundColor: new Pe(a.colorBgContainer).setA(0.96).toRgbString() }),
  et = Ne(
    'QRCode',
    (a) => {
      const o = ye(a, { QRCodeTextColor: a.colorText });
      return Je(o);
    },
    je,
  ),
  it = (a) => {
    const [, o] = ke(),
      {
        value: e,
        type: t = 'canvas',
        icon: r = '',
        size: n = 160,
        iconSize: i,
        color: s = o.colorText,
        errorLevel: l = 'M',
        status: u = 'active',
        bordered: c = !0,
        onRefresh: h,
        style: d,
        className: m,
        rootClassName: C,
        prefixCls: M,
        bgColor: f = 'transparent',
        marginSize: E,
        statusRender: S,
        classNames: P,
        styles: R,
        boostLevel: w,
        ...A
      } = a,
      { getPrefixCls: y, className: N, style: O, classNames: k, styles: F } = Ie('qrcode'),
      $ = { ...a, bgColor: f, type: t, size: n, status: u, bordered: c, errorLevel: l },
      [V, H] = Le([k, P], [F, R], { props: $ }),
      p = y('qrcode', M),
      [ee, Y] = et(p),
      B = {
        src: r,
        x: void 0,
        y: void 0,
        height: typeof i == 'number' ? i : (i?.height ?? 40),
        width: typeof i == 'number' ? i : (i?.width ?? 40),
        excavate: !0,
        crossOrigin: 'anonymous',
      },
      L = ze(A, !0),
      x = Be(A, Object.keys(L)),
      U = {
        value: e,
        size: n,
        level: l,
        bgColor: f,
        fgColor: s,
        style: { width: d?.width, height: d?.height },
        imageSettings: r ? B : void 0,
        marginSize: E,
        boostLevel: w,
        ...L,
      },
      [Z] = Oe('QRCode');
    if (!e) return null;
    const q = re(p, m, C, ee, Y, N, V.root, { [`${p}-borderless`]: !c }),
      X = {
        backgroundColor: f,
        ...H.root,
        ...O,
        ...d,
        width: d?.width ?? n,
        height: d?.height ?? n,
      };
    return g.createElement(
      'div',
      { ...x, className: q, style: X },
      u !== 'active' &&
        g.createElement(
          'div',
          { className: re(`${p}-cover`, V.cover), style: H.cover },
          g.createElement(Xe, {
            prefixCls: p,
            locale: Z,
            status: u,
            onRefresh: h,
            statusRender: S,
          }),
        ),
      t === 'canvas' ? g.createElement(We, { ...U }) : g.createElement(Ye, { ...U }),
    );
  };
export { it as Q };
