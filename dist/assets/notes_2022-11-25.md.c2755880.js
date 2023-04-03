import{_ as l,c as s,F as p,r as o,b as e,o as n,a as r,t as c}from"./app.38b88522.js";const m=JSON.parse('{"title":"vitepress","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u914D\u7F6E","slug":"\u57FA\u672C\u914D\u7F6E","link":"#\u57FA\u672C\u914D\u7F6E","children":[]},{"level":2,"title":"\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587","slug":"\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587","link":"#\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587","children":[]},{"level":2,"title":"\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4","slug":"\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4","link":"#\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4","children":[]},{"level":2,"title":"\u56FE\u6807(Emoji)","slug":"\u56FE\u6807-emoji","link":"#\u56FE\u6807-emoji","children":[]},{"level":2,"title":"Markdown \u4E3B\u9898\u6837\u5F0F","slug":"markdown-\u4E3B\u9898\u6837\u5F0F","link":"#markdown-\u4E3B\u9898\u6837\u5F0F","children":[]},{"level":2,"title":"\u53EF\u4EE5\u5728Markdown\u4E2D\u76F4\u63A5\u4F7F\u7528VUE\u8BED\u6CD5","slug":"\u53EF\u4EE5\u5728markdown\u4E2D\u76F4\u63A5\u4F7F\u7528vue\u8BED\u6CD5","link":"#\u53EF\u4EE5\u5728markdown\u4E2D\u76F4\u63A5\u4F7F\u7528vue\u8BED\u6CD5","children":[]}],"relativePath":"notes/2022-11-25.md","lastUpdated":1669382043000}'),t={name:"notes/2022-11-25.md"},D=e(`<h1 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-hidden="true">#</a></h1><p><a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">\u82F1\u6587\u5B98\u7F51</a></p><p><a href="https://juejin.cn/post/7050465305620906015/" target="_blank" rel="noreferrer">\u7B80\u5355\u642D\u5EFA\u4E00\u4E2A\u57FA\u4E8E VitePress \u7684\u9759\u6001\u6587\u6863\u7F51\u7AD9</a></p><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1">\u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ingrun</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7F51\u7AD9\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0D\u5403\u82B1\u751F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7F51\u7AD9\u7684\u63CF\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//  \u90E8\u7F72\u65F6\u7684\u8DEF\u5F84 \u9ED8\u8BA4 / \uFF0C\u4F7F\u7528\u4E8C\u7EA7\u5730\u5740 /base/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/favicon.ico</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]]</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">// \u6DFB\u52A0\u7F51\u7AD9\u56FE\u6807</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E3B\u9898\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5BFC\u822A\u680F\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u9996\u9875</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u524D\u7AEF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/web/css/\u5E38\u7528css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B14\u8BB0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/notes/2022-11-25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5173\u4E8E\u4F5C\u8005</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u5DE6\u4FA7\u5BFC\u822A\u680F\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/web/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u57FA\u7840</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5E38\u7528CSS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/web/css/\u5E38\u7528css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Flex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/web/css/flex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uniapp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u767B\u5F55\u903B\u8F91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/web/uniapp/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u767B\u5F55\u903B\u8F91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/notes/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">folderLoader</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587" tabindex="-1">\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587 <a class="header-anchor" href="#\u914D\u7F6E\u90E8\u5206\u64CD\u4F5C\u6309\u94AE\u4E3A\u4E2D\u6587" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u9ED8\u8BA4 On this page</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">outlineTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u672C\u9875\u76EE\u5F55</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6587\u6863\u5E95\u90E8\u6309\u94AE \u9ED8\u8BA4\u4E3A\u82F1\u6587</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">docFooter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">prev</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u524D\u4E00\u7BC7</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">next</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0B\u4E00\u7BC7</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4" tabindex="-1">\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4 <a class="header-anchor" href="#\u9875\u9762\u6DFB\u52A0\u6700\u540E\u66F4\u65B0\u65F6\u95F4" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u663E\u793A\u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastUpdated</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u6700\u540E\u66F4\u65B0\u65F6\u95F4\u524D\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">lastUpdatedText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6700\u540E\u66F4\u65B0\u65F6\u95F4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u56FE\u6807-emoji" tabindex="-1">\u56FE\u6807(Emoji) <a class="header-anchor" href="#\u56FE\u6807-emoji" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">:tada: :100: :ghost:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u{1F389} \u{1F4AF} \u{1F47B}</p><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">\u5168\u90E8\u8868\u60C5\u5217\u8868</a></p><h2 id="markdown-\u4E3B\u9898\u6837\u5F0F" tabindex="-1">Markdown \u4E3B\u9898\u6837\u5F0F <a class="header-anchor" href="#markdown-\u4E3B\u9898\u6837\u5F0F" aria-hidden="true">#</a></h2><p><a href="https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes" target="_blank" rel="noreferrer">\u5168\u90E8\u4E3B\u9898\u5217\u8868</a></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">markdown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">material-palenight</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u662F\u5426\u663E\u793A\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lineNumbers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u53EF\u4EE5\u5728markdown\u4E2D\u76F4\u63A5\u4F7F\u7528vue\u8BED\u6CD5" tabindex="-1">\u53EF\u4EE5\u5728<code>Markdown</code>\u4E2D\u76F4\u63A5\u4F7F\u7528<code>VUE</code>\u8BED\u6CD5 <a class="header-anchor" href="#\u53EF\u4EE5\u5728markdown\u4E2D\u76F4\u63A5\u4F7F\u7528vue\u8BED\u6CD5" aria-hidden="true">#</a></h2><p><a href="https://vitepress.vuejs.org/guide/using-vue#using-vue-in-markdown" target="_blank" rel="noreferrer">\u5B98\u65B9\u63CF\u8FF0</a></p><div class="info custom-block"><p class="custom-block-title">\u4EE5\u4E0B\u673A\u7FFB</p><p>\u5728 VitePress \u4E2D\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u6587\u4EF6\u90FD\u88AB\u7F16\u8BD1\u6210 HTML\uFF0C\u7136\u540E\u4F5C\u4E3A Vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u5904\u7406\u3002\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 &lt; script &gt; \u6807\u8BB0\u6765\u4F7F\u7528\u6807\u8BB0\u5185\u7684\u4EFB\u4F55 Vue \u7279\u6027\uFF0C\u5305\u62EC\u52A8\u6001\u6A21\u677F\u3001\u4F7F\u7528 Vue \u7EC4\u4EF6\u6216\u4EFB\u610F\u9875\u5185 Vue \u7EC4\u4EF6\u903B\u8F91\u3002</p><p>\u4E86\u89E3 VitePress \u5229\u7528 Vue 3\u7684\u7F16\u8BD1\u5668\u81EA\u52A8\u68C0\u6D4B\u548C\u4F18\u5316\u964D\u4EF7\u7684\u7EAF\u9759\u6001\u90E8\u5206\u4E5F\u5F88\u91CD\u8981\u3002\u9759\u6001\u5185\u5BB9\u88AB\u4F18\u5316\u4E3A\u5355\u4E2A\u5360\u4F4D\u7B26\u8282\u70B9\uFF0C\u5E76\u4ECE\u9875\u9762\u7684 JavaScript \u6709\u6548\u8D1F\u8F7D\u4E2D\u6D88\u9664\u3002\u5728\u5BA2\u6237\u7AEF\u6C34\u5316\u8FC7\u7A0B\u4E2D\u4E5F\u8DF3\u8FC7\u4E86\u8FD9\u4E9B\u6B65\u9AA4\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u60A8\u53EA\u9700\u4E3A\u4EFB\u4F55\u7ED9\u5B9A\u9875\u9762\u4E0A\u7684\u52A8\u6001\u90E8\u5206\u4ED8\u8D39\u3002</p></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{{ 1 + 1 }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i in 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ &#39;for: &#39; + i }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2</p>`,21);function F(y,i,C,A,b,u){return n(),s("div",null,[D,(n(),s(p,null,o(3,a=>r("div",null,c("for: "+a),1)),64))])}const h=l(t,[["render",F]]);export{m as __pageData,h as default};
