import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as u, f as E, k as B, ax as I, F as x, B as k, aJ as z } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { D as _ } from './Drawer-DySjaNpR.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as K, C as W } from './FileTree-d6p9eI8l.js';
import { g as S } from './index-Br6hqyew.js';
import { F as $ } from './index-IVfJW6S-.js';
import { u as H, E as O, R as G, a as J, b as U, c as q } from './index-CMcqKxKW.js';
import { I as y } from './index-OkOG2AHU.js';
import { R as Q } from './ReactCodemirrorNode-BfJ0IybP.js';
import { R as X, a as Y } from './index-BhTv9jof.js';
import { F } from './index-5nC5GwBn.js';
import { P as Z } from './index-ChoXdYII.js';
import { A as V } from './index-BaHZowoE.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './Drawer-Blxnywp3.js';
import './Markdown-Mtmmwid1.js';
import './index-D986vWty.js';
import './Snippet-B4YU4vnL.js';
import './Spotlight-D7beHiMz.js';
import './useTranslation-BcQ_3h0b.js';
import './image-nnCaCTxV.js';
import './index-YiLuNMTk.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-B2Jw6NRR.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './index-BGyEEg7z.js';
import './index-Divuvd5l.js';
import './index-D5iTNnJN.js';
import './katex-BzTkCl_B.js';
import './Block-DDntSWi2.js';
import './ScrollShadow-Dm9kdU7B.js';
import './index-DWJ36R-D.js';
import './index-BBDwVZNV.js';
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
import './FormGroup-DGnHhsIY.js';
import './index-BfwjtmVb.js';
import './form-CzkHLuiW.js';
import './engine-compile-CWG9UysY.js';
import './Menu-Dl6ttHxv.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './Popover-Cg4CTqoX.js';
import './parseTrigger-BVMOpYJv.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './TextArea-CHeYteyg.js';
import './style-Bc_3l5BM.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './Select-Bh2jXi9V.js';
import './InputNumber-DGocrXJO.js';
import './index-GXVeGAZV.js';
import './PlusOutlined-Budj8ek_.js';
import './index-CaOmqfDS.js';
import './Input-C_EgL0SG.js';
import './ActionIconGroup-DGEsztGU.js';
import './DropdownMenu-CEFIlaZw.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './Dropdown-DdDP6pcJ.js';
import './index-BHffy9NV.js';
import './Dropdown-CemyFDx1.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
const w = E(({ css: i }) => ({
    editorWrapper: i`
    min-height: 200px;
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${B.colorBorder};
    border-radius: 8px;
  `,
    wrapper: i`
    max-width: 798px;
    margin-inline: auto;
    padding-block: 0;
    padding-inline: 24px;
  `,
  })),
  tt = [G, J, Q, U, X, Y, q],
  P = s.memo(({ name: i, form: r, initialValues: o, onSubmit: p }) => {
    const { t: e } = u('setting'),
      a = H(),
      m = s.useRef(o.content);
    (s.useEffect(() => {
      r.setFieldsValue(o);
    }, [o]),
      s.useEffect(() => {
        m.current = o.content;
      }, [o.content]),
      s.useEffect(() => {
        if (a)
          try {
            setTimeout(() => {
              o.content && a.setDocument('markdown', o.content);
            }, 100);
          } catch {
            setTimeout(() => {
              a.setDocument('markdown', o.content);
            }, 100);
          }
      }, [a, o.content]));
    const l = s.useCallback(
        (h) => {
          const c = h.getDocument('markdown') || '';
          c !== m.current && ((m.current = c), r.setFieldValue('content', c));
        },
        [r],
      ),
      g = [
        {
          children: t.jsx(y, { disabled: !0, readOnly: !0, value: i }),
          desc: e('agentSkillEdit.nameDesc'),
          label: e('settingAgent.name.title'),
        },
        {
          children: t.jsx(y.TextArea, {
            autoSize: { maxRows: 4, minRows: 2 },
            placeholder: e('agentSkillModal.descriptionPlaceholder'),
          }),
          desc: e('agentSkillEdit.descriptionDesc'),
          label: e('agentSkillModal.description'),
          name: 'description',
        },
        {
          children: t.jsx('div', {
            className: w.editorWrapper,
            children: t.jsx(O, {
              content: '',
              editor: a,
              lineEmptyPlaceholder: e('agentSkillEdit.instructionsPlaceholder'),
              placeholder: e('agentSkillEdit.instructionsPlaceholder'),
              plugins: tt,
              style: { paddingBottom: 48 },
              type: 'text',
              variant: 'chat',
              onTextChange: l,
            }),
          }),
          desc: e('agentSkillEdit.instructionsDesc'),
          label: e('agentSkillEdit.instructions'),
        },
      ];
    return t.jsx('div', {
      className: w.wrapper,
      children: t.jsx($, {
        form: r,
        gap: 0,
        initialValues: o,
        items: g,
        itemsType: 'flat',
        layout: 'vertical',
        variant: 'borderless',
        onFinish: p,
        children: t.jsx(F.Item, {
          hidden: !0,
          name: 'content',
          children: t.jsx(y, { type: 'hidden' }),
        }),
      }),
    });
  });
P.displayName = 'SkillEditForm';
const j = E(({ css: i, cssVar: r }) => ({
    divider: i`
    flex-shrink: 0;
    width: 1px;
    background: ${r.colorBorderSecondary};
  `,
    left: i`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,
    right: i`
    container-type: size;
    overflow: auto;
    flex: 1;
  `,
  })),
  et = (i) => {
    const r = {},
      o = (p) => {
        for (const e of p)
          e.type === 'file' && e.content !== void 0
            ? (r[e.path] = e.content)
            : e.children && o(e.children);
      };
    return (o(i), r);
  },
  ot = s.memo(({ skillId: i, open: r, onClose: o }) => {
    const { t: p } = u('setting'),
      { t: e } = u('plugin'),
      { t: a } = u('common'),
      { message: m } = I.useApp(),
      [l, g] = s.useState('SKILL.md'),
      [h, c] = s.useState(!1),
      [v] = F.useForm(),
      { data: b, isLoading: R } = S((n) => n.useFetchAgentSkillDetail)(r ? i : void 0),
      D = S((n) => n.updateAgentSkill),
      A = S((n) => n.deleteAgentSkill),
      d = b?.skillDetail,
      f = b?.resourceTree ?? [],
      C = s.useMemo(() => et(f), [f]),
      T = s.useMemo(
        () => ({
          content: d?.content || '',
          description: d?.description || d?.manifest?.description || '',
        }),
        [d],
      ),
      L = async (n) => {
        c(!0);
        try {
          (await D({ content: n.content, id: i, manifest: { description: n.description } }),
            m.success(p('agentSkillEdit.saveSuccess')),
            o());
        } finally {
          c(!1);
        }
      },
      M = async () => {
        (await A(i), m.success(e('dev.deleteSuccess')), o());
      },
      N = t.jsxs(x, {
        horizontal: !0,
        flex: 1,
        gap: 12,
        justify: 'space-between',
        children: [
          t.jsx(Z, {
            arrow: !1,
            cancelText: a('cancel'),
            okText: a('ok'),
            placement: 'topLeft',
            title: e('dev.confirmDeleteDevPlugin'),
            okButtonProps: { danger: !0, type: 'primary' },
            onConfirm: M,
            children: t.jsx(k, { danger: !0, children: a('delete') }),
          }),
          t.jsxs(x, {
            horizontal: !0,
            gap: 12,
            children: [
              t.jsx(k, { onClick: o, children: a('cancel') }),
              t.jsx(k, {
                loading: h,
                type: 'primary',
                onClick: () => {
                  v.submit();
                },
                children: e('dev.update'),
              }),
            ],
          }),
        ],
      });
    return t.jsx(_, {
      destroyOnHidden: !0,
      containerMaxWidth: 'auto',
      footer: N,
      height: '100vh',
      open: r,
      placement: 'bottom',
      push: !1,
      title: p('agentSkillEdit.title'),
      styles: { body: { padding: 0 }, bodyContent: { height: '100%' } },
      onClose: (n) => {
        (n.stopPropagation(), o());
      },
      children: R
        ? t.jsx(z, { active: !0, paragraph: { rows: 8 }, style: { padding: 16 } })
        : t.jsxs(x, {
            horizontal: !0,
            height: '100%',
            onClick: (n) => {
              n.stopPropagation();
            },
            children: [
              t.jsx('div', {
                className: j.left,
                children: t.jsx(K, { resourceTree: f, selectedFile: l, onSelectFile: g }),
              }),
              t.jsx('div', { className: j.divider }),
              t.jsxs('div', {
                className: j.right,
                children: [
                  t.jsx('div', {
                    style: {
                      display: l === 'SKILL.md' ? void 0 : 'none',
                      height: '100%',
                      overflow: 'auto',
                    },
                    children: t.jsx(P, { form: v, initialValues: T, name: d?.name, onSubmit: L }),
                  }),
                  l !== 'SKILL.md' &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx(V, {
                          banner: !0,
                          showIcon: !0,
                          message: p('agentSkillEdit.fileReadonly'),
                          type: 'info',
                        }),
                        t.jsx(W, { contentMap: C, selectedFile: l, skillDetail: d }, l),
                      ],
                    }),
                ],
              }),
            ],
          }),
    });
  });
ot.displayName = 'AgentSkillEdit';
export { ot as default };
