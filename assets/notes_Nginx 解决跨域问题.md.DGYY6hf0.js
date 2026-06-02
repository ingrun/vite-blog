import{c as n,Q as a,j as l,m as p}from"./chunks/framework.rlpw0eGz.js";const y=JSON.parse('{"title":"Nginx 解决跨域问题","description":"Nginx 解决跨域问题 —— 2023-06-17","frontmatter":{"title":"Nginx 解决跨域问题","description":"Nginx 解决跨域问题 —— 2023-06-17","date":"2023-06-17T00:00:00.000Z"},"headers":[],"relativePath":"notes/Nginx 解决跨域问题.md","filePath":"notes/Nginx 解决跨域问题.md","lastUpdated":null}'),e={name:"notes/Nginx 解决跨域问题.md"};function o(r,s,c,t,B,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="nginx-解决跨域问题" tabindex="-1">Nginx 解决跨域问题 <a class="header-anchor" href="#nginx-解决跨域问题" aria-label="Permalink to &quot;Nginx 解决跨域问题&quot;">​</a></h1><p class="note-date">2023-06-17</p><p><a href="https://juejin.cn/post/7067616395143577630" target="_blank" rel="noreferrer">Nginx跨域解决配置示例</a></p><ul><li>跨域是浏览器的安全策略造成的，但其也是必要的，不能为了方便而放弃安全性</li><li>跨域是不同源的请求导致的：IP、域名、端口等不同都会造成跨域</li><li>跨域的判断是由请求头和响应头的相关字段进行判断的，这个是设置的基础</li></ul><p>那解决方法目前看来有三个：</p><ul><li>前端层面自己解决：前端请求时自己进行代理</li><li>网关层面进行解决：在nginx、kong同统一网关中进行配置解决</li><li>服务后台解决：在Go、Java Web中进行配置解决，经典的Cors配置</li></ul><p>有时候是只能使用一样跨域解决方式的，最终的效果是需要保证最后前端收到的请求头符合规范,特别是下面这个头：</p><p>Access-Control-Allow-Origin: *</p><p>如果返回的响应头里面少了会跨域，但多了，比如返回了两个相同的，也会跨域</p><p>注：在实际开发中，如果发生跨域，排查的第一步就是看看响应头里面是否返回了正确的数据，这样就能精确的进行下一步的解决操作</p><h3 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h3><p>下面展示如果通过配置Nginx解决跨域问题：</p><p>配置两个服务，监听在相同的端口，服务名不同而已，在转发配置中加上跨域配置，示例文件如下：</p><div class="language-vim line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"># For more information on configuration, see:</span></span>
<span class="line"><span style="color:#ABB2BF;">#   * Official English Documentation: </span><span style="color:#E06C75;">http://nginx.org/en/docs/</span></span>
<span class="line"><span style="color:#ABB2BF;">#   * Official Russian Documentation: </span><span style="color:#E06C75;">http://nginx.org/ru/docs/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">user nginx;</span></span>
<span class="line"><span style="color:#ABB2BF;">worker_processes auto;</span></span>
<span class="line"><span style="color:#ABB2BF;">error_log </span><span style="color:#E06C75;">/var/</span><span style="color:#ABB2BF;">log</span><span style="color:#E06C75;">/nginx/</span><span style="color:#ABB2BF;">error.log;</span></span>
<span class="line"><span style="color:#ABB2BF;">pid </span><span style="color:#E06C75;">/run/</span><span style="color:#ABB2BF;">nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># Load dynamic modules. See </span><span style="color:#E06C75;">/usr/</span><span style="color:#ABB2BF;">share</span><span style="color:#E06C75;">/doc/</span><span style="color:#ABB2BF;">nginx/README.dynamic.</span></span>
<span class="line"><span style="color:#ABB2BF;">include </span><span style="color:#E06C75;">/usr/</span><span style="color:#ABB2BF;">share</span><span style="color:#E06C75;">/nginx/</span><span style="color:#ABB2BF;">modules/*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">events {</span></span>
<span class="line"><span style="color:#ABB2BF;">    worker_connections </span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">http {</span></span>
<span class="line"><span style="color:#ABB2BF;">    log_format  main  </span><span style="color:#98C379;">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#98C379;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#98C379;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    access_log  </span><span style="color:#E06C75;">/var/</span><span style="color:#ABB2BF;">log</span><span style="color:#E06C75;">/nginx/</span><span style="color:#ABB2BF;">access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    sendfile            on;</span></span>
<span class="line"><span style="color:#ABB2BF;">    tcp_nopush          on;</span></span>
<span class="line"><span style="color:#ABB2BF;">    tcp_nodelay         on;</span></span>
<span class="line"><span style="color:#ABB2BF;">    keepalive_timeout   </span><span style="color:#D19A66;">65</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    types_hash_max_size </span><span style="color:#D19A66;">2048</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    include             </span><span style="color:#E06C75;">/etc/</span><span style="color:#ABB2BF;">nginx/mime.types;</span></span>
<span class="line"><span style="color:#ABB2BF;">    default_type        application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    # Load modular configuration files from the </span><span style="color:#E06C75;">/etc/</span><span style="color:#ABB2BF;">nginx/conf.d directory.</span></span>
<span class="line"><span style="color:#ABB2BF;">    # See </span><span style="color:#E06C75;">http://nginx.org/en/docs/ngx_core_module.html#include</span></span>
<span class="line"><span style="color:#ABB2BF;">    # </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> more information.</span></span>
<span class="line"><span style="color:#ABB2BF;">    include </span><span style="color:#E06C75;">/etc/</span><span style="color:#ABB2BF;">nginx</span><span style="color:#E06C75;">/conf.d/</span><span style="color:#ABB2BF;">*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    # 转发websocket需要的设置</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_set_header X-Real_IP $remote_addr;</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_set_header X_Forward_For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_http_version </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#ABB2BF;">    proxy_set_header Connection </span><span style="color:#98C379;">&#39;upgrade&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    # Service1服务配置</span></span>
<span class="line"><span style="color:#ABB2BF;">    server {</span></span>
<span class="line"><span style="color:#ABB2BF;">        listen       </span><span style="color:#D19A66;">80</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        server_name  www.service1.</span><span style="color:#C678DD;">com</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        root         </span><span style="color:#E06C75;">/usr/</span><span style="color:#ABB2BF;">share</span><span style="color:#E06C75;">/nginx/</span><span style="color:#ABB2BF;">html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        # Load configuration files </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> the default server block.</span></span>
<span class="line"><span style="color:#ABB2BF;">        include </span><span style="color:#E06C75;">/etc/</span><span style="color:#ABB2BF;">nginx</span><span style="color:#E06C75;">/default.d/</span><span style="color:#ABB2BF;">*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        location / {</span></span>
<span class="line"><span style="color:#ABB2BF;">            proxy_pass </span><span style="color:#E06C75;">http://localhost:8188/;</span></span>
<span class="line"><span style="color:#ABB2BF;">            # 设置是否允许 cookie 传输</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Credentials </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            # 允许请求地址跨域 * 做为通配符</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Origin * always;</span></span>
<span class="line"><span style="color:#ABB2BF;">            # 允许跨域的请求方法</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Methods </span><span style="color:#98C379;">&#39;GET, POST, PUT, DELETE, OPTIONS&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Headers </span><span style="color:#98C379;">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">            if</span><span style="color:#ABB2BF;"> ($request_method = </span><span style="color:#98C379;">&#39;OPTIONS&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">                return</span><span style="color:#D19A66;"> 204</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        error_page </span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;"> /</span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;">.html;</span></span>
<span class="line"><span style="color:#ABB2BF;">            location = /40x.html {</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        error_page </span><span style="color:#D19A66;">500</span><span style="color:#D19A66;"> 502</span><span style="color:#D19A66;"> 503</span><span style="color:#D19A66;"> 504</span><span style="color:#ABB2BF;"> /50x.html;</span></span>
<span class="line"><span style="color:#ABB2BF;">            location = /50x.html {</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    # Service2的配置</span></span>
<span class="line"><span style="color:#ABB2BF;">    server {</span></span>
<span class="line"><span style="color:#ABB2BF;">        listen       </span><span style="color:#D19A66;">80</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        server_name  www.service2.</span><span style="color:#C678DD;">com</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        root         </span><span style="color:#E06C75;">/usr/</span><span style="color:#ABB2BF;">share</span><span style="color:#E06C75;">/nginx/</span><span style="color:#ABB2BF;">html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        # Load configuration files </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> the default server block.</span></span>
<span class="line"><span style="color:#ABB2BF;">        include </span><span style="color:#E06C75;">/etc/</span><span style="color:#ABB2BF;">nginx</span><span style="color:#E06C75;">/default.d/</span><span style="color:#ABB2BF;">*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        location / {</span></span>
<span class="line"><span style="color:#ABB2BF;">            proxy_pass </span><span style="color:#E06C75;">http://localhost:9096/;</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Origin * always;</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header </span><span style="color:#98C379;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#98C379;"> &#39;GET,POST,OPTIONS,PUT,DELETE&#39;</span><span style="color:#ABB2BF;"> always;</span></span>
<span class="line"><span style="color:#ABB2BF;">            add_header Access-Control-Allow-Headers </span><span style="color:#98C379;">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">            if</span><span style="color:#ABB2BF;"> ($request_method = </span><span style="color:#98C379;">&#39;OPTIONS&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">                return</span><span style="color:#D19A66;"> 204</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        error_page </span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;"> /</span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;">.html;</span></span>
<span class="line"><span style="color:#ABB2BF;">            location = /40x.html {</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        error_page </span><span style="color:#D19A66;">500</span><span style="color:#D19A66;"> 502</span><span style="color:#D19A66;"> 503</span><span style="color:#D19A66;"> 504</span><span style="color:#ABB2BF;"> /50x.html;</span></span>
<span class="line"><span style="color:#ABB2BF;">            location = /50x.html {</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div>`,14)])])}const u=n(e,[["render",o]]);export{y as __pageData,u as default};
