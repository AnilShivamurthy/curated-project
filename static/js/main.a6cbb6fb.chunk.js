(this["webpackJsonpcurated-project"]=this["webpackJsonpcurated-project"]||[]).push([[0],{23:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(11),r=c.n(a),i=(c(31),c(5)),u=c.n(i),s=c(8),h=(c(33),c(2)),d="SET_PHOTO",l="SET_VIDEO",v="SET_ACTIVE",p="SET_FAVOURITE_PHOTO",b="SET_FAVOURITE_VIDEO",j="SET_SEARCH_PHOTO",f="SET_SEARCH_VIDEO",O="SET_SEARCH_INPUT_VALUE",g="SET_PHOTO_ACTIVE_PAGE",m="SET_VIDEO_ACTIVE_PAGE",P="SET_SEARCH_PHOTO_ACTIVE_PAGE",y="SET_SEARCH_VIDEO_ACTIVE_PAGE",x="SET_PER_PAGE",_=function(e){return{type:d,payload:e}},A=function(e){return{type:l,payload:e}},V=function(e){return{type:p,payload:e}},E=function(e){return{type:b,payload:e}},S=(c(39),c(0)),N=function(){var e=Object(h.c)((function(e){return e.combineActive.active})),t=Object(h.b)(),c=function(e){var c;t((c=e.target.id,{type:v,payload:c}));var n=document.querySelector(".active");null!==n&&n.classList.remove("active"),e.target.className="items active"};return Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{className:"nav-items",children:[Object(S.jsx)("li",{className:"items active",id:"photo",active:"photo"===e,onClick:function(e,t){return c(e)},children:"Photos"}),Object(S.jsx)("li",{className:"items",id:"video",active:"video"===e,onClick:function(e,t){return c(e)},children:"Videos"}),Object(S.jsx)("li",{className:"items",id:"favourite",active:"favourite"===e,onClick:function(e,t){return c(e)},children:"Favourite"})]})})},C=(c(41),function(e){var t=e.handlePhotoSearchResponse,c=e.handleVideoSearchResponse,n=Object(h.b)(),o=function(e){var t;n((t=e.target.value,{type:O,payload:t}))};return Object(S.jsx)("div",{className:"searchbar",children:Object(S.jsxs)("div",{className:"search-content",children:[Object(S.jsx)("input",{className:"searchitems",type:"text",placeholder:"Search",onChange:function(e){return o(e)}}),Object(S.jsx)("button",{className:"searchButton",type:"button",onClick:function(){t(),c()},children:"Search"})]})})}),T=(c(42),c(7)),I=function(e){var t=e.handlePhotoFavourite,c=Object(h.c)((function(e){return e.combinePhoto.photo.photos})),n=Object(h.c)((function(e){return e.combineFavouritePhoto.favouritePhoto})),o=function(e){t(e)};return Object(S.jsx)("div",{className:"card",children:c&&c.map((function(e,t){return Object(S.jsxs)("div",{className:"card-item",children:[Object(S.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(S.jsx)("img",{className:"photo",src:e.src.medium,alt:e.photographer})}),Object(S.jsxs)("div",{className:"content",children:[n.includes(e)?Object(S.jsx)(T.a,{className:"favouriteIcon",onClick:function(t){return o(e)}}):Object(S.jsx)(T.b,{className:"favouriteIcon",onClick:function(t){return o(e)}}),"Clicked By : ",Object(S.jsx)("a",{className:"photographer",href:e.photographer_url,target:"_blank",rel:"noopener noreferrer",children:e.photographer})]})]},e.id)}))})},w=c(9),k=c.n(w),F=(c(61),function(e){var t=e.handleVideoFavourite,c=Object(h.c)((function(e){return e.combineVideo.video.videos})),n=Object(h.c)((function(e){return e.combineFavouriteVideo.favouriteVideo})),o=function(e){t(e)};return Object(S.jsx)("div",{className:"card",children:c&&c.map((function(e,t){return Object(S.jsxs)("div",{className:"video-card-item",children:[Object(S.jsx)("video",{width:"400",height:"225",controls:!0,className:"video",children:Object(S.jsx)("source",{src:e.video_files.map((function(e){return e.link})),type:"video/mp4"})},t),Object(S.jsxs)("div",{className:"content",children:[n.includes(e)?Object(S.jsx)(T.a,{className:"favouriteIcon",onClick:function(t){return o(e)}}):Object(S.jsx)(T.b,{className:"favouriteIcon",onClick:function(t){return o(e)}}),"Shot By : ",Object(S.jsx)("a",{className:"photographer",href:e.user.url,target:"_blank",rel:"noopener noreferrer",children:e.user.name})]})]},e.id)}))})}),R=(c(62),function(){var e=Object(h.c)((function(e){return e.combineFavouritePhoto.favouritePhoto})),t=Object(h.c)((function(e){return e.combineFavouriteVideo.favouriteVideo}));return Object(S.jsxs)("div",{className:"card",children:[e.map((function(e,t){return Object(S.jsxs)("div",{className:"card-item",children:[Object(S.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(S.jsx)("img",{className:"photo",src:e.src.medium,alt:e.photographer})}),Object(S.jsxs)("div",{className:"content",children:["Clicked By :"," ",Object(S.jsx)("a",{className:"photographer",href:e.photographer_url,target:"_blank",rel:"noopener noreferrer",children:e.photographer})]})]},e.id)})),t.map((function(e,t){return Object(S.jsxs)("div",{className:"favouritevideo-card-item",children:[Object(S.jsx)("video",{width:"400",height:"225",controls:!0,className:"video",children:Object(S.jsx)("source",{src:e.video_files.map((function(e){return e.link})),type:"video/mp4"})},t),Object(S.jsxs)("div",{className:"content",children:["VideoShot By :"," ",Object(S.jsx)("a",{className:"photographer",href:e.user.url,target:"_blank",rel:"noopener noreferrer",children:e.user.name})]})]},e.id)}))]})}),D=(c(23),c(6)),H=c.n(D),B=function(){var e=Object(h.c)((function(e){return e.combinePhotoActivePage.photoActivePage})),t=Object(h.c)((function(e){return e.combinePhoto.photo.total_results})),c=Object(h.c)((function(e){return e.combinePerPage.perPage})),n=Object(h.c)((function(e){return e.combineSearchPhoto.searchPhoto.photos})),o=Object(h.c)((function(e){return e.combineSearchPhotoActivePage.searchPhotoActivePage})),a=Object(h.b)(),r=function(e){void 0!==n&&0!==n.length?a({type:P,payload:e}):a(function(e){return{type:g,payload:e}}(e))};return Object(S.jsx)("div",{children:void 0!==n&&0!==n.length?Object(S.jsx)(H.a,{activePage:o,itemsCountPerPage:c,totalItemsCount:t,pageRangeDisplayed:9,onChange:r}):Object(S.jsx)(H.a,{activePage:e,itemsCountPerPage:c,totalItemsCount:t,pageRangeDisplayed:9,onChange:r})})},L=function(){var e=Object(h.c)((function(e){return e.combineVideoActivePage.videoActivePage})),t=Object(h.c)((function(e){return e.combineVideo.video.total_results})),c=Object(h.c)((function(e){return e.combinePerPage.perPage})),n=Object(h.c)((function(e){return e.combineSearchVideo.searchVideo})),o=Object(h.c)((function(e){return e.combineSearchVideoActivePage.searchVideoActivePage})),a=Object(h.b)(),r=function(e){void 0!==n&&0!==n.length?a({type:y,payload:e}):a(function(e){return{type:m,payload:e}}(e))};return Object(S.jsx)("div",{children:void 0!==n&&0!==n.length?Object(S.jsx)(H.a,{activePage:o,itemsCountPerPage:c,totalItemsCount:t,pageRangeDisplayed:9,onChange:r}):Object(S.jsx)(H.a,{activePage:e,itemsCountPerPage:c,totalItemsCount:t,pageRangeDisplayed:9,onChange:r})})};var U=function(){var e="563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692",t=Object(h.b)(),c=Object(h.c)((function(e){return e})),o=Object(h.c)((function(e){return e.combineFavouritePhoto.favouritePhoto})),a=Object(h.c)((function(e){return e.combineFavouriteVideo.favouriteVideo})),r=Object(h.c)((function(e){return e.combinePhotoActivePage.photoActivePage})),i=Object(h.c)((function(e){return e.combineVideoActivePage.videoActivePage})),d=Object(h.c)((function(e){return e.combineSearchPhotoActivePage.searchPhotoActivePage})),l=Object(h.c)((function(e){return e.combineSearchVideoActivePage.searchVideoActivePage})),v=Object(h.c)((function(e){return e.combineSearchInputValue.searchInputValue})),p=Object(h.c)((function(e){return e.combinePerPage.perPage})),b=function(){var c=Object(s.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("https://api.pexels.com/v1/curated?page=".concat(r,"&per_page=").concat(p),{headers:{Authorization:"".concat(e)}}).then((function(e){console.log(e),t(_(e.data))}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),O=function(){var c=Object(s.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("https://api.pexels.com/videos/popular?page=".concat(i,"&per_page=").concat(p),{headers:{Authorization:"".concat(e)}}).then((function(e){console.log(e),t(A(e.data))}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[r]),Object(n.useEffect)((function(){O()}),[i]);var g=function(){var c=Object(s.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("https://api.pexels.com/v1/search?query=".concat(v,"&page=").concat(d,"&per_page=").concat(p),{headers:{Authorization:"".concat(e)}}).then((function(e){var c;t(_(e.data)),t((c=e.data,{type:j,payload:c}))}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),m=function(){var c=Object(s.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("https://api.pexels.com/videos/search?query=".concat(v,"&page=").concat(l,"&per_page=").concat(p),{headers:{Authorization:"".concat(e)}}).then((function(e){var c;t(A(e.data)),t((c=e.data,{type:f,payload:c}))}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[d]),Object(n.useEffect)((function(){m()}),[l]),Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(C,{handlePhotoSearchResponse:g,handleVideoSearchResponse:m}),Object(S.jsx)(N,{}),"photo"===c.combineActive.active?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{handlePhotoFavourite:function(e){o.includes(e)?(o.map((function(t,c){e===t&&o.splice(c,1)})),console.log(o),t(V(o))):(t(V(o.concat(e))),console.log(o.concat(e)))}}),Object(S.jsx)(B,{})]}):null,"video"===c.combineActive.active?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(F,{handleVideoFavourite:function(e){a.includes(e)?(a.map((function(t,c){e===t&&a.splice(c,1)})),t(E(a))):t(E(a.concat(e)))}}),Object(S.jsx)(L,{})]}):null,"favourite"===c.combineActive.active?Object(S.jsx)(R,{}):null]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))},z=c(12),X=c(3),q={photo:"",video:"",active:"photo",favouritePhoto:[],favouriteVideo:[],searchPhoto:"",searchVideo:"",searchInputValue:"",photoActivePage:1,videoActivePage:1,searchPhotoActivePage:1,searchVideoActivePage:1,perPage:8},J=Object(z.a)({combinePhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case d:return Object(X.a)(Object(X.a)({},e),{},{photo:n});default:return e}},combineVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l:return Object(X.a)(Object(X.a)({},e),{},{video:n});default:return e}},combineActive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case v:return Object(X.a)(Object(X.a)({},e),{},{active:n});default:return e}},combineFavouritePhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case p:return Object(X.a)(Object(X.a)({},e),{},{favouritePhoto:n});default:return e}},combineFavouriteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b:return Object(X.a)(Object(X.a)({},e),{},{favouriteVideo:n});default:return e}},combineSearchPhoto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case j:return Object(X.a)(Object(X.a)({},e),{},{searchPhoto:n});default:return e}},combineSearchVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case f:return Object(X.a)(Object(X.a)({},e),{},{searchVideo:n});default:return e}},combineSearchInputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case O:return Object(X.a)(Object(X.a)({},e),{},{searchInputValue:n});default:return e}},combinePhotoActivePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case g:return Object(X.a)(Object(X.a)({},e),{},{photoActivePage:n});default:return e}},combineVideoActivePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case m:return Object(X.a)(Object(X.a)({},e),{},{videoActivePage:n});default:return e}},combineSearchPhotoActivePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case P:return Object(X.a)(Object(X.a)({},e),{},{searchPhotoActivePage:n});default:return e}},combineSearchVideoActivePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case y:return Object(X.a)(Object(X.a)({},e),{},{searchVideoActivePage:n});default:return e}},combinePerPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case x:return Object(X.a)(Object(X.a)({},e),{},{perPage:n});default:return e}}}),M=Object(z.b)(J,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(h.a,{store:M,children:Object(S.jsx)(U,{})})}),document.getElementById("root")),G()}},[[66,1,2]]]);
//# sourceMappingURL=main.a6cbb6fb.chunk.js.map