import {
  f as z,
  ae as n,
  j as o,
  ad as E,
  ai as F,
  F as H,
  bk as S,
  k as N,
} from './index-C8UyLGsD.js';
import { r as T } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
const t = z(({ css: r, cssVar: e }) => ({
    borderless: o(
      n.variantBorderlessWithoutHover,
      r`
        border-radius: 0;

        pre,
        textarea {
          padding: 0;
        }
      `,
    ),
    filled: n.variantFilledWithoutHover,
    highlight: r`
      pointer-events: none;
    `,
    outlined: n.variantOutlinedWithoutHover,
    root: r`
      position: relative;

      overflow: hidden auto;

      width: 100%;
      height: fit-content;
      border-radius: ${e.borderRadius};

      font-size: 12px;

      pre,
      textarea {
        margin: 0;
        padding: 16px;
      }

      textarea,
      pre,
      code {
        overflow: hidden;

        font-family: ${e.fontFamilyCode};
        font-size: inherit;
        line-height: inherit;
        word-break: inherit;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    `,
    textarea: r`
      resize: none;

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;

      overflow: hidden;

      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;

      color: transparent;
      text-align: start;

      background: transparent;
      outline: none;
      caret-color: ${e.colorText};

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }

      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    `,
  })),
  W = E(t.root, {
    defaultVariants: { variant: 'borderless' },
    variants: { variant: { filled: t.filled, outlined: t.outlined, borderless: t.borderless } },
  }),
  c = T.memo(
    ({
      autoFocus: r,
      classNames: e,
      styles: s,
      defaultValue: l = '',
      onChange: p,
      placeholder: g = '',
      style: x,
      className: f,
      onValueChange: u,
      value: i,
      language: b = 'markdown',
      variant: d = 'borderless',
      width: m,
      height: v,
      flex: w,
      ref: C,
      ...y
    }) => {
      const [j, k] = F(l, { defaultValue: l, onChange: u, value: i });
      return a.jsxs(H, {
        className: o(W({ variant: d }), f),
        flex: w,
        height: v,
        style: x,
        width: m,
        children: [
          i
            ? a.jsx(S, {
                className: o(t.highlight, e?.highlight),
                language: b,
                style: s?.highlight,
                variant: d,
                children: i,
              })
            : a.jsx('pre', {
                className: o(t.highlight, e?.highlight),
                style: { color: N.colorTextDescription },
                children: g || ' ',
              }),
          a.jsx('textarea', {
            'autoCapitalize': 'off',
            'autoComplete': 'off',
            'autoCorrect': 'off',
            'autoFocus': r,
            'className': o(t.textarea, e?.textarea),
            'data-gramm': !1,
            'ref': C,
            'style': s?.textarea,
            'value': j,
            'onChange': (h) => {
              (p?.(h), k(h.target.value));
            },
            ...y,
          }),
        ],
      });
    },
  );
c.displayName = 'CodeEditor';
var D = c;
export { D as C };
