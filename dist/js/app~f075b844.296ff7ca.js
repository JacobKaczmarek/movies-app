(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={"app~f075b844":0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors~2a42e354","chunk-vendors~e4173fa2","chunk-vendors~6f27f355","chunk-vendors~f414210c","chunk-vendors~79bd1cc9","chunk-vendors~adf558c4","chunk-vendors~3cd7fc04","chunk-vendors~6937032c","chunk-vendors~36c5d7d2","chunk-vendors~ab1ba4f8","chunk-vendors~93acefaf","chunk-vendors~216d6f1c","chunk-vendors~690b702c","chunk-vendors~9a3dbc00","chunk-vendors~678f84af","chunk-vendors~fdc6512a"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2669:function(e,t,n){},"3e3d":function(e){e.exports=JSON.parse('{"12":"Adventure","14":"Fantasy","16":"Animation","18":"Drama","27":"Horror","28":"Action","35":"Comedy","36":"History","37":"Western","53":"Thriller","80":"Crime","99":"Documentary","878":"Science Fiction","9648":"Mystery","10402":"Music","10749":"Romance","10751":"Family","10752":"War","10770":"TV Movie"}')},"4b18":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5f5b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("home")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("moviesList",{on:{openModal:function(t){return e.handleModalOpen(t)}}}),e.modalOpen?n("modal",{attrs:{movie:e.modalData},on:{close:function(t){e.modalOpen=!1}}}):e._e()],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"moviesListWrapper",class:{resultsAvailable:e.stage}},[e.stage?e._e():n("h2",[e._v("Search for a movie")]),n("b-form-input",{attrs:{placeholder:"Movie title"},on:{input:function(t){return e.handleInput()}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("div",{staticClass:"listContainer"},e._l(e.movies,(function(t){return n("movieCard",{key:t.id,attrs:{movie:t},nativeOn:{click:function(n){return e.handleModalOpen(t)}}})})),1),1==e.stage&&0==e.movies.length?n("h1",{staticClass:"noResults"},[e._v("No results.")]):e._e()],1)},l=[],d=(n("99af"),n("d3b7"),n("96cf"),n("bc3a")),p=n.n(d),f=n("f7fe"),v=n.n(f),m=n("ea09"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movieCardWrapper"},[n("img",{attrs:{src:"http://image.tmdb.org/t/p/w154//"+e.movie.poster_path,alt:""}}),n("p",[n("b",[e._v(e._s(e.movie.title))])]),n("p",[e._v("Popularity: "+e._s(e.movie.popularity))]),n("p",[e._v(e._s(e.movie.vote_count)+" Votes")])])},b=[],_={props:{movie:Object},data:function(){return{posterUrl:""}}},g=_,y=(n("e4fa"),n("2877")),k=Object(y["a"])(g,h,b,!1,null,"2858b2b7",null),O=k.exports,C="https://api.themoviedb.org/3",w={components:{movieCard:O},data:function(){return{movies:[],title:"",stage:0}},methods:{handleInput:v()((function(){var e=this;p.a.get("".concat(C,"/search/movie?api_key=").concat(m["apiToken"],"&query=").concat(this.title)).then((function(t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:e.movies=t.data.results,e.stage=1;case 2:case"end":return n.stop()}}))})).catch((function(e){return console.error(e)}))}),500),handleModalOpen:function(e){this.$emit("openModal",e)}}},M=w,j=(n("c7dc"),Object(y["a"])(M,u,l,!1,null,"020bf017",null)),x=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modalWrapper"},[n("div",{staticClass:"innerWrapper"},[n("img",{attrs:{src:"http://image.tmdb.org/t/p/w300//"+e.movie.poster_path,alt:""}}),n("div",{staticClass:"rightSection"},[n("div",{staticClass:"mainDescription"},[n("h1",[e._v(e._s(e.movie.title))]),n("p",{staticClass:"description"},[e._v(e._s(e.movie.overview))])]),n("div",{staticClass:"details"},[n("p",e._l(e.genres,(function(t){return n("span",{key:t,staticClass:"genres"},[e._v(e._s(t))])})),0),n("p",{staticClass:"country"},[e._v("Original language: "+e._s(e.movie.original_language.toUpperCase()))]),n("a",{attrs:{href:e.imdbLink}},[e._v("Show on IMDB")])])])]),n("div",{staticClass:"close",on:{click:function(t){return e.closeModal()}}})])},P=[],T=(n("d81d"),n("3e3d")),$={props:{movie:Object},data:function(){return{genres:this.movie.genre_ids.map((function(e){return T[e]})),imdbLink:""}},mounted:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/".concat(this.movie.id,"?api_key=").concat(m.apiToken)).then((function(t){e.imdbLink="https://www.imdb.com/title/".concat(t.data.imdb_id)}))},methods:{closeModal:function(){this.$emit("close")}}},D=$,L=(n("f661"),Object(y["a"])(D,S,P,!1,null,"6becfe43",null)),W=L.exports,E={name:"home",components:{moviesList:x,modal:W},data:function(){return{modalOpen:!1,modalData:{}}},methods:{handleModalOpen:function(e){this.modalData=e,this.modalOpen=!0}}},A=E,J=Object(y["a"])(A,c,s,!1,null,null,null),F=J.exports,H={components:{Home:F}},I=H,N=(n("5c0b"),Object(y["a"])(I,a,i,!1,null,null,null)),R=N.exports;n("f9e3"),n("2dd8");o["default"].use(r["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"975b":function(e,t,n){},"9c0c":function(e,t,n){},c7dc:function(e,t,n){"use strict";var o=n("4b18"),r=n.n(o);r.a},e4fa:function(e,t,n){"use strict";var o=n("975b"),r=n.n(o);r.a},ea09:function(e){e.exports=JSON.parse('{"apiToken":"5bf4262bb33b2edec5089314bab5adb6"}')},f661:function(e,t,n){"use strict";var o=n("2669"),r=n.n(o);r.a}});
//# sourceMappingURL=app~f075b844.296ff7ca.js.map