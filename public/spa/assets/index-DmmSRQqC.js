import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { g as l, v as p, w as u, b as f, N as g } from './index-C8UyLGsD.js';
import { u as C } from './index-Br6hqyew.js';
import { u as d } from './store-8fdqmFXe.js';
import { A as h } from './Action-BIzXeFfi.js';
import { P as x } from './index-ChoXdYII.js';
import { Y as y } from '../vendor/vendor-icons-BHMUH78i.js';
const M = () => {
    const e = C((t) => t.clearMessage),
      s = d((t) => t.clearChatUploadFileList);
    return o.useCallback(async () => {
      (await e(), s());
    }, [s, e]);
  },
  v = o.memo(() => {
    const { t: e } = l('setting'),
      s = p(u.getHotkeyById(f.ClearCurrentMessages)),
      t = M(),
      [a, n] = o.useState(!1),
      i = g(),
      c = a ? void 0 : e('clearCurrentMessages', { ns: 'chat' }),
      m = i ? 'top' : 'topRight';
    return r.jsx(x, {
      arrow: !1,
      okButtonProps: { danger: !0, type: 'primary' },
      open: a,
      placement: m,
      title: r.jsx('div', {
        style: { marginBottom: '8px', whiteSpace: 'pre-line', wordBreak: 'break-word' },
        children: e('confirmClearCurrentMessages', { ns: 'chat' }),
      }),
      onConfirm: t,
      onOpenChange: n,
      children: r.jsx(h, {
        icon: y,
        title: c,
        tooltipProps: { hotkey: s, placement: 'bottom', styles: { root: { maxWidth: 'none' } } },
      }),
    });
  });
export { v as C, M as u };
