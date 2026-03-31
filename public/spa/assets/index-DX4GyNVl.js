import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as D, i as z, F as u, A as _, B, I as F, f as L } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as b } from './FormInput-Rmn91oHG.js';
import { aH as N, a_ as A } from '../vendor/vendor-icons-BHMUH78i.js';
const o = [];
for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
function $(e, t = 0) {
  return (
    o[e[t + 0]] +
    o[e[t + 1]] +
    o[e[t + 2]] +
    o[e[t + 3]] +
    '-' +
    o[e[t + 4]] +
    o[e[t + 5]] +
    '-' +
    o[e[t + 6]] +
    o[e[t + 7]] +
    '-' +
    o[e[t + 8]] +
    o[e[t + 9]] +
    '-' +
    o[e[t + 10]] +
    o[e[t + 11]] +
    o[e[t + 12]] +
    o[e[t + 13]] +
    o[e[t + 14]] +
    o[e[t + 15]]
  ).toLowerCase();
}
let f;
const P = new Uint8Array(16);
function H() {
  if (!f) {
    if (typeof crypto > 'u' || !crypto.getRandomValues)
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
      );
    f = crypto.getRandomValues.bind(crypto);
  }
  return f(P);
}
const O = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  E = { randomUUID: O };
function q(e, t, l) {
  e = e || {};
  const r = e.random ?? e.rng?.() ?? H();
  if (r.length < 16) throw new Error('Random bytes length must be >= 16');
  return ((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), $(r));
}
function w(e, t, l) {
  return E.randomUUID && !e ? E.randomUUID() : q(e);
}
const k = (e = {}) =>
    Object.entries(e || {}).map(([t, l]) => ({
      id: w(),
      key: t,
      value: typeof l == 'string' ? l : '',
    })),
  G = (e = []) => {
    const t = {},
      l = new Set();
    return (
      (e || [])
        .slice()
        .reverse()
        .forEach((r) => {
          const d = r.key.trim();
          d && !l.has(d) && ((t[d] = typeof r.value == 'string' ? r.value : ''), l.add(d));
        }),
      Object.keys(t)
        .reverse()
        .reduce((r, d) => ((r[d] = t[d]), r), {})
    );
  },
  m = L(({ css: e, cssVar: t }) => ({
    container: e`
    position: relative;

    width: 100%;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
  `,
    input: e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,
    row: e`
    margin-block-end: 8px;

    &:last-child {
      margin-block-end: 0;
    }
  `,
    title: e`
    margin-block-end: 8px;
    color: ${t.colorTextTertiary};
  `,
  })),
  Z = g.memo(
    ({
      value: e,
      onChange: t,
      keyPlaceholder: l,
      valuePlaceholder: r,
      addButtonText: d,
      duplicateKeyErrorText: K,
      deleteTooltip: I,
      style: R,
    }) => {
      const { t: p } = D('components'),
        [y, v] = g.useState(() => k(e)),
        j = g.useRef(void 0);
      g.useEffect(() => {
        const n = e || {};
        z(n, j.current) || (v(k(n)), (j.current = n));
      }, [e]);
      const h = (n) => {
          (n.forEach((a) => {
            a.key.trim();
          }),
            v(n.map((a) => ({ ...a }))),
            t?.(G(n)));
        },
        S = () => {
          const n = [...y, { id: w(), key: '', value: '' }];
          h(n);
        },
        U = (n) => {
          const a = y.filter((s) => s.id !== n);
          h(a);
        },
        V = (n, a) => {
          const s = y.map((c) => (c.id === n ? { ...c, key: a } : c));
          h(s);
        },
        T = (n, a) => {
          const s = y.map((c) => (c.id === n ? { ...c, value: a } : c));
          h(s);
        },
        C = ((n) => {
          const a = new Set(),
            s = new Set();
          return (
            n.forEach((c) => {
              const x = c.key.trim();
              x && (a.has(x) ? s.add(x) : a.add(x));
            }),
            s
          );
        })(y);
      return i.jsxs('div', {
        className: m.container,
        style: R,
        children: [
          i.jsxs(u, {
            horizontal: !0,
            className: m.title,
            gap: 8,
            children: [
              i.jsx(u, { flex: 1, children: l || p('KeyValueEditor.keyPlaceholder') }),
              i.jsx(u, { flex: 2, children: r || p('KeyValueEditor.valuePlaceholder') }),
              i.jsx(u, { style: { width: 30 } }),
            ],
          }),
          i.jsxs(u, {
            width: '100%',
            children: [
              y.map((n) => {
                const a = n.key.trim() && C.has(n.key.trim());
                return i.jsxs(
                  u,
                  {
                    horizontal: !0,
                    align: 'flex-start',
                    className: m.row,
                    gap: 8,
                    width: '100%',
                    children: [
                      i.jsxs(u, {
                        flex: 1,
                        style: { position: 'relative' },
                        children: [
                          i.jsx(b, {
                            className: m.input,
                            placeholder: l || p('KeyValueEditor.keyPlaceholder'),
                            status: a ? 'error' : void 0,
                            value: n.key,
                            variant: 'filled',
                            onChange: (s) => V(n.id, s),
                          }),
                          a &&
                            i.jsx('div', {
                              style: {
                                bottom: '-16px',
                                color: 'red',
                                fontSize: '12px',
                                position: 'absolute',
                              },
                              children: K || p('KeyValueEditor.duplicateKeyError'),
                            }),
                        ],
                      }),
                      i.jsx(u, {
                        flex: 2,
                        children: i.jsx(b, {
                          className: m.input,
                          placeholder: r || p('KeyValueEditor.valuePlaceholder'),
                          value: n.value,
                          variant: 'filled',
                          onChange: (s) => T(n.id, s),
                        }),
                      }),
                      i.jsx(_, {
                        icon: N,
                        size: 'small',
                        style: { marginTop: 4 },
                        title: I || p('KeyValueEditor.deleteTooltip'),
                        onClick: () => U(n.id),
                      }),
                    ],
                  },
                  n.id,
                );
              }),
              i.jsx(B, {
                block: !0,
                icon: i.jsx(F, { icon: A }),
                size: 'small',
                style: { marginTop: y.length > 0 ? 16 : 8 },
                type: 'dashed',
                onClick: S,
                children: d || p('KeyValueEditor.addButton'),
              }),
            ],
          }),
        ],
      });
    },
  );
export { Z as K };
