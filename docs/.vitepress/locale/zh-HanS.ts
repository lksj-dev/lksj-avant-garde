export default {
    'zh-HanS': {
        label: '简体中文',
        lang: 'zh-HanS',
        themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                { text: '项目列表', link: '/listing/' }
            ],
            sidebar: [
                {
                    text: '前言',
                    items: [
                        { text: '为什么？', link: '/zh-HanS/motivation' }
                    ]
                },
                {
                  text: '项目列表',
                  link: '/listing/',
                  items: [
                    { text: '大号垃圾桶', link: '/listing/dumpster'}
                  ],
                  collapsed: false
                }
            ],
        }
    }
}