"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[751,446],{83316:function(e,a,n){n.r(a),n.d(a,{default:function(){return i}});var r=n(67294),t=n(56698),c=n(941),l=n(37211),s="tag_21yA";function u(e){var a=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,a.letter),r.createElement("ul",{className:"padding--none"},a.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var o=function(e){var a=e.tags,n=(0,c.PZ)(a);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))};var i=function(e){var a=e.tags,n=(0,c.MA)();return r.createElement(t.Z,{title:n,wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsTagsListPage,searchMetadatas:{tag:"doc_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,n),r.createElement(o,{tags:a})))))}},37211:function(e,a,n){n.d(a,{Z:function(){return o}});var r=n(67294),t=n(86010),c=n(36742),l="tag_1Okp",s="tagRegular_3MiF",u="tagWithCount_1HU1";var o=function(e){var a,n=e.permalink,o=e.name,i=e.count;return r.createElement(c.Z,{href:n,className:(0,t.Z)(l,(a={},a[s]=!i,a[u]=i,a))},o,i&&r.createElement("span",null,i))}},6979:function(e,a,n){var r=n(5977),t=n(52263),c=n(28084),l=n(94184),s=n.n(l),u=n(67294);a.Z=function(e){var a=(0,u.useRef)(!1),l=(0,u.useRef)(null),o=(0,r.k6)(),i=(0,t.Z)().siteConfig,d=(void 0===i?{}:i).baseUrl;(0,u.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||l.current&&e.srcElement===document.body&&(e.preventDefault(),l.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var m=(0,c.usePluginData)("docusaurus-lunr-search"),h=function(){a.current||(Promise.all([fetch(""+d+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(452)]).then(n.bind(n,57780)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,53343))]).then((function(e){var a=e[0],n=e[1],r=e[2].default;0!==a.length&&function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=d+n.url;document.createElement("a").href=r,o.push(r)}})}(a,n,r)})),a.current=!0)},f=(0,u.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return u.createElement("div",{className:"navbar__search",key:"search-box"},u.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),u.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:f,onBlur:f,ref:l}))}}}]);