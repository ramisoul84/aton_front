import{B as h,C,E as i,F as r,G as m,H as O,I as b,J as x,M as s,O as w,U as P,X as I,Y as S,Z as k,_ as F,aa as E,ba as v,da as g,k as f,o as a,p as d,s as M,t as y,x as u,y as _}from"./chunk-7LWF4ZHE.js";var D=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-header"]],decls:10,vars:0,consts:[["src","../../../assets/logo.png","alt","logo",1,"logo"],["routerLink",""],["routerLink","/users"],["routerLink","/clients"],["src","../../../assets/login.png","alt","login","routerLink","/login",1,"login"]],template:function(o,p){o&1&&(i(0,"header"),m(1,"img",0),i(2,"nav")(3,"a",1),s(4,"about"),r(),i(5,"a",2),s(6,"users"),r(),i(7,"a",3),s(8,"clients"),r()(),m(9,"img",4),r())},dependencies:[E],styles:['header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr 1fr;height:4rem;border-bottom:1px solid var(--color-effect)}.logo[_ngcontent-%COMP%]{height:4rem;padding:1rem 0}nav[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}a[_ngcontent-%COMP%]{position:relative;text-decoration:none;color:var(--color-light)}a[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-5%;left:-.5rem;height:0px;width:0%;padding:0 .5rem;background-color:var(--color-effect);z-index:-1}a[_ngcontent-%COMP%]:hover:before{animation:_ngcontent-%COMP%_fill .6s forwards}@keyframes _ngcontent-%COMP%_fill{0%{width:0%;height:1px}70%{width:90%;height:1px}to{width:100%;height:1px}}.login[_ngcontent-%COMP%]{display:flex;height:4rem;padding:.5rem 0;justify-self:end}.login[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.1}.dis[_ngcontent-%COMP%]{cursor:default}']});let t=e;return t})();function R(t,e){t&1&&(i(0,"span",3),s(1," - [ADMIN]"),r())}function V(t,e){if(t&1){let c=O();i(0,"footer")(1,"p"),s(2," user"),h(3,R,2,0,"span",1),s(4,": "),i(5,"span"),s(6),r()(),i(7,"p",2),b("click",function(){M(c);let o=x();return y(o.logout())}),s(8,"Logout"),r()()}if(t&2){let c=x();u(3),C("ngIf",c.loggedInUser.isAdmin),u(3),w("",c.loggedInUser.username," ")}}var j=(()=>{let e=class e{constructor(n){this.authService=n}ngOnInit(){this.authService.user$.subscribe(n=>this.loggedInUser=n)}logout(){this.authService.logout()}};e.\u0275fac=function(o){return new(o||e)(_(g))},e.\u0275cmp=a({type:e,selectors:[["app-footer"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","admin",4,"ngIf"],[3,"click"],[1,"admin"]],template:function(o,p){o&1&&h(0,V,9,2,"footer",0),o&2&&C("ngIf",p.loggedInUser)},dependencies:[P],styles:["footer[_ngcontent-%COMP%]{position:fixed;left:0;right:0;bottom:0;height:2rem;border-top:1px solid var(--color-effect);display:grid;grid-template-columns:1fr 1fr;align-items:center;background-color:#29292965}p[_ngcontent-%COMP%]:first-of-type{margin-left:1rem;color:var(--color-effect)}span[_ngcontent-%COMP%]{color:var(--color-light)}p[_ngcontent-%COMP%]:last-of-type{justify-self:flex-end;margin-right:1rem;cursor:pointer}.admin[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-effect)}"]});let t=e;return t})();var N=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-root"]],decls:4,vars:0,template:function(o,p){o&1&&(m(0,"app-header"),i(1,"main"),m(2,"router-outlet"),r(),m(3,"app-footer"))},dependencies:[F,D,j],encapsulation:2});let t=e;return t})();var T=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(o,p){o&1&&(i(0,"h1"),s(1,"HOME"),r())},encapsulation:2});let t=e;return t})();var B=[{path:"",component:T},{path:"",loadChildren:()=>import("./chunk-L5JNILQY.js").then(t=>t.AccountModule)},{path:"",loadChildren:()=>import("./chunk-THS4N36Y.js").then(t=>t.UserModule)},{path:"",loadChildren:()=>import("./chunk-HFR5L4RF.js").then(t=>t.ClientModule)}],L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e}),e.\u0275inj=f({imports:[v.forRoot(B),v]});let t=e;return t})();var H=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e,bootstrap:[N]}),e.\u0275inj=f({providers:[g],imports:[k,I,L]});let t=e;return t})();S().bootstrapModule(H).catch(t=>console.error(t));
