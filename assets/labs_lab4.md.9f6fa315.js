import{_ as l,o as a,c as s,a as e}from"./app.454a46e9.js";const f=JSON.parse('{"title":"\u5B9E\u9A8C\u56DB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u9A8C\u8BF4\u660E","slug":"\u5B9E\u9A8C\u8BF4\u660E"}],"relativePath":"labs/lab4.md","lastUpdated":1705572109000}'),i={name:"labs/lab4.md"},n=e(`<h1 id="\u5B9E\u9A8C\u56DB" tabindex="-1">\u5B9E\u9A8C\u56DB <a class="header-anchor" href="#\u5B9E\u9A8C\u56DB" aria-hidden="true">#</a></h1><ul><li>Deadline: 12 \u6708 17 \u65E5 23:30\uFF0C\u8FDF\u4EA4\u4F1A\u6263\u9664\u4E00\u5B9A\u6BD4\u4F8B\u7684\u5206\u6570</li><li>\u672C\u6B21 <strong>\u5B9E\u9A8C</strong> <a href="/zip/lab4.zip">\u6587\u6863\u53CA\u53C2\u8003\u4EE3\u7801</a></li><li>BB \u7CFB\u7EDF\u63D0\u4EA4 zip \u538B\u7F29\u5305\uFF0C\u538B\u7F29\u5305\u5185\u76EE\u5F55\u7ED3\u6784<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PB22******_\u59D3\u540D_LAB4.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 PB22******_\u59D3\u540D_report.pdf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 lab4.asm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>\u672C\u6B21\u5B9E\u9A8C <a href="/test/lab4.txt">\u6D4B\u8BD5\u6837\u4F8B</a> \u5DF2\u516C\u5F00</li></ul><h2 id="\u5B9E\u9A8C\u8BF4\u660E" tabindex="-1">\u5B9E\u9A8C\u8BF4\u660E <a class="header-anchor" href="#\u5B9E\u9A8C\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u4F60\u7684\u7A0B\u5E8F\u5E94\u5F53\u4ECE x3000 \u5F00\u59CB\u8FD0\u884C\uFF0C\u7A0B\u5E8F\u7684\u529F\u80FD\u662F\u8BFB\u53D6\u9884\u5148\u5B58\u653E\u5728\u5185\u5B58\u4E2D 0x3100 \u4E3A\u5730\u5740\u7684\u4E00\u4E2A\u6570\uFF0C\u5E76\u5728\u7A0B\u5E8F\u8FD0\u884C\u7ED3\u675F\u540E\uFF0C\u5C06\u4E00\u7CFB\u5217\u8BA1\u7B97\u7ED3\u679C\u4FDD\u5B58\u5728 0x3101 \u5F00\u59CB\u7684\u5730\u5740\u4E2D \uFF08\u66F4\u8BE6\u7EC6\u7684\u8BF4\u660E\u53C2\u89C1\u5B9E\u9A8C\u6587\u6863\uFF09</li><li>\u7EA6\u5B9A\u7A0B\u5E8F\u8FD0\u884C\u5230\u7A7A\u6307\u4EE4\uFF08\u5BF9\u4E8E\u672A\u521D\u59CB\u5316\uFF0C\u4E5F\u6CA1\u6709\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FEE\u6539\u7684\u5185\u5B58\uFF0C\u8BA4\u4E3A\u5B83\u5B58\u653E\u4E00\u6761\u7A7A\u6307\u4EE4\uFF09\u6216 TRAP \u6307\u4EE4\u65F6\uFF0C\u8FD0\u884C\u7ED3\u675F</li><li>\u672C\u6B21\u5B9E\u9A8C\u63D0\u4EA4\u6C47\u7F16\u4EE3\u7801</li><li>\u6C47\u7F16\u4EE3\u7801\u6CE8\u610F\u683C\u5F0F\uFF1A <ul><li>\u9700\u8981\u4EE5 .ORIG x3000 \u7ED9\u51FA\u7A0B\u5E8F\u7684\u7684\u8D77\u59CB\u5730\u5740</li><li>\u9700\u8981\u4EE5 .END \u4F5C\u4E3A\u7A0B\u5E8F\u7ED3\u675F</li><li>\u4EE5\u82F1\u6587\u5206\u53F7\u4F5C\u4E3A\u6CE8\u91CA\u5F00\u59CB\u7684\u6807\u8BB0</li></ul></li><li>\u5B9E\u9A8C\u9700\u8981\u63D0\u4EA4\u5B9E\u9A8C\u62A5\u544A\uFF0C\u5360\u6709\u4E00\u5B9A\u6BD4\u4F8B\u7684\u5206\u6570\uFF0C\u9700\u8981\u5305\u542B\u5B9E\u9A8C\u6587\u6863\u4E2D\u8981\u6C42\u7684\u90E8\u5206</li><li>\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6216\u82F1\u6587\u5B8C\u6210\u5B9E\u9A8C\u62A5\u544A</li><li>\u672C\u7F51\u7AD9\u63D0\u4F9B\u4E86 <a href="/judge.html">\u81EA\u6D4B</a> \u529F\u80FD\uFF0C\u4F46\u9A8C\u6536\u65F6\u53EF\u80FD\u4F1A\u589E\u6DFB\u66F4\u591A\u7684\u6837\u4F8B\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u8865\u5145\u6D4B\u8BD5\u6837\u4F8B\u8FDB\u884C\u6D4B\u8BD5 <ul><li>\u672C\u6B21\u81EA\u6D4B\u4E2D\u4F1A\u9ED8\u8BA4\u4EE5\u4ECE x3001 \u4E3A\u5730\u5740\u5F00\u59CB\u7684\u5185\u5B58\u76F4\u5230\u7B2C\u4E00\u4E2A\u4E3A <strong>\u96F6</strong> \u7684\u5730\u5740\u4E4B\u524D\u7684\u5185\u5B58\u4F5C\u4E3A\u63D0\u4EA4\u7684\u7A0B\u5E8F\u7684\u7ED3\u679C</li></ul></li><li>\u8BF7\u52FF\u6284\u88AD</li></ul>`,4),t=[n];function r(o,p,c,d,_,h){return a(),s("div",null,t)}const A=l(i,[["render",r]]);export{f as __pageData,A as default};
