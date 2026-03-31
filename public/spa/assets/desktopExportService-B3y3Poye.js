import { aW as e, aX as a } from './index-C8UyLGsD.js';
import { j as r } from './index-Br6hqyew.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
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
class m {
  async exportMarkdown(i) {
    const { content: t, fileName: p } = i,
      o = await r.showSaveDialog({
        defaultPath: p,
        filters: [{ extensions: ['md'], name: 'Markdown' }],
        title: e.t('pageEditor.exportDialogTitle', { ns: 'file' }),
      });
    return o.canceled || !o.filePath
      ? { canceled: !0 }
      : (await r.writeFile({ content: t, path: o.filePath }),
        this.showExportSuccessToast(o.filePath),
        { canceled: !1, filePath: o.filePath });
  }
  showExportSuccessToast(i) {
    const t = e.t.bind(e);
    a.success({
      actions: [
        {
          label: t('pageEditor.exportActions.showInFolder', { ns: 'file' }),
          onClick: () => r.openFileFolder(i),
          variant: 'text',
        },
        {
          label: t('pageEditor.exportActions.openFile', { ns: 'file' }),
          onClick: () => r.openLocalFile({ path: i }),
          variant: 'primary',
        },
      ],
      title: t('pageEditor.exportSuccess', { ns: 'file' }),
    });
  }
}
const O = new m();
export { O as desktopExportService };
