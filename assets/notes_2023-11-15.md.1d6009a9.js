import{_ as s,c as n,o as a,d as e}from"./app.7641ba52.js";const y=JSON.parse('{"title":"mysql \u4FEE\u6539\u6700\u5927\u8FDE\u63A5\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"notes/2023-11-15.md","lastUpdated":1744010922000}'),l={name:"notes/2023-11-15.md"},p=e(`<h1 id="mysql-\u4FEE\u6539\u6700\u5927\u8FDE\u63A5\u6570" tabindex="-1">mysql \u4FEE\u6539\u6700\u5927\u8FDE\u63A5\u6570 <a class="header-anchor" href="#mysql-\u4FEE\u6539\u6700\u5927\u8FDE\u63A5\u6570" aria-hidden="true">#</a></h1><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># \u67E5\u8BE2\u5F53\u524D\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">show variables </span><span style="color:#F78C6C;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%max_connections%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u4FEE\u6539\u5F53\u524D\u6700\u5927\u8FDE\u63A5\u6570\u4E3A500</span></span>
<span class="line"><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">global</span><span style="color:#A6ACCD;"> max_connections</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">500</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,2),o=[p];function t(c,r,i,_,d,C){return a(),n("div",null,o)}const b=s(l,[["render",t]]);export{y as __pageData,b as default};
