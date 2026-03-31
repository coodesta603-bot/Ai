import { y as t } from './index-C8UyLGsD.js';
const o = {
    oauth: t('/api/auth'),
    proxy: t('/webapi/proxy'),
    gateway: t('/webapi/plugin/gateway'),
    trace: t('/webapi/trace'),
    chat: (a) => t(`/webapi/chat/${a}`),
    models: (a) => t(`/webapi/models/${a}`),
    modelPull: (a) => t(`/webapi/models/${a}/pull`),
    stt: t('/webapi/stt/openai'),
    tts: (a) => t(`/webapi/tts/${a}`),
    edge: t('/webapi/tts/edge'),
    microsoft: t('/webapi/tts/microsoft'),
  },
  i = {
    auth: '/lobehub-oidc/auth',
    token: t('/market/oidc/token'),
    handoff: t('/market/oidc/handoff'),
    desktopCallback: '/lobehub-oidc/callback/desktop',
  };
export { o as A, i as M };
