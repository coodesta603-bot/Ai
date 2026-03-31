import {
  f as fe,
  ae as p,
  ad as pe,
  a3 as he,
  bt as me,
  ai as ye,
  bu as P,
  F as E,
  bj as q,
  A as L,
  j as ke,
  bv as ve,
} from './index-C8UyLGsD.js';
import { u as xe } from './useTranslation-BcQ_3h0b.js';
import { h as be } from './hotkey-ii61g0AV.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { l as ge, f as je } from './index-BJ9KbyB2.js';
import { e as Ce } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { b0 as Ie, a0 as Te } from '../vendor/vendor-icons-BHMUH78i.js';
const s = fe(({ css: a, cssVar: l }) => ({
    borderless: p.variantBorderless,
    disabled: p.disabled,
    error: a`
      border: 1px solid ${l.colorError};
    `,
    errorText: a`
      font-size: 12px;
      color: ${l.colorError};
    `,
    filled: p.variantFilled,
    focused: a`
      background: ${l.colorFillSecondary} !important;
    `,
    hiddenInput: a`
      cursor: text;

      position: absolute;
      z-index: -1;
      inset-block-start: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
    `,
    outlined: p.variantOutlined,
    placeholder: a`
      color: ${l.colorTextDescription};
    `,
    root: a`
      cursor: pointer;

      position: relative;

      max-width: 100%;
      height: 36px;
      padding-block: 0;
      padding-inline: 12px;
      border-radius: ${l.borderRadius};
    `,
    shadow: p.shadow,
  })),
  Ee = pe(s.root, {
    defaultVariants: { disabled: !1, error: !1, shadow: !1, variant: 'outlined' },
    variants: {
      variant: { filled: s.filled, outlined: s.outlined, borderless: s.borderless },
      shadow: { false: null, true: s.shadow },
      focused: { false: null, true: s.focused },
      error: { fales: null, true: s.error },
      disabled: { false: null, true: s.disabled },
    },
  }),
  U = r.memo(
    ({
      value: a = '',
      defaultValue: l = '',
      resetValue: h = '',
      onChange: X,
      onClear: G,
      onConflict: F,
      placeholder: J,
      disabled: n,
      shadow: Q,
      allowClear: S,
      allowReset: w = !0,
      style: V,
      className: W,
      hotkeyConflicts: D = [],
      variant: Y,
      texts: m,
      isApple: H,
      onBlur: Z,
      onReset: $,
      onFocus: ee,
    }) => {
      const [g, y] = r.useState(!1),
        [z, i] = r.useState(!1),
        [N, d] = r.useState(!1),
        j = r.useRef(null),
        { isDarkMode: te } = he(),
        { t: u } = xe(be),
        R = r.useMemo(() => me(H), [H]),
        [c, k] = ye(l, { defaultValue: l, onChange: X, value: a }),
        [C, { start: se, stop: I, isRecording: v, resetKeys: K }] = ge();
      je(
        '*',
        () => {
          j.current?.blur();
        },
        {
          enableOnContentEditable: !0,
          enableOnFormTags: !0,
          enabled: v && !n,
          keydown: !1,
          keyup: !0,
          preventDefault: !0,
        },
      );
      const { isValid: O, keys: _ } = r.useCallback((e) => {
          const o = [],
            x = [];
          for (const b of e) {
            const f = b.toLowerCase();
            ve.includes(f)
              ? (!R && f === 'ctrl') || (R && f === 'meta')
                ? o.includes('mod') || o.push('mod')
                : o.includes(f) || o.push(f)
              : x.push(b);
          }
          if (o.length === 0 && x.length > 0) return { isValid: !1, keys: [] };
          const A = [o, x.length > 0 ? [x.at(-1)] : []];
          return { isValid: A.every((b) => b.length > 0), keys: A.flat() };
        }, [])(C),
        T = _.join('+'),
        B = r.useCallback((e) => D.filter((o) => o !== h).some((o) => Ce(P(e), P(o))), [D]);
      r.useEffect(() => {
        if (C.size > 0 && !v) {
          if (!O) {
            (d(!0), i(!1));
            return;
          }
          d(!1);
          const e = T;
          B(e) ? (i(!0), F?.(e)) : (i(!1), k?.(e));
        }
      }, [C, v, O, T, B, k, F]);
      const oe = (e) => {
          n || (y(!0), i(!1), d(!1), se(), ee?.(e));
        },
        re = (e) => {
          (y(!1), I(), Z?.(e));
        },
        ae = (e) => {
          (e.preventDefault(), e.stopPropagation(), k?.(''), K(), i(!1), d(!1), y(!1), I(), G?.(c));
        },
        le = (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            k?.(h),
            K(),
            i(!1),
            d(!1),
            y(!1),
            I(),
            $?.(c, h));
        },
        ne = (e) => {
          (e.preventDefault(), e.stopPropagation(), !(n || g) && j.current?.focus());
        },
        M = J ?? u('hotkey.placeholder'),
        ie = m?.reset ?? u('hotkey.reset'),
        ce = m?.clear ?? u('hotkey.clear'),
        de = m?.conflicts ?? u('hotkey.conflict'),
        ue = m?.invalidCombination ?? u('hotkey.invalidCombination');
      return t.jsxs(E, {
        className: W,
        gap: 8,
        style: { position: 'relative', ...V },
        children: [
          t.jsxs(E, {
            horizontal: !0,
            align: 'center',
            justify: 'space-between',
            className: ke(
              Ee({
                disabled: n,
                error: z || N,
                focused: g,
                shadow: Q,
                variant: Y || (te ? 'filled' : 'outlined'),
              }),
            ),
            onClick: ne,
            children: [
              t.jsx('div', {
                style: { pointerEvents: 'none' },
                children: v
                  ? t.jsx('span', {
                      className: s.placeholder,
                      children: _.length > 0 ? t.jsx(q, { keys: T }) : M,
                    })
                  : c
                    ? t.jsx(q, { keys: c })
                    : t.jsx('span', { className: s.placeholder, children: M }),
              }),
              t.jsx('input', {
                readOnly: !0,
                className: s.hiddenInput,
                disabled: n,
                ref: j,
                style: { pointerEvents: 'none' },
                onBlur: re,
                onFocus: oe,
              }),
              !g &&
                c &&
                !n &&
                (w || S) &&
                t.jsxs(E, {
                  horizontal: !0,
                  gap: 4,
                  children: [
                    w &&
                      c !== h &&
                      t.jsx(L, {
                        icon: Ie,
                        size: 'small',
                        title: ie,
                        variant: 'filled',
                        onClick: le,
                      }),
                    S &&
                      t.jsx(L, {
                        icon: Te,
                        size: 'small',
                        title: ce,
                        variant: 'filled',
                        onClick: ae,
                      }),
                  ],
                }),
            ],
          }),
          z && t.jsx('div', { className: s.errorText, children: de }),
          N && t.jsx('div', { className: s.errorText, children: ue }),
        ],
      });
    },
  );
U.displayName = 'HotkeyInput';
var Ke = U;
export { Ke as H };
