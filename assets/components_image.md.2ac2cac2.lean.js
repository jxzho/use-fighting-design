import{_ as g,A as c,o as F,x as m,y as l,v as s,C as o,K as u,L as _,d as f,c as b,M as D,a as t,b as C}from"./chunks/framework.30dd075c.js";const E={},p=r=>(u("data-v-03fc582d"),r=r(),_(),r),A={class:"image-block"},x=p(()=>s("code",null,"fill",-1)),w={class:"image-block"},v=p(()=>s("code",null,"contain",-1)),B={class:"image-block"},k=p(()=>s("code",null,"cover",-1)),j={class:"image-block"},T=p(()=>s("code",null,"none",-1)),P={class:"image-block"},q=p(()=>s("code",null,"scale-down",-1));function S(r,d){const e=c("f-image"),i=c("f-space");return F(),m(i,{spacing:"large"},{default:l(()=>[s("div",A,[x,o(e,{width:"110px",height:"110px",fit:"fill",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"})]),s("div",w,[v,o(e,{width:"110px",height:"110px",fit:"contain",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"})]),s("div",B,[k,o(e,{width:"110px",height:"110px",fit:"cover",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"})]),s("div",j,[T,o(e,{width:"110px",height:"110px",fit:"none",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"})]),s("div",P,[q,o(e,{width:"110px",height:"110px",fit:"scale-down",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"})])]),_:1})}const I=g(E,[["render",S],["__scopeId","data-v-03fc582d"]]),z=D('<h1 id="image-图片" tabindex="-1">Image 图片 <a class="header-anchor" href="#image-图片" aria-label="Permalink to &quot;Image 图片&quot;">​</a></h1><p>预览图片</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/image.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>使用 <code>src</code> 属性设置图片的路径，<code>width</code> 设置图片的宽度，<code>height</code> 可以设置图片的高度</p>',5),N=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")])])])],-1),U=s("h2",{id:"使用本地图片",tabindex:"-1"},[t("使用本地图片 "),s("a",{class:"header-anchor",href:"#使用本地图片","aria-label":'Permalink to "使用本地图片"'},"​")],-1),$=s("p",null,[t("如需要使用本地图片，需要使用 "),s("a",{href:"https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url",target:"_blank",rel:"noreferrer"},[t("new URL(url, i"),s("wbr"),t("mport.meta.url)")]),t(" 手动导入图片资源使用：")],-1),H=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," url "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"URL"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"./image/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"meta"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"url)"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"href")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"url"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),L=s("h2",{id:"适应容器方式",tabindex:"-1"},[t("适应容器方式 "),s("a",{class:"header-anchor",href:"#适应容器方式","aria-label":'Permalink to "适应容器方式"'},"​")],-1),V=s("p",null,[s("code",null,"fit"),t(" 属性可以配置不同的适应容器的方式，详见原生 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it",target:"_blank",rel:"noreferrer"},"object-fit"),t(" 属性")],-1),R=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fill"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"contain"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"cover"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"none"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"scale-down"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")])])])],-1),W=s("h2",{id:"圆角图片",tabindex:"-1"},[t("圆角图片 "),s("a",{class:"header-anchor",href:"#圆角图片","aria-label":'Permalink to "圆角图片"'},"​")],-1),M=s("p",null,[s("code",null,"round"),t(" 属性可以配置圆角图片，你需要传入一个具体的数值单位")],-1),J=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"round"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"30px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"190px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/2.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")])])])],-1),K=s("h2",{id:"懒加载",tabindex:"-1"},[t("懒加载 "),s("a",{class:"header-anchor",href:"#懒加载","aria-label":'Permalink to "懒加载"'},"​")],-1),O=s("p",null,[s("code",null,"lazy"),t(" 属性可以设置图片懒加载，详情可参考 "),s("code",null,"DevTools"),t(" 的 "),s("code",null,"Network")],-1),G=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"lazy")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/3.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")])])])],-1),Q=D('<h2 id="加载失败" tabindex="-1">加载失败 <a class="header-anchor" href="#加载失败" aria-label="Permalink to &quot;加载失败&quot;">​</a></h2><p><code>Fighting Design</code> 对于图片加载失败做了很多的处理，下面分别介绍一下</p><p><code>err-src</code> 可以在 <code>src</code> 加载失败的时候，备用进行加载</p><p><code>alt</code> 属性可以在图片加载失败的时候，展示信息</p><p>你也可以使用 <code>error</code> 插槽自定义你的错误信息展示</p>',5),X=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"err-src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"err-src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"alt"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"error"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")])])])],-1),Y=D('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td>图片路径</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>err-src</code></td><td>src 加载失败时加载的地址</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>alt</code></td><td>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt" target="_blank" rel="noreferrer">alt</a> 属性</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>draggable</code></td><td>是否可以拖动</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>lazy</code></td><td>是否懒加载图片</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>root-margin</code></td><td>触发懒加载的距离</td><td>string / number</td><td>——</td><td>100px</td></tr><tr><td><code>width</code></td><td>图片的宽度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>height</code></td><td>图片的高度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>block</code></td><td>是否为块级元素</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>fit</code></td><td>如何适应容器，原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it" target="_blank" rel="noreferrer">object-fit</a> 属性</td><td><a href="/components/interface.html#fightingfit">FightingFit</a></td><td><code>fill</code> <code>contain</code> <code>cover</code> <code>none</code><br> <code>scale-down</code></td><td>——</td></tr><tr><td><code>select</code></td><td>是否禁止选择</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>referrer-policy</code></td><td>原生 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax" target="_blank" rel="noreferrer">referrerPolicy</a> 属性</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>round</code></td><td>配置圆角，传入一个数值</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>title</code></td><td>img 的 title</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>on-load</code></td><td>图片加载成功触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr><tr><td><code>on-error</code></td><td>图片加载失败触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>插槽名称</th><th>说明说明</th></tr></thead><tbody><tr><td><code>error</code></td><td>自定义加载失败提示</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ImageInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ImageProps</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ImageFit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',8),Z={href:"https://github.com/Tyh2001",target:"_blank"},os=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md","lastUpdated":1714988740000}'),ss={name:"components/image.md"},ls=f({...ss,setup(r){const d=new URL("/assets/1.aa9c3858.jpg",self.location).href;return(e,i)=>{const a=c("f-image"),n=c("vp-demo"),y=c("f-space"),h=c("f-avatar");return F(),b("div",null,[z,o(n,{source:""},{source:l(()=>[o(a,{width:"200px",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"})]),default:l(()=>[N]),_:1}),U,$,o(n,{source:""},{source:l(()=>[o(a,{src:C(d)},null,8,["src"])]),default:l(()=>[H]),_:1}),L,V,o(n,{source:""},{source:l(()=>[o(I)]),default:l(()=>[R]),_:1}),W,M,o(n,{source:""},{source:l(()=>[o(a,{round:"30px",height:"190px",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/2.jpg"})]),default:l(()=>[J]),_:1}),K,O,o(n,{source:""},{source:l(()=>[o(a,{lazy:"",width:"200px",src:"https://raw.githubusercontent.com/Tyh2001/images/master/auto/3.jpg"})]),default:l(()=>[G]),_:1}),Q,o(n,{source:""},{source:l(()=>[o(y,{spacing:"large"},{default:l(()=>[o(a,{width:"200px",src:"https://abc.com/1.png","err-src":"https://raw.githubusercontent.com/Tyh2001/images/master/auto/1.jpg"}),o(a,{width:"200px",src:"https://abc.com/1.png","err-src":"https://abc.com/1.png",alt:"error"})]),_:1})]),default:l(()=>[X]),_:1}),Y,s("a",Z,[o(h,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{os as __pageData,ls as default};
