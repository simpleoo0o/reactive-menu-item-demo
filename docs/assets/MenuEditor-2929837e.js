import{e as c}from"./toggleHighContrast-903f1800.js";import{_ as u,r as _,i,f as l,o as d,c as m,e as n,a as p,w as f,b as v,E as g,d as M,g as y}from"./index-a9f31147.js";const E={class:"menu-editor"},h={class:"menu-editor-tool"},x={__name:"MenuEditor",setup(N){const t=_(null),s=i("reactiveMenuData");let a=null;l(()=>{a=c.create(t.value,{value:JSON.stringify(s.menus,null,4),language:"json"})});function r(){if(a){const o=a.getValue();try{const e=JSON.parse(o);s.methods.updateMenus(e)}catch(e){g({type:"error",message:e.message})}}}return(o,e)=>(d(),m("div",E,[n("div",h,[p(v(y),{type:"primary",onClick:r},{default:f(()=>[M("应用(刷新不保存)")]),_:1})]),n("div",{class:"monaco-editor",ref_key:"$monaco",ref:t},null,512)]))}},V=u(x,[["__scopeId","data-v-7a721baa"]]);export{V as default};