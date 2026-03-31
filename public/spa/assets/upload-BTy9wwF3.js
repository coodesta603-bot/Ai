import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { df as qt, a1 as Zt, a_ as Qt } from './index-C8UyLGsD.js';
import { g as ct, s as rt, n as tr, j as Ct } from './providerConfig-qS2Xx-oI.js';
import { aF as rr } from './index-ClRvEh9W.js';
import { a as er, p as lt, c as ir } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as nr } from './_url-C5lJURGN.js';
import { v as or } from './v4-BKrj-4V8.js';
const hr = {},
  sr = Object.freeze(
    Object.defineProperty({ __proto__: null, default: hr }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  ur = er(sr);
var Et = { exports: {} },
  dt = {},
  Nt;
function ar() {
  return (
    Nt ||
      ((Nt = 1),
      (function (b) {
        Object.defineProperties(b, {
          __esModule: { value: !0 },
          [Symbol.toStringTag]: { value: 'Module' },
        });
        var w = {},
          C = {};
        ((C.byteLength = Y), (C.toByteArray = K), (C.fromByteArray = Z));
        for (
          var _ = [],
            A = [],
            k = typeof Uint8Array < 'u' ? Uint8Array : Array,
            U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            O = 0,
            E = U.length;
          O < E;
          ++O
        )
          ((_[O] = U[O]), (A[U.charCodeAt(O)] = O));
        ((A[45] = 62), (A[95] = 63));
        function V(d) {
          var y = d.length;
          if (y % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
          var B = d.indexOf('=');
          B === -1 && (B = y);
          var g = B === y ? 0 : 4 - (B % 4);
          return [B, g];
        }
        function Y(d) {
          var y = V(d),
            B = y[0],
            g = y[1];
          return ((B + g) * 3) / 4 - g;
        }
        function P(d, y, B) {
          return ((y + B) * 3) / 4 - B;
        }
        function K(d) {
          var y,
            B = V(d),
            g = B[0],
            s = B[1],
            u = new k(P(d, g, s)),
            l = 0,
            p = s > 0 ? g - 4 : g,
            x;
          for (x = 0; x < p; x += 4)
            ((y =
              (A[d.charCodeAt(x)] << 18) |
              (A[d.charCodeAt(x + 1)] << 12) |
              (A[d.charCodeAt(x + 2)] << 6) |
              A[d.charCodeAt(x + 3)]),
              (u[l++] = (y >> 16) & 255),
              (u[l++] = (y >> 8) & 255),
              (u[l++] = y & 255));
          return (
            s === 2 &&
              ((y = (A[d.charCodeAt(x)] << 2) | (A[d.charCodeAt(x + 1)] >> 4)), (u[l++] = y & 255)),
            s === 1 &&
              ((y =
                (A[d.charCodeAt(x)] << 10) |
                (A[d.charCodeAt(x + 1)] << 4) |
                (A[d.charCodeAt(x + 2)] >> 2)),
              (u[l++] = (y >> 8) & 255),
              (u[l++] = y & 255)),
            u
          );
        }
        function N(d) {
          return _[(d >> 18) & 63] + _[(d >> 12) & 63] + _[(d >> 6) & 63] + _[d & 63];
        }
        function v(d, y, B) {
          for (var g, s = [], u = y; u < B; u += 3)
            ((g = ((d[u] << 16) & 16711680) + ((d[u + 1] << 8) & 65280) + (d[u + 2] & 255)),
              s.push(N(g)));
          return s.join('');
        }
        function Z(d) {
          for (var y, B = d.length, g = B % 3, s = [], u = 16383, l = 0, p = B - g; l < p; l += u)
            s.push(v(d, l, l + u > p ? p : l + u));
          return (
            g === 1
              ? ((y = d[B - 1]), s.push(_[y >> 2] + _[(y << 4) & 63] + '=='))
              : g === 2 &&
                ((y = (d[B - 2] << 8) + d[B - 1]),
                s.push(_[y >> 10] + _[(y >> 4) & 63] + _[(y << 2) & 63] + '=')),
            s.join('')
          );
        }
        var Q = {};
        ((Q.read = function (d, y, B, g, s) {
          var u,
            l,
            p = s * 8 - g - 1,
            x = (1 << p) - 1,
            c = x >> 1,
            o = -7,
            f = B ? s - 1 : 0,
            F = B ? -1 : 1,
            m = d[y + f];
          for (
            f += F, u = m & ((1 << -o) - 1), m >>= -o, o += p;
            o > 0;
            u = u * 256 + d[y + f], f += F, o -= 8
          );
          for (
            l = u & ((1 << -o) - 1), u >>= -o, o += g;
            o > 0;
            l = l * 256 + d[y + f], f += F, o -= 8
          );
          if (u === 0) u = 1 - c;
          else {
            if (u === x) return l ? NaN : (m ? -1 : 1) * (1 / 0);
            ((l = l + Math.pow(2, g)), (u = u - c));
          }
          return (m ? -1 : 1) * l * Math.pow(2, u - g);
        }),
          (Q.write = function (d, y, B, g, s, u) {
            var l,
              p,
              x,
              c = u * 8 - s - 1,
              o = (1 << c) - 1,
              f = o >> 1,
              F = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              m = g ? 0 : u - 1,
              M = g ? 1 : -1,
              G = y < 0 || (y === 0 && 1 / y < 0) ? 1 : 0;
            for (
              y = Math.abs(y),
                isNaN(y) || y === 1 / 0
                  ? ((p = isNaN(y) ? 1 : 0), (l = o))
                  : ((l = Math.floor(Math.log(y) / Math.LN2)),
                    y * (x = Math.pow(2, -l)) < 1 && (l--, (x *= 2)),
                    l + f >= 1 ? (y += F / x) : (y += F * Math.pow(2, 1 - f)),
                    y * x >= 2 && (l++, (x /= 2)),
                    l + f >= o
                      ? ((p = 0), (l = o))
                      : l + f >= 1
                        ? ((p = (y * x - 1) * Math.pow(2, s)), (l = l + f))
                        : ((p = y * Math.pow(2, f - 1) * Math.pow(2, s)), (l = 0)));
              s >= 8;
              d[B + m] = p & 255, m += M, p /= 256, s -= 8
            );
            for (l = (l << s) | p, c += s; c > 0; d[B + m] = l & 255, m += M, l /= 256, c -= 8);
            d[B + m - M] |= G * 128;
          }));
        (function (d) {
          const y = C,
            B = Q,
            g =
              typeof Symbol == 'function' && typeof Symbol.for == 'function'
                ? Symbol.for('nodejs.util.inspect.custom')
                : null;
          ((d.Buffer = o), (d.SlowBuffer = ut), (d.INSPECT_MAX_BYTES = 50));
          const s = 2147483647;
          d.kMaxLength = s;
          const { Uint8Array: u, ArrayBuffer: l, SharedArrayBuffer: p } = globalThis;
          ((o.TYPED_ARRAY_SUPPORT = x()),
            !o.TYPED_ARRAY_SUPPORT &&
              typeof console < 'u' &&
              typeof console.error == 'function' &&
              console.error(
                'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
              ));
          function x() {
            try {
              const e = new u(1),
                t = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(t, u.prototype),
                Object.setPrototypeOf(e, t),
                e.foo() === 42
              );
            } catch {
              return !1;
            }
          }
          (Object.defineProperty(o.prototype, 'parent', {
            enumerable: !0,
            get: function () {
              if (o.isBuffer(this)) return this.buffer;
            },
          }),
            Object.defineProperty(o.prototype, 'offset', {
              enumerable: !0,
              get: function () {
                if (o.isBuffer(this)) return this.byteOffset;
              },
            }));
          function c(e) {
            if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            const t = new u(e);
            return (Object.setPrototypeOf(t, o.prototype), t);
          }
          function o(e, t, r) {
            if (typeof e == 'number') {
              if (typeof t == 'string')
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number',
                );
              return M(e);
            }
            return f(e, t, r);
          }
          o.poolSize = 8192;
          function f(e, t, r) {
            if (typeof e == 'string') return G(e, t);
            if (l.isView(e)) return S(e);
            if (e == null)
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof e,
              );
            if (
              J(e, l) ||
              (e && J(e.buffer, l)) ||
              (typeof p < 'u' && (J(e, p) || (e && J(e.buffer, p))))
            )
              return $(e, t, r);
            if (typeof e == 'number')
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number',
              );
            const i = e.valueOf && e.valueOf();
            if (i != null && i !== e) return o.from(i, t, r);
            const n = z(e);
            if (n) return n;
            if (
              typeof Symbol < 'u' &&
              Symbol.toPrimitive != null &&
              typeof e[Symbol.toPrimitive] == 'function'
            )
              return o.from(e[Symbol.toPrimitive]('string'), t, r);
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof e,
            );
          }
          ((o.from = function (e, t, r) {
            return f(e, t, r);
          }),
            Object.setPrototypeOf(o.prototype, u.prototype),
            Object.setPrototypeOf(o, u));
          function F(e) {
            if (typeof e != 'number') throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          }
          function m(e, t, r) {
            return (
              F(e),
              e <= 0
                ? c(e)
                : t !== void 0
                  ? typeof r == 'string'
                    ? c(e).fill(t, r)
                    : c(e).fill(t)
                  : c(e)
            );
          }
          o.alloc = function (e, t, r) {
            return m(e, t, r);
          };
          function M(e) {
            return (F(e), c(e < 0 ? 0 : q(e) | 0));
          }
          ((o.allocUnsafe = function (e) {
            return M(e);
          }),
            (o.allocUnsafeSlow = function (e) {
              return M(e);
            }));
          function G(e, t) {
            if (((typeof t != 'string' || t === '') && (t = 'utf8'), !o.isEncoding(t)))
              throw new TypeError('Unknown encoding: ' + t);
            const r = nt(e, t) | 0;
            let i = c(r);
            const n = i.write(e, t);
            return (n !== r && (i = i.slice(0, n)), i);
          }
          function W(e) {
            const t = e.length < 0 ? 0 : q(e.length) | 0,
              r = c(t);
            for (let i = 0; i < t; i += 1) r[i] = e[i] & 255;
            return r;
          }
          function S(e) {
            if (J(e, u)) {
              const t = new u(e);
              return $(t.buffer, t.byteOffset, t.byteLength);
            }
            return W(e);
          }
          function $(e, t, r) {
            if (t < 0 || e.byteLength < t)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let i;
            return (
              t === void 0 && r === void 0
                ? (i = new u(e))
                : r === void 0
                  ? (i = new u(e, t))
                  : (i = new u(e, t, r)),
              Object.setPrototypeOf(i, o.prototype),
              i
            );
          }
          function z(e) {
            if (o.isBuffer(e)) {
              const t = q(e.length) | 0,
                r = c(t);
              return (r.length === 0 || e.copy(r, 0, 0, t), r);
            }
            if (e.length !== void 0)
              return typeof e.length != 'number' || yt(e.length) ? c(0) : W(e);
            if (e.type === 'Buffer' && Array.isArray(e.data)) return W(e.data);
          }
          function q(e) {
            if (e >= s)
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                  s.toString(16) +
                  ' bytes',
              );
            return e | 0;
          }
          function ut(e) {
            return (+e != e && (e = 0), o.alloc(+e));
          }
          ((o.isBuffer = function (t) {
            return t != null && t._isBuffer === !0 && t !== o.prototype;
          }),
            (o.compare = function (t, r) {
              if (
                (J(t, u) && (t = o.from(t, t.offset, t.byteLength)),
                J(r, u) && (r = o.from(r, r.offset, r.byteLength)),
                !o.isBuffer(t) || !o.isBuffer(r))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                );
              if (t === r) return 0;
              let i = t.length,
                n = r.length;
              for (let h = 0, a = Math.min(i, n); h < a; ++h)
                if (t[h] !== r[h]) {
                  ((i = t[h]), (n = r[h]));
                  break;
                }
              return i < n ? -1 : n < i ? 1 : 0;
            }),
            (o.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (o.concat = function (t, r) {
              if (!Array.isArray(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
              if (t.length === 0) return o.alloc(0);
              let i;
              if (r === void 0) for (r = 0, i = 0; i < t.length; ++i) r += t[i].length;
              const n = o.allocUnsafe(r);
              let h = 0;
              for (i = 0; i < t.length; ++i) {
                let a = t[i];
                if (J(a, u))
                  h + a.length > n.length
                    ? (o.isBuffer(a) || (a = o.from(a)), a.copy(n, h))
                    : u.prototype.set.call(n, a, h);
                else if (o.isBuffer(a)) a.copy(n, h);
                else throw new TypeError('"list" argument must be an Array of Buffers');
                h += a.length;
              }
              return n;
            }));
          function nt(e, t) {
            if (o.isBuffer(e)) return e.length;
            if (l.isView(e) || J(e, l)) return e.byteLength;
            if (typeof e != 'string')
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof e,
              );
            const r = e.length,
              i = arguments.length > 2 && arguments[2] === !0;
            if (!i && r === 0) return 0;
            let n = !1;
            for (;;)
              switch (t) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return r;
                case 'utf8':
                case 'utf-8':
                  return xt(e).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return r * 2;
                case 'hex':
                  return r >>> 1;
                case 'base64':
                  return Tt(e).length;
                default:
                  if (n) return i ? -1 : xt(e).length;
                  ((t = ('' + t).toLowerCase()), (n = !0));
              }
          }
          o.byteLength = nt;
          function ot(e, t, r) {
            let i = !1;
            if (
              ((t === void 0 || t < 0) && (t = 0),
              t > this.length ||
                ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
                ((r >>>= 0), (t >>>= 0), r <= t))
            )
              return '';
            for (e || (e = 'utf8'); ; )
              switch (e) {
                case 'hex':
                  return jt(this, t, r);
                case 'utf8':
                case 'utf-8':
                  return Bt(this, t, r);
                case 'ascii':
                  return Yt(this, t, r);
                case 'latin1':
                case 'binary':
                  return Gt(this, t, r);
                case 'base64':
                  return kt(this, t, r);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return Kt(this, t, r);
                default:
                  if (i) throw new TypeError('Unknown encoding: ' + e);
                  ((e = (e + '').toLowerCase()), (i = !0));
              }
          }
          o.prototype._isBuffer = !0;
          function et(e, t, r) {
            const i = e[t];
            ((e[t] = e[r]), (e[r] = i));
          }
          ((o.prototype.swap16 = function () {
            const t = this.length;
            if (t % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (let r = 0; r < t; r += 2) et(this, r, r + 1);
            return this;
          }),
            (o.prototype.swap32 = function () {
              const t = this.length;
              if (t % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
              for (let r = 0; r < t; r += 4) (et(this, r, r + 3), et(this, r + 1, r + 2));
              return this;
            }),
            (o.prototype.swap64 = function () {
              const t = this.length;
              if (t % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
              for (let r = 0; r < t; r += 8)
                (et(this, r, r + 7),
                  et(this, r + 1, r + 6),
                  et(this, r + 2, r + 5),
                  et(this, r + 3, r + 4));
              return this;
            }),
            (o.prototype.toString = function () {
              const t = this.length;
              return t === 0
                ? ''
                : arguments.length === 0
                  ? Bt(this, 0, t)
                  : ot.apply(this, arguments);
            }),
            (o.prototype.toLocaleString = o.prototype.toString),
            (o.prototype.equals = function (t) {
              if (!o.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
              return this === t ? !0 : o.compare(this, t) === 0;
            }),
            (o.prototype.inspect = function () {
              let t = '';
              const r = d.INSPECT_MAX_BYTES;
              return (
                (t = this.toString('hex', 0, r)
                  .replace(/(.{2})/g, '$1 ')
                  .trim()),
                this.length > r && (t += ' ... '),
                '<Buffer ' + t + '>'
              );
            }),
            g && (o.prototype[g] = o.prototype.inspect),
            (o.prototype.compare = function (t, r, i, n, h) {
              if ((J(t, u) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(t)))
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t,
                );
              if (
                (r === void 0 && (r = 0),
                i === void 0 && (i = t ? t.length : 0),
                n === void 0 && (n = 0),
                h === void 0 && (h = this.length),
                r < 0 || i > t.length || n < 0 || h > this.length)
              )
                throw new RangeError('out of range index');
              if (n >= h && r >= i) return 0;
              if (n >= h) return -1;
              if (r >= i) return 1;
              if (((r >>>= 0), (i >>>= 0), (n >>>= 0), (h >>>= 0), this === t)) return 0;
              let a = h - n,
                I = i - r;
              const D = Math.min(a, I),
                R = this.slice(n, h),
                L = t.slice(r, i);
              for (let T = 0; T < D; ++T)
                if (R[T] !== L[T]) {
                  ((a = R[T]), (I = L[T]));
                  break;
                }
              return a < I ? -1 : I < a ? 1 : 0;
            }));
          function wt(e, t, r, i, n) {
            if (e.length === 0) return -1;
            if (
              (typeof r == 'string'
                ? ((i = r), (r = 0))
                : r > 2147483647
                  ? (r = 2147483647)
                  : r < -2147483648 && (r = -2147483648),
              (r = +r),
              yt(r) && (r = n ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length)
            ) {
              if (n) return -1;
              r = e.length - 1;
            } else if (r < 0)
              if (n) r = 0;
              else return -1;
            if ((typeof t == 'string' && (t = o.from(t, i)), o.isBuffer(t)))
              return t.length === 0 ? -1 : Ft(e, t, r, i, n);
            if (typeof t == 'number')
              return (
                (t = t & 255),
                typeof u.prototype.indexOf == 'function'
                  ? n
                    ? u.prototype.indexOf.call(e, t, r)
                    : u.prototype.lastIndexOf.call(e, t, r)
                  : Ft(e, [t], r, i, n)
              );
            throw new TypeError('val must be string, number or Buffer');
          }
          function Ft(e, t, r, i, n) {
            let h = 1,
              a = e.length,
              I = t.length;
            if (
              i !== void 0 &&
              ((i = String(i).toLowerCase()),
              i === 'ucs2' || i === 'ucs-2' || i === 'utf16le' || i === 'utf-16le')
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              ((h = 2), (a /= 2), (I /= 2), (r /= 2));
            }
            function D(L, T) {
              return h === 1 ? L[T] : L.readUInt16BE(T * h);
            }
            let R;
            if (n) {
              let L = -1;
              for (R = r; R < a; R++)
                if (D(e, R) === D(t, L === -1 ? 0 : R - L)) {
                  if ((L === -1 && (L = R), R - L + 1 === I)) return L * h;
                } else (L !== -1 && (R -= R - L), (L = -1));
            } else
              for (r + I > a && (r = a - I), R = r; R >= 0; R--) {
                let L = !0;
                for (let T = 0; T < I; T++)
                  if (D(e, R + T) !== D(t, T)) {
                    L = !1;
                    break;
                  }
                if (L) return R;
              }
            return -1;
          }
          ((o.prototype.includes = function (t, r, i) {
            return this.indexOf(t, r, i) !== -1;
          }),
            (o.prototype.indexOf = function (t, r, i) {
              return wt(this, t, r, i, !0);
            }),
            (o.prototype.lastIndexOf = function (t, r, i) {
              return wt(this, t, r, i, !1);
            }));
          function Dt(e, t, r, i) {
            r = Number(r) || 0;
            const n = e.length - r;
            i ? ((i = Number(i)), i > n && (i = n)) : (i = n);
            const h = t.length;
            i > h / 2 && (i = h / 2);
            let a;
            for (a = 0; a < i; ++a) {
              const I = parseInt(t.substr(a * 2, 2), 16);
              if (yt(I)) return a;
              e[r + a] = I;
            }
            return a;
          }
          function Lt(e, t, r, i) {
            return ft(xt(t, e.length - r), e, r, i);
          }
          function Mt(e, t, r, i) {
            return ft(zt(t), e, r, i);
          }
          function Ot(e, t, r, i) {
            return ft(Tt(t), e, r, i);
          }
          function Pt(e, t, r, i) {
            return ft(Jt(t, e.length - r), e, r, i);
          }
          ((o.prototype.write = function (t, r, i, n) {
            if (r === void 0) ((n = 'utf8'), (i = this.length), (r = 0));
            else if (i === void 0 && typeof r == 'string') ((n = r), (i = this.length), (r = 0));
            else if (isFinite(r))
              ((r = r >>> 0),
                isFinite(i)
                  ? ((i = i >>> 0), n === void 0 && (n = 'utf8'))
                  : ((n = i), (i = void 0)));
            else
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported',
              );
            const h = this.length - r;
            if (
              ((i === void 0 || i > h) && (i = h),
              (t.length > 0 && (i < 0 || r < 0)) || r > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            n || (n = 'utf8');
            let a = !1;
            for (;;)
              switch (n) {
                case 'hex':
                  return Dt(this, t, r, i);
                case 'utf8':
                case 'utf-8':
                  return Lt(this, t, r, i);
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return Mt(this, t, r, i);
                case 'base64':
                  return Ot(this, t, r, i);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return Pt(this, t, r, i);
                default:
                  if (a) throw new TypeError('Unknown encoding: ' + n);
                  ((n = ('' + n).toLowerCase()), (a = !0));
              }
          }),
            (o.prototype.toJSON = function () {
              return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
            }));
          function kt(e, t, r) {
            return t === 0 && r === e.length ? y.fromByteArray(e) : y.fromByteArray(e.slice(t, r));
          }
          function Bt(e, t, r) {
            r = Math.min(e.length, r);
            const i = [];
            let n = t;
            for (; n < r; ) {
              const h = e[n];
              let a = null,
                I = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
              if (n + I <= r) {
                let D, R, L, T;
                switch (I) {
                  case 1:
                    h < 128 && (a = h);
                    break;
                  case 2:
                    ((D = e[n + 1]),
                      (D & 192) === 128 && ((T = ((h & 31) << 6) | (D & 63)), T > 127 && (a = T)));
                    break;
                  case 3:
                    ((D = e[n + 1]),
                      (R = e[n + 2]),
                      (D & 192) === 128 &&
                        (R & 192) === 128 &&
                        ((T = ((h & 15) << 12) | ((D & 63) << 6) | (R & 63)),
                        T > 2047 && (T < 55296 || T > 57343) && (a = T)));
                    break;
                  case 4:
                    ((D = e[n + 1]),
                      (R = e[n + 2]),
                      (L = e[n + 3]),
                      (D & 192) === 128 &&
                        (R & 192) === 128 &&
                        (L & 192) === 128 &&
                        ((T = ((h & 15) << 18) | ((D & 63) << 12) | ((R & 63) << 6) | (L & 63)),
                        T > 65535 && T < 1114112 && (a = T)));
                }
              }
              (a === null
                ? ((a = 65533), (I = 1))
                : a > 65535 &&
                  ((a -= 65536), i.push(((a >>> 10) & 1023) | 55296), (a = 56320 | (a & 1023))),
                i.push(a),
                (n += I));
            }
            return Ht(i);
          }
          const _t = 4096;
          function Ht(e) {
            const t = e.length;
            if (t <= _t) return String.fromCharCode.apply(String, e);
            let r = '',
              i = 0;
            for (; i < t; ) r += String.fromCharCode.apply(String, e.slice(i, (i += _t)));
            return r;
          }
          function Yt(e, t, r) {
            let i = '';
            r = Math.min(e.length, r);
            for (let n = t; n < r; ++n) i += String.fromCharCode(e[n] & 127);
            return i;
          }
          function Gt(e, t, r) {
            let i = '';
            r = Math.min(e.length, r);
            for (let n = t; n < r; ++n) i += String.fromCharCode(e[n]);
            return i;
          }
          function jt(e, t, r) {
            const i = e.length;
            ((!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i));
            let n = '';
            for (let h = t; h < r; ++h) n += Vt[e[h]];
            return n;
          }
          function Kt(e, t, r) {
            const i = e.slice(t, r);
            let n = '';
            for (let h = 0; h < i.length - 1; h += 2)
              n += String.fromCharCode(i[h] + i[h + 1] * 256);
            return n;
          }
          o.prototype.slice = function (t, r) {
            const i = this.length;
            ((t = ~~t),
              (r = r === void 0 ? i : ~~r),
              t < 0 ? ((t += i), t < 0 && (t = 0)) : t > i && (t = i),
              r < 0 ? ((r += i), r < 0 && (r = 0)) : r > i && (r = i),
              r < t && (r = t));
            const n = this.subarray(t, r);
            return (Object.setPrototypeOf(n, o.prototype), n);
          };
          function H(e, t, r) {
            if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint');
            if (e + t > r) throw new RangeError('Trying to access beyond buffer length');
          }
          ((o.prototype.readUintLE = o.prototype.readUIntLE =
            function (t, r, i) {
              ((t = t >>> 0), (r = r >>> 0), i || H(t, r, this.length));
              let n = this[t],
                h = 1,
                a = 0;
              for (; ++a < r && (h *= 256); ) n += this[t + a] * h;
              return n;
            }),
            (o.prototype.readUintBE = o.prototype.readUIntBE =
              function (t, r, i) {
                ((t = t >>> 0), (r = r >>> 0), i || H(t, r, this.length));
                let n = this[t + --r],
                  h = 1;
                for (; r > 0 && (h *= 256); ) n += this[t + --r] * h;
                return n;
              }),
            (o.prototype.readUint8 = o.prototype.readUInt8 =
              function (t, r) {
                return ((t = t >>> 0), r || H(t, 1, this.length), this[t]);
              }),
            (o.prototype.readUint16LE = o.prototype.readUInt16LE =
              function (t, r) {
                return ((t = t >>> 0), r || H(t, 2, this.length), this[t] | (this[t + 1] << 8));
              }),
            (o.prototype.readUint16BE = o.prototype.readUInt16BE =
              function (t, r) {
                return ((t = t >>> 0), r || H(t, 2, this.length), (this[t] << 8) | this[t + 1]);
              }),
            (o.prototype.readUint32LE = o.prototype.readUInt32LE =
              function (t, r) {
                return (
                  (t = t >>> 0),
                  r || H(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + this[t + 3] * 16777216
                );
              }),
            (o.prototype.readUint32BE = o.prototype.readUInt32BE =
              function (t, r) {
                return (
                  (t = t >>> 0),
                  r || H(t, 4, this.length),
                  this[t] * 16777216 + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
            (o.prototype.readBigUInt64LE = tt(function (t) {
              ((t = t >>> 0), st(t, 'offset'));
              const r = this[t],
                i = this[t + 7];
              (r === void 0 || i === void 0) && at(t, this.length - 8);
              const n = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
                h = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + i * 2 ** 24;
              return BigInt(n) + (BigInt(h) << BigInt(32));
            })),
            (o.prototype.readBigUInt64BE = tt(function (t) {
              ((t = t >>> 0), st(t, 'offset'));
              const r = this[t],
                i = this[t + 7];
              (r === void 0 || i === void 0) && at(t, this.length - 8);
              const n = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
                h = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i;
              return (BigInt(n) << BigInt(32)) + BigInt(h);
            })),
            (o.prototype.readIntLE = function (t, r, i) {
              ((t = t >>> 0), (r = r >>> 0), i || H(t, r, this.length));
              let n = this[t],
                h = 1,
                a = 0;
              for (; ++a < r && (h *= 256); ) n += this[t + a] * h;
              return ((h *= 128), n >= h && (n -= Math.pow(2, 8 * r)), n);
            }),
            (o.prototype.readIntBE = function (t, r, i) {
              ((t = t >>> 0), (r = r >>> 0), i || H(t, r, this.length));
              let n = r,
                h = 1,
                a = this[t + --n];
              for (; n > 0 && (h *= 256); ) a += this[t + --n] * h;
              return ((h *= 128), a >= h && (a -= Math.pow(2, 8 * r)), a);
            }),
            (o.prototype.readInt8 = function (t, r) {
              return (
                (t = t >>> 0),
                r || H(t, 1, this.length),
                this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
              );
            }),
            (o.prototype.readInt16LE = function (t, r) {
              ((t = t >>> 0), r || H(t, 2, this.length));
              const i = this[t] | (this[t + 1] << 8);
              return i & 32768 ? i | 4294901760 : i;
            }),
            (o.prototype.readInt16BE = function (t, r) {
              ((t = t >>> 0), r || H(t, 2, this.length));
              const i = this[t + 1] | (this[t] << 8);
              return i & 32768 ? i | 4294901760 : i;
            }),
            (o.prototype.readInt32LE = function (t, r) {
              return (
                (t = t >>> 0),
                r || H(t, 4, this.length),
                this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
              );
            }),
            (o.prototype.readInt32BE = function (t, r) {
              return (
                (t = t >>> 0),
                r || H(t, 4, this.length),
                (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
              );
            }),
            (o.prototype.readBigInt64LE = tt(function (t) {
              ((t = t >>> 0), st(t, 'offset'));
              const r = this[t],
                i = this[t + 7];
              (r === void 0 || i === void 0) && at(t, this.length - 8);
              const n = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (i << 24);
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
              );
            })),
            (o.prototype.readBigInt64BE = tt(function (t) {
              ((t = t >>> 0), st(t, 'offset'));
              const r = this[t],
                i = this[t + 7];
              (r === void 0 || i === void 0) && at(t, this.length - 8);
              const n = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i)
              );
            })),
            (o.prototype.readFloatLE = function (t, r) {
              return ((t = t >>> 0), r || H(t, 4, this.length), B.read(this, t, !0, 23, 4));
            }),
            (o.prototype.readFloatBE = function (t, r) {
              return ((t = t >>> 0), r || H(t, 4, this.length), B.read(this, t, !1, 23, 4));
            }),
            (o.prototype.readDoubleLE = function (t, r) {
              return ((t = t >>> 0), r || H(t, 8, this.length), B.read(this, t, !0, 52, 8));
            }),
            (o.prototype.readDoubleBE = function (t, r) {
              return ((t = t >>> 0), r || H(t, 8, this.length), B.read(this, t, !1, 52, 8));
            }));
          function X(e, t, r, i, n, h) {
            if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > n || t < h) throw new RangeError('"value" argument is out of bounds');
            if (r + i > e.length) throw new RangeError('Index out of range');
          }
          ((o.prototype.writeUintLE = o.prototype.writeUIntLE =
            function (t, r, i, n) {
              if (((t = +t), (r = r >>> 0), (i = i >>> 0), !n)) {
                const I = Math.pow(2, 8 * i) - 1;
                X(this, t, r, i, I, 0);
              }
              let h = 1,
                a = 0;
              for (this[r] = t & 255; ++a < i && (h *= 256); ) this[r + a] = (t / h) & 255;
              return r + i;
            }),
            (o.prototype.writeUintBE = o.prototype.writeUIntBE =
              function (t, r, i, n) {
                if (((t = +t), (r = r >>> 0), (i = i >>> 0), !n)) {
                  const I = Math.pow(2, 8 * i) - 1;
                  X(this, t, r, i, I, 0);
                }
                let h = i - 1,
                  a = 1;
                for (this[r + h] = t & 255; --h >= 0 && (a *= 256); ) this[r + h] = (t / a) & 255;
                return r + i;
              }),
            (o.prototype.writeUint8 = o.prototype.writeUInt8 =
              function (t, r, i) {
                return (
                  (t = +t),
                  (r = r >>> 0),
                  i || X(this, t, r, 1, 255, 0),
                  (this[r] = t & 255),
                  r + 1
                );
              }),
            (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
              function (t, r, i) {
                return (
                  (t = +t),
                  (r = r >>> 0),
                  i || X(this, t, r, 2, 65535, 0),
                  (this[r] = t & 255),
                  (this[r + 1] = t >>> 8),
                  r + 2
                );
              }),
            (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
              function (t, r, i) {
                return (
                  (t = +t),
                  (r = r >>> 0),
                  i || X(this, t, r, 2, 65535, 0),
                  (this[r] = t >>> 8),
                  (this[r + 1] = t & 255),
                  r + 2
                );
              }),
            (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
              function (t, r, i) {
                return (
                  (t = +t),
                  (r = r >>> 0),
                  i || X(this, t, r, 4, 4294967295, 0),
                  (this[r + 3] = t >>> 24),
                  (this[r + 2] = t >>> 16),
                  (this[r + 1] = t >>> 8),
                  (this[r] = t & 255),
                  r + 4
                );
              }),
            (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
              function (t, r, i) {
                return (
                  (t = +t),
                  (r = r >>> 0),
                  i || X(this, t, r, 4, 4294967295, 0),
                  (this[r] = t >>> 24),
                  (this[r + 1] = t >>> 16),
                  (this[r + 2] = t >>> 8),
                  (this[r + 3] = t & 255),
                  r + 4
                );
              }));
          function It(e, t, r, i, n) {
            bt(t, i, n, e, r, 7);
            let h = Number(t & BigInt(4294967295));
            ((e[r++] = h),
              (h = h >> 8),
              (e[r++] = h),
              (h = h >> 8),
              (e[r++] = h),
              (h = h >> 8),
              (e[r++] = h));
            let a = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[r++] = a),
              (a = a >> 8),
              (e[r++] = a),
              (a = a >> 8),
              (e[r++] = a),
              (a = a >> 8),
              (e[r++] = a),
              r
            );
          }
          function gt(e, t, r, i, n) {
            bt(t, i, n, e, r, 7);
            let h = Number(t & BigInt(4294967295));
            ((e[r + 7] = h),
              (h = h >> 8),
              (e[r + 6] = h),
              (h = h >> 8),
              (e[r + 5] = h),
              (h = h >> 8),
              (e[r + 4] = h));
            let a = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[r + 3] = a),
              (a = a >> 8),
              (e[r + 2] = a),
              (a = a >> 8),
              (e[r + 1] = a),
              (a = a >> 8),
              (e[r] = a),
              r + 8
            );
          }
          ((o.prototype.writeBigUInt64LE = tt(function (t, r = 0) {
            return It(this, t, r, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
            (o.prototype.writeBigUInt64BE = tt(function (t, r = 0) {
              return gt(this, t, r, BigInt(0), BigInt('0xffffffffffffffff'));
            })),
            (o.prototype.writeIntLE = function (t, r, i, n) {
              if (((t = +t), (r = r >>> 0), !n)) {
                const D = Math.pow(2, 8 * i - 1);
                X(this, t, r, i, D - 1, -D);
              }
              let h = 0,
                a = 1,
                I = 0;
              for (this[r] = t & 255; ++h < i && (a *= 256); )
                (t < 0 && I === 0 && this[r + h - 1] !== 0 && (I = 1),
                  (this[r + h] = (((t / a) >> 0) - I) & 255));
              return r + i;
            }),
            (o.prototype.writeIntBE = function (t, r, i, n) {
              if (((t = +t), (r = r >>> 0), !n)) {
                const D = Math.pow(2, 8 * i - 1);
                X(this, t, r, i, D - 1, -D);
              }
              let h = i - 1,
                a = 1,
                I = 0;
              for (this[r + h] = t & 255; --h >= 0 && (a *= 256); )
                (t < 0 && I === 0 && this[r + h + 1] !== 0 && (I = 1),
                  (this[r + h] = (((t / a) >> 0) - I) & 255));
              return r + i;
            }),
            (o.prototype.writeInt8 = function (t, r, i) {
              return (
                (t = +t),
                (r = r >>> 0),
                i || X(this, t, r, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[r] = t & 255),
                r + 1
              );
            }),
            (o.prototype.writeInt16LE = function (t, r, i) {
              return (
                (t = +t),
                (r = r >>> 0),
                i || X(this, t, r, 2, 32767, -32768),
                (this[r] = t & 255),
                (this[r + 1] = t >>> 8),
                r + 2
              );
            }),
            (o.prototype.writeInt16BE = function (t, r, i) {
              return (
                (t = +t),
                (r = r >>> 0),
                i || X(this, t, r, 2, 32767, -32768),
                (this[r] = t >>> 8),
                (this[r + 1] = t & 255),
                r + 2
              );
            }),
            (o.prototype.writeInt32LE = function (t, r, i) {
              return (
                (t = +t),
                (r = r >>> 0),
                i || X(this, t, r, 4, 2147483647, -2147483648),
                (this[r] = t & 255),
                (this[r + 1] = t >>> 8),
                (this[r + 2] = t >>> 16),
                (this[r + 3] = t >>> 24),
                r + 4
              );
            }),
            (o.prototype.writeInt32BE = function (t, r, i) {
              return (
                (t = +t),
                (r = r >>> 0),
                i || X(this, t, r, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[r] = t >>> 24),
                (this[r + 1] = t >>> 16),
                (this[r + 2] = t >>> 8),
                (this[r + 3] = t & 255),
                r + 4
              );
            }),
            (o.prototype.writeBigInt64LE = tt(function (t, r = 0) {
              return It(this, t, r, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
            })),
            (o.prototype.writeBigInt64BE = tt(function (t, r = 0) {
              return gt(this, t, r, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
            })));
          function mt(e, t, r, i, n, h) {
            if (r + i > e.length) throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('Index out of range');
          }
          function At(e, t, r, i, n) {
            return (
              (t = +t),
              (r = r >>> 0),
              n || mt(e, t, r, 4),
              B.write(e, t, r, i, 23, 4),
              r + 4
            );
          }
          ((o.prototype.writeFloatLE = function (t, r, i) {
            return At(this, t, r, !0, i);
          }),
            (o.prototype.writeFloatBE = function (t, r, i) {
              return At(this, t, r, !1, i);
            }));
          function St(e, t, r, i, n) {
            return (
              (t = +t),
              (r = r >>> 0),
              n || mt(e, t, r, 8),
              B.write(e, t, r, i, 52, 8),
              r + 8
            );
          }
          ((o.prototype.writeDoubleLE = function (t, r, i) {
            return St(this, t, r, !0, i);
          }),
            (o.prototype.writeDoubleBE = function (t, r, i) {
              return St(this, t, r, !1, i);
            }),
            (o.prototype.copy = function (t, r, i, n) {
              if (!o.isBuffer(t)) throw new TypeError('argument should be a Buffer');
              if (
                (i || (i = 0),
                !n && n !== 0 && (n = this.length),
                r >= t.length && (r = t.length),
                r || (r = 0),
                n > 0 && n < i && (n = i),
                n === i || t.length === 0 || this.length === 0)
              )
                return 0;
              if (r < 0) throw new RangeError('targetStart out of bounds');
              if (i < 0 || i >= this.length) throw new RangeError('Index out of range');
              if (n < 0) throw new RangeError('sourceEnd out of bounds');
              (n > this.length && (n = this.length),
                t.length - r < n - i && (n = t.length - r + i));
              const h = n - i;
              return (
                this === t && typeof u.prototype.copyWithin == 'function'
                  ? this.copyWithin(r, i, n)
                  : u.prototype.set.call(t, this.subarray(i, n), r),
                h
              );
            }),
            (o.prototype.fill = function (t, r, i, n) {
              if (typeof t == 'string') {
                if (
                  (typeof r == 'string'
                    ? ((n = r), (r = 0), (i = this.length))
                    : typeof i == 'string' && ((n = i), (i = this.length)),
                  n !== void 0 && typeof n != 'string')
                )
                  throw new TypeError('encoding must be a string');
                if (typeof n == 'string' && !o.isEncoding(n))
                  throw new TypeError('Unknown encoding: ' + n);
                if (t.length === 1) {
                  const a = t.charCodeAt(0);
                  ((n === 'utf8' && a < 128) || n === 'latin1') && (t = a);
                }
              } else
                typeof t == 'number' ? (t = t & 255) : typeof t == 'boolean' && (t = Number(t));
              if (r < 0 || this.length < r || this.length < i)
                throw new RangeError('Out of range index');
              if (i <= r) return this;
              ((r = r >>> 0), (i = i === void 0 ? this.length : i >>> 0), t || (t = 0));
              let h;
              if (typeof t == 'number') for (h = r; h < i; ++h) this[h] = t;
              else {
                const a = o.isBuffer(t) ? t : o.from(t, n),
                  I = a.length;
                if (I === 0)
                  throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (h = 0; h < i - r; ++h) this[h + r] = a[h % I];
              }
              return this;
            }));
          const ht = {};
          function pt(e, t, r) {
            ht[e] = class extends r {
              constructor() {
                (super(),
                  Object.defineProperty(this, 'message', {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${e}]`),
                  this.stack,
                  delete this.name);
              }
              get code() {
                return e;
              }
              set code(n) {
                Object.defineProperty(this, 'code', {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`;
              }
            };
          }
          (pt(
            'ERR_BUFFER_OUT_OF_BOUNDS',
            function (e) {
              return e
                ? `${e} is outside of buffer bounds`
                : 'Attempt to access memory outside buffer bounds';
            },
            RangeError,
          ),
            pt(
              'ERR_INVALID_ARG_TYPE',
              function (e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`;
              },
              TypeError,
            ),
            pt(
              'ERR_OUT_OF_RANGE',
              function (e, t, r) {
                let i = `The value of "${e}" is out of range.`,
                  n = r;
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (n = Ut(String(r)))
                    : typeof r == 'bigint' &&
                      ((n = String(r)),
                      (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
                        (n = Ut(n)),
                      (n += 'n')),
                  (i += ` It must be ${t}. Received ${n}`),
                  i
                );
              },
              RangeError,
            ));
          function Ut(e) {
            let t = '',
              r = e.length;
            const i = e[0] === '-' ? 1 : 0;
            for (; r >= i + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
            return `${e.slice(0, r)}${t}`;
          }
          function Xt(e, t, r) {
            (st(t, 'offset'),
              (e[t] === void 0 || e[t + r] === void 0) && at(t, e.length - (r + 1)));
          }
          function bt(e, t, r, i, n, h) {
            if (e > r || e < t) {
              const a = typeof t == 'bigint' ? 'n' : '';
              let I;
              throw (
                t === 0 || t === BigInt(0)
                  ? (I = `>= 0${a} and < 2${a} ** ${(h + 1) * 8}${a}`)
                  : (I = `>= -(2${a} ** ${(h + 1) * 8 - 1}${a}) and < 2 ** ${(h + 1) * 8 - 1}${a}`),
                new ht.ERR_OUT_OF_RANGE('value', I, e)
              );
            }
            Xt(i, n, h);
          }
          function st(e, t) {
            if (typeof e != 'number') throw new ht.ERR_INVALID_ARG_TYPE(t, 'number', e);
          }
          function at(e, t, r) {
            throw Math.floor(e) !== e
              ? (st(e, r), new ht.ERR_OUT_OF_RANGE('offset', 'an integer', e))
              : t < 0
                ? new ht.ERR_BUFFER_OUT_OF_BOUNDS()
                : new ht.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${t}`, e);
          }
          const Wt = /[^+/0-9A-Za-z-_]/g;
          function $t(e) {
            if (((e = e.split('=')[0]), (e = e.trim().replace(Wt, '')), e.length < 2)) return '';
            for (; e.length % 4 !== 0; ) e = e + '=';
            return e;
          }
          function xt(e, t) {
            t = t || 1 / 0;
            let r;
            const i = e.length;
            let n = null;
            const h = [];
            for (let a = 0; a < i; ++a) {
              if (((r = e.charCodeAt(a)), r > 55295 && r < 57344)) {
                if (!n) {
                  if (r > 56319) {
                    (t -= 3) > -1 && h.push(239, 191, 189);
                    continue;
                  } else if (a + 1 === i) {
                    (t -= 3) > -1 && h.push(239, 191, 189);
                    continue;
                  }
                  n = r;
                  continue;
                }
                if (r < 56320) {
                  ((t -= 3) > -1 && h.push(239, 191, 189), (n = r));
                  continue;
                }
                r = (((n - 55296) << 10) | (r - 56320)) + 65536;
              } else n && (t -= 3) > -1 && h.push(239, 191, 189);
              if (((n = null), r < 128)) {
                if ((t -= 1) < 0) break;
                h.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                h.push((r >> 6) | 192, (r & 63) | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                h.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
              } else if (r < 1114112) {
                if ((t -= 4) < 0) break;
                h.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (r & 63) | 128,
                );
              } else throw new Error('Invalid code point');
            }
            return h;
          }
          function zt(e) {
            const t = [];
            for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
            return t;
          }
          function Jt(e, t) {
            let r, i, n;
            const h = [];
            for (let a = 0; a < e.length && !((t -= 2) < 0); ++a)
              ((r = e.charCodeAt(a)), (i = r >> 8), (n = r % 256), h.push(n), h.push(i));
            return h;
          }
          function Tt(e) {
            return y.toByteArray($t(e));
          }
          function ft(e, t, r, i) {
            let n;
            for (n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
            return n;
          }
          function J(e, t) {
            return (
              e instanceof t ||
              (e != null &&
                e.constructor != null &&
                e.constructor.name != null &&
                e.constructor.name === t.name)
            );
          }
          function yt(e) {
            return e !== e;
          }
          const Vt = (function () {
            const e = '0123456789abcdef',
              t = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const i = r * 16;
              for (let n = 0; n < 16; ++n) t[i + n] = e[r] + e[n];
            }
            return t;
          })();
          function tt(e) {
            return typeof BigInt > 'u' ? vt : e;
          }
          function vt() {
            throw new Error('BigInt not supported');
          }
        })(w);
        const it = w.Buffer;
        ((b.Blob = w.Blob),
          (b.BlobOptions = w.BlobOptions),
          (b.Buffer = w.Buffer),
          (b.File = w.File),
          (b.FileOptions = w.FileOptions),
          (b.INSPECT_MAX_BYTES = w.INSPECT_MAX_BYTES),
          (b.SlowBuffer = w.SlowBuffer),
          (b.TranscodeEncoding = w.TranscodeEncoding),
          (b.atob = w.atob),
          (b.btoa = w.btoa),
          (b.constants = w.constants),
          (b.default = it),
          (b.isAscii = w.isAscii),
          (b.isUtf8 = w.isUtf8),
          (b.kMaxLength = w.kMaxLength),
          (b.kStringMaxLength = w.kStringMaxLength),
          (b.resolveObjectURL = w.resolveObjectURL),
          (b.transcode = w.transcode));
      })(dt)),
    dt
  );
}
var Rt;
function fr() {
  return (
    Rt ||
      ((Rt = 1),
      (function (b) {
        (function () {
          var w = 'input is invalid type',
            C = typeof window == 'object',
            _ = C ? window : {};
          _.JS_SHA256_NO_WINDOW && (C = !1);
          var A = !C && typeof self == 'object',
            k =
              !_.JS_SHA256_NO_NODE_JS &&
              typeof lt == 'object' &&
              lt.versions &&
              lt.versions.node &&
              lt.type != 'renderer';
          k ? (_ = ir) : A && (_ = self);
          var U = !_.JS_SHA256_NO_COMMON_JS && !0 && b.exports,
            O = !_.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u',
            E = '0123456789abcdef'.split(''),
            V = [-2147483648, 8388608, 32768, 128],
            Y = [24, 16, 8, 0],
            P = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
              2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
              2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
              1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
              3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
              3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
              506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
              1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
              3329325298,
            ],
            K = ['hex', 'array', 'digest', 'arrayBuffer'],
            N = [];
          ((_.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
            (Array.isArray = function (s) {
              return Object.prototype.toString.call(s) === '[object Array]';
            }),
            O &&
              (_.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
              (ArrayBuffer.isView = function (s) {
                return typeof s == 'object' && s.buffer && s.buffer.constructor === ArrayBuffer;
              }));
          var v = function (s, u) {
              return function (l) {
                return new y(u, !0).update(l)[s]();
              };
            },
            Z = function (s) {
              var u = v('hex', s);
              (k && (u = Q(u, s)),
                (u.create = function () {
                  return new y(s);
                }),
                (u.update = function (x) {
                  return u.create().update(x);
                }));
              for (var l = 0; l < K.length; ++l) {
                var p = K[l];
                u[p] = v(p, s);
              }
              return u;
            },
            Q = function (s, u) {
              var l = ur,
                p = ar().Buffer,
                x = u ? 'sha224' : 'sha256',
                c;
              p.from && !_.JS_SHA256_NO_BUFFER_FROM
                ? (c = p.from)
                : (c = function (f) {
                    return new p(f);
                  });
              var o = function (f) {
                if (typeof f == 'string') return l.createHash(x).update(f, 'utf8').digest('hex');
                if (f == null) throw new Error(w);
                return (
                  f.constructor === ArrayBuffer && (f = new Uint8Array(f)),
                  Array.isArray(f) || ArrayBuffer.isView(f) || f.constructor === p
                    ? l.createHash(x).update(c(f)).digest('hex')
                    : s(f)
                );
              };
              return o;
            },
            it = function (s, u) {
              return function (l, p) {
                return new B(l, u, !0).update(p)[s]();
              };
            },
            d = function (s) {
              var u = it('hex', s);
              ((u.create = function (x) {
                return new B(x, s);
              }),
                (u.update = function (x, c) {
                  return u.create(x).update(c);
                }));
              for (var l = 0; l < K.length; ++l) {
                var p = K[l];
                u[p] = it(p, s);
              }
              return u;
            };
          function y(s, u) {
            (u
              ? ((N[0] =
                  N[16] =
                  N[1] =
                  N[2] =
                  N[3] =
                  N[4] =
                  N[5] =
                  N[6] =
                  N[7] =
                  N[8] =
                  N[9] =
                  N[10] =
                  N[11] =
                  N[12] =
                  N[13] =
                  N[14] =
                  N[15] =
                    0),
                (this.blocks = N))
              : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              s
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = s));
          }
          ((y.prototype.update = function (s) {
            if (!this.finalized) {
              var u,
                l = typeof s;
              if (l !== 'string') {
                if (l === 'object') {
                  if (s === null) throw new Error(w);
                  if (O && s.constructor === ArrayBuffer) s = new Uint8Array(s);
                  else if (!Array.isArray(s) && (!O || !ArrayBuffer.isView(s))) throw new Error(w);
                } else throw new Error(w);
                u = !0;
              }
              for (var p, x = 0, c, o = s.length, f = this.blocks; x < o; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (f[0] = this.block),
                    (this.block =
                      f[16] =
                      f[1] =
                      f[2] =
                      f[3] =
                      f[4] =
                      f[5] =
                      f[6] =
                      f[7] =
                      f[8] =
                      f[9] =
                      f[10] =
                      f[11] =
                      f[12] =
                      f[13] =
                      f[14] =
                      f[15] =
                        0)),
                  u)
                )
                  for (c = this.start; x < o && c < 64; ++x) f[c >>> 2] |= s[x] << Y[c++ & 3];
                else
                  for (c = this.start; x < o && c < 64; ++x)
                    ((p = s.charCodeAt(x)),
                      p < 128
                        ? (f[c >>> 2] |= p << Y[c++ & 3])
                        : p < 2048
                          ? ((f[c >>> 2] |= (192 | (p >>> 6)) << Y[c++ & 3]),
                            (f[c >>> 2] |= (128 | (p & 63)) << Y[c++ & 3]))
                          : p < 55296 || p >= 57344
                            ? ((f[c >>> 2] |= (224 | (p >>> 12)) << Y[c++ & 3]),
                              (f[c >>> 2] |= (128 | ((p >>> 6) & 63)) << Y[c++ & 3]),
                              (f[c >>> 2] |= (128 | (p & 63)) << Y[c++ & 3]))
                            : ((p = 65536 + (((p & 1023) << 10) | (s.charCodeAt(++x) & 1023))),
                              (f[c >>> 2] |= (240 | (p >>> 18)) << Y[c++ & 3]),
                              (f[c >>> 2] |= (128 | ((p >>> 12) & 63)) << Y[c++ & 3]),
                              (f[c >>> 2] |= (128 | ((p >>> 6) & 63)) << Y[c++ & 3]),
                              (f[c >>> 2] |= (128 | (p & 63)) << Y[c++ & 3])));
                ((this.lastByteIndex = c),
                  (this.bytes += c - this.start),
                  c >= 64
                    ? ((this.block = f[16]), (this.start = c - 64), this.hash(), (this.hashed = !0))
                    : (this.start = c));
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          }),
            (y.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var s = this.blocks,
                  u = this.lastByteIndex;
                ((s[16] = this.block),
                  (s[u >>> 2] |= V[u & 3]),
                  (this.block = s[16]),
                  u >= 56 &&
                    (this.hashed || this.hash(),
                    (s[0] = this.block),
                    (s[16] =
                      s[1] =
                      s[2] =
                      s[3] =
                      s[4] =
                      s[5] =
                      s[6] =
                      s[7] =
                      s[8] =
                      s[9] =
                      s[10] =
                      s[11] =
                      s[12] =
                      s[13] =
                      s[14] =
                      s[15] =
                        0)),
                  (s[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (s[15] = this.bytes << 3),
                  this.hash());
              }
            }),
            (y.prototype.hash = function () {
              var s = this.h0,
                u = this.h1,
                l = this.h2,
                p = this.h3,
                x = this.h4,
                c = this.h5,
                o = this.h6,
                f = this.h7,
                F = this.blocks,
                m,
                M,
                G,
                W,
                S,
                $,
                z,
                q,
                ut,
                nt,
                ot;
              for (m = 16; m < 64; ++m)
                ((S = F[m - 15]),
                  (M = ((S >>> 7) | (S << 25)) ^ ((S >>> 18) | (S << 14)) ^ (S >>> 3)),
                  (S = F[m - 2]),
                  (G = ((S >>> 17) | (S << 15)) ^ ((S >>> 19) | (S << 13)) ^ (S >>> 10)),
                  (F[m] = (F[m - 16] + M + F[m - 7] + G) << 0));
              for (ot = u & l, m = 0; m < 64; m += 4)
                (this.first
                  ? (this.is224
                      ? ((q = 300032),
                        (S = F[0] - 1413257819),
                        (f = (S - 150054599) << 0),
                        (p = (S + 24177077) << 0))
                      : ((q = 704751109),
                        (S = F[0] - 210244248),
                        (f = (S - 1521486534) << 0),
                        (p = (S + 143694565) << 0)),
                    (this.first = !1))
                  : ((M =
                      ((s >>> 2) | (s << 30)) ^
                      ((s >>> 13) | (s << 19)) ^
                      ((s >>> 22) | (s << 10))),
                    (G =
                      ((x >>> 6) | (x << 26)) ^ ((x >>> 11) | (x << 21)) ^ ((x >>> 25) | (x << 7))),
                    (q = s & u),
                    (W = q ^ (s & l) ^ ot),
                    (z = (x & c) ^ (~x & o)),
                    (S = f + G + z + P[m] + F[m]),
                    ($ = M + W),
                    (f = (p + S) << 0),
                    (p = (S + $) << 0)),
                  (M =
                    ((p >>> 2) | (p << 30)) ^ ((p >>> 13) | (p << 19)) ^ ((p >>> 22) | (p << 10))),
                  (G =
                    ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7))),
                  (ut = p & s),
                  (W = ut ^ (p & u) ^ q),
                  (z = (f & x) ^ (~f & c)),
                  (S = o + G + z + P[m + 1] + F[m + 1]),
                  ($ = M + W),
                  (o = (l + S) << 0),
                  (l = (S + $) << 0),
                  (M =
                    ((l >>> 2) | (l << 30)) ^ ((l >>> 13) | (l << 19)) ^ ((l >>> 22) | (l << 10))),
                  (G =
                    ((o >>> 6) | (o << 26)) ^ ((o >>> 11) | (o << 21)) ^ ((o >>> 25) | (o << 7))),
                  (nt = l & p),
                  (W = nt ^ (l & s) ^ ut),
                  (z = (o & f) ^ (~o & x)),
                  (S = c + G + z + P[m + 2] + F[m + 2]),
                  ($ = M + W),
                  (c = (u + S) << 0),
                  (u = (S + $) << 0),
                  (M =
                    ((u >>> 2) | (u << 30)) ^ ((u >>> 13) | (u << 19)) ^ ((u >>> 22) | (u << 10))),
                  (G =
                    ((c >>> 6) | (c << 26)) ^ ((c >>> 11) | (c << 21)) ^ ((c >>> 25) | (c << 7))),
                  (ot = u & l),
                  (W = ot ^ (u & p) ^ nt),
                  (z = (c & o) ^ (~c & f)),
                  (S = x + G + z + P[m + 3] + F[m + 3]),
                  ($ = M + W),
                  (x = (s + S) << 0),
                  (s = (S + $) << 0),
                  (this.chromeBugWorkAround = !0));
              ((this.h0 = (this.h0 + s) << 0),
                (this.h1 = (this.h1 + u) << 0),
                (this.h2 = (this.h2 + l) << 0),
                (this.h3 = (this.h3 + p) << 0),
                (this.h4 = (this.h4 + x) << 0),
                (this.h5 = (this.h5 + c) << 0),
                (this.h6 = (this.h6 + o) << 0),
                (this.h7 = (this.h7 + f) << 0));
            }),
            (y.prototype.hex = function () {
              this.finalize();
              var s = this.h0,
                u = this.h1,
                l = this.h2,
                p = this.h3,
                x = this.h4,
                c = this.h5,
                o = this.h6,
                f = this.h7,
                F =
                  E[(s >>> 28) & 15] +
                  E[(s >>> 24) & 15] +
                  E[(s >>> 20) & 15] +
                  E[(s >>> 16) & 15] +
                  E[(s >>> 12) & 15] +
                  E[(s >>> 8) & 15] +
                  E[(s >>> 4) & 15] +
                  E[s & 15] +
                  E[(u >>> 28) & 15] +
                  E[(u >>> 24) & 15] +
                  E[(u >>> 20) & 15] +
                  E[(u >>> 16) & 15] +
                  E[(u >>> 12) & 15] +
                  E[(u >>> 8) & 15] +
                  E[(u >>> 4) & 15] +
                  E[u & 15] +
                  E[(l >>> 28) & 15] +
                  E[(l >>> 24) & 15] +
                  E[(l >>> 20) & 15] +
                  E[(l >>> 16) & 15] +
                  E[(l >>> 12) & 15] +
                  E[(l >>> 8) & 15] +
                  E[(l >>> 4) & 15] +
                  E[l & 15] +
                  E[(p >>> 28) & 15] +
                  E[(p >>> 24) & 15] +
                  E[(p >>> 20) & 15] +
                  E[(p >>> 16) & 15] +
                  E[(p >>> 12) & 15] +
                  E[(p >>> 8) & 15] +
                  E[(p >>> 4) & 15] +
                  E[p & 15] +
                  E[(x >>> 28) & 15] +
                  E[(x >>> 24) & 15] +
                  E[(x >>> 20) & 15] +
                  E[(x >>> 16) & 15] +
                  E[(x >>> 12) & 15] +
                  E[(x >>> 8) & 15] +
                  E[(x >>> 4) & 15] +
                  E[x & 15] +
                  E[(c >>> 28) & 15] +
                  E[(c >>> 24) & 15] +
                  E[(c >>> 20) & 15] +
                  E[(c >>> 16) & 15] +
                  E[(c >>> 12) & 15] +
                  E[(c >>> 8) & 15] +
                  E[(c >>> 4) & 15] +
                  E[c & 15] +
                  E[(o >>> 28) & 15] +
                  E[(o >>> 24) & 15] +
                  E[(o >>> 20) & 15] +
                  E[(o >>> 16) & 15] +
                  E[(o >>> 12) & 15] +
                  E[(o >>> 8) & 15] +
                  E[(o >>> 4) & 15] +
                  E[o & 15];
              return (
                this.is224 ||
                  (F +=
                    E[(f >>> 28) & 15] +
                    E[(f >>> 24) & 15] +
                    E[(f >>> 20) & 15] +
                    E[(f >>> 16) & 15] +
                    E[(f >>> 12) & 15] +
                    E[(f >>> 8) & 15] +
                    E[(f >>> 4) & 15] +
                    E[f & 15]),
                F
              );
            }),
            (y.prototype.toString = y.prototype.hex),
            (y.prototype.digest = function () {
              this.finalize();
              var s = this.h0,
                u = this.h1,
                l = this.h2,
                p = this.h3,
                x = this.h4,
                c = this.h5,
                o = this.h6,
                f = this.h7,
                F = [
                  (s >>> 24) & 255,
                  (s >>> 16) & 255,
                  (s >>> 8) & 255,
                  s & 255,
                  (u >>> 24) & 255,
                  (u >>> 16) & 255,
                  (u >>> 8) & 255,
                  u & 255,
                  (l >>> 24) & 255,
                  (l >>> 16) & 255,
                  (l >>> 8) & 255,
                  l & 255,
                  (p >>> 24) & 255,
                  (p >>> 16) & 255,
                  (p >>> 8) & 255,
                  p & 255,
                  (x >>> 24) & 255,
                  (x >>> 16) & 255,
                  (x >>> 8) & 255,
                  x & 255,
                  (c >>> 24) & 255,
                  (c >>> 16) & 255,
                  (c >>> 8) & 255,
                  c & 255,
                  (o >>> 24) & 255,
                  (o >>> 16) & 255,
                  (o >>> 8) & 255,
                  o & 255,
                ];
              return (
                this.is224 || F.push((f >>> 24) & 255, (f >>> 16) & 255, (f >>> 8) & 255, f & 255),
                F
              );
            }),
            (y.prototype.array = y.prototype.digest),
            (y.prototype.arrayBuffer = function () {
              this.finalize();
              var s = new ArrayBuffer(this.is224 ? 28 : 32),
                u = new DataView(s);
              return (
                u.setUint32(0, this.h0),
                u.setUint32(4, this.h1),
                u.setUint32(8, this.h2),
                u.setUint32(12, this.h3),
                u.setUint32(16, this.h4),
                u.setUint32(20, this.h5),
                u.setUint32(24, this.h6),
                this.is224 || u.setUint32(28, this.h7),
                s
              );
            }));
          function B(s, u, l) {
            var p,
              x = typeof s;
            if (x === 'string') {
              var c = [],
                o = s.length,
                f = 0,
                F;
              for (p = 0; p < o; ++p)
                ((F = s.charCodeAt(p)),
                  F < 128
                    ? (c[f++] = F)
                    : F < 2048
                      ? ((c[f++] = 192 | (F >>> 6)), (c[f++] = 128 | (F & 63)))
                      : F < 55296 || F >= 57344
                        ? ((c[f++] = 224 | (F >>> 12)),
                          (c[f++] = 128 | ((F >>> 6) & 63)),
                          (c[f++] = 128 | (F & 63)))
                        : ((F = 65536 + (((F & 1023) << 10) | (s.charCodeAt(++p) & 1023))),
                          (c[f++] = 240 | (F >>> 18)),
                          (c[f++] = 128 | ((F >>> 12) & 63)),
                          (c[f++] = 128 | ((F >>> 6) & 63)),
                          (c[f++] = 128 | (F & 63))));
              s = c;
            } else if (x === 'object') {
              if (s === null) throw new Error(w);
              if (O && s.constructor === ArrayBuffer) s = new Uint8Array(s);
              else if (!Array.isArray(s) && (!O || !ArrayBuffer.isView(s))) throw new Error(w);
            } else throw new Error(w);
            s.length > 64 && (s = new y(u, !0).update(s).array());
            var m = [],
              M = [];
            for (p = 0; p < 64; ++p) {
              var G = s[p] || 0;
              ((m[p] = 92 ^ G), (M[p] = 54 ^ G));
            }
            (y.call(this, u, l),
              this.update(M),
              (this.oKeyPad = m),
              (this.inner = !0),
              (this.sharedMemory = l));
          }
          ((B.prototype = new y()),
            (B.prototype.finalize = function () {
              if ((y.prototype.finalize.call(this), this.inner)) {
                this.inner = !1;
                var s = this.array();
                (y.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(s),
                  y.prototype.finalize.call(this));
              }
            }));
          var g = Z();
          ((g.sha256 = g),
            (g.sha224 = Z(!0)),
            (g.sha256.hmac = d()),
            (g.sha224.hmac = d(!0)),
            U ? (b.exports = g) : ((_.sha256 = g.sha256), (_.sha224 = g.sha224)));
        })();
      })(Et)),
    Et.exports
  );
}
var cr = fr(),
  j = {};
const lr = 'files',
  pr = () => {
    j.NEXT_PUBLIC_S3_DOMAIN &&
      console.warn(
        '⚠️ `NEXT_PUBLIC_S3_DOMAIN` will be de deprecated in the next major version, please replace it with `S3_PUBLIC_DOMAIN` in your env',
      );
    const b = j.S3_PUBLIC_DOMAIN || j.NEXT_PUBLIC_S3_DOMAIN;
    return qt({
      clientPrefix: 'NEXT_PUBLIC_',
      client: { NEXT_PUBLIC_S3_DOMAIN: rt().optional(), NEXT_PUBLIC_S3_FILE_PATH: rt().optional() },
      runtimeEnv: {
        CHUNKS_AUTO_EMBEDDING: j.CHUNKS_AUTO_EMBEDDING !== '0',
        CHUNKS_AUTO_GEN_METADATA: j.CHUNKS_AUTO_GEN_METADATA !== '0',
        EMBEDDING_BATCH_SIZE: j.EMBEDDING_BATCH_SIZE,
        EMBEDDING_CONCURRENCY: j.EMBEDDING_CONCURRENCY,
        NEXT_PUBLIC_S3_DOMAIN: j.NEXT_PUBLIC_S3_DOMAIN,
        NEXT_PUBLIC_S3_FILE_PATH: j.NEXT_PUBLIC_S3_FILE_PATH || lr,
        S3_ACCESS_KEY_ID: j.S3_ACCESS_KEY_ID,
        S3_BUCKET: j.S3_BUCKET,
        S3_ENABLE_PATH_STYLE: j.S3_ENABLE_PATH_STYLE === '1',
        S3_ENDPOINT: j.S3_ENDPOINT,
        S3_PREVIEW_URL_EXPIRE_IN: parseInt(j.S3_PREVIEW_URL_EXPIRE_IN || '7200'),
        S3_PUBLIC_DOMAIN: b,
        S3_REGION: j.S3_REGION,
        S3_SECRET_ACCESS_KEY: j.S3_SECRET_ACCESS_KEY,
        S3_SET_ACL: j.S3_SET_ACL === '1',
      },
      server: {
        CHUNKS_AUTO_EMBEDDING: ct(),
        CHUNKS_AUTO_GEN_METADATA: ct(),
        EMBEDDING_BATCH_SIZE: Ct.number().int().positive().default(50),
        EMBEDDING_CONCURRENCY: Ct.number().int().positive().default(10),
        S3_ACCESS_KEY_ID: rt().optional(),
        S3_BUCKET: rt().optional(),
        S3_ENABLE_PATH_STYLE: ct(),
        S3_ENDPOINT: rt().url().optional(),
        S3_PREVIEW_URL_EXPIRE_IN: tr(),
        S3_PUBLIC_DOMAIN: rt().optional(),
        S3_REGION: rt().optional(),
        S3_SECRET_ACCESS_KEY: rt().optional(),
        S3_SET_ACL: ct(),
      },
    });
  },
  xr = pr(),
  yr = 'NetWorkError',
  Er = (b, w = {}) => {
    const C = b.split('.').at(-1),
      _ = `${or()}.${C}`,
      A = (Date.now() / 1e3 / 60 / 60).toFixed(0),
      k = `${w.directory || xr.NEXT_PUBLIC_S3_FILE_PATH}/${A}`,
      U = w.pathname ?? `${k}/${_}`;
    return { date: A, dirname: k, filename: _, pathname: U };
  };
class dr {
  uploadFileToS3 = async (w, { onProgress: C, directory: _, pathname: A, abortController: k }) => ({
    data: await this.uploadToServerS3(w, {
      abortController: k,
      directory: _,
      onProgress: C,
      pathname: A,
    }),
    success: !0,
  });
  uploadBase64ToS3 = async (w, C = {}) => {
    const { base64: _, mimeType: A, type: k } = rr(w);
    if (!_ || !A || k !== 'base64') throw new Error('Invalid base64 data for image');
    const U = atob(_),
      O = [];
    for (let v = 0; v < U.length; v += 1024) {
      const Z = U.slice(v, v + 1024),
        Q = Array.from({ length: Z.length });
      for (let d = 0; d < Z.length; d++) Q[d] = Z.charCodeAt(d);
      const it = new Uint8Array(Q);
      O.push(it);
    }
    const E = new Blob(O, { type: A }),
      V = A.split('/')[1] || 'png',
      Y = `${C.filename || `image_${Zt().format('YYYY-MM-DD-hh-mm-ss')}`}.${V}`,
      P = new File([E], Y, { type: A }),
      { data: K } = await this.uploadFileToS3(P, C),
      N = cr.sha256(await P.arrayBuffer());
    return { fileType: A, hash: N, metadata: K, size: P.size };
  };
  uploadDataToS3 = async (w, C = {}) => {
    const _ = new Blob([JSON.stringify(w)], { type: 'application/json' }),
      A = new File([_], C.filename || 'data.json', { type: 'application/json' });
    return await this.uploadFileToS3(A, C);
  };
  uploadToServerS3 = async (
    w,
    { onProgress: C, directory: _, pathname: A, abortController: k },
  ) => {
    const U = new XMLHttpRequest(),
      { preSignUrl: O, ...E } = await this.getSignedUploadUrl(w, { directory: _, pathname: A }),
      V = Date.now();
    (k &&
      k.signal.addEventListener('abort', () => {
        U.abort();
      }),
      U.upload.addEventListener('progress', (P) => {
        if (P.lengthComputable) {
          const K = Number(((P.loaded / P.total) * 100).toFixed(1)),
            N = P.loaded / ((Date.now() - V) / 1e3);
          C?.('uploading', {
            progress: K === 100 ? 99.9 : K,
            restTime: (P.total - P.loaded) / N,
            speed: N,
          });
        }
      }),
      U.open('PUT', O),
      U.setRequestHeader('Content-Type', w.type));
    const Y = await w.arrayBuffer();
    return (
      await new Promise((P, K) => {
        (U.addEventListener('load', () => {
          U.status >= 200 && U.status < 300
            ? (C?.('success', {
                progress: 100,
                restTime: 0,
                speed: w.size / ((Date.now() - V) / 1e3),
              }),
              P(U.response))
            : K(U.statusText);
        }),
          U.addEventListener('error', () => {
            U.status === 0 ? K(yr) : K(U.statusText);
          }),
          U.addEventListener('abort', () => {
            (C?.('cancelled', { progress: 0, restTime: 0, speed: 0 }),
              K(new Error('Upload cancelled by user')));
          }),
          U.send(Y));
      }),
      E
    );
  };
  getImageFileByUrlWithCORS = async (w, C, _ = 'image/png') => {
    const k = await (await fetch(nr.proxy, { body: w, method: 'POST' })).arrayBuffer();
    return new File([k], C, { lastModified: Date.now(), type: _ });
  };
  getSignedUploadUrl = async (w, C = {}) => {
    const { date: _, dirname: A, filename: k, pathname: U } = Er(w.name, C),
      O = await Qt.upload.createS3PreSignedUrl.mutate({ pathname: U });
    return { date: _, dirname: A, filename: k, path: U, preSignUrl: O };
  };
}
const Sr = new dr();
export { yr as U, ur as r, cr as s, Sr as u };
