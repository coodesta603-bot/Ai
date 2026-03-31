const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/mermaid.core-BJEGfNDJ.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/purify.es-r8glNMJW.js',
      'assets/step-B6EOmCqb.js',
      'assets/isEmpty-D-XN117C.js',
    ]),
) => i.map((i) => d[i]);
import {
  f as G,
  ae as O,
  ad as se,
  de as V,
  m as wt,
  F as T,
  A as z,
  j as N,
  I as ce,
  a3 as vt,
  aJ as ze,
  k as Oe,
  aw as _e,
  i8 as kt,
  _ as Mt,
  a2 as Nt,
  bl as Pe,
  bA as jt,
  i9 as Ct,
  ia as It,
  ib as Be,
  bg as Tt,
  Z as Dt,
  ic as he,
  T as Et,
  hn as Ue,
  aI as St,
} from './index-C8UyLGsD.js';
import { r as h, g as Lt } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  f0 as At,
  f1 as Rt,
  aX as zt,
  du as Ot,
  f2 as _t,
  f3 as Pt,
  dw as Bt,
  eU as Ut,
  a0 as Fe,
  aK as Ft,
  dG as Qt,
  f4 as Gt,
  f5 as Yt,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { j as Qe, z as Ht } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { S as Zt } from './Snippet-B4YU4vnL.js';
import { u as Wt } from './useTranslation-BcQ_3h0b.js';
import { i as $t } from './image-nnCaCTxV.js';
import { I as Ge } from './index-YiLuNMTk.js';
import { A as Jt } from './index-B2Jw6NRR.js';
import { a as Xt } from './index-bx4f06U_.js';
import { j as ye, v as qt } from './index-BGyEEg7z.js';
const Fn = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Vt = async (e, t) =>
    new Promise((r, n) => {
      try {
        const o = document.createElement('a');
        ((o.href = e),
          (o.download = t),
          (o.style.display = 'none'),
          document.body.append(o),
          o.click(),
          o.remove(),
          r());
      } catch (o) {
        n(o);
      }
    }),
  B = 'ant',
  L = G(({ css: e, cssVar: t }) => ({
    actionsHidden: e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 0;
    `,
    actionsVisible: e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 1;
    `,
    borderless: O.variantBorderlessWithoutHover,
    filled: e`
      ${O.variantOutlinedWithoutHover};
      ${O.variantFilledWithoutHover};
    `,
    image: e`
      display: flex;
      align-items: center;
      justify-content: center;

      width: auto;
      height: auto;
    `,
    mask: e`
      ${O.blur};
      backdrop-filter: blur(8px);
    `,
    outlined: O.variantOutlinedWithoutHover,
    preview: e`
      .${B}-image-preview-mask {
        background: color-mix(in srgb, ${t.colorBgLayout} 90%, transparent);
      }

      .${B}-image-preview-close {
        color: ${t.colorTextDescription};
        background: ${t.colorBgContainer};
        box-shadow: ${t.boxShadowTertiary};

        svg {
          stroke: ${t.colorTextDescription};
        }

        &:hover {
          color: ${t.colorText};
          background: ${t.colorBgContainer};

          svg {
            stroke: ${t.colorText};
          }
        }
      }

      .${B}-image-preview-img {
        width: 100%;
      }

      .${B}-image-preview-switch {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;
        padding: 0;

        color: ${t.colorTextDescription};

        background: ${t.colorBgContainer};
        box-shadow: ${t.boxShadowTertiary};

        svg {
          transform: scale(0.75);
        }

        &:hover {
          color: ${t.colorText};
          background: ${t.colorBgContainer};
        }
      }

      .${B}-image-preview-switch-disabled {
        display: none;
      }

      .ant-image-preview-progress {
        color: ${t.colorTextDescription};
      }

      img {
        min-width: 100%;
      }
    `,
    root: e`
      cursor: pointer;
      user-select: none;

      position: relative;

      overflow: hidden;

      width: fit-content;
      border-radius: ${t.borderRadius};

      line-height: 1;

      .${B}-image-cover {
        display: none !important;
      }

      &:hover {
        .actions-hidden {
          opacity: 1;
        }
      }
    `,
    toolbar: e`
      ${O.variantOutlinedWithoutHover};
      padding: 4px;
      border-color: ${t.colorFillTertiary};
      border-radius: ${t.borderRadiusLG};
    `,
    wrapper: e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      height: auto;
    `,
  })),
  Kt = se(L.root, {
    defaultVariants: { variant: 'filled' },
    variants: { variant: { filled: L.filled, outlined: L.outlined, borderless: L.borderless } },
  }),
  er =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjM0IzQjNCIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K',
  tr =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRUNFQ0VDIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K',
  rr = h.memo(({ children: e, visible: t }) => {
    const r = h.useRef(null);
    return (
      h.useEffect(() => {
        if (!r.current) return;
        const n = (o) => {
          o.preventDefault();
        };
        t
          ? r.current.addEventListener('wheel', n, { passive: !1 })
          : r.current.removeEventListener('wheel', n);
      }, [t]),
      p.jsx('div', { ref: r, children: e })
    );
  });
var Ye = rr;
const nr = (e) =>
    new Promise((t, r) => {
      const n = new Image(),
        o = URL.createObjectURL(e);
      ((n.onload = () => {
        URL.revokeObjectURL(o);
        const a = document.createElement('canvas');
        ((a.width = n.naturalWidth), (a.height = n.naturalHeight));
        const i = a.getContext('2d');
        if (!i) {
          r(new Error('Canvas context not available'));
          return;
        }
        (i.drawImage(n, 0, 0),
          a.toBlob(
            (l) => {
              l ? t(l) : r(new Error('Failed to convert to PNG'));
            },
            'image/png',
            1,
          ));
      }),
        (n.onerror = () => {
          (URL.revokeObjectURL(o), r(new Error('Failed to load image')));
        }),
        (n.src = o));
    }),
  or = async (e) => {
    const t = (e.type || '').toLowerCase();
    return t === 'image/png' || t === 'image/svg+xml' ? { [t]: e } : { 'image/png': await nr(e) };
  },
  ir = (e) => {
    try {
      const t = new URL(e).pathname.match(/\/([^/]+)$/);
      return t ? decodeURIComponent(t[1]) : 'image';
    } catch {
      return 'image';
    }
  },
  ar = (e) =>
    ({
      'image/svg+xml': 'svg',
      'image/png': 'png',
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      'image/webp': 'webp',
      'image/gif': 'gif',
    })[e?.toLowerCase()] ||
    e?.split('/')[1]?.split('+')[0] ||
    'png',
  lr = h.memo(({ children: e, info: t, minScale: r, maxScale: n }) => {
    const { t: o } = Wt($t),
      [a, i] = h.useState(null),
      [l, c] = h.useState(!1),
      [d, s] = h.useState(!1),
      {
        transform: { scale: u },
        actions: {
          onFlipY: f,
          onFlipX: m,
          onRotateLeft: g,
          onRotateRight: b,
          onZoomOut: x,
          onZoomIn: v,
        },
        image: { url: y },
      } = t,
      w = h.useCallback(async () => {
        s(!0);
        try {
          const j = await (await fetch(y, { mode: 'cors' })).blob(),
            E = URL.createObjectURL(j);
          let I = ir(y);
          const S = ar(j.type);
          (I.includes('.')
            ? I.endsWith('.svg+xml') && (I = I.replace(/\.svg\+xml$/i, '.svg'))
            : (I = `${I}.${S}`),
            await Vt(E, I),
            URL.revokeObjectURL(E),
            V.success(o('image.downloadSuccess')));
        } catch {
          V.error(o('image.downloadFailed'));
        } finally {
          s(!1);
        }
      }, [y, o]),
      D = h.useCallback(async () => {
        c(!0);
        try {
          const j = await or(await (await fetch(y, { mode: 'cors' })).blob());
          (await navigator.clipboard.write([new ClipboardItem(j)]),
            V.success(o('image.copySuccess')));
        } catch {
          V.error(o('image.copyFailed'));
        } finally {
          c(!1);
        }
      }, [y, o]);
    return p.jsx(wt, {
      popupContainer: a ?? void 0,
      children: p.jsxs(T, {
        horizontal: !0,
        className: L.toolbar,
        gap: 4,
        ref: i,
        children: [
          p.jsx(z, { icon: At, title: o('image.flipHorizontal'), onClick: m }),
          p.jsx(z, { icon: Rt, title: o('image.flipVertical'), onClick: f }),
          p.jsx(z, { icon: zt, title: o('image.rotateLeft'), onClick: g }),
          p.jsx(z, { icon: Ot, title: o('image.rotateRight'), onClick: b }),
          p.jsx(z, { disabled: u === r, icon: _t, title: o('image.zoomOut'), onClick: x }),
          p.jsx(z, { disabled: u === n, icon: Pt, title: o('image.zoomIn'), onClick: v }),
          p.jsx(z, { icon: Bt, loading: l, title: o('image.copy'), onClick: D }),
          p.jsx(z, { icon: Ut, loading: d, title: o('image.download'), onClick: w }),
          e,
        ],
      }),
    });
  });
var He = lr;
const sr = (e) => {
  const [t, r] = h.useState(!1);
  return h.useMemo(() => {
    if (e === !1) return e;
    const {
      onVisibleChange: n,
      onOpenChange: o,
      minScale: a = 0.32,
      maxScale: i = 32,
      toolbarAddon: l,
      rootClassName: c,
      imageRender: d,
      toolbarRender: s,
      ...u
    } = e === !0 ? {} : e || {};
    return {
      actionsRender: (f, m) => {
        const g = p.jsx(He, { info: m, maxScale: i, minScale: a, children: l });
        return s ? s(g, m) : g;
      },
      closeIcon: p.jsx(ce, { color: '#fff', icon: Fe }),
      imageRender: (f, m) => {
        const g = p.jsx(Ye, { visible: t, children: f });
        return d ? d(g, m) : g;
      },
      maxScale: i,
      minScale: a,
      onOpenChange: (f, m) => {
        (r(f), o?.(f, m), n?.(f, !f, m.current));
      },
      rootClassName: N(L.preview, c),
      ...u,
    };
  }, [e, t, L]);
};
var cr = sr;
const { PreviewGroup: dr } = Ge,
  Ze = h.memo(({ items: e, children: t, enable: r = !0, preview: n }) => {
    const o = cr(n);
    return r ? p.jsx(dr, { items: e, preview: o, children: t }) : t;
  });
Ze.displayName = 'PreviewGroup';
var ur = Ze;
const pr = (e) => {
  const [t, r] = h.useState(!1);
  return h.useMemo(() => {
    if (e === !1) return e;
    const {
      onVisibleChange: n,
      onOpenChange: o,
      minScale: a = 0.32,
      maxScale: i = 32,
      toolbarAddon: l,
      rootClassName: c,
      imageRender: d,
      toolbarRender: s,
      actionsRender: u,
      ...f
    } = e === !0 ? {} : e || {};
    return {
      actionsRender:
        u ||
        ((m, g) => {
          const b = p.jsx(He, { info: g, maxScale: i, minScale: a, children: l });
          return s ? s(b, g) : b;
        }),
      closeIcon: p.jsx(ce, { color: '#fff', icon: Fe }),
      imageRender: (m, g) => {
        const b = p.jsx(Ye, { visible: t, children: m });
        return d ? d(b, g) : b;
      },
      maxScale: i,
      minScale: a,
      onOpenChange: (m) => {
        (r(m), o?.(m), n?.(m, !m));
      },
      rootClassName: N(L.preview, c),
      styles: { mask: { backdropFilter: 'blur(8px)' } },
      ...f,
    };
  }, [e, t, L]);
};
var fr = pr;
const We = h.memo(
  ({
    ref: e,
    style: t,
    preview: r,
    isLoading: n,
    maxHeight: o = '100%',
    maxWidth: a = '100%',
    minHeight: i,
    minWidth: l,
    actions: c,
    className: d,
    alwaysShowActions: s,
    variant: u = 'filled',
    objectFit: f = 'cover',
    classNames: m,
    styles: g,
    onClick: b,
    width: x,
    height: v,
    ...y
  }) => {
    const { isDarkMode: w } = vt(),
      D = s ? L.actionsVisible : L.actionsHidden,
      j = fr(r);
    return n
      ? p.jsx('div', {
          onClick: b,
          children: p.jsx(ze.Avatar, {
            active: !0,
            style: {
              borderRadius: Oe.borderRadius,
              height: v,
              maxHeight: o,
              maxWidth: a,
              minHeight: i,
              minWidth: l,
              width: x,
            },
          }),
        })
      : p.jsxs(T, {
          className: N(Kt({ variant: u }), d),
          ref: e,
          style: t,
          children: [
            c && p.jsx('div', { className: N(D, s ? '' : 'actions-hidden'), children: c }),
            p.jsx(Ge, {
              className: N(L.image, m?.image),
              fallback: w ? er : tr,
              height: v,
              loading: 'lazy',
              preview: r === !1 ? !1 : j,
              width: x,
              classNames: { root: N(L.wrapper, m?.wrapper) },
              style: {
                maxHeight: o,
                maxWidth: a,
                minHeight: i,
                minWidth: l,
                objectFit: f || 'cover',
                ...g?.image,
              },
              styles: { root: g?.wrapper },
              onClick: b,
              ...y,
            }),
          ],
        });
  },
);
We.displayName = 'Image';
var mr = We;
const $e = mr;
$e.PreviewGroup = ur;
var de = $e;
const Je = [
    { displayName: 'Lobe Theme', id: 'lobe-theme' },
    { background: '#fbf9ff', displayName: 'Mermaid Default', id: 'default' },
    { background: '#fffcf8', displayName: 'Mermaid Base', id: 'base' },
    { background: '#000', displayName: 'Mermaid Dark', id: 'dark' },
    { background: '#f9ffeb', displayName: 'Mermaid Forest', id: 'forest' },
    { background: '#fff', displayName: 'Mermaid Neutral', id: 'neutral' },
  ],
  gr = 1e4,
  P = new Map(),
  be = 500,
  hr = () => {
    if (P.size > be) {
      const e = Math.floor(be * 0.2),
        t = Array.from(P.keys()).slice(0, e);
      for (const r of t) P.delete(r);
    }
  };
let ie = null;
const Xe = () =>
    typeof window > 'u'
      ? Promise.resolve(null)
      : (ie ||
          (ie = Mt(
            () => import('./mermaid.core-BJEGfNDJ.js').then((e) => e.at),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
          ).then((e) => e.default)),
        ie),
  qe = (e, t) => ({
    fontFamily: e.fontFamilyCode,
    gantt: { useWidth: 1920 },
    securityLevel: 'loose',
    startOnLoad: !1,
    theme: t || (e.isDarkMode ? 'dark' : 'neutral'),
    themeVariables: t
      ? void 0
      : {
          errorBkgColor: e.colorTextDescription,
          errorTextColor: e.colorTextDescription,
          fontFamily: e.fontFamily,
          lineColor: e.colorTextSecondary,
          mainBkg: e.colorBgContainer,
          noteBkgColor: e.colorInfoBg,
          noteTextColor: e.colorInfoText,
          pie1: e.geekblue,
          pie2: e.colorWarning,
          pie3: e.colorSuccess,
          pie4: e.colorError,
          primaryBorderColor: e.colorBorder,
          primaryColor: e.colorBgContainer,
          primaryTextColor: e.colorText,
          secondaryBorderColor: e.colorInfoBorder,
          secondaryColor: e.colorInfoBg,
          secondaryTextColor: e.colorInfoText,
          tertiaryBorderColor: e.colorSuccessBorder,
          tertiaryColor: e.colorSuccessBg,
          tertiaryTextColor: e.colorSuccessText,
          textColor: e.colorText,
        },
  }),
  yr = (e, { id: t, theme: r }) => {
    const n = _e(),
      [o, a] = h.useState(''),
      i = h.useMemo(
        () => qe(n, r),
        [
          n.fontFamilyCode,
          n.isDarkMode,
          n.colorTextDescription,
          n.fontFamily,
          n.colorTextSecondary,
          n.colorBgContainer,
          n.colorInfoBg,
          n.colorInfoText,
          n.geekblue,
          n.colorWarning,
          n.colorSuccess,
          n.colorError,
          n.colorBorder,
          n.colorInfoBorder,
          n.colorSuccessBorder,
          n.colorSuccessBg,
          n.colorSuccessText,
          n.colorText,
          r,
        ],
      ),
      l = h.useMemo(() => {
        const c = e.length < gr ? e : kt.hashStr(e);
        return [t, r || (n.isDarkMode ? 'd' : 'l'), c].filter(Boolean).join('-');
      }, [e, t, n.isDarkMode, r]);
    return (
      h.useEffect(() => {
        const c = P.get(l);
        if (c) {
          c.then((s) => {
            a(s);
          }).catch(() => {});
          return;
        }
        const d = (async () => {
          try {
            const s = await Xe();
            if (!s) return '';
            if (await s.parse(e)) {
              s.initialize(i);
              const { svg: u } = await s.render(t, e);
              return u;
            } else throw new Error('Mermaid 语法无效');
          } catch (s) {
            return (console.error('Mermaid 解析错误:', s), '');
          }
        })();
        (P.set(l, d),
          hr(),
          d
            .then((s) => {
              P.get(l) === d && a(s);
            })
            .catch(() => {
              P.get(l) === d && P.delete(l);
            }));
      }, [l, e, t, i]),
      o
    );
  },
  Ve = h.memo(
    ({
      children: e,
      className: t,
      fallbackClassName: r,
      ref: n,
      style: o,
      theme: a,
      variant: i,
    }) => {
      const l = e ?? '',
        c = a === 'lobe-theme' || !a,
        d = h.useMemo(() => {
          if (!c) return Je.find((b) => b.id === a)?.background;
        }, [c, a]),
        s = yr(l, { id: Qe(`mermaid-${h.useId()}`), theme: c ? void 0 : a }),
        u = !s,
        [f, m] = h.useState();
      (h.useEffect(
        () => () => {
          f && URL.revokeObjectURL(f);
        },
        [f],
      ),
        h.useEffect(() => {
          if (u || !s) return;
          let b = s;
          if (
            typeof window < 'u' &&
            typeof navigator < 'u' &&
            navigator.userAgent.includes('Firefox')
          ) {
            const v = new DOMParser().parseFromString(s, 'image/svg+xml'),
              y = v.documentElement;
            if (y && y.hasAttribute('viewBox')) {
              const w = y.getAttribute('viewBox').split(' ');
              (Array.isArray(w) &&
                w.length === 4 &&
                (y.setAttribute('width', w[2]), y.setAttribute('height', w[3])),
                (b = new XMLSerializer().serializeToString(v)));
            }
          }
          const x = new Blob([b], { type: 'image/svg+xml' });
          m(URL.createObjectURL(x));
        }, [u, s]));
      const g = {
        background: i === 'filled' ? d : void 0,
        margin: 0,
        minWidth: 300,
        padding: i === 'borderless' ? 0 : 16,
        position: 'relative',
        width: '100%',
        ...o,
      };
      return f
        ? p.jsx(de, {
            alt: 'mermaid',
            className: t,
            maxHeight: 480,
            minWidth: 300,
            objectFit: 'contain',
            ref: n,
            src: f,
            style: g,
            variant: 'borderless',
            width: '100%',
          })
        : p.jsx('div', {
            className: r,
            style: o,
            children: p.jsx('div', { style: { padding: 16 }, children: 'Loading...' }),
          });
    },
  );
Ve.displayName = 'StaticMermaid';
var br = Ve;
const xr = (e, { enabled: t = !0, id: r, theme: n }) => {
    const o = _e(),
      [a, i] = h.useState(''),
      l = h.useRef(''),
      c = h.useRef(e),
      d = h.useRef(void 0),
      s = h.useMemo(
        () => qe(o, n),
        [
          o.fontFamilyCode,
          o.isDarkMode,
          o.colorTextDescription,
          o.fontFamily,
          o.colorTextSecondary,
          o.colorBgContainer,
          o.colorInfoBg,
          o.colorInfoText,
          o.geekblue,
          o.colorWarning,
          o.colorSuccess,
          o.colorError,
          o.colorBorder,
          o.colorInfoBorder,
          o.colorSuccessBorder,
          o.colorSuccessBg,
          o.colorSuccessText,
          o.colorText,
          n,
        ],
      );
    return (
      h.useEffect(() => {
        c.current = e;
      }, [e]),
      h.useEffect(() => {
        if (!t) {
          (i(''), (l.current = ''));
          const m = d.current;
          m && clearTimeout(m);
          return;
        }
        const u = c.current;
        if (u === l.current && a) return;
        const f = d.current;
        return (
          f && clearTimeout(f),
          (d.current = setTimeout(async () => {
            const m = c.current;
            if (m === u)
              try {
                const g = await Xe();
                if (!g) return;
                if (await g.parse(m)) {
                  g.initialize(s);
                  const { svg: b } = await g.render(r, m);
                  c.current === m && (i(b), (l.current = m));
                }
              } catch (g) {
                m === c.current && console.error('Mermaid 解析错误:', g);
              }
          }, 300)),
          () => {
            const m = d.current;
            m && clearTimeout(m);
          }
        );
      }, [t, e, r, s, a]),
      a
    );
  },
  Ke = h.memo(
    ({
      children: e,
      className: t,
      fallbackClassName: r,
      ref: n,
      style: o,
      theme: a,
      variant: i,
    }) => {
      const l = e ?? '',
        c = a === 'lobe-theme' || !a,
        d = h.useMemo(() => {
          if (!c) return Je.find((b) => b.id === a)?.background;
        }, [c, a]),
        s = xr(l, { enabled: !0, id: Qe(`mermaid-${h.useId()}`), theme: c ? void 0 : a }),
        u = !s,
        [f, m] = h.useState();
      (h.useEffect(
        () => () => {
          f && URL.revokeObjectURL(f);
        },
        [f],
      ),
        h.useEffect(() => {
          if (u || !s) {
            m(void 0);
            return;
          }
          let b = s;
          if (
            typeof window < 'u' &&
            typeof navigator < 'u' &&
            navigator.userAgent.includes('Firefox')
          ) {
            const v = new DOMParser().parseFromString(s, 'image/svg+xml'),
              y = v.documentElement;
            if (y && y.hasAttribute('viewBox')) {
              const w = y.getAttribute('viewBox').split(' ');
              (Array.isArray(w) &&
                w.length === 4 &&
                (y.setAttribute('width', w[2]), y.setAttribute('height', w[3])),
                (b = new XMLSerializer().serializeToString(v)));
            }
          }
          const x = new Blob([b], { type: 'image/svg+xml' });
          m(URL.createObjectURL(x));
        }, [u, s]));
      const g = {
        background: i === 'filled' ? d : void 0,
        margin: 0,
        minWidth: 300,
        padding: i === 'borderless' ? 0 : 16,
        position: 'relative',
        width: '100%',
        ...o,
      };
      return f
        ? p.jsx(de, {
            alt: 'mermaid',
            className: t,
            maxHeight: 480,
            minWidth: 300,
            objectFit: 'contain',
            ref: n,
            src: f,
            style: g,
            variant: 'borderless',
            width: '100%',
          })
        : p.jsx('div', {
            className: r,
            style: o,
            children: p.jsx('div', { style: { padding: 16 }, children: 'Rendering...' }),
          });
    },
  );
Ke.displayName = 'StreamMermaid';
var wr = Ke;
const vr = Nt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,
  _ = G(({ css: e, cssVar: t }) => ({
    animated: e`
      img {
        opacity: 1;
        animation: ${vr} 0.5s ease-in-out;
      }
    `,
    mermaid: N(
      'ant-mermaid-mermaid',
      e`
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `,
    ),
    noBackground: e`
      img {
        background: transparent !important;
      }
    `,
    noPadding: e`
      padding: 0;
    `,
    padding: e`
      padding: 16px;
    `,
    root: e`
      direction: ltr;
      margin: 0;
      padding: 0;
      text-align: start;
    `,
    unmermaid: e`
      color: ${t.colorTextDescription};
    `,
  })),
  xe = se(_.root, {
    defaultVariants: { animated: !1, mermaid: !0, showBackground: !1, variant: 'borderless' },
    variants: {
      mermaid: { false: _.unmermaid, true: _.mermaid },
      showBackground: { false: _.noBackground, true: null },
      animated: { true: _.animated, false: null },
      variant: { filled: _.padding, outlined: _.padding, borderless: _.noPadding },
    },
  }),
  et = h.memo(
    ({
      animated: e,
      children: t,
      className: r,
      fallbackClassName: n,
      ref: o,
      style: a,
      theme: i,
      variant: l = 'borderless',
    }) => {
      const c = i === 'lobe-theme' || !i,
        d = !c && l === 'filled',
        s = c ? void 0 : i,
        u = N(xe({ animated: e, mermaid: !0, showBackground: d, variant: l }), r),
        f = N(xe({ animated: e, mermaid: !1, showBackground: d, variant: l }), n);
      return e
        ? p.jsx(wr, {
            className: u,
            fallbackClassName: f,
            ref: o,
            style: a,
            theme: s,
            variant: l,
            children: t,
          })
        : p.jsx(br, {
            className: u,
            fallbackClassName: f,
            ref: o,
            style: a,
            theme: s,
            variant: l,
            children: t,
          });
    },
    (e, t) => e.children === t.children && e.animated === t.animated,
  );
et.displayName = 'SyntaxMermaid';
var kr = et;
const Mr = h.memo(
    ({ fileName: e, language: t, showLanguage: r }) =>
      r
        ? p.jsxs(T, {
            horizontal: !0,
            align: 'center',
            className: 'languageTitle',
            flex: 1,
            gap: 4,
            justify: 'flex-start',
            paddingInline: 8,
            children: [
              p.jsx(Tt, {
                fallbackUnknownType: !1,
                filename: e || t,
                size: 18,
                type: 'file',
                variant: 'raw',
              }),
              p.jsx(Dt, { ellipsis: !0, fontSize: 13, children: e || 'Mermaid' }),
            ],
          })
        : null,
    (e, t) =>
      e.fileName === t.fileName && e.language === t.language && e.showLanguage === t.showLanguage,
  ),
  Nr = h.memo(
    ({
      showLanguage: e,
      styles: t,
      classNames: r,
      content: n,
      children: o,
      className: a,
      copyable: i,
      actionsRender: l,
      style: c,
      variant: d,
      shadow: s,
      language: u = 'mermaid',
      fileName: f,
      defaultExpand: m = !0,
      ...g
    }) => {
      const [b, x] = h.useState(m),
        v = h.useRef(n);
      h.useEffect(() => {
        v.current = n;
      }, [n]);
      const y = h.useCallback(() => v.current, []),
        w = h.useMemo(() => (i ? p.jsx(Pe, { content: y, size: 'small' }) : null), [i, y]),
        D = h.useMemo(
          () =>
            l ? l({ actionIconSize: 'small', content: n, getContent: y, originalNode: w }) : w,
          [l, n, y, w],
        ),
        j = h.useCallback(() => {
          x((E) => !E);
        }, []);
      return p.jsxs(T, {
        'className': N(Be({ shadow: s, variant: d }), a),
        'data-code-type': 'mermaid',
        'style': c,
        ...g,
        'children': [
          p.jsxs(T, {
            horizontal: !0,
            align: 'center',
            className: N(Ct({ variant: d }), r?.header),
            justify: 'space-between',
            style: t?.header,
            onClick: j,
            children: [
              p.jsx(Mr, { fileName: f, language: u, showLanguage: e }),
              p.jsxs(T, {
                horizontal: !0,
                align: 'center',
                flex: 'none',
                gap: 4,
                onClick: jt,
                children: [
                  p.jsx(T, {
                    horizontal: !0,
                    align: 'center',
                    className: 'panel-actions',
                    flex: 'none',
                    gap: 4,
                    children: D,
                  }),
                  p.jsx(z, { icon: b ? Ft : Qt, size: 'small', onClick: j }),
                ],
              }),
            ],
          }),
          p.jsx(T, { className: N(It({ expand: b }), r?.body), style: t?.body, children: o }),
        ],
      });
    },
  );
var jr = Nr;
const tt = h.memo(
  ({
    actionIconSize: e,
    animated: t,
    bodyRender: r,
    children: n,
    classNames: o,
    className: a,
    copyable: i = !0,
    defaultExpand: l = !0,
    fileName: c,
    fullFeatured: d,
    language: s = 'mermaid',
    actionsRender: u,
    shadow: f,
    showLanguage: m = !0,
    style: g,
    styles: b,
    theme: x,
    variant: v = 'filled',
    ...y
  }) => {
    const w = n.trim(),
      D = h.useRef(w);
    h.useEffect(() => {
      D.current = w;
    }, [w]);
    const j = h.useCallback(() => D.current, []),
      E = h.useMemo(
        () => (i ? p.jsx(Pe, { content: j, size: e || { blockSize: 28, size: 16 } }) : null),
        [e, i, j],
      ),
      I = h.useMemo(
        () => (u ? u({ actionIconSize: e, content: w, getContent: j, originalNode: E }) : E),
        [e, u, j, E, w],
      ),
      S = h.useMemo(
        () =>
          p.jsx(kr, {
            animated: t,
            className: o?.content,
            style: b?.content,
            theme: x,
            variant: v,
            children: w,
          }),
        [t, x, w, v, o?.content, b?.content],
      ),
      R = h.useMemo(() => (r ? r({ content: w, originalNode: S }) : S), [r, S, w]);
    return d
      ? p.jsx(jr, {
          actionsRender: u,
          className: a,
          classNames: o,
          content: w,
          copyable: i,
          defaultExpand: l,
          fileName: c,
          language: s,
          shadow: f,
          showLanguage: m,
          style: g,
          styles: b,
          variant: v,
          ...y,
          children: R,
        })
      : p.jsxs('div', {
          'className': N(Be({ shadow: f, variant: v }), a),
          'data-code-type': 'mermaid',
          'style': g,
          ...y,
          'children': [
            p.jsx(T, {
              horizontal: !0,
              align: 'center',
              className: he.actions,
              flex: 'none',
              gap: 4,
              children: I,
            }),
            m && p.jsx(Et, { className: he.lang, children: s.toLowerCase() }),
            R,
          ],
        });
  },
);
tt.displayName = 'Mermaid';
var Cr = tt;
const we = 'lobe-video-mask',
  Q = G(({ css: e, cssVar: t }) => {
    const r = e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity 0.2s ease;
  `;
    return {
      borderless: O.variantBorderlessWithoutHover,
      filled: N(O.variantOutlinedWithoutHover, O.variantFilledWithoutHover),
      mask: N(we, r),
      outlined: O.variantOutlinedWithoutHover,
      root: e`
      position: relative;

      overflow: hidden;

      width: 100%;
      min-width: var(--video-min-width, unset);
      max-width: var(--video-max-width, 100%);
      height: auto;
      min-height: var(--video-min-height, unset);
      max-height: var(--video-max-height, 100%);
      margin-block: 0 1em;
      border-radius: ${t.borderRadius};

      background: ${t.colorFillTertiary};

      &:hover {
        [class*='${we}'] {
          opacity: 1;
        }
      }
    `,
      video: e`
      cursor: pointer;
      width: 100%;
    `,
    };
  }),
  Ir = se(Q.root, {
    defaultVariants: { variant: 'filled' },
    variants: { variant: { filled: Q.filled, outlined: Q.outlined, borderless: Q.borderless } },
  }),
  rt = h.memo(
    ({
      ref: e,
      preload: t = 'auto',
      src: r,
      style: n,
      classNames: o,
      className: a,
      maxHeight: i = '100%',
      maxWidth: l = '100%',
      minHeight: c,
      minWidth: d,
      onEnded: s,
      onPause: u,
      onPlay: f,
      onPlaying: m,
      width: g,
      height: b,
      onMouseEnter: x,
      styles: v,
      onMouseLeave: y,
      preview: w = !0,
      isLoading: D,
      variant: j = 'filled',
      autoPlay: E,
      ...I
    }) => {
      const [S, R] = h.useState(!1),
        [q, H] = h.useState(!1),
        oe = h.useMemo(() => {
          const C = {};
          return (
            i !== void 0 && (C['--video-max-height'] = typeof i == 'number' ? `${i}px` : i),
            l !== void 0 && (C['--video-max-width'] = typeof l == 'number' ? `${l}px` : l),
            c !== void 0 && (C['--video-min-height'] = typeof c == 'number' ? `${c}px` : c),
            d !== void 0 && (C['--video-min-width'] = typeof d == 'number' ? `${d}px` : d),
            C
          );
        }, [i, l, c, d]);
      return D
        ? p.jsx(ze.Avatar, {
            active: !0,
            style: {
              borderRadius: Oe.borderRadiusLG,
              height: b,
              maxHeight: i,
              maxWidth: l,
              minHeight: c,
              minWidth: d,
              width: g,
            },
          })
        : p.jsxs(T, {
            className: N(Ir({ variant: j }), a, o?.wrapper),
            height: b,
            ref: e,
            width: g,
            style: { ...oe, ...n, ...v?.wrapper },
            children: [
              w &&
                !S &&
                p.jsx(T, {
                  align: 'center',
                  className: N(Q.mask, o?.mask),
                  justify: 'center',
                  style: v?.mask,
                  children: p.jsx(z, { color: '#fff', icon: Gt, variant: 'filled' }),
                }),
              p.jsx('video', {
                autoPlay: E,
                className: N(Q.video, o?.video),
                controls: q,
                height: b,
                preload: t,
                width: g,
                style: { height: 'auto', maxWidth: '100%', ...v?.video },
                onEnded: (C) => {
                  (R(!1), s?.(C));
                },
                onMouseEnter: (C) => {
                  (H(!0), x?.(C));
                },
                onMouseLeave: (C) => {
                  (H(!1), y?.(C));
                },
                onPause: (C) => {
                  (R(!1), u?.(C));
                },
                onPlay: (C) => {
                  (R(!0), f?.(C));
                },
                onPlaying: (C) => {
                  (R(!0), m?.(C));
                },
                ...I,
                children: p.jsx('source', { src: r }),
              }),
            ],
          });
    },
  );
rt.displayName = 'Video';
var Tr = rt;
const Dr = '.ignore-markdown-style',
  Er = G(({ cssVar: e, css: t }) => {
    const r = t`
    --lobe-markdown-font-size: 16px;
    --lobe-markdown-header-multiple: 1;
    --lobe-markdown-margin-multiple: 2;
    --lobe-markdown-line-height: 1.8;
    --lobe-markdown-border-radius: ${e.borderRadiusLG};
    --lobe-markdown-border-color: ${e.colorFillQuaternary};

    position: relative;

    width: 100%;
    max-width: 100%;
    padding-inline: 1px;

    font-size: var(--lobe-markdown-font-size);
    line-height: var(--lobe-markdown-line-height);
    word-break: break-word;
  `,
      n = t`
    a {
      color: ${e.colorInfoText};

      &:hover {
        color: ${e.colorInfoHover};
      }
    }
  `,
      o = t`
    blockquote {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline: 0;
      padding-block: 0;
      padding-inline: 1em;
      border-inline-start: solid 4px ${e.colorBorder};

      color: ${e.colorTextSecondary};
    }
  `,
      a = t`
    code {
      &:not(:has(span)) {
        display: inline;

        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;
        border: 1px solid var(--lobe-markdown-border-color);
        border-radius: 0.25em;

        font-family: ${e.fontFamilyCode};
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;
        white-space: break-spaces;

        background: ${e.colorFillSecondary};
      }
    }
  `,
      i = t`
    del {
      color: ${e.colorTextDescription};
      text-decoration: line-through;
    }
  `,
      l = t`
    details {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      background: ${e.colorFillTertiary};
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);

      summary {
        cursor: pointer;
        display: flex;
        align-items: center;
        list-style: none;

        &::before {
          content: '';

          position: absolute;
          inset-inline-end: 1.25em;
          transform: rotateZ(-45deg);

          display: block;

          width: 0.4em;
          height: 0.4em;
          border-block-end: 1.5px solid ${e.colorTextSecondary};
          border-inline-end: 1.5px solid ${e.colorTextSecondary};

          font-family: ${e.fontFamily};

          transition: transform 200ms ${e.motionEaseOut};
        }
      }

      &[open] {
        summary {
          padding-block-end: 0.75em;
          border-block-end: 1px dashed ${e.colorBorder};

          &::before {
            transform: rotateZ(45deg);
          }
        }
      }
    }
  `,
      c = t`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: max(
        calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.4em),
        var(--lobe-markdown-font-size)
      );
      font-weight: bold;
      line-height: 1.25;
    }

    h1 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h2 {
      font-size: calc(var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple)));
    }

    h3 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h4 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
      );
    }

    h5,
    h6 {
      font-size: calc(var(--lobe-markdown-font-size) * 1);
    }
  `,
      d = t`
    hr {
      width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);
      border-color: ${e.colorBorder};
      border-style: dashed;
      border-width: 1px;
      border-block-start: none;
      border-inline-start: none;
      border-inline-end: none;
    }
  `,
      s = t`
    img {
      max-width: 100%;
    }

    > img,
    > p > img {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }
  `,
      u = t`
    li {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.33em);

      p:first-child {
        display: inline;
      }
    }

    ul,
    ol {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline-start: 1em;
      padding-inline-start: 0;
      list-style-position: outside;

      > ul,
      > ol {
        margin-block: 0;
      }

      > li {
        margin-inline-start: 1em;
      }
    }

    ol {
      list-style: auto;
    }

    ul {
      list-style-type: none;

      > li {
        &::before {
          content: '-';

          position: absolute;

          display: inline-block;

          margin-inline: -1em 0.5em;

          opacity: 0.5;
        }
      }
    }

    .task-list-item {
      &::before {
        display: none !important;
      }

      input[type='checkbox'] {
        margin-block: 0 0.25em;
        margin-inline: -1.6em 0.2em;
        vertical-align: middle;
      }

      input[type='checkbox']:dir(rtl) {
        margin: 0 -1.6em 0.25em 0.2em;
      }
    }
  `,
      f = t`
    p {
      margin-block: 4px;
      line-height: var(--lobe-markdown-line-height);
      letter-spacing: 0.02em;

      &:not(:first-child) {
        margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      &:not(:last-child) {
        margin-block-end: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }
    }
  `,
      m = t`
    pre {
      font-size: calc(var(--lobe-markdown-font-size) * 0.85);
    }
  `,
      g = t`
    strong {
      font-weight: 600;
    }
  `,
      b = t`
    svg {
      line-height: 1;
    }
  `,
      x = t`
    table {
      unicode-bidi: isolate;
      overflow: auto hidden;
      display: block;
      border-spacing: 0;
      border-collapse: collapse;

      box-sizing: border-box;
      width: max-content;
      max-width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      text-align: start;
      text-indent: initial;
      text-wrap: pretty;
      word-break: auto-phrase;
      overflow-wrap: break-word;

      background: ${e.colorFillQuaternary};
      box-shadow: 0 0 0 1px ${e.colorBorderSecondary};

      code {
        word-break: break-word;
      }

      thead {
        background: ${e.colorFillQuaternary};
      }

      tr {
        box-shadow: 0 1px 0 ${e.colorBorderSecondary};
      }

      th,
      td {
        min-width: 120px;
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
      }
    }
  `,
      v = t`
    > video,
    > p > video {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }

    video {
      max-width: 100%;
    }
  `,
      y = t`
    .footnotes {
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 1em);
      font-size: smaller;
      color: #8b949e;

      #footnote-label {
        display: none;
      }

      > ol {
        margin: 0 !important;
      }
    }
  `,
      w = t`
    sup {
      position: relative;
      inset-block-start: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `;
    return {
      root: t`
      :not(:has(${Dr})),
      .markdown {
        ${[
          r,
          n,
          o,
          a,
          i,
          l,
          c,
          d,
          s,
          u,
          f,
          m,
          g,
          b,
          x,
          v,
          y,
          t`
    sub {
      position: relative;
      inset-block-end: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `,
          w,
        ]}
      }
    `,
    };
  }),
  nt = h.memo(
    ({
      ref: e,
      children: t,
      className: r,
      fontSize: n = 16,
      headerMultiple: o = 1,
      marginMultiple: a = 2,
      lineHeight: i = 1.8,
      borderRadius: l = 8,
      style: c,
      ...d
    }) =>
      p.jsx('article', {
        className: N(Er.root, r),
        ref: e,
        style: {
          '--lobe-markdown-border-radius': l,
          '--lobe-markdown-font-size': `${n}px`,
          '--lobe-markdown-header-multiple': o,
          '--lobe-markdown-line-height': i,
          '--lobe-markdown-margin-multiple': a,
          ...c,
        },
        ...d,
        children: t,
      }),
  );
nt.displayName = 'Typography';
var Qn = nt;
const ue = G(({ css: e }) => ({
    container: e`
    overflow: hidden;
    margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
    border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    box-shadow: 0 0 0 1px var(--lobe-markdown-border-color) inset;
  `,
  })),
  ot = ({
    fullFeatured: e,
    fileName: t,
    allowChangeLanguage: r,
    language: n = Ue,
    children: o,
    className: a,
    style: i,
    variant: l = 'filled',
    icon: c,
    theme: d,
    ...s
  }) =>
    p.jsx(St, {
      allowChangeLanguage: r,
      className: N(ue.container, a),
      fileName: t,
      fullFeatured: e,
      icon: c,
      language: n,
      style: i,
      theme: d,
      variant: l,
      ...s,
      children: o,
    }),
  Gn = ({ language: e = Ue, children: t, className: r, style: n, variant: o = 'filled', ...a }) =>
    p.jsx(Zt, {
      'className': N(ue.container, r),
      'data-code-type': 'highlighter',
      'language': e,
      'style': n,
      'variant': o,
      ...a,
      'children': t,
    }),
  Yn = ({
    animated: e,
    fullFeatured: t,
    children: r,
    className: n,
    style: o,
    variant: a = 'filled',
    theme: i,
    ...l
  }) =>
    p.jsx(Cr, {
      animated: e,
      className: N(ue.container, n),
      fullFeatured: t,
      style: o,
      theme: i,
      variant: a,
      ...l,
      children: r,
    });
ot.displayName = 'MdxPre';
var Hn = ot;
const it = ({ style: e, alt: t = 'img', ...r }) =>
  p.jsx(de, {
    alt: t,
    style: {
      borderRadius: 'calc(var(--lobe-markdown-border-radius) * 1px)',
      marginBlock: 'calc(var(--lobe-markdown-margin-multiple) * 1em)',
      ...e,
    },
    ...r,
  });
it.displayName = 'MdxImage';
var Zn = it;
const Sr = (e) => {
    if (typeof e != 'string') return;
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
    return t;
  },
  J = G(({ css: e, cssVar: t }) => ({
    container: e`
    display: inline-flex;
    line-height: var(--lobe-markdown-line-height);
    vertical-align: baseline;

    a {
      color: inherit;
    }
  `,
    link: e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    :hover {
      color: ${t.colorText};
    }
  `,
    supContainer: e`
    vertical-align: super;
  `,
    url: e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    max-width: 400px;

    text-overflow: ellipsis;
  `,
  })),
  at = ({ children: e, usePopover: t, title: r, alt: n, url: o }) => {
    const [a, i, l] = h.useMemo(() => {
      try {
        const c = new URL(o),
          d = c.host;
        let s = r;
        r === o && (s = '');
        let u = c.hostname.replace('www.', '');
        return (s || (u = o), [s, u, d]);
      } catch {
        return [r, o, o];
      }
    }, [o, r]);
    return t && o
      ? p.jsx(Xt, {
          arrow: !1,
          trigger: 'hover',
          content: p.jsxs(T, {
            gap: 8,
            children: [
              p.jsxs(T, {
                horizontal: !0,
                className: J.link,
                gap: 12,
                justify: 'space-between',
                onClick: () => {
                  window.open(o, '_blank');
                },
                children: [
                  p.jsxs(T, {
                    horizontal: !0,
                    align: 'center',
                    gap: 4,
                    children: [
                      p.jsx('img', {
                        alt: n || r || o,
                        height: 14,
                        src: `https://icons.duckduckgo.com/ip3/${l}.ico`,
                        style: { borderRadius: 4 },
                        width: 14,
                      }),
                      p.jsx('span', { className: J.url, children: i }),
                    ],
                  }),
                  p.jsx(ce, { icon: Yt }),
                ],
              }),
              a,
            ],
          }),
          children: e,
        })
      : e;
  };
at.displayName = 'MdxPopoverPanel';
var ve = at;
const lt = ({ children: e, href: t, inSup: r, id: n, citationDetail: o }) => {
  const a = !Ht(o),
    i = o?.url || t;
  return r
    ? p.jsx(ve, {
        ...o,
        usePopover: a,
        children: p.jsx('span', {
          className: J.container,
          children: p.jsx('a', {
            'aria-describedby': 'footnote-label',
            'data-footnote-ref': 'true',
            'href': i,
            'id': n,
            'rel': 'noreferrer',
            'target': o?.url ? '_blank' : void 0,
            'children': e,
          }),
        }),
      })
    : p.jsx(ve, {
        ...o,
        usePopover: a,
        children: p.jsx('sup', {
          className: N(J.container, J.supContainer),
          children: i
            ? p.jsx('a', {
                'aria-describedby': 'footnote-label',
                'data-footnote-ref': !0,
                'href': i,
                'rel': 'noreferrer',
                'target': '_blank',
                'children': e,
              })
            : p.jsx('span', {
                'aria-describedby': 'footnote-label',
                'data-footnote-ref': !0,
                'children': e,
              }),
        }),
      });
};
lt.displayName = 'MdxCitation';
var ke = lt;
const st = ({ href: e, target: t, citations: r, ...n }) => {
  if (n['data-footnote-ref'])
    return p.jsx(ke, {
      inSup: !0,
      citationDetail: Sr(n['data-link']),
      href: e,
      id: n.id,
      children: n.children,
    });
  const o = e?.match(/citation-(\d+)/);
  if (o) {
    const i = Number.parseInt(o[1]) - 1,
      l = r?.[i];
    return p.jsx(ke, { citationDetail: l, id: o[1], children: o[1] });
  }
  const a = e?.startsWith('http');
  return p.jsx(Jt, { href: e, target: t || a ? '_blank' : void 0, ...n });
};
st.displayName = 'MdxLink';
var Wn = st;
const ct = ({ style: e, ...t }) =>
  p.jsx(Tr, {
    preview: !1,
    style: {
      borderRadius: 'calc(var(--lobe-markdown-border-radius) * 1px)',
      marginBlock: 'calc(var(--lobe-markdown-margin-multiple) * 1em)',
      ...e,
    },
    ...t,
  });
ct.displayName = 'MdxVdieo';
var $n = ct;
const dt = -1,
  ne = 0,
  X = 1,
  te = 2,
  pe = 3,
  fe = 4,
  me = 5,
  ge = 6,
  ut = 7,
  pt = 8,
  Me = typeof self == 'object' ? self : globalThis,
  Lr = (e, t) => {
    const r = (o, a) => (e.set(a, o), o),
      n = (o) => {
        if (e.has(o)) return e.get(o);
        const [a, i] = t[o];
        switch (a) {
          case ne:
          case dt:
            return r(i, o);
          case X: {
            const l = r([], o);
            for (const c of i) l.push(n(c));
            return l;
          }
          case te: {
            const l = r({}, o);
            for (const [c, d] of i) l[n(c)] = n(d);
            return l;
          }
          case pe:
            return r(new Date(i), o);
          case fe: {
            const { source: l, flags: c } = i;
            return r(new RegExp(l, c), o);
          }
          case me: {
            const l = r(new Map(), o);
            for (const [c, d] of i) l.set(n(c), n(d));
            return l;
          }
          case ge: {
            const l = r(new Set(), o);
            for (const c of i) l.add(n(c));
            return l;
          }
          case ut: {
            const { name: l, message: c } = i;
            return r(new Me[l](c), o);
          }
          case pt:
            return r(BigInt(i), o);
          case 'BigInt':
            return r(Object(BigInt(i)), o);
          case 'ArrayBuffer':
            return r(new Uint8Array(i).buffer, i);
          case 'DataView': {
            const { buffer: l } = new Uint8Array(i);
            return r(new DataView(l), i);
          }
        }
        return r(new Me[a](i), o);
      };
    return n;
  },
  Ne = (e) => Lr(new Map(), e)(0),
  U = '',
  { toString: Ar } = {},
  { keys: Rr } = Object,
  Z = (e) => {
    const t = typeof e;
    if (t !== 'object' || !e) return [ne, t];
    const r = Ar.call(e).slice(8, -1);
    switch (r) {
      case 'Array':
        return [X, U];
      case 'Object':
        return [te, U];
      case 'Date':
        return [pe, U];
      case 'RegExp':
        return [fe, U];
      case 'Map':
        return [me, U];
      case 'Set':
        return [ge, U];
      case 'DataView':
        return [X, r];
    }
    return r.includes('Array') ? [X, r] : r.includes('Error') ? [ut, r] : [te, r];
  },
  K = ([e, t]) => e === ne && (t === 'function' || t === 'symbol'),
  zr = (e, t, r, n) => {
    const o = (i, l) => {
        const c = n.push(i) - 1;
        return (r.set(l, c), c);
      },
      a = (i) => {
        if (r.has(i)) return r.get(i);
        let [l, c] = Z(i);
        switch (l) {
          case ne: {
            let s = i;
            switch (c) {
              case 'bigint':
                ((l = pt), (s = i.toString()));
                break;
              case 'function':
              case 'symbol':
                if (e) throw new TypeError('unable to serialize ' + c);
                s = null;
                break;
              case 'undefined':
                return o([dt], i);
            }
            return o([l, s], i);
          }
          case X: {
            if (c) {
              let f = i;
              return (
                c === 'DataView'
                  ? (f = new Uint8Array(i.buffer))
                  : c === 'ArrayBuffer' && (f = new Uint8Array(i)),
                o([c, [...f]], i)
              );
            }
            const s = [],
              u = o([l, s], i);
            for (const f of i) s.push(a(f));
            return u;
          }
          case te: {
            if (c)
              switch (c) {
                case 'BigInt':
                  return o([c, i.toString()], i);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return o([c, i.valueOf()], i);
              }
            if (t && 'toJSON' in i) return a(i.toJSON());
            const s = [],
              u = o([l, s], i);
            for (const f of Rr(i)) (e || !K(Z(i[f]))) && s.push([a(f), a(i[f])]);
            return u;
          }
          case pe:
            return o([l, i.toISOString()], i);
          case fe: {
            const { source: s, flags: u } = i;
            return o([l, { source: s, flags: u }], i);
          }
          case me: {
            const s = [],
              u = o([l, s], i);
            for (const [f, m] of i) (e || !(K(Z(f)) || K(Z(m)))) && s.push([a(f), a(m)]);
            return u;
          }
          case ge: {
            const s = [],
              u = o([l, s], i);
            for (const f of i) (e || !K(Z(f))) && s.push(a(f));
            return u;
          }
        }
        const { message: d } = i;
        return o([l, { name: c, message: d }], i);
      };
    return a;
  },
  je = (e, { json: t, lossy: r } = {}) => {
    const n = [];
    return (zr(!(t || r), !!t, new Map(), n)(e), n);
  },
  re =
    typeof structuredClone == 'function'
      ? (e, t) => (t && ('json' in t || 'lossy' in t) ? Ne(je(e, t)) : structuredClone(e))
      : (e, t) => Ne(je(e, t)),
  ft = gt('end'),
  mt = gt('start');
function gt(e) {
  return t;
  function t(r) {
    const n = (r && r.position && r.position[e]) || {};
    if (typeof n.line == 'number' && n.line > 0 && typeof n.column == 'number' && n.column > 0)
      return {
        line: n.line,
        column: n.column,
        offset: typeof n.offset == 'number' && n.offset > -1 ? n.offset : void 0,
      };
  }
}
function Or(e) {
  const t = mt(e),
    r = ft(e);
  if (t && r) return { start: t, end: r };
}
function Y(e) {
  const t = [];
  let r = -1,
    n = 0,
    o = 0;
  for (; ++r < e.length; ) {
    const a = e.charCodeAt(r);
    let i = '';
    if (a === 37 && ye(e.charCodeAt(r + 1)) && ye(e.charCodeAt(r + 2))) o = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (i = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const l = e.charCodeAt(r + 1);
      a < 56320 && l > 56319 && l < 57344 ? ((i = String.fromCharCode(a, l)), (o = 1)) : (i = '�');
    } else i = String.fromCharCode(a);
    (i && (t.push(e.slice(n, r), encodeURIComponent(i)), (n = r + o + 1), (i = '')),
      o && ((r += o), (o = 0)));
  }
  return t.join('') + e.slice(n);
}
const _r = /[$_\p{ID_Start}]/u,
  Pr = /[$_\u{200C}\u{200D}\p{ID_Continue}]/u,
  Br = /[-$_\u{200C}\u{200D}\p{ID_Continue}]/u,
  Ur = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Fr = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  ht = {};
function Jn(e) {
  return e ? _r.test(String.fromCodePoint(e)) : !1;
}
function Xn(e, t) {
  const n = (t || ht).jsx ? Br : Pr;
  return e ? n.test(String.fromCodePoint(e)) : !1;
}
function qn(e, t) {
  return ((t || ht).jsx ? Fr : Ur).test(e);
}
var F = {},
  ae,
  Ce;
function Qr() {
  if (Ce) return ae;
  Ce = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t = /\n/g,
    r = /^\s*/,
    n = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    o = /^:\s*/,
    a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    i = /^[;\s]*/,
    l = /^\s+|\s+$/g,
    c = `
`,
    d = '/',
    s = '*',
    u = '',
    f = 'comment',
    m = 'declaration';
  function g(x, v) {
    if (typeof x != 'string') throw new TypeError('First argument must be a string');
    if (!x) return [];
    v = v || {};
    var y = 1,
      w = 1;
    function D(M) {
      var k = M.match(t);
      k && (y += k.length);
      var A = M.lastIndexOf(c);
      w = ~A ? M.length - A : w + M.length;
    }
    function j() {
      var M = { line: y, column: w };
      return function (k) {
        return ((k.position = new E(M)), R(), k);
      };
    }
    function E(M) {
      ((this.start = M), (this.end = { line: y, column: w }), (this.source = v.source));
    }
    E.prototype.content = x;
    function I(M) {
      var k = new Error(v.source + ':' + y + ':' + w + ': ' + M);
      if (
        ((k.reason = M),
        (k.filename = v.source),
        (k.line = y),
        (k.column = w),
        (k.source = x),
        !v.silent)
      )
        throw k;
    }
    function S(M) {
      var k = M.exec(x);
      if (k) {
        var A = k[0];
        return (D(A), (x = x.slice(A.length)), k);
      }
    }
    function R() {
      S(r);
    }
    function q(M) {
      var k;
      for (M = M || []; (k = H()); ) k !== !1 && M.push(k);
      return M;
    }
    function H() {
      var M = j();
      if (!(d != x.charAt(0) || s != x.charAt(1))) {
        for (var k = 2; u != x.charAt(k) && (s != x.charAt(k) || d != x.charAt(k + 1)); ) ++k;
        if (((k += 2), u === x.charAt(k - 1))) return I('End of comment missing');
        var A = x.slice(2, k - 2);
        return ((w += 2), D(A), (x = x.slice(k)), (w += 2), M({ type: f, comment: A }));
      }
    }
    function oe() {
      var M = j(),
        k = S(n);
      if (k) {
        if ((H(), !S(o))) return I("property missing ':'");
        var A = S(a),
          xt = M({
            type: m,
            property: b(k[0].replace(e, u)),
            value: A ? b(A[0].replace(e, u)) : u,
          });
        return (S(i), xt);
      }
    }
    function C() {
      var M = [];
      q(M);
      for (var k; (k = oe()); ) k !== !1 && (M.push(k), q(M));
      return M;
    }
    return (R(), C());
  }
  function b(x) {
    return x ? x.replace(l, u) : u;
  }
  return ((ae = g), ae);
}
var Ie;
function Gr() {
  if (Ie) return F;
  Ie = 1;
  var e =
    (F && F.__importDefault) ||
    function (n) {
      return n && n.__esModule ? n : { default: n };
    };
  (Object.defineProperty(F, '__esModule', { value: !0 }), (F.default = r));
  const t = e(Qr());
  function r(n, o) {
    let a = null;
    if (!n || typeof n != 'string') return a;
    const i = (0, t.default)(n),
      l = typeof o == 'function';
    return (
      i.forEach((c) => {
        if (c.type !== 'declaration') return;
        const { property: d, value: s } = c;
        l ? o(d, s, c) : s && ((a = a || {}), (a[d] = s));
      }),
      a
    );
  }
  return F;
}
var W = {},
  Te;
function Yr() {
  if (Te) return W;
  ((Te = 1), Object.defineProperty(W, '__esModule', { value: !0 }), (W.camelCase = void 0));
  var e = /^--[a-zA-Z0-9_-]+$/,
    t = /-([a-z])/g,
    r = /^[^-]+$/,
    n = /^-(webkit|moz|ms|o|khtml)-/,
    o = /^-(ms)-/,
    a = function (d) {
      return !d || r.test(d) || e.test(d);
    },
    i = function (d, s) {
      return s.toUpperCase();
    },
    l = function (d, s) {
      return ''.concat(s, '-');
    },
    c = function (d, s) {
      return (
        s === void 0 && (s = {}),
        a(d)
          ? d
          : ((d = d.toLowerCase()),
            s.reactCompat ? (d = d.replace(o, l)) : (d = d.replace(n, l)),
            d.replace(t, i))
      );
    };
  return ((W.camelCase = c), W);
}
var $, De;
function Hr() {
  if (De) return $;
  De = 1;
  var e =
      ($ && $.__importDefault) ||
      function (o) {
        return o && o.__esModule ? o : { default: o };
      },
    t = e(Gr()),
    r = Yr();
  function n(o, a) {
    var i = {};
    return (
      !o ||
        typeof o != 'string' ||
        (0, t.default)(o, function (l, c) {
          l && c && (i[(0, r.camelCase)(l, a)] = c);
        }),
      i
    );
  }
  return ((n.default = n), ($ = n), $);
}
var Zr = Hr();
const Vn = Lt(Zr);
function Wr(e, t) {
  const r = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, r), e.applyData(t, r));
}
function $r(e, t) {
  const r = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    e.patch(t, r),
    [
      e.applyData(t, r),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function Jr(e, t) {
  const r = t.value
      ? t.value +
        `
`
      : '',
    n = {},
    o = t.lang ? t.lang.split(/\s+/) : [];
  o.length > 0 && (n.className = ['language-' + o[0]]);
  let a = {
    type: 'element',
    tagName: 'code',
    properties: n,
    children: [{ type: 'text', value: r }],
  };
  return (
    t.meta && (a.data = { meta: t.meta }),
    e.patch(t, a),
    (a = e.applyData(t, a)),
    (a = { type: 'element', tagName: 'pre', properties: {}, children: [a] }),
    e.patch(t, a),
    a
  );
}
function Xr(e, t) {
  const r = { type: 'element', tagName: 'del', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function qr(e, t) {
  const r = { type: 'element', tagName: 'em', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function Vr(e, t) {
  const r = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    n = String(t.identifier).toUpperCase(),
    o = Y(n.toLowerCase()),
    a = e.footnoteOrder.indexOf(n);
  let i,
    l = e.footnoteCounts.get(n);
  (l === void 0 ? ((l = 0), e.footnoteOrder.push(n), (i = e.footnoteOrder.length)) : (i = a + 1),
    (l += 1),
    e.footnoteCounts.set(n, l));
  const c = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + r + 'fn-' + o,
      id: r + 'fnref-' + o + (l > 1 ? '-' + l : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(i) }],
  };
  e.patch(t, c);
  const d = { type: 'element', tagName: 'sup', properties: {}, children: [c] };
  return (e.patch(t, d), e.applyData(t, d));
}
function Kr(e, t) {
  const r = { type: 'element', tagName: 'h' + t.depth, properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function en(e, t) {
  if (e.options.allowDangerousHtml) {
    const r = { type: 'raw', value: t.value };
    return (e.patch(t, r), e.applyData(t, r));
  }
}
function yt(e, t) {
  const r = t.referenceType;
  let n = ']';
  if (
    (r === 'collapsed' ? (n += '[]') : r === 'full' && (n += '[' + (t.label || t.identifier) + ']'),
    t.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + t.alt + n }];
  const o = e.all(t),
    a = o[0];
  a && a.type === 'text' ? (a.value = '[' + a.value) : o.unshift({ type: 'text', value: '[' });
  const i = o[o.length - 1];
  return (i && i.type === 'text' ? (i.value += n) : o.push({ type: 'text', value: n }), o);
}
function tn(e, t) {
  const r = String(t.identifier).toUpperCase(),
    n = e.definitionById.get(r);
  if (!n) return yt(e, t);
  const o = { src: Y(n.url || ''), alt: t.alt };
  n.title !== null && n.title !== void 0 && (o.title = n.title);
  const a = { type: 'element', tagName: 'img', properties: o, children: [] };
  return (e.patch(t, a), e.applyData(t, a));
}
function rn(e, t) {
  const r = { src: Y(t.url) };
  (t.alt !== null && t.alt !== void 0 && (r.alt = t.alt),
    t.title !== null && t.title !== void 0 && (r.title = t.title));
  const n = { type: 'element', tagName: 'img', properties: r, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
function nn(e, t) {
  const r = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
  e.patch(t, r);
  const n = { type: 'element', tagName: 'code', properties: {}, children: [r] };
  return (e.patch(t, n), e.applyData(t, n));
}
function on(e, t) {
  const r = String(t.identifier).toUpperCase(),
    n = e.definitionById.get(r);
  if (!n) return yt(e, t);
  const o = { href: Y(n.url || '') };
  n.title !== null && n.title !== void 0 && (o.title = n.title);
  const a = { type: 'element', tagName: 'a', properties: o, children: e.all(t) };
  return (e.patch(t, a), e.applyData(t, a));
}
function an(e, t) {
  const r = { href: Y(t.url) };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const n = { type: 'element', tagName: 'a', properties: r, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function ln(e, t, r) {
  const n = e.all(t),
    o = r ? sn(r) : bt(t),
    a = {},
    i = [];
  if (typeof t.checked == 'boolean') {
    const s = n[0];
    let u;
    (s && s.type === 'element' && s.tagName === 'p'
      ? (u = s)
      : ((u = { type: 'element', tagName: 'p', properties: {}, children: [] }), n.unshift(u)),
      u.children.length > 0 && u.children.unshift({ type: 'text', value: ' ' }),
      u.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: t.checked, disabled: !0 },
        children: [],
      }),
      (a.className = ['task-list-item']));
  }
  let l = -1;
  for (; ++l < n.length; ) {
    const s = n[l];
    ((o || l !== 0 || s.type !== 'element' || s.tagName !== 'p') &&
      i.push({
        type: 'text',
        value: `
`,
      }),
      s.type === 'element' && s.tagName === 'p' && !o ? i.push(...s.children) : i.push(s));
  }
  const c = n[n.length - 1];
  c &&
    (o || c.type !== 'element' || c.tagName !== 'p') &&
    i.push({
      type: 'text',
      value: `
`,
    });
  const d = { type: 'element', tagName: 'li', properties: a, children: i };
  return (e.patch(t, d), e.applyData(t, d));
}
function sn(e) {
  let t = !1;
  if (e.type === 'list') {
    t = e.spread || !1;
    const r = e.children;
    let n = -1;
    for (; !t && ++n < r.length; ) t = bt(r[n]);
  }
  return t;
}
function bt(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function cn(e, t) {
  const r = {},
    n = e.all(t);
  let o = -1;
  for (typeof t.start == 'number' && t.start !== 1 && (r.start = t.start); ++o < n.length; ) {
    const i = n[o];
    if (
      i.type === 'element' &&
      i.tagName === 'li' &&
      i.properties &&
      Array.isArray(i.properties.className) &&
      i.properties.className.includes('task-list-item')
    ) {
      r.className = ['contains-task-list'];
      break;
    }
  }
  const a = {
    type: 'element',
    tagName: t.ordered ? 'ol' : 'ul',
    properties: r,
    children: e.wrap(n, !0),
  };
  return (e.patch(t, a), e.applyData(t, a));
}
function dn(e, t) {
  const r = { type: 'element', tagName: 'p', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function un(e, t) {
  const r = { type: 'root', children: e.wrap(e.all(t)) };
  return (e.patch(t, r), e.applyData(t, r));
}
function pn(e, t) {
  const r = { type: 'element', tagName: 'strong', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function fn(e, t) {
  const r = e.all(t),
    n = r.shift(),
    o = [];
  if (n) {
    const i = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([n], !0) };
    (e.patch(t.children[0], i), o.push(i));
  }
  if (r.length > 0) {
    const i = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(r, !0) },
      l = mt(t.children[1]),
      c = ft(t.children[t.children.length - 1]);
    (l && c && (i.position = { start: l, end: c }), o.push(i));
  }
  const a = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(o, !0) };
  return (e.patch(t, a), e.applyData(t, a));
}
function mn(e, t, r) {
  const n = r ? r.children : void 0,
    a = (n ? n.indexOf(t) : 1) === 0 ? 'th' : 'td',
    i = r && r.type === 'table' ? r.align : void 0,
    l = i ? i.length : t.children.length;
  let c = -1;
  const d = [];
  for (; ++c < l; ) {
    const u = t.children[c],
      f = {},
      m = i ? i[c] : void 0;
    m && (f.align = m);
    let g = { type: 'element', tagName: a, properties: f, children: [] };
    (u && ((g.children = e.all(u)), e.patch(u, g), (g = e.applyData(u, g))), d.push(g));
  }
  const s = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(d, !0) };
  return (e.patch(t, s), e.applyData(t, s));
}
function gn(e, t) {
  const r = { type: 'element', tagName: 'td', properties: {}, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
const Ee = 9,
  Se = 32;
function hn(e) {
  const t = String(e),
    r = /\r?\n|\r/g;
  let n = r.exec(t),
    o = 0;
  const a = [];
  for (; n; )
    (a.push(Le(t.slice(o, n.index), o > 0, !0), n[0]),
      (o = n.index + n[0].length),
      (n = r.exec(t)));
  return (a.push(Le(t.slice(o), o > 0, !1)), a.join(''));
}
function Le(e, t, r) {
  let n = 0,
    o = e.length;
  if (t) {
    let a = e.codePointAt(n);
    for (; a === Ee || a === Se; ) (n++, (a = e.codePointAt(n)));
  }
  if (r) {
    let a = e.codePointAt(o - 1);
    for (; a === Ee || a === Se; ) (o--, (a = e.codePointAt(o - 1)));
  }
  return o > n ? e.slice(n, o) : '';
}
function yn(e, t) {
  const r = { type: 'text', value: hn(String(t.value)) };
  return (e.patch(t, r), e.applyData(t, r));
}
function bn(e, t) {
  const r = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (e.patch(t, r), e.applyData(t, r));
}
const xn = {
  blockquote: Wr,
  break: $r,
  code: Jr,
  delete: Xr,
  emphasis: qr,
  footnoteReference: Vr,
  heading: Kr,
  html: en,
  imageReference: tn,
  image: rn,
  inlineCode: nn,
  linkReference: on,
  link: an,
  listItem: ln,
  list: cn,
  paragraph: dn,
  root: un,
  strong: pn,
  table: fn,
  tableCell: gn,
  tableRow: mn,
  text: yn,
  thematicBreak: bn,
  toml: ee,
  yaml: ee,
  definition: ee,
  footnoteDefinition: ee,
};
function ee() {}
function wn(e, t) {
  const r = [{ type: 'text', value: '↩' }];
  return (
    t > 1 &&
      r.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(t) }],
      }),
    r
  );
}
function vn(e, t) {
  return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
}
function kn(e) {
  const t = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    r = e.options.footnoteBackContent || wn,
    n = e.options.footnoteBackLabel || vn,
    o = e.options.footnoteLabel || 'Footnotes',
    a = e.options.footnoteLabelTagName || 'h2',
    i = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    l = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const d = e.footnoteById.get(e.footnoteOrder[c]);
    if (!d) continue;
    const s = e.all(d),
      u = String(d.identifier).toUpperCase(),
      f = Y(u.toLowerCase());
    let m = 0;
    const g = [],
      b = e.footnoteCounts.get(u);
    for (; b !== void 0 && ++m <= b; ) {
      g.length > 0 && g.push({ type: 'text', value: ' ' });
      let y = typeof r == 'string' ? r : r(c, m);
      (typeof y == 'string' && (y = { type: 'text', value: y }),
        g.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + t + 'fnref-' + f + (m > 1 ? '-' + m : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof n == 'string' ? n : n(c, m),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(y) ? y : [y],
        }));
    }
    const x = s[s.length - 1];
    if (x && x.type === 'element' && x.tagName === 'p') {
      const y = x.children[x.children.length - 1];
      (y && y.type === 'text' ? (y.value += ' ') : x.children.push({ type: 'text', value: ' ' }),
        x.children.push(...g));
    } else s.push(...g);
    const v = {
      type: 'element',
      tagName: 'li',
      properties: { id: t + 'fn-' + f },
      children: e.wrap(s, !0),
    };
    (e.patch(d, v), l.push(v));
  }
  if (l.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: a,
          properties: { ...re(i), id: 'footnote-label' },
          children: [{ type: 'text', value: o }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(l, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const le = {}.hasOwnProperty,
  Mn = {};
function Nn(e, t) {
  const r = t || Mn,
    n = new Map(),
    o = new Map(),
    a = new Map(),
    i = { ...xn, ...r.handlers },
    l = {
      all: d,
      applyData: Cn,
      definitionById: n,
      footnoteById: o,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: i,
      one: c,
      options: r,
      patch: jn,
      wrap: Tn,
    };
  return (
    qt(e, function (s) {
      if (s.type === 'definition' || s.type === 'footnoteDefinition') {
        const u = s.type === 'definition' ? n : o,
          f = String(s.identifier).toUpperCase();
        u.has(f) || u.set(f, s);
      }
    }),
    l
  );
  function c(s, u) {
    const f = s.type,
      m = l.handlers[f];
    if (le.call(l.handlers, f) && m) return m(l, s, u);
    if (l.options.passThrough && l.options.passThrough.includes(f)) {
      if ('children' in s) {
        const { children: b, ...x } = s,
          v = re(x);
        return ((v.children = l.all(s)), v);
      }
      return re(s);
    }
    return (l.options.unknownHandler || In)(l, s, u);
  }
  function d(s) {
    const u = [];
    if ('children' in s) {
      const f = s.children;
      let m = -1;
      for (; ++m < f.length; ) {
        const g = l.one(f[m], s);
        if (g) {
          if (
            m &&
            f[m - 1].type === 'break' &&
            (!Array.isArray(g) && g.type === 'text' && (g.value = Ae(g.value)),
            !Array.isArray(g) && g.type === 'element')
          ) {
            const b = g.children[0];
            b && b.type === 'text' && (b.value = Ae(b.value));
          }
          Array.isArray(g) ? u.push(...g) : u.push(g);
        }
      }
    }
    return u;
  }
}
function jn(e, t) {
  e.position && (t.position = Or(e));
}
function Cn(e, t) {
  let r = t;
  if (e && e.data) {
    const n = e.data.hName,
      o = e.data.hChildren,
      a = e.data.hProperties;
    if (typeof n == 'string')
      if (r.type === 'element') r.tagName = n;
      else {
        const i = 'children' in r ? r.children : [r];
        r = { type: 'element', tagName: n, properties: {}, children: i };
      }
    (r.type === 'element' && a && Object.assign(r.properties, re(a)),
      'children' in r && r.children && o !== null && o !== void 0 && (r.children = o));
  }
  return r;
}
function In(e, t) {
  const r = t.data || {},
    n =
      'value' in t && !(le.call(r, 'hProperties') || le.call(r, 'hChildren'))
        ? { type: 'text', value: t.value }
        : { type: 'element', tagName: 'div', properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Tn(e, t) {
  const r = [];
  let n = -1;
  for (
    t &&
    r.push({
      type: 'text',
      value: `
`,
    });
    ++n < e.length;
  )
    (n &&
      r.push({
        type: 'text',
        value: `
`,
      }),
      r.push(e[n]));
  return (
    t &&
      e.length > 0 &&
      r.push({
        type: 'text',
        value: `
`,
      }),
    r
  );
}
function Ae(e) {
  let t = 0,
    r = e.charCodeAt(t);
  for (; r === 9 || r === 32; ) (t++, (r = e.charCodeAt(t)));
  return e.slice(t);
}
function Re(e, t) {
  const r = Nn(e, t),
    n = r.one(e, void 0),
    o = kn(r),
    a = Array.isArray(n) ? { type: 'root', children: n } : n || { type: 'root', children: [] };
  return (
    o &&
      a.children.push(
        {
          type: 'text',
          value: `
`,
        },
        o,
      ),
    a
  );
}
function Kn(e, t) {
  return e && 'run' in e
    ? async function (r, n) {
        const o = Re(r, { file: n, ...t });
        await e.run(o, n);
      }
    : function (r, n) {
        return Re(r, { file: n, ...(e || t) });
      };
}
export {
  de as I,
  Wn as L,
  Cr as M,
  Yn as P,
  kr as S,
  Qn as T,
  $n as V,
  Zn as a,
  Gn as b,
  Hn as c,
  ft as d,
  re as e,
  ur as f,
  Vt as g,
  Fn as h,
  Tr as i,
  ot as j,
  Or as k,
  Jn as l,
  Je as m,
  qn as n,
  Xn as o,
  mt as p,
  Kn as r,
  Vn as s,
};
