import { w as d, x as T, y as m, C as g, u as _, h as C } from './index-Br6hqyew.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as E, g as y, $ as b, T as h, j as S } from './index-C8UyLGsD.js';
import { c1 as N } from '../vendor/vendor-icons-BHMUH78i.js';
const f = 4,
  p = (r, t) => `
  cursor: default;
  user-select: none;
  display: inline-flex;
  margin-inline-end: ${f}px;

  &.selected {
    border-radius: ${t};
    outline: 2px solid ${r};
  }
`,
  D = E(({ css: r, cssVar: t }) => ({
    commandTag: r`
    ${p('#722ED1', t.borderRadius)}
  `,
    skillTag: r`
    ${p(t.colorPrimary, t.borderRadius)}
  `,
    toolTag: r`
    ${p(t.colorWarning, t.borderRadius)}
  `,
  })),
  I = { command: 'purple', skill: 'blue', tool: 'gold' },
  L = {
    command: 'actionTag.category.command',
    skill: 'actionTag.category.skill',
    tool: 'actionTag.category.tool',
  },
  k = {
    command: 'actionTag.tooltip.command',
    skill: 'actionTag.tooltip.skill',
    tool: 'actionTag.tooltip.tool',
  },
  M = { command: 'commandTag', skill: 'skillTag', tool: 'toolTag' },
  O = c.memo(({ category: r, label: t }) => {
    const { t: e } = y('editor'),
      n = e(L[r]),
      i = e(k[r]),
      u = I[r],
      a = M[r];
    return o.jsx('span', {
      className: S(D[a]),
      children: o.jsx(b, {
        title: o.jsxs('div', {
          children: [
            o.jsx('div', { style: { fontWeight: 500 }, children: t }),
            o.jsx('div', { children: n }),
            o.jsx('div', { children: i }),
          ],
        }),
        children: o.jsx(h, { color: u, variant: 'filled', children: t }),
      }),
    });
  });
O.displayName = 'ActionTagView';
class s extends d {
  __actionType;
  __actionCategory;
  __actionLabel;
  static getType() {
    return 'action-tag';
  }
  static clone(t) {
    return new s(t.__actionType, t.__actionCategory, t.__actionLabel, t.__key);
  }
  static importJSON(t) {
    return R(t.actionType, t.actionCategory, t.actionLabel).updateFromJSON(t);
  }
  static importDOM() {
    return null;
  }
  constructor(t, e, n, i) {
    (super(i), (this.__actionType = t), (this.__actionCategory = e), (this.__actionLabel = n));
  }
  get actionType() {
    return this.__actionType;
  }
  get actionCategory() {
    return this.__actionCategory;
  }
  get actionLabel() {
    return this.__actionLabel;
  }
  exportDOM() {
    return { element: document.createElement('span') };
  }
  createDOM(t) {
    const e = document.createElement('span');
    return (T(e, t.theme.actionTag), e);
  }
  getTextContent() {
    return this.__actionLabel;
  }
  isInline() {
    return !0;
  }
  updateDOM() {
    return !1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      actionCategory: this.__actionCategory,
      actionLabel: this.__actionLabel,
      actionType: this.__actionType,
    };
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t);
  }
  decorate(t) {
    const e = m(t)?.getDecorator(s.getType());
    return e
      ? typeof e == 'function'
        ? e(this, t)
        : { queryDOM: e.queryDOM, render: e.render(this, t) }
      : null;
  }
  renderHeadless({ key: t }) {
    return c.createElement(O, {
      category: this.__actionCategory,
      key: t,
      label: this.__actionLabel,
    });
  }
}
function R(r, t, e) {
  return g(new s(r, t, e));
}
function F(r) {
  return r.getType() === s.getType();
}
const x = c.memo(({ topicId: r, fallbackTitle: t }) => {
  const { t: e } = y('topic'),
    n = _(C.getTopicById(r))?.title || t,
    i = _((a) => a.switchTopic),
    u = c.useCallback(
      (a) => {
        (a.stopPropagation(), r && i(r));
      },
      [i, r],
    );
  return o.jsx('span', {
    style: {
      cursor: r ? 'pointer' : 'default',
      display: 'inline-flex',
      marginInlineEnd: f,
      userSelect: 'none',
    },
    onClick: u,
    children: o.jsx(h, {
      color: 'green',
      icon: o.jsx(N, { size: 12 }),
      variant: 'outlined',
      children: n || e('defaultTitle'),
    }),
  });
});
x.displayName = 'ReferTopicView';
class l extends d {
  __topicId;
  __topicTitle;
  static getType() {
    return 'refer-topic';
  }
  static clone(t) {
    return new l(t.__topicId, t.__topicTitle, t.__key);
  }
  static importJSON(t) {
    return j(t.topicId, t.topicTitle).updateFromJSON(t);
  }
  static importDOM() {
    return null;
  }
  constructor(t, e, n) {
    (super(n), (this.__topicId = t), (this.__topicTitle = e));
  }
  get topicId() {
    return this.__topicId;
  }
  get topicTitle() {
    return this.__topicTitle;
  }
  exportDOM() {
    return { element: document.createElement('span') };
  }
  createDOM(t) {
    const e = document.createElement('span');
    return (T(e, t.theme.referTopic), e);
  }
  getTextContent() {
    return this.__topicTitle;
  }
  isInline() {
    return !0;
  }
  updateDOM() {
    return !1;
  }
  exportJSON() {
    return { ...super.exportJSON(), topicId: this.__topicId, topicTitle: this.__topicTitle };
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t);
  }
  decorate(t) {
    const e = m(t)?.getDecorator(l.getType());
    return e
      ? typeof e == 'function'
        ? e(this, t)
        : { queryDOM: e.queryDOM, render: e.render(this, t) }
      : null;
  }
  renderHeadless({ key: t }) {
    return c.createElement(x, {
      fallbackTitle: this.__topicTitle,
      key: t,
      topicId: this.__topicId,
    });
  }
}
function j(r, t) {
  return g(new l(r, t));
}
function v(r) {
  return r.getType() === l.getType();
}
export { R as $, O as A, x as R, F as a, s as b, l as c, v as d, j as e };
