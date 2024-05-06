import{d as v,f as y,c as i,C as e,y as r,v as a,M as f,A as D,o as u,K as m,L as E,a as t,_ as h}from"./chunks/framework.30dd075c.js";const p=n=>(m("data-v-6db5fb2b"),n=n(),E(),n),B=f('<h1 id="input-number-数字输入框" tabindex="-1" data-v-6db5fb2b>Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-label="Permalink to &quot;Input Number 数字输入框&quot;" data-v-6db5fb2b>​</a></h1><p data-v-6db5fb2b>这个文本框只能输入数字哦</p><ul data-v-6db5fb2b><li data-v-6db5fb2b><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer" data-v-6db5fb2b>源代码</a></li><li data-v-6db5fb2b><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/input-number.md" target="_blank" rel="noreferrer" data-v-6db5fb2b>文档编辑</a></li></ul><div class="danger custom-block" data-v-6db5fb2b><p class="custom-block-title" data-v-6db5fb2b>DANGER</p><p data-v-6db5fb2b>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1" data-v-6db5fb2b>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-6db5fb2b>​</a></h2><p data-v-6db5fb2b>使用 <code data-v-6db5fb2b>v-model</code> 绑定一个值，<code data-v-6db5fb2b>model</code> 可配置不同的模式</p>',6),C=p(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),t(`
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
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),V=f(`<h2 id="attributes" tabindex="-1" data-v-6db5fb2b>Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;" data-v-6db5fb2b>​</a></h2><div class="vp-table__container" data-v-6db5fb2b><table data-v-6db5fb2b><thead data-v-6db5fb2b><tr data-v-6db5fb2b><th data-v-6db5fb2b>参数</th><th data-v-6db5fb2b>说明</th><th data-v-6db5fb2b>类型</th><th data-v-6db5fb2b>可选值</th><th data-v-6db5fb2b>默认值</th></tr></thead><tbody data-v-6db5fb2b><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>v-model</code></td><td data-v-6db5fb2b>绑定值</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>1</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>model</code></td><td data-v-6db5fb2b>不同模式</td><td data-v-6db5fb2b><a href="#inputnumbermodel" data-v-6db5fb2b>InputNumberModel</a></td><td data-v-6db5fb2b><code data-v-6db5fb2b>default</code> <code data-v-6db5fb2b>button</code> <code data-v-6db5fb2b>switch</code></td><td data-v-6db5fb2b>default</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>precision</code></td><td data-v-6db5fb2b>数值精度</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>0</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>step</code></td><td data-v-6db5fb2b>步长</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>1</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>size</code></td><td data-v-6db5fb2b>尺寸</td><td data-v-6db5fb2b><a href="/components/interface.html#fightingsize" data-v-6db5fb2b>FightingSize</a></td><td data-v-6db5fb2b><code data-v-6db5fb2b>large</code> <code data-v-6db5fb2b>middle</code> <code data-v-6db5fb2b>small</code> <code data-v-6db5fb2b>mini</code></td><td data-v-6db5fb2b>middle</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>button-type</code></td><td data-v-6db5fb2b>按钮的类型</td><td data-v-6db5fb2b><a href="/components/interface.html#fightingtype" data-v-6db5fb2b>FightingType</a></td><td data-v-6db5fb2b><code data-v-6db5fb2b>default</code> <code data-v-6db5fb2b>primary</code> <code data-v-6db5fb2b>success</code> <code data-v-6db5fb2b>danger</code> <code data-v-6db5fb2b>warning</code></td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>disabled</code></td><td data-v-6db5fb2b>是否禁用</td><td data-v-6db5fb2b>boolean</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>false</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>max</code></td><td data-v-6db5fb2b>最大值</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>min</code></td><td data-v-6db5fb2b>最小值</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>max-length</code></td><td data-v-6db5fb2b>最大输入长度</td><td data-v-6db5fb2b>number</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>autofocus</code></td><td data-v-6db5fb2b>是否自动聚焦</td><td data-v-6db5fb2b>boolean</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>false</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>name</code></td><td data-v-6db5fb2b>原生 name 属性</td><td data-v-6db5fb2b>string</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>f-input-number</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>placeholder</code></td><td data-v-6db5fb2b>占位符</td><td data-v-6db5fb2b>string</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>clear</code></td><td data-v-6db5fb2b>是否可清空</td><td data-v-6db5fb2b>boolean</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>false</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>readonly</code></td><td data-v-6db5fb2b>是否只读</td><td data-v-6db5fb2b>boolean</td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>false</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>on-blur</code></td><td data-v-6db5fb2b>失去焦点触发的回调</td><td data-v-6db5fb2b><a href="/components/interface.html#handleevent" data-v-6db5fb2b>HandleEvent</a></td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>on-focus</code></td><td data-v-6db5fb2b>获取焦点触发的回调</td><td data-v-6db5fb2b><a href="/components/interface.html#handleevent" data-v-6db5fb2b>HandleEvent</a></td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>on-input</code></td><td data-v-6db5fb2b>原生 input 事件回调</td><td data-v-6db5fb2b><a href="/components/interface.html#handleevent" data-v-6db5fb2b>HandleEvent</a></td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr><tr data-v-6db5fb2b><td data-v-6db5fb2b><code data-v-6db5fb2b>on-change</code></td><td data-v-6db5fb2b>绑定值发生变化时触发的回调</td><td data-v-6db5fb2b><a href="/components/interface.html#inputchange" data-v-6db5fb2b>InputChange</a></td><td data-v-6db5fb2b>——</td><td data-v-6db5fb2b>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-6db5fb2b>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-6db5fb2b>​</a></h2><p data-v-6db5fb2b>组件导出以下类型定义：</p><div class="language-ts" data-v-6db5fb2b><button title="Copy Code" class="copy" data-v-6db5fb2b></button><span class="lang" data-v-6db5fb2b>ts</span><pre class="shiki material-theme-palenight" data-v-6db5fb2b><code data-v-6db5fb2b><span class="line" data-v-6db5fb2b><span style="color:#89DDFF;font-style:italic;" data-v-6db5fb2b>import</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;font-style:italic;" data-v-6db5fb2b>type</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>{</span></span>
<span class="line" data-v-6db5fb2b><span style="color:#F07178;" data-v-6db5fb2b>  </span><span style="color:#BABED8;" data-v-6db5fb2b>InputNumberInstance</span><span style="color:#89DDFF;" data-v-6db5fb2b>,</span></span>
<span class="line" data-v-6db5fb2b><span style="color:#F07178;" data-v-6db5fb2b>  </span><span style="color:#BABED8;" data-v-6db5fb2b>InputNumberProps</span><span style="color:#89DDFF;" data-v-6db5fb2b>,</span></span>
<span class="line" data-v-6db5fb2b><span style="color:#F07178;" data-v-6db5fb2b>  </span><span style="color:#BABED8;" data-v-6db5fb2b>InputNumberModel</span></span>
<span class="line" data-v-6db5fb2b><span style="color:#89DDFF;" data-v-6db5fb2b>}</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;font-style:italic;" data-v-6db5fb2b>from</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#C3E88D;" data-v-6db5fb2b>fighting-design</span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1" data-v-6db5fb2b>InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-label="Permalink to &quot;InputNumberModel&quot;" data-v-6db5fb2b>​</a></h3><div class="language-ts" data-v-6db5fb2b><button title="Copy Code" class="copy" data-v-6db5fb2b></button><span class="lang" data-v-6db5fb2b>ts</span><pre class="shiki material-theme-palenight" data-v-6db5fb2b><code data-v-6db5fb2b><span class="line" data-v-6db5fb2b><span style="color:#C792EA;" data-v-6db5fb2b>type</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#FFCB6B;" data-v-6db5fb2b>InputNumberModel</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>=</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#C3E88D;" data-v-6db5fb2b>default</span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>|</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#C3E88D;" data-v-6db5fb2b>button</span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>|</span><span style="color:#BABED8;" data-v-6db5fb2b> </span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span><span style="color:#C3E88D;" data-v-6db5fb2b>switch</span><span style="color:#89DDFF;" data-v-6db5fb2b>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-6db5fb2b>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-6db5fb2b>​</a></h2>`,8),k={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/unnm",target:"_blank"},I={href:"https://github.com/xluoyu",target:"_blank"},U=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-number.md","filePath":"components/input-number.md","lastUpdated":1714988740000}'),N={name:"components/input-number.md"},x=v({...N,setup(n){const b=y(3),o=y(16);return(w,l)=>{const d=D("f-input-number"),F=D("vp-demo"),c=D("f-avatar");return u(),i("div",null,[B,e(F,{source:""},{source:r(()=>[e(d,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=s=>b.value=s)},null,8,["modelValue"]),e(d,{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=s=>b.value=s),model:"switch"},null,8,["modelValue"]),e(d,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=s=>b.value=s),model:"button"},null,8,["modelValue"])]),default:r(()=>[C]),_:1}),A,g,e(F,{source:""},{source:r(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=s=>o.value=s),model:"switch",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=s=>o.value=s),model:"switch",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=s=>o.value=s),model:"switch",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=s=>o.value=s),model:"switch",size:"mini"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[7]||(l[7]=s=>o.value=s),model:"button",size:"large"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[8]||(l[8]=s=>o.value=s),model:"button",size:"middle"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[9]||(l[9]=s=>o.value=s),model:"button",size:"small"},null,8,["modelValue"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[10]||(l[10]=s=>o.value=s),model:"button",size:"mini"},null,8,["modelValue"])]),default:r(()=>[_]),_:1}),V,a("a",k,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",z,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),a("a",I,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});const P=h(x,[["__scopeId","data-v-6db5fb2b"]]);export{U as __pageData,P as default};
