import{a1 as T,a6 as N,a7 as E,d as F,o as _,c as g,r as G,n as P,b as r,D as L,z as w,f as h,x as V,C as i,y as m,v as c,t as u,a as x,T as $,a8 as z}from"./framework.30dd075c.js";import{a as v,s as f,j as I,k as O,l as A,m as b,d as p,f as D,n as y,o as j,g as H}from"./index.64823717.js";import{F as B}from"./index.c824d5c1.js";const R=a=>{const o=n=>{const e=N(a,n),t=document.createElement("div");return E(e,t),e.component};return{confirmBox:n=>o(T({...n,show:!0}))}},Z={vertical:v(),nowrap:v(),spacing:f(void 0,a=>I.includes(a)),rowGap:f(),columnGap:f()},q=F({name:"FSpace",__name:"space",props:Z,setup(a){const o=a,{classes:l,styles:n}=O(o,"space"),e=l(["spacing","nowrap","vertical"],"f-space"),t=n(["rowGap","columnGap"]);return(d,C)=>d.$slots.default?(_(),g("div",{key:0,role:"none",class:P(r(e)),style:L(r(t))},[G(d.$slots,"default")],6)):w("",!0)}}),J=A(q),K={show:v(!1),title:f(),content:f(),confirmText:b(),cancelText:b(),onConfirm:p(),onCancel:p(),onClose:p(),onOpen:p()},M={key:0,class:"f-confirm-box"},Q=c("div",{class:"f-confirm-box__mask"},null,-1),U={class:"f-confirm-box__container"},W={class:"f-confirm-box__header"},X={class:"f-confirm-box__title"},Y={class:"f-confirm-box__body"},oo={class:"f-confirm-box__footer"},no=F({name:"FConfirmBox",__name:"confirm-box",props:K,setup(a){const o=a,{run:l}=j(),n=h(o.show),e=h(!1),t=()=>{n.value=!1},d=()=>{l(o.onOpen,n.value)},C=()=>{l(o.onClose,n.value)},k=async s=>{e.value=!0,y(o.onConfirm)&&await o.onConfirm(s),t()},S=async s=>{e.value=!0,y(o.onCancel)&&await o.onCancel(s),t()};return(s,so)=>(_(),V(z,{to:"body"},[i($,{name:"f-confirm-box__trans",appear:"",onAfterEnter:d,onAfterLeave:C},{default:m(()=>[n.value?(_(),g("div",M,[Q,c("div",U,[c("div",W,[c("div",X,u(s.title),1),i(r(D),{disabled:e.value,"on-click":t},null,8,["disabled"])]),c("div",Y,u(s.content),1),c("div",oo,[i(r(J),null,{default:m(()=>[i(r(B),{loading:e.value,"on-click":S},{default:m(()=>[x(u(s.cancelText||"取消"),1)]),_:1},8,["loading"]),i(r(B),{loading:e.value,type:"primary","on-click":k},{default:m(()=>[x(u(s.confirmText||"确定"),1)]),_:1},8,["loading"])]),_:1})])])])):w("",!0)]),_:1})]))}}),{confirmBox:eo}=R(no),ro=H(eo,"FConfirmBox");export{ro as F,J as a};
