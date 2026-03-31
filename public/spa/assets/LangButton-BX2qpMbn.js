import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bp as C,
  g as p,
  I as l,
  A as k,
  u as M,
  F as r,
  Z as c,
  bq as T,
  k as d,
} from './index-C8UyLGsD.js';
import { D as j } from './DropdownMenu-CEFIlaZw.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as v, aV as z, aW as S, h as y, R as I } from '../vendor/vendor-icons-BHMUH78i.js';
import { g as L } from './general-Bhxy39g6.js';
const g = { dark: S, light: z, system: v },
  F = ({ placement: m, size: i }) => {
    const { setTheme: t, theme: a } = C(),
      { t: o } = p('setting'),
      u = x.useMemo(
        () => [
          {
            icon: e.jsx(l, { icon: g.system }),
            key: 'system',
            label: o('settingCommon.themeMode.auto'),
            onClick: () => t('system'),
          },
          {
            icon: e.jsx(l, { icon: g.light }),
            key: 'light',
            label: o('settingCommon.themeMode.light'),
            onClick: () => t('light'),
          },
          {
            icon: e.jsx(l, { icon: g.dark }),
            key: 'dark',
            label: o('settingCommon.themeMode.dark'),
            onClick: () => t('dark'),
          },
        ],
        [t, o],
      );
    return e.jsx(j, {
      items: u,
      placement: m,
      children: e.jsx(k, { icon: g[a || 'system'], size: i || { blockSize: 32, size: 16 } }),
    });
  },
  O = x.memo(({ placement: m, size: i }) => {
    const [t, a] = M((n) => [L.language(n), n.switchLocale]),
      { t: o } = p(['setting', 'common']),
      u = x.useMemo(() => {
        const n = {
            checked: t === 'auto',
            closeOnClick: !0,
            key: 'auto',
            label: e.jsxs(r, {
              gap: 4,
              children: [
                e.jsx(c, {
                  style: { lineHeight: 1.2 },
                  children: o('settingCommon.lang.autoMode'),
                }),
                e.jsx(c, {
                  fontSize: 12,
                  style: { lineHeight: 1.2 },
                  type: 'secondary',
                  children: o('lang.auto', { ns: 'common' }),
                }),
              ],
            }),
            onCheckedChange: (s) => {
              s && a('auto');
            },
            type: 'checkbox',
          },
          b = T.map((s) => ({
            checked: t === s.value,
            closeOnClick: !0,
            key: s.value,
            label: e.jsxs(
              r,
              {
                gap: 4,
                children: [
                  e.jsx(c, { style: { lineHeight: 1.2 }, children: s.label }),
                  e.jsx(c, {
                    fontSize: 12,
                    style: { lineHeight: 1.2 },
                    type: 'secondary',
                    children: o(`lang.${s.value}`, { ns: 'common' }),
                  }),
                ],
              },
              s.value,
            ),
            onCheckedChange: (f) => {
              f && a(s.value);
            },
            type: 'checkbox',
          }));
        return [n, ...b];
      }, [t, a, o]);
    let h;
    return (
      i
        ? (h = e.jsx(k, { icon: y, size: i }))
        : (h = e.jsxs(r, {
            horizontal: !0,
            align: 'center',
            gap: 12,
            style: {
              borderRadius: 8,
              boxSizing: 'content-box',
              cursor: 'pointer',
              height: 28,
              marginInline: 4,
              paddingBlock: 6,
              paddingInline: 12,
            },
            onMouseEnter: (n) => {
              n.currentTarget.style.background = d.colorFillTertiary;
            },
            onMouseLeave: (n) => {
              n.currentTarget.style.background = 'transparent';
            },
            children: [
              e.jsx(l, { icon: y, size: 'small', style: { color: d.colorTextSecondary } }),
              e.jsx(r, { flex: 1, children: o('settingCommon.lang.title') }),
              e.jsx(l, { icon: I, size: 'small', style: { color: d.colorTextSecondary } }),
            ],
          })),
      e.jsx(j, {
        items: u,
        placement: m,
        trigger: 'hover',
        popupProps: {
          style: { maxHeight: 360, minWidth: 240, overflow: 'auto', transition: 'none' },
        },
        children: h,
      })
    );
  });
export { O as L, F as T };
