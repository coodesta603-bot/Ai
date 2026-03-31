import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as G,
  F as s,
  I as K,
  dI as b,
  f as S,
  A as W,
  x as A,
  aw as re,
  fn as ne,
  fo as ie,
  cd as ae,
  fp as B,
  fq as F,
  T as D,
  k as M,
  Z as g,
  a1 as w,
  C as se,
  j as N,
  by as le,
} from './index-C8UyLGsD.js';
import { S as ce } from './SearchBar-BtAHEw-s.js';
import { S as de } from './Select-Bh2jXi9V.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  l as pe,
  d9 as me,
  da as ue,
  c6 as ge,
  bQ as he,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { EditorModal as xe } from './index-BaL28HN6.js';
import { u as k } from './store-Cj3bQrT7.js';
import { S as d } from './index-DLsdvBKx.js';
import { N as fe } from './index-0kThxxSh.js';
import { R as ye, T as je } from './ToggleRightPanelButton-hmPf3CHc.js';
import { M as we } from './Markdown-Mtmmwid1.js';
import { G as Q } from './Grid-CdN2I7qJ.js';
import { J as ve, Y as Ce } from './index-CWxR8Eib.js';
import { u as U } from './useScrollParent-DOgnRBmw.js';
import { B as Y } from './Block-DDntSWi2.js';
const Oe = l.memo(
    ({ searchValue: o, onSearch: e, sortValue: r, onSortChange: n, sortOptions: a }) => {
      const { t: c } = G('memory');
      return t.jsxs(s, {
        horizontal: !0,
        align: 'center',
        gap: 12,
        children: [
          t.jsx(ce, {
            allowClear: !0,
            defaultValue: o,
            placeholder: c('filter.search'),
            prefix: t.jsx(pe, { size: 16 }),
            style: { flex: 1 },
            onSearch: (i) => e(i),
            onInputChange: (i) => {
              i || e(i);
            },
          }),
          a &&
            a.length > 0 &&
            n &&
            t.jsx(de, {
              options: a,
              prefix: t.jsx(K, { icon: me, style: { marginRight: 4 } }),
              style: { minWidth: 150 },
              value: r,
              onChange: (i) => n(i),
            }),
        ],
      });
    },
  ),
  Ve = l.memo(() => {
    const o = k((i) => i.editingMemoryId),
      e = k((i) => i.editingMemoryContent),
      r = k((i) => i.editingMemoryLayer),
      n = k((i) => i.clearEditingMemory),
      a = k((i) => i.updateMemory),
      c = {
        activity: b.Activity,
        context: b.Context,
        experience: b.Experience,
        identity: b.Identity,
        preference: b.Preference,
      };
    return t.jsx(xe, {
      open: !!o,
      value: e,
      onCancel: n,
      onConfirm: async (i) => {
        !o || !r || (await a(o, i, c[r]));
      },
    });
  }),
  be = S(({ css: o, cssVar: e }) => ({
    card: o`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadiusLG};

    background: ${e.colorBgContainer};
  `,
  })),
  J = l.memo(({ viewMode: o, rows: e = 3 }) =>
    o === 'timeline'
      ? t.jsx(s, {
          gap: 24,
          paddingBlock: 24,
          style: { paddingLeft: 32 },
          children: Array.from({ length: 3 }).map((r, n) =>
            t.jsxs(
              s,
              {
                gap: 8,
                children: [
                  t.jsx(d.Title, { active: !0, fontSize: 18, lineHeight: 1.4, width: '30%' }),
                  t.jsx(d.Paragraph, { active: !0, rows: 4, style: { marginBottom: 0 } }),
                ],
              },
              n,
            ),
          ),
        })
      : t.jsx(Q, {
          gap: 12,
          maxItemWidth: 240,
          paddingBlock: 8,
          rows: e,
          children: Array.from({ length: 6 }).map((r, n) =>
            t.jsxs(
              s,
              {
                className: be.card,
                children: [
                  t.jsx(d.Title, { active: !0, fontSize: 16, lineHeight: 1.4, width: '80%' }),
                  t.jsx(d.Paragraph, { active: !0, rows: 5, style: { marginBottom: 0 } }),
                  t.jsxs(s, {
                    horizontal: !0,
                    gap: 8,
                    children: [
                      t.jsx(d.Button, {
                        active: !0,
                        size: 'small',
                        style: { height: 20, width: 60 },
                      }),
                      t.jsx(d.Button, {
                        active: !0,
                        size: 'small',
                        style: { height: 20, width: 50 },
                      }),
                    ],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
  ),
  Ge = l.memo(({ value: o, onChange: e }) => {
    const { t: r } = G('memory');
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(W, {
          active: o === 'timeline',
          icon: ue,
          size: A,
          title: r('viewMode.timeline'),
          onClick: () => e('timeline'),
        }),
        t.jsx(W, {
          active: o === 'grid',
          icon: ge,
          size: A,
          title: r('viewMode.masonry'),
          onClick: () => e('grid'),
        }),
      ],
    });
  });
function ke(o, e = 0, r = 100) {
  if (e > r) return 0;
  let n = 0;
  for (let c = 0; c < o.length; c++) {
    const i = o.charCodeAt(c);
    ((n = (n << 5) - n + i), (n = n & n));
  }
  n = Math.abs(n);
  const a = r - e + 1;
  return e + (n % a);
}
const Z = (o) => {
    const e = re(),
      r = [
        e.volcano,
        e.orange,
        e.gold,
        e.green,
        e.cyan,
        e.blue,
        e.geekblue,
        e.purple,
        e.magenta,
        e.pink,
      ];
    return l.useMemo(() => {
      if (!o) return;
      const n = ke(o, 0, r.length - 1),
        a = ne(
          e.isDarkMode ? 0.25 : 0.5,
          ie(e.isDarkMode ? 0.06 : 0.05, r[n], e.isDarkMode ? e.colorBgContainer : e.colorBgLayout),
        );
      return {
        backgroundColor: a,
        backgroundTextColor: e.isDarkMode ? F(0.5, a) : B(0.5, a),
        color: e.isDarkMode ? F(0.4, a) : B(0.6, a),
        shadowColor: ae(B(0.6, a), e.isDarkMode ? 0.5 : 0.2),
      };
    }, [o, r, e]);
  },
  Me = l.memo(({ cate: o }) => {
    const e = Z(o);
    return t.jsx(D, {
      size: 'large',
      style: {
        background: e?.backgroundColor,
        borderRadius: 16,
        color: e?.color,
        flex: 'none',
        fontWeight: 500,
      },
      children: o?.toUpperCase() || 'CHORE',
    });
  }),
  Ke = l.memo(() =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx(d.Button, { active: !0, shape: 'round', size: 'small', width: 64 }),
        t.jsx(d.Title, { active: !0, fontSize: 20, lineHeight: 1.4 }),
        t.jsx(d.Tags, { active: !0, count: 2 }),
        t.jsxs(s, {
          horizontal: !0,
          align: 'center',
          gap: 16,
          justify: 'space-between',
          children: [t.jsx(d.Tags, { active: !0 }), t.jsx(d.Tags, { active: !0 })],
        }),
        t.jsx(d.Paragraph, { active: !0, fontSize: 16, rows: 6 }),
      ],
    }),
  ),
  Qe = l.memo(({ children: o, style: e, header: r, ...n }) =>
    t.jsxs(ye, {
      defaultWidth: 480,
      maxWidth: 640,
      minWidth: 300,
      children: [
        t.jsx(fe, { ...r, left: t.jsxs(t.Fragment, { children: [t.jsx(je, {}), r?.left] }) }),
        t.jsx(s, {
          flex: 1,
          gap: 16,
          height: '100%',
          paddingInline: 16,
          style: { minWidth: 300, overflowY: 'auto', paddingBottom: 64, paddingTop: 16, ...e },
          ...n,
          children: o,
        }),
      ],
    }),
  ),
  q = l.memo(({ hashTags: o }) => {
    if (!(!o || o.length === 0))
      return (
        o &&
        o.length > 0 &&
        t.jsx(s, {
          horizontal: !0,
          wrap: 'wrap',
          children: o.map((e, r) =>
            t.jsx(
              D,
              {
                icon: t.jsx(K, { icon: he }),
                variant: 'borderless',
                style: { color: M.colorTextDescription, gap: 2, marginRight: 12, paddingInline: 0 },
                children: e,
              },
              r,
            ),
          ),
        })
      );
  }),
  Ue = l.memo(({ title: o, children: e }) => {
    if (!e) return;
    const r = t.jsx(we, {
      fontSize: 14,
      variant: 'chat',
      style: { color: M.colorText, overflow: 'visible' },
      children: e || '',
    });
    return o ? t.jsxs(s, { gap: 8, children: [t.jsx(g, { weight: 500, children: o }), r] }) : r;
  }),
  X = l.memo(({ capturedAt: o }) => {
    if (!o) return;
    const e = w(o);
    return t.jsx(g, {
      as: 'time',
      fontSize: 12,
      style: { display: 'block', flex: 'none' },
      title: e.format('YYYY-MM-DD HH:mm'),
      type: 'secondary',
      children: e.fromNow(),
    });
  });
function Se({
  items: o,
  defaultColumnCount: e = 3,
  maxItemWidth: r = 240,
  hasMore: n,
  isLoading: a,
  onLoadMore: c,
  renderItem: i,
}) {
  const h = U();
  return !o || o.length === 0
    ? null
    : t.jsx(ve, {
        customScrollParent: h,
        data: o,
        endReached: n && c ? c : void 0,
        increaseViewportBy: typeof window < 'u' ? window.innerHeight : 0,
        overscan: 48,
        style: { minHeight: '100%' },
        components: {
          Footer: a ? () => t.jsx(J, { rows: e, viewMode: 'grid' }) : void 0,
          List: ({ ref: p, ...m }) => t.jsx(Q, { gap: 8, maxItemWidth: r, ref: p, rows: e, ...m }),
        },
        itemContent: (p, m) =>
          !m || !m.id ? null : i(m, { onClick: void 0, onDelete: void 0, onEdit: void 0 }),
      });
}
const Je = l.memo(Se),
  H = 'memory-masonry-actions',
  O = S(({ css: o, cssVar: e }) => ({
    actions: o`
    transition: opacity 0.15s ease;
  `,
    masonryCard: o`
    cursor: pointer;
    position: relative;
    background: ${e.colorFillQuaternary};
    box-shadow: 0 0 0 1px ${e.colorFillTertiary} inset;
    .${H} {
      opacity: 0;
    }

    &:hover {
      .${H} {
        opacity: 1;
      }
    }
  `,
  })),
  Ze = l.memo(
    ({
      title: o,
      titleAddon: e,
      cate: r,
      children: n,
      actions: a,
      onClick: c,
      hashTags: i,
      badges: h,
      footer: p,
      capturedAt: m,
    }) => {
      const x = Z(r);
      return t.jsxs(Y, {
        className: O.masonryCard,
        gap: 4,
        height: '100%',
        padding: 4,
        variant: 'filled',
        style: { background: x?.backgroundColor },
        onClick: c,
        children: [
          t.jsxs(Y, {
            flex: 1,
            gap: 12,
            paddingBlock: 16,
            paddingInline: 12,
            variant: 'outlined',
            style: {
              boxShadow: `0 4px 16px -4px ${x?.shadowColor || 'rgba(0, 0, 0, 0.2)'}`,
              overflow: 'hidden',
              position: 'relative',
            },
            children: [
              (o || e) &&
                t.jsxs(t.Fragment, {
                  children: [
                    t.jsx(s, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      wrap: 'wrap',
                      children:
                        o && typeof o == 'string'
                          ? t.jsx(g, {
                              as: 'h2',
                              ellipsis: { rows: 2 },
                              fontSize: 16,
                              style: { lineHeight: 1.5, margin: 0 },
                              weight: 500,
                              children: o,
                            })
                          : o,
                    }),
                    typeof e == 'string' ? t.jsx(D, { variant: 'borderless', children: e }) : e,
                  ],
                }),
              typeof n == 'string'
                ? t.jsx(g, {
                    as: 'p',
                    color: M.colorTextSecondary,
                    ellipsis: { rows: 4 },
                    children: n,
                  })
                : n,
              t.jsx(q, { hashTags: i }),
              t.jsxs(s, {
                horizontal: !0,
                align: 'center',
                gap: 12,
                justify: 'space-between',
                style: { overflow: 'hidden', position: 'relative' },
                children: [p, t.jsx(X, { capturedAt: m })],
              }),
            ],
          }),
          t.jsxs(s, {
            horizontal: !0,
            align: 'center',
            justify: 'space-between',
            paddingBlock: 8,
            paddingInline: 8,
            style: { overflow: 'hidden', position: 'relative' },
            width: '100%',
            children: [
              t.jsx(s, {
                horizontal: !0,
                align: 'center',
                flex: 1,
                gap: 8,
                style: { overflow: 'hidden' },
                onClick: (f) => {
                  (f.stopPropagation(), f.preventDefault());
                },
                children: h,
              }),
              t.jsx(se, {
                flex: 'none',
                children: t.jsx(g, {
                  align: 'center',
                  color: x?.backgroundTextColor || M.colorTextSecondary,
                  weight: 'bold',
                  style: { opacity: 0.5 },
                  children: r?.toUpperCase() || 'CHORE',
                }),
              }),
              t.jsx(s, {
                horizontal: !0,
                align: 'center',
                className: N(H, O.actions),
                flex: 1,
                gap: 4,
                justify: 'flex-end',
                style: { overflow: 'hidden' },
                onClick: (f) => {
                  (f.stopPropagation(), f.preventDefault());
                },
                children: a,
              }),
            ],
          }),
        ],
      });
    },
  ),
  $ = S(({ css: o, cssVar: e }) => ({
    timelineContainer: o`
    position: relative;
    height: 100%;
  `,
    timelineLine: o`
    position: absolute;
    inset-block: 0;
    inset-inline-start: 8px;

    width: 1px;
    height: 100%;

    background: ${e.colorFillSecondary};
  `,
    timelineLine_dark: o`
    background: ${e.colorFillQuaternary};
  `,
  })),
  I = (o, e) => (e ? e(o) : (o.capturedAt ?? o.createdAt ?? new Date()));
function ze({
  data: o,
  groupBy: e = 'day',
  getDateForGrouping: r,
  hasMore: n,
  isLoading: a,
  onLoadMore: c,
  renderHeader: i,
  renderItem: h,
}) {
  const p = le(),
    m = U(),
    {
      groupCounts: x,
      sortedPeriods: f,
      groupedItems: ee,
    } = l.useMemo(() => {
      const y = e === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD',
        j = o.reduce((u, v) => {
          const T = I(v, r),
            C = w(T).format(y);
          return (u[C] || (u[C] = []), u[C].push(v), u);
        }, {}),
        z = Object.keys(j).sort((u, v) => v.localeCompare(u)),
        E = [],
        L = [];
      for (const u of z) {
        const T = [...j[u]].sort((R, C) => {
          const te = I(R, r),
            oe = I(C, r);
          return w(oe).valueOf() - w(te).valueOf();
        });
        (E.push(T.length), L.push(...T));
      }
      return { groupCounts: E, groupedItems: L, sortedPeriods: z };
    }, [o, e, r]);
  return !o || o.length === 0
    ? null
    : t.jsxs('div', {
        className: $.timelineContainer,
        children: [
          t.jsx('div', { className: N($.timelineLine, p && $.timelineLine_dark) }),
          t.jsx(Ce, {
            customScrollParent: m,
            endReached: n && c ? c : void 0,
            groupCounts: x,
            increaseViewportBy: typeof window < 'u' ? window.innerHeight : 0,
            overscan: 24,
            style: { minHeight: '100%' },
            components: { Footer: a ? () => t.jsx(J, { viewMode: 'timeline' }) : void 0 },
            groupContent: (y) => {
              const j = f[y],
                z = x[y];
              return i(j, z);
            },
            itemContent: (y) => {
              const j = ee[y];
              return h(j);
            },
          }),
        ],
      });
}
const qe = l.memo(ze),
  P = S(({ css: o, cssVar: e }) => ({
    itemWrapper: o`
    position: relative;
    padding-inline-start: 24px;
  `,
    periodHeader: o`
    position: sticky;
    z-index: 10;
    inset-block-start: 0;

    color: ${e.colorTextSecondary};

    background: ${e.colorBgContainer};
  `,
    timelineDot: o`
    position: absolute;
    inset-block-start: 20px;
    inset-inline-start: 0;

    width: 16px;
    height: 16px;
    border: 1px solid ${e.colorBorder};
    border-radius: 50%;

    background: ${e.colorBgElevated};
    box-shadow: 0 2px 4px -2px rgb(0 0 0 / 40%);
  `,
  })),
  Xe = l.memo(({ periodKey: o, groupBy: e = 'day' }) => {
    const r = e === 'month' ? w(`${o}-01`).format('MMMM YYYY') : w(o).format('MMMM D, YYYY');
    return t.jsx(s, {
      horizontal: !0,
      align: 'center',
      className: P.periodHeader,
      gap: 12,
      paddingBlock: 8,
      children: t.jsx(g, { weight: 500, children: r }),
    });
  }),
  et = l.memo(({ children: o }) =>
    t.jsxs('div', {
      className: P.itemWrapper,
      children: [t.jsx('div', { className: P.timelineDot }), o],
    }),
  ),
  _ = 'memory-actions',
  V = S(({ css: o }) => ({
    actions: o`
    transition: opacity 0.15s ease;
  `,
    timelineCard: o`
    position: relative;
    .${_} {
      opacity: 0;
    }

    &:hover {
      .${_} {
        opacity: 1;
      }
    }
  `,
  })),
  tt = l.memo(
    ({
      title: o,
      titleAddon: e,
      cate: r,
      children: n,
      actions: a,
      onClick: c,
      capturedAt: i,
      hashTags: h,
    }) =>
      t.jsxs(Y, {
        clickable: !0,
        className: V.timelineCard,
        gap: 12,
        padding: 16,
        variant: 'borderless',
        onClick: c,
        children: [
          (o || e) &&
            t.jsxs(s, {
              horizontal: !0,
              align: 'center',
              gap: 4,
              width: '100%',
              wrap: 'wrap',
              style: { overflow: 'hidden' },
              children: [
                o && typeof o == 'string'
                  ? t.jsx(g, {
                      as: 'h2',
                      fontSize: 16,
                      style: { lineHeight: 1.5, margin: 0 },
                      weight: 500,
                      children: o,
                    })
                  : o,
                e && t.jsx(D, { children: e }),
              ],
            }),
          typeof n == 'string'
            ? t.jsx(g, { as: 'p', color: M.colorTextSecondary, ellipsis: { rows: 3 }, children: n })
            : n,
          t.jsx(q, { hashTags: h }),
          t.jsxs(s, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            justify: 'space-between',
            children: [
              t.jsxs(s, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [t.jsx(Me, { cate: r }), t.jsx(X, { capturedAt: i })],
              }),
              t.jsx(s, {
                horizontal: !0,
                align: 'center',
                className: N(_, V.actions),
                gap: 4,
                onClick: (p) => {
                  (p.stopPropagation(), p.preventDefault());
                },
                children: a,
              }),
            ],
          }),
        ],
      }),
  );
export {
  Me as C,
  Qe as D,
  Ve as E,
  Oe as F,
  Ze as G,
  Ue as H,
  J as L,
  Xe as P,
  X as T,
  Ge as V,
  q as a,
  Ke as b,
  Je as c,
  tt as d,
  qe as e,
  et as f,
};
