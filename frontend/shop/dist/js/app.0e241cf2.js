(function(t){function e(e){for(var s,r,i=e[0],c=e[1],d=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0163":function(t,e,o){"use strict";o("94d1")},"034f":function(t,e,o){"use strict";o("85ec")},"13f2":function(t,e,o){},"2fc4":function(t,e,o){},3004:function(t,e,o){"use strict";o("b70e")},4946:function(t,e,o){"use strict";o("6582")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header-component"),o("router-view"),o("footer-component")],1)},n=[],r=o("2b27"),i=o.n(r),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"nav"}},[o("router-link",{staticStyle:{"margin-right":"5px"},attrs:{to:"/"}},[t._v("Каталог")]),o("router-link",{staticStyle:{"margin-right":"5px"},attrs:{to:"/cart"}},[t._v("Корзина "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.cartCount>0,expression:"cartCount > 0"}],staticStyle:{color:"red"}},[t._v(" "+t._s(t.cartCount)+" ")])]),t.loggedIn?o("router-link",{staticStyle:{"margin-right":"5px"},attrs:{to:"/orders"}},[t._v("Заказы "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.ordersCount>0,expression:"ordersCount > 0"}],staticStyle:{color:"red"}},[t._v(" "+t._s(t.ordersCount)+" ")])]):t._e()],1)},d=[],l=(o("4160"),o("159b"),{computed:{cartCount:function(){var t=0;return this.$store.state.cart.cartPos.forEach((function(e){t+=+e.count})),t},ordersCount:function(){var t=0;return this.$store.state.orders.forEach((function(e){null==e.status&&t++})),t},loggedIn:function(){return null!==this.$store.state.user.apiKey},user:function(){return this.$store.state.user}}}),u=l,p=(o("3004"),o("2877")),f=Object(p["a"])(u,c,d,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"foot"}},[o("div",{staticClass:"row"},[t._m(0),o("div",{staticClass:"col-sm-4"},[o("b",[t._v("Наш адрес:")]),o("br"),t._v(" г. Киров, ул Милицейская, 31"),o("br"),t._v(" (Центральный рынок)"),o("br"),o("a",{attrs:{href:"javascript://"},on:{click:function(e){t.showMap=!0}}},[o("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(" карта ")])]),t._m(1)]),o("vodal",{attrs:{show:t.showMap,customStyles:{width:"80%",minWidth:"300px",height:"fit-content"}},on:{hide:function(e){t.showMap=!1}}},[o("div",{staticStyle:{position:"relative",overflow:"hidden"}},[o("a",{staticStyle:{color:"#eee","font-size":"12px",position:"absolute",top:"0px"},attrs:{href:"https://yandex.ru/maps/org/paseka_markovykh/1261368074/?utm_medium=mapframe&utm_source=maps"}},[t._v("Пасека Марковых")]),o("a",{staticStyle:{color:"#eee","font-size":"12px",position:"absolute",top:"14px"},attrs:{href:"https://yandex.ru/maps/46/kirov/category/honey_and_beekeeping/184106474/?utm_medium=mapframe&utm_source=maps"}},[t._v("Мёд и продукты пчеловодства в Кирове")]),o("iframe",{staticStyle:{position:"relative"},attrs:{src:"https://yandex.ru/map-widget/v1/-/CCUEzLwVWB",width:"100%",height:"400",frameborder:"0",allowfullscreen:"true"}})])])],1)},g=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-4"},[o("b",[t._v("ИП Марков Владимир Николаевич")]),o("br"),t._v(" ОГРН 304432435200110"),o("br"),t._v(" ИНН 432400080501 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-4"},[o("b",[t._v("Контакты")]),o("br"),t._v(" +7 (905) 870-7667"),o("br"),t._v(" +7 (964) 250-0268"),o("br"),o("a",{attrs:{href:"https://vk.com/medmarkovyh",target:"_blank"}},[o("i",{staticClass:"fa fa-vk"}),t._v(" medmarkovyh")])])}],h={data:function(){return{showMap:!1}}},_=h,b=(o("68b3"),Object(p["a"])(_,v,g,!1,null,null,null)),y=b.exports;s["default"].use(i.a);var C={components:{headerComponent:m,footerComponent:y},mounted:function(){this.$store.dispatch("getAllGoods"),this.$store.dispatch("login")}},w=C,x=(o("034f"),Object(p["a"])(w,a,n,!1,null,null,null)),$=x.exports,S=o("8c4f"),k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"goods container-md"},[o("good-head-mess"),t._l(t.groupps,(function(e){return o("div",{key:e.val},[t.groupHeadShow(e)?o("div",{staticClass:"title"},[t._v(t._s(e.name))]):t._e(),o("div",{staticClass:"row"},t._l(t.filteredGoods(e),(function(e,s){return o("div",{key:s,staticClass:"col-md-6 col-lg-4"},[o("div",{staticClass:"card"},[t.adminMode?o("admin-btns",{attrs:{type:"edit",good:e}}):t._e(),o("good-img",{attrs:{good:e,ver:t.verSelected(e)}}),o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),o("p",{staticClass:"card-text"},[t._v(t._s(e.desc))]),o("h2",{staticClass:"card-title"},[t._v(t._s(t.price(e)))]),o("good-versions",{attrs:{good:e,selected:t.verSelected(e)}}),o("div",[o("a",{staticClass:"mybtn",staticStyle:{cursor:"pointer"},on:{click:function(o){return t.addToCard(e)}}},[o("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" в корзину")])])],1)],1)])})),0)])})),t.adminMode?o("admin-btns",{attrs:{good:"{}",type:"add"}}):t._e(),o("edit-win"),o("info-mess",{attrs:{show:t.infoShow,text:t.infoText}})],2)},O=[],M=(o("4de4"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["add"!=t.type?o("button",{staticClass:"btn btn-primary btn-sm btn-top",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("showGoodAdminModal",{good:t.good,type:"edit"})}}},[o("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})]):t._e(),"add"!=t.type?o("button",{staticClass:"btn btn-primary btn-sm btn-top",staticStyle:{right:"40px"},attrs:{type:"button"},on:{click:function(e){return t.$store.commit("showGoodAdminModal",{good:t.good,type:"photo"})}}},[o("i",{staticClass:"fa fa-file-image-o",attrs:{"aria-hidden":"true"}})]):t._e(),"add"==t.type?o("button",{staticClass:"btn btn-success btn-bottom",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("showGoodAdminModal",{good:t.good,type:"add"})}}},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]):t._e()])}),A=[],G={props:["good","type"]},P=G,j=(o("0163"),Object(p["a"])(P,M,A,!1,null,null,null)),E=j.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vodal",{attrs:{show:t.$store.state.goodAdminModal.show,customStyles:{width:"50%",minWidth:"300px",height:"fit-content"}},on:{hide:function(e){return t.$store.commit("closeGoodAdminModal")}}},[o("h3",[t._v(t._s(t.$store.state.goodAdminModal.header))]),"photo"!=t.$store.state.goodAdminModal.type?o("div",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[t._v("Наименование товара")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.good.name,expression:"good.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.good.name},on:{input:function(e){e.target.composing||t.$set(t.good,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"group"}},[t._v("Группа товара")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.good.group,expression:"good.group"}],staticClass:"form-control",attrs:{id:"group"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.good,"group",e.target.multiple?o:o[0])}}},t._l(t.groupps,(function(e){return o("option",{key:e.val,domProps:{value:e.val}},[t._v(t._s(e.name))])})),0)]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"desc"}},[t._v("Описание товара")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.good.desc,expression:"good.desc"}],staticClass:"form-control",attrs:{type:"text",id:"desc",rows:"3"},domProps:{value:t.good.desc},on:{input:function(e){e.target.composing||t.$set(t.good,"desc",e.target.value)}}})]),o("label",[t._v("Сорт/вид товара")]),t._l(t.good.ver,(function(e,s){return o("div",{key:s,staticClass:"input-group",staticStyle:{"padding-bottom":"5px"}},[o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text"},[t._v(t._s(s)+":")])]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"v.price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Цена"},domProps:{value:e.price},on:{input:function(o){o.target.composing||t.$set(e,"price",o.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"v.comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"описание"},domProps:{value:e.comment},on:{input:function(o){o.target.composing||t.$set(e,"comment",o.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-danger btn-sm",attrs:{disabled:1==t.good.ver.length},on:{click:function(e){return t.$store.dispatch("delGoodVer",s)}}},[o("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])})),o("div",{staticClass:"btn-group",staticStyle:{"padding-top":"10px"},attrs:{role:"group"}},[o("button",{staticClass:"btn btn-outline-success",attrs:{disabled:t.good.ver.length>=5},on:{click:function(e){return t.$store.commit("addGoodVer")}}},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" Сорт/вид ")]),o("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$store.dispatch("setGood",t.good)}}},[o("i",{staticClass:"fa fa-floppy-o",attrs:{"aria-hidden":"true"}}),t._v(" Сохранить ")]),o("button",{staticClass:"btn btn-danger",attrs:{disabled:void 0==t.good._id},on:{click:function(e){return t.$store.dispatch("delGood",t.good)}}},[o("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v(" Удалить ")])])],2):o("div",[o("div",{staticClass:"input-group"},[o("div",{staticClass:"custom-file"},[o("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file"},on:{change:function(e){return t.handleFileUpload()}}}),o("label",{staticClass:"custom-file-label",staticStyle:{"padding-right":"100px"}},[t._v(t._s(t.filename))])])]),o("div",{staticClass:"btn-group",staticStyle:{"padding-top":"10px"},attrs:{role:"group"}},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("sendFile",{good:t.good,file:t.file})}}},[o("i",{staticClass:"fa fa-file-image-o",attrs:{"aria-hidden":"true"}}),t._v(" загрузить ")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("delFile",{good:t.good})}}},[o("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v(" удалить ")])])])])},N=[],T=(o("4f8c"),o("f827")),J=o.n(T);s["default"].component(J.a.name,J.a);var F={data:function(){return{file:null}},computed:{groupps:function(){return this.$store.state.groupps},good:function(){return this.$store.state.goodAdminModal.good},filename:function(){return this.file?this.file.name:""}},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0]}}},V=F,K=(o("8c27"),Object(p["a"])(V,I,N,!1,null,null,null)),B=K.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-right css-3d-text"},[o("div",[t._v(" Добро пожаловать"),o("br"),t._v(" в наш интернет магазин"),o("br")]),o("div",{staticClass:"info-text text-left"},[t._v(" У нас есть новогодние предложения:"),o("br"),t._v(" - восковые свечи,"),o("br"),t._v(" - ароматное медовое мыло,"),o("br"),t._v(" - мёд в оригинальной упаковке ")])])}],L=(o("ee77"),{}),W=Object(p["a"])(L,z,H,!1,null,null,null),U=W.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("div",{staticClass:"alert alert-success",staticStyle:{position:"fixed","z-index":"5",bottom:"5px",right:"5px"},attrs:{role:"alert"},domProps:{innerHTML:t._s(t.text)}}):t._e()},R=[],X={props:["show","text"]},D=X,Q=Object(p["a"])(D,q,R,!1,null,null,null),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.good.ver[t.ver].photo?o("img",{staticClass:"card-img-top",attrs:{src:t.path+t.good.ver[t.ver].photo.file,alt:t.good.name}}):t._e()},tt=[],et={props:["good","ver"],data:function(){return{path:"/img/"}},mounted:function(){this.path=this.$store.state.server+this.path}},ot=et,st=Object(p["a"])(ot,Z,tt,!1,null,null,null),at=st.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.good.ver.length>1?o("div",{staticClass:"btn-group",staticStyle:{"padding-bottom":"16px"},attrs:{role:"group"}},t._l(t.good.ver,(function(e,s){return o("button",{key:s,staticClass:"btn btn-sm",class:t.isSelected(t.good,s)?"btn-success":"btn-outline-success",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("setSelected",{good:t.good,id:s})}}},[t._v(" "+t._s(e.comment)+" ")])})),0):t._e()},rt=[],it={props:["good","selected"],methods:{isSelected:function(t,e){return this.selected===e}}},ct=it,dt=Object(p["a"])(ct,nt,rt,!1,null,null,null),lt=dt.exports,ut={components:{infoMess:Y,goodVersions:lt,goodImg:at,goodHeadMess:U,editWin:B,adminBtns:E},data:function(){return{infoShow:!1,infoText:""}},methods:{price:function(t){return t.ver[this.verSelected(t)].price+"₽"},addToCard:function(t){this.setSelected(t),this.$store.commit("addInCart",{id:t._id,ver:t.selected,count:1}),this.showInfo(t.name)},filteredGoods:function(t){return this.goods.filter((function(e){return e.group===t.val}))},showInfo:function(t){var e=this;this.infoText='Товар "'+t+'" добавлен в <a href="#/cart" class="alert-link">корзину</a>',this.infoShow=!0,setTimeout((function(){e.infoShow=!1}),15e3)},verSelected:function(t){return void 0===t.selected||t.selected>=t.ver.length?0:t.selected},setSelected:function(t){(void 0===t.selected||t.selected>=t.ver.length)&&this.$store.commit("setSelected",{good:t,id:0})},groupHeadShow:function(t){return null!=t.val&&this.filteredGoods(t).length>0}},computed:{groupps:function(){return this.$store.state.groupps},goods:function(){return this.$store.getters.getAllGoods},adminMode:function(){return this.$store.state.user.admin}}},pt=ut,ft=(o("4946"),Object(p["a"])(pt,k,O,!1,null,"34678e56",null)),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cart container-md",staticStyle:{"padding-bottom":"20px"}},[t.cart.cartPos.length>0?o("div",{staticStyle:{padding:"10px"}},[o("div",{staticClass:"title"},[t._v("Ваши покупки")]),o("cart-body",{attrs:{cart:t.cart,type:"cart"},on:{edited:function(e){return t.$store.commit("saveCart")},clear:function(e){return t.$store.commit("clearCart")}}}),o("div",{staticClass:"title"},[t._v("Ваша анкета")]),o("cart-anketa"),o("cart-send-btn")],1):o("h3",{staticStyle:{"padding-top":"20%"}},[t._v("Ваша корзина пуста")]),o("info-mess",{attrs:{show:t.infoShow,text:"Ваш заказ принят. Скоро мы свяжемся с Вами для уточнения деталей заказа."}})],1)},gt=[],ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-bordered"},[o("thead",[o("tr",[o("th",{staticStyle:{width:"5%"},attrs:{scope:"col"}},[t._v("#")]),o("th",{attrs:{scope:"col"}},[t._v("Товар")]),o("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Тип")]),o("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Цена")]),o("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Количество")]),o("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Сумма")]),"cart"==t.type?o("th",{staticStyle:{width:"114px"},attrs:{scope:"col"}}):t._e()])]),o("tbody",t._l(t.cart.cartPos,(function(e,s){return o("tr",{key:s},[o("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),o("td",[t._v(t._s(e.source.name))]),o("td",[t._v(t._s(t.getVer(e)))]),o("td",[t._v(t._s(t.getPrice(e)))]),o("td",["cart"==t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"el.count"}],staticClass:"form-control form-control-sm text-center",attrs:{type:"number",min:"1"},domProps:{value:e.count},on:{change:function(e){return t.$emit("edited")},input:function(o){o.target.composing||t.$set(e,"count",o.target.value)}}}):o("div",[t._v(" "+t._s(e.count)+" ")])]),o("td",[t._v(t._s(t.getSum(e)))]),"cart"==t.type?o("td",[o("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){t.cart.cartPos.splice(s,1),t.$emit("edited")}}},[o("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v(" удалить ")])]):t._e()])})),0),o("thead",[o("tr",[o("th",{staticClass:"text-left",attrs:{scope:"col",colspan:"2"}},[t.$store.state.user.admin&&"order"==t.type?o("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.$store.dispatch("delOrder",t.cart)}}},[o("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v(" удалить заказ ")]):t._e(),t.$store.state.user.admin&&"order"==t.type&&null==t.cart.status?o("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{"margin-left":"5px"},on:{click:function(e){return t.$store.dispatch("doneOrder",t.cart)}}},[o("svg",{staticClass:"bi bi-check",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"}})]),t._v(" выполнить ")]):t._e(),t._v(" "+t._s("done"===t.cart.status?"Выполнен":"")+" ")]),t._m(0),o("th",{attrs:{scope:"col"}},[t._v(t._s(t.allCount))]),o("th",{attrs:{scope:"col"}},[t._v(t._s(t.allPrice))]),"cart"==t.type?o("th",{attrs:{scope:"col"}},[o("a",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){t.$emit("clear"),t.$emit("edited")}}},[t._v("ОЧИСТИТЬ")])]):t._e()])])])])},_t=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",{staticClass:"text-right",attrs:{scope:"col",colspan:"2"}},[o("b",[t._v("СУММА")])])}],bt={props:["cart","type"],computed:{allPrice:function(){var t=this,e=0;return this.cart.cartPos.forEach((function(o){e+=t.getSum(o)})),e},allCount:function(){var t=0;return this.cart.cartPos.forEach((function(e){t+=+e.count})),t}},methods:{getVer:function(t){return t.source.ver[t.ver].comment},getPrice:function(t){return t.source.ver[t.ver].price},getSum:function(t){return this.getPrice(t)*t.count}}},yt=bt,Ct=Object(p["a"])(yt,ht,_t,!1,null,null,null),wt=Ct.exports,xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"btn btn-success btn-lg",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("orderSend")}}},[o("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v(" Отправить ")])},$t=[],St={},kt=Object(p["a"])(St,xt,$t,!1,null,null,null),Ot=kt.exports,Mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[(t.loggedIn,t._e()),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-4 text-sm-right",staticStyle:{"margin-top":"5px"},attrs:{for:"name"}},[t._v("Фамилия, Имя, Отчество")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.name,expression:"cart.name"}],staticClass:"form-control col-sm-6",attrs:{type:"text",id:"name"},domProps:{value:t.cart.name},on:{input:function(e){e.target.composing||t.$set(t.cart,"name",e.target.value)}}})]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-4 text-sm-right",staticStyle:{"margin-top":"5px"},attrs:{for:"phone"}},[t._v("Мобильный телефон")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.phone,expression:"cart.phone"}],staticClass:"form-control col-sm-6",attrs:{type:"phone",id:"phone"},domProps:{value:t.cart.phone},on:{input:function(e){e.target.composing||t.$set(t.cart,"phone",e.target.value)}}})]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-4 text-sm-right",staticStyle:{"margin-top":"5px"},attrs:{for:"info"}},[t._v("Пожелания к заказу")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cart.info,expression:"cart.info"}],staticClass:"form-control col-sm-6",attrs:{type:"text",id:"info",rows:"3"},domProps:{value:t.cart.info},on:{input:function(e){e.target.composing||t.$set(t.cart,"info",e.target.value)}}})])])},At=[],Gt={computed:{cart:function(){return this.$store.state.cart},loggedIn:function(){return null!==this.$store.state.user.apiKey}}},Pt=Gt,jt=Object(p["a"])(Pt,Mt,At,!1,null,null,null),Et=jt.exports,It={components:{infoMess:Y,cartBody:wt,cartSendBtn:Ot,cartAnketa:Et},computed:{infoShow:function(){return this.$store.state.cartInfoShow},cart:function(){return this.$store.state.cart}}},Nt=It,Tt=Object(p["a"])(Nt,vt,gt,!1,null,null,null),Jt=Tt.exports,Ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login container-md"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-title"},[t._v("Авторизация")]),o("div",{staticClass:"card-text"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"login"}},[t._v("Логин")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"form-control",attrs:{type:"text",id:"login"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Пароль")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("button",{staticClass:"mybtn",attrs:{type:"button"},on:{click:t.input}},[t._v(" Вход ")])])])])])},Vt=[];s["default"].use(i.a),s["default"].$cookies.config("7d");var Kt={data:function(){return{login:"",password:""}},methods:{input:function(){s["default"].$cookies.set("login",this.login),s["default"].$cookies.set("password",this.password),this.$store.dispatch("login"),this.$router.go(-1)}}},Bt=Kt,zt=(o("fd82"),Object(p["a"])(Bt,Ft,Vt,!1,null,"0b2585a7",null)),Ht=zt.exports,Lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"orders container-md",staticStyle:{"padding-bottom":"20px"}},[t.orders.length>0?o("div",{staticStyle:{padding:"10px"}},t._l(t.orders,(function(e,s){return o("div",{key:s},[o("div",{staticClass:"title"},[t._v("Заказ № "+t._s(s+1))]),o("table",{staticClass:"table table-bordered"},[o("tbody",[o("tr",[o("th",{attrs:{scope:"row"}},[t._v("Имя")]),o("td",[t._v(t._s(e.name))])]),o("tr",[o("th",{attrs:{scope:"row"}},[t._v("Телефон")]),o("td",[t._v(t._s(e.phone))])]),o("tr",[o("th",{attrs:{scope:"row"}},[t._v("Комментарий")]),o("td",[t._v(t._s(e.info))])])])]),o("cart-body",{attrs:{cart:e,type:"order"}})],1)})),0):t._e(),t.loggedIn?t._e():o("div",{staticClass:"alert alert-success",staticStyle:{margin:"14px"},attrs:{role:"alert"}},[t._v(" Нажмите кнопку "),o("b",[o("router-link",{attrs:{to:"/login"}},[t._v("Войти")])],1),t._v(", чтобы увидеть Ваши заказы. ")]),t.loggedIn&&0==t.orders.length?o("div",[o("h3",{staticStyle:{"padding-top":"20%"}},[t._v("Заказов пока нет")])]):t._e()])},Wt=[],Ut={components:{cartBody:wt},computed:{orders:function(){return this.$store.state.orders},loggedIn:function(){return null!==this.$store.state.user.apiKey}},mounted:function(){this.$store.state.user.apiKey&&this.$store.dispatch("getAllOrders")}},qt=Ut,Rt=Object(p["a"])(qt,Lt,Wt,!1,null,null,null),Xt=Rt.exports;s["default"].use(S["a"]);var Dt=[{path:"/cart",name:"Cart",component:Jt},{path:"/login",name:"Login",component:Ht},{path:"/orders",name:"Orders",component:Xt},{path:"*",name:"Goods",component:mt}],Qt=new S["a"]({routes:Dt}),Yt=Qt,Zt=(o("7db0"),o("c740"),o("a434"),o("bee2")),te=o("d4ec"),ee=o("2f62"),oe=o("8206"),se=o.n(oe);s["default"].use(ee["a"]);var ae=function t(){Object(te["a"])(this,t),this.name="",this.group=null,this.ver=[{photo:null,price:0,comment:""}],this.desc=""},ne=function(){function t(e,o,s,a){Object(te["a"])(this,t),this.id=e,this.ver=o,this.count=s,this.source=a}return Object(Zt["a"])(t,[{key:"addInCart",value:function(t){var e=this,o=t.findIndex((function(t){return t.id===e.id&&t.ver===e.ver}));o>=0?s["default"].set(t[o],"count",t[o].count+1):t.push(this)}}]),t}(),re=new ee["a"].Store({state:{groupps:[{val:null,name:"Нет группы"},{val:2,name:"Восковые свечи"},{val:3,name:"Медовое мыло"},{val:4,name:"Наборы подарков"},{val:1,name:"Мёд"}],goods:[],orders:[],cart:{name:"",phone:"",info:"",cartPos:[]},cartInfoShow:!1,server:"http://node.markovrv.ru",goodAdminModal:{show:!1,header:"Заголовок",type:"",good:new ae},user:{apiKey:null,name:"",phone:"",admin:!1}},getters:{getAllGoods:function(t){return t.goods}},mutations:{addInCart:function(t,e){var o=t.goods.find((function(t){return t._id===e.id}));new ne(e.id,e.ver,e.count,o).addInCart(t.cart.cartPos),localStorage.cart=JSON.stringify(t.cart)},saveCart:function(t){localStorage.cart=JSON.stringify(t.cart)},loadCart:function(t){localStorage.cart&&s["default"].set(t,"cart",JSON.parse(localStorage.cart))},clearCart:function(t){t.cart={name:t.user.name,phone:t.user.phone,info:"",cartPos:[]}},addGoodVer:function(t){t.goodAdminModal.good.ver.push((new ae).ver[0])},addGood:function(t,e){t.goods.push(e)},delGood:function(t,e){var o=t.goods.findIndex((function(t){return t._id===e}));t.goods.splice(o,1)},setGood:function(t,e){var o=t.goods.findIndex((function(t){return t._id===e._id}));s["default"].set(t.goods,o,e)},setAllGoods:function(t,e){t.goods=e},setAllOrders:function(t,e){t.orders=e},setSelected:function(t,e){var o=t.goods.find((function(t){return t._id===e.good._id}));s["default"].set(o,"selected",e.id)},showGoodAdminModal:function(t,e){switch(s["default"].set(t.goodAdminModal,"type",e.type),"add"!==e.type?s["default"].set(t.goodAdminModal,"good",e.good):s["default"].set(t.goodAdminModal,"good",new ae),e.type){case"add":s["default"].set(t.goodAdminModal,"header","Добавление товара");break;case"photo":s["default"].set(t.goodAdminModal,"header","Загрузка фото");break;default:s["default"].set(t.goodAdminModal,"header","Изменение товара");break}s["default"].set(t.goodAdminModal,"show",!0)},closeGoodAdminModal:function(t){s["default"].set(t.goodAdminModal,"show",!1)}},actions:{delGoodVer:function(t,e){this.dispatch("delFile",{good:t.state.goodAdminModal.good,id:e}),t.state.goodAdminModal.good.ver.splice(e,1)},getAllGoods:function(t){se.a.get(t.state.server+"/api/goods/").then((function(e){t.commit("setAllGoods",e.data)}))},getAllOrders:function(t){se.a.get(t.state.server+"/api/orders/").then((function(e){t.commit("setAllOrders",e.data)}))},setGood:function(t,e){if(void 0!==e._id){var o=JSON.parse(JSON.stringify(e));delete o._id,se.a.put(t.state.server+"/api/goods/"+e._id,o).then((function(e){t.commit("closeGoodAdminModal")}))}else se.a.post(t.state.server+"/api/goods/",e).then((function(e){t.commit("addGood",e.data)}))},orderSend:function(t){var e=JSON.parse(JSON.stringify(t.state.cart));se.a.post(t.state.server+"/api/orders/",e).then((function(e){t.state.cartInfoShow=!0,setInterval((function(){t.state.cartInfoShow=!1}),15e3)}))},delOrder:function(t,e){se.a.delete(t.state.server+"/api/orders/"+e._id).then((function(e){t.dispatch("getAllOrders")}))},doneOrder:function(t,e){se.a.put(t.state.server+"/api/orders/"+e._id,{status:"done"}).then((function(e){t.dispatch("getAllOrders")}))},delGood:function(t,e){se.a.delete(t.state.server+"/api/goods/"+e._id).then((function(o){t.commit("closeGoodAdminModal"),t.commit("delGood",e._id)}))},sendFile:function(t,e){var o=this,a=new FormData;a.append("filedata",e.file),(void 0===e.good.selected||e.good.selected>=e.good.ver.length)&&s["default"].set(e.good,"selected",0);var n=e.good.selected;se.a.post(t.state.server+"/api/goods/upload/"+e.good._id+"/"+n,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.selected=n,t.commit("setGood",e.data)})).catch((function(t){console.log(t),console.log(o.file)}))},delFile:function(t,e){var o=this,a=0;void 0===e.id?((void 0===e.good.selected||e.good.selected>=e.good.ver.length)&&s["default"].set(e.good,"selected",0),a=e.good.selected):a=e.id,void 0!==e.good._id&&se.a.delete(t.state.server+"/api/goods/upload/"+e.good._id+"/"+a).then((function(o){void 0===e.id&&(e.good.ver[e.good.selected].photo=null,t.commit("setGood",e.good))})).catch((function(t){console.log(t),console.log(o.file)}))},login:function(t){var e=s["default"].$cookies.get("login");"admin"===e&&(t.state.user.admin=!0,t.state.user.apiKey="12345",t.state.user.name="admin",t.state.user.phone="22-55-66",t.commit("loadCart"),t.state.cart.name=t.state.user.name,t.state.cart.phone=t.state.user.phone,t.commit("saveCart"),t.dispatch("getAllOrders"))},logout:function(t){s["default"].$cookies.remove("login"),s["default"].$cookies.remove("password"),t.state.user.admin=!1,t.state.user.apiKey=null,t.state.user.name="",t.state.user.phone="",t.state.orders=[]}},modules:{}}),ie=(o("2fc4"),o("5f5b"));o("f9e3"),o("2dd8");s["default"].use(ie["a"]),window.axios=o("8206"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.axios.defaults.headers.common.Accept="application/json",s["default"].config.productionTip=!1,new s["default"]({router:Yt,store:re,render:function(t){return t($)}}).$mount("#app")},6582:function(t,e,o){},"68b3":function(t,e,o){"use strict";o("98b5")},"85ec":function(t,e,o){},"8c27":function(t,e,o){"use strict";o("e6c5")},"94d1":function(t,e,o){},"98b5":function(t,e,o){},b70e:function(t,e,o){},e6c5:function(t,e,o){},ee77:function(t,e,o){"use strict";o("f502")},f502:function(t,e,o){},fd82:function(t,e,o){"use strict";o("13f2")}});
//# sourceMappingURL=app.0e241cf2.js.map