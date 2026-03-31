import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { k as x, aH as h, g as S, F as l, aI as p, f as g } from './index-C8UyLGsD.js';
import { T as j } from './Tabs-Bq_UMJa3.js';
import { S as a } from './Snippet-B4YU4vnL.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { P as f } from './index-Ch5xOhA1.js';
import { S as i } from './index-DZlSK_Q-.js';
import { T as n } from './Trans-B9Jc6Abr.js';
const o = 'ant',
  r = g(({ css: t, cssVar: s }) => ({
    steps: t`
    margin-block-start: 32px;
    &.${o}-steps-small .${o}-steps-item-title {
      margin-block-end: 16px;
      font-size: 16px;
      font-weight: bold;
    }

    .${o}-steps-item-description {
      margin-block-end: 24px;
    }

    .${o}-steps-icon {
      color: var(--steps-icon-color, ${s.colorText}) !important;
    }
  `,
  })),
  N = d.memo(() => {
    const t = d.useMemo(() => {
        if (typeof window > 'u') return '#fff';
        const c = x.colorPrimary,
          m = c.match(/var\((--[^),\s]+)/)?.[1],
          u = m ? getComputedStyle(document.documentElement).getPropertyValue(m).trim() : c;
        return h(u || '#1677ff');
      }, []),
      { t: s } = S('components');
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(f, { provider: 'ollama', size: 30, style: { marginBottom: -8, marginLeft: 4 } }),
        e.jsx(j, {
          compact: !0,
          items: [
            {
              children: e.jsx(i, {
                className: r.steps,
                direction: 'vertical',
                size: 'small',
                style: { '--steps-icon-color': t },
                items: [
                  {
                    description: e.jsx(n, {
                      i18nKey: 'OllamaSetupGuide.install.description',
                      ns: 'components',
                      components: [
                        e.jsx('span', {}, '0'),
                        e.jsx(
                          'a',
                          {
                            href: 'https://ollama.com/download',
                            rel: 'noreferrer',
                            target: '_blank',
                          },
                          '1',
                        ),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.install.title'),
                  },
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        s('OllamaSetupGuide.cors.description'),
                        e.jsxs(l, {
                          gap: 8,
                          children: [
                            s('OllamaSetupGuide.cors.macos'),
                            e.jsx(a, {
                              language: 'bash',
                              children: 'launchctl setenv OLLAMA_ORIGINS "*"',
                            }),
                            s('OllamaSetupGuide.cors.reboot'),
                          ],
                        }),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.cors.title'),
                  },
                ],
              }),
              key: 'macos',
              label: 'macOS',
            },
            {
              children: e.jsx(i, {
                className: r.steps,
                direction: 'vertical',
                size: 'small',
                style: { '--steps-icon-color': t },
                items: [
                  {
                    description: e.jsx(n, {
                      i18nKey: 'OllamaSetupGuide.install.description',
                      ns: 'components',
                      components: [
                        e.jsx('span', {}, '0'),
                        e.jsx(
                          'a',
                          {
                            href: 'https://ollama.com/download',
                            rel: 'noreferrer',
                            target: '_blank',
                          },
                          '1',
                        ),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.install.title'),
                  },
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        s('OllamaSetupGuide.cors.description'),
                        e.jsx('div', { children: s('OllamaSetupGuide.cors.windows') }),
                        e.jsx('div', { children: s('OllamaSetupGuide.cors.reboot') }),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.cors.title'),
                  },
                ],
              }),
              key: 'windows',
              label: s('OllamaSetupGuide.install.windowsTab'),
            },
            {
              children: e.jsx(i, {
                className: r.steps,
                direction: 'vertical',
                size: 'small',
                style: { '--steps-icon-color': t },
                items: [
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        s('OllamaSetupGuide.install.linux.command'),
                        e.jsx(a, {
                          language: 'bash',
                          children: 'curl -fsSL https://ollama.com/install.sh | sh',
                        }),
                        e.jsx('div', {
                          children: e.jsx(n, {
                            i18nKey: 'OllamaSetupGuide.install.linux.manual',
                            ns: 'components',
                            components: [
                              e.jsx('span', {}, '0'),
                              e.jsx(
                                'a',
                                {
                                  href: 'https://github.com/ollama/ollama/blob/main/docs/linux.md',
                                  rel: 'noreferrer',
                                  target: '_blank',
                                },
                                '1',
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.install.title'),
                  },
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        e.jsx('div', { children: s('OllamaSetupGuide.cors.description') }),
                        e.jsx('div', { children: s('OllamaSetupGuide.cors.linux.systemd') }),
                        e.jsx(a, {
                          language: 'bash',
                          children: ' sudo systemctl edit ollama.service',
                        }),
                        s('OllamaSetupGuide.cors.linux.env'),
                        e.jsx(p, {
                          fullFeatured: !0,
                          showLanguage: !0,
                          fileName: 'ollama.service',
                          language: 'bash',
                          children: `[Service]

Environment="OLLAMA_ORIGINS=*"`,
                        }),
                        s('OllamaSetupGuide.cors.linux.reboot'),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.cors.title'),
                  },
                ],
              }),
              key: 'linux',
              label: 'Linux',
            },
            {
              children: e.jsx(i, {
                className: r.steps,
                direction: 'vertical',
                size: 'small',
                style: { '--steps-icon-color': t },
                items: [
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        s('OllamaSetupGuide.install.description'),
                        e.jsx('div', { children: s('OllamaSetupGuide.install.docker') }),
                        e.jsx(a, { language: 'bash', children: 'docker pull ollama/ollama' }),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.install.title'),
                  },
                  {
                    description: e.jsxs(l, {
                      gap: 8,
                      children: [
                        s('OllamaSetupGuide.cors.description'),
                        e.jsx(p, {
                          fullFeatured: !0,
                          showLanguage: !0,
                          fileName: 'ollama.service',
                          language: 'bash',
                          children:
                            'docker run -d --gpus=all -v ollama:/root/.ollama -e OLLAMA_ORIGINS="*" -p 11434:11434 --name ollama ollama/ollama',
                        }),
                      ],
                    }),
                    status: 'process',
                    title: s('OllamaSetupGuide.cors.title'),
                  },
                ],
              }),
              key: 'docker',
              label: 'Docker',
            },
          ],
          style: { width: '500px' },
        }),
      ],
    });
  });
export { N as S };
