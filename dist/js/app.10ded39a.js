(function(){"use strict";var t={5048:function(t,e,r){r.d(e,{db:function(){return kt}});var s=r(144),i=r(998),a=r(9201),n=r(9582),o=r(4886),l=function(){var t=this,e=t._self._c;return e(i.Z,[e(n.Z,{attrs:{color:"red lighten-2",dark:""}},[e(o.EB,{staticClass:"text-h5 red lighten-3"},[t._v(" Recomendation Sample ")]),e(o.ZB),e(o.ZB,[e(a.Z,{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","item-text":"artist_name_trance_remove_kakko","item-value":"artist_name_trance_remove_kakko",label:"Public APIs",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:e=>t.searchNnResult(e)},model:{value:t.item_record_data_value,callback:function(e){t.item_record_data_value=e},expression:"item_record_data_value"}})],1),e("PROFILE",{attrs:{artist_profile_result_vue:t.artist_profile_result,is_list_transision:t.is_list_transision}})],1),e("DIALOG"),e("RSLUT")],1)},_=[],u=(r(7658),r(266)),c=r(1713),d=function(){var t=this,e=t._self._c;return e("v-continer",t._l(t.search_result_vuex,(function(t){return e(c.Z,{key:t.artist_id,staticClass:"mycolor lighten-1"},[e(u.Z,[e("ResultArtistCard",{attrs:{resultArtistRecord:t}})],1)],1)})),1)},h=[],f=function(){var t=this,e=t._self._c;return e(n.Z,[t._v(" bbb "+t._s(t.resultArtistRecordParse)+" "),e(o.EB,[t._v(" "+t._s(t.resultArtistRecordParse.artist_name)+" ")])],1)},m=[];const p="https://ws.audioscrobbler.com/2.0/",g="e5e11d4e4c6b55cbee2a8257c4fa3bac",v="/2.0/",b="extralarge",A={info:"artist.getinfo"},y={json:"json",xml:"xml"},Z=t=>{let e=new URL(p);e.pathname=v;const r=A["info"],s=y["json"],i={method:r,artist:t,api_key:g,format:s},a=new URLSearchParams(i);return e.search=a.toString(),e.href},k=t=>{const e={},r=t.name;e["artist_name"]=r;const s=t.mbid;e["mbid"]=s;const i=Array.from(t.image);for(let f in i){const t=i[f],r=t.size;if(r==b){e["image_url"]=t["#text"];break}}const a=t.tags,n=a.tag,o=Array.from(n),l=[];for(let f in o){const t=o[f],e=t.name;l.push(e)}e["tags"]=l;const _=t.bio,u=_.links,c=u.link,d=c.href;e["artist_info_link"]=d;const h=_.content;return e["artist_content_en"]=h,e};var R=r(6100);const x=(t,e)=>{const r=(0,R.JU)(kt,t,e),s=(0,R.QT)(r);return alert(t),alert(e),s.exists()?(alert(s.data()),s.data()):null},j=(t,e,r)=>{alert("aaaaaaaaaaaaaaaaaaa"),(0,R.pl)((0,R.JU)(kt,t,e),r)},S={collection:{artistContentCache:"artistContentCache",lastFmArtistInfoCache:"lastFmArtistInfoCache"}};var O={name:"resultArtistCard",data(){return{resultArtistRecordParse:Object}},props:{resultArtistRecord:{type:Object}},watch:{},mounted(){alert("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"),this.resultArtistRecord&&this.build_artist_detail()},methods:{build_artist_detail(){const t=this.resultArtistRecord,e=t.artist_id,r=S.collection.lastFmArtistInfoCache,s=x(r,e);if(null!=s)alert("aaaaaaaaaaaaaaaaaaaaaaaaaaa");else{const e=t.artist_name_origine,r=Z(e);alert(r),fetch(r,{}).then((t=>t.json())).then((e=>{const r=e.artist,s=k(r),i=s.artist_id;Object.assign(s,t),this.resultArtistRecordParse=s,j(S.collection.lastFmArtistInfoCache,i,s)})).catch((t=>{alert("B"+t)}))}}}},w=O,C=r(1001),L=(0,C.Z)(w,f,m,!1,null,null,null),P=L.exports,I={name:"resultBody",components:{ResultArtistCard:P},data(){return{samnale_url:{type:String},artist_obj:{type:Object}}},computed:{search_result_vuex(){return this.$store.getters.search_result}},methods:{}},N=I,T=(0,C.Z)(N,d,h,!1,null,null,null),B=T.exports,U=r(7394),D=r(5808),F=r(4525),M=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{color:"red lighten-2",dark:""}},[e(U.Fx,[t.is_list_transision?e(D.Z,{staticClass:"red lighten-3"},[e(F.Z,[e("ListItem",{attrs:{artist_profile_result_vue:t.artist_profile_result_vue}})],1)],1):t._e()],1)],1)},V=[],E=r(4562),$=r(5200),J=function(){var t=this,e=t._self._c;return e($.km,[e($.V9,[t._v(" Recomended for you because you chose")]),e($.V9,["None_Artist_ID"!==t.artist_profile_result_vue.main_artist_url?e(E.Z,{attrs:{href:t.artist_profile_result_vue.main_artist_url,target:"_balnk",midiam:"",rounded:"",outlined:""}},[t._v(" "+t._s(t.artist_profile_result_vue.Recomend_from_artist)+" ")]):t._e()],1),t.artist_profile_result_vue.Aliases?e("v-list-item-sub-title",[t._v(" Artist ALias ")]):t._e(),t.artist_profile_result_vue.Aliases?e("v-list-item-sub-title",t._l(t.artist_profile_result_vue.Aliases,(function(r){return e("div",{key:r,staticClass:"inline-block_test"},["None_Artist_ID"!==r.discogs_origine_artist_url?e(E.Z,{attrs:{"x-small":"",rounded:"",outlined:"",href:r.discogs_origine_artist_url,target:"_balnk"}},[t._v(t._s(r.discogs_origine_artist_name_en)+" ")]):e(E.Z,{attrs:{"x-small":"",rounded:"",disabled:"",outlined:""}},[t._v(" "+t._s(r.discogs_origine_artist_name_en)+" ")])],1)})),0):t._e(),t.artist_profile_result_vue.Artist_URLS?e("v-list-item-sub-title",[t._v(" Artist URLS ")]):t._e(),t.artist_profile_result_vue.Artist_URLS?e("v-list-item-sub-title",t._l(t.artist_profile_result_vue.Artist_URLS,(function(r){return e(E.Z,{key:r,attrs:{"x-small":"",rounded:"",href:r,target:"_balnk",outlined:""}},[t._v(t._s(r))])})),1):t._e(),t.artist_profile_result_vue.Artist_NameVAriation?e("v-list-item-sub-title",[t._v(" Artist NameVariation ")]):t._e(),t.artist_profile_result_vue.Artist_NameVAriation?e("v-list-item-sub-title",t._l(t.artist_profile_result_vue.Artist_NameVAriation,(function(r){return e("div",{key:r,staticClass:"inline-block_test"},["None_Artist_ID"!==r.discogs_origine_artist_url?e(E.Z,{attrs:{"x-small":"",rounded:"",href:r.discogs_origine_artist_url,target:"_balnk",outlined:""}},[t._v(t._s(r.discogs_origine_artist_name_en))]):e(E.Z,{attrs:{"x-small":"",rounded:"",disabled:"",outlined:""}},[t._v(t._s(r.discogs_origine_artist_name_en))])],1)})),0):t._e(),t.artist_profile_result_vue.Members?e("v-list-item-sub-title",[t._v(" Artist Members ")]):t._e(),t.artist_profile_result_vue.Members?e("v-list-item-sub-title",t._l(t.artist_profile_result_vue.Members,(function(r){return e("div",{key:r,staticClass:"inline-block_test"},["None_Artist_ID"!==r.discogs_origine_artist_url?e(E.Z,{attrs:{"x-small":"",rounded:"",href:r.discogs_origine_artist_url,target:"_balnk",outlined:""}},[t._v(t._s(r.discogs_origine_artist_name_en))]):e(E.Z,{attrs:{"x-small":"",rounded:"",disabled:"",outlined:""}},[t._v(t._s(r.discogs_origine_artist_name_en))])],1)})),0):t._e()],1)},z=[],q={name:"ProfileItemList",data(){return{}},props:{artist_profile_result_vue:{type:Object}},computed:{dsipNameVariBtn(){return t=>{alert(t)}}}},G=q,K=(0,C.Z)(G,J,z,!1,null,null,null),Q=K.exports,W={name:"resultBody",components:{ListItem:Q},data(){return{}},props:{artist_profile_result_vue:{type:Object},is_list_transision:{type:Boolean}},methods:{}},X=W,H=(0,C.Z)(X,M,V,!1,null,null,null),Y=H.exports,tt=r(9256),et=r(9930),rt=r(3201),st=r(3305),it=function(){var t=this,e=t._self._c;return e(et.Z,{attrs:{fullscreen:""},model:{value:t.show_dialog_vuex,callback:function(e){t.show_dialog_vuex=e},expression:"show_dialog_vuex"}},[e(tt.Z,{attrs:{fluid:"","fill-height":""}},[e(rt.Z,{attrs:{"justify-center":"","align-center":""}},[e(st.Z,{attrs:{indeterminate:!0,size:"120",color:"yellow",width:"20"}})],1)],1)],1)},at=[],nt={name:"BasicCirculerDialog",data(){return{dialog:!0}},computed:{show_dialog_vuex(){return this.$store.getters.res_dialog_flg}},methods:{}},ot=nt,lt=(0,C.Z)(ot,it,at,!1,null,null,null),_t=lt.exports,ut={name:"App",components:{RSLUT:B,PROFILE:Y,DIALOG:_t},data(){return{descriptionLimit:60,entries:[],isLoading:!1,res_isloading:!1,model:null,search:null,artist_profile_result:null,is_list_transision:!1,artist_id_prefix:"discogs_artist_"}},computed:{items(){return this.entries.map((t=>t))},search_result_vuex(){return this.$store.getters.search_result}},watch:{async search(t){if(this.isLoading)return;const e=t.length;if(e<1)return;this.isLoading=!0;const r={suggest:t},s=JSON.stringify(r);alert(s),fetch("http://localhost:3333/suggest",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:s}).then((t=>t.json())).then((t=>{const e=t["result"];e.forEach((t=>{const e=t["_source"],r=e["artist_id"];e["discogs_artist_id"]=this.artist_id_prefix+r,this.entries.push(e)}))})).catch((t=>{alert(t)})).finally((()=>this.isLoading=!1))}},methods:{async searchNnResult(t){const e=t["artist_name_trance_remove_kakko"],r=e.length;if(r<1)return;this.res_isloading=!0,this.$store.dispatch("setRes_dialog_flgAction",this.res_isloading);const s={nn_neighbor_artist:t},i=JSON.stringify(s);fetch("http://localhost:3333/nn_neighbor_artist",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:i}).then((t=>t.json())).then((t=>{const e=t["nn_neighbor_artist_result"];alert("NNRESULT ==>> "+e),this.$store.dispatch("setSearchResultAction",e)})).catch((t=>{alert("B"+t)})).finally((()=>(this.res_isloading=!1,this.$store.dispatch("setRes_dialog_flgAction",this.res_isloading))))}}},ct=ut,dt=(0,C.Z)(ct,l,_,!1,null,null,null),ht=dt.exports,ft=r(1705);s.ZP.use(ft.Z);var mt=new ft.Z({}),pt=r(629);s.ZP.use(pt.ZP);var gt=new pt.ZP.Store({state:{search_result:null,artist_profile_result:null,res_dialog_flg:!1},getters:{search_result:t=>t.search_result,artist_profile_result:t=>t.artist_profile_result,res_dialog_flg:t=>t.res_dialog_flg},mutations:{setSearchResult(t,e){t.search_result=e},setArtistProfileResult(t,e){t.artist_profile_result=e},setRes_dialog_flg(t,e){t.res_dialog_flg=e}},actions:{setSearchResultAction({commit:t},e){t("setSearchResult",e)},setArtistProfileResultAction({commit:t},e){t("setSearchResult",e)},setRes_dialog_flgAction({commit:t},e){t("setRes_dialog_flg",e)}},modules:{}}),vt=r(7879),bt=r(7276),At=r(3977);const yt={apiKey:"AIzaSyD3XIrx0Wo3pkakVM1Cd03ANqRZhc8LqZI",authDomain:"aaaa-4bbcd.firebaseapp.com",projectId:"aaaa-4bbcd",storageBucket:"aaaa-4bbcd.appspot.com",messagingSenderId:"793373850637",appId:"1:793373850637:web:bbdd2b402fc9969bae2944"},Zt=(0,At.ZF)(yt),kt=(0,R.ad)(Zt);(0,R.at)(kt,"127.0.0.1",6080),s.ZP.config.productionTip=!1,new s.ZP({vuetify:mt,store:gt,AsyncComputed:vt.Z,lang:{locales:{ja:bt.Z},current:"ja"},render:t=>t(ht)}).$mount("#app")}},e={};function r(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,s,i,a){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&a||n>=a)&&Object.keys(r.O).every((function(t){return r.O[t](s[l])}))?s.splice(l--,1):(o=!1,a<n&&(n=a));if(o){t.splice(u--,1);var _=i();void 0!==_&&(e=_)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,n=s[0],o=s[1],l=s[2],_=0;if(n.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var u=l(r)}for(e&&e(s);_<n.length;_++)a=n[_],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},s=self["webpackChunkvuesearchcompletesmp"]=self["webpackChunkvuesearchcompletesmp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(5048)}));s=r.O(s)})();
//# sourceMappingURL=app.10ded39a.js.map