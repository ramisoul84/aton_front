import{a as S,b as m,c as x,d as C,e as y,f as N,g as E,k as w,l as U}from"./chunk-MTBLURCK.js";import{B as R,C as l,E as o,F as t,G as s,H as V,I as g,J as h,L as G,M as n,O as M,Q as j,U as k,V as q,aa as v,ba as T,da as b,k as _,o as f,p as I,s as L,t as D,x as c,y as u}from"./chunk-37CQUT2T.js";function H(i,e){if(i&1&&(o(0,"div"),n(1),t()),i&2){let p=h();c(),M(" ",p.loggedInUser.username,` is logged in!
`)}}function J(i,e){if(i&1){let p=V();o(0,"form",2),g("ngSubmit",function(){L(p);let r=h();return D(r.onSubmit())}),o(1,"div",3)(2,"label",4),n(3,"Username"),t(),s(4,"input",5),t(),o(5,"div",3)(6,"label",6),n(7,"Password"),t(),s(8,"input",7),t(),s(9,"input",8),o(10,"p"),n(11,"Don't have an account! "),o(12,"a",9),n(13,"Register"),t()()()}if(i&2){let p=h();l("formGroup",p.loginForm),c(9),l("disabled",!p.loginForm.valid)}}var A=(()=>{let e=class e{constructor(a,r){this.fb=a,this.authService=r}ngOnInit(){this.loginForm=this.fb.group({username:this.fb.control("",[m.required,m.minLength(4)]),password:this.fb.control("",[m.required,m.minLength(8)])}),this.authService.user$.subscribe(a=>this.loggedInUser=a)}onSubmit(){this.authService.login(this.loginForm.value)}};e.\u0275fac=function(r){return new(r||e)(u(w),u(b))},e.\u0275cmp=f({type:e,selectors:[["app-login"]],decls:3,vars:2,consts:[["elseBlock",""],[4,"ngIf","ngIfElse"],[3,"ngSubmit","formGroup"],[1,"input-wrapper"],["for","username"],["type","text","id","username","formControlName","username","placeholder","Enter your username","autocomplete","off"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Enter your password"],["type","submit","value","login",3,"disabled"],["routerLink","/register"]],template:function(r,d){if(r&1&&R(0,H,2,1,"div",1)(1,J,14,2,"ng-template",null,0,j),r&2){let F=G(2);l("ngIf",d.loggedInUser)("ngIfElse",F)}},dependencies:[v,y,S,x,C,N,E,k],encapsulation:2});let i=e;return i})();var O=(()=>{let e=class e{constructor(a,r){this.fb=a,this.authService=r}ngOnInit(){this.registerForm=this.fb.group({surname:this.fb.control("",[m.required]),name:this.fb.control("",[m.required]),patronymic:this.fb.control(""),username:this.fb.control("",[m.required,m.minLength(4)]),password:this.fb.control("",[m.required,m.minLength(8)])})}onSubmit(){this.authService.register(this.registerForm.value)}};e.\u0275fac=function(r){return new(r||e)(u(w),u(b))},e.\u0275cmp=f({type:e,selectors:[["app-register"]],decls:26,vars:2,consts:[[3,"ngSubmit","formGroup"],[1,"input-wrapper"],["for","surname"],["type","text","id","surname","formControlName","surname","autocomplete","off"],["for","name"],["type","text","id","name","formControlName","name","autocomplete","off"],["for","patronymic"],["type","text","id","patronymic","formControlName","patronymic","autocomplete","off"],["for","username"],["type","text","id","username","formControlName","username","autocomplete","off"],["for","password"],["type","password","id","password","formControlName","password"],["type","submit","value","Register",3,"disabled"],["routerLink","/login"]],template:function(r,d){r&1&&(o(0,"form",0),g("ngSubmit",function(){return d.onSubmit()}),o(1,"div",1)(2,"label",2),n(3,"Last Name"),t(),s(4,"input",3),t(),o(5,"div",1)(6,"label",4),n(7,"First Name"),t(),s(8,"input",5),t(),o(9,"div",1)(10,"label",6),n(11,"Middle Name"),t(),s(12,"input",7),t(),o(13,"div",1)(14,"label",8),n(15,"Username"),t(),s(16,"input",9),t(),o(17,"div",1)(18,"label",10),n(19,"Password"),t(),s(20,"input",11),t(),s(21,"input",12),o(22,"p"),n(23,"have an account! "),o(24,"a",13),n(25,"Login"),t()()()),r&2&&(l("formGroup",d.registerForm),c(21),l("disabled",!d.registerForm.valid))},dependencies:[v,y,S,x,C,N,E],encapsulation:2});let i=e;return i})();var K=[{path:"login",component:A},{path:"register",component:O}],ne=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=_({imports:[T.forChild(K),U,q]});let i=e;return i})();export{ne as AccountModule};