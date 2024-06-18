import{d as i,f as y,c as u,C as e,y as r,v as a,M as v,A as D,o as m,K as E,L as h,a as t,_ as B}from"./chunks/framework.a8ebc9a3.js";const p=n=>(E("data-v-b72b11db"),n=n(),h(),n),C=v('<h1 id="input-number-数字输入框" tabindex="-1" data-v-b72b11db>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-b72b11db>​</a></h1><p data-v-b72b11db>这个文本框只能输入数字哦</p><ul data-v-b72b11db><li data-v-b72b11db><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-b72b11db>源代码</a></li><li data-v-b72b11db><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-b72b11db>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-b72b11db>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-b72b11db>​</a></h2><p data-v-b72b11db>使用 <code data-v-b72b11db>v-model</code> 绑定一个值，<code data-v-b72b11db>model</code> 可配置不同的模式</p>',5),f=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
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
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=v(`<h2 id="attributes" tabindex="-1" data-v-b72b11db>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-b72b11db>​</a></h2><div class="vp-table__container" data-v-b72b11db><table data-v-b72b11db><thead data-v-b72b11db><tr data-v-b72b11db><th data-v-b72b11db>参数</th><th data-v-b72b11db>说明</th><th data-v-b72b11db>类型</th><th data-v-b72b11db>可选值</th><th data-v-b72b11db>默认值</th></tr></thead><tbody data-v-b72b11db><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>v-model</code></td><td data-v-b72b11db>绑定值</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>1</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>model</code></td><td data-v-b72b11db>不同模式</td><td data-v-b72b11db><a href="#inputnumbermodel" data-v-b72b11db>InputNumberModel</a></td><td data-v-b72b11db><code data-v-b72b11db>default</code> <code data-v-b72b11db>button</code> <code data-v-b72b11db>switch</code></td><td data-v-b72b11db>default</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>precision</code></td><td data-v-b72b11db>数值精度</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>0</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>step</code></td><td data-v-b72b11db>步长</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>1</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>size</code></td><td data-v-b72b11db>尺寸</td><td data-v-b72b11db><a href="/components/interface.html#fightingsize" data-v-b72b11db>FightingSize</a></td><td data-v-b72b11db><code data-v-b72b11db>large</code> <code data-v-b72b11db>middle</code> <code data-v-b72b11db>small</code> <code data-v-b72b11db>mini</code></td><td data-v-b72b11db>middle</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>button-type</code></td><td data-v-b72b11db>按钮的类型</td><td data-v-b72b11db><a href="/components/interface.html#fightingtype" data-v-b72b11db>FightingType</a></td><td data-v-b72b11db><code data-v-b72b11db>default</code> <code data-v-b72b11db>primary</code> <code data-v-b72b11db>success</code> <code data-v-b72b11db>danger</code> <code data-v-b72b11db>warning</code></td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>disabled</code></td><td data-v-b72b11db>是否禁用</td><td data-v-b72b11db>boolean</td><td data-v-b72b11db>——</td><td data-v-b72b11db>false</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>max</code></td><td data-v-b72b11db>最大值</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>min</code></td><td data-v-b72b11db>最小值</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>max-length</code></td><td data-v-b72b11db>最大输入长度</td><td data-v-b72b11db>number</td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>autofocus</code></td><td data-v-b72b11db>是否自动聚焦</td><td data-v-b72b11db>boolean</td><td data-v-b72b11db>——</td><td data-v-b72b11db>false</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>name</code></td><td data-v-b72b11db>原生 name 属性</td><td data-v-b72b11db>string</td><td data-v-b72b11db>——</td><td data-v-b72b11db>f-input-number</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>placeholder</code></td><td data-v-b72b11db>占位符</td><td data-v-b72b11db>string</td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>clear</code></td><td data-v-b72b11db>是否可清空</td><td data-v-b72b11db>boolean</td><td data-v-b72b11db>——</td><td data-v-b72b11db>false</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>readonly</code></td><td data-v-b72b11db>是否只读</td><td data-v-b72b11db>boolean</td><td data-v-b72b11db>——</td><td data-v-b72b11db>false</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>on-blur</code></td><td data-v-b72b11db>失去焦点触发的回调</td><td data-v-b72b11db><a href="/components/interface.html#handleevent" data-v-b72b11db>HandleEvent</a></td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>on-focus</code></td><td data-v-b72b11db>获取焦点触发的回调</td><td data-v-b72b11db><a href="/components/interface.html#handleevent" data-v-b72b11db>HandleEvent</a></td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>on-input</code></td><td data-v-b72b11db>原生 input 事件回调</td><td data-v-b72b11db><a href="/components/interface.html#handleevent" data-v-b72b11db>HandleEvent</a></td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr><tr data-v-b72b11db><td data-v-b72b11db><code data-v-b72b11db>on-change</code></td><td data-v-b72b11db>绑定值发生变化时触发的回调</td><td data-v-b72b11db><a href="/components/interface.html#inputchange" data-v-b72b11db>InputChange</a></td><td data-v-b72b11db>——</td><td data-v-b72b11db>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-b72b11db>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-b72b11db>​</a></h2><p data-v-b72b11db>组件导出以下类型定义：</p><div class="language-ts" data-v-b72b11db><button title="Copy Code" class="copy" data-v-b72b11db></button><span class="lang" data-v-b72b11db>ts</span><pre class="shiki material-theme-palenight" data-v-b72b11db><code data-v-b72b11db><span class="line" data-v-b72b11db><span style="color:#89DDFF;font-style:italic;" data-v-b72b11db>import</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;font-style:italic;" data-v-b72b11db>type</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>{</span></span>
<span class="line" data-v-b72b11db><span style="color:#F07178;" data-v-b72b11db>  </span><span style="color:#BABED8;" data-v-b72b11db>InputNumberInstance</span><span style="color:#89DDFF;" data-v-b72b11db>,</span></span>
<span class="line" data-v-b72b11db><span style="color:#F07178;" data-v-b72b11db>  </span><span style="color:#BABED8;" data-v-b72b11db>InputNumberProps</span><span style="color:#89DDFF;" data-v-b72b11db>,</span></span>
<span class="line" data-v-b72b11db><span style="color:#F07178;" data-v-b72b11db>  </span><span style="color:#BABED8;" data-v-b72b11db>InputNumberModel</span></span>
<span class="line" data-v-b72b11db><span style="color:#89DDFF;" data-v-b72b11db>}</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;font-style:italic;" data-v-b72b11db>from</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#C3E88D;" data-v-b72b11db>fighting-design</span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-b72b11db>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-b72b11db>​</a></h3><div class="language-ts" data-v-b72b11db><button title="Copy Code" class="copy" data-v-b72b11db></button><span class="lang" data-v-b72b11db>ts</span><pre class="shiki material-theme-palenight" data-v-b72b11db><code data-v-b72b11db><span class="line" data-v-b72b11db><span style="color:#C792EA;" data-v-b72b11db>type</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#FFCB6B;" data-v-b72b11db>InputNumberModel</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>=</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#C3E88D;" data-v-b72b11db>default</span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>|</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#C3E88D;" data-v-b72b11db>button</span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>|</span><span style="color:#BABED8;" data-v-b72b11db> </span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span><span style="color:#C3E88D;" data-v-b72b11db>switch</span><span style="color:#89DDFF;" data-v-b72b11db>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-b72b11db>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-b72b11db>​</a></h2>`,8),z={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1718617954000}'),N={name:"components/input-number.md"},x=i({...N,setup(n){const b=y(3),o=y(16);return(w,l)=>{const d=D("f-input-number"),F=D("vp-demo"),c=D("f-avatar");return m(),u("div",null,[C,e(F,{source:""},{source:r(()=>[e(d,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=s=>b.value=s)},null,8,["modelValue"]),e(d,{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=s=>b.value=s),model:"switch"},null,8,["modelValue"]),e(d,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=s=>b.value=s),model:"button"},null,8,["modelValue"])]),default:r(()=>[f]),_:1}),A,g,e(F,{source:""},{source:r(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=s=>o.value=s),model:"switch",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=s=>o.value=s),model:"switch",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=s=>o.value=s),model:"switch",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=s=>o.value=s),model:"switch",size:"mini"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[7]||(l[7]=s=>o.value=s),model:"button",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[8]||(l[8]=s=>o.value=s),model:"button",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[9]||(l[9]=s=>o.value=s),model:"button",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[10]||(l[10]=s=>o.value=s),model:"button",size:"mini"},null,8,["modelValue"])]),default:r(()=>[_]),_:1}),V,a("a",z,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",k,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=B(x,[["__scopeId","data-v-b72b11db"]]);export{U as __pageData,P as default};
