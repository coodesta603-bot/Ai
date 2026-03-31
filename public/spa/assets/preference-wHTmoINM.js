import { D as o } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
const n = (e) => e.preference.useCmdEnterToSend || !1,
  t = (e) => e.preference.topicDisplayMode || o.topicDisplayMode,
  r = (e) => e.preference.hideSyncAlert,
  i = (e) => e.preference.guide?.moveSettingsToAvatar,
  s = (e) => e.preference.guide?.uploadFileInKnowledgeBase,
  c = (e) => typeof e.preference.guide?.moveSettingsToAvatar != 'boolean',
  p = (e) => e.isUserStateInit,
  l = {
    hideSettingsMoveGuide: i,
    hideSyncAlert: r,
    isPreferenceInit: p,
    shouldTriggerFileInKnowledgeBaseTip: c,
    showUploadFileInKnowledgeBaseTip: s,
    topicDisplayMode: t,
    useCmdEnterToSend: n,
  };
export { l as p };
