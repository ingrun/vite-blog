import{_ as s,c as a,o as n,d as l}from"./app.7641ba52.js";const u=JSON.parse('{"title":"centos7 \u5B89\u88C5 mysql8.0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5378\u8F7DMariaDB","slug":"\u5378\u8F7Dmariadb","link":"#\u5378\u8F7Dmariadb","children":[]},{"level":2,"title":"\u4E0B\u8F7D\u5B89\u88C5rpm\u5305","slug":"\u4E0B\u8F7D\u5B89\u88C5rpm\u5305","link":"#\u4E0B\u8F7D\u5B89\u88C5rpm\u5305","children":[]},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","slug":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","link":"#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"\u8FDE\u63A5\u6570\u636E\u5E93","slug":"\u8FDE\u63A5\u6570\u636E\u5E93","link":"#\u8FDE\u63A5\u6570\u636E\u5E93","children":[]}],"relativePath":"linux/\u5B89\u88C5 mysql8.0.md","lastUpdated":1744010922000}'),e={name:"linux/\u5B89\u88C5 mysql8.0.md"},p=l(`<h1 id="centos7-\u5B89\u88C5-mysql8-0" tabindex="-1">centos7 \u5B89\u88C5 mysql8.0 <a class="header-anchor" href="#centos7-\u5B89\u88C5-mysql8-0" aria-hidden="true">#</a></h1><h2 id="\u5378\u8F7Dmariadb" tabindex="-1">\u5378\u8F7DMariaDB <a class="header-anchor" href="#\u5378\u8F7Dmariadb" aria-hidden="true">#</a></h2><p>\u67E5\u8BE2\u5DF2\u5B89\u88C5\u7684MariaDB</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">rpm -qa</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep mariadb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// mariadb-lib-</span><span style="color:#89DDFF;">*************</span><span style="color:#A6ACCD;">.x86_64</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5378\u8F7D</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">rpm -e --nodeps mariadb-lib-</span><span style="color:#89DDFF;">*************</span><span style="color:#A6ACCD;">.x86_64</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u786E\u8BA4\u662F\u5426\u5DF2\u5378\u8F7D</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">rpm -qa</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep mariadb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E0B\u8F7D\u5B89\u88C5rpm\u5305" tabindex="-1">\u4E0B\u8F7D\u5B89\u88C5rpm\u5305 <a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5rpm\u5305" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">wget https://repo.mysql.com//mysql80-community-release-el7-10.noarch.rpm</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install mysql80-community-release-el7-10.noarch.rpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yum install mysql-community-server -y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/my.cnf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;"># For advice on how to change settings please see</span></span>
<span class="line"><span style="color:#676E95;"># http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># \u9ED8\u8BA4\u5B57\u7B26\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">default-character-set=utf8mb4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">datadir=/var/lib/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">socket=/var/lib/mysql/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">log-error=/var/log/mysqld.log</span></span>
<span class="line"><span style="color:#A6ACCD;">pid-file=/var/run/mysqld/mysqld.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">port=33306</span></span>
<span class="line"><span style="color:#676E95;">#\u8BBE\u7F6E\u4E0D\u533A\u5206\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">lower_case_table_names=1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u914D\u7F6E\u65E5\u5FD7\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">log_timestamps=SYSTEM</span></span>
<span class="line"><span style="color:#676E95;">##\u7CFB\u7EDF\u65F6\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">default-time-zone=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+08:00</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;">#\u6DFB\u52A0sql_mode</span></span>
<span class="line"><span style="color:#A6ACCD;">sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1">\u8FDE\u63A5\u6570\u636E\u5E93 <a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><p>\u542F\u52A8</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl start mysqld</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u521D\u59CB\u5BC6\u7801</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">temporary password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /var/log/mysqld.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 2023-09-26T07:44:32.752489Z 6 </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Note</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">MY-010454</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> A temporary password is generated </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> root@localhost: fAoleiKiq9</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">W</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u521D\u59CB\u5BC6\u7801\u8FDE\u63A5\u6570\u636E\u5E93</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mysql -u root -p  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u521D\u59CB\u5BC6\u7801\uFF0C<code>\u5BC6\u7801\u81F3\u5C11\u8981\u6709\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4E00\u4E2A\u6570\u5B57\uFF0C\u4E00\u4E2A\u7279\u6B8A\u7B26\u53F7\uFF0C\u5E76\u4E14\u957F\u5EA6\u81F3\u5C11\u4E3A\u516B\u4F4D\u3002</code></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ALTER USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyNewPass4!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u53EF\u8FDC\u7A0B\u8BBF\u95EE</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">use mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">update user SET Host = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> WHERE user = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> and Host=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,26),r=[p];function o(c,i,t,d,b,m){return n(),a("div",null,r)}const D=s(e,[["render",o]]);export{u as __pageData,D as default};
