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
    lineNumbers: true,

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
      { text: '前端', link: '/web/basics/常用css' },
      { text: '爪哇', link: '/java/spring gateway 打印日志' },
      { text: '笔记', link: '/notes/2022-11-25' },
      { text: 'other', link: '/other/linux/redis' },
      { text: '关于作者', link: '' },
    ],

    //左侧导航栏配置
    sidebar: {
    '/web/': [
      {
        text: 'WEB基础',
        items: [
          { text: '常用CSS', link: '/web/basics/常用css' },
          { text: 'Flex布局', link: '/web/basics/flex' },
          { text: 'JS的一些常用操作', link: '/web/basics/JS的一些常用操作' },
          { text: 'HTML画圆（太阳耀光效果）', link: '/web/basics/HTML画圆（太阳耀光效果）' },
          { text: '自定义事件监听管理器', link: '/web/basics/自定义事件监听管理器' }
        ]
      },
      {
        text: 'uniapp',
        items: [
          { text: '微信小程序登录逻辑', link: '/web/uniapp/微信小程序登录逻辑' },
          { text: 'uniapp swiper 选项卡实现高度自适应', link: '/web/uniapp/uniapp swiper 选项卡实现高度自适应' }
        ]
      },
      {
        text: 'vue',
        items: [
          { text: 'elementui在线引入图标库', link: '/web/vue/elementui在线引入图标库' },
          { text: 'vue 监听键盘回车事件', link: '/web/vue/vue 监听键盘回车事件' },
          { text: 'irdict', link: '/web/vue/irdict' },
        ]
      }

    ],
    '/notes/': folderLoader('notes'),
    '/other/': [
      {
        text: 'other',
        items: [
          { text: '开发常用配置文件', link: '/other/开发常用配置文件' },         
        ]
      },
      {
        text: 'linux',
        items: [
          { text: 'centos7 redis7安装', link: '/other/linux/redis' },
          { text: 'centos7 mysql8安装', link: '/other/linux/mysql' },
          { text: 'centos7 Git安装', link: '/other/linux/git' },
          { text: 'centos7 nacos安装', link: '/other/linux/nacos安装' },
          { text: 'nginx配置', link: '/other/linux/nginx配置' },
          
        ]

      },
    ]
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

