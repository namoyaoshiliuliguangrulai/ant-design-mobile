webpackJsonp([16,94],{357:function(n,a,s){n.exports={content:[["p","\u6309\u94ae"]],meta:{order:0,title:"\u7c7b\u578b\u3001\u5c3a\u5bf8",filename:"components/button/demo/basic.md",id:"components-button-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ButtonExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-container</span> <span class="token attr-name">need-left-right-margin"</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>disabled \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>loading \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5e26\u56fe\u6807\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'!svg-sprite!./reload.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u672c\u5730\u56fe\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* &lt;Button className="btn" activeStyle={false}>\u65e0\u70b9\u51fb\u53cd\u9988&lt;/Button> */</span><span class="token punctuation">}</span>\n      <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* &lt;Button className="btn" activeStyle={{ backgroundColor: \'red\' }}>\u81ea\u5b9a\u4e49\u70b9\u51fb\u53cd\u9988 style&lt;/Button> */</span><span class="token punctuation">}</span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'30px 0 18px 0\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline <span class="token operator">/</span> small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>inline small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(3),s(60),s(59)),p=n(t),e=(s(23),s(22)),o=n(e),c=function(){return a.createElement("div",{className:"btn-container need-left-right-margin"},a.createElement("div",null,a.createElement(o["default"],{className:"btn",type:"primary"},"primary \u6309\u94ae"),a.createElement(o["default"],{className:"btn",disabled:!0,onClick:function(n){return console.log(n)}},"disabled \u6309\u94ae"),a.createElement(o["default"],{className:"btn",loading:!0},"loading \u6309\u94ae"),a.createElement(o["default"],{className:"btn",icon:"check-circle-o"},"\u5e26\u56fe\u6807\u6309\u94ae"),a.createElement(o["default"],{className:"btn",icon:s(766)},"\u672c\u5730\u56fe\u6807"),a.createElement("div",{style:{height:"0.16rem"}}),a.createElement("p",{style:{margin:"30px 0 18px 0",color:"#999"}},"inline / small"),a.createElement(p["default"],{style:{marginBottom:"0.16rem"}},a.createElement(o["default"],{type:"primary",inline:!0,style:{marginRight:"0.08rem"}},"inline"),a.createElement(o["default"],{type:"ghost",inline:!0,size:"small",style:{marginRight:"0.08rem"}},"inline small"),a.createElement(o["default"],{type:"primary",inline:!0,size:"small"},"inline small"))))};return a.createElement(c,null)},style:".btn-container .btn {\n  margin: 0.16rem 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.btn-container</span> <span class="token class">.btn</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0.16</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},358:function(n,a,s){n.exports={content:[["p","\u548c List / Flex \u7ed3\u5408\u4f7f\u7528\u793a\u4f8b"]],meta:{order:1,title:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",filename:"components/button/demo/complex.md",id:"components-button-demo-complex"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ComplexButtonDemo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0.1rem 0\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComplexButtonDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(3),s(14),s(17)),p=n(t),e=(s(23),s(22)),o=n(e),c=function(){return a.createElement(p["default"],{style:{margin:"0.1rem 0",backgroundColor:"white"}},a.createElement(p["default"].Item,{extra:a.createElement(o["default"],{type:"ghost",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",a.createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")),a.createElement(p["default"].Item,{extra:a.createElement(o["default"],{type:"primary",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",a.createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")))};return a.createElement(c,null)}}},483:function(n,a,s){n.exports={basic:s(357),complex:s(358)}},766:function(n,a,s){var t=s(12),p='<symbol viewBox="0 0 64 64" id="reload" ><title>Share Icons Copy</title><path d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.471-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" fill-rule="evenodd"/></symbol>';n.exports=t.add(p,"reload")}});