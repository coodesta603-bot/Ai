import { k as r, F as a, A as C } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { a0 as $ } from '../vendor/vendor-icons-BHMUH78i.js';
import { D } from './Drawer-Blxnywp3.js';
const x = g.memo(
  ({
    onClose: p,
    containerMaxWidth: s = 1024,
    classNames: n,
    title: b,
    placement: l,
    styles: o,
    children: u,
    height: i,
    width: d,
    extra: h,
    closeIconProps: m,
    noHeader: c,
    sidebarWidth: B = 280,
    sidebar: t,
    closeIcon: j,
    ref: k,
    ...v
  }) => {
    const w = g.useMemo(() => {
        if (i === '100%' || d === '100%' || i === '100vh' || d === '100vw') return {};
        switch (l) {
          case 'top':
            return { borderBottom: `1px solid ${r.colorBorder}` };
          case 'bottom':
            return { borderTop: `1px solid ${r.colorBorder}` };
          case 'left':
            return { borderRight: `1px solid ${r.colorBorder}` };
          case 'right':
            return { borderLeft: `1px solid ${r.colorBorder}` };
          default:
            return {};
        }
      }, [l, i, d]),
      f = e.jsxs(a, {
        horizontal: !0,
        align: 'center',
        className: n?.extra,
        gap: 4,
        justify: 'flex-end',
        style: { position: 'absolute', right: 4, top: 4, ...o?.extra },
        children: [h, j || e.jsx(C, { icon: $, onClick: p, ...m })],
      }),
      y = e.jsxs(e.Fragment, {
        children: [
          e.jsx(a, {
            className: n?.sidebar,
            paddingBlock: 12,
            paddingInline: 16,
            width: B,
            style: {
              background: r.colorBgLayout,
              borderRight: `1px solid ${r.colorBorderSecondary}`,
              height: '100vh',
              overflowX: 'hidden',
              overflowY: 'auto',
              position: 'sticky',
              top: 0,
              ...o?.sidebar,
            },
            children: t,
          }),
          e.jsx(a, {
            className: n?.sidebarContent,
            flex: 1,
            paddingBlock: 12,
            paddingInline: 16,
            style: {
              background: r.colorBgContainer,
              overflowX: 'hidden',
              overflowY: 'auto',
              ...o?.sidebarContent,
            },
            children: u,
          }),
        ],
      });
    return e.jsx(D, {
      classNames: n,
      closable: !1,
      extra: c ? void 0 : f,
      height: i,
      keyboard: !0,
      panelRef: k,
      placement: l,
      width: d,
      styles:
        typeof o == 'function'
          ? o
          : {
              ...o,
              body: {
                background: 'transparent',
                paddingBlock: t ? 0 : 12,
                paddingInline: t ? 0 : 16,
                ...o?.body,
              },
              header: {
                background: 'transparent',
                display: c ? 'none' : void 0,
                padding: 4,
                ...o?.header,
              },
              section: {
                background: t
                  ? `linear-gradient(to right, ${r.colorBgLayout} 49.9%, ${r.colorBgContainer} 50%)`
                  : r.colorBgContainer,
                ...o?.section,
              },
              wrapper: { background: r.colorBgContainer, ...w, ...o?.wrapper },
            },
      title: e.jsx(a, {
        horizontal: !0,
        align: 'center',
        className: n?.title,
        justify: 'flex-start',
        paddingBlock: 8,
        paddingInline: 16,
        style: { justifySelf: 'center', maxWidth: s, width: '100%', ...o?.title },
        children: b,
      }),
      onClose: p,
      ...v,
      children: e.jsxs(a, {
        className: n?.bodyContent,
        horizontal: !!t,
        style: {
          justifySelf: 'center',
          maxWidth: s,
          minHeight: '100%',
          overflow: t ? 'visible' : void 0,
          width: '100%',
          ...o?.bodyContent,
        },
        children: [c && f, t ? y : u],
      }),
    });
  },
);
x.displayName = 'Drawer';
var S = x;
export { S as D };
