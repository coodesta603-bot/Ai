import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { M as b } from './Modal-Dd2pIxVd.js';
import { a as h } from './imperative-Cstfu8oK.js';
import { g as d, k as g, F as f } from './index-C8UyLGsD.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { C, c as x } from './plugins-BlQtwlHJ.js';
import { d as L, g as e, H as a, E as v, e as j, u as B } from './index-CMcqKxKW.js';
import {
  bf as E,
  bg as P,
  bh as R,
  bi as S,
  bj as I,
  bk as M,
  bl as T,
  bm as w,
  bn as q,
  ai as H,
  bo as O,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { C as D } from './ChatInputActionBar-D4T5Vfpz.js';
import { a as F, R as N } from './index-BhTv9jof.js';
import './Drawer-Blxnywp3.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './Dropdown-DdDP6pcJ.js';
import './Menu-Dl6ttHxv.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-BSuyBMRZ.js';
import './index-BHffy9NV.js';
import './Dropdown-CemyFDx1.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './index-BfwjtmVb.js';
import './Popover-Cg4CTqoX.js';
import './parseTrigger-BVMOpYJv.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './ReactCodemirrorNode-BfJ0IybP.js';
import './index-Br6hqyew.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-8fdqmFXe.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './clientModelRuntime-ByjgYOys.js';
import './index-F5T1V14Z.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-sIxU1rKL.js';
import './purify.es-r8glNMJW.js';
import './store-CTAK9tZ0.js';
import './selectors-BgvhR9tA.js';
import './tools-grZ3gd_F.js';
import './ipc-wTHpVC92.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './index-BrpHwoCT.js';
import './store-Cj3bQrT7.js';
import './browser-Cc4eeHpk.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './Block-DDntSWi2.js';
import './Select-Bh2jXi9V.js';
import './InputNumber-DGocrXJO.js';
import './style-Bc_3l5BM.js';
import './index-GXVeGAZV.js';
import './PlusOutlined-Budj8ek_.js';
import './index-CaOmqfDS.js';
import './ReferTopicNode-DHjQF-BV.js';
import './engine-compile-CWG9UysY.js';
import './index-D5iTNnJN.js';
import './katex-BzTkCl_B.js';
import './index-BGyEEg7z.js';
import './index-DWJ36R-D.js';
import './TextArea-CHeYteyg.js';
import './index-OkOG2AHU.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './Input-C_EgL0SG.js';
import './ActionIconGroup-DGEsztGU.js';
import './DropdownMenu-CEFIlaZw.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
const k = p.memo(({ editor: r }) => {
  const { t: o } = d('editor'),
    t = L(r),
    s = p.useMemo(
      () =>
        [
          {
            active: t.isBold,
            icon: E,
            key: 'bold',
            label: o('typobar.bold'),
            onClick: t.bold,
            tooltipProps: { hotkey: e(a.Bold).keys },
          },
          {
            active: t.isItalic,
            icon: P,
            key: 'italic',
            label: o('typobar.italic'),
            onClick: t.italic,
            tooltipProps: { hotkey: e(a.Italic).keys },
          },
          {
            active: t.isUnderline,
            icon: R,
            key: 'underline',
            label: o('typobar.underline'),
            onClick: t.underline,
            tooltipProps: { hotkey: e(a.Underline).keys },
          },
          {
            active: t.isStrikethrough,
            icon: S,
            key: 'strikethrough',
            label: o('typobar.strikethrough'),
            onClick: t.strikethrough,
            tooltipProps: { hotkey: e(a.Strikethrough).keys },
          },
          { type: 'divider' },
          {
            icon: I,
            key: 'bulletList',
            label: o('typobar.bulletList'),
            onClick: t.bulletList,
            tooltipProps: { hotkey: e(a.BulletList).keys },
          },
          {
            icon: M,
            key: 'numberlist',
            label: o('typobar.numberList'),
            onClick: t.numberList,
            tooltipProps: { hotkey: e(a.NumberList).keys },
          },
          { icon: T, key: 'tasklist', label: o('typobar.taskList'), onClick: t.checkList },
          { type: 'divider' },
          {
            active: t.isBlockquote,
            icon: w,
            key: 'blockquote',
            label: o('typobar.blockquote'),
            onClick: t.blockquote,
          },
          { type: 'divider' },
          { icon: q, key: 'math', label: o('typobar.tex'), onClick: t.insertMath },
          {
            active: t.isCode,
            icon: H,
            key: 'code',
            label: o('typobar.code'),
            onClick: t.code,
            tooltipProps: { hotkey: e(a.CodeInline).keys },
          },
          { icon: O, key: 'codeblock', label: o('typobar.codeblock'), onClick: t.codeblock },
        ].filter(Boolean),
      [t],
    );
  return i.jsx(D, {
    left: i.jsx(C, { items: s }),
    style: { background: g.colorFillQuaternary, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  });
});
k.displayName = 'TypoBar';
const U = [...x({ linkPlugin: N }), F, j],
  V = ({ defaultValue: r, editor: o, editorData: t }) => {
    const { content: s, type: l } = p.useMemo(
      () =>
        t && typeof t == 'object' && Object.keys(t).length > 0
          ? { content: JSON.stringify(t), type: 'json' }
          : { content: r || '', type: 'markdown' },
      [t, r],
    );
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(k, { editor: o }),
        i.jsx(f, {
          padding: 16,
          style: { cursor: 'text', maxHeight: '80vh', minHeight: '50vh', overflowY: 'auto' },
          children: i.jsx(v, {
            autoFocus: !0,
            content: s,
            editor: o,
            plugins: U,
            type: l,
            variant: 'chat',
            style: { paddingBottom: 120 },
          }),
        }),
      ],
    });
  },
  _ = p.memo(({ value: r, editorData: o, onConfirm: t, ...s }) => {
    const [l, m] = p.useState(!1),
      { t: c } = d('common'),
      n = B();
    return i.jsx(b, {
      destroyOnHidden: !0,
      cancelText: c('cancel'),
      closable: !1,
      confirmLoading: l,
      okText: c('ok'),
      title: null,
      width: 'min(90vw, 920px)',
      styles: { body: { overflow: 'hidden', padding: 0 } },
      onOk: async () => {
        m(!0);
        const u = n?.getDocument('markdown') || '',
          y = n?.getDocument('json');
        (await t?.(u, y), m(!1));
      },
      ...s,
      children: i.jsx(V, { defaultValue: r, editor: n, editorData: o }),
    });
  }),
  bo = (r) => h(_, r);
export { _ as EditorModal, bo as createEditorModal };
