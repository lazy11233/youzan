webpackJsonp([3],{14:function(t,e,a){function n(t){a(16)}var s=a(11)(a(15),a(18),n,null,null);t.exports=s.exports},15:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(20),s=a.n(n),i=s.a.parse(location.search.substr(1)),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},157:function(t,e){},16:function(t,e){},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n==t.curIndex},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(23),s=(a.n(n),a(157)),i=(a.n(s),a(4)),r=a(8),o=a.n(r),c=a(3),d=a(159),l=(a.n(d),a(14)),u=a.n(l),p=a(40),f=a.n(p);i.default.use(d.InfiniteScroll);new i.default({el:"#app",data:{lists:null,pageNum:0,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,o.a.post(c.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a}),this.loading=!1,this.pageNum++)},getBanner:function(){var t=this;o.a.get(c.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:u.a,Swipe:f.a}})},23:function(t,e){},3:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdata:"/address/update",addressSetDefault:"address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},40:function(t,e,a){function n(t){a(70)}var s=a(11)(a(56),a(78),n,null,null);t.exports=s.exports},56:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(141),s=a(69);a.n(s);e.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}},69:function(t,e){},70:function(t,e){},78:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t,e){return a("div",{key:e,staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}}},[192]);
//# sourceMappingURL=index.c1f3b9dbbb5c8117a748.js.map