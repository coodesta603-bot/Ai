import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as t, I as l, f as s } from './index-C8UyLGsD.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  aa as f,
  ab as n,
  ac as m,
  ad as u,
  ae as d,
  af as g,
} from '../vendor/vendor-icons-BHMUH78i.js';
const c = {
    aborted: { cls: 'default', icon: g },
    completed: { cls: 'success', icon: d },
    external: { cls: 'warning', icon: u },
    failed: { cls: 'error', icon: m },
    idle: { cls: 'default', icon: n },
    pending: { cls: 'warning', icon: n },
    running: { cls: 'primary', icon: f },
  },
  e = s(({ css: o, cssVar: r }) => ({
    default: o`
    color: ${r.colorTextTertiary};
  `,
    error: o`
    color: ${r.colorError};
  `,
    primary: o`
    color: ${r.colorPrimary};
  `,
    success: o`
    color: ${r.colorSuccess};
  `,
    warning: o`
    color: ${r.colorWarning};
  `,
    wrapper: o`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    font-size: 11px;
    font-weight: 500;
    line-height: 1;
  `,
  })),
  h = p.memo(({ status: o }) => {
    const { t: r } = t('eval'),
      a = c[o] || c.idle;
    return i.jsxs('span', {
      className: `${e.wrapper} ${e[a.cls] || e.default}`,
      children: [i.jsx(l, { icon: a.icon, size: 12 }), r(`run.status.${o}`)],
    });
  });
export { h as S };
