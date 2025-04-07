import{_ as s,c as n,o as a,d as l}from"./app.7641ba52.js";const F=JSON.parse('{"title":"JS \u7684\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C","description":"","frontmatter":{"title":"JS \u7684\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C","date":"2022-05-005"},"headers":[{"level":3,"title":"\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20","slug":"\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20","link":"#\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20","children":[]},{"level":3,"title":"map","slug":"map","link":"#map","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]}],"relativePath":"web/basics/JS\u7684\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C.md","lastUpdated":1744010922000}'),p={name:"web/basics/JS\u7684\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C.md"},o=l(`<h3 id="\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20" tabindex="-1">\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20 <a class="header-anchor" href="#\u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// undefined   \u65E0\u7B26\u5408\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findIndex</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// -1   \u65E0\u7B26\u5408\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">some</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">some</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// false  \u65E0\u7B26\u5408\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findIndex</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// 1   \u8FD4\u56DE\u4E0B\u6807</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u904D\u5386\u6570\u7EC4\uFF0C  \u5E76\u5C06\u8FD4\u56DE\u503C\u7EC4\u5408\u6210\u65B0\u6570\u7EC4\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)\xA0[</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u7684\u6240\u6709\u6570\u636E \u5E76\u7EC4\u6210\u65B0\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">( </span><span style="color:#A6ACCD;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)\xA0[</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6),e=[o];function r(c,t,C,A,y,i){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
