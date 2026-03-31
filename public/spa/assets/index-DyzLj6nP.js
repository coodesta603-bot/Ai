import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { k as u, F as l, Z as m, g as p, A as h } from './index-C8UyLGsD.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { B as x } from './Block-DDntSWi2.js';
import { u as g } from './index-Br6hqyew.js';
import { bt as j } from '../vendor/vendor-icons-BHMUH78i.js';
import { S } from './index-DLsdvBKx.js';
const k = i.memo(({ title: s, description: t, prompt: e }) => {
    const o = g((a) => a.mainInputEditor),
      n = i.useCallback(() => {
        (o?.instance?.setDocument('markdown', e), o?.focus());
      }, [e, o]);
    return r.jsx(x, {
      clickable: !0,
      variant: 'outlined',
      style: { borderRadius: u.borderRadiusLG, cursor: 'pointer' },
      onClick: n,
      children: r.jsxs(l, {
        gap: 4,
        paddingBlock: 12,
        paddingInline: 14,
        children: [
          r.jsx(m, { ellipsis: !0, fontSize: 14, style: { fontWeight: 500 }, children: s }),
          r.jsx(m, {
            color: u.colorTextTertiary,
            ellipsis: { rows: 2 },
            fontSize: 12,
            children: t,
          }),
        ],
      }),
    });
  }),
  y = 40,
  C = (s) => {
    const t = [...s];
    for (let e = t.length - 1; e > 0; e--) {
      const o = Math.floor(Math.random() * (e + 1));
      [t[e], t[o]] = [t[o], t[e]];
    }
    return t;
  },
  f = (s, t) => {
    const e = Array.from({ length: y }, (n, a) => a + 1);
    return C(e)
      .slice(0, t)
      .map((n) => ({
        id: n,
        promptKey: `${s}.${String(n).padStart(2, '0')}.prompt`,
        titleKey: `${s}.${String(n).padStart(2, '0')}.title`,
      }));
  },
  _ = (s, t = 3) => {
    const [e, o] = i.useState(() => f(s, t)),
      n = i.useCallback(() => {
        o(f(s, t));
      }, [s, t]);
    return { questions: e, refresh: n };
  },
  b = i.memo(({ mode: s, count: t = 3 }) => {
    const { t: e } = p('suggestQuestions'),
      { t: o } = p('common'),
      { questions: n, refresh: a } = _(s, t);
    return n.length === 0
      ? null
      : r.jsxs(l, {
          gap: 12,
          children: [
            r.jsx(l, {
              gap: 8,
              children: n.map((c) => {
                const d = e(c.promptKey);
                return r.jsx(k, { description: d, prompt: d, title: e(c.titleKey) }, c.id);
              }),
            }),
            r.jsxs(l, {
              horizontal: !0,
              align: 'center',
              gap: 4,
              style: { cursor: 'pointer' },
              onClick: a,
              children: [
                r.jsx(h, { icon: j, size: 'small' }),
                r.jsx(m, { color: u.colorTextSecondary, fontSize: 12, children: o('switch') }),
              ],
            }),
          ],
        });
  }),
  T = i.memo(({ count: s = 3 }) =>
    r.jsx(l, {
      gap: 8,
      children: Array.from({ length: s }).map((t, e) =>
        r.jsx(S.Button, { active: !0, style: { height: 68, width: '100%' } }, e),
      ),
    }),
  ),
  R = i.memo(({ mode: s, count: t = 3 }) =>
    r.jsx(l, {
      width: '100%',
      children: r.jsx(i.Suspense, {
        fallback: r.jsx(T, { count: t }),
        children: r.jsx(b, { count: t, mode: s }),
      }),
    }),
  );
export { R as S };
