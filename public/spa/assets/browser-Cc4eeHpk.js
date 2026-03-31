import { p as x, g as O } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { cB as q } from './index-C8UyLGsD.js';
var m = { exports: {} },
  A,
  E;
function _() {
  if (E) return A;
  E = 1;
  function f(s) {
    ((e.debug = e),
      (e.default = e),
      (e.coerce = o),
      (e.disable = w),
      (e.enable = b),
      (e.enabled = y),
      (e.humanize = q()),
      (e.destroy = c),
      Object.keys(s).forEach((n) => {
        e[n] = s[n];
      }),
      (e.names = []),
      (e.skips = []),
      (e.formatters = {}));
    function p(n) {
      let t = 0;
      for (let r = 0; r < n.length; r++) ((t = (t << 5) - t + n.charCodeAt(r)), (t |= 0));
      return e.colors[Math.abs(t) % e.colors.length];
    }
    e.selectColor = p;
    function e(n) {
      let t,
        r = null,
        i,
        a;
      function C(...l) {
        if (!C.enabled) return;
        const u = C,
          F = Number(new Date()),
          j = F - (t || F);
        ((u.diff = j),
          (u.prev = t),
          (u.curr = F),
          (t = F),
          (l[0] = e.coerce(l[0])),
          typeof l[0] != 'string' && l.unshift('%O'));
        let g = 0;
        ((l[0] = l[0].replace(/%([a-zA-Z%])/g, (v, D) => {
          if (v === '%%') return '%';
          g++;
          const I = e.formatters[D];
          if (typeof I == 'function') {
            const B = l[g];
            ((v = I.call(u, B)), l.splice(g, 1), g--);
          }
          return v;
        })),
          e.formatArgs.call(u, l),
          (u.log || e.log).apply(u, l));
      }
      return (
        (C.namespace = n),
        (C.useColors = e.useColors()),
        (C.color = e.selectColor(n)),
        (C.extend = h),
        (C.destroy = e.destroy),
        Object.defineProperty(C, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            r !== null ? r : (i !== e.namespaces && ((i = e.namespaces), (a = e.enabled(n))), a),
          set: (l) => {
            r = l;
          },
        }),
        typeof e.init == 'function' && e.init(C),
        C
      );
    }
    function h(n, t) {
      const r = e(this.namespace + (typeof t > 'u' ? ':' : t) + n);
      return ((r.log = this.log), r);
    }
    function b(n) {
      (e.save(n), (e.namespaces = n), (e.names = []), (e.skips = []));
      const t = (typeof n == 'string' ? n : '')
        .trim()
        .replace(/\s+/g, ',')
        .split(',')
        .filter(Boolean);
      for (const r of t) r[0] === '-' ? e.skips.push(r.slice(1)) : e.names.push(r);
    }
    function d(n, t) {
      let r = 0,
        i = 0,
        a = -1,
        C = 0;
      for (; r < n.length; )
        if (i < t.length && (t[i] === n[r] || t[i] === '*'))
          t[i] === '*' ? ((a = i), (C = r), i++) : (r++, i++);
        else if (a !== -1) ((i = a + 1), C++, (r = C));
        else return !1;
      for (; i < t.length && t[i] === '*'; ) i++;
      return i === t.length;
    }
    function w() {
      const n = [...e.names, ...e.skips.map((t) => '-' + t)].join(',');
      return (e.enable(''), n);
    }
    function y(n) {
      for (const t of e.skips) if (d(n, t)) return !1;
      for (const t of e.names) if (d(n, t)) return !0;
      return !1;
    }
    function o(n) {
      return n instanceof Error ? n.stack || n.message : n;
    }
    function c() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return (e.enable(e.load()), e);
  }
  return ((A = f), A);
}
var k;
function z() {
  return (
    k ||
      ((k = 1),
      (function (f, s) {
        var p = {};
        ((s.formatArgs = h),
          (s.save = b),
          (s.load = d),
          (s.useColors = e),
          (s.storage = w()),
          (s.destroy = (() => {
            let o = !1;
            return () => {
              o ||
                ((o = !0),
                console.warn(
                  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
                ));
            };
          })()),
          (s.colors = [
            '#0000CC',
            '#0000FF',
            '#0033CC',
            '#0033FF',
            '#0066CC',
            '#0066FF',
            '#0099CC',
            '#0099FF',
            '#00CC00',
            '#00CC33',
            '#00CC66',
            '#00CC99',
            '#00CCCC',
            '#00CCFF',
            '#3300CC',
            '#3300FF',
            '#3333CC',
            '#3333FF',
            '#3366CC',
            '#3366FF',
            '#3399CC',
            '#3399FF',
            '#33CC00',
            '#33CC33',
            '#33CC66',
            '#33CC99',
            '#33CCCC',
            '#33CCFF',
            '#6600CC',
            '#6600FF',
            '#6633CC',
            '#6633FF',
            '#66CC00',
            '#66CC33',
            '#9900CC',
            '#9900FF',
            '#9933CC',
            '#9933FF',
            '#99CC00',
            '#99CC33',
            '#CC0000',
            '#CC0033',
            '#CC0066',
            '#CC0099',
            '#CC00CC',
            '#CC00FF',
            '#CC3300',
            '#CC3333',
            '#CC3366',
            '#CC3399',
            '#CC33CC',
            '#CC33FF',
            '#CC6600',
            '#CC6633',
            '#CC9900',
            '#CC9933',
            '#CCCC00',
            '#CCCC33',
            '#FF0000',
            '#FF0033',
            '#FF0066',
            '#FF0099',
            '#FF00CC',
            '#FF00FF',
            '#FF3300',
            '#FF3333',
            '#FF3366',
            '#FF3399',
            '#FF33CC',
            '#FF33FF',
            '#FF6600',
            '#FF6633',
            '#FF9900',
            '#FF9933',
            '#FFCC00',
            '#FFCC33',
          ]));
        function e() {
          if (
            typeof window < 'u' &&
            window.process &&
            (window.process.type === 'renderer' || window.process.__nwjs)
          )
            return !0;
          if (
            typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          let o;
          return (
            (typeof document < 'u' &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            (typeof window < 'u' &&
              window.console &&
              (window.console.firebug || (window.console.exception && window.console.table))) ||
            (typeof navigator < 'u' &&
              navigator.userAgent &&
              (o = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
              parseInt(o[1], 10) >= 31) ||
            (typeof navigator < 'u' &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }
        function h(o) {
          if (
            ((o[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              o[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              f.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const c = 'color: ' + this.color;
          o.splice(1, 0, c, 'color: inherit');
          let n = 0,
            t = 0;
          (o[0].replace(/%[a-zA-Z%]/g, (r) => {
            r !== '%%' && (n++, r === '%c' && (t = n));
          }),
            o.splice(t, 0, c));
        }
        s.log = console.debug || console.log || (() => {});
        function b(o) {
          try {
            o ? s.storage.setItem('debug', o) : s.storage.removeItem('debug');
          } catch {}
        }
        function d() {
          let o;
          try {
            o = s.storage.getItem('debug') || s.storage.getItem('DEBUG');
          } catch {}
          return (!o && typeof x < 'u' && 'env' in x && (o = p.DEBUG), o);
        }
        function w() {
          try {
            return localStorage;
          } catch {}
        }
        f.exports = _()(s);
        const { formatters: y } = f.exports;
        y.j = function (o) {
          try {
            return JSON.stringify(o);
          } catch (c) {
            return '[UnexpectedJSONParseError]: ' + c.message;
          }
        };
      })(m, m.exports)),
    m.exports
  );
}
var L = z();
const G = O(L);
export { G as i };
