import{_ as t,c as d,o as e,b as r}from"./app.38b88522.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS \u4E2D\u957F\u5EA6\u5355\u4F4D","slug":"css-\u4E2D\u957F\u5EA6\u5355\u4F4D","link":"#css-\u4E2D\u957F\u5EA6\u5355\u4F4D","children":[{"level":3,"title":"\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6","slug":"\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6","link":"#\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6","children":[]},{"level":3,"title":"\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D","slug":"\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D","link":"#\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D","children":[]}]}],"relativePath":"notes/2023-02-09.md","lastUpdated":1675932057000}'),o={name:"notes/2023-02-09.md"},a=r('<h2 id="css-\u4E2D\u957F\u5EA6\u5355\u4F4D" tabindex="-1">CSS \u4E2D\u957F\u5EA6\u5355\u4F4D <a class="header-anchor" href="#css-\u4E2D\u957F\u5EA6\u5355\u4F4D" aria-hidden="true">#</a></h2><h3 id="\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6" tabindex="-1">\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6 <a class="header-anchor" href="#\u76F8\u5BF9\u5355\u4F4D\u957F\u5EA6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5355\u4F4D</th><th>\u63CF\u8FF0</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>em</td><td>\u76F8\u5BF9\u4E8E\u81EA\u8EAB font-size\uFF08\u5B57\u4F53\u5927\u5C0F\uFF09\u5C5E\u6027\u7684\u503C\uFF0C\u5982\u679C\u81EA\u8EAB\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u7EE7\u627F\u7236\u5143\u7D20 font-size \u5C5E\u6027\u7684\u503C\uFF0C1em \u7B49\u540C\u4E8E font-size \u5C5E\u6027\u503C\uFF0C\u4F8B\u5982 font-size \u7684\u503C\u4E3A 16px\uFF0C\u90A3\u4E48 1em \u5C31\u7B49\u4E8E 16px\uFF0C2em \u5C31\u7B49\u4E8E 32px</td><td><code>p{line-height:2em;}</code></td></tr><tr><td>rem</td><td>\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20\u7684 font-size \u5C5E\u6027\u7684\u5927\u5C0F\uFF0C\u6BD4\u5982\u6839\u5143\u7D20\u7684 font-size \u662F 100px\uFF0C\u90A3\u4E48 1.2rem \u5C31\u76F8\u5F53\u4E8E 120px</td><td><code>p{font-size: 1.2rem;}</code></td></tr><tr><td>ex</td><td>\u76F8\u5BF9\u4E8E\u6240\u7528\u5B57\u4F53\u4E2D\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD x \u7684\u9AD8\u5EA6\uFF0C\u82E5\u65E0\u6CD5\u786E\u5B9A x \u7684\u9AD8\u5EA6\u5219\u4F7F\u7528 0.5em \u8BA1\u7B97</td><td><code>p{font-size: 1ex;}</code></td></tr><tr><td>ch</td><td>\u76F8\u5BF9\u4E8E\u6240\u7528\u5B57\u4F53\u4E2D\u6570\u5B57 0 \u7684\u9AD8\u5EA6\uFF0C\u82E5\u65E0\u6CD5\u786E\u5B9A 0 \u7684\u9AD8\u5EA6\u5219\u4F7F\u7528 0.5em \u8BA1\u7B97</td><td><code>p{line-height: 3ch;}</code></td></tr><tr><td>vw</td><td>\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u5EA6\uFF0C1vw = \u7A97\u53E3\u5BBD\u5EA6\u7684 1%</td><td><code>p{font-size: 5vw;} </code></td></tr><tr><td>vh</td><td>\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u9AD8\u5EA6\uFF0C1vh = \u7A97\u53E3\u9AD8\u5EA6\u7684 1%</td><td><code>p{font-size: 5vh;} </code></td></tr><tr><td>vmin</td><td>vw \u4E0E vh \u4E2D\u8F83\u5C0F\u7684\u503C</td><td><code>p{font-size: 5vmin;} </code></td></tr><tr><td>vmax</td><td>vw \u4E0E vh \u4E2D\u8F83\u5927\u7684\u503C</td><td><code>p{font-size: 5vmax;} </code></td></tr><tr><td>%</td><td>\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u5BBD\u5EA6\u6216\u5B57\u4F53\u5927\u5C0F\u7684\u767E\u5206\u6BD4</td><td><code>div{width: 55%}</code></td></tr></tbody></table><h3 id="\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D" tabindex="-1">\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D <a class="header-anchor" href="#\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5355\u4F4D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cm</td><td>\u5398\u7C73</td></tr><tr><td>mm</td><td>\u6BEB\u7C73</td></tr><tr><td>in</td><td>\u82F1\u5BF8\uFF081in = 96px = 2.54cm\uFF09</td></tr><tr><td>px</td><td>\u50CF\u7D20\uFF081px = 1/96in\uFF09</td></tr><tr><td>pt</td><td>point\uFF0C\u662F\u4E00\u79CD\u4E13\u7528\u7684\u5370\u5237\u5355\u4F4D\u201C\u78C5\u201D\uFF0C\u4E5F\u53EF\u4EE5\u79F0\u4E3A\u201C\u70B9\u201D\uFF081pt = 1/72in\uFF09</td></tr><tr><td>pc</td><td>pica\uFF0C\u4E2D\u6587\u53EF\u79F0\u4E3A\u201C\u6D3E\u5361\u201D\uFF0C\u5370\u5237\u884C\u4E1A\u7528\u4E8E\u63CF\u8FF0\u5B57\u4F53\u5927\u5C0F\u7684\u5355\u4F4D\uFF0C\u76F8\u5F53\u4E8E\u6211\u56FD\u65B0\u56DB\u53F7\u94C5\u5B57\u7684\u5C3A\u5BF8\uFF081pc = 12pt\uFF09</td></tr></tbody></table>',5),i=[a];function c(n,s,h,l,p,_){return e(),d("div",null,i)}const v=t(o,[["render",c]]);export{f as __pageData,v as default};
