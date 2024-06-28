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
        text: 'Preface',
        items: [
          { text: 'What?', link: '/introduction' },
          { text: 'Why?', link: '/motivation' },
          { text: 'Any more examples?', link: '/further-reading' },
          { text: 'Any future plan?', link: '/plan' }
        ]
      },
      {
        text: 'Project Listing',
        link: '/listing/',
        items: [
          { text: 'Dumpster', link: '/listing/dumpster' },
          { text: 'Lighting Décor', link: '/listing/lighting_decor' },
          { text: 'Mire & Peat', link: '/listing/mire_and_peat' },
          { text: 'Nostalgic Treasure Bag', link: '/listing/nostalgic_treasure_bag' },
          { text: 'Salmonite', link: '/listing/salmonite' },
          { text: 'Scranton Reality Anchor', link: 'listing/scranton_reality_anchor' },
          { text: 'Water Spring', link: '/listing/water_spring' }
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
