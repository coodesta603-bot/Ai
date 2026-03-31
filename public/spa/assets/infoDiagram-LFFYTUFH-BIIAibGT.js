import { _ as e, l as a, K as p, e as s } from './mermaid.core-BJEGfNDJ.js';
import { p as m } from './treemap-KZPCXAKY-DI6OUkxV.js';
import './index-C8UyLGsD.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './purify.es-r8glNMJW.js';
import './step-B6EOmCqb.js';
import './isEmpty-D-XN117C.js';
import './_baseIsEqual-wSwq2BXm.js';
import './_baseUniq-qDkQdKzt.js';
import './_basePickBy-BUwU2of8.js';
import './clone-DnI83iKp.js';
var n = {
    parse: e(async (r) => {
      const t = await m('info', r);
      a.debug(t);
    }, 'parse'),
  },
  g = { version: '11.13.0' },
  v = e(() => g.version, 'getVersion'),
  d = { getVersion: v },
  c = e((r, t, i) => {
    a.debug(
      `rendering info diagram
` + r,
    );
    const o = p(t);
    (s(o, 100, 400, !0),
      o
        .append('g')
        .append('text')
        .attr('x', 100)
        .attr('y', 40)
        .attr('class', 'version')
        .attr('font-size', 32)
        .style('text-anchor', 'middle')
        .text(`v${i}`));
  }, 'draw'),
  l = { draw: c },
  L = { parser: n, db: d, renderer: l };
export { L as diagram };
