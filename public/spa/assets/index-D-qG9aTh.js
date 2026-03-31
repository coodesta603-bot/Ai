import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { A as h, j as I, f as d, k as t } from './index-C8UyLGsD.js';
import { I as x } from './index-D986vWty.js';
import { r as k } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as E } from './usePlatform-DfprYmmH.js';
import { aH as S } from '../vendor/vendor-icons-BHMUH78i.js';
const b = 64,
  r = d(({ css: o }) => ({
    deleteButton: o`
    color: #fff;
    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `,
    editableImage: o`
    background: ${t.colorBgContainer};
    box-shadow: 0 0 0 1px ${t.colorFill} inset;
  `,
    image: o`
    margin-block: 0 !important;

    .ant-image {
      height: 100% !important;

      img {
        height: 100% !important;
      }
    }
  `,
  })),
  M = k.memo(
    ({
      className: o,
      style: i,
      editable: a,
      alt: m,
      onRemove: n,
      url: c,
      loading: l,
      alwaysShowClose: g,
      preview: p,
    }) => {
      const f = a ? b : '100%',
        { isSafari: s } = E();
      return e.jsx(x, {
        alt: m || '',
        alwaysShowActions: g,
        classNames: { wrapper: I(r.image, a && r.editableImage, o) },
        height: s ? 'auto' : '100%',
        isLoading: l,
        preview: p,
        size: f,
        src: c,
        style: { height: s ? 'auto' : '100%', width: '100%', ...i },
        actions:
          a &&
          e.jsx(h, {
            glass: !0,
            className: r.deleteButton,
            icon: S,
            size: 'small',
            onClick: (u) => {
              (u.stopPropagation(), n?.());
            },
          }),
      });
    },
  );
export { M as I };
