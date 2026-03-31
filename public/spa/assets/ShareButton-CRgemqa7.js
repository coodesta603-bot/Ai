import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  F as p,
  k as g,
  j as z,
  f as k,
  g as $,
  C as b,
  Z as R,
  T,
  A as L,
  bl as M,
  B as A,
} from './index-C8UyLGsD.js';
import { A as B } from './index-BAOF5XWg.js';
import { I as _ } from './Input-C_EgL0SG.js';
import { M as q } from './Modal-Dd2pIxVd.js';
import { S as F } from './index-DLsdvBKx.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { q as d } from './base-AbuBx_QK.js';
import { S as W } from './SiX-DO6VXJ8i.js';
import { p as f, n as u, f as U, s as Z } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { b2 as I, cn as N } from '../vendor/vendor-icons-BHMUH78i.js';
const E = '#6364FF',
  H = s.forwardRef(function (
    { title: r = 'Mastodon', color: n = 'currentColor', size: o = 24, ...l },
    a,
  ) {
    return (
      n === 'default' && (n = E),
      t.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: o,
        height: o,
        fill: n,
        viewBox: '0 0 24 24',
        ref: a,
        ...l,
        children: [
          t.jsx('title', { children: r }),
          t.jsx('path', {
            d: 'M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z',
          }),
        ],
      })
    );
  }),
  X = '#FF4500',
  D = s.forwardRef(function (
    { title: r = 'Reddit', color: n = 'currentColor', size: o = 24, ...l },
    a,
  ) {
    return (
      n === 'default' && (n = X),
      t.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: o,
        height: o,
        fill: n,
        viewBox: '0 0 24 24',
        ref: a,
        ...l,
        children: [
          t.jsx('title', { children: r }),
          t.jsx('path', {
            d: 'M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z',
          }),
        ],
      })
    );
  }),
  P = '#E6162D',
  G = s.forwardRef(function (
    { title: r = 'Sina Weibo', color: n = 'currentColor', size: o = 24, ...l },
    a,
  ) {
    return (
      n === 'default' && (n = P),
      t.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: o,
        height: o,
        fill: n,
        viewBox: '0 0 24 24',
        ref: a,
        ...l,
        children: [
          t.jsx('title', { children: r }),
          t.jsx('path', {
            d: 'M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.615.375-.977.42-1.804 0-2.404-.781-1.112-2.915-1.053-5.364-.03 0 0-.766.331-.571-.271.376-1.217.315-2.224-.27-2.809-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395 6.536 0 10.888-3.801 10.888-6.82 0-1.822-1.547-2.854-2.915-3.284v.01zm1.908-5.092c-.766-.856-1.908-1.187-2.96-.962-.436.09-.706.511-.616.932.09.42.511.691.932.602.511-.105 1.067.044 1.442.465.376.421.466.977.316 1.473-.136.406.089.856.51.992.405.119.857-.105.992-.512.33-1.021.12-2.178-.646-3.035l.03.045zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968-.496.104-.812.587-.706 1.081.104.496.586.813 1.082.707 1.532-.331 3.185.15 4.296 1.383 1.112 1.246 1.429 2.943.947 4.416-.165.48.106 1.007.586 1.157.479.165.991-.104 1.157-.586.675-2.088.241-4.478-1.338-6.235l.03.045z',
          }),
        ],
      })
    );
  }),
  O = '#26A5E4',
  J = s.forwardRef(function (
    { title: r = 'Telegram', color: n = 'currentColor', size: o = 24, ...l },
    a,
  ) {
    return (
      n === 'default' && (n = O),
      t.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: o,
        height: o,
        fill: n,
        viewBox: '0 0 24 24',
        ref: a,
        ...l,
        children: [
          t.jsx('title', { children: r }),
          t.jsx('path', {
            d: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
          }),
        ],
      })
    );
  }),
  K = '#25D366',
  Q = s.forwardRef(function (
    { title: r = 'WhatsApp', color: n = 'currentColor', size: o = 24, ...l },
    a,
  ) {
    return (
      n === 'default' && (n = K),
      t.jsxs('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: o,
        height: o,
        fill: n,
        viewBox: '0 0 24 24',
        ref: a,
        ...l,
        children: [
          t.jsx('title', { children: r }),
          t.jsx('path', {
            d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
          }),
        ],
      })
    );
  }),
  h = (e, r = ',', n) => (n && (e = e.map((o) => n + U(o))), e.filter(Boolean).join(r)),
  Y = ({ url: e, title: r, desc: n, hashtags: o = [] }) => {
    const l = () => {
        const i = f(
          {
            title: [[r, n].filter(Boolean).join(' - '), o && h(o, ' ', '#')]
              .filter(Boolean)
              .join(' '),
            url: e,
          },
          u,
        );
        return d.stringifyUrl({ query: i, url: 'https://www.reddit.com/submit' });
      },
      a = () => {
        const i = f(
          {
            text: [[r, n].filter(Boolean).join(' - '), o && h(o, ' ', '#')]
              .filter(Boolean)
              .join(' '),
            url: e,
          },
          u,
        );
        return d.stringifyUrl({ query: i, url: 'https://t.me/share/url"' });
      },
      m = () => {
        const i = f(
          {
            sharesource: 'weibo',
            title: [[r, n].filter(Boolean).join(' - '), o && h(o, ' ', '#')]
              .filter(Boolean)
              .join(' '),
            url: e,
          },
          u,
        );
        return d.stringifyUrl({ query: i, url: 'http://service.weibo.com/share/share.php' });
      },
      w = () => {
        const i = f(
          {
            text: [[r, n].filter(Boolean).join(' - '), e, o && h(o, ' ', '#')]
              .filter(Boolean)
              .join(' '),
          },
          u,
        );
        return d.stringifyUrl({ query: i, url: 'https://api.whatsapp.com/send' });
      },
      j = () => {
        const i = f({ hashtags: o && h(o), text: [r, n].filter(Boolean).join(' - '), url: e }, u);
        return d.stringifyUrl({ query: i, url: 'https://x.com/intent/tweet' });
      },
      y = () => {
        const i = f({ url: e }, u);
        return d.stringifyUrl({ query: i, url: 'https://www.linkedin.com/sharing/share-offsite/' });
      },
      x = () => {
        const i = f(
          {
            text: [[r, n].filter(Boolean).join(' - '), o && h(o, ' ', '#')]
              .filter(Boolean)
              .join(' '),
            url: e,
          },
          u,
        );
        return d.stringifyUrl({ query: i, url: 'https://mastodon.social/share' });
      };
    return {
      linkedin: { link: y(), title: 'Linkedin' },
      mastodon: { icon: H, link: x(), title: 'Mastodon' },
      reddit: { icon: D, link: l(), title: 'Reddit' },
      telegram: { icon: J, link: a(), title: 'Telegram' },
      weibo: { icon: G, link: m(), title: 'Weibo' },
      whatsapp: { icon: Q, link: w(), title: 'WhatsApp' },
      x: { icon: W, link: j(), title: 'X' },
    };
  },
  S = k(({ css: e, cssVar: r }) => ({
    banner: e`
    position: relative;

    overflow: hidden;

    height: 64px;
    margin-block-end: -56px;

    background: ${r.colorFillSecondary};
  `,
    bannerImg: e`
    position: absolute;
    filter: blur(40px) saturate(1.5);
  `,
  })),
  V = s.memo(({ avatar: e, className: r, size: n = 600, children: o, ...l }) =>
    t.jsxs(p, {
      align: 'center',
      className: z(S.banner, r),
      justify: 'center',
      style: e ? {} : { backgroundColor: g.colorFillTertiary },
      width: '100%',
      ...l,
      children: [
        e &&
          t.jsx(B, { alt: 'banner', avatar: e, className: S.bannerImg, shape: 'square', size: n }),
        o,
      ],
    }),
  ),
  v = k(({ css: e, cssVar: r }) => ({
    banner: e`
      overflow: hidden;

      border: 1px solid ${r.colorBorderSecondary};
      border-radius: ${r.borderRadiusLG};

      background: ${r.colorBgContainer};
      box-shadow: ${r.boxShadowTertiary};
    `,
    copy: e`
      background: ${r.colorPrimary};

      &:hover {
        background: ${r.colorPrimaryHover};
      }
    `,
    icon: e`
      border: 1px solid ${r.colorFillSecondary};

      svg {
        fill: ${r.colorTextSecondary};
      }

      &:hover {
        border: 1px solid ${r.colorBorderSecondary};

        svg {
          fill: ${r.colorText};
        }
      }
    `,
  })),
  f1 = s.memo(({ meta: e, ...r }) => {
    const {
        x: n,
        reddit: o,
        telegram: l,
        whatsapp: a,
        mastodon: m,
        weibo: w,
      } = Y({ desc: '', hashtags: [], title: '', url: '', ...e }),
      { t: j } = $('common'),
      [y, x] = s.useState(!1);
    let i;
    return (
      e
        ? (i = t.jsxs(b, {
            gap: 16,
            style: { position: 'relative' },
            width: '100%',
            children: [
              t.jsxs(p, {
                align: 'center',
                className: v.banner,
                width: '100%',
                children: [
                  t.jsx(V, {
                    avatar: e.avatar,
                    size: 640,
                    style: { height: 72, marginBottom: -36 },
                  }),
                  t.jsx(b, {
                    flex: 'none',
                    height: 72,
                    width: 72,
                    style: {
                      backgroundColor: g.colorBgContainer,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      zIndex: 2,
                    },
                    children: t.jsx(B, {
                      animation: !0,
                      avatar: e.avatar,
                      shape: 'square',
                      size: 64,
                    }),
                  }),
                  t.jsxs(b, {
                    padding: 12,
                    width: '100%',
                    children: [
                      t.jsx('h3', {
                        style: { fontWeight: 'bold', textAlign: 'center' },
                        children: e.title,
                      }),
                      t.jsx(R, {
                        as: 'p',
                        style: { color: g.colorTextSecondary, textAlign: 'center' },
                        children: e.desc,
                      }),
                      e.hashtags &&
                        t.jsx(p, {
                          horizontal: !0,
                          align: 'center',
                          gap: 4,
                          justify: 'center',
                          wrap: 'wrap',
                          children: e.hashtags.map((c, C) =>
                            t.jsx(T, { children: Z(c).trim() }, C),
                          ),
                        }),
                      e.tags,
                    ],
                  }),
                ],
              }),
              t.jsx(p, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                justify: 'center',
                wrap: 'wrap',
                children: [n, o, l, a, m, w].map(
                  (c) =>
                    c.icon &&
                    t.jsx(
                      'a',
                      {
                        href: c.link,
                        rel: 'noreferrer',
                        target: '_blank',
                        children: t.jsx(L, {
                          className: v.icon,
                          icon: c.icon,
                          size: { blockSize: 36, borderRadius: 18, size: 16 },
                          title: c.title,
                        }),
                      },
                      c.title,
                    ),
                ),
              }),
              t.jsxs(p, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                width: '100%',
                children: [
                  t.jsx(_, { value: e.url, variant: 'filled' }),
                  t.jsx(M, {
                    className: v.copy,
                    color: g.colorBgLayout,
                    content: e.url,
                    icon: I,
                    size: { blockSize: 36, size: 16 },
                  }),
                ],
              }),
            ],
          }))
        : (i = t.jsx(F, { active: !0, paragraph: { rows: 4 }, title: !1 })),
      t.jsxs(t.Fragment, {
        children: [
          t.jsx(A, { icon: N, size: 'large', onClick: () => x(!0), ...r }),
          t.jsx(q, {
            footer: null,
            open: y,
            title: j('share'),
            width: 360,
            onCancel: () => x(!1),
            children: i,
          }),
        ],
      })
    );
  });
export { f1 as S };
