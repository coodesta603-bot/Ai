import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  by as ee,
  F as u,
  I as z,
  f as b,
  v as te,
  a_ as k,
  cH as re,
  cI as A,
  bz as v,
  bB as T,
  g as w,
  bC as oe,
  aI as ne,
  B as M,
  C as f,
  a2 as ae,
  k as F,
  Z as R,
  j as O,
} from './index-C8UyLGsD.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as J } from './Modal-Dd2pIxVd.js';
import { u as se } from './upload-BTy9wwF3.js';
import { v as ie } from './v4-BKrj-4V8.js';
import { i as le, u as pe } from './index-Br6hqyew.js';
import { A as de } from './Alert-lszDImnb.js';
import { A as ce } from './index-B4Zarq8E.js';
import { q as B } from './base-AbuBx_QK.js';
import { R as W } from './index-CLKC7l7t.js';
import { T as xe } from './Trans-B9Jc6Abr.js';
import { cE as me, cm as ue, cF as ge, cG as he } from '../vendor/vendor-icons-BHMUH78i.js';
import { c as $e, b as fe } from './format-DpcrcXfF.js';
import { P as je } from './progress-CqsUaYIW.js';
import { F as q } from './Table-BlWKciej.js';
import { U as ye } from './index-C2-gySBL.js';
var d = ((o) => (
  (o[(o.Start = 0)] = 'Start'),
  (o[(o.Preparing = 1)] = 'Preparing'),
  (o[(o.Uploading = 2)] = 'Uploading'),
  (o[(o.Importing = 3)] = 'Importing'),
  (o[(o.Success = 4)] = 'Success'),
  (o[(o.Error = 5)] = 'Error'),
  (o[(o.Finished = 6)] = 'Finished'),
  o
))(d || {});
const I = 'ant',
  G = b(({ css: o, cssVar: t }) => ({
    modalTitleDark: o`
    &.${I}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 80px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${I}-modal-title {
      font-size: 24px;
    }
  `,
    modalTitleLight: o`
    &.${I}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 140px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${I}-modal-title {
      font-size: 24px;
    }
  `,
  })),
  be = c.memo(
    ({ icon: o, onOpenChange: t, title: n, open: a, children: s, width: i = 550, height: p }) => {
      const l = ee();
      return r.jsx(J, {
        centered: !0,
        afterOpenChange: t,
        closable: !1,
        footer: null,
        height: p,
        open: a,
        width: i,
        classNames: { header: l ? G.modalTitleDark : G.modalTitleLight },
        title: r.jsxs(u, { horizontal: !0, gap: 8, children: [r.jsx(z, { icon: o }), n] }),
        children: s,
      });
    },
  );
class we {
  importSettings = async (t) => {
    await te.getState().importAppSettings(t);
  };
  importData = async (t, n) => {
    const a = (i) => {
      n?.onStageChange?.(d.Error);
      const p = i;
      n?.onError?.({
        code: p.data.code,
        httpStatus: p.data.httpStatus,
        message: p.message,
        path: p.data.path,
      });
    };
    if (
      (t.messages?.length || 0) +
        (t.sessionGroups?.length || 0) +
        (t.sessions?.length || 0) +
        (t.topics?.length || 0) <
      500
    ) {
      n?.onStageChange?.(d.Importing);
      const i = Date.now();
      try {
        const p = await k.importer.importByPost.mutate({ data: t }),
          l = Date.now() - i;
        (n?.onStageChange?.(d.Success), n?.onSuccess?.(p.results, l));
      } catch (p) {
        a(p);
      }
      return;
    }
    await this.uploadData(t, { callbacks: n, handleError: a });
  };
  importPgData = async (t, n) => {
    const { callbacks: a } = n || {},
      s = (p) => {
        a?.onStageChange?.(d.Error);
        const l = p;
        a?.onError?.({
          code: l.data.code,
          httpStatus: l.data.httpStatus,
          message: l.message,
          path: l.data.path,
        });
      };
    if (
      Object.values(t.data)
        .map((p) => p.length)
        .reduce((p, l) => p + l, 0) < 500
    ) {
      a?.onStageChange?.(d.Importing);
      const p = Date.now();
      try {
        const l = await k.importer.importPgByPost.mutate(t),
          x = Date.now() - p;
        (a?.onStageChange?.(d.Success), a?.onSuccess?.(l.results, x));
      } catch (l) {
        s(l);
      }
      return;
    }
    await this.uploadData(t, { callbacks: a, handleError: s });
  };
  uploadData = async (t, { callbacks: n, handleError: a }) => {
    const s = `${ie()}.json`;
    let i;
    try {
      (n?.onStageChange?.(d.Uploading),
        (i = (
          await se.uploadDataToS3(t, {
            filename: s,
            onProgress: (x, h) => {
              n?.onFileUploading?.(h);
            },
            pathname: `import_config/${s}`,
          })
        ).data.path));
    } catch {
      throw new Error('Upload Error');
    }
    n?.onStageChange?.(d.Importing);
    const p = Date.now();
    try {
      const l = await k.importer.importByFile.mutate({ pathname: i }),
        x = Date.now() - p;
      (n?.onStageChange?.(d.Success), n?.onSuccess?.(l.results, x));
    } catch (l) {
      a(l);
    }
  };
}
const Se = new we(),
  Ce = async (o) => {
    const t = await o.text();
    try {
      return JSON.parse(t);
    } catch (n) {
      (console.error(n),
        re.error({
          description: A('import.importConfigFile.description', { ns: 'error', reason: n.message }),
          message: A('import.importConfigFile.title', { ns: 'error' }),
        }));
    }
  };
class Ie {
  submitDBV1UpgradeError = (t, n) => {
    const a = ['```json', JSON.stringify(n, null, 2), '```'].join(`
`),
      s = n?.message || '',
      i = B.stringifyUrl({
        query: {
          body: a,
          labels: '❌ Database Migration Error',
          title: `[Migration Error V${t}] ${s}`,
        },
        url: v(T, '/issues/new'),
      });
    window.open(i, '_blank');
  };
  submitImportError = (t) => {
    const n = ['```json', JSON.stringify(t, null, 2), '```'].join(`
`),
      a = t?.message || '',
      s = B.stringifyUrl({
        query: { body: n, labels: '❌ Import Config Error', title: `[Config Import Error] ${a}` },
        url: v(T, '/issues/new'),
      });
    window.open(s, '_blank');
  };
  submitPgliteInitError = (t) => {
    const n = ['```json', JSON.stringify(t, null, 2), '```'].join(`
`),
      a = t?.message || '',
      s = B.stringifyUrl({
        query: { body: n, labels: '❌ Database Init Error', title: `[Database Init Error] ${a}` },
        url: v(T, '/issues/new'),
      });
    window.open(s, '_blank');
  };
}
const Me = new Ie(),
  De = c.memo(({ error: o, onClick: t }) => {
    const { t: n } = w('common');
    return r.jsx(W, {
      icon: r.jsx(z, { icon: me }),
      status: 'error',
      style: { paddingBlock: 24, width: 450 },
      title: n('importModal.error.title'),
      extra: r.jsxs(u, {
        gap: 12,
        style: { textAlign: 'start' },
        children: [
          r.jsx(de, {
            style: { flex: 1 },
            title: o?.message,
            type: 'error',
            extra: r.jsx(ne, {
              actionIconSize: 'small',
              language: 'json',
              children: JSON.stringify(o, null, 2),
            }),
          }),
          r.jsx(M, { onClick: t, children: n('close') }),
        ],
      }),
      subTitle: r.jsx(ce, {
        children: r.jsxs(xe, {
          i18nKey: 'importModal.error.desc',
          ns: 'common',
          children: [
            '非常抱歉，数据库升级过程发生异常。请重试升级，或',
            r.jsx('a', {
              'aria-label': 'issue',
              'href': oe,
              'rel': 'noreferrer',
              'target': '_blank',
              'onClick': (a) => {
                (a.preventDefault(), Me.submitImportError(o));
              },
              'children': '提交问题',
            }),
            '我们将会第一时间帮你排查问题。',
          ],
        }),
      }),
    });
  }),
  e = 28,
  Ee = ae`
  12.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e * 2}px -${e}px 0 0,
      ${e * 3}px -${e}px 0 5px,
      ${e}px 0 0 5px,
      ${e * 2}px 0 0 0,
      ${e * 3}px 0 0 5px,
      ${e}px ${e}px 0 0,
      ${e * 2}px ${e}px 0 0,
      ${e * 3}px ${e}px 0 0;
  }

  25% {
    box-shadow:
      ${e}px -${e}px 0 5px,
      ${e * 2}px -${e}px 0 0,
      ${e * 3}px -${e}px 0 5px,
      ${e}px 0 0 0,
      ${e * 2}px 0 0 0,
      ${e * 3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e * 2}px ${e}px 0 5px,
      ${e * 3}px ${e}px 0 0;
  }

  50% {
    box-shadow:
      ${e}px -${e}px 0 5px,
      ${e * 2}px -${e}px 0 5px,
      ${e * 3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e * 2}px 0 0 0,
      ${e * 3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e * 2}px ${e}px 0 0,
      ${e * 3}px ${e}px 0 5px;
  }

  62.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e * 2}px -${e}px 0 0,
      ${e * 3}px -${e}px 0 0,
      ${e}px 0 0 5px,
      ${e * 2}px 0 0 0,
      ${e * 3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e * 2}px ${e}px 0 5px,
      ${e * 3}px ${e}px 0 5px;
  }

  75% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e * 2}px -${e}px 0 5px,
      ${e * 3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e * 2}px 0 0 0,
      ${e * 3}px 0 0 5px,
      ${e}px ${e}px 0 0,
      ${e * 2}px ${e}px 0 0,
      ${e * 3}px ${e}px 0 5px;
  }

  87.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e * 2}px -${e}px 0 5px,
      ${e * 3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e * 2}px 0 0 5px,
      ${e * 3}px 0 0 0,
      ${e}px ${e}px 0 5px,
      ${e * 2}px ${e}px 0 0,
      ${e * 3}px ${e}px 0 0;
  }
`,
  ke = b(({ css: o, cssVar: t }) => ({
    loader: o`
      transform: translateX(-${e * 2}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${e}px -${e}px 0 0,
        ${e * 2}px -${e}px 0 0,
        ${e * 3}px -${e}px 0 0,
        ${e}px 0 0 5px,
        ${e * 2}px 0 0 5px,
        ${e * 3}px 0 0 5px,
        ${e}px ${e}px 0 0,
        ${e * 2}px ${e}px 0 0,
        ${e * 3}px ${e}px 0 0;

      animation: ${Ee} 2s infinite linear;
    `,
  })),
  P = c.memo(() =>
    r.jsx(f, { style: { height: 80 }, children: r.jsx('div', { className: ke.loader }) }),
  ),
  ve = c.memo(({ progress: o = 0, speed: t = 0, restTime: n }) => {
    const { t: a } = w('common');
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(P, {}),
        r.jsxs(u, {
          align: 'center',
          gap: 8,
          width: '100%',
          children: [
            a('importModal.uploading.desc'),
            r.jsxs(u, {
              flex: 1,
              gap: 8,
              width: '100%',
              children: [
                r.jsx(je, {
                  showInfo: !0,
                  percent: o,
                  strokeColor: F.colorSuccess,
                  trailColor: F.colorSuccessBg,
                }),
                r.jsxs(u, {
                  horizontal: !0,
                  distribution: 'space-between',
                  style: { color: F.colorTextDescription, fontSize: 12 },
                  children: [
                    r.jsxs('span', {
                      children: [a('importModal.uploading.restTime'), ': ', n ? $e(n) : '-'],
                    }),
                    r.jsxs('span', {
                      children: [a('importModal.uploading.speed'), ': ', fe(t * 1024)],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  Te = (o) => {
    const t = [];
    for (const [n, a] of Object.entries(o.data))
      Array.isArray(a) && a.length > 0 && t.push({ count: a.length, name: n });
    return t;
  },
  Fe = (o) => o.reduce((t, n) => t + n.count, 0),
  y = b(({ css: o, cssVar: t }) => ({
    duplicateAlert: o`
      margin-block-start: ${t.marginMD};
      padding: ${t.paddingMD};
      border: 1px solid ${t.colorWarningBorder};
      border-radius: ${t.borderRadiusLG};

      background-color: ${t.colorWarningBg};
    `,
    duplicateDescription: o`
      margin-block-start: ${t.marginXS};
      font-size: ${t.fontSizeSM};
      color: ${t.colorTextSecondary};
    `,
    duplicateOptions: o`
      margin-block-start: ${t.marginSM};
    `,
    duplicateTag: o`
      border-color: ${t.colorWarningBorder};
      color: ${t.colorWarning};
      background-color: ${t.colorWarningBg};
    `,
    hash: o`
      font-family: ${t.fontFamilyCode};
      font-size: 12px;
      color: ${t.colorTextTertiary};
    `,
    infoIcon: o`
      color: ${t.colorTextSecondary};
    `,
    modalContent: o`
      padding-block: ${t.paddingMD};
      padding-inline: 0;
    `,
    successIcon: o`
      color: ${t.colorSuccess};
    `,
    tableContainer: o`
      overflow: hidden;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};
    `,
    tableName: o`
      font-family: ${t.fontFamilyCode};
    `,
    warningIcon: o`
      color: ${t.colorWarning};
    `,
  })),
  Be = ({
    open: o = !0,
    onOpenChange: t = () => {},
    onConfirm: n = () => {},
    onCancel: a = () => {},
    importData: s,
  }) => {
    const { t: i } = w('common'),
      [p] = c.useState('skip'),
      l = Te(s),
      x = Fe(l),
      h = [
        {
          dataIndex: 'name',
          key: 'name',
          render: (S) => r.jsx('div', { className: y.tableName, children: S }),
          title: i('importPreview.tables.name'),
        },
        { dataIndex: 'count', key: 'count', title: i('importPreview.tables.count') },
      ],
      $ = () => {
        (n(p === 'overwrite'), t(!1));
      };
    return r.jsx(J, {
      open: o,
      title: i('importPreview.title'),
      width: 700,
      footer: [
        r.jsx(
          M,
          {
            onClick: () => {
              (t(!1), a());
            },
            children: i('cancel'),
          },
          'cancel',
        ),
        r.jsx(
          M,
          { type: 'primary', onClick: $, children: i('importPreview.confirmImport') },
          'confirm',
        ),
      ],
      onCancel: () => t(!1),
      children: r.jsx('div', {
        className: y.modalContent,
        children: r.jsxs(u, {
          gap: 16,
          children: [
            r.jsxs(u, {
              gap: 4,
              children: [
                r.jsxs(u, {
                  horizontal: !0,
                  align: 'center',
                  justify: 'space-between',
                  width: '100%',
                  children: [
                    r.jsxs(u, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        r.jsx(ue, { className: y.infoIcon, size: 16 }),
                        r.jsx(R, {
                          strong: !0,
                          children: i('importPreview.totalRecords', { count: x }),
                        }),
                      ],
                    }),
                    r.jsx(u, {
                      horizontal: !0,
                      children: r.jsx(R, {
                        type: 'secondary',
                        children: i('importPreview.totalTables', { count: l.length }),
                      }),
                    }),
                  ],
                }),
                r.jsxs(u, {
                  horizontal: !0,
                  className: y.hash,
                  gap: 4,
                  children: [
                    i('importPreview.hashLabel'),
                    ': ',
                    r.jsx('span', { children: s.schemaHash }),
                  ],
                }),
              ],
            }),
            r.jsx('div', {
              className: y.tableContainer,
              children: r.jsx(q, {
                columns: h,
                dataSource: l,
                pagination: !1,
                rowKey: 'name',
                scroll: { y: 350 },
                size: 'small',
              }),
            }),
          ],
        }),
      }),
    });
  },
  Pe = b(({ css: o, cssVar: t }) => ({
    zeroCell: o`
      color: ${t.colorTextQuaternary};
    `,
  })),
  ze = c.memo(({ duration: o, dataSource: t, onClickFinish: n }) => {
    const { t: a } = w('common'),
      s = (i) => i || r.jsx('span', { className: Pe.zeroCell, children: '0' });
    return r.jsx(W, {
      icon: r.jsx(z, { icon: ge }),
      status: 'success',
      style: { paddingBlock: 24, paddingInline: 0 },
      title: a('importModal.finish.title'),
      extra: r.jsx(M, {
        size: 'large',
        type: 'primary',
        onClick: n,
        children: a('importModal.finish.start'),
      }),
      subTitle: t
        ? r.jsxs(u, {
            gap: 16,
            width: 500,
            children: [
              a('importModal.finish.subTitle', { duration: (o / 1e3).toFixed(2) }),
              r.jsx(q, {
                bordered: !0,
                dataSource: t,
                pagination: !1,
                rowKey: 'title',
                size: 'small',
                columns: [
                  { dataIndex: 'title', render: s, title: a('importModal.result.type') },
                  { dataIndex: 'added', render: s, title: a('importModal.result.added') },
                  { dataIndex: 'skips', render: s, title: a('importModal.result.skips') },
                  { dataIndex: 'error', render: s, title: a('importModal.result.errors') },
                  { dataIndex: 'updated', render: s, title: a('importModal.result.update') },
                ],
              }),
            ],
          })
        : a('importModal.finish.onlySettings'),
    });
  }),
  H = b(({ css: o }) => ({
    children: o`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,
    wrapper: o`
    font-size: inherit;
  `,
  })),
  Ve = c.memo(({ children: o, onFinishImport: t }) => {
    const { t: n } = w('common'),
      a = le((g) => g.refreshAgentList),
      [s, i] = pe((g) => [g.refreshMessages, g.refreshTopic]),
      [p, l] = c.useState(0),
      [x, h] = c.useState(d.Start),
      [$, S] = c.useState(),
      [K, U] = c.useState(),
      [D, N] = c.useState(),
      [X, _] = c.useState(!1),
      [E, Q] = c.useState(void 0),
      Z = c.useMemo(() => {
        if (!D) return;
        const { type: g, ...m } = D;
        if (g !== 'settings')
          return Object.entries(m)
            .filter(([, j]) => !!j)
            .map(([j, C]) => ({
              added: C.added,
              error: C.errors,
              skips: C.skips,
              title: j,
              updated: C.updated || 0,
            }));
      }, [D]),
      Y = x === d.Success || x === d.Error,
      L = () => {
        (h(d.Finished), N(void 0), U(void 0), S(void 0), t?.());
      },
      V = c.useMemo(() => {
        switch (x) {
          case d.Preparing:
            return r.jsxs(f, {
              gap: 24,
              padding: 40,
              children: [r.jsx(P, {}), r.jsx('p', { children: n('importModal.preparing') })],
            });
          case d.Importing:
            return r.jsxs(f, {
              gap: 24,
              padding: 40,
              children: [r.jsx(P, {}), r.jsx('p', { children: n('importModal.loading') })],
            });
          case d.Uploading:
            return r.jsx(f, {
              gap: 24,
              padding: 40,
              children: r.jsx(ve, {
                progress: $?.progress,
                restTime: $?.restTime,
                speed: $?.speed,
              }),
            });
          case d.Success:
            return r.jsx(f, {
              gap: 24,
              paddingInline: 16,
              children: r.jsx(ze, { dataSource: Z, duration: p, onClickFinish: L }),
            });
          case d.Error:
            return r.jsx(f, {
              gap: 24,
              paddingBlock: 24,
              paddingInline: 0,
              children: r.jsx(De, { error: K, onClick: L }),
            });
          default:
            return;
        }
      }, [x, $]);
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(be, {
          icon: he,
          open: x !== d.Start && x !== d.Finished,
          title: n('importModal.title'),
          width: Y ? 600 : 400,
          children: V,
        }),
        r.jsx(ye, {
          accept: 'application/json',
          className: O(H.wrapper),
          maxCount: 1,
          showUploadList: !1,
          beforeUpload: async (g) => {
            const m = await Ce(g);
            return (m && (Q(m), _(!0)), !1);
          },
          children: r.jsx('div', { className: O(H.children), children: o }),
        }),
        E &&
          r.jsx(Be, {
            importData: E,
            open: X,
            onOpenChange: _,
            onConfirm: async (g) => {
              (h(d.Preparing),
                await Se.importPgData(E, {
                  callbacks: {
                    onError: (m) => {
                      U(m);
                    },
                    onFileUploading: (m) => {
                      S(m);
                    },
                    onStageChange: (m) => {
                      h(m);
                    },
                    onSuccess: (m, j) => {
                      (m && N(m), l(j));
                    },
                  },
                  overwriteExisting: g,
                }),
                await a(),
                await s(),
                await i());
            },
          }),
      ],
    });
  });
export { Ve as D };
