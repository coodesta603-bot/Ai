import { H as o, b as s } from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { s as n } from './index-BJ9KbyB2.js';
import { u as a } from './useHotkeyById-Biu1gwiM.js';
const l = (e) =>
    a(
      s.SaveDocument,
      () => {
        e();
      },
      { enableOnContentEditable: !0 },
    ),
  p = () => {
    const { enableScope: e, disableScope: t } = n();
    return (r.useEffect(() => (e(o.Files), () => t(o.Files)), [e, t]), null);
  };
export { l as a, p as u };
