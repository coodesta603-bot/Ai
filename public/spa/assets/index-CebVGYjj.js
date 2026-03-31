import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { m as w, f as C } from './index-C8UyLGsD.js';
import { S as v } from './Select-DX7LXAK9.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { P as y, M as m, T } from './index-CATsCkTi.js';
import { u as b } from './useEnabledChatModels-Dc-yaT5f.js';
const i = 'ant',
  c = C(({ css: t }) => ({
    popup: t`
    width: max(360px, var(--anchor-width));

    &.${i}-select-dropdown .${i}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,
    select: t`
    .${i}-select-selection-item {
      .${T} {
        display: none;
      }
    }
  `,
  })),
  G = d.memo(
    ({
      value: t,
      onChange: f,
      showAbility: u = !0,
      requiredAbilities: n,
      loading: h,
      size: x,
      style: g,
      variant: $,
      initialWidth: M = !1,
      popupWidth: p,
    }) => {
      const r = b(),
        j = d.useMemo(() => {
          const o = (e) =>
            (n && n.length > 0
              ? e.children.filter((s) => n.every((S) => !!s.abilities?.[S]))
              : e.children
            ).map((s) => ({
              ...s,
              label: a.jsx(m, { ...s, ...s.abilities, showInfoTag: !1 }),
              provider: e.id,
              value: `${e.id}/${s.id}`,
            }));
          if (r.length === 1) {
            const e = r[0];
            return o(e);
          }
          return r
            .map((e) => {
              const l = o(e);
              if (l.length !== 0)
                return {
                  label: a.jsx(y, { logo: e.logo, name: e.name, provider: e.id, source: e.source }),
                  options: l,
                };
            })
            .filter(Boolean);
        }, [r, n, u]);
      return a.jsx(w, {
        children: a.jsx(v, {
          className: c.select,
          defaultValue: `${t?.provider}/${t?.model}`,
          loading: h,
          options: j,
          popupClassName: c.popup,
          popupMatchSelectWidth: p === void 0 ? !1 : p,
          size: x,
          value: `${t?.provider}/${t?.model}`,
          variant: $,
          optionRender: (o) => a.jsx(m, { ...o, ...o.abilities, showInfoTag: !1 }),
          style: { minWidth: 200, width: M ? 'initial' : void 0, ...g },
          onChange: (o, e) => {
            const l = o.split('/').slice(1).join('/');
            f?.({ model: l, provider: e.provider });
          },
        }),
      });
    },
  );
export { G as M };
