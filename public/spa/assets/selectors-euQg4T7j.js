import { P as l } from './index-Br6hqyew.js';
const s = (t) => {
    const n = new Set(t.installedPlugins.map((i) => i.identifier));
    return (
      t.listType === l.Plugin
        ? t.oldPluginItems
        : t.oldPluginItems.filter((i) => n.has(i.identifier))
    ).map((i) => ({
      author: i.author,
      createdAt: i.createdAt,
      homepage: i.homepage,
      identifier: i.identifier,
      meta: { avatar: i.avatar, description: i.description, tags: i.tags, title: i.title },
      type: 'plugin',
    }));
  },
  r = (t) => (n) => n.pluginInstallLoading[t],
  a = (t) => (n) => n.pluginInstallProgress[t],
  o = (t) => (n) => !!n.pluginInstallProgress[t],
  g = (t) => (n) => n.oldPluginItems.find((e) => e.identifier === t),
  d = {
    getPluginById: g,
    getPluginInstallProgress: a,
    isOldPluginInInstallProgress: o,
    isPluginInstallLoading: r,
    onlinePluginStore: s,
  };
export { d as p };
