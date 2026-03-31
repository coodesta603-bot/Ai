import { a_ as t, az as p } from './index-C8UyLGsD.js';
import { a as i } from './abortableRequest-CqTkNl3n.js';
class g {
  createTopic = (e) =>
    t.topic.createTopic.mutate({ ...e, sessionId: this.toDbSessionId(e.sessionId) });
  batchCreateTopics = (e) => t.topic.batchCreateTopics.mutate(e);
  cloneTopic = (e, s) => t.topic.cloneTopic.mutate({ id: e, newTitle: s });
  importTopic = (e) => t.topic.importTopic.mutate(e);
  getTopics = async (e) =>
    t.topic.getTopics.query({
      agentId: e.agentId,
      current: e.current,
      excludeTriggers: e.excludeTriggers,
      groupId: e.groupId,
      isInbox: e.isInbox,
      pageSize: e.pageSize,
    });
  getAllTopics = () => t.topic.getAllTopics.query();
  countTopics = async (e) => t.topic.countTopics.query(e);
  rankTopics = async (e) => t.topic.rankTopics.query(e);
  getRecentTopics = async (e) => t.topic.recentTopics.query({ limit: e });
  searchTopics = (e, s, a) => t.topic.searchTopics.query({ agentId: s, groupId: a, keywords: e });
  updateTopic = (e, s) => t.topic.updateTopic.mutate({ id: e, value: s });
  updateTopicMetadata = (e, s) => t.topic.updateTopicMetadata.mutate({ id: e, metadata: s });
  getShareInfo = (e) => t.topic.getShareInfo.query({ topicId: e });
  enableSharing = (e, s) => t.topic.enableSharing.mutate({ topicId: e, visibility: s });
  updateShareVisibility = (e, s) =>
    t.topic.updateShareVisibility.mutate({ topicId: e, visibility: s });
  disableSharing = (e) => t.topic.disableSharing.mutate({ topicId: e });
  removeTopic = (e) => t.topic.removeTopic.mutate({ id: e });
  removeTopics = (e) => t.topic.batchDeleteBySessionId.mutate({ id: this.toDbSessionId(e) });
  removeTopicsByAgentId = (e) => t.topic.batchDeleteByAgentId.mutate({ agentId: e });
  batchRemoveTopics = (e) => t.topic.batchDelete.mutate({ ids: e });
  removeAllTopic = () => t.topic.removeAllTopics.mutate();
  toDbSessionId = (e) => (e === p ? null : e);
}
const S = new g();
class m {
  hasSessions = async () => (await this.countSessions()) === 0;
  createSession = async (e, s) => {
    const { config: a, group: r, meta: n, ...o } = s;
    return t.session.createSession.mutate({
      config: { ...a, ...n },
      session: { ...o, groupId: r },
      type: e,
    });
  };
  cloneSession = (e, s) => t.session.cloneSession.mutate({ id: e, newTitle: s });
  getGroupedSessions = () => t.session.getGroupedSessions.query();
  countSessions = async (e) => t.session.countSessions.query(e);
  rankSessions = async (e) => t.session.rankSessions.query(e);
  updateSession = (e, s) => {
    const { group: a, pinned: r, meta: n, updatedAt: o } = s;
    return t.session.updateSession.mutate({
      id: e,
      value: { groupId: a === 'default' ? null : a, pinned: r, ...n, updatedAt: o },
    });
  };
  getSessionConfig = async (e) => t.agent.getAgentConfig.query({ sessionId: e });
  updateSessionConfig = (e, s, a) =>
    t.session.updateSessionConfig.mutate(
      { id: e, value: s },
      { context: { showNotification: !1 }, signal: a },
    );
  updateSessionMeta = (e, s, a) =>
    t.session.updateSessionConfig.mutate({ id: e, value: s }, { signal: a });
  updateSessionChatConfig = (e, s, a) =>
    t.session.updateSessionChatConfig.mutate({ id: e, value: s }, { signal: a });
  searchSessions = (e) => t.session.searchSessions.query({ keywords: e });
  removeSession = (e) => t.session.removeSession.mutate({ id: e });
  removeAllSessions = () => t.session.removeAllSessions.mutate();
  createSessionGroup = (e, s) => t.sessionGroup.createSessionGroup.mutate({ name: e, sort: s });
  removeSessionGroup = (e, s) =>
    t.sessionGroup.removeSessionGroup.mutate({ id: e, removeChildren: s });
  removeSessionGroups = () => t.sessionGroup.removeAllSessionGroups.mutate();
  updateSessionGroup = (e, s) => t.sessionGroup.updateSessionGroup.mutate({ id: e, value: s });
  updateSessionGroupOrder = (e) => t.sessionGroup.updateSessionGroupOrder.mutate({ sortMap: e });
}
const T = new m();
class c {
  createMessage = async (e) => t.message.createMessage.mutate(e);
  getMessages = async (e) => await t.message.getMessages.query(e);
  countMessages = async (e) => t.message.count.query(e);
  countWords = async (e) => t.message.countWords.query(e);
  rankModels = async () => t.message.rankModels.query();
  getHeatmaps = async () => t.message.getHeatmaps.query();
  updateMessageError = async (e, s, a) => {
    const r = s.type ? s : { body: s, message: s.message, type: 'ApplicationRuntimeError' };
    return t.message.update.mutate({ ...a, id: e, value: { error: r } });
  };
  updateMessagePluginArguments = async (e, s) => {
    const a = typeof s == 'string' ? s : JSON.stringify(s);
    return t.message.updateMessagePlugin.mutate({ id: e, value: { arguments: a } });
  };
  updateToolArguments = async (e, s, a) =>
    t.message.updateToolArguments.mutate({ ...a, toolCallId: e, value: s });
  updateMessage = async (e, s, a) => t.message.update.mutate({ ...a, id: e, value: s });
  updateMessageTranslate = async (e, s) => t.message.updateTranslate.mutate({ id: e, value: s });
  updateMessageTTS = async (e, s) => t.message.updateTTS.mutate({ id: e, value: s });
  updateMessageMetadata = async (e, s, a) =>
    i.execute(`message-metadata-${e}`, (r) =>
      t.message.updateMetadata.mutate({ ...a, id: e, value: s }, { signal: r }),
    );
  updateMessagePluginState = async (e, s, a) =>
    t.message.updatePluginState.mutate({ ...a, id: e, value: s });
  updateMessagePluginError = async (e, s, a) =>
    t.message.updatePluginError.mutate({ ...a, id: e, value: s });
  updateMessagePlugin = async (e, s, a) =>
    t.message.updateMessagePlugin.mutate({ ...a, id: e, value: s });
  updateMessageRAG = async (e, s, a) =>
    t.message.updateMessageRAG.mutate({ ...a, id: e, value: s });
  updateToolMessage = async (e, s, a) =>
    i.execute(`tool-message-${e}`, (r) =>
      t.message.updateToolMessage.mutate({ ...a, id: e, value: s }, { signal: r }),
    );
  removeMessage = async (e, s) => t.message.removeMessage.mutate({ ...s, id: e });
  removeMessages = async (e, s) => t.message.removeMessages.mutate({ ...s, ids: e });
  removeMessagesByAssistant = async (e, s) =>
    t.message.removeMessagesByAssistant.mutate({ sessionId: e, topicId: s });
  removeMessagesByGroup = async (e, s) =>
    t.message.removeMessagesByGroup.mutate({ groupId: e, topicId: s });
  removeAllMessages = async () => t.message.removeAllMessages.mutate();
  addFilesToMessage = async (e, s, a) =>
    t.message.addFilesToMessage.mutate({ ...a, fileIds: s, id: e });
  createCompressionGroup = async (e) => {
    const s = await t.message.createCompressionGroup.mutate(e);
    return {
      messageGroupId: s.messageGroupId,
      messages: s.messages || [],
      messagesToSummarize: s.messagesToSummarize || [],
    };
  };
  finalizeCompression = async (e) => ({
    messages: (await t.message.finalizeCompression.mutate(e)).messages || [],
  });
  updateMessageGroupMetadata = async (e) => ({
    messages: (await t.message.updateMessageGroupMetadata.mutate(e)).messages || [],
  });
  cancelCompression = async (e) => ({
    messages: (await t.message.cancelCompression.mutate(e)).messages || [],
  });
}
const d = new c(),
  M = Object.freeze(
    Object.defineProperty(
      { __proto__: null, MessageService: c, messageService: d },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { M as i, d as m, T as s, S as t };
