(function(){"use strict";var e={1647:function(e,o,n){var t=n(8935),r=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"app"}},[n("file-browser-tree",{ref:"filetree",staticClass:"column",attrs:{id:"file-tree"},on:{nodeClick:e.nodeClick,nodeDoubleClick:e.nodeDoubleClick,nodeDrop:e.nodeDrop}},[n("template",{slot:"context-menu"},[n("div",{on:{click:e.doDashboard}},[e._v("Dashboard")]),n("div",{on:{click:e.doCustomers}},[e._v("Customers")])])],2)],1)},i=[],l=n(7687),s=n.n(l),u={name:"App",components:{"file-browser-tree":s()},mounted(){this.$refs.filetree.addPathToTree("template\\index.js",{},!1),this.$refs.filetree.addPathToTree("template\\log.png",{},!1),this.$refs.filetree.addPathToTree("src\\handler.py",{},!1),this.$refs.filetree.addPathToTree("package.json",{},!1),this.$refs.filetree.addPathToTree("README.md",{},!1),this.$refs.filetree.addPathToTree("index.ejs",{},!1)},methods:{nodeClick(e,o){console.log("nodeClick: ",o)},nodeDoubleClick(e){console.log("nodeDoubleClick: ",e)},nodeDrop(e){console.log("nodeDrop: ",e)},doCustomers(){console.log("doCustomers"),this.$refs.filetree.contextMenuIsVisible=!1},doDashboard(){console.log("doDashboard"),this.$refs.filetree.contextMenuIsVisible=!1}}},f=u,c=n(1001),a=(0,c.Z)(f,r,i,!1,null,null,null),d=a.exports;t.Z.config.productionTip=!1,new t.Z({render:e=>e(d)}).$mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,i){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<t.length;u++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var f=r();void 0!==f&&(o=f)}}return o}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,r,i]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,i,l=t[0],s=t[1],u=t[2],f=0;if(l.some((function(o){return 0!==e[o]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(o&&o(t);f<l.length;f++)i=l[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},t=self["webpackChunkmy_vue_file_tree"]=self["webpackChunkmy_vue_file_tree"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(1647)}));t=n.O(t)})();
//# sourceMappingURL=app.882c4e51.js.map