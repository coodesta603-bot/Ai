import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { bf as p, bg as f } from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
const s = {
    csv: '#43aa55',
    doc: '#2b56b1',
    docx: '#2b56b1',
    pdf: '#de2429',
    ppt: '#c43e1b',
    pptx: '#c43e1b',
    text: '#607180',
    txt: '#607180',
    xls: '#2f6d3f',
    xlsx: '#2f6d3f',
  },
  d = l.memo(({ fileName: t, size: o, variant: a = 'raw', isDirectory: c }) => {
    if (c) return r.jsx(p, { color: 'gold', size: o, type: 'folder', variant: 'color' });
    if (Object.keys(s).some((e) => t?.toLowerCase().endsWith(`.${e}`))) {
      const e = t.split('.').pop()?.toLowerCase();
      return r.jsx(p, { color: s[e], filetype: e?.toUpperCase(), size: o, type: 'file' });
    }
    return r.jsx(f, { filename: t, size: o, type: 'file', variant: a });
  });
export { d as F };
