import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g,
  $ as U,
  j as H,
  f as w,
  k as K,
  A as O,
  ax as q,
  I as y,
  v as G,
  an as S,
  m as R,
  u as j,
  s as b,
  F as T,
  Z as Q,
  aE as W,
} from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { E as Z, S as J, N as X, a as Y } from './index-BhqHQAH8.js';
import { A as V, a as ee } from './AccordionItem-BUupnbbL.js';
import { S as te } from './Segmented-9Z1phQkA.js';
import { N as v, S as oe } from './NavItem-DJlHrVXk.js';
import { G as ne } from './Grid-CdN2I7qJ.js';
import { A as C } from './index-BAOF5XWg.js';
import { C as ie } from './ContextMenuTrigger-B5O-u7Kh.js';
import { aH as L, bj as se, cP as ae, c1 as ce, l as re } from '../vendor/vendor-icons-BHMUH78i.js';
import { u as le } from './useQueryParam-CeLVFIbd.js';
const k = l.createContext(null),
  f = () => {
    const t = l.use(k);
    if (!t)
      throw new Error('useGenerationTopicContext must be used within GenerationTopicStoreProvider');
    return t;
  },
  de = k.Provider,
  I = w(({ css: t, cssVar: o }) => ({
    gridItem: t`
    cursor: pointer;

    position: relative;

    aspect-ratio: 1;
    width: 100% !important;
    height: auto !important;
    border-radius: 4px;

    object-fit: cover;
    background: ${o.colorFillSecondary};

    transition: border 0.15s ${o.motionEaseInOut};

    img {
      aspect-ratio: 1;
      width: 100% !important;
    }
  `,
    gridItemActive: t`
    border: 2px solid ${o.colorBgLayout} !important;
    box-shadow: 0 0 0 2px ${o.colorPrimary};
  `,
  })),
  pe = l.memo(
    ({
      isUpdating: t,
      topic: o,
      style: s,
      isLoading: i,
      onClick: c,
      onDelete: n,
      isActive: a,
      contextMenuItems: r,
    }) => {
      const { namespace: m } = f(),
        { t: u } = g(m);
      return e.jsx(U, {
        title: o.title || u('topic.untitled'),
        children: e.jsx(ie, {
          items: r,
          children: e.jsx(C, {
            alt: o.title || u('topic.untitled'),
            avatar: o.coverUrl ?? (o.title || u('topic.untitled')),
            className: H(I.gridItem, a && I.gridItemActive),
            loading: i || t,
            style: s,
            onClick: c,
          }),
        }),
      });
    },
  ),
  me = l.memo(
    ({
      topic: t,
      style: o,
      isLoading: s,
      onClick: i,
      onDelete: c,
      isActive: n,
      isUpdating: a,
      contextMenuItems: r,
    }) => {
      const { namespace: m } = f(),
        { t: u } = g(m);
      return e.jsx(
        v,
        {
          actions: e.jsx(O, { icon: L, size: 'small', onClick: c }),
          active: n,
          contextMenuItems: r,
          disabled: a,
          loading: s || a,
          style: o,
          title: t.title || u('topic.untitled'),
          icon: e.jsx(C, {
            avatar: t.coverUrl ?? '',
            background: K.colorFillSecondary,
            loading: s,
            shape: 'square',
            size: 32,
            style: { flex: 'none' },
          }),
          onClick: i,
        },
        t.id,
      );
    },
  ),
  N = l.memo(({ topic: t, showMoreInfo: o, style: s }) => {
    const { useStore: i, namespace: c } = f(),
      { t: n } = g(c),
      { modal: a } = q.useApp(),
      [r, m] = l.useState(!1),
      u = i((p) => p.loadingGenerationTopicIds.includes(t.id)),
      h = i((p) => p.removeGenerationTopic),
      d = i((p) => p.switchGenerationTopic),
      P = i((p) => p.activeGenerationTopicId) === t.id,
      _ = () => {
        d(t.id);
      },
      M = (p) => {
        (p.stopPropagation(),
          p.preventDefault(),
          a.confirm({
            cancelText: n('cancel', { ns: 'common' }),
            content: n('topic.deleteConfirmDesc'),
            okButtonProps: { danger: !0 },
            okText: n('delete', { ns: 'common' }),
            onOk: async () => {
              m(!0);
              try {
                await h(t.id);
              } catch (z) {
                console.error('Delete topic failed:', z);
              }
              m(!1);
            },
            title: n('topic.deleteConfirm'),
          }));
      },
      $ = [
        {
          danger: !0,
          icon: e.jsx(y, { icon: L }),
          key: 'delete',
          label: n('delete', { ns: 'common' }),
          onClick: () => {
            a.confirm({
              cancelText: n('cancel', { ns: 'common' }),
              content: n('topic.deleteConfirmDesc'),
              okButtonProps: { danger: !0 },
              okText: n('delete', { ns: 'common' }),
              onOk: async () => {
                try {
                  await h(t.id);
                } catch (p) {
                  console.error('Delete topic failed:', p);
                }
              },
              title: n('topic.deleteConfirm'),
            });
          },
        },
      ],
      D = o ? me : pe;
    return e.jsx(D, {
      contextMenuItems: $,
      isActive: P,
      isLoading: u,
      isUpdating: r,
      style: s,
      topic: t,
      onClick: _,
      onDelete: M,
    });
  });
N.displayName = 'TopicItem';
const F = l.memo(({ viewMode: t = 'auto' }) => {
  const { useStore: o, namespace: s } = f(),
    { t: i } = g(s),
    c = o((d) => d.openNewGenerationTopic),
    n = G(S.isLogin);
  o((d) => d.useFetchGenerationTopics)(!!n);
  const r = o((d) => d.generationTopics),
    m = t === 'list';
  if (!r || r.length === 0) return e.jsx(Z, { title: i('topic.createNew'), onClick: c });
  const h = r.map((d) => e.jsx(N, { showMoreInfo: m, topic: d }, d.id));
  return e.jsx(e.Fragment, {
    children: m
      ? h
      : e.jsx(R, {
          layoutAnimation: !0,
          children: e.jsx(ne, {
            gap: 4,
            maxItemWidth: 64,
            padding: 6,
            rows: 6,
            width: '100%',
            children: h,
          }),
        }),
  });
});
F.displayName = 'TopicsList';
const ue = () => {
    const { useStore: t } = f(),
      [o, s] = le('topic', { history: 'replace', throttleMs: 500 });
    return (
      l.useLayoutEffect(() => {
        t.setState({ activeGenerationTopicId: o ?? null });
      }, [o, t]),
      l.useLayoutEffect(() => {
        let i = t.getState().activeGenerationTopicId;
        const c = t.subscribe((n) => {
          n.activeGenerationTopicId !== i &&
            ((i = n.activeGenerationTopicId), s(n.activeGenerationTopicId || null));
        });
        return () => {
          c();
        };
      }, [s, t]),
      null
    );
  },
  xe = l.memo(({ namespace: t, useStore: o, viewModeStatusKey: s }) => {
    const i = G(S.isLogin),
      c = j((a) => b[s](a));
    return (
      o((a) => a.useFetchGenerationTopics)(!!i),
      e.jsx(de, {
        value: { namespace: t, useStore: o },
        children: e.jsx(l.Suspense, {
          fallback: e.jsx(oe, { rows: 6 }),
          children: e.jsxs(T, {
            gap: 4,
            paddingBlock: 1,
            children: [e.jsx(F, { viewMode: c }), e.jsx(ue, {})],
          }),
        }),
      })
    );
  }),
  A = l.memo((t) => {
    const { namespace: o, useStore: s, viewModeStatusKey: i, generationTopicsSelector: c } = t,
      { t: n } = g(o),
      a = G(S.isLogin),
      r = j((x) => b[i](x)),
      m = j((x) => x.updateSystemStatus);
    s((x) => x.useFetchGenerationTopics)(!!a);
    const d = s(c)?.length || 0;
    return e.jsx(T, {
      gap: 1,
      paddingInline: 4,
      children: e.jsx(V, {
        defaultExpandedKeys: ['topics'],
        gap: 2,
        children: e.jsx(ee, {
          itemKey: 'topics',
          paddingBlock: 4,
          paddingInline: '8px 4px',
          action: e.jsx(T, {
            horizontal: !0,
            gap: 2,
            children: e.jsx(te, {
              size: 'small',
              value: r,
              variant: 'borderless',
              options: [
                { icon: e.jsx(y, { icon: se }), value: 'list' },
                { icon: e.jsx(y, { icon: ae }), value: 'grid' },
              ],
              onChange: (x) => m({ [i]: x }),
            }),
          }),
          title: e.jsxs(Q, {
            ellipsis: !0,
            fontSize: 12,
            type: 'secondary',
            weight: 500,
            children: [n('topic.title'), d > 0 && ` ${d}`],
          }),
          children: e.jsx(xe, { namespace: o, useStore: s, viewModeStatusKey: i }),
        }),
      }),
    });
  });
A.displayName = 'GenerationLayoutBody';
const E = l.memo((t) => {
  const { t: o } = g('common'),
    { t: s } = g(t.namespace),
    { breadcrumb: i, useStore: c } = t,
    n = j((r) => r.toggleCommandMenu),
    a = c((r) => r.openNewGenerationTopic);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(J, { breadcrumb: i }),
      e.jsxs(T, {
        paddingInline: 4,
        children: [
          e.jsx(v, { icon: ce, title: s('topic.createNew'), onClick: a }, 'new-topic'),
          e.jsx(v, { icon: re, title: o('tab.search'), onClick: () => n(!0) }, 'search'),
        ],
      }),
    ],
  });
});
E.displayName = 'GenerationLayoutHeader';
const B = l.memo((t) => {
  const { navKey: o } = t;
  return e.jsx(X, {
    navKey: o,
    children: e.jsx(Y, { body: e.jsx(A, { ...t }), header: e.jsx(E, { ...t }) }),
  });
});
B.displayName = 'GenerationLayoutSidebar';
const ge = w(({ css: t, cssVar: o }) => ({
    mainContainer: t`
    position: relative;
    overflow: hidden;
    background: ${o.colorBgContainer};
  `,
  })),
  Le = ({ extra: t, ...o }) =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(B, { ...o }),
        e.jsx(T, { className: ge.mainContainer, flex: 1, height: '100%', children: e.jsx(W, {}) }),
        t,
      ],
    });
export { Le as G };
