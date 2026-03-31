import { U as a } from './index-C8UyLGsD.js';
const e = (t) => t.chatUploadFileList,
  o = (t) => t.chatContextSelections,
  i = (t) => t.chatUploadFileList.map((s) => s.file),
  c = (t) => t.chatUploadFileList.length > 0,
  l = (t) => t.chatContextSelections.length > 0,
  n = (t) =>
    t.chatUploadFileList.some((s) => a.has(s.status) || (s.tasks && !s.tasks?.finishEmbedding)),
  p = {
    chatContextSelectionHasItem: l,
    chatContextSelections: o,
    chatRawFileList: i,
    chatUploadFileList: e,
    chatUploadFileListHasItem: c,
    isUploadingFiles: n,
  };
export { p as f };
