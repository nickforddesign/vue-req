webpackJsonp([1],{"/q1t":function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:function(e){t.test("get")}}},[t._v("Get")]),t._v(" "),n("button",{on:{click:function(e){t.test("put")}}},[t._v("Put")]),t._v(" "),n("button",{on:{click:function(e){t.test("post")}}},[t._v("Post")]),t._v(" "),n("button",{on:{click:function(e){t.test("delete")}}},[t._v("Delete")]),t._v(" "),n("div",[n("button",{on:{click:t.jsfiddle}},[t._v("Get JSFiddle")])])])},staticRenderFns:[]};e.a=r},"0xDb":function(t,e,n){"use strict";function r(t){return void 0!==t}e.c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={before:t.before,timeout:t.timeout},n={root:t.root},o={headers:t.headers},a={timeout_duration:t.timeout_duration};for(var i in e){var u=s()(e[i]);if(r(e[i])&&"function"!==u)throw new TypeError('Expected parameter "'+i+'" to be a function, received '+u)}for(var c in n){var f=s()(n[c]);if(r(n[c])&&"string"!==f)throw new TypeError('Expected parameter "'+c+'" to be a string, received '+f)}for(var p in o){var v=s()(o[p]);if(r(o[p])&&"object"!==v)throw new TypeError('Expected parameter "'+p+'" to be an object, received '+v)}for(var d in a){var h=s()(a[d]);if(r(a[d])&&"number"!==h)throw new TypeError('Expected parameter "'+d+'" to be an number, received '+h)}},n.d(e,"b",function(){return x}),e.a=function(t,e){var n=d()({},t,e);for(var r in n)"function"==typeof n[r]&&(n[r]=n[r]());return n=l()(n,b.a),new Headers(n)};var o=n("Xxa5"),a=n.n(o),i=n("exGp"),u=n.n(i),c=n("pFYg"),s=n.n(c),f=n("//Fk"),p=n.n(f),v=n("mB6w"),d=n.n(v),h=n("xWWB"),l=n.n(h),m=n("BKC+"),b=n.n(m),x=function(){var t=u()(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.text();case 2:if(n=t.sent,t.prev=3,r=JSON.parse(n),e.ok){t.next=9;break}return t.abrupt("return",p.a.reject(r));case 9:return t.abrupt("return",r);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(3),t.abrupt("return",p.a.reject(n));case 15:case"end":return t.stop()}},t,this,[[3,12]])}));return function(e){return t.apply(this,arguments)}}()},"7I1f":function(t,e,n){"use strict";e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=c()({},p(),e),u=a.body?i()(a.body):void 0,s=a.method,v=n.i(f.a)(r.headers,a.headers);/^https?:\/\//i.test(t)||(t=r.root+t);var d=o.a.race([fetch(t,{method:s,body:u,headers:v}).then(f.b),new o.a(function(t,e){setTimeout(function(){e("request_timeout")},r.timeout_duration)})]);return d.catch(function(t){"request_timeout"===t&&r.timeout.apply(r.vm)}),d};var r=n("//Fk"),o=n.n(r),a=n("mvHQ"),i=n.n(a),u=n("mB6w"),c=n.n(u),s=n("rplX"),f=(n.n(s),n("0xDb")),p=function(){return{method:"GET",body:void 0,headers:{}}}},"90m7":function(t,e,n){"use strict";var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a),u=n("mB6w"),c=n.n(u),s=n("7I1f"),f=n("0xDb"),p=this,v={timeout_duration:2e4,timeout:!1,headers:{},root:""},d=function(){var t=i()(o.a.mark(function t(e,r){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{n.i(f.c)(r)}catch(t){console.warn(t)}a=c()({vm:e},v,r),e.$request=function(){var t=i()(o.a.mark(function t(r,i){var u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof a.before||!u){t.next=3;break}return t.next=3,a.before.apply(e);case 3:return t.abrupt("return",n.i(s.a)(r,i,a));case 4:case"end":return t.stop()}},t,p)}));return function(e,n){return t.apply(this,arguments)}}();case 3:case"end":return t.stop()}},t,p)}));return function(e,n){return t.apply(this,arguments)}}();e.a=function(t,e){return{beforeCreate:function(){d(this,e)}}}},BtyG:function(t,e,n){"use strict";var r=n("UnWR"),o=n("/q1t"),a=n("VU/8")(r.a,o.a,function(t){n("vOT0")},null,null);e.a=a.exports},"CxC/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o=n("BtyG"),a=n("lVK7");r.a.config.productionTip=!1;r.a.use(a.a,{root:"http://localhost:8080",headers:{Access:function(){return"test"},Refresh:"test_refresh_token"},before:function(){console.log("fire this before")},timeout:function(){console.log("fire this on timeout")}}),new r.a({el:"#app",template:"<App/>",components:{App:o.a}})},UnWR:function(t,e,n){"use strict";var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a);e.a={name:"app",methods:{test:function(t){this.$request("/thing",{method:t}).then(function(t){console.log({response:t})}).catch(function(t){console.warn(t)})},jsfiddle:function(){var t=this;return i()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$request("http://google.com/");case 2:n=e.sent,console.log({response:n});case 4:case"end":return e.stop()}},e,t)}))()}}}},lVK7:function(t,e,n){"use strict";var r=n("Zrlr"),o=n.n(r),a=n("wxAW"),i=n.n(a),u=n("90m7"),c=n("7I1f"),s=function(){function t(){o()(this,t)}return i()(t,null,[{key:"install",value:function(t,e){t.mixin(n.i(u.a)(t,e))}}]),t}();s.Request=c.a,e.a=s},vOT0:function(t,e){}},["CxC/"]);