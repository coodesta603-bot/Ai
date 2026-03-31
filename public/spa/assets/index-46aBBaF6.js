import { j as v } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as _, b as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { J as fe, a1 as Pe, a2 as ve } from './index-bsLCy3LH.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import {
  h6 as ae,
  g as se,
  F as b,
  f as _e,
  a2 as he,
  v as ye,
  b3 as me,
  k as we,
  j as be,
  Z as Oe,
  aI as Se,
} from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { ag as je, g as M, p as U, u as O, b0 as ie } from './index-Br6hqyew.js';
import { S as oe } from './index-DLsdvBKx.js';
import { M as ue } from './Markdown-Mtmmwid1.js';
import { I as xe } from './index-D986vWty.js';
import { D as Me } from './index-DztaUF15.js';
import { t as Ce } from './public-api-DSvKTJq_.js';
import { D as Ee } from './index-BfwjtmVb.js';
const De = (e) =>
    _.useMemo(() => {
      if (!e) return '';
      try {
        const t = ae.parse(e);
        return Object.keys(t).length === 0 ? '' : Ce(t);
      } catch {
        return e;
      }
    }, [e]),
  le = (e) => {
    let t = !0;
    try {
      JSON.parse(e);
    } catch {
      t = !1;
    }
    const s = t ? JSON.parse(e) : e;
    return _.useMemo(() => ({ data: s, isJSON: t }), [e]);
  },
  Ne = _.memo(
    ({
      content: e,
      arguments: t = '',
      pluginState: s,
      toolCallId: l,
      messageId: o,
      identifier: d,
      pluginError: p,
      apiName: g,
    }) => {
      const { data: i } = le(e),
        u = fe(d, g);
      if (!u) return;
      const c = je(t);
      return v.jsx(u, {
        apiName: g,
        args: c || {},
        content: i,
        identifier: d,
        messageId: o || l || '',
        pluginError: p,
        pluginState: s,
        toolCallId: l,
      });
    },
  ),
  Le = he`
  0% {
    inset-inline-start: 0;
    transform: translateX(-100%);
  }

  100% {
    inset-inline-start: 100%;
    transform: translateX(0%);
  }
`,
  Re = _e(
    ({ css: e, cssVar: t }) => e`
    position: relative;

    overflow: hidden;
    display: block;

    width: 300px;
    height: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: 10px;

    &::after {
      content: '';

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;

      box-sizing: border-box;
      width: 40%;
      height: 100%;

      background: ${t.colorPrimary};

      animation: ${Le} 2s linear infinite;
    }
  `,
  ),
  ge = _.memo(() => {
    const { t: e } = se('plugin');
    return v.jsxs(b, {
      align: 'center',
      gap: 8,
      padding: 16,
      children: [v.jsx('span', { className: Re }), e('loading.content')],
    });
  });
var w = {},
  D = { exports: {} },
  N,
  $;
function C() {
  if ($) return N;
  $ = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (u, c) => {
      for (var n in c) e(u, n, { get: c[n], enumerable: !0 });
    },
    d = (u, c, n, a) => {
      if ((c && typeof c == 'object') || typeof c == 'function')
        for (let r of s(c))
          !l.call(u, r) &&
            r !== n &&
            e(u, r, { get: () => c[r], enumerable: !(a = t(c, r)) || a.enumerable });
      return u;
    },
    p = (u) => d(e({}, '__esModule', { value: !0 }), u),
    g = {};
  (o(g, { PluginChannel: () => i }), (N = p(g)));
  var i = ((u) => (
    (u.createAssistantMessage = 'lobe-chat:create-assistant-message'),
    (u.fetchPluginMessage = 'lobe-chat:fetch-plugin-message'),
    (u.fetchPluginSettings = 'lobe-chat:fetch-plugin-settings'),
    (u.fetchPluginState = 'lobe-chat:fetch-plugin-state'),
    (u.fillStandalonePluginContent = 'lobe-chat:fill-plugin-content'),
    (u.initStandalonePlugin = 'lobe-chat:init-standalone-plugin'),
    (u.pluginReadyForRender = 'lobe-chat:plugin-ready-for-render'),
    (u.renderPlugin = 'lobe-chat:render-plugin'),
    (u.renderPluginSettings = 'lobe-chat:render-plugin-settings'),
    (u.renderPluginState = 'lobe-chat:render-plugin-state'),
    (u.triggerAIMessage = 'lobe-chat:trigger-ai-message'),
    (u.updatePluginSettings = 'lobe-chat:update-plugin-settings'),
    (u.updatePluginState = 'lobe-chat:update-plugin-state'),
    u
  ))(i || {});
  return N;
}
var L, V;
function ce() {
  if (V) return L;
  V = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (n, a) => {
      for (var r in a) e(n, r, { get: a[r], enumerable: !0 });
    },
    d = (n, a, r, f) => {
      if ((a && typeof a == 'object') || typeof a == 'function')
        for (let P of s(a))
          !l.call(n, P) &&
            P !== r &&
            e(n, P, { get: () => a[P], enumerable: !(f = t(a, P)) || f.enumerable });
      return n;
    },
    p = (n) => d(e({}, '__esModule', { value: !0 }), n),
    g = {};
  (o(g, { lobeChat: () => c }), (L = p(g)));
  var i = C(),
    u = class {
      constructor() {
        ((this.getPluginPayload = () =>
          new Promise((n) => {
            if (typeof window > 'u') {
              n(void 0);
              return;
            }
            const a = setTimeout(() => {
                (n(void 0), window.removeEventListener('message', r));
              }, 1e3),
              r = (f) => {
                if (f.data.type === i.PluginChannel.initStandalonePlugin) {
                  const P = f.data.payload || f.data.props,
                    h = P.apiName,
                    m = JSON.parse(P.arguments || '{}');
                  (clearTimeout(a),
                    n({ arguments: m, name: h, settings: f.data.settings, state: f.data.state }),
                    window.removeEventListener('message', r));
                }
              };
            (window.addEventListener('message', r),
              top?.postMessage({ type: i.PluginChannel.pluginReadyForRender }, '*'));
          })),
          (this.getPluginSettings = () =>
            new Promise((n) => {
              if (typeof window > 'u') {
                n(void 0);
                return;
              }
              const a = (r) => {
                r.data.type === i.PluginChannel.renderPluginSettings &&
                  (n(r.data.value), window.removeEventListener('message', a));
              };
              (window.addEventListener('message', a),
                top?.postMessage({ type: i.PluginChannel.fetchPluginSettings }, '*'));
            })),
          (this.setPluginSettings = (n) => {
            top?.postMessage({ type: i.PluginChannel.updatePluginSettings, value: n }, '*');
          }),
          (this.getPluginMessage = () =>
            new Promise((n) => {
              if (typeof window > 'u') {
                n(void 0);
                return;
              }
              const a = (r) => {
                if (r.data.type === i.PluginChannel.renderPlugin) {
                  const f = r.data.props;
                  (n(f.content), window.removeEventListener('message', a));
                }
              };
              (window.addEventListener('message', a),
                top?.postMessage({ type: i.PluginChannel.fetchPluginMessage }, '*'));
            })),
          (this.setPluginMessage = (n, a) => {
            top?.postMessage(
              {
                content: n,
                triggerAiMessage: a,
                type: i.PluginChannel.fillStandalonePluginContent,
              },
              '*',
            );
          }),
          (this.getPluginState = (n) =>
            new Promise((a) => {
              if (typeof window > 'u') {
                a(void 0);
                return;
              }
              const r = (f) => {
                f.data.type === i.PluginChannel.renderPluginState &&
                  f.data.key === n &&
                  (a(f.data.value), window.removeEventListener('message', r));
              };
              (window.addEventListener('message', r),
                top?.postMessage({ key: n, type: i.PluginChannel.fetchPluginState }, '*'));
            })),
          (this.setPluginState = (n, a) => {
            top?.postMessage({ key: n, type: i.PluginChannel.updatePluginState, value: a }, '*');
          }),
          (this.triggerAIMessage = (n) => {
            top?.postMessage({ id: n, type: i.PluginChannel.triggerAIMessage }, '*');
          }),
          (this.createAssistantMessage = (n) => {
            top?.postMessage({ content: n, type: i.PluginChannel.createAssistantMessage }, '*');
          }));
      }
    },
    c = new u();
  return L;
}
var R, z;
function Te() {
  if (z) return R;
  z = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (h, m) => {
      for (var j in m) e(h, j, { get: m[j], enumerable: !0 });
    },
    d = (h, m, j, B) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let S of s(m))
          !l.call(h, S) &&
            S !== j &&
            e(h, S, { get: () => m[S], enumerable: !(B = t(m, S)) || B.enumerable });
      return h;
    },
    p = (h) => d(e({}, '__esModule', { value: !0 }), h),
    g = {};
  (o(g, {
    fetchPluginMessage: () => r,
    fetchPluginPayload: () => f,
    fetchPluginSettings: () => P,
    fetchPluginState: () => a,
    postToFillPluginContent: () => u,
    postToUpdatePluginSettings: () => n,
    postToUpdatePluginState: () => c,
  }),
    (R = p(g)));
  var i = ce(),
    u = i.lobeChat.setPluginMessage,
    c = i.lobeChat.setPluginState,
    n = i.lobeChat.setPluginSettings,
    a = i.lobeChat.getPluginState,
    r = i.lobeChat.getPluginMessage,
    f = i.lobeChat.getPluginPayload,
    P = i.lobeChat.getPluginSettings;
  return R;
}
var T = { exports: {} },
  k,
  H;
function ke() {
  if (H) return k;
  H = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (n, a) => {
      for (var r in a) e(n, r, { get: a[r], enumerable: !0 });
    },
    d = (n, a, r, f) => {
      if ((a && typeof a == 'object') || typeof a == 'function')
        for (let P of s(a))
          !l.call(n, P) &&
            P !== r &&
            e(n, P, { get: () => a[P], enumerable: !(f = t(a, P)) || f.enumerable });
      return n;
    },
    p = (n) => d(e({}, '__esModule', { value: !0 }), n),
    g = {};
  (o(g, { useOnStandalonePluginInit: () => c }), (k = p(g)));
  var i = x(),
    u = E(),
    c = (n) => {
      (0, i.useEffect)(() => {
        u.lobeChat.getPluginPayload().then((a) => {
          a && n(a);
        });
      }, []);
    };
  return k;
}
var q, X;
function qe() {
  if (X) return q;
  X = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (n, a) => {
      for (var r in a) e(n, r, { get: a[r], enumerable: !0 });
    },
    d = (n, a, r, f) => {
      if ((a && typeof a == 'object') || typeof a == 'function')
        for (let P of s(a))
          !l.call(n, P) &&
            P !== r &&
            e(n, P, { get: () => a[P], enumerable: !(f = t(a, P)) || f.enumerable });
      return n;
    },
    p = (n) => d(e({}, '__esModule', { value: !0 }), n),
    g = {};
  (o(g, { usePluginSettings: () => c }), (q = p(g)));
  var i = x(),
    u = E(),
    c = (n) => {
      const [a, r] = (0, i.useState)(n);
      (0, i.useEffect)(() => {
        u.lobeChat.getPluginSettings().then((P) => {
          P && r(P);
        });
      }, []);
      const f = (0, i.useCallback)((P) => {
        (r(P), u.lobeChat.setPluginSettings(P));
      }, []);
      return [a, f];
    };
  return q;
}
var W, G;
function We() {
  if (G) return W;
  G = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (n, a) => {
      for (var r in a) e(n, r, { get: a[r], enumerable: !0 });
    },
    d = (n, a, r, f) => {
      if ((a && typeof a == 'object') || typeof a == 'function')
        for (let P of s(a))
          !l.call(n, P) &&
            P !== r &&
            e(n, P, { get: () => a[P], enumerable: !(f = t(a, P)) || f.enumerable });
      return n;
    },
    p = (n) => d(e({}, '__esModule', { value: !0 }), n),
    g = {};
  (o(g, { usePluginState: () => c }), (W = p(g)));
  var i = x(),
    u = E(),
    c = (n, a) => {
      const [r, f] = (0, i.useState)(a);
      (0, i.useEffect)(() => {
        u.lobeChat.getPluginState(n).then((h) => {
          h && f(h);
        });
      }, [n]);
      const P = (0, i.useCallback)(
        (h) => {
          (f(h), u.lobeChat.setPluginState(n, h));
        },
        [n],
      );
      return [r, P];
    };
  return W;
}
var I, K;
function Ie() {
  if (K) return I;
  K = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (c, n) => {
      for (var a in n) e(c, a, { get: n[a], enumerable: !0 });
    },
    d = (c, n, a, r) => {
      if ((n && typeof n == 'object') || typeof n == 'function')
        for (let f of s(n))
          !l.call(c, f) &&
            f !== a &&
            e(c, f, { get: () => n[f], enumerable: !(r = t(n, f)) || r.enumerable });
      return c;
    },
    p = (c) => d(e({}, '__esModule', { value: !0 }), c),
    g = {};
  (o(g, { onReceiveData: () => u }), (I = p(g)));
  var i = C(),
    u = (c, n) => {
      if (c.data.type === i.PluginChannel.renderPlugin) {
        const a = c.data.props;
        n(a);
      }
    };
  return I;
}
var A, Y;
function Ae() {
  if (Y) return A;
  Y = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (a, r) => {
      for (var f in r) e(a, f, { get: r[f], enumerable: !0 });
    },
    d = (a, r, f, P) => {
      if ((r && typeof r == 'object') || typeof r == 'function')
        for (let h of s(r))
          !l.call(a, h) &&
            h !== f &&
            e(a, h, { get: () => r[h], enumerable: !(P = t(r, h)) || P.enumerable });
      return a;
    },
    p = (a) => d(e({}, '__esModule', { value: !0 }), a),
    g = {};
  (o(g, { useWatchPluginMessage: () => n }), (A = p(g)));
  var i = x(),
    u = C(),
    c = Ie(),
    n = () => {
      const [a, r] = (0, i.useState)({ data: void 0, loading: !0 }),
        f = (P) => {
          (0, c.onReceiveData)(P, (h) => {
            r({ data: h.content, loading: !1 });
          });
        };
      return (
        (0, i.useEffect)(
          () => (
            window?.addEventListener('message', f),
            top?.postMessage({ type: u.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window?.removeEventListener('message', f);
            }
          ),
          [],
        ),
        a
      );
    };
  return A;
}
var Z;
function Je() {
  return (
    Z ||
      ((Z = 1),
      (function (e) {
        var t = Object.defineProperty,
          s = Object.getOwnPropertyDescriptor,
          l = Object.getOwnPropertyNames,
          o = Object.prototype.hasOwnProperty,
          d = (u, c, n, a) => {
            if ((c && typeof c == 'object') || typeof c == 'function')
              for (let r of l(c))
                !o.call(u, r) &&
                  r !== n &&
                  t(u, r, { get: () => c[r], enumerable: !(a = s(c, r)) || a.enumerable });
            return u;
          },
          p = (u, c, n) => (d(u, c, 'default'), n && d(n, c, 'default')),
          g = (u) => d(t({}, '__esModule', { value: !0 }), u),
          i = {};
        ((e.exports = g(i)),
          p(i, ke(), e.exports),
          p(i, qe(), e.exports),
          p(i, We(), e.exports),
          p(i, Ae(), e.exports));
      })(T)),
    T.exports
  );
}
var J, Q;
function Fe() {
  if (Q) return J;
  Q = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.prototype.hasOwnProperty,
    o = (g, i, u, c) => {
      if ((i && typeof i == 'object') || typeof i == 'function')
        for (let n of s(i))
          !l.call(g, n) &&
            n !== u &&
            e(g, n, { get: () => i[n], enumerable: !(c = t(i, n)) || c.enumerable });
      return g;
    },
    d = (g) => o(e({}, '__esModule', { value: !0 }), g),
    p = {};
  return ((J = d(p)), J);
}
var ee;
function E() {
  return (
    ee ||
      ((ee = 1),
      (function (e) {
        var t = Object.defineProperty,
          s = Object.getOwnPropertyDescriptor,
          l = Object.getOwnPropertyNames,
          o = Object.prototype.hasOwnProperty,
          d = (u, c, n, a) => {
            if ((c && typeof c == 'object') || typeof c == 'function')
              for (let r of l(c))
                !o.call(u, r) &&
                  r !== n &&
                  t(u, r, { get: () => c[r], enumerable: !(a = s(c, r)) || a.enumerable });
            return u;
          },
          p = (u, c, n) => (d(u, c, 'default'), n && d(n, c, 'default')),
          g = (u) => d(t({}, '__esModule', { value: !0 }), u),
          i = {};
        ((e.exports = g(i)),
          p(i, C(), e.exports),
          p(i, Te(), e.exports),
          p(i, Je(), e.exports),
          p(i, ce(), e.exports),
          p(i, Fe(), e.exports));
      })(D)),
    D.exports
  );
}
var te;
function Ue() {
  return (
    te ||
      ((te = 1),
      (function (e) {
        var t =
            (w && w.__createBinding) ||
            (Object.create
              ? function (l, o, d, p) {
                  p === void 0 && (p = d);
                  var g = Object.getOwnPropertyDescriptor(o, d);
                  ((!g || ('get' in g ? !o.__esModule : g.writable || g.configurable)) &&
                    (g = {
                      enumerable: !0,
                      get: function () {
                        return o[d];
                      },
                    }),
                    Object.defineProperty(l, p, g));
                }
              : function (l, o, d, p) {
                  (p === void 0 && (p = d), (l[p] = o[d]));
                }),
          s =
            (w && w.__exportStar) ||
            function (l, o) {
              for (var d in l)
                d !== 'default' && !Object.prototype.hasOwnProperty.call(o, d) && t(o, l, d);
            };
        (Object.defineProperty(e, '__esModule', { value: !0 }), s(E(), e));
      })(w)),
    w
  );
}
var y = Ue();
const pe = (e, t = []) => {
    const [s, l] = _.useState(!1);
    return (
      _.useEffect(() => {
        const o = (d) => {
          d.data.type === y.PluginChannel.pluginReadyForRender && l(!0);
        };
        return (
          window.addEventListener('message', o),
          () => {
            window.removeEventListener('message', o);
          }
        );
      }, []),
      _.useEffect(() => {
        s && e();
      }, [s, ...t]),
      s
    );
  },
  de = (e, t = []) => {
    _.useEffect(() => {
      const s = (l) => {
        l.data.type === y.PluginChannel.fetchPluginMessage && e(l.data);
      };
      return (
        window.addEventListener('message', s),
        () => {
          window.removeEventListener('message', s);
        }
      );
    }, t);
  },
  Be = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        s.data.type === y.PluginChannel.fetchPluginState && e(s.data.key);
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  $e = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        if (s.data.type === y.PluginChannel.fillStandalonePluginContent) {
          const l = s.data.content,
            o = s.data.triggerAiMessage,
            d = typeof l != 'string' ? JSON.stringify(l) : l;
          e(d, o);
        }
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  Ve = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        s.data.type === y.PluginChannel.fetchPluginSettings && e();
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  ze = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        s.data.type === y.PluginChannel.triggerAIMessage && e(s.data.id);
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  He = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        s.data.type === y.PluginChannel.createAssistantMessage && e(s.data.content);
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  F = (e, t) => {
    e.postMessage({ props: t, type: y.PluginChannel.renderPlugin }, '*');
  },
  Xe = (e, t) => {
    e.postMessage({ type: y.PluginChannel.initStandalonePlugin, ...t, props: t.payload }, '*');
  },
  Ge = (e, t, s) => {
    e.postMessage({ key: t, type: y.PluginChannel.renderPluginState, value: s }, '*');
  },
  Ke = (e, t) => {
    e.postMessage({ type: y.PluginChannel.renderPluginSettings, value: t }, '*');
  },
  Ye = _.memo(({ url: e, width: t = 800, height: s = 300, ...l }) => {
    const o = _.useRef(null),
      [d, p] = _.useState(!0);
    return (
      pe(() => {
        const g = o.current?.contentWindow;
        g && F(g, l);
      }, [l]),
      de(() => {
        const g = o.current?.contentWindow;
        g && F(g, l);
      }, [l]),
      v.jsxs(v.Fragment, {
        children: [
          d && v.jsx(oe, { active: !0, style: { maxWidth: '100%', width: t } }),
          v.jsx('iframe', {
            allowtransparency: 'true',
            height: s,
            hidden: d,
            ref: o,
            src: e,
            width: t,
            style: { border: 0, colorScheme: 'light', maxWidth: '100%' },
            onLoad: () => {
              p(!1);
            },
          }),
        ],
      })
    );
  }),
  Ze = _.memo(({ content: e, name: t, loading: s }) => {
    const l = M(U.getToolManifestById(t || '')),
      { isJSON: o, data: d } = le(e);
    if (!o) return s && v.jsx(ge, {});
    if (!l?.ui) return;
    const p = l.ui;
    if (p.url)
      return v.jsx(Ye, {
        content: d,
        height: p.height,
        name: t || 'unknown',
        url: p.url,
        width: p.width,
      });
  }),
  Qe = _.memo(({ content: e, loading: t }) => {
    const s = ye(me.fontSize);
    return t ? v.jsx(ge, {}) : v.jsx(ue, { fontSize: s, variant: 'chat', children: e });
  }),
  et = (e) =>
    Array.isArray(e)
      ? e.map((t) => (typeof t == 'object' ? JSON.stringify(t) : t)).join(', ')
      : typeof e == 'object' && e !== null
        ? Object.entries(e)
            .map(([t, s]) => `${t}: ${typeof s == 'object' ? JSON.stringify(s) : s}`)
            .join(', ')
        : String(e),
  tt = _.memo(({ arguments: e = '', loading: t, actions: s }) => {
    const { t: l } = se('plugin'),
      o = _.useMemo(() => {
        try {
          const g = ae.parse(e);
          return Object.keys(g).length === 0 ? {} : g;
        } catch {
          return e;
        }
      }, [e]),
      d = De(e);
    let p;
    if (typeof o == 'string')
      p = !!d && v.jsx(Se, { language: 'yaml', showLanguage: !1, children: d });
    else if (Object.keys(o).length === 0) p = null;
    else {
      const g = Object.entries(o).map(([i, u]) => ({
        copyable: !0,
        key: i,
        label: i,
        value: et(u),
      }));
      p = v.jsx(b, {
        paddingBlock: 4,
        paddingInline: 16,
        children: v.jsx(Me, {
          bordered: !1,
          items: g,
          labelWidth: 140,
          maxItemWidth: '100%',
          classNames: { label: be(t && Pe.shinyText) },
          styles: {
            label: t ? { color: `color-mix(in srgb, ${we.colorText} 33%, transparent)` } : {},
          },
        }),
      });
    }
    return v.jsxs(v.Fragment, {
      children: [
        v.jsxs(b, {
          horizontal: !0,
          align: 'center',
          gap: 4,
          justify: 'space-between',
          paddingBlock: 8,
          paddingInline: 16,
          children: [
            v.jsx(Oe, { children: l('arguments.title') }),
            v.jsx(b, { horizontal: !0, gap: 4, children: s }),
          ],
        }),
        v.jsx(Ee, { style: { marginBlock: 0 } }),
        p,
      ],
    });
  }),
  nt = _.memo(({ pluginState: e, arguments: t }) => {
    if (!e) return;
    const { content: s } = e,
      l = s.some((o) => o.type === 'image');
    return v.jsxs(b, {
      gap: 8,
      style: l ? void 0 : { maxHeight: 400, overflow: 'scroll', padding: 8, width: '100%' },
      children: [
        t && v.jsx(tt, { arguments: t }),
        v.jsx(b, {
          children: v.jsx(b, {
            children: s.map((o, d) => {
              switch (o.type) {
                case 'text':
                  return v.jsx(ue, { variant: 'chat', children: o.text }, o.text);
                case 'image':
                  return v.jsx(
                    xe,
                    { alt: 'MCP content', height: 'auto', src: o.data, width: '100%' },
                    `image-${d}`,
                  );
                default:
                  return null;
              }
            }),
          }),
        }),
      ],
    });
  }),
  rt = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        s.data.type === y.PluginChannel.updatePluginSettings && e(s.data.value);
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  at = (e) => {
    _.useEffect(() => {
      const t = (s) => {
        if (s.data.type === y.PluginChannel.updatePluginState) {
          const l = s.data.key,
            o = s.data.value;
          e(l, o);
        }
      };
      return (
        window.addEventListener('message', t),
        () => {
          window.removeEventListener('message', t);
        }
      );
    }, []);
  },
  ne = (e) => U.getPluginSettingsById(e)(M.getState()),
  re = (e) => ie.getDbMessageById(e)(O.getState()),
  st = _.memo(({ url: e, id: t, payload: s, width: l = 600, height: o = 300 }) => {
    const [d, p] = _.useState(!0),
      g = _.useRef(null);
    (pe(() => {
      const r = g.current?.contentWindow;
      if (r && s) {
        const f = ne(s.identifier),
          h = re(t)?.pluginState;
        Xe(r, { payload: s, settings: f, state: h });
      }
    }, [s]),
      de(() => {
        const r = g.current?.contentWindow;
        if (r) {
          const f = ie.getDbMessageById(t)(O.getState());
          if (!f) return;
          const P = { content: '' };
          try {
            P.content = JSON.parse(f.content || '{}');
          } catch {
            P.content = f.content || '';
          }
          F(r, P);
        }
      }, []));
    const i = O((r) => r.fillPluginMessageContent);
    ($e((r, f) => {
      i(t, r, f);
    }),
      Be((r) => {
        const f = g.current?.contentWindow;
        if (f) {
          const P = re(t);
          if (!P) return;
          Ge(f, r, P.pluginState?.[r]);
        }
      }));
    const u = O((r) => r.optimisticUpdatePluginState);
    (at((r, f) => {
      u(t, { [r]: f });
    }),
      Ve(() => {
        const r = g.current?.contentWindow;
        if (r) {
          if (!s?.identifier) return;
          const f = ne(s.identifier);
          Ke(r, f);
        }
      }));
    const c = M((r) => r.updatePluginSettings);
    rt((r) => {
      s?.identifier && c(s?.identifier, r);
    });
    const n = O((r) => r.triggerAIMessage);
    ze((r) => {
      r === t && n({ parentId: t });
    });
    const a = O((r) => r.createAssistantMessageByPlugin);
    return (
      He((r) => {
        a(r, t);
      }),
      v.jsxs(v.Fragment, {
        children: [
          d && v.jsx(oe, { active: !0, style: { maxWidth: '100%', width: l } }),
          v.jsx('iframe', {
            allowtransparency: 'true',
            height: o,
            hidden: d,
            ref: g,
            src: e,
            width: l,
            style: { border: 0, colorScheme: 'light', maxWidth: '100%' },
            onLoad: () => {
              p(!1);
            },
          }),
        ],
      })
    );
  }),
  it = _.memo(({ payload: e, id: t, name: s = 'unknown' }) => {
    const l = M(U.getToolManifestById(s));
    if (!l?.ui) return;
    const o = l.ui;
    if (o.url && !t.startsWith('tmp'))
      return v.jsx(st, { height: o.height, id: t, payload: e, url: o.url, width: o.width }, t);
  }),
  mt = _.memo(
    ({
      content: e,
      arguments: t = '',
      toolCallId: s,
      messageId: l,
      payload: o,
      pluginState: d,
      identifier: p,
      type: g,
      loading: i,
      pluginError: u,
    }) => {
      const c = () => {
          switch (g) {
            case 'standalone':
              return v.jsx(it, { id: s || l || '', name: p, payload: o });
            case 'builtin':
              return v.jsx(Ne, {
                apiName: o?.apiName,
                arguments: t,
                content: e,
                identifier: p,
                loading: i,
                messageId: l,
                pluginError: u,
                pluginState: d,
                toolCallId: s,
              });
            case 'mcp':
              return v.jsx(nt, {
                apiName: o?.apiName,
                arguments: t,
                content: e,
                identifier: p,
                loading: i,
                messageId: l,
                pluginError: u,
                pluginState: d,
                toolCallId: s,
              });
            case 'markdown':
              return v.jsx(Qe, { content: e, loading: i });
            default:
              return v.jsx(Ze, { content: e, loading: i, name: p });
          }
        },
        n = `${p}-${o?.apiName}-${s || l}`;
      return v.jsx(
        ve,
        {
          alertTitle: p ? `${p}${o?.apiName ? ` / ${o.apiName}` : ''}` : 'Tool Render Error',
          variant: 'alert',
          children: c(),
        },
        n,
      );
    },
  );
export { tt as A, mt as P, De as u };
