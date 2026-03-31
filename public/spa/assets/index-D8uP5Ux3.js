import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  V as $,
  F as g,
  Z as M,
  f as S,
  g as C,
  aL as T,
  ay as L,
  B as w,
} from './index-C8UyLGsD.js';
import { M as B } from './Modal-Dd2pIxVd.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as _ } from './SearchBar-BtAHEw-s.js';
import { S as j } from './index-DLsdvBKx.js';
import { q as N } from './index-CWxR8Eib.js';
import { A as k } from './AgentSelectionEmpty-BpdSiR5x.js';
import { A as R } from './index-BAOF5XWg.js';
import { C as F } from './index--HdG3zDE.js';
import { u as z } from './index-BSyA7UzD.js';
import { c as E } from './react-CQWP4pV0.js';
import { bp as q } from '../vendor/vendor-icons-BHMUH78i.js';
import { D } from './index-BfwjtmVb.js';
const h = E((e, o) => ({
    clearSelection: () => {
      e({ selectedAgentIds: [] });
    },
    isSelected: (n) => o().selectedAgentIds.includes(n),
    removeAgent: (n) => {
      e((r) => ({ selectedAgentIds: r.selectedAgentIds.filter((l) => l !== n) }));
    },
    selectedAgentIds: [],
    setSelectedAgents: (n) => {
      e({ selectedAgentIds: n });
    },
    toggleAgent: (n) => {
      e((r) =>
        r.selectedAgentIds.includes(n)
          ? { selectedAgentIds: r.selectedAgentIds.filter((s) => s !== n) }
          : { selectedAgentIds: [...r.selectedAgentIds, n] },
      );
    },
  })),
  y = S(({ css: e, cssVar: o }) => ({
    item: e`
    cursor: pointer;

    margin-block: 1px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: ${o.borderRadius};

    transition: background 0.2s ease;

    &:hover {
      background: ${o.colorFillTertiary};
    }
  `,
    removeButton: e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: ${o.colorTextTertiary};

    transition: all 0.2s ease;

    &:hover {
      color: ${o.colorText};
      background: ${o.colorFillSecondary};
    }
  `,
    title: e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  })),
  I = i.memo(({ agent: e, defaultTitle: o, showCheckbox: n, showRemove: r }) => {
    const l = i.useRef(null),
      s = z(l),
      c = h((a) => a.selectedAgentIds.includes(e.id)),
      m = h((a) => a.toggleAgent),
      d = h((a) => a.removeAgent),
      u = e.title || o,
      f = e.avatar || $,
      x = e.backgroundColor ?? void 0,
      A = () => {
        m(e.id);
      },
      v = (a) => {
        (a.stopPropagation(), d(e.id));
      };
    return t.jsx('div', {
      className: y.item,
      ref: l,
      style: { cursor: n ? 'pointer' : 'default' },
      onClick: n ? A : void 0,
      children: t.jsxs(g, {
        horizontal: !0,
        align: 'center',
        gap: 8,
        width: '100%',
        children: [
          n &&
            t.jsx(F, {
              checked: c,
              onChange: A,
              onClick: (a) => {
                (a.stopPropagation(), A());
              },
            }),
          t.jsx(R, { animation: s, avatar: f, background: x, shape: 'circle', size: 28 }),
          t.jsx(M, { ellipsis: !0, className: y.title, children: u }),
          r &&
            t.jsx('div', {
              className: y.removeButton,
              onClick: v,
              children: t.jsx(q, { size: 14 }),
            }),
        ],
      }),
    });
  }),
  H = S(({ css: e, cssVar: o }) => ({
    container: e`
    user-select: none;

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding-block: ${o.paddingSM}px 0;
    padding-inline: ${o.paddingSM}px;
  `,
  })),
  P = i.memo(({ agents: e, isLoading: o }) => {
    const { t: n } = C(['chat', 'common']),
      [r, l] = i.useState(''),
      s = i.useMemo(() => n('defaultSession', { ns: 'common' }), [n]),
      c = i.useCallback((d) => {
        l(d.target.value);
      }, []),
      m = i.useMemo(() => {
        if (!r.trim()) return e;
        const d = r.toLowerCase();
        return e.filter((u) => {
          const f = u.title || '',
            x = u.description || '';
          return f.toLowerCase().includes(d) || x.toLowerCase().includes(d);
        });
      }, [e, r]);
    return t.jsxs(g, {
      className: H.container,
      gap: 12,
      children: [
        t.jsx(_, {
          allowClear: !0,
          placeholder: n('memberSelection.searchAgents'),
          value: r,
          variant: 'filled',
          onChange: c,
        }),
        t.jsx(g, {
          flex: 1,
          style: { minHeight: 0 },
          children: o
            ? t.jsxs(g, {
                gap: 8,
                padding: 8,
                children: [
                  t.jsx(j, { active: !0, paragraph: { rows: 1 }, title: !1 }),
                  t.jsx(j, { active: !0, paragraph: { rows: 1 }, title: !1 }),
                  t.jsx(j, { active: !0, paragraph: { rows: 1 }, title: !1 }),
                ],
              })
            : m.length === 0
              ? t.jsx(k, { search: !!r, variant: r ? 'empty' : 'noAvailable' })
              : t.jsx(N, {
                  style: { flex: 1 },
                  totalCount: m.length,
                  itemContent: (d) => {
                    const u = m[d];
                    return t.jsx(I, { showCheckbox: !0, agent: u, defaultTitle: s }, u.id);
                  },
                }),
        }),
      ],
    });
  }),
  b = S(({ css: e, cssVar: o }) => ({
    container: e`
    overflow-y: auto;
    flex: 1;
    padding: ${o.paddingSM}px;
  `,
    title: e`
    font-size: 12px;
    font-weight: 500;
    color: ${o.colorTextSecondary};
  `,
  })),
  G = i.memo(({ agents: e }) => {
    const { t: o } = C(['chat', 'common']),
      n = h((s) => s.selectedAgentIds),
      r = i.useMemo(() => o('defaultSession', { ns: 'common' }), [o]),
      l = i.useMemo(
        () => n.map((s) => e.find((c) => c.id === s)).filter((s) => s !== void 0),
        [e, n],
      );
    return l.length === 0
      ? t.jsx(g, { className: b.container, flex: 1, children: t.jsx(k, { variant: 'noSelected' }) })
      : t.jsxs(g, {
          className: b.container,
          gap: 4,
          children: [
            t.jsx('div', {
              className: b.title,
              children: o('memberSelection.selectedAgents', { count: l.length }),
            }),
            t.jsx(g, {
              children: l.map((s) => t.jsx(I, { showRemove: !0, agent: s, defaultTitle: r }, s.id)),
            }),
          ],
        });
  }),
  U = S(({ css: e, cssVar: o }) => ({
    container: e`
    display: flex;
    flex-direction: row;

    height: 500px;
    padding: 12px;
    border: 1px solid ${o.colorBorderSecondary};
    border-radius: ${o.borderRadius}px;
  `,
    rightColumn: e`
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  })),
  se = i.memo(({ existingMembers: e = [], onCancel: o, onConfirm: n, open: r }) => {
    const { t: l } = C(['chat', 'common']),
      s = h((p) => p.selectedAgentIds),
      c = h((p) => p.clearSelection),
      { data: m = [], isLoading: d } = T(r ? 'queryAgents' : null, () => L.queryAgents()),
      u = i.useMemo(() => m.filter((p) => !e.includes(p.id)), [m, e]);
    i.useEffect(() => {
      r || c();
    }, [r, c]);
    const [f, x] = i.useState(!1),
      A = async () => {
        try {
          (x(!0), await n(s), c());
        } catch (p) {
          console.error('Failed to add members:', p);
        } finally {
          x(!1);
        }
      },
      v = () => {
        (c(), o());
      },
      a = s.length === 0 || f;
    return t.jsx(B, {
      allowFullscreen: !0,
      open: r,
      title: l('memberSelection.addMember'),
      width: 800,
      footer: t.jsxs(g, {
        horizontal: !0,
        gap: 8,
        justify: 'end',
        children: [
          t.jsx(w, { onClick: v, children: l('cancel', { ns: 'common' }) }),
          t.jsxs(w, {
            disabled: a,
            loading: f,
            type: 'primary',
            onClick: A,
            children: [l('memberSelection.addMember'), ' (', s.length, ')'],
          }),
        ],
      }),
      onCancel: v,
      children: t.jsxs(g, {
        horizontal: !0,
        className: U.container,
        gap: 8,
        children: [
          t.jsx(P, { agents: u, isLoading: d }),
          t.jsx(D, { orientation: 'vertical', style: { height: '100%' } }),
          t.jsx(G, { agents: m }),
        ],
      }),
    });
  });
export { se as A };
