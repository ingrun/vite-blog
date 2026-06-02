import{c as n,Q as a,j as e,m as p}from"./chunks/framework.rlpw0eGz.js";const o=JSON.parse('{"title":"centos7 yum安装redis","description":"","frontmatter":{},"headers":[],"relativePath":"linux/yum安装redis.md","filePath":"linux/yum安装redis.md","lastUpdated":null}'),l={name:"linux/yum安装redis.md"};function r(i,s,c,t,b,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="centos7-yum安装redis" tabindex="-1">centos7 yum安装redis <a class="header-anchor" href="#centos7-yum安装redis" aria-label="Permalink to &quot;centos7 yum安装redis&quot;">​</a></h1><p><a href="https://zhuanlan.zhihu.com/p/626263224" target="_blank" rel="noreferrer">知乎-CentOS 7 / Linux 安装Redis（超简单版)</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yum --enablerepo=remi install redis -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="启动等操作" tabindex="-1">启动等操作 <a class="header-anchor" href="#启动等操作" aria-label="Permalink to &quot;启动等操作&quot;">​</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 启动</span></span>
<span class="line"><span>systemctl start redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看状态</span></span>
<span class="line"><span>systemctl status redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止</span></span>
<span class="line"><span>systemctl stop redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启</span></span>
<span class="line"><span>systemctl restart redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="查看版本号" tabindex="-1">查看版本号 <a class="header-anchor" href="#查看版本号" aria-label="Permalink to &quot;查看版本号&quot;">​</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>redis-server -v</span></span>
<span class="line"><span>redis-server --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出</span></span>
<span class="line"><span>Redis server v=3.2.12 sha=00000000:0 malloc=jemalloc-3.6.0 bits=64 </span></span>
<span class="line"><span>build=7897e7d0e13773f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="验证安装" tabindex="-1">验证安装 <a class="header-anchor" href="#验证安装" aria-label="Permalink to &quot;验证安装&quot;">​</a></h2><p>安装 <code>redis</code>，都会附带安装 <code>redis-cli</code>，这是 Redis 的客户端工具</p><p>我们可以使用它，验证 redis 是否正常运行</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 进入客户端</span></span>
<span class="line"><span>redis-cli</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 成功连接并且进入客户端</span></span>
<span class="line"><span>127.0.0.1:6379&gt; </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加数据</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set test-key test-value</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询数据</span></span>
<span class="line"><span>127.0.0.1:6379&gt; get test-key</span></span>
<span class="line"><span>&quot;test-value&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除数据</span></span>
<span class="line"><span>127.0.0.1:6379&gt; del test-key</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 退出客户端</span></span>
<span class="line"><span>127.0.0.1:6379&gt; exit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>能正常连接，且操作数据，表示安装成功。</p><h2 id="开启远程连接" tabindex="-1">开启远程连接 <a class="header-anchor" href="#开启远程连接" aria-label="Permalink to &quot;开启远程连接&quot;">​</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 进入并编辑redsi.conf文件</span></span>
<span class="line"><span>vim /etc/redis.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 找到bind 127.0.0.1 将其注释（#）或修改为 bind 0.0.0.0</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 为了安全，我们需要开启密码保护</span></span>
<span class="line"><span># 找到 # requirepass xxx ，默认是被注释的，将注释符号去掉，并添加自己的密码</span></span>
<span class="line"><span># 找到它要往下拉很久，我们也可以直接在 bind 0.0.0.0 下面添加一个 requirepass xxx</span></span>
<span class="line"><span>requirepass 123456</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 端口号设置  默认6379</span></span>
<span class="line"><span>prot 6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 按 esc 键，并输入 :wq 保存</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启，让配置生效</span></span>
<span class="line"><span>systemctl restart redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="开放端口" tabindex="-1">开放端口 <a class="header-anchor" href="#开放端口" aria-label="Permalink to &quot;开放端口&quot;">​</a></h2><p>腾讯云和阿里云的服务器，请到控制台 - 服务器 - 安全组 - 开放6379端口，否则远端无法登录。</p>`,17)])])}const m=n(l,[["render",r]]);export{o as __pageData,m as default};
