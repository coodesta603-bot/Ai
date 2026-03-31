import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as I,
  by as w,
  F as C,
  Z as A,
  B as M,
  j as _,
  f as S,
  I as v,
  d as T,
  k as D,
  aE as B,
} from './index-C8UyLGsD.js';
import { W as F } from './index-9IUPw_JO.js';
import { M as N } from './const-lbjNOSiN.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as P, U, S as W } from './index-BWpyyABr.js';
import { u as H } from './MarketAuthProvider-B-hpwwGW.js';
import { N as R } from './index-0kThxxSh.js';
import { D as E } from './DropdownMenu-CEFIlaZw.js';
import { u as V } from './useQueryRoute-neZlfwd2.js';
import { a as $, b as z } from './navigation-BPKNAvqq.js';
import { D as l } from './index-C67aJrLL.js';
import { S as d } from './skills-Dr1Utsva.js';
import { M as n } from './mcp-bmlNDBWs.js';
import { P as g } from './providers-CynUfYza.js';
import { M as m } from './models-CeBX_1mO.js';
import { A as k } from './assistants-Bnb1hBSy.js';
import { b4 as L, c7 as O } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './index-D0ZMbsXU.js';
import './SearchBar-BtAHEw-s.js';
import './Input-C_EgL0SG.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './Spotlight-D7beHiMz.js';
import './index-BJ9KbyB2.js';
import './withSuspense-twnyXsUR.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './index-DLsdvBKx.js';
import './Block-DDntSWi2.js';
import './_url-C5lJURGN.js';
import './Modal-Dd2pIxVd.js';
import './Drawer-Blxnywp3.js';
import './index-DYqiTmoN.js';
import './row-cnvQQvQf.js';
import './Pagination-Cg0T9GpR.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-Bc7JilPY.js';
import './index-BOZ0hr8D.js';
import './useBubbleLock-D8efMGR_.js';
import './events-NnJKY1rz.js';
import './Trans-B9Jc6Abr.js';
import './TextArea-CHeYteyg.js';
import './index-CopzJgBK.js';
import './EmojiPicker-BU1kX5oO.js';
import './useTranslation-BcQ_3h0b.js';
import './emojiPicker-fXP8_c7a.js';
import './Popover-Cg4CTqoX.js';
import './parseTrigger-BVMOpYJv.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './Tabs-Bq_UMJa3.js';
import './index-CXy3GcSN.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './PlusOutlined-Budj8ek_.js';
import './Dropdown-CemyFDx1.js';
import './index-C2-gySBL.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-CqsUaYIW.js';
import './index-Ciqn2WuZ.js';
import './general-Bhxy39g6.js';
import './store-8fdqmFXe.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './SiX-DO6VXJ8i.js';
import './SiGithub-Bv-kH4Y-.js';
import './tools-grZ3gd_F.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './ToggleLeftPanelButton-MPNqlyqh.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './index-CaOmqfDS.js';
import './base-AbuBx_QK.js';
var y = ((t) => (
  (t.CreatedAt = 'createdAt'),
  (t.Identifier = 'identifier'),
  (t.Title = 'title'),
  t
))(y || {});
const h = S(({ css: t }) => ({
    footer: t`
    min-height: 320px;
    padding-block-start: 32px;

    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 512px auto;
  `,
    footer_dark: t`
    background-image: url('/images/community_footer_dark.webp');
    background-blend-mode: screen;
  `,
    footer_light: t`
    background-image: url('/images/community_footer_light.webp');
    background-blend-mode: multiply;
  `,
  })),
  Q = s.memo(() => {
    const { t } = I('discover'),
      r = w(),
      { isAuthenticated: a, signIn: c } = H(),
      [u, i] = s.useState(!1),
      p = s.useCallback(async () => {
        i(!0);
        try {
          await c();
        } catch {}
        i(!1);
      }, [c]);
    return a
      ? e.jsx(P, {})
      : e.jsxs(C, {
          align: 'center',
          className: _(h.footer, r ? h.footer_dark : h.footer_light),
          flex: 'none',
          gap: 4,
          children: [
            e.jsx(A, {
              strong: !0,
              align: 'center',
              as: 'h2',
              fontSize: 22,
              children: t('footer.title'),
            }),
            e.jsx(A, {
              align: 'center',
              fontSize: 16,
              type: 'secondary',
              children: t('footer.desc'),
            }),
            e.jsx(M, {
              loading: u,
              type: 'primary',
              style: { marginTop: 16 },
              onClick: p,
              children: t('user.login'),
            }),
          ],
        });
  }),
  q = s.memo(() => {
    const { t } = I('discover'),
      r = $(),
      { sort: a } = z(),
      c = V(),
      u = s.useMemo(() => r.split('community/')[1], [r]),
      i = s.useMemo(() => {
        switch (u) {
          case l.Assistants:
            return [
              { key: k.Recommended, label: t('assistants.sorts.recommended') },
              { key: k.UpdatedAt, label: t('assistants.sorts.updatedAt') },
              { key: k.MostUsage, label: t('assistants.sorts.mostUsage') },
              { key: k.HaveSkills, label: t('assistants.sorts.haveSkills') },
            ];
          case l.Plugins:
            return [
              { key: y.CreatedAt, label: t('plugins.sorts.createdAt') },
              { key: y.Title, label: t('plugins.sorts.title') },
              { key: y.Identifier, label: t('plugins.sorts.identifier') },
            ];
          case l.Models:
            return [
              { key: m.ReleasedAt, label: t('models.sorts.releasedAt') },
              { key: m.Identifier, label: t('models.sorts.identifier') },
              { key: m.ContextWindowTokens, label: t('models.sorts.contextWindowTokens') },
              { key: m.InputPrice, label: t('models.sorts.inputPrice') },
              { key: m.OutputPrice, label: t('models.sorts.outputPrice') },
              { key: m.ProviderCount, label: t('models.sorts.providerCount') },
            ];
          case l.Providers:
            return [
              { key: g.Default, label: t('providers.sorts.default') },
              { key: g.Identifier, label: t('providers.sorts.identifier') },
              { key: g.ModelCount, label: t('providers.sorts.modelCount') },
            ];
          case l.Mcp:
            return [
              { key: n.Recommended, label: t('mcp.sorts.recommended') },
              { key: n.IsFeatured, label: t('mcp.sorts.isFeatured') },
              { key: n.IsValidated, label: t('mcp.sorts.isValidated') },
              { key: n.InstallCount, label: t('mcp.sorts.installCount') },
              { key: n.RatingCount, label: t('mcp.sorts.ratingCount') },
              { key: n.UpdatedAt, label: t('mcp.sorts.updatedAt') },
              { key: n.CreatedAt, label: t('mcp.sorts.createdAt') },
            ];
          case l.Skills:
            return [
              { key: d.InstallCount, label: t('skills.sorts.installCount') },
              { key: d.UpdatedAt, label: t('skills.sorts.updatedAt') },
              { key: d.CreatedAt, label: t('skills.sorts.createdAt') },
              { key: d.Stars, label: t('skills.sorts.stars') },
              { key: d.Name, label: t('skills.sorts.name') },
            ];
          default:
            return [];
        }
      }, [t, u]),
      p = s.useMemo(() => {
        if (a) {
          const o = i.find((b) => String(b.key) === a);
          if (o) return o;
        }
        return i[0];
      }, [i, a]),
      j = (o) => {
        c.push(r, { query: { sort: o } });
      },
      f = s.useMemo(
        () =>
          i.map((o) => ({
            checked: o.key === p?.key,
            closeOnClick: !0,
            key: o.key,
            label: o.label,
            onCheckedChange: (b) => {
              b && j(String(o.key));
            },
            type: 'checkbox',
          })),
        [p?.key, j, i],
      );
    return f.length === 0
      ? null
      : e.jsx(E, {
          items: f,
          trigger: 'both',
          children: e.jsxs(M, {
            'data-testid': 'sort-dropdown',
            'icon': e.jsx(v, { icon: O }),
            'type': 'text',
            'children': [p?.label ?? f[0]?.label, e.jsx(v, { icon: L })],
          }),
        });
  }),
  X = S(({ css: t, cssVar: r }) => ({
    headerContainer: t`
    border-block-end: 1px solid var(--header-border-color, ${r.colorBorderSecondary});
  `,
  })),
  Z = s.memo(() => {
    const r = T().pathname === '/',
      a = { '--header-border-color': D.colorBorderSecondary };
    return e.jsx(R, {
      className: X.headerContainer,
      left: e.jsx(W, {}),
      style: a,
      right: !r && e.jsxs(e.Fragment, { children: [e.jsx(q, {}), e.jsx(U, {})] }),
      styles: { left: { flex: 1 } },
    });
  }),
  x = S(({ css: t }) => ({
    contentContainer: t`
    min-height: 100%;
  `,
    mainContainer: t`
    overflow-y: auto;
  `,
    spacer: t`
    flex: 1;
  `,
  })),
  Te = () =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, {}),
        e.jsx(C, {
          className: x.mainContainer,
          height: '100%',
          width: '100%',
          children: e.jsxs(F, {
            className: x.contentContainer,
            gap: 16,
            minWidth: N,
            style: { paddingBottom: 56, paddingTop: 16 },
            wrapperStyle: { minHeight: '100%', position: 'relative' },
            children: [
              e.jsx(C, {
                gap: 16,
                style: { paddingBlockEnd: 40 },
                width: '100%',
                children: e.jsx(B, {}),
              }),
              e.jsx('div', { className: x.spacer }),
              e.jsx(Q, {}),
            ],
          }),
        }),
      ],
    });
export { Te as default };
