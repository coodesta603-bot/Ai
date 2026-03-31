import { f as Q, e as U, F as V, B as W, j as X } from './index-C8UyLGsD.js';
import { F as Y } from './index-IVfJW6S-.js';
import { M as Z } from './Modal-Dd2pIxVd.js';
import { r as H } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
const a = 'ant',
  p = Q(({ css: o, cssVar: t, responsive: s }) => ({
    footer: o`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0;

    width: 100%;
    margin: 0;
    padding: 16px;

    background: linear-gradient(
      to bottom,
      color-mix(in srgb, ${t.colorBgContainer} 0%, transparent) 0%,
      ${t.colorBgContainer} 10%
    );
  `,
    form: o`
    position: static;
    .${a}-form-group-title {
      font-size: 15px;
      font-weight: 500;
    }

    ${s.sm} {
      .${a}-form-group-title {
        font-size: 14px;
        font-weight: normal;
      }

      .${a}-form-group {
        width: calc(100% + 32px);
        margin-inline: -16px;
        background: transparent;
      }
    }
  `,
  })),
  d = H.memo(
    ({
      classNames: o = {},
      className: t,
      style: s,
      closable: g,
      styles: e = {},
      allowFullscreen: u,
      title: x,
      afterOpenChange: y,
      width: b,
      onCancel: h,
      centered: F,
      open: j,
      afterClose: C,
      destroyOnHidden: i,
      closeIcon: N,
      paddings: S,
      height: k,
      enableResponsive: z,
      zIndex: B,
      mask: M,
      getContainer: _,
      keyboard: v,
      focusTriggerAfterClose: w,
      forceRender: E,
      loading: R,
      footer: T,
      submitButtonProps: n,
      submitLoading: l,
      onFinish: D,
      submitText: $,
      variant: m = 'borderless',
      gap: f,
      onSubmit: q,
      children: A,
      ref: G,
      ...I
    }) => {
      const { mobile: J } = U(),
        { form: K, ...L } = o,
        { form: O, ...c } = typeof e == 'function' ? { form: void 0 } : e;
      return r.jsx(Z, {
        afterClose: C,
        afterOpenChange: y,
        allowFullscreen: u,
        centered: F,
        className: t,
        classNames: L,
        closable: g,
        closeIcon: N,
        confirmLoading: l,
        destroyOnHidden: i,
        enableResponsive: z,
        focusTriggerAfterClose: w,
        footer: null,
        forceRender: E,
        getContainer: _,
        height: k,
        keyboard: v,
        loading: R,
        mask: M,
        open: j,
        paddings: S,
        style: s,
        title: x,
        width: b,
        zIndex: B,
        styles:
          typeof e == 'function' ? e : { ...c, body: { paddingTop: J ? 0 : void 0, ...c?.body } },
        onCancel: h,
        children: r.jsx(Y, {
          className: X(p.form, K || ''),
          clearOnDestroy: i,
          gap: f || (m === 'borderless' ? 24 : f),
          ref: G,
          variant: m,
          footer: r.jsx(V, {
            horizontal: !0,
            align: 'center',
            className: p.footer,
            gap: 8,
            children:
              T ||
              r.jsx(W, {
                block: !0,
                htmlType: 'submit',
                loading: l,
                type: 'primary',
                onClick: q,
                ...n,
                style: { flex: 1, ...n?.style },
                children: $ || 'Submit',
              }),
          }),
          style: { paddingBottom: 56, ...O },
          styles: { title: { fontSize: 14 } },
          onFinish: D,
          ...I,
          children: A,
        }),
      });
    },
  );
d.displayName = 'FormModal';
var so = d;
export { so as F };
