(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(t,e,o){"use strict";o.r(e);o(15),o(21),o(13),o(44),o(39),o(46),o(22),o(14);var r=o(11),n=o(209),c=o(111);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"AddToCartButton",components:{CButton:n.a},props:{cat:Object},computed:d(d({},Object(c.d)({catsInCart:function(t){return t.cart.cats}})),{},{buttonColor:function(){return-1===this.catsInCart.indexOf(this.cat)?"gray":"green"},buttonText:function(){return-1===this.catsInCart.indexOf(this.cat)?"Add to cart":"Added to your cart"}}),methods:d(d({},Object(c.b)("cart",["addCatToCart","manageButtonColor","manageButtonText"])),{},{addToCart:function(t){this.addCatToCart(t)}})},m=o(35),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("CButton",{attrs:{"variant-color":t.buttonColor},on:{click:function(e){return t.addToCart(t.cat)}}},[t._v("\n  "+t._s(t.buttonText)+"\n")])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(27),c=o(362),l=o(353),d=o(363),h=o(364),m=o(209),f=o(352),C=o(43),v=o(90),w=(o(359),o(51));C.c.add(v.b),r.default.component("font-awesome-icon",w.a),r.default.component("font-awesome-layers",w.b),r.default.component("font-awesome-layers-text",w.c);var O={name:"Card",components:{CBox:n.a,CGrid:c.a,CHeading:l.a,CImage:d.a,CBadge:h.a,CButton:m.a,CFlex:f.a},props:{cat:{name:String,description:String,age:String,breed:String,fiv:Boolean,felv:Boolean,price:String,imageSrc:String}}},y=o(35),component=Object(y.a)(O,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CBox",{attrs:{maxW:"sm","border-width":"1px",rounded:"lg",overflow:"hidden",width:"fit-content"}},[o("CImage",{attrs:{src:t.cat.imageSrc,alt:t.cat.imageDescription}}),t._v(" "),o("CBox",{attrs:{overflow:"hidden",padding:"1rem"}},[o("CBox",{attrs:{d:"flex","align-items":"baseline"}},[o("CBadge",{attrs:{rounded:"full",px:"2","variant-color":"green"}},[t._v("\n        "+t._s(t.cat.tag)+"\n      ")]),t._v(" "),o("CBox",{attrs:{color:"gray.500","font-weight":"semibold","letter-spacing":"wide","font-size":"xs","text-transform":"uppercase",ml:"2"}},[t._v("\n        "+t._s(t.cat.breed)+" | "+t._s(t.cat.age)+" yo |\n        "+t._s(1==t.cat.fiv?"fiv+":"fiv-")+" ;\n        "+t._s(1==t.cat.felv?"felv+":"felv-")+"\n      ")])],1),t._v(" "),o("CBox",{attrs:{mt:"1","font-weight":"semibold",as:"h4","line-height":"tight","is-truncated":""}},[t._v("\n      "+t._s(t.cat.name)+"\n    ")]),t._v(" "),o("CBox",{attrs:{mt:"1",as:"p","line-height":"tight","is-truncated":""}},[t._v("\n      "+t._s(t.cat.description)+"\n    ")]),t._v(" "),o("CFlex",{attrs:{flexDirection:"column"}},[o("CBox",{attrs:{mt:"4",textAlign:"right","font-weight":"bold","font-size":"2xl"}},[t._v("\n        "+t._s(t.cat.price)+"\n        "),o("CBox",{attrs:{as:"span",color:"gray.600",fontSize:"sm"}},[t._v(" euros ")])],1),t._v(" "),o("CGrid",{attrs:{justify:"space-around",gap:"6","template-columns":"repeat(2, 1fr)",mt:"5"}},[o("CButton",{attrs:{variant:"ghost",as:"nuxt-link",to:"/cats/"+t.cat.id}},[t._v("See details")]),t._v(" "),o("AddToCartButton",{attrs:{cat:t.cat}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AddToCartButton:o(359).default})},361:function(t,e,o){"use strict";var r=o(352),n=o(27),c=(o(360),{name:"SimpleGallery",inject:["$chakraColorMode","$toggleColorMode"],components:{CFlex:r.a,CBox:n.a},props:{catsArray:Array},data:function(){return{cats:[],mainStyles:{dark:{bg:"gray.700",color:"whiteAlpha.900"},light:{bg:"white",color:"gray.900"}}}},computed:{colorMode:function(){return this.$chakraColorMode()},theme:function(){return this.$chakraTheme()},toggleColorMode:function(){return this.$toggleColorMode}}}),l=o(35),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("CFlex",{attrs:{flexDirection:"row",flexWrap:"wrap",mt:"2"}},this._l(this.catsArray,(function(t,o){return e("CBox",{key:o,attrs:{m:"2"}},[e("Card",{attrs:{cat:t}})],1)})),1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Card:o(360).default})},362:function(t,e,o){"use strict";var r=o(0),n=(o(4),o(5)),s={name:"CGrid",mixins:[Object(r.o)("CGrid")],props:{as:{type:String,default:"div"},gap:n.o,rowGap:n.o,columnGap:n.o,autoFlow:n.o,autoRows:n.o,autoColumns:n.o,templateRows:n.o,templateColumns:n.o,templateAreas:n.o,area:n.o,column:n.o,row:n.o},computed:{componentStyles:function(){return{d:"grid",gridArea:this.area,gridTemplateAreas:this.templateAreas,gridGap:this.gap,gridRowGap:this.rowGap,gridColumnGap:this.columnGap,gridAutoColumns:this.autoColumns,gridColumn:this.column,gridRow:this.row,gridAutoFlow:this.autoFlow,gridAutoRows:this.autoRows,gridTemplateRows:this.templateRows,gridTemplateColumns:this.templateColumns}}},render:function(t){return t(this.as,{class:this.className,attrs:this.computedAttrs},this.$slots.default)}};e.a=s},363:function(t,e,o){"use strict";o(45);var r=o(0),n=(o(4),o(139)),c={name:"CImage",mixins:[Object(r.o)("CImage")],props:{src:String,fallbackSrc:String,ignoreFalback:Boolean,htmlWidth:String,htmlHeight:String,size:[String,Number]},data:function(){return{image:void 0,hasLoaded:!1}},computed:{componentStyles:function(){return{w:this.size,h:this.size}}},created:function(){this.loadImage(this.src)},methods:{loadImage:function(t){var i=this,e=new window.Image;e.src=t,e.onload=function(t){i.hasLoaded=!0,i.$emit("load",t)},e.onerror=function(t){i.hasLoaded=!1,i.$emit("error",t)}}},render:function(t){var e;return e=this.ignoreFallback?{src:this.src}:{src:this.hasLoaded?this.src:this.fallbackSrc},t(n.a,[t("img",{class:this.className,attrs:Object.assign({},e,this.computedAttrs,{width:this.htmlWidth,height:this.htmlHeight})})])}};e.a=c},364:function(t,e,o){"use strict";var r=o(0),n=(o(4),function(t){return function(t){var e,a,o,n,u,i=t.variant,s=t.colorMode;switch(i){case"solid":return(e=t,a=e.theme.colors,o=e.color,n=a[o]&&a[o][500],u=Object(r.u)(n,.6),{light:{backgroundColor:Object(r.t)(o,500),color:"white"},dark:{backgroundColor:u,color:"whiteAlpha.800"}})[s];case"subtle":return function(t){var e=t.theme.colors,o=t.color,a=e[o]&&e[o][200],n=Object(r.v)(a)[300];return{light:{backgroundColor:Object(r.t)(o,100),color:Object(r.t)(o,800)},dark:{backgroundColor:n,color:Object(r.t)(o,200)}}}(t)[s];case"outline":return function(t){var e=t.theme.colors,o=t.color,a=e[o]&&e[o][200],n=Object(r.u)(a,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(e[o]&&e[o][500]),color:Object(r.t)(o,500)},dark:{boxShadow:"inset 0 0 0px 1px "+n,color:n}}}(t)[s];default:return{}}}(t)}),c={name:"CBadge",mixins:[Object(r.o)("CBadge")],props:{variant:{type:String,default:"subtle"},variantColor:{type:String,default:"gray"},as:{type:String,default:"div"}},computed:{badgeStyles:function(){return n({theme:this.theme,colorMode:this.colorMode,color:this.variantColor,variant:this.variant})},componentStyles:function(){return Object.assign({},{d:"inline-block",textTransform:"uppercase",fontSize:"xs",fontFamily:"body",px:1,rounded:"sm",fontWeight:"bold",whiteSpace:"nowrap",verticalAlign:"middle"},this.badgeStyles)}},render:function(t){return t(this.as,{class:this.className,attrs:this.computedAttrs},this.$slots.default)}};e.a=c},371:function(t,e,o){"use strict";o.r(e);o(15),o(21),o(13),o(39),o(46),o(22),o(14);var r=o(11),n=o(111),c=o(361),l=o(27),d=o(209),h=o(82),m=o(352);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ShoppingCart",inject:["$chakraColorMode","$toggleColorMode"],components:{CBox:l.a,CButton:d.a,SimpleGallery:c.a,CModal:h.a,CModalOverlay:h.g,CModalContent:h.d,CModalHeader:h.f,CModalFooter:h.e,CModalBody:h.b,CModalCloseButton:h.c,CFlex:m.a},data:function(){return{showModal:!1,mainStyles:{dark:{bg:"gray.700",color:"whiteAlpha.900"},light:{bg:"white",color:"gray.900"}}}},computed:C(C(C({},Object(n.d)({checkoutStatus:function(t){return t.cart.checkoutStatus}})),Object(n.c)("cart",{cats:"cartCats",total:"cartTotalPrice"})),{},{colorMode:function(){return this.$chakraColorMode()}}),methods:{checkout:function(t){this.$store.dispatch("cart/checkout",t)},showToast:function(){this.$toast({title:"Hummmm, read one more time the message:",description:"NO NO NO NO NO NO NO NO NO NO NO NO NO",status:"error",duration:1e4})}}},w=o(35),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CFlex",t._b({staticClass:"cart",attrs:{direction:"column",justify:"space-between",padding:"5rem",minHeight:"100vh"}},"CFlex",t.mainStyles[t.colorMode],!1),[o("CBox",[o("CBox",{attrs:{mt:"1","font-weight":"bold",as:"h1","line-height":"tight","is-truncated":"",fontSize:"2xl"}},[t._v("Your Cart")]),t._v(" "),o("CBox",{directives:[{name:"show",rawName:"v-show",value:!t.cats.length,expression:"!cats.length"}]},[o("i",[t._v("Please add some cats to cart.")])]),t._v(" "),o("SimpleGallery",{attrs:{catsArray:t.cats}})],1),t._v(" "),o("CBox",[o("CBox",{attrs:{mt:"4",textAlign:"right","font-weight":"bold","font-size":"2xl",bottom:"5rem"}},[t._v("\n      Total: "+t._s(t.total)+"\n    ")]),t._v(" "),o("CBox",{attrs:{mt:"4",textAlign:"right","font-weight":"bold","font-size":"2xl",display:"0 euros"===t.total?"none":"block"}},[o("CButton",{attrs:{"variant-color":"red"},on:{click:function(e){t.showModal=!0}}},[t._v("Still want to buy it")]),t._v(" "),o("CModal",{attrs:{"is-open":t.showModal,closeOnOverlayClick:!1}},[o("CModalOverlay"),t._v(" "),o("CModalContent",[o("CModalHeader",[t._v("Hell No!")]),t._v(" "),o("CModalBody",[o("strong",[t._v("I . SAID . NO!")]),o("br"),t._v(" Don't be obstinate!")]),t._v(" "),o("CModalFooter",[o("CButton",{on:{click:function(e){t.showModal=!1}}},[t._v("Cancel")]),t._v(" "),o("CButton",{attrs:{"margin-left":"3","variant-color":"red"},on:{click:t.showToast}},[t._v(" Still want to buy this fucking cats")])],1),t._v(" "),o("CModalCloseButton",{on:{click:function(e){t.showModal=!1}}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);