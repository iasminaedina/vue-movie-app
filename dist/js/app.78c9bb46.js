(function(e){function t(t){for(var s,r,n=t[0],c=t[1],l=t[2],d=0,f=[];d<n.length;d++)r=n[d],i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},o=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},1:function(e,t){},"1dfe":function(e,t,a){},"29c7":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=o(e);return a(t)}function o(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id="4678"},"4eb7":function(e,t,a){"use strict";var s=a("29c7"),i=a.n(s);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("8c4f"),o=a("28dd"),r=a("a65d"),n=a.n(r),c=a("bc3a"),l=a.n(c),u=a("c1df"),d=a.n(u),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header"),e.moviePopupIsVisible?a("movie-modal",{attrs:{id:e.moviePopupId},on:{close:e.closeMoviePopup}}):e._e(),a("section",{staticClass:"main"},[a("transition",{attrs:{name:"fade"}},[a("router-view",{key:e.$route.params.category,attrs:{name:"popular-list-router-view",mode:"popular"}}),a("router-view",{key:e.$route.params.query,attrs:{name:"search-router-view",mode:"search"}}),a("router-view")],1)],1),a("app-footer")],1)},p=[],m=(a("ac6a"),{apiKey:"4cb1eeab94f45affe2536f2c684a5c9e",pageTitlePostfix:"",listTypes:[{title:"Popular Movies",shortTitle:"Popular",query:"popular",isCategory:!0},{title:"Search Results",query:"search",isCategory:!1},{title:"Your Favorite Movies",query:"favorite",isCategory:!1}],categories:{},backTitle:"",moviePath:"",createMoviePopup:!1});m.listTypes.forEach(function(e){m.categories[e.query]=e.title});var v=m,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content"},[a("p",{staticClass:"footer-description"},[e._v("\n      A simple movie app in Vuejs\n    ")]),a("p",{staticClass:"footer-author"},[e._v("\n      © Iasmina Edina Gravila 2019\n    ")])])])}],j=(a("618e"),a("2877")),g={},y=Object(j["a"])(g,h,b,!1,null,"202481fe",null),_=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("nav",{staticClass:"navbar is-info is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[e._m(0),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:e.toggleNavBurger}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home",params:{category:e.$route.params.category}}}},[e._v("\n          Home\n        ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"favorite",params:{category:e.$route.params.query}}}},[e._v("\n          Favorites\n        ")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"field is-grouped navbar-item search-box is-hidden-mobile"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchQuery,expression:"searchQuery",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Search for a movie..."},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},blur:[e.search,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.searchQuery=t.target.value.trim())}}})]),e._m(1)])])])]),a("div",{staticClass:"field is-grouped search-box is-hidden-desktop showOnMobile"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchQuery,expression:"searchQuery",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Search for a movie..."},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},blur:[e.search,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.searchQuery=t.target.value.trim())}}})]),e._m(2)])])},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s("img",{attrs:{src:a("9b19"),width:"112",height:"28"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary"},[e._v("\n              Search\n            ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary"},[e._v("\n        Search\n      ")])])}],S=(a("a481"),{data:function(){return{searchQuery:""}},computed:{queryForRouter:function(){return encodeURI(this.searchQuery.replace(/ /g,"+"))}},methods:{search:function(){this.searchQuery.length&&this.$router.push({name:"search",params:{query:this.queryForRouter}})},setSearchQuery:function(e){if(e)this.searchQuery="";else{var t=decodeURIComponent(this.$route.params.query);this.searchQuery=t?t.replace(/\+/g," "):""}},toggleNavBurger:function(){document.querySelector(".navbar-burger").classList.toggle("is-active"),document.querySelector(".navbar-menu").classList.toggle("is-active")}},created:function(){Se.$on("setSearchQuery",this.setSearchQuery)}}),w=S,P=(a("9997"),Object(j["a"])(w,k,C,!1,null,"2373e9fc",null)),x=P.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal is-active",on:{click:e.closeModal}},[a("div",{on:{click:function(e){e.stopPropagation()}}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("movieItem",{attrs:{id:e.id}})],1)]),a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:e.closeModal}})])},O=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-container"},[a("p",{staticClass:"image"},[a("img",{attrs:{src:e.movieBackdropSrc,alt:""}})]),a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child"},[a("div",{staticClass:"header"},[a("p",{staticClass:"title movie-title"},[e._v(" "+e._s(e.movie.title)+" ")]),a("p",{staticClass:"title movie-rating"},[e._v(" "+e._s(e.movie.vote_average)+" ")])]),e.movie.tagline?a("p",{staticClass:"subtitle"},[a("span",{staticClass:"uppercase"},[e._v(e._s(e.movie.tagline))])]):e._e(),a("div",{staticClass:"content"},[a("div",{staticClass:"genre-subtitle uppercase"},[a("span",{staticClass:"blue-color"},[e._v("Genre: ")]),e._l(e.movie.genres,function(t){return a("span",{key:t.name},[e._v(" "+e._s(t.name)+" ")])})],2),a("p",{staticClass:"subtitle uppercase"},[a("span",{staticClass:"blue-color"},[e._v("Release date: ")]),a("span",[e._v(e._s(e._f("formatDate")(e.movie.release_date)))])]),a("div",{staticClass:"description"},[e._v("\n          "+e._s(e.movie.overview)+"\n        ")]),e.favoriteChecked?e._e():a("button",{staticClass:"button is-primary",on:{click:e.setFavorite}},[e._v("\n          Add to favorites\n        ")]),e.favoriteChecked?a("button",{staticClass:"button",on:{click:e.unsetFavorite}},[e._v("\n          Remove from favorites\n        ")]):e._e()])])])])},T=[],q=(a("7514"),{props:["id"],data:function(){return{movie:{},movieBackdropSrc:"",favoriteChecked:!1}},methods:{fetchMovie:function(e){l.a.get("/movie/".concat(e,"?api_key=").concat(v.apiKey,"&language=en-US")).then(function(t){this.movie=t.data,this.backdrop(),this.checkIfFavorite(),v.createMoviePopup&&(v.moviePath="/movie/"+e,history.pushState({popup:!0},null,v.moviePath),v.createMoviePopup=!1),document.title=this.movie.title}.bind(this)).catch(function(e){console.log(e),this.$router.push({name:"404"})}.bind(this))},backdrop:function(){this.movie.backdrop_path&&(this.movieBackdropSrc="http://image.tmdb.org/t/p/w500"+this.movie.backdrop_path)},checkIfFavorite:function(){var e=this,t=JSON.parse(localStorage.getItem("favorites"));t.find(function(t){return t===e.movie.id})?this.favoriteChecked=!0:this.favoriteChecked=!1},setFavorite:function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(this.movie.id),localStorage.setItem("favorites",JSON.stringify(e)),this.favoriteChecked=!0,this.$toasted.global.myToast("".concat(this.movie.title," added to favorites!"))},unsetFavorite:function(){for(var e=JSON.parse(localStorage.getItem("favorites")),t=0;t<e.length;t++)e[t]===this.movie.id&&e.splice(t,1);localStorage.setItem("favorites",JSON.stringify(e)),this.favoriteChecked=!1,this.$toasted.global.myToast("".concat(this.movie.title," removed from favorites!"))}},created:function(){this.fetchMovie(this.id)}}),E=q,I=(a("5e4a"),Object(j["a"])(E,M,T,!1,null,"4bb1c7cb",null)),z=I.exports,Q={props:["id"],components:{MovieItem:z},methods:{closeModal:function(e){this.$emit("close")}},created:function(){window.addEventListener("keyup",function(e){27==e.keyCode&&this.$emit("close")}.bind(this))}},F=Q,N=(a("4eb7"),Object(j["a"])(F,$,O,!1,null,"ff17246e",null)),U=N.exports,L={name:"app",components:{"app-header":x,"app-footer":_,"movie-modal":U},data:function(){return{listTypes:v.listTypes,moviePopupIsVisible:!1,moviePopupId:0}},methods:{openMoviePopup:function(e,t){t&&(v.backTitle=document.title),v.createMoviePopup=t,this.moviePopupIsVisible=!0,this.moviePopupId=e,document.querySelector("body").classList.add("hidden")},closeMoviePopup:function(){v.createMoviePopup=!1,this.moviePopupIsVisible=!1,document.querySelector("body").classList.remove("hidden"),window.history.clear()}},created:function(){Se.$on("openMoviePopup",this.openMoviePopup)}},R=L,D=(a("034f"),Object(j["a"])(R,f,p,!1,null,null,null)),J=D.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("movies-list",{attrs:{mode:"popular"}})],1)},B=[],V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"movie-list"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-3"},[e._v(e._s(e.listTitle)+" ("+e._s(e.results)+")")]),a("div",{staticClass:"columns is-multiline is-mobile"},e._l(e.movies,function(t){return a("a",{key:t.id,staticClass:"column is-half-mobile is-one-third-tablet is-one-quarter-desktop",attrs:{href:"/movie/"+t.id},on:{click:function(a){return a.preventDefault(),e.openMoviePopup(t.id,!0)}}},[a("img",{attrs:{src:"http://image.tmdb.org/t/p/w185"+t.poster_path}}),a("p",{staticClass:"movie-title"},[e._v(e._s(t.title))])])}),0),e.movies.length?e._e():a("section",{staticClass:"not-found"},[a("div",{staticClass:"not-found__content"},["search"==e.mode?a("h2",{staticClass:"not-found__title"},[e._v("Nothing Found")]):e._e(),"favorite"==e.mode?a("h2",{staticClass:"not-found__title"},[e._v("\n              You haven't added any favorite movies\n            ")]):e._e()])])])])},Y=[],G=(a("386d"),a("7f7f"),{props:["mode","category"],beforeRouteLeave:function(e,t,a){"search"===t.name&&Se.$emit("setSearchQuery",!0),a()},data:function(){return{movies:[],listTitle:"",results:""}},computed:{pageTitle:function(){return this.listTitle+v.pageTitlePostfix},query:function(){return this.$route.params.query||""},request:function(){return"search"===this.mode?"/search/movie?api_key=".concat(v.apiKey,"&language=en-US&query=").concat(this.query,"&page=1"):"popular"===this.mode?"/movie/".concat(this.mode,"?api_key=").concat(v.apiKey,"&language=en-US&page=1"):void 0}},methods:{openMoviePopup:function(e,t){Se.$emit("openMoviePopup",e,t)},fetchCategory:function(){l.a.get(this.request).then(function(e){var t=e.data;this.movies=t.results,this.results=this.movies.length,document.title=this.pageTitle}.bind(this)).catch(function(e){console.log(e),this.$router.push({name:"404"})}.bind(this))},fetchFavorites:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites"));if(e.length>0){this.results=e.length;var t=[];e.forEach(function(e,a){l.a.get("/movie/".concat(e,"?api_key=").concat(v.apiKey,"&language=en-US")).then(function(e){t.push(e.data)})}),this.movies=t}}}},created:function(){"search"===this.mode?(this.fetchCategory(),this.listTitle=v.categories["search"],Se.$emit("setSearchQuery")):"popular"===this.mode?(this.fetchCategory(),this.listTitle=v.categories[this.mode]):"favorite"===this.mode&&(this.listTitle=v.categories[this.mode],this.fetchFavorites())}}),K=G,H=(a("e10b"),Object(j["a"])(K,V,Y,!1,null,"0ae3e033",null)),W=H.exports,X={components:{MoviesList:W},data:function(){return{listTypes:v.listTypes}},created:function(){document.title="Vue Movie App",v.backTitle=document.title}},Z=X,ee=Object(j["a"])(Z,A,B,!1,null,"7a022dd8",null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"favorites"},[a("movies-list",{attrs:{mode:"favorite"}})],1)},se=[],ie={components:{MoviesList:W},created:function(){document.title="Favorite Movies",v.backTitle=document.title}},oe=ie,re=(a("d817"),Object(j["a"])(oe,ae,se,!1,null,"0c8c8eec",null)),ne=re.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container info"},[a("movieItem",{attrs:{id:e.$route.params.id}})],1)},le=[],ue={components:{MovieItem:z}},de=ue,fe=(a("e112"),Object(j["a"])(de,ce,le,!1,null,"18ca1f80",null)),pe=fe.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("PAGE NOT FOUND")])},ve=[],he={},be=Object(j["a"])(he,me,ve,!1,null,null,null),je=be.exports,ge=[{path:"/",name:"home",component:te},{path:"/movies/:category",name:"movies",component:{"popular-list-router-view":W}},{path:"/favorites",name:"favorite",component:ne},{path:"/movie/:id",name:"movie",component:pe},{path:"/search/:query",name:"search",components:{"search-router-view":W}},{name:"404",path:"/404",components:je}],ye=new i["a"]({mode:"history",routes:ge}),_e=ye,ke=a("2f62");s["a"].use(ke["a"]);var Ce=new ke["a"].Store({state:{},mutations:{},actions:{}});a.d(t,"eventHub",function(){return Se});var Se=new s["a"];s["a"].config.productionTip=!1,s["a"].use(o["a"]),s["a"].use(i["a"],l.a),s["a"].use(n.a),l.a.defaults.baseURL="https://api.themoviedb.org/3",l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",s["a"].filter("formatDate",function(e){if(e)return d()(String(e)).format("DD/MM/YYYY")}),s["a"].toasted.register("myToast",function(e){return e},{type:"success",theme:"bubble",position:"bottom-right",duration:3e3,className:["toastStyle"]}),a("b383"),new s["a"]({router:_e,store:Ce,render:function(e){return e(J)}}).$mount("#app")},"5e4a":function(e,t,a){"use strict";var s=a("1dfe"),i=a.n(s);i.a},"618e":function(e,t,a){"use strict";var s=a("b598"),i=a.n(s);i.a},"64a9":function(e,t,a){},"7efb":function(e,t,a){},9997:function(e,t,a){"use strict";var s=a("7efb"),i=a.n(s);i.a},"9b19":function(e,t,a){e.exports=a.p+"img/logo.02a9430b.svg"},b383:function(e,t,a){},b598:function(e,t,a){},ba3b:function(e,t,a){},cf96:function(e,t,a){},d817:function(e,t,a){"use strict";var s=a("cf96"),i=a.n(s);i.a},e10b:function(e,t,a){"use strict";var s=a("ba3b"),i=a.n(s);i.a},e112:function(e,t,a){"use strict";var s=a("e9c5"),i=a.n(s);i.a},e9c5:function(e,t,a){}});
//# sourceMappingURL=app.78c9bb46.js.map