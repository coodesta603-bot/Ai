import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as m, d as l, c, k as d, F as p, A as h, bz as f, aE as x } from './index-C8UyLGsD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as u, U as y, F as g } from './index-BWpyyABr.js';
import { W as j } from './index-9IUPw_JO.js';
import { S as v, M as S } from './const-lbjNOSiN.js';
import { N as C } from './index-0kThxxSh.js';
import { bq as N } from '../vendor/vendor-icons-BHMUH78i.js';
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
import './useQueryRoute-neZlfwd2.js';
import './base-AbuBx_QK.js';
import './navigation-BPKNAvqq.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './index-DLsdvBKx.js';
import './Block-DDntSWi2.js';
import './MarketAuthProvider-B-hpwwGW.js';
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
const k = m(({ css: o, cssVar: r }) => ({
    headerContainer: o`
    border-block-end: 1px solid var(--header-border-color, ${r.colorBorderSecondary});
  `,
  })),
  D = a.memo(() => {
    const o = l(),
      r = c(),
      s = () => {
        const i = o.pathname.split('/').filter(Boolean)[1];
        if (i === 'group_agent') {
          r('/community/agent');
          return;
        }
        i && ['agent', 'model', 'provider', 'mcp', 'skill'].includes(i)
          ? r(f('/community', i))
          : r('/community');
      },
      n = { '--header-border-color': d.colorBorderSecondary };
    return t.jsx(C, {
      className: k.headerContainer,
      right: t.jsx(y, {}),
      style: n,
      left: t.jsxs(p, {
        horizontal: !0,
        align: 'center',
        flex: 1,
        gap: 8,
        children: [t.jsx(h, { icon: N, size: 'small', onClick: s }), t.jsx(u, {})],
      }),
      styles: { left: { flex: 1 } },
    });
  }),
  e = m(({ css: o }) => ({
    contentContainer: o`
    min-height: 100%;
  `,
    mainContainer: o`
    overflow-y: auto;
  `,
    spacer: o`
    flex: 1;
  `,
  })),
  L = a.memo(() =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx(D, {}),
        t.jsx(p, {
          className: e.mainContainer,
          height: '100%',
          id: v,
          width: '100%',
          children: t.jsxs(j, {
            className: e.contentContainer,
            gap: 32,
            minWidth: S,
            paddingBlock: 16,
            wrapperStyle: { minHeight: '100%', position: 'relative' },
            children: [t.jsx(x, {}), t.jsx('div', { className: e.spacer }), t.jsx(g, {})],
          }),
        }),
      ],
    }),
  );
L.displayName = 'DesktopDiscoverDetailLayout';
export { L as default };
