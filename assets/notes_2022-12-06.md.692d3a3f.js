import{_ as s,c as n,o as a,d as l}from"./app.7641ba52.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"uni.navigateTo  \u4E8B\u4EF6\u76D1\u542C","slug":"uni-navigateto-\u4E8B\u4EF6\u76D1\u542C","link":"#uni-navigateto-\u4E8B\u4EF6\u76D1\u542C","children":[]},{"level":2,"title":"linux  \u57FA\u7840\u5DE5\u5177\u5B89\u88C5","slug":"linux-\u57FA\u7840\u5DE5\u5177\u5B89\u88C5","link":"#linux-\u57FA\u7840\u5DE5\u5177\u5B89\u88C5","children":[]},{"level":2,"title":"linux \u914D\u7F6EDNS","slug":"linux-\u914D\u7F6Edns","link":"#linux-\u914D\u7F6Edns","children":[]}],"relativePath":"notes/2022-12-06.md","lastUpdated":1744010922000}'),p={name:"notes/2022-12-06.md"},e=l(`<h2 id="uni-navigateto-\u4E8B\u4EF6\u76D1\u542C" tabindex="-1">uni.navigateTo \u4E8B\u4EF6\u76D1\u542C <a class="header-anchor" href="#uni-navigateto-\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">toIndex</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_that</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/pages/index/index2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateTo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?uid=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">uid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    events</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u4E3A\u6307\u5B9A\u4E8B\u4EF6\u6DFB\u52A0\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u83B7\u53D6\u88AB\u6253\u5F00\u9875\u9762\u4F20\u9001\u5230\u5F53\u524D\u9875\u9762\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">reGetList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">_that</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFwList</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u88AB\u6253\u5F00\u7684\u9875\u9762\u8C03\u7528</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eventChannel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getOpenerEventChannel</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">eventChannel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reGetList</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="linux-\u57FA\u7840\u5DE5\u5177\u5B89\u88C5" tabindex="-1">linux \u57FA\u7840\u5DE5\u5177\u5B89\u88C5 <a class="header-anchor" href="#linux-\u57FA\u7840\u5DE5\u5177\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">yum update -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ifconfig </span></span>
<span class="line"><span style="color:#A6ACCD;">yum install net-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">yum install wget -y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="linux-\u914D\u7F6Edns" tabindex="-1">linux \u914D\u7F6EDNS <a class="header-anchor" href="#linux-\u914D\u7F6Edns" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># cat /etc/resolv.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">nameserver 114.114.114.114</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8),o=[e];function c(r,t,i,F,y,D){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{d as __pageData,b as default};
