import{c as n,Q as a,j as p,m as l}from"./chunks/framework.rlpw0eGz.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/java服务启动脚本.md","filePath":"linux/java服务启动脚本.md","lastUpdated":null}'),e={name:"linux/java服务启动脚本.md"};function o(r,s,c,t,i,y){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h3 id="java服务启动脚本" tabindex="-1">JAVA服务启动脚本 <a class="header-anchor" href="#java服务启动脚本" aria-label="Permalink to &quot;JAVA服务启动脚本&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">project_name</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">ruoyi-admin</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 启动 cmp bizsvc 服务</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">start</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E06C75;">        jar_home</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">pwd</span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#61AFEF;">	nohup</span><span style="color:#98C379;"> java</span><span style="color:#D19A66;"> -server</span><span style="color:#D19A66;"> -Xms2g</span><span style="color:#D19A66;"> -Xmx2g</span><span style="color:#D19A66;"> -jar</span><span style="color:#E06C75;"> $jar_home</span><span style="color:#98C379;">/</span><span style="color:#E06C75;">$project_name</span><span style="color:#98C379;">.jar</span><span style="color:#ABB2BF;">  &gt; </span><span style="color:#98C379;">logs/</span><span style="color:#E06C75;">$project_name</span><span style="color:#98C379;">.log</span><span style="color:#D19A66;"> --spring.config.location=conf/</span><span style="color:#ABB2BF;"> 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	#sleep 100</span></span>
<span class="line"><span style="color:#61AFEF;">	sleep</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#E06C75;">	javaps</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#61AFEF;">ps</span><span style="color:#D19A66;"> -ef</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> grep</span><span style="color:#98C379;"> java </span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;"> grep</span><span style="color:#E06C75;"> $jar_home</span><span style="color:#98C379;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	if</span><span style="color:#ABB2BF;"> [ </span><span style="color:#56B6C2;">-n</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;">$javaps</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> ]; </span><span style="color:#C678DD;">then</span></span>
<span class="line"><span style="color:#E06C75;">		psid</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">echo</span><span style="color:#E06C75;"> $javaps</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> awk</span><span style="color:#98C379;"> &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#C678DD;">	else</span></span>
<span class="line"><span style="color:#E06C75;">		psid</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">0</span></span>
<span class="line"><span style="color:#C678DD;">	fi</span></span>
<span class="line"><span style="color:#56B6C2;">	echo</span><span style="color:#98C379;"> &quot;PID：</span><span style="color:#E06C75;">$psid</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">        echo</span><span style="color:#98C379;"> &quot;jar home: </span><span style="color:#E06C75;">$jar_home</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">	echo</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;">$project_name</span><span style="color:#98C379;"> already start&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 停止 cmp bizsvc 服务</span></span>
<span class="line"><span style="color:#61AFEF;">stop</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#E06C75;">        jar_home</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">pwd</span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#E06C75;">        javaps</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#61AFEF;">ps</span><span style="color:#D19A66;"> -ef</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> grep</span><span style="color:#98C379;"> java </span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;"> grep</span><span style="color:#E06C75;"> $jar_home</span><span style="color:#98C379;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	 if</span><span style="color:#ABB2BF;"> [ </span><span style="color:#56B6C2;">-n</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;">$javaps</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> ]; </span><span style="color:#C678DD;">then</span></span>
<span class="line"><span style="color:#E06C75;">	  psid</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">echo</span><span style="color:#E06C75;"> $javaps</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> awk</span><span style="color:#98C379;"> &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#56B6C2;">		echo</span><span style="color:#98C379;"> &quot;PID：</span><span style="color:#E06C75;">$psid</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">		kill</span><span style="color:#E06C75;"> $psid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                # 探测系统是否已退出</span></span>
<span class="line"><span style="color:#C678DD;">                while</span><span style="color:#56B6C2;"> true</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">do</span></span>
<span class="line"><span style="color:#C678DD;">                  if</span><span style="color:#ABB2BF;"> ! </span><span style="color:#56B6C2;">kill</span><span style="color:#D19A66;"> -0</span><span style="color:#E06C75;"> $psid</span><span style="color:#ABB2BF;"> 2&gt;</span><span style="color:#98C379;">/dev/null</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">then</span></span>
<span class="line"><span style="color:#C678DD;">                    break</span></span>
<span class="line"><span style="color:#C678DD;">                  else</span></span>
<span class="line"><span style="color:#56B6C2;">                    echo</span><span style="color:#98C379;"> &quot;等待进程 </span><span style="color:#E06C75;">$psid</span><span style="color:#98C379;"> 退出...&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">                    sleep</span><span style="color:#D19A66;"> 1</span><span style="color:#7F848E;font-style:italic;"> # 每隔一秒检查一次</span></span>
<span class="line"><span style="color:#C678DD;">                  fi</span></span>
<span class="line"><span style="color:#C678DD;">                done</span></span>
<span class="line"><span style="color:#56B6C2;">                echo</span><span style="color:#98C379;"> &quot;进程 </span><span style="color:#E06C75;">$psid</span><span style="color:#98C379;"> 已经停止&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">	 </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	 else</span></span>
<span class="line"><span style="color:#56B6C2;">	  echo</span><span style="color:#98C379;"> &quot;jar home: </span><span style="color:#E06C75;">$jar_home</span><span style="color:#98C379;">，服务没有启动！&quot;</span></span>
<span class="line"><span style="color:#C678DD;">	 fi</span></span>
<span class="line"><span style="color:#56B6C2;">        echo</span><span style="color:#98C379;"> &quot;jar home: </span><span style="color:#E06C75;">$jar_home</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#56B6C2;"> echo</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;">$project_name</span><span style="color:#98C379;"> already stop&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">case</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;font-style:italic;">$1</span><span style="color:#98C379;">&quot;</span><span style="color:#C678DD;"> in</span></span>
<span class="line"><span style="color:#98C379;">   &#39;start&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">     start</span></span>
<span class="line"><span style="color:#ABB2BF;">      ;;</span></span>
<span class="line"><span style="color:#98C379;">   &#39;stop&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">     stop</span></span>
<span class="line"><span style="color:#ABB2BF;">     ;;</span></span>
<span class="line"><span style="color:#98C379;">   &#39;restart&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">     stop</span></span>
<span class="line"><span style="color:#61AFEF;">     start</span></span>
<span class="line"><span style="color:#ABB2BF;">     ;;</span></span>
<span class="line"><span style="color:#ABB2BF;">  *)</span></span>
<span class="line"><span style="color:#61AFEF;">	 stop</span></span>
<span class="line"><span style="color:#61AFEF;">	 start</span></span>
<span class="line"><span style="color:#56B6C2;">     echo</span><span style="color:#98C379;"> &quot;stop &amp; start&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">	 ;;</span></span>
<span class="line"><span style="color:#C678DD;">esac</span></span>
<span class="line"><span style="color:#56B6C2;">exit</span><span style="color:#D19A66;"> 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div>`,2)])])}const u=n(e,[["render",o]]);export{C as __pageData,u as default};
