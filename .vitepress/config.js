import { folderLoader, folderLoaderJava } from "../src/utils/fileUtils";

export default {
  title: "ingrun",
  description: "不吃花生",
  lang: "zh-CN",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "style",
      {},
      `.note-date{color:#aaa;font-size:0.85em;margin-bottom:1.5em;margin-top:-0.3em}
:root{--vp-sidebar-width:360px}
.VPSidebar .VPSidebarItem.level-1 .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;max-width:100%}`,
    ],
    [
      "script",
      {},
      `document.addEventListener('DOMContentLoaded',()=>{const o=new MutationObserver(()=>{document.querySelectorAll('.VPSidebar .level-1.is-link a.VPLink').forEach(a=>{a.title=a.textContent.trim()})});o.observe(document.body,{childList:!0,subtree:!0})})`,
    ],
  ],
  outDir: "./dist",
  srcDir: "./src",
  ignoreDeadLinks: true,
  lastUpdated: true,

  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },

  themeConfig: {
    siteTitle: "ingrun",
    lastUpdatedText: "最后更新时间",
    outlineTitle: "本页目录",
    docFooter: {
      prev: "前一篇",
      next: "下一篇",
    },

    // 搜索
    search: {
      provider: "local",
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/web/basics/常用css" },
      { text: "爪哇", link: "/java/spring gateway 打印日志" },
      { text: "linux", link: "/linux/yum安装redis" },
      { text: "笔记", link: "/notes/vitepress" },
      { text: "other", link: "/other/开发常用配置文件" },
    ],

    sidebar: {
      "/web/": [
        {
          text: "WEB基础",
          items: [
            { text: "常用CSS", link: "/web/basics/常用css" },
            { text: "Flex布局", link: "/web/basics/flex" },
            { text: "JS的一些常用操作", link: "/web/basics/JS的一些常用操作" },
            {
              text: "HTML画圆（太阳耀光效果）",
              link: "/web/basics/HTML画圆（太阳耀光效果）",
            },
            {
              text: "自定义事件监听管理器",
              link: "/web/basics/自定义事件监听管理器",
            },
          ],
        },
        {
          text: "uniapp",
          items: [
            {
              text: "微信小程序登录逻辑",
              link: "/web/uniapp/微信小程序登录逻辑",
            },
            {
              text: "uniapp swiper 选项卡实现高度自适应",
              link: "/web/uniapp/uniapp swiper 选项卡实现高度自适应",
            },
          ],
        },
        {
          text: "vue",
          items: [
            {
              text: "elementui在线引入图标库",
              link: "/web/vue/elementui在线引入图标库",
            },
            {
              text: "vue 监听键盘回车事件",
              link: "/web/vue/vue 监听键盘回车事件",
            },
            { text: "irdict", link: "/web/vue/irdict" },
          ],
        },
      ],
      "/notes/": folderLoader("notes"),
      "/java/": [{ text: "Java", items: folderLoaderJava("java") }],
      "/linux/": [{ text: "Linux", items: folderLoaderJava("linux") }],
      "/other/": [
        {
          text: "other",
          items: [
            { text: "开发常用配置文件", link: "/other/开发常用配置文件" },
            { text: "烟花", link: "/other/烟花" },
          ],
        },
      ],
    },
  },
};
