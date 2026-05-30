import { folderLoader, folderLoaderJava } from "../src/utils/fileUtils";
import { copyFileSync } from "fs";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default {
  title: "ingrun",
  description: "不吃花生",
  lang: "zh-CN",
  base: "/",

  // 内置 sitemap 支持
  sitemap: {
    hostname: "https://blog.ingrun.cn",
  },

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

  // 构建时注入 per-page SEO 元数据
  async transformHtml(code, id, context) {
    const fm = context.pageData?.frontmatter || {};
    const desc = fm.description || "不吃花生";
    const url =
      "https://blog.ingrun.cn/" +
      context.page.replace(/\.md$/, ".html").replace(/^index\.html$/, "");
    const title = fm.title || context.title || "ingrun";

    // 1. 替换全局 description 为当前页面的
    code = code.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${escapeHtml(desc)}">`,
    );

    // 2. 注入 Open Graph 标签
    const ogTags = [
      `<meta property="og:title" content="${escapeHtml(title)}">`,
      `<meta property="og:description" content="${escapeHtml(desc)}">`,
      `<meta property="og:url" content="${escapeHtml(url)}">`,
      `<meta property="og:type" content="${fm.date ? "article" : "website"}">`,
      `<meta property="og:site_name" content="ingrun">`,
      `<meta name="twitter:card" content="summary">`,
    ].join("\n    ");

    // 3. 注入 JSON-LD 结构化数据（仅带 date 的文章页）
    let jsonLd = "";
    if (fm.date && fm.title) {
      jsonLd = `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: fm.title,
        description: desc,
        datePublished: fm.date,
        url: url,
        author: { "@type": "Person", name: "ingrun" },
      })}</script>`;
    }

    return code.replace(
      "</head>",
      `    ${ogTags}\n    ${jsonLd}\n  </head>`,
    );
  },

  // 构建完成后复制 public 静态文件到 dist
  async buildEnd() {
    copyFileSync("public/robots.txt", "dist/robots.txt");
    copyFileSync("public/favicon.ico", "dist/favicon.ico");
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
