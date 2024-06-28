export default {
    'zh-HanS': {
        label: '简体中文',
        lang: 'zh-HanS',
        title: "前卫计划",
        description: "复活 Harbinger 第 39、40 章",
        themeConfig: {
            nav: [
                { text: '首页', link: '/zh-HanS/' },
                { text: '项目列表', link: '/zh-HanS/listing/' }
            ],
            sidebar: [
                {
                    text: '前言',
                    items: [
                        { text: '这是什么？', link: '/zh-HanS/introduction' },
                        { text: '为什么？', link: '/zh-HanS/motivation' },
                        { text: '还有更多示范吗？', link: '/zh-HanS/further-reading' },
                        { text: '有无未来规划？', link: '/zh-HanS/plan' }
                    ]
                },
                {
                  text: '项目列表',
                  link: '/zh-HanS/listing/',
                  items: [
                    { text: '斯克兰顿现实稳定锚', link: '/zh-HanS/listing/scranton_reality_anchor' },
                    { text: '复古藏宝袋', link: '/zh-HanS/listing/nostalgic_treasure_bag' },
                    { text: '大号垃圾桶', link: '/zh-HanS/listing/dumpster' },
                    { text: '鲑岩', link: '/zh-HanS/listing/salmonite' },
                    { text: '灯饰', link: '/zh-HanS/listing/lighting_decor' },
                    { text: '泥炭', link: '/zh-HanS/listing/mire_and_peat' },
                    { text: '水泉', link: '/zh-HanS/listing/water_spring' }
                  ],
                  collapsed: false
                }
            ],
        }
    }
}