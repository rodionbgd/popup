import{o as a,c as d,a as n,w as _,r as h,b as C,d as O,n as p,e as y,f as v,F as P,g as k,v as b,h as g,i as N}from"./vendor.d2fd7a27.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};E();var u=(s,t)=>{const i=s.__vccOpts||s;for(const[c,e]of t)i[c]=e;return i};const T={name:"Popup",data(){return{isOpen:!1}},confirmedPopupPromise:null,mounted(){document.addEventListener("keydown",this.closeByEsc)},beforeUnmount(){document.addEventListener("keydown",this.closeByEsc)},methods:{open(){let s;const t=new Promise(i=>{s=i});return this.isOpen=!0,this.$options.confirmedPopupPromise={resolve:s},t},confirm(){this.$options.confirmedPopupPromise.resolve(!0),this.isOpen=!1},close(){this.$options.confirmedPopupPromise.resolve(!1),this.isOpen=!1},closeByEsc(s){this.isOpen&&s.code==="Escape"&&this.close()}}},w={key:0,class:"box"},I=n("h1",{class:"modal__title"},"Cookies",-1),x=n("div",{class:"modal__text"},[n("img",{width:"30",src:"https://cdn-icons-png.flaticon.com/512/1047/1047711.png",alt:"cookies-img"}),n("span",null," Confirm eating a cookie")],-1);function F(s,t,i,c,e,o){return e.isOpen?(a(),d("div",w,[n("div",{class:"modal-container",onClick:t[1]||(t[1]=(...r)=>o.close&&o.close(...r))},[n("div",{class:"modal",onClick:t[0]||(t[0]=_(()=>{},["stop"]))},[I,x,h(s.$slots,"actions",{close:o.close,confirm:o.confirm})])])])):C("",!0)}var L=u(T,[["render",F]]);const M={components:{Popup:L},CONFIRMATION_TEXT:"CONFIRM",data(){return{isPopupOpen:!1,confirmation:""}},computed:{isConfirmationCorrect(){return this.confirmation===this.$options.CONFIRMATION_TEXT}},methods:{async popupConfirmed(){this.isPopupOpen=!0,this.confirmation="";const s=await this.$refs.popup.open();this.isPopupOpen=!1,s&&alert("Stop eating!")}}},$=["disabled"],A=["placeholder"],B=g(" \xA0 "),V=["disabled","onClick"],R=["onClick"];function S(s,t,i,c,e,o){const r=O("Popup");return a(),d(P,null,[n("button",{type:"button",class:p(["link-1",{"opacity-50":e.isPopupOpen}]),id:"m1-c",onClick:t[0]||(t[0]=(...l)=>o.popupConfirmed&&o.popupConfirmed(...l)),disabled:e.isPopupOpen}," Open ",10,$),y(r,{ref:"popup"},{actions:v(({close:l,confirm:m})=>[k(n("input",{class:"modal__btn",type:"text",placeholder:s.$options.CONFIRMATION_TEXT,"onUpdate:modelValue":t[1]||(t[1]=f=>e.confirmation=f)},null,8,A),[[b,e.confirmation]]),B,n("button",{class:p(["modal__btn",{"opacity-50":!o.isConfirmationCorrect}]),disabled:!o.isConfirmationCorrect,onClick:m}," Ok \u2192 ",10,V),n("button",{class:"modal__btn link-2",onClick:l},null,8,R)]),_:1},512)],64)}var X=u(M,[["render",S]]);N(X).mount("#app");
