import {
  f as R,
  e as $,
  aj as I,
  k as E,
  aG as M,
  A as B,
  j as i,
  aC as K,
  I as V,
} from './index-C8UyLGsD.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as X } from './Drawer-Blxnywp3.js';
import { aA as q, aB as J, a0 as _ } from '../vendor/vendor-icons-BHMUH78i.js';
const L = 56,
  l = R(({ css: o, cssVar: t }) => ({
    content: o`
      [class*='ant-modal-footer'] {
        margin: 0;
        padding: 16px;
      }

      [class*='ant-modal-header'] {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }

      [class*='ant-modal-container'] {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG};
      }
    `,
    drawerContent: o`
      [class*='ant-drawer-close'] {
        padding: 0;
      }

      [class*='ant-drawer-header'] {
        flex: none;
        height: ${L}px !important;
        padding-block: 0;
        padding-inline: 16px;
      }

      [class*='ant-drawer-footer'] {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 16px;
        border: none;
      }
    `,
    wrap: o`
      overflow: hidden auto;
    `,
  })),
  z = A.memo(
    ({
      panelRef: o,
      allowFullscreen: t,
      children: c,
      title: f = ' ',
      className: x,
      classNames: a,
      width: D = 700,
      onCancel: d,
      open: g,
      destroyOnHidden: m,
      paddings: u,
      height: h = '75dvh',
      enableResponsive: F = !0,
      footer: r,
      styles: n,
      okText: j,
      onOk: w,
      cancelText: b,
      okButtonProps: s,
      cancelButtonProps: y,
      confirmLoading: v,
      ...C
    }) => {
      const [p, G] = A.useState(!1),
        { mobile: H } = $(),
        k = r === !1 || r === null;
      return F && H
        ? e.jsx(I, {
            theme: { token: { colorBgElevated: E.colorBgContainer } },
            children: e.jsx(X, {
              className: i(l.drawerContent, x),
              closeIcon: e.jsx(B, { icon: _ }),
              destroyOnHidden: m,
              height: p ? 'calc(100% - env(safe-area-inset-top))' : h,
              open: g,
              panelRef: o,
              placement: 'bottom',
              title: f,
              classNames: typeof a == 'function' ? a : { ...a, wrapper: i(l.wrap, a?.wrapper) },
              extra: t && e.jsx(B, { icon: p ? q : J, onClick: () => G(!p) }),
              footer: k
                ? null
                : r ||
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(M, {
                        color: 'default',
                        variant: 'filled',
                        onClick: d,
                        ...y,
                        children: b || 'Cancel',
                      }),
                      e.jsx(M, {
                        loading: v,
                        type: 'primary',
                        onClick: w,
                        ...s,
                        style: { marginInlineStart: 8, ...s?.style },
                        children: j || 'OK',
                      }),
                    ],
                  }),
              styles:
                typeof n == 'function'
                  ? n
                  : {
                      ...n,
                      body: {
                        paddingBlock: `16px ${r ? 0 : '16px'}`,
                        paddingInline: u?.desktop ?? 16,
                        ...n?.body,
                      },
                    },
              onClose: d,
              ...C,
              children: c,
            }),
          })
        : e.jsx(I, {
            theme: { token: { colorBgElevated: E.colorBgContainer } },
            children: e.jsx(K, {
              closable: !0,
              maskClosable: !0,
              cancelText: b,
              className: i(l.content, x),
              closeIcon: e.jsx(V, { icon: _, size: 20 }),
              confirmLoading: v,
              destroyOnHidden: m,
              footer: k ? null : r,
              okButtonProps: s,
              okText: j,
              open: g,
              panelRef: o,
              title: f,
              width: D,
              cancelButtonProps: { color: 'default', variant: 'filled', ...y },
              classNames: typeof a == 'function' ? a : { ...a, wrapper: i(l.wrap, a?.wrapper) },
              styles:
                typeof n == 'function'
                  ? n
                  : {
                      ...n,
                      body: {
                        maxHeight: h,
                        overflow: 'hidden auto',
                        paddingBlock: `0 ${r === null ? '16px' : 0}`,
                        paddingInline: u?.desktop ?? 16,
                        ...n?.body,
                      },
                    },
              onCancel: d,
              onOk: w,
              ...C,
              children: c,
            }),
          });
    },
  );
z.displayName = 'Modal';
var O = z;
export { O as M };
