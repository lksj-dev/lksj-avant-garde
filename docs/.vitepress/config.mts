import { defineConfig } from 'vitepress'
import zhHanS from './locale/zh-HanS'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Avant-garde",
  description: "Resurrecting Harbinger Chapter 39 & 40",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects Listing', link: '/listing/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Project Listing',
        link: '/listing/',
        items: [
          { text: 'Dumpster', link: '/listing/dumpster'}
        ],
        collapsed: false
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
    ...zhHanS
  }
})
