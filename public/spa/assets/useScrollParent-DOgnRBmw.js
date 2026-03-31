import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  n as Y,
  g as f,
  a1 as S,
  aC as W,
  F as g,
  Z as j,
  ax as C,
  $ as w,
  A as b,
  x as A,
  B as _,
  I as D,
  l as L,
  C as F,
  h as U,
} from './index-C8UyLGsD.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as u } from './asyncTask-Deq5sCIJ.js';
import { m as I, u as K } from './store-Cj3bQrT7.js';
import { D as Z } from './index-uNJ5HPPz.js';
import { bZ as E, bD as q, _ as H, bs as M, bU as V } from '../vendor/vendor-icons-BHMUH78i.js';
import { A as $ } from './Alert-lszDImnb.js';
import { P as Q } from './progress-CqsUaYIW.js';
import { E as G } from './Empty-DHLc2EKW.js';
const J = 'user-memory:analysis-task',
  P = (n) => {
    const t = Y(J, () => I.getTask(n), {
      refreshInterval: (s) => (s && [u.Pending, u.Processing].includes(s.status) ? 3e4 : 0),
    });
    return (
      c.useEffect(() => {
        if (!t.data || ![u.Pending, u.Processing].includes(t.data.status)) return;
        const r = setInterval(() => {
          t.mutate();
        }, 5e3);
        return () => clearInterval(r);
      }, [t.data?.id, t.data?.status, t.mutate]),
      { ...t, refresh: t.mutate }
    );
  },
  R = c.memo(
    ({
      footerNote: n,
      onCancel: t,
      onChange: s,
      onSubmit: r,
      open: a,
      range: o,
      submitting: i,
    }) => {
      const { t: m } = f('memory'),
        d = c.useCallback((l) => l.isAfter(S(), 'day'), []);
      return e.jsx(W, {
        cancelText: m('analysis.modal.cancel'),
        okButtonProps: { loading: i },
        okText: m('analysis.modal.submit'),
        open: a,
        title: m('analysis.modal.title'),
        onCancel: t,
        onOk: r,
        children: e.jsxs(g, {
          gap: 12,
          children: [
            e.jsx(j, { type: 'secondary', children: m('analysis.modal.helper') }),
            e.jsx(Z.RangePicker, {
              allowClear: !0,
              disabledDate: d,
              format: 'YYYY/MM/DD',
              style: { width: '100%' },
              value: [o[0] ? S(o[0]) : null, o[1] ? S(o[1]) : null],
              onChange: (l) => s([l?.[0]?.toDate() ?? null, l?.[1]?.toDate() ?? null]),
            }),
            e.jsx(j, { fontSize: 12, type: 'secondary', children: n }),
          ],
        }),
      });
    },
  );
R.displayName = 'DateRangeModal';
const v = c.memo(({ footerNote: n, range: t, onRangeChange: s, iconOnly: r }) => {
  const { t: a } = f('memory'),
    { message: o } = C.useApp(),
    { isValidating: i, refresh: m } = P(),
    [d, l] = c.useState(!1),
    [p, y] = c.useState(!1),
    h = async () => {
      y(!0);
      try {
        const [x, N] = t,
          z = await I.requestFromChatTopics({ fromDate: x ?? void 0, toDate: N ?? void 0 });
        (await m(),
          o.success(z.deduped ? a('analysis.toast.deduped') : a('analysis.toast.started')),
          l(!1));
      } catch (x) {
        (console.error(x), o.error(a('analysis.toast.failed')));
      } finally {
        y(!1);
      }
    },
    B = p || i;
  return e.jsxs(e.Fragment, {
    children: [
      r
        ? e.jsx(w, {
            title: a('analysis.action.button'),
            children: e.jsx(b, {
              icon: E,
              size: A,
              tooltipProps: { placement: 'bottom' },
              onClick: () => l(!0),
            }),
          })
        : e.jsx(_, {
            className: 'test',
            icon: E,
            loading: B,
            size: 'small',
            style: { maxWidth: 300 },
            type: 'primary',
            onClick: () => l(!0),
            children: a('analysis.action.button'),
          }),
      e.jsx(R, {
        footerNote: n,
        open: d,
        range: t,
        submitting: p,
        onCancel: () => l(!1),
        onChange: s,
        onSubmit: h,
      }),
    ],
  });
});
v.displayName = 'AnalysisTrigger';
const T = c.memo(({ iconOnly: n }) => {
  const { t } = f('memory'),
    [s, r] = c.useState([null, null]),
    a = c.useMemo(
      () =>
        s[0] || s[1]
          ? t('analysis.modal.rangeSelected', {
              end:
                s[1]?.toISOString().slice(0, 10)?.replaceAll('-', '/') || t('analysis.range.end'),
              start:
                s[0]?.toISOString().slice(0, 10)?.replaceAll('-', '/') || t('analysis.range.start'),
            })
          : t('analysis.modal.rangePlaceholder'),
      [s, t],
    );
  return e.jsx(v, { footerNote: a, iconOnly: n, range: s, onRangeChange: r });
});
T.displayName = 'AnalysisAction';
const k = c.memo(({ task: n }) => {
  const { t } = f('memory'),
    s = n,
    r = s?.status,
    a = r === u.Pending || r === u.Processing,
    o = r === u.Error;
  if (!s || (!a && !o)) return null;
  const { progress: i } = s.metadata,
    m =
      i.totalTopics && i.totalTopics > 0
        ? Math.min(100, Math.round((i.completedTopics / i.totalTopics) * 100))
        : void 0,
    d = i.totalTopics
      ? t('analysis.status.progress', { completed: i.completedTopics, total: i.totalTopics })
      : t('analysis.status.progressUnknown', { completed: i.completedTopics }),
    l = s.error?.body,
    p =
      typeof l == 'string'
        ? l
        : l && typeof l == 'object' && 'detail' in l && typeof l.detail == 'string'
          ? l.detail
          : (s.error?.name ?? t('analysis.status.errorTitle'));
  return e.jsx($, {
    icon: e.jsx(D, { icon: o ? q : H, spin: a && !o }),
    title: t(o ? 'analysis.status.errorTitle' : 'analysis.status.title'),
    type: o ? 'error' : 'info',
    variant: 'borderless',
    description: e.jsx(g, {
      gap: 12,
      children: e.jsxs(g, {
        horizontal: !0,
        align: 'center',
        gap: 12,
        wrap: 'wrap',
        children: [
          e.jsx(Q, {
            percent: m ?? 30,
            showInfo: !!m,
            status: o ? 'exception' : 'active',
            style: { flex: 1, minWidth: 220 },
          }),
          e.jsx(j, {
            fontSize: 13,
            type: o ? 'danger' : 'secondary',
            children: o ? (p ?? t('analysis.status.errorTitle')) : d,
          }),
        ],
      }),
    }),
  });
});
k.displayName = 'MemoryAnalysisStatus';
const X = c.memo(() => {
  const { data: n } = P();
  return e.jsx(k, { task: n });
});
X.displayName = 'MemoryAnalysisStatusWithData';
const O = c.memo(({ iconOnly: n }) => {
  const { data: t, isValidating: s } = P(),
    { showAction: r, showStatus: a } = c.useMemo(() => {
      const o = t?.status,
        i = o === u.Pending || o === u.Processing,
        m = o === u.Error;
      return { showAction: (!i && (!s || m)) || !t || m, showStatus: !!(t && (i || m)) };
    }, [t, s]);
  return !r && !a
    ? null
    : n
      ? r
        ? e.jsx(T, { iconOnly: !0 })
        : null
      : e.jsxs(g, {
          gap: 12,
          style: { paddingTop: 16, width: '100%' },
          children: [a && e.jsx(k, { task: t }), r && e.jsx(T, {})],
        });
});
O.displayName = 'MemoryAnalysis';
const tt = ['activityId', 'contextId', 'experienceId', 'identityId', 'preferenceId'],
  et = c.memo(({ iconOnly: n }) => {
    const { message: t, modal: s } = C.useApp(),
      { t: r } = f(['common', 'memory']),
      a = r,
      o = K((y) => y.purgeAllMemories),
      [i, m] = c.useState(!1),
      [d, l] = L(),
      p = () => {
        s.confirm({
          cancelText: a('cancel', { ns: 'common' }),
          content: a('purge.confirm'),
          okButtonProps: { danger: !0, loading: i },
          okText: a('confirm', { ns: 'common' }),
          onOk: async () => {
            try {
              (m(!0), await o());
              const y = new URLSearchParams(d);
              for (const h of tt) y.delete(h);
              (l(y, { replace: !0 }), t.success(a('purge.success')));
            } catch {
              throw (t.error(a('purge.error')), new Error('Failed to purge memories'));
            } finally {
              m(!1);
            }
          },
          title: a('purge.title'),
          type: 'warning',
        });
      };
    return n
      ? e.jsx(w, {
          title: a('purge.action'),
          children: e.jsx(b, {
            danger: !0,
            icon: M,
            loading: i,
            size: A,
            tooltipProps: { placement: 'bottom' },
            onClick: p,
          }),
        })
      : e.jsx(_, {
          danger: !0,
          icon: e.jsx(D, { icon: M, size: A }),
          loading: i,
          size: 'small',
          style: { maxWidth: 300 },
          type: 'primary',
          onClick: p,
          children: a('purge.action'),
        });
  }),
  st = c.memo(({ children: n, gap: t = 8, showAnalysis: s, showPurge: r }) =>
    e.jsxs(g, {
      horizontal: !0,
      gap: t,
      children: [r && e.jsx(et, { iconOnly: !0 }), s && e.jsx(O, { iconOnly: !0 }), n],
    }),
  );
st.displayName = 'MemoryActionBar';
const yt = c.memo(({ search: n, title: t, children: s, ...r }) => {
    const { t: a } = f('memory');
    return e.jsx(F, {
      height: '100%',
      style: { minHeight: '50vh' },
      width: '100%',
      children: e.jsx(g, {
        align: 'center',
        gap: 12,
        children: e.jsx(G, {
          description: a(n ? 'empty.search' : 'empty.description'),
          icon: V,
          title: n ? void 0 : t || a('empty.title'),
          type: n ? 'default' : 'page',
          descriptionProps: { fontSize: 14 },
          style: { maxWidth: 550 },
          ...r,
          children: e.jsx(g, { children: s }),
        }),
      }),
    });
  }),
  at = 'memory-scroll',
  gt = () => {
    const [n, t] = c.useState();
    return (
      c.useEffect(() => {
        if (U) return;
        const s = document.querySelector(`#${at}`);
        s && t(s);
      }, []),
      n
    );
  };
export { st as A, yt as M, at as S, O as a, gt as u };
