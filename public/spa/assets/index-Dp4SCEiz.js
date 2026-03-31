import { n as p, A as g, I as O } from './index-Br6hqyew.js';
import { j as I } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { A as h } from './index-BAOF5XWg.js';
import './index-C8UyLGsD.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { G as T } from './index-HPKm0oip.js';
const R = (t) => Object.values(t.operations),
  c = (t) => {
    const { activeAgentId: n, activeTopicId: r } = t;
    if (!n) return [];
    const e = p({ agentId: n, topicId: r });
    return (t.operationsByContext[e] || []).map((s) => t.operations[s]).filter(Boolean);
  },
  l = (t) => Object.values(t.operations).filter((n) => n.status === 'running'),
  M = (t) => (n) => n.operations[t],
  C = (t) => (n) => {
    const r = n.messageOperationMap[t];
    return r ? n.operations[r]?.context : void 0;
  },
  i = (t) => (n) => (n.operationsByMessage[t] || []).map((e) => n.operations[e]).filter(Boolean),
  B = (t) => (n) => (n.operationsByType[t] || []).map((e) => n.operations[e]).filter(Boolean),
  x = (t) => Object.values(t.operations).some((n) => n.status === 'running'),
  d = (t) => (n) =>
    (n.operationsByType[t] || []).some((e) => {
      const o = n.operations[e];
      return o && o.status === 'running';
    }),
  v = (t) => c(t).some((r) => r.status === 'running'),
  b = (t) => !c(t).some((e) => e.status === 'running'),
  S = (t) => {
    const n = l(t),
      r = new Set(n.map((e) => e.type));
    return Array.from(r);
  },
  j = (t) => {
    const r = c(t).filter((o) => o.status === 'running');
    if (r.length === 0) return '';
    const e = r.reduce((o, s) => (s.metadata.startTime > o.metadata.startTime ? s : o));
    return e.label || e.type;
  },
  P = (t) => {
    const r = c(t).filter((s) => s.status === 'running');
    if (r.length === 0) return;
    const e = r.filter((s) => s.metadata.progress);
    return e.length === 0
      ? void 0
      : e.reduce((s, a) => (a.metadata.startTime > s.metadata.startTime ? a : s)).metadata.progress
          ?.percentage;
  },
  f = (t) => (n) => {
    const r = p({ agentId: t.agentId, topicId: t.topicId });
    return (n.operationsByContext[r] || [])
      .map((o) => n.operations[o])
      .filter((o) => {
        if (!o) return !1;
        const s = o.context.threadId ?? null,
          a = t.threadId ?? null;
        return s === a;
      });
  },
  E = (t) => (n) => f(t)(n).some((e) => e.status === 'running' && !e.metadata.isAborting),
  G = (t) => (n) => {
    if (!t.agentId) return !1;
    const r = p({ agentId: t.agentId, groupId: t.groupId, topicId: t.topicId });
    return (n.operationsByContext[r] || [])
      .map((s) => n.operations[s])
      .filter((s) => {
        if (!s) return !1;
        const a = s.context.threadId ?? null,
          u = t.threadId ?? null;
        return a === u;
      })
      .some((s) => g.includes(s.type) && s.status === 'running' && !s.metadata.isAborting);
  },
  K = (t) => (n) => {
    if (!t.agentId) return !1;
    const r = p({ agentId: t.agentId, groupId: t.groupId, topicId: t.topicId });
    return (n.operationsByContext[r] || [])
      .map((s) => n.operations[s])
      .filter((s) => {
        if (!s) return !1;
        const a = s.context.threadId ?? null,
          u = t.threadId ?? null;
        return a === u;
      })
      .some((s) => O.includes(s.type) && s.status === 'running' && !s.metadata.isAborting);
  },
  _ = (t) => (n) => {
    for (const r of g)
      if (
        (n.operationsByType[r] || []).some((s) => {
          const a = n.operations[s];
          return a && a.status === 'running' && !a.metadata.isAborting && a.context.agentId === t;
        })
      )
        return !0;
    return !1;
  },
  m = (t) => {
    for (const n of g)
      if (
        (t.operationsByType[n] || []).some((o) => {
          const s = t.operations[o];
          return s && s.status === 'running' && !s.metadata.isAborting;
        })
      )
        return !0;
    return !1;
  },
  w = (t) => {
    for (const n of g)
      if (
        (t.operationsByType[n] || []).some((o) => {
          const s = t.operations[o];
          if (!s || s.status !== 'running' || s.metadata.isAborting || s.metadata.inThread)
            return !1;
          if (s.context.groupId) return t.activeGroupId === s.context.groupId;
          if (t.activeAgentId !== s.context.agentId) return !1;
          const a = t.activeTopicId ?? null,
            u = s.context.topicId ?? null;
          return a === u;
        })
      )
        return !0;
    return !1;
  },
  N = (t) => d('continue')(t),
  W = (t) => d('searchWorkflow')(t),
  y = (t) => (n) => i(t)(n).some((e) => e.status === 'running'),
  k = (t) => (n) => i(t)(n).some((e) => g.includes(e.type) && e.status === 'running'),
  q = (t) => (n) =>
    i(t)(n).some(
      (e) =>
        (e.type === 'sendMessage' || e.type === 'createAssistantMessage') && e.status === 'running',
    ),
  L = (t) => (n) => t.some((r) => y(r)(n)),
  U = (t) => (n) => {
    const e = i(t)(n).filter((s) => s.status === 'running');
    if (e.length === 0) return;
    const o = new Set(e.map((s) => s.id));
    return e.find((s) => !(s.childOperationIds || []).some((u) => o.has(u)));
  },
  D = (t) => (n) => i(t)(n).some((e) => e.type === 'regenerate' && e.status === 'running'),
  Y = (t) => (n) => i(t)(n).some((e) => e.type === 'continue' && e.status === 'running'),
  F = (t) => (n) => i(t)(n).some((e) => e.type === 'reasoning' && e.status === 'running'),
  Q = (t) => (n) => i(t)(n).some((e) => e.type === 'toolCalling' && e.status === 'running'),
  H = (t) => c(t).some((r) => r.status === 'running' && r.metadata.isAborting),
  J = (t) => (n) => i(t)(n).some((e) => e.status === 'running' && e.metadata.isAborting),
  V = (t) => d('regenerate')(t),
  X = (t) => d('sendMessage')(t),
  Z = (t) => (n) => n.unreadCompletedAgentIds.has(t),
  $ = (t) => (n) => n.unreadCompletedTopicIds.has(t),
  z = (t) => (n) => {
    if (!t.agentId) return 0;
    const r = p({ agentId: t.agentId, groupId: t.groupId, topicId: t.topicId });
    return n.queuedMessages[r]?.length ?? 0;
  },
  tt = (t) => (n) => {
    if (!t.agentId) return [];
    const r = p({ agentId: t.agentId, groupId: t.groupId, topicId: t.topicId });
    return n.queuedMessages[r] ?? [];
  },
  it = {
    canInterrupt: v,
    canSendMessage: b,
    getActiveOperationTypes: S,
    getAllOperations: R,
    getCurrentContextOperations: c,
    getCurrentOperationLabel: j,
    getCurrentOperationProgress: P,
    getDeepestRunningOperationByMessage: U,
    getOperationById: M,
    getOperationContextFromMessage: C,
    getOperationsByContext: f,
    getOperationsByMessage: i,
    getOperationsByType: B,
    getRunningOperations: l,
    hasAnyRunningOperation: x,
    hasRunningOperationByContext: E,
    hasRunningOperationType: d,
    isAIGenerating: m,
    isAborting: H,
    isAgentRunning: _,
    isAgentRuntimeRunning: m,
    isAgentUnreadCompleted: Z,
    isAgentRuntimeRunningByContext: G,
    isInputLoadingByContext: K,
    isAnyMessageLoading: L,
    isContinuing: N,
    isInSearchWorkflow: W,
    isMainWindowAgentRuntimeRunning: w,
    isMessageAborting: J,
    isMessageContinuing: Y,
    isMessageCreating: q,
    isMessageGenerating: k,
    isMessageInReasoning: F,
    isMessageInToolCalling: Q,
    isMessageProcessing: y,
    isMessageRegenerating: D,
    isRegenerating: V,
    isSendingMessage: X,
    isTopicUnreadCompleted: $,
    getQueuedMessages: tt,
    queuedMessageCount: z,
  },
  ut = A.memo(({ avatar: t, backgroundColor: n, memberAvatars: r = [], size: e = 28 }) =>
    t
      ? I.jsx(h, {
          emojiScaleWithBackground: !0,
          avatar: t,
          background: n,
          shape: 'square',
          size: e,
        })
      : I.jsx(T, { avatars: r, background: n, size: e }),
  );
export { ut as A, it as o };
