import { a_ as n } from './index-C8UyLGsD.js';
const g = async () => {},
  l = (a, e, t) => {
    const r = a.map((o, c) => `${c + 1}. ${o}`).join(`
`);
    return {
      messages: [
        {
          content: `你是一位资深的 AI 艺术创作者和语言大师。你需要根据用户提供的 AI ${e} prompt 总结出一个标题。这个标题应简洁地描述创作的核心内容，将用于标识和管理该系列作品。字数需控制在10个字以内，不需要包含标点符号，输出语言为：${t}。`,
          role: 'system',
        },
        {
          content: `提示词：
${r}`,
          role: 'user',
        },
      ],
    };
  };
class i {
  async getAllGenerationTopics(e) {
    return n.generationTopic.getAllGenerationTopics.query(e ? { type: e } : void 0);
  }
  async createTopic(e) {
    return n.generationTopic.createTopic.mutate(e ? { type: e } : void 0);
  }
  async updateTopic(e, t) {
    return n.generationTopic.updateTopic.mutate({ id: e, value: t });
  }
  async updateTopicCover(e, t) {
    return n.generationTopic.updateTopicCover.mutate({ coverUrl: t, id: e });
  }
  async deleteTopic(e) {
    return n.generationTopic.deleteTopic.mutate({ id: e });
  }
}
const m = new i();
class s {
  async getGenerationStatus(e, t) {
    return n.generation.getGenerationStatus.query({ asyncTaskId: t, generationId: e });
  }
  async deleteGeneration(e) {
    return n.generation.deleteGeneration.mutate({ generationId: e });
  }
}
const T = new s();
class u {
  async getGenerationBatches(e, t) {
    return n.generationBatch.getGenerationBatches.query({ topicId: e, type: t });
  }
  async deleteGenerationBatch(e) {
    return n.generationBatch.deleteGenerationBatch.mutate({ batchId: e });
  }
}
const d = new u();
export { d as a, T as b, l as c, m as g, g as m };
