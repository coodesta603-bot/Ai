import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as w, F as u, B as y } from './index-C8UyLGsD.js';
import { c as S, u as b } from './imperative-Cstfu8oK.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as M } from './Input-C_EgL0SG.js';
import { T as k } from './TextArea-CHeYteyg.js';
import { u as f } from './store-B9jA_OfS.js';
const v = o.memo(({ id: s, initialValues: r, onClose: a, onSuccess: n }) => {
    const { t: l } = w('knowledgeBase'),
      [h, i] = o.useState(!1),
      [d, x] = o.useState(r?.name || ''),
      [m, j] = o.useState(r?.description || ''),
      B = f((t) => t.createNewKnowledgeBase),
      N = f((t) => t.updateKnowledgeBase),
      p = !!s,
      C = async () => {
        if (!d.trim()) return;
        i(!0);
        const t = { name: d.trim(), description: m.trim() };
        try {
          if (p) (await N(s, t), i(!1), a?.());
          else {
            const c = await B(t);
            (i(!1), n ? (n(c), a?.()) : (window.location.href = `/resource/library/${c}`));
          }
        } catch (c) {
          (console.error(c), i(!1));
        }
      };
    return e.jsxs(u, {
      gap: 16,
      children: [
        e.jsx(M, {
          autoFocus: !0,
          placeholder: l('createNew.name.placeholder'),
          value: d,
          onChange: (t) => x(t.target.value),
        }),
        e.jsxs(u, {
          gap: 8,
          children: [
            e.jsx('label', { style: { fontSize: 14 }, children: l('createNew.description.label') }),
            e.jsx(k, {
              placeholder: l('createNew.description.placeholder'),
              style: { minHeight: 120 },
              value: m,
              onChange: (t) => j(t.target.value),
            }),
          ],
        }),
        e.jsx(y, {
          block: !0,
          loading: h,
          type: 'primary',
          onClick: C,
          children: l(p ? 'createNew.edit.confirm' : 'createNew.confirm'),
        }),
      ],
    });
  }),
  g = o.memo(({ id: s, initialValues: r, onSuccess: a }) => {
    const { close: n } = b();
    return e.jsx(u, {
      paddingInline: 8,
      style: { paddingBottom: 8 },
      children: e.jsx(v, { id: s, initialValues: r, onClose: n, onSuccess: a }),
    });
  });
g.displayName = 'KnowledgeBaseCreateModalContent';
const H = () => {
  const { t: s } = w('knowledgeBase');
  return {
    open: o.useCallback(
      (a) => {
        const n = !!a?.id;
        S({
          children: e.jsx(o.Suspense, {
            fallback: e.jsx('div', { style: { minHeight: 200 } }),
            children: e.jsx(g, {
              id: a?.id,
              initialValues: a?.initialValues,
              onSuccess: a?.onSuccess,
            }),
          }),
          width: 420,
          focusTriggerAfterClose: !0,
          footer: null,
          title: s(n ? 'createNew.edit.title' : 'createNew.title'),
        });
      },
      [s],
    ),
  };
};
export { H as u };
