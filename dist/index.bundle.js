"use strict";(self.webpackChunktemplate_repo=self.webpackChunktemplate_repo||[]).push([[57],{538:(n,t,e)=>{e.d(t,{A:()=>i});var r=e(354),o=e.n(r),a=e(314),s=e.n(a)()(o());s.push([n.id,"body,html{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: #C4DBE0 ;\n    color: white;\n}\n\n.header{\n    font-size: 80px;\n    font-weight: bold;\n    text-shadow: 4px 4px 4px #002c66;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    justify-content: center;\n}\n.boards{\n    display: flex;\n    gap: 50px;\n    justify-content: center;\n    margin-top: 50px;\n}\n\ndiv[class^=\"column\"]{\n    border: 2px solid grey;\n}\n[class^=\"row\"]{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n}\n.playerBoard, .computerBoard{\n    height: 400px;\n    width: 400px;\n    background-color: #002c66;\n    border: 2px solid grey;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n}\n\n.playerBoard .ship{\n    background-color: rgb(175, 210, 255);\n}\n\n.boards .attacked{\n    background-color: rgba(255, 0, 0, 0.445);\n}\n.boards .attacked.ship{\n    background-color: rgb(37, 247, 9);\n}\n\n.display{\n    height: 30px;\n    width: 150px;\n    color: rgb(228, 0, 0);\n    text-align: center;\n    text-shadow: 3px 3px 3px rgba(0, 0, 255, 0.377);\n    font-size: 23px;\n    font-weight: 700;\n    font-style:italic;\n    \n    align-self: center;\n\n    padding: 20px 10px;\n    padding-bottom: 20px;\n    border-bottom: 3px solid white;\n    border-top: 3px solid white;\n}","",{version:3,sources:["webpack://./src/styles/mainStyle.css"],names:[],mappings:"AAAA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gCAAgC;IAChC,kJAAkJ;IAClJ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,sBAAsB;IACtB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,wCAAwC;AAC5C;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,+CAA+C;IAC/C,eAAe;IACf,gBAAgB;IAChB,iBAAiB;;IAEjB,kBAAkB;;IAElB,kBAAkB;IAClB,oBAAoB;IACpB,8BAA8B;IAC9B,2BAA2B;AAC/B",sourcesContent:["body,html{\n    margin:0;\n    padding:0;\n}\n\nbody{\n    background-color: #C4DBE0 ;\n    color: white;\n}\n\n.header{\n    font-size: 80px;\n    font-weight: bold;\n    text-shadow: 4px 4px 4px #002c66;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    justify-content: center;\n}\n.boards{\n    display: flex;\n    gap: 50px;\n    justify-content: center;\n    margin-top: 50px;\n}\n\ndiv[class^=\"column\"]{\n    border: 2px solid grey;\n}\n[class^=\"row\"]{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n}\n.playerBoard, .computerBoard{\n    height: 400px;\n    width: 400px;\n    background-color: #002c66;\n    border: 2px solid grey;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n}\n\n.playerBoard .ship{\n    background-color: rgb(175, 210, 255);\n}\n\n.boards .attacked{\n    background-color: rgba(255, 0, 0, 0.445);\n}\n.boards .attacked.ship{\n    background-color: rgb(37, 247, 9);\n}\n\n.display{\n    height: 30px;\n    width: 150px;\n    color: rgb(228, 0, 0);\n    text-align: center;\n    text-shadow: 3px 3px 3px rgba(0, 0, 255, 0.377);\n    font-size: 23px;\n    font-weight: 700;\n    font-style:italic;\n    \n    align-self: center;\n\n    padding: 20px 10px;\n    padding-bottom: 20px;\n    border-bottom: 3px solid white;\n    border-top: 3px solid white;\n}"],sourceRoot:""}]);const i=s},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var A=e(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==A)t[A].references++,t[A].updater(u);else{var h=o(u,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);t[i].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},681:(n,t,e)=>{var r=e(72),o=e.n(r),a=e(825),s=e.n(a),i=e(659),c=e.n(i),l=e(56),d=e.n(l),p=e(540),A=e.n(p),u=e(113),h=e.n(u),f=e(538),C={};C.styleTagTransform=h(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=A(),o()(f.A,C),f.A&&f.A.locals&&f.A.locals;class b{length;hitsCount;sunk;constructor(n){this.length=n,this.hitsCount=0,this.sunk=!1}hit(){this.hitsCount+=1}isSunk(){return this.hitsCount===this.length}}class g{constructor(){this.board=Array(10).fill().map((()=>Array(10).fill(0))),this.shipsList=[]}blockAdjacentSide(n,t){[[n+1,t],[n-1,t],[n,t+1],[n,t-1],[n+1,t+1],[n-1,t+1],[n-1,t-1],[n+1,t-1]].filter((n=>n[0]>=0&&n[0]<=9&&n[1]>=0&&n[1]<=9&&0===this.board[n[0]][n[1]])).forEach((n=>{this.board[n[0]][n[1]]="X"}))}placeShip(n,t,e,r){const o=new b(r);this.shipsList.push(o);const a=this.shipsList.indexOf(o)+1,s=[];if("X"===e){for(let e=t;e<t+r;e+=1)s.push([n,e]);if(s.every((n=>0===this.board[n[0]][n[1]])))return s.forEach((n=>{this.board[n[0]][n[1]]=a,this.blockAdjacentSide(n[0],n[1])})),1}else{for(let e=n;e<n+r;e+=1)s.push([e,t]);if(s.every((n=>0===this.board[n[0]][n[1]])))return s.forEach((n=>{this.board[n[0]][n[1]]=a,this.blockAdjacentSide(n[0],n[1])})),1}return 0}receiveAttack(n,t){const e=this.board[n][t];0===e?this.board[n][t]=11:(this.shipsList[e-1].hit(),this.board[n][t]=10)}allSunk(){return this.shipsList.every((n=>n.isSunk()))}}function m(n){const t=document.createElement("div");return t.setAttribute("class",`${n}`),t}function y(n){return document.querySelector(n)}class x{static playerBoardRenderer(n,t){n.forEach(((n,e)=>{const r=m(`row_${e}`);n.forEach(((n,t)=>{const e=m(`column_${t}`);11===n?e.classList.add("attacked"):10===n?e.classList.add("ship","attacked"):0!==n&&"X"!==n&&e.classList.add("ship"),r.appendChild(e)})),t.appendChild(r)}))}static opponentBoardRenderer(n,t){n.forEach(((n,e)=>{const r=m(`row_${e}`);n.forEach(((n,t)=>{const e=m(`column_${t}`);11===n&&e.classList.add("attacked"),10===n&&e.classList.add("ship","attacked"),r.appendChild(e)})),t.appendChild(r)}))}static getPos(n){const t=+Array.from(n.classList).filter((n=>n.startsWith("column")))[0].split("_")[1];return[+Array.from(n.parentElement.classList).filter((n=>n.startsWith("row")))[0].split("_")[1],t]}}function B(n){[2,3,3,4,5].forEach((t=>{!function(n,t){const e=Math.floor(9*Math.random()),r=Math.floor(9*Math.random()),o=["X","Y"][Math.floor(1.1*Math.random())];let a=n.placeShip(e,r,o,t);for(console.log(a);!a;)a=n.placeShip(e,r,o,t)}(n,t)}))}!function(){const n=function n(t){const e=t;{const t=Math.floor(9*Math.random()),r=Math.floor(9*Math.random()),o=e.board[t][r];return 10!==o&&11!==o?[t,r]:e.allSunk()?null:n(e)}},t=new g,e=new g;B(e),B(t);const r=y(".playerBoard"),o=y(".computerBoard"),a=y(".display");x.playerBoardRenderer(t.board,r),x.opponentBoardRenderer(e.board,o);let s="player";o.addEventListener("click",(i=>{if("player"===s&&!t.allSunk()&&!e.allSunk()){const c=i.target,[l,d]=x.getPos(c);e.receiveAttack(l,d),o.replaceChildren(),x.opponentBoardRenderer(e.board,o),a.textContent="Computer Turn",s="computer",setTimeout((()=>{const[e,o]=n(t);t.receiveAttack(e,o),r.replaceChildren(),x.playerBoardRenderer(t.board,r),a.textContent="Your Turn",s="player"}),0)}(t.allSunk()||e.allSunk())&&(a.textContent=`${function(n,t){return n.allSunk()?"Computer":t.allSunk()?"Player":0}(t,e)} won`)}))}()}},n=>{n(n.s=681)}]);
//# sourceMappingURL=index.bundle.js.map