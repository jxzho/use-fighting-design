import{d as i,f,c as u,C as o,y as r,v as a,M as v,A as F,o as m,K as E,L as h,a as t,_ as b}from"./chunks/framework.a8ebc9a3.js";const p=d=>(E("data-v-14fe5c22"),d=d(),h(),d),B=v('<h1 id="input-number-数字输入框" tabindex="-1" data-v-14fe5c22>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-14fe5c22>​</a></h1><p data-v-14fe5c22>这个文本框只能输入数字哦</p><ul data-v-14fe5c22><li data-v-14fe5c22><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-14fe5c22>源代码</a></li><li data-v-14fe5c22><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-14fe5c22>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-14fe5c22>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-14fe5c22>​</a></h2><p data-v-14fe5c22>使用 <code data-v-14fe5c22>v-model</code> 绑定一个值，<code data-v-14fe5c22>model</code> 可配置不同的模式</p>',5),C=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value1"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value1 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#F78C6C"}},"3"),a("span",{style:{color:"#BABED8"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),A=p(()=>a("h2",{id:"不同尺寸",tabindex:"-1"},[t("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),g=p(()=>a("p",null,[a("code",null,"size"),t(" 属性可配置不同尺寸")],-1)),_=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"switch"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-input-number"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value2"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"button"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#BABED8"}},"ref"),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),a("span",{class:"line"}),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"  "),a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#BABED8"}}," value2 "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#BABED8"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#BABED8"}},"("),a("span",{style:{color:"#F78C6C"}},"16"),a("span",{style:{color:"#BABED8"}},")")]),t(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=v(`<h2 id="attributes" tabindex="-1" data-v-14fe5c22>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-14fe5c22>​</a></h2><div class="vp-table__container" data-v-14fe5c22><table data-v-14fe5c22><thead data-v-14fe5c22><tr data-v-14fe5c22><th data-v-14fe5c22>参数</th><th data-v-14fe5c22>说明</th><th data-v-14fe5c22>类型</th><th data-v-14fe5c22>可选值</th><th data-v-14fe5c22>默认值</th></tr></thead><tbody data-v-14fe5c22><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>v-model</code></td><td data-v-14fe5c22>绑定值</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>1</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>model</code></td><td data-v-14fe5c22>不同模式</td><td data-v-14fe5c22><a href="#inputnumbermodel" data-v-14fe5c22>InputNumberModel</a></td><td data-v-14fe5c22><code data-v-14fe5c22>default</code> <code data-v-14fe5c22>button</code> <code data-v-14fe5c22>switch</code></td><td data-v-14fe5c22>default</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>precision</code></td><td data-v-14fe5c22>数值精度</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>0</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>step</code></td><td data-v-14fe5c22>步长</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>1</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>size</code></td><td data-v-14fe5c22>尺寸</td><td data-v-14fe5c22><a href="/components/interface.html#fightingsize" data-v-14fe5c22>FightingSize</a></td><td data-v-14fe5c22><code data-v-14fe5c22>large</code> <code data-v-14fe5c22>middle</code> <code data-v-14fe5c22>small</code> <code data-v-14fe5c22>mini</code></td><td data-v-14fe5c22>middle</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>button-type</code></td><td data-v-14fe5c22>按钮的类型</td><td data-v-14fe5c22><a href="/components/interface.html#fightingtype" data-v-14fe5c22>FightingType</a></td><td data-v-14fe5c22><code data-v-14fe5c22>default</code> <code data-v-14fe5c22>primary</code> <code data-v-14fe5c22>success</code> <code data-v-14fe5c22>danger</code> <code data-v-14fe5c22>warning</code></td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>disabled</code></td><td data-v-14fe5c22>是否禁用</td><td data-v-14fe5c22>boolean</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>false</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>max</code></td><td data-v-14fe5c22>最大值</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>min</code></td><td data-v-14fe5c22>最小值</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>max-length</code></td><td data-v-14fe5c22>最大输入长度</td><td data-v-14fe5c22>number</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>autofocus</code></td><td data-v-14fe5c22>是否自动聚焦</td><td data-v-14fe5c22>boolean</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>false</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>name</code></td><td data-v-14fe5c22>原生 name 属性</td><td data-v-14fe5c22>string</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>f-input-number</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>placeholder</code></td><td data-v-14fe5c22>占位符</td><td data-v-14fe5c22>string</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>clear</code></td><td data-v-14fe5c22>是否可清空</td><td data-v-14fe5c22>boolean</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>false</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>readonly</code></td><td data-v-14fe5c22>是否只读</td><td data-v-14fe5c22>boolean</td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>false</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>on-blur</code></td><td data-v-14fe5c22>失去焦点触发的回调</td><td data-v-14fe5c22><a href="/components/interface.html#handleevent" data-v-14fe5c22>HandleEvent</a></td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>on-focus</code></td><td data-v-14fe5c22>获取焦点触发的回调</td><td data-v-14fe5c22><a href="/components/interface.html#handleevent" data-v-14fe5c22>HandleEvent</a></td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>on-input</code></td><td data-v-14fe5c22>原生 input 事件回调</td><td data-v-14fe5c22><a href="/components/interface.html#handleevent" data-v-14fe5c22>HandleEvent</a></td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr><tr data-v-14fe5c22><td data-v-14fe5c22><code data-v-14fe5c22>on-change</code></td><td data-v-14fe5c22>绑定值发生变化时触发的回调</td><td data-v-14fe5c22><a href="/components/interface.html#inputchange" data-v-14fe5c22>InputChange</a></td><td data-v-14fe5c22>——</td><td data-v-14fe5c22>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-14fe5c22>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-14fe5c22>​</a></h2><p data-v-14fe5c22>组件导出以下类型定义：</p><div class="language-ts" data-v-14fe5c22><button title="Copy Code" class="copy" data-v-14fe5c22></button><span class="lang" data-v-14fe5c22>ts</span><pre class="shiki material-theme-palenight" data-v-14fe5c22><code data-v-14fe5c22><span class="line" data-v-14fe5c22><span style="color:#89DDFF;font-style:italic;" data-v-14fe5c22>import</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;font-style:italic;" data-v-14fe5c22>type</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>{</span></span>
<span class="line" data-v-14fe5c22><span style="color:#F07178;" data-v-14fe5c22>  </span><span style="color:#BABED8;" data-v-14fe5c22>InputNumberInstance</span><span style="color:#89DDFF;" data-v-14fe5c22>,</span></span>
<span class="line" data-v-14fe5c22><span style="color:#F07178;" data-v-14fe5c22>  </span><span style="color:#BABED8;" data-v-14fe5c22>InputNumberProps</span><span style="color:#89DDFF;" data-v-14fe5c22>,</span></span>
<span class="line" data-v-14fe5c22><span style="color:#F07178;" data-v-14fe5c22>  </span><span style="color:#BABED8;" data-v-14fe5c22>InputNumberModel</span></span>
<span class="line" data-v-14fe5c22><span style="color:#89DDFF;" data-v-14fe5c22>}</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;font-style:italic;" data-v-14fe5c22>from</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#C3E88D;" data-v-14fe5c22>fighting-design</span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-14fe5c22>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-14fe5c22>​</a></h3><div class="language-ts" data-v-14fe5c22><button title="Copy Code" class="copy" data-v-14fe5c22></button><span class="lang" data-v-14fe5c22>ts</span><pre class="shiki material-theme-palenight" data-v-14fe5c22><code data-v-14fe5c22><span class="line" data-v-14fe5c22><span style="color:#C792EA;" data-v-14fe5c22>type</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#FFCB6B;" data-v-14fe5c22>InputNumberModel</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>=</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#C3E88D;" data-v-14fe5c22>default</span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>|</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#C3E88D;" data-v-14fe5c22>button</span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>|</span><span style="color:#BABED8;" data-v-14fe5c22> </span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span><span style="color:#C3E88D;" data-v-14fe5c22>switch</span><span style="color:#89DDFF;" data-v-14fe5c22>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-14fe5c22>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-14fe5c22>​</a></h2>`,8),z={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1718552211000}'),N={name:"components/input-number.md"},x=i({...N,setup(d){const n=f(3),s=f(16);return(w,e)=>{const c=F("f-input-number"),y=F("vp-demo"),D=F("f-avatar");return m(),u("div",null,[B,o(y,{source:""},{source:r(()=>[o(c,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,8,["modelValue"]),o(c,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),model:"switch"},null,8,["modelValue"]),o(c,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),model:"button"},null,8,["modelValue"])]),default:r(()=>[C]),_:1}),A,g,o(y,{source:""},{source:r(()=>[o(c,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),model:"switch",size:"large"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value=l),model:"switch",size:"middle"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),model:"switch",size:"small"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l),model:"switch",size:"mini"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=l=>s.value=l),model:"button",size:"large"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=l=>s.value=l),model:"button",size:"middle"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value=l),model:"button",size:"small"},null,8,["modelValue"]),o(c,{modelValue:s.value,"onUpdate:modelValue":e[10]||(e[10]=l=>s.value=l),model:"button",size:"mini"},null,8,["modelValue"])]),default:r(()=>[_]),_:1}),V,a("a",z,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",k,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[o(D,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=b(x,[["__scopeId","data-v-14fe5c22"]]);export{U as __pageData,P as default};
