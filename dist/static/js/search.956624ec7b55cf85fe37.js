webpackJsonp([5],{12:function(e,t,n){"use strict";var a=n(14),r=n.n(a),s={filters:{currency:function(e){var t=e,n=e.toString().split(".");return 1===n.length?t+=".00":n[1].length<2&&(t+="0"),t}},components:{Foot:r.a}};t.a=s},14:function(e,t,n){function a(e){n(16)}var r=n(11)(n(15),n(18),a,null,null);e.exports=r.exports},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),r=n.n(a),s=r.a.parse(location.search.substr(1)),o=s.index,c=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:c,curIndex:parseInt(o)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}},158:function(e,t){},16:function(e,t){},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,a){return n("li",{class:{active:a==e.curIndex},on:{click:function(n){e.changeNav(t,a)}}},[n("a",[n("i",{class:t.icon}),e._v(" "),n("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(23),r=(n.n(a),n(158)),s=(n.n(r),n(4)),o=n(8),c=n.n(o),i=n(3),d=n(20),u=n.n(d),l=n(12),h=n(54),f=n.n(h),m=u.a.parse(location.search.substr(1)),v=m.keyword,p=m.id;new s.default({el:".container",data:{searchList:null,keyword:v,isShow:!1},created:function(){this.getSearchList()},methods:{getSearchList:function(){var e=this;c.a.post(i.a.searchList,{keyword:v,id:p}).then(function(t){e.searchList=t.data.lists})},move:function(){document.body.scrollTop>100?(console.log(document.body.scrollTop),this.isShow=!0):this.isShow=!1},toTop:function(){f()(document.body,"scroll",{duration:1e3})}},mixins:[l.a]})},23:function(e,t){},3:function(e,t,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdata:"/address/update",addressSetDefault:"address/setDefault"};for(var r in a)a.hasOwnProperty(r)&&(a[r]="http://rap2api.taobao.org/app/mock/7058"+a[r]);t.a=a}},[195]);
//# sourceMappingURL=search.956624ec7b55cf85fe37.js.map