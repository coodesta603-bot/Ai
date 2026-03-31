import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  T as f,
  g as x,
  F as d,
  Z as y,
  e as N,
  f as S,
  $ as M,
  a0 as b,
  I as k,
} from './index-C8UyLGsD.js';
import { A as O } from './index-BAOF5XWg.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { f as F } from './format-DpcrcXfF.js';
import { i as _ } from './time-Co3YlGiT.js';
import { I as R } from './index-BsUJTjY1.js';
import { P as W } from './index-DbyirWUA.js';
import { M as C } from './index-Di19k3su.js';
import {
  aL as P,
  I as E,
  aM as $,
  aN as A,
  W as L,
  aO as B,
} from '../vendor/vendor-icons-BHMUH78i.js';
const I = l.memo(({ releasedAt: t, label: o }) =>
    !t || !_(t) ? null : e.jsx(f, { color: 'blue', size: 'small', children: o }),
  ),
  D = l.memo(({ releasedAt: t }) => {
    const { t: o } = x('common');
    return e.jsx(I, { label: o('new'), releasedAt: t });
  }),
  G = 'lobe-model-info-tags',
  v = S(({ css: t, cssVar: o }) => ({
    tag: t`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px !important;
    height: 20px;
    border-radius: 4px;
  `,
    token: t`
    width: 36px !important;
    height: 20px;
    border-radius: 4px;

    font-family: ${o.fontFamilyCode};
    font-size: 11px;
    color: ${o.colorTextSecondary};

    background: ${o.colorFillTertiary};
  `,
  })),
  u = l.memo(
    ({
      className: t,
      color: o,
      disableTooltip: r,
      enabled: a,
      icon: s,
      placement: n,
      title: i,
    }) => {
      if (!a) return null;
      const c = e.jsx(f, {
        className: t,
        color: o,
        size: 'small',
        children: e.jsx(k, { icon: s }),
      });
      return r ? c : e.jsx(M, { placement: n, title: i, children: c });
    },
  ),
  Z = l.memo(
    ({
      disableTooltip: t,
      files: o,
      functionCall: r,
      imageOutput: a,
      placement: s,
      tagClassName: n,
      video: i,
      vision: c,
    }) => {
      const { t: m } = x('components');
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx(u, {
            className: n,
            color: 'success',
            disableTooltip: t,
            enabled: o,
            icon: P,
            placement: s,
            title: m('ModelSelect.featureTag.file'),
          }),
          e.jsx(u, {
            className: n,
            color: 'success',
            disableTooltip: t,
            enabled: a,
            icon: E,
            placement: s,
            title: m('ModelSelect.featureTag.imageOutput'),
          }),
          e.jsx(u, {
            className: n,
            color: 'success',
            disableTooltip: t,
            enabled: c,
            icon: $,
            placement: s,
            title: m('ModelSelect.featureTag.vision'),
          }),
          e.jsx(u, {
            className: n,
            color: 'magenta',
            disableTooltip: t,
            enabled: i,
            icon: A,
            placement: s,
            title: m('ModelSelect.featureTag.video'),
          }),
          e.jsx(u, {
            className: n,
            color: 'info',
            disableTooltip: t,
            enabled: r,
            icon: L,
            placement: s,
            title: m('ModelSelect.featureTag.functionCall'),
          }),
        ],
      });
    },
  ),
  q = l.memo(({ contextWindowTokens: t, disableTooltip: o, placement: r, styles: a }) => {
    const { t: s } = x('components'),
      n = t === 0 ? '∞' : F(t),
      i = e.jsx(f, {
        className: a.token,
        size: 'small',
        children: t === 0 ? e.jsx(B, { size: 17, strokeWidth: 1.6 }) : n,
      });
    return o
      ? i
      : e.jsx(M, {
          placement: r,
          title: s('ModelSelect.featureTag.tokens', { tokens: t === 0 ? '∞' : b(t).format('0,0') }),
          children: i,
        });
  }),
  H = l.memo(({ directionReverse: t, disableTooltip: o, placement: r = 'top', style: a, ...s }) =>
    e.jsxs(d, {
      className: G,
      direction: t ? 'horizontal-reverse' : 'horizontal',
      gap: 2,
      style: { marginLeft: 'auto', ...a },
      width: 'fit-content',
      children: [
        e.jsx(Z, {
          disableTooltip: o,
          files: s.files,
          functionCall: s.functionCall,
          imageOutput: s.imageOutput,
          placement: r,
          tagClassName: v.tag,
          video: s.video,
          vision: s.vision,
        }),
        typeof s.contextWindowTokens == 'number' &&
          e.jsx(q, {
            contextWindowTokens: s.contextWindowTokens,
            disableTooltip: o,
            placement: r,
            styles: v,
          }),
      ],
    }),
  ),
  se = l.memo(
    ({
      showInfoTag: t = !0,
      abilities: o,
      contextWindowTokens: r,
      files: a,
      functionCall: s,
      imageOutput: n,
      newBadgeLabel: i,
      proBadgeLabel: c,
      video: m,
      vision: w,
      id: h,
      displayName: T,
      releasedAt: j,
      ...p
    }) => {
      const { mobile: z } = N(),
        g = T || h;
      return e.jsxs(d, {
        horizontal: !0,
        align: 'center',
        gap: 32,
        justify: 'space-between',
        ...p,
        style: { overflow: 'hidden', position: 'relative', width: '100%', ...p.style },
        children: [
          e.jsxs(d, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            style: { flexShrink: 1, minWidth: 0, overflow: 'hidden' },
            children: [
              e.jsx(C, { model: h, size: 20 }),
              e.jsx(y, {
                style: z ? { maxWidth: '60vw' } : { minWidth: 0, overflow: 'hidden' },
                ellipsis: { tooltip: g, tooltipWhenOverflow: !0 },
                children: g,
              }),
              i ? e.jsx(I, { label: i, releasedAt: j }) : e.jsx(D, { releasedAt: j }),
              c && e.jsx(f, { color: 'gold', size: 'small', children: c }),
            ],
          }),
          t &&
            e.jsx(H, {
              contextWindowTokens: r,
              files: a ?? o?.files,
              functionCall: s ?? o?.functionCall,
              imageOutput: n ?? o?.imageOutput,
              style: { zoom: 0.9 },
              video: m ?? o?.video,
              vision: w ?? o?.vision,
            }),
        ],
      });
    },
  ),
  ne = l.memo(({ provider: t, name: o, source: r, logo: a, type: s = 'mono', size: n = 16 }) => {
    const i = s === 'mono';
    return e.jsxs(d, {
      horizontal: !0,
      align: 'center',
      gap: 6,
      width: '100%',
      style: { overflow: 'hidden' },
      children: [
        r === 'custom' && a
          ? e.jsx(O, {
              avatar: a,
              shape: 'circle',
              size: n,
              style: i ? { filter: 'grayscale(1)' } : {},
              title: o,
            })
          : t === 'lobehub'
            ? e.jsx(R.Morden, { size: n })
            : e.jsx(W, { provider: t, size: n, type: s }),
        e.jsx(y, { ellipsis: !0, color: 'inherit', children: o }),
      ],
    });
  }),
  re = l.memo(({ Icon: t, label: o }) =>
    e.jsxs(d, {
      horizontal: !0,
      align: 'center',
      gap: 8,
      children: [e.jsx(t, { size: 20 }), e.jsx('span', { children: o })],
    }),
  );
export { re as L, se as M, D as N, ne as P, G as T, H as a };
