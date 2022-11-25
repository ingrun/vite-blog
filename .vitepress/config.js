import { folderLoader } from '../src/utils/fileUtils'

module.exports = {
  title: 'ingrun', // 网站标题
  description: '不吃花生', // 网站的描述
  lang: 'zh-CN',
  base: '/', //  部署时的路径 默认 / ，使用二级地址 /base/
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // 添加网站图标
  outDir: './dist',
  srcDir: './src',
  // cleanUrls: 'with-subfolders',
  ignoreDeadLinks: true,
  lastUpdated: true,

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },

  // 主题配置
  themeConfig: {
    siteTitle: 'ingrun',
    lastUpdatedText: '最后更新时间',

    outlineTitle: '本页目录',
    docFooter: {
      prev: '前一篇',
      next: '下一篇'
    },

    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web/css/常用css' },
      { text: '笔记', link: '/notes/2022-11-25' },
      { text: '关于作者', link: '' },
    ],

    //左侧导航栏配置
    sidebar: {
    '/web/': [
      {
        text: '基础',
        items: [
          { text: '常用CSS', link: '/web/css/常用css' },
          { text: 'Flex布局', link: '/web/css/flex' },
        ]
      },
      {
        text: 'uniapp',
        items: [
          { text: '微信小程序登录逻辑', link: '/web/uniapp/微信小程序登录逻辑' },
        ]
      }
    ],
    '/notes/': folderLoader('notes')
  }
  }
}

const i18n =  {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaAnnouner: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航'
}

