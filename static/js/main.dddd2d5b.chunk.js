(this["webpackJsonpfantasy-slots"]=this["webpackJsonpfantasy-slots"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(7),r=a.n(c),s=(a(12),a(16));function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{spinValue:0,totalSpins:0,totalAppearances:0,highlight:!1},a={id:Object(s.a)(),config:e,effects:{},data:t};return a}var d=a(3),l=0,u=1,f=2,g=3,j=a.p+"static/media/key.0629d73b.png",h=a.p+"static/media/chest1.b4054229.png",m=a.p+"static/media/chest2.d4ed67d0.png",b=a.p+"static/media/chest3.888bf5be.png",p=a.p+"static/media/chest4.28dffa1b.png",v=a.p+"static/media/coal.d3a30adc.png",x=a.p+"static/media/coin.3480412c.png",O=a.p+"static/media/dagger1.6892c2d5.png",y=a(0);function T(e){var t=e.image;return Object(y.jsx)("img",{className:"icon",src:t,alt:""})}var D=function(){return Object(y.jsx)(T,{image:h})},A=function(){return Object(y.jsx)(T,{image:m})},k=function(){return Object(y.jsx)(T,{image:b})},C=function(){return Object(y.jsx)(T,{image:p})},V=function(){return Object(y.jsx)(T,{image:x})};function S(e,t){var a=e.getAdjacentIndexes();e.getTiles(a).forEach(t)}var w=[{id:"48217c09-300c-44b0-803e-19f51346227b",name:"Coal",icon:function(){return Object(y.jsx)(T,{image:v})},rarity:l,categories:[],calculateValue:function(e){var t=1;return S(e,(function(e){"Coal"===e.config.name&&(t+=1)})),t}},{id:"2f2e6e35-686f-4033-9940-3f66a153c568",name:"Dagger",icon:function(){return Object(y.jsx)(T,{image:O})},rarity:l,categories:[],calculateValue:function(e){return 1}},{id:"49d24981-a7d1-4407-b121-ed3e45d427bd",name:"Coin",icon:V,rarity:l,categories:[],calculateValue:function(e){return 1}}];function N(e,t){var a=0;e.config.onDestroy&&(a=e.config.onDestroy(t)||0);var n=t.gameData.gameTiles,i=n.indexOf(e),c=o(B);n[i]=c,a&&(c.data.spinValue=a)}var P=[{id:"2ef31449-bf1d-4cee-8e93-e0665fb9942a",name:"Key",description:function(){return Object(y.jsxs)(y.Fragment,{children:["The key unlocks ",Object(y.jsx)(D,{})," ",Object(y.jsx)(A,{})," ",Object(y.jsx)(k,{})," ",Object(y.jsx)(C,{}),", destroying both in the process"]})},icon:function(){return Object(y.jsx)(T,{image:j})},rarity:l,categories:["key"],calculateValue:function(e){var t=!1;return S(e,(function(a){(function(e,t){return e.config.categories.includes(t)})(a,"chest")&&(N(a,e),t=!0)})),t&&N(e.tile,e),1}},{id:"834bf40d-0a3d-4e20-83a0-4e3aa233840c",name:"Small Chest",description:function(){return Object(y.jsxs)(y.Fragment,{children:["Unlocked by the key, gives 10 ",Object(y.jsx)(V,{})]})},icon:D,rarity:l,categories:["chest"],calculateValue:function(e){return 1},onDestroy:function(e){return 10}},{id:"c87ea7e4-5479-4aa7-9033-0859d191390b",name:"Medium Chest",description:function(){return Object(y.jsxs)(y.Fragment,{children:["Unlocked by the key, gives 30 ",Object(y.jsx)(V,{})]})},icon:A,rarity:u,categories:["chest"],calculateValue:function(e){return 1},onDestroy:function(e){return 30}},{id:"8abbd4fc-1fee-4c14-b5c2-2a627de70dd1",name:"Large Chest",icon:k,rarity:f,categories:["chest"],calculateValue:function(e){return 1},onDestroy:function(e){alert("destroyed")}},{id:"3422f3a8-bd1a-4549-a9ff-d0ed0621d646",name:"Dark Chest",icon:C,rarity:g,categories:["chest"],calculateValue:function(e){return 1},onDestroy:function(e){alert("destroyed")}}],M=[].concat(Object(d.a)(w),Object(d.a)(P)),E=M,I=new Map,H=new Map;M.forEach((function(e){I.set(e.id,e),H.set(e.name,e)}));var B={id:"04f5df2c-22d6-4e31-8e81-c81f0ba1c4c1",name:"Empty",icon:function(){return Object(y.jsx)(T,{image:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"})},rarity:l,categories:["empty"],calculateValue:function(e){return e.tile.data.spinValue||0}},W={state:{gameData:null,spinning:!1,tilesToPick:[],selectedTile:null},_update:function(e){},update:function(){W._update(Math.random())}};function J(e){var t=e.tile,a=e.showValue,n=e.onClick,i=["tile"];return t.data.highlight&&i.push("highlight"),Object(y.jsxs)("div",{className:i.join(" "),onClick:function(){W.state.selectedTile=t,W.update(),n&&n()},children:[!!t.data.spinValue&&a&&Object(y.jsx)("div",{className:"value",children:t.data.spinValue}),Object(y.jsx)(t.config.icon,{})]})}function R(e){var t=e.boardTiles,a=e.gameTiles,n=e.width,i=e.height,c={fontSize:"1.5em",gridTemplateColumns:"repeat(".concat(n,", 5em)"),gridTemplateRows:"repeat(".concat(i,", 5em)")};if(0===t.length){var r=o(B);return Object(y.jsx)("div",{className:"board",style:c,children:" ".repeat(n*i).split("").map((function(e,t){return Object(y.jsx)(J,{tile:r},t)}))})}return Object(y.jsx)("div",{className:"board",style:c,children:t.map((function(e,t){var n=a[e];return Object(y.jsx)(J,{tile:n,showValue:!0,onClick:function(){}},n.id)}))})}function F(e){var t=e.tiles;return Object(y.jsx)("div",{className:"inventory",children:t.map((function(e){return Object(y.jsx)(J,{tile:e},e.id)}))})}window.store=W;var z=a(2);function U(e,t){return Math.floor(Math.random()*(t-e+1))+e}var _="9c0617fc-daf3-4f9c-943e-073f698ac0b8";function G(e){var t,a=Object(z.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.config={id:n.config.id}}}catch(i){a.e(i)}finally{a.f()}}var K=[{totalDays:0,taxAmount:0},{totalDays:5,taxAmount:25},{totalDays:6,taxAmount:50},{totalDays:7,taxAmount:100},{totalDays:8,taxAmount:200},{totalDays:9,taxAmount:400},{totalDays:10,taxAmount:800}];function L(e,t){return e.find((function(e){return e.config.id===t}))}function Q(e,t){var a,n=e.reduce((function(e,a){return a.config.rarity<=t&&e.push(a),e}),[]);return(a=n)[U(0,a.length-1)]}function X(){for(var e=W.state.gameData,t=e.deckTiles,a=[],n=0;n<5;n++){var i=Q(t,l);a.push(o(i.config))}e.gameTiles=a,Y()}function Y(){for(var e=W.state.gameData,t=e.gameTiles,a=e.gridWidth,n=e.gridHeight,i=0;t.length<a*n;i++)t.push(o(B))}function Z(){var e=W.state.gameData,t=e.gridWidth,a=e.gridHeight,n=e.deckTiles;e.boardTiles=function(){for(var e=W.state.gameData,t=e.gameTiles,a=e.gridWidth,n=e.gridHeight,i=[],c=Object(d.a)(t),r=0;r<a*n;r++){var s=Math.floor(Math.random()*c.length),o=c[s],l=t.indexOf(o);i.push(l),c.splice(s,1)}return i}(),function(){for(var e=W.state.gameData,t=e.gridWidth,a=e.gridHeight,n=e.gameTiles,i=e.boardTiles,c=0;c<t*a;c++)n[i[c]].data.spinValue=0}(),W.state.gameData.gameTiles.forEach((function(e){e.data.totalSpins++})),W.state.spinning=!0,W.update();var i=0,c=setInterval((function(){var r=e.boardTiles,s=e.gameTiles;i>0&&i<=t*a&&(s[r[i-1]].data.highlight=!1);if(i>t*a)return clearInterval(c),W.state.spinning=!1,W.state.gameData.totalCoins+=W.state.gameData.boardValue,W.state.tilesToPick=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=Object(d.a)(e),n=[],i=0;i<t;i++){var c=U(0,a.length-1),r=a.splice(c,1)[0];r&&n.push(o(r.config))}return n}(n),W.update(),ee(),void function(){var e=localStorage["".concat(_)];e=e?JSON.parse(e):{};var t=JSON.parse(JSON.stringify(W.state.gameData));G(t.ownedTiles),G(t.deckTiles),G(t.gameTiles),e.gameState=t,localStorage["".concat(_)]=JSON.stringify(e)}();if(i<t*a){var l=s[r[i]];l.data.highlight=!0,l.data.totalAppearances++,l.data.spinValue=function(e,t){var a=W.state.gameData,n=a.gridWidth,i=a.gridHeight,c={tile:e,gameData:a,getAdjacentIndexes:function(){return function(e,t,a){var n=[];n.push(e+t),n.push(e-t),n.push(e+1),n.push(e-1),n.push(e+t-1),n.push(e+t+1),n.push(e-t-1),n.push(e-t+1);for(var i=7;i>=0;i--)q(e,n[i],t,a)||n.splice(i,1);return n}(t,n,i)},getTiles:$};return e.config.calculateValue(c)}(l,i)}i++;var u,f=0,g=Object(z.a)(r);try{for(g.s();!(u=g.n()).done;){f+=s[u.value].data.spinValue}}catch(j){g.e(j)}finally{g.f()}W.state.gameData.boardValue=f,W.update()}),100)}function q(e,t,a,n){return!(t<0||t>=a*n)&&((e+1!==t&&e-1!==t||Math.floor(t/a)===Math.floor(e/a))&&((e+a+1!==t&&e+a-1!==t||Math.floor(t/a)===Math.floor((e+a)/a))&&(e-a+1!==t&&e-a-1!==t||Math.floor(t/a)===Math.floor((e-a)/a))))}function $(e){var t=W.state.gameData,a=t.boardTiles,n=t.gameTiles;return e.map((function(e){return n[a[e]]}))}function ee(){var e=W.state.gameData,t=K[e.currentTaxPeriod];e.currentTaxPeriodDay++,e.currentTaxPeriodDay>=t.totalDays&&(e.currentTaxPeriod++,e.currentTaxPeriodDay=1,e.totalCoins-=t.taxAmount,e.totalCoins<0&&(e.roundEnded=!0)),W.update()}function te(e){var t=H.get(e);!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=W.state.gameData.ownedTiles;if(L(t,e.id))console.log("Already own tile ".concat(e.name));else{console.log("Adding owned tile ".concat(e.name));var a=o(e);t.push(a)}}(t),function(e){if(e){var t=W.state.gameData.deckTileIds;t.includes(e)||t.push(e)}}(null===t||void 0===t?void 0:t.id)}function ae(){W.state.gameData={boardTiles:[],ownedTiles:[],deckTileIds:[],deckTiles:[],gameTiles:[],gridWidth:3,gridHeight:3,boardValue:0,totalCoins:0,currentTaxPeriod:0,currentTaxPeriodDay:0,roundEnded:!1},te("Coal"),te("Dagger"),te("Key"),te("Small Chest"),te("Medium Chest"),function(){var e=W.state.gameData,t=e.deckTileIds,a=e.ownedTiles;e.deckTiles=t.map((function(e){return L(a,e)||o(B)}))}(),X(),ee()}function ne(e){var t=e.tile,a=e.onClick;if(!t)return null;var n=t.config;return Object(y.jsxs)("div",{className:"tile-details",onClick:a,children:[Object(y.jsx)("div",{className:"name",children:n.name}),Object(y.jsx)(t.config.icon,{}),Object(y.jsx)("div",{className:"description",children:n.description&&n.description()})]})}function ie(){var e=W.state.tilesToPick;return Object(y.jsx)("div",{className:"pick-a-tile",children:e.map((function(e){return Object(y.jsx)(ne,{tile:e,onClick:function(){!function(e){var t=W.state.gameData.gameTiles,a=t.findIndex((function(e){return e.config.id===B.id}));a>=0?t.splice(a,1,e):t.push(e)}(e),W.state.tilesToPick=[],W.state.gameData.boardTiles=[],W.update()}},e.id)}))})}var ce=[{id:"bbe17879-f3ee-47fc-9e76-2fa8cc0ebc0d",name:"Board Width",cost:function(){return 0},buy:function(){W.state.gameData.gridWidth+=1,Y(),W.update()},isComplete:function(){return!1}},{id:"1e0ab330-8ec9-4e41-933d-75251ffa5ee5",name:"Board Height",cost:function(){return 0},buy:function(){W.state.gameData.gridHeight+=1,Y(),W.update()},isComplete:function(){return!1}},{id:"0245c559-dd55-4f93-a626-53cc06b17d42",name:"XYZ",cost:function(){return 0},buy:function(){},isComplete:function(){return!1}}];function re(){return Object(y.jsx)("div",{className:"upgrades",children:ce.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:e.name}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:e.buy,children:"Buy"})})]},e.id)}))})}function se(e){var t,a=Object(z.a)(e);try{var n=function(){var e=t.value;e.config=E.find((function(t){return t.id===e.config.id}))||B};for(a.s();!(t=a.n()).done;)n()}catch(i){a.e(i)}finally{a.f()}}function oe(){var e=W.state.gameData;e.currentTaxPeriod=0,e.currentTaxPeriodDay=0,e.roundEnded=!1,e.boardTiles=[],e.totalCoins=0,X(),W.state.tilesToPick=[],W.update()}function de(){var e=W.state.gameData,t=K[e.currentTaxPeriod];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{style:{fontSize:"3em"},children:[e.totalCoins,Object(y.jsx)("span",{className:"icon-em",children:Object(y.jsx)(V,{})})," ","/ ",t.taxAmount,Object(y.jsx)("span",{className:"icon-em",children:Object(y.jsx)(V,{})})," ","taxes due in ",t.totalDays-e.currentTaxPeriodDay," Days"]}),Object(y.jsx)("div",{style:{fontSize:"3em"}})]})}!function(){var e,t=localStorage["".concat(_)];if(null===(e=t=t?JSON.parse(t):{})||void 0===e?void 0:e.gameState){var a=t.gameState;se(a.ownedTiles),se(a.deckTiles),se(a.gameTiles),W.state.gameData=t.gameState}}();var le=function(){var e=Object(n.useState)(0)[1];Object(n.useEffect)((function(){W._update=e}),[e]),W.state.gameData||ae();var t=W.state,a=t.gameData,i=t.tilesToPick,c=null;return W.state.spinning||i.length||(c=Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("button",{onClick:Z,children:"Spin"})})),a.roundEnded?Object(y.jsxs)("div",{children:["THE ROUND IS OVER",Object(y.jsx)("button",{onClick:oe,children:"Next round"})]}):Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(de,{}),!!i.length&&Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Pick New Tile"}),Object(y.jsx)(ie,{})]}),Object(y.jsxs)("div",{style:{opacity:i.length?.5:1},children:[Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Board"}),Object(y.jsx)(R,{boardTiles:a.boardTiles,gameTiles:a.gameTiles,width:a.gridWidth,height:a.gridHeight}),c,Object(y.jsxs)("div",{style:{fontSize:"2em"},children:["Board value:"," ",Object(y.jsx)("b",{children:!!a.boardValue&&a.boardValue||0})]})]}),Object(y.jsx)("div",{style:{width:"1em"}}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Selected Tile"}),Object(y.jsx)(ne,{tile:W.state.selectedTile,onClick:function(){W.state.selectedTile=void 0,W.update()}})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Game Tiles"}),Object(y.jsx)(F,{tiles:a.gameTiles})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Deck"}),Object(y.jsx)(F,{tiles:a.deckTiles})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Owned Inventory"}),Object(y.jsx)(F,{tiles:a.ownedTiles})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Upgrades"}),Object(y.jsx)(re,{})]}),Object(y.jsx)("button",{onClick:function(){ae(),W.update()},children:"Reset all game data"})]})]})};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(le,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dddd2d5b.chunk.js.map