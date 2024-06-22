import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Avant-garde",
  description: "Resurrecting Harbinger Chapter 39 & 40",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lksj-dev/lksj-avant-garde' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-HanS': {
      label: '简体中文',
      lang: 'zh-HanS',
      themeConfig: {
        sidebar: [
          {
            text: 'WIP',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      }
    }
  }
})
