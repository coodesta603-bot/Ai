import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  C as b,
  k as s,
  F as p,
  j as v,
  f as A,
  g as B,
  a as D,
  B as S,
} from './index-C8UyLGsD.js';
import { A as M } from './Alert-lszDImnb.js';
import { I as R } from './Input-C_EgL0SG.js';
import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as I } from './index-BAOF5XWg.js';
import { modelsService as T } from './models-Cn8Sk3JX.js';
import { b as _, c as F, d as k } from './format-DpcrcXfF.js';
import { I as W } from './providerConfig-C5BYp5FR.js';
import { P as $ } from './progress-CqsUaYIW.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './AccordionItem-BUupnbbL.js';
import './index-BfwjtmVb.js';
import './Block-DDntSWi2.js';
import './index-BaHZowoE.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './clientModelRuntime-ByjgYOys.js';
import './index-F5T1V14Z.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-sIxU1rKL.js';
import './purify.es-r8glNMJW.js';
import './store-CTAK9tZ0.js';
import './selectors-BgvhR9tA.js';
import './_url-C5lJURGN.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './index-BtctqgmI.js';
import './index-Bn9og1vQ.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './index-BsUJTjY1.js';
import './index-DTt8RGNw.js';
const y = A(({ css: i }) => ({
    container: i`
    border: 1px solid ${s.colorSplit};
    border-radius: 8px;
    color: ${s.colorText};
    background: ${s.colorBgContainer};
  `,
    desc: i`
    color: ${s.colorTextTertiary};
    text-align: center;
  `,
    form: i`
    width: 100%;
    max-width: 300px;
  `,
  })),
  z = e.memo(
    ({
      children: i,
      background: a,
      title: u,
      description: t,
      avatar: n,
      animation: f,
      className: l,
      gap: c = 16,
      ...r
    }) =>
      o.jsxs(b, {
        className: v(y.form, l),
        gap: c,
        ...r,
        children: [
          o.jsx(I, {
            animation: f,
            avatar: n,
            background: a ?? s.colorFillContent,
            gap: 12,
            size: 80,
          }),
          o.jsxs(p, {
            gap: 8,
            width: '100%',
            children: [
              o.jsx(p, {
                style: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
                children: u,
              }),
              o.jsx(p, { className: y.desc, children: t }),
            ],
          }),
          i,
        ],
      }),
  ),
  E = (i, a) => {
    const [u, t] = e.useState('0 KB/s'),
      [n, f] = e.useState('-'),
      l = e.useRef(a),
      c = e.useRef(Date.now());
    return (
      e.useEffect(() => {
        const r = Date.now(),
          x = (r - c.current) / 1e3;
        if (a > 0 && x > 1) {
          const g = Math.max(0, (a - l.current) / x);
          t(_(g));
          const h = (i - a) / g;
          (f(F(h)), (l.current = a), (c.current = r));
        }
      }, [a]),
      { downloadSpeed: u, remainingTime: n }
    );
  },
  Wo = e.memo(({ model: i, onSuccessDownload: a, extraAction: u }) => {
    const { t } = B(['modelProvider', 'error']),
      [n, f] = e.useState(i),
      [l, c] = e.useState(0),
      [r, x] = e.useState(0),
      { remainingTime: g, downloadSpeed: w } = E(r, l),
      h = e.useMemo(() => (r ? Number(((l / r) * 100).toFixed(1)) : 0), [l, r]),
      C = e.useCallback((d) => {
        (d.completed && c(d.completed), d.total && x(d.total));
      }, []),
      {
        mutate: P,
        isValidating: m,
        error: j,
      } = D(
        ['ollama.downloadModel', n],
        async () => (
          await T.downloadModel({ model: n, provider: 'ollama' }, { onProgress: C }),
          !0
        ),
        { onSuccess: a },
      );
    return o.jsxs(b, {
      gap: 16,
      paddingBlock: 32,
      style: { width: '100%' },
      children: [
        o.jsx(z, {
          avatar: o.jsx(W, { color: s.colorPrimary, size: 64 }),
          description: t(m ? 'ollama.download.desc' : 'ollama.unlock.description'),
          title: m ? t('ollama.download.title', { model: n }) : t('ollama.unlock.title'),
          children:
            !m &&
            o.jsx(R, {
              value: n,
              onChange: (d) => {
                f(d.target.value);
              },
            }),
        }),
        m &&
          o.jsxs(p, {
            flex: 1,
            gap: 8,
            style: { maxWidth: 300 },
            width: '100%',
            children: [
              o.jsx($, {
                showInfo: !0,
                percent: h,
                strokeColor: s.colorSuccess,
                trailColor: s.colorSuccessBg,
              }),
              o.jsxs(p, {
                horizontal: !0,
                distribution: 'space-between',
                style: { color: s.colorTextDescription, fontSize: 12 },
                children: [
                  o.jsxs('span', { children: [t('ollama.download.remainingTime'), ': ', g] }),
                  o.jsxs('span', { children: [t('ollama.download.speed'), ': ', w] }),
                ],
              }),
            ],
          }),
        o.jsxs(p, {
          gap: 12,
          style: { maxWidth: 300 },
          width: '100%',
          children: [
            j?.message &&
              o.jsx(M, {
                closable: !0,
                description: j.message,
                showIcon: !1,
                title: t('ollama.download.failed'),
                type: 'error',
              }),
            o.jsx(S, {
              block: !0,
              loading: m,
              style: { marginTop: 8 },
              type: 'primary',
              onClick: () => {
                P();
              },
              children: m
                ? r
                  ? t('ollama.unlock.downloaded', { completed: k(l, 2), total: k(r, 2) })
                  : t('ollama.unlock.starting')
                : t('ollama.unlock.confirm'),
            }),
            m
              ? o.jsx(S, {
                  onClick: () => {
                    T.abortPull();
                  },
                  children: t('ollama.unlock.cancel'),
                })
              : u,
          ],
        }),
      ],
    });
  });
export { Wo as default };
