(this["webpackJsonpfantasy-slots"]=this["webpackJsonpfantasy-slots"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"name":"fantasy-slots","version":"0.1.7","private":true,"dependencies":{"gh-pages":"^3.1.0","node-sass":"^5.0.0","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.3","typescript":"^4.2.2","uuid":"^8.3.2","web-vitals":"^1.1.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm version patch && git push && npm run build","deploy":"gh-pages -d build","sync":"git add . && git commit -m \'Sync\' && git push"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.7.3","@types/jest":"^26.0.20","@types/node":"^12.20.4","@types/react":"^17.0.2","@types/react-dom":"^17.0.1","@types/uuid":"^8.3.0"},"homepage":"https://zephren.github.io/fantasy-slots"}')},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),c=n(8),r=n.n(c),s=(n(16),{state:{gameData:null,spinning:!1,tilesToPick:[],selectedTile:null},_update:function(e){},update:function(){s._update(Math.random())}});window.store=s;var o=n(5),l=n(1),d=n(9),u=function e(t){Object(d.a)(this,e),this.id="",this.name="",this.icon=void 0,this.rarity=0,this.categories=[],this.description=void 0,this.calculateValue=function(e){return 0},this.onRemove=void 0,this.createMeta=void 0,this.topStat=void 0,this.name="",Object.assign(this,t)},f={COMMON:0,UNCOMMON:1,RARE:2,LEGENDARY:3},j=["Common","Uncommon","Rare","Legendary"],b=f.LEGENDARY,h=n(19);function m(e,t){var n;return e||(console.error(new Error("Undefined tile config for creating a tile. Adding an empty tile.")),e=Ee),!t&&e.createMeta&&(t=e.createMeta()),{id:Object(h.a)(),config:e,effects:{},data:{spinValue:0,totalSpins:0,totalAppearances:0,highlight:!1},meta:null!==(n=t)&&void 0!==n?n:{}}}var g=n(0);function v(e){var t=e.image,n=e.config;return Object(g.jsx)("img",{className:"icon",src:t,alt:"",onClick:function(){n&&(s.state.selectedTile=m(n),s.update())}})}var p=new Map;function O(e,t){var n=p.get(t.name);return n||(n=Object(g.jsx)(v,{image:e,config:t})),n}var x=n.p+"static/media/coin.3480412c.png",y=function(){return O(x,Re.Coin)},T={Coin:new u({id:"d9c7f23b-a3e9-4b4e-af69-4a026998d40a",icon:y,rarity:f.COMMON,categories:["coin"],calculateValue:function(e){return 1}})};function C(e,t){var n=e.getAdjacentIndexes();return e.getTiles(n).map(t)}function k(e,t){return e.config.categories.includes(t)}var D=n(2);function M(e,t){return Math.floor(Math.random()*(t-e+1))+e}var N="9c0617fc-daf3-4f9c-943e-073f698ac0b8";function w(){var e=localStorage["".concat(N)];e=e?JSON.parse(e):{};var t=JSON.parse(JSON.stringify(s.state.gameData));A(t.ownedTiles),A(t.deckTiles),A(t.gameTiles),e.gameState=t,e.saveDate=new Date,localStorage["".concat(N)]=JSON.stringify(e)}function A(e){var t,n=Object(D.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.config={id:a.config.id}}}catch(i){n.e(i)}finally{n.f()}}var V=[{totalDays:0,taxAmount:0},{totalDays:5,taxAmount:25},{totalDays:6,taxAmount:50},{totalDays:7,taxAmount:100},{totalDays:8,taxAmount:200},{totalDays:9,taxAmount:400},{totalDays:10,taxAmount:800}];function S(e,t){return e.find((function(e){return e.config.id===t}))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=s.state.gameData.ownedTiles;if(S(t,e.id))console.log("Already own tile ".concat(e.name));else{console.log("Adding owned tile ".concat(e.name));var n=m(e);t.push(n)}}function P(e){var t=s.state.gameData.gameTiles,n=t.findIndex((function(e){return e.config.id===Ee.id}));n>=0?t.splice(n,1,e):t.push(e)}function E(e,t){var n,a=e.reduce((function(e,n){return n.config.rarity<=t&&e.push(n),e}),[]);return(n=a)[M(0,n.length-1)]}function R(){for(var e=s.state.gameData,t=e.deckTiles,n=[],a=0;a<5;a++){var i=E(t,f.COMMON);n.push(m(i.config))}e.gameTiles=n,I()}function I(){for(var e=s.state.gameData,t=e.gameTiles,n=e.gridWidth,a=e.gridHeight,i=0;t.length<n*a;i++)t.push(m(Ee))}function B(){var e=s.state.gameData,t=e.gridWidth,n=e.gridHeight,a=e.deckTiles;e.boardTiles=function(){for(var e=s.state.gameData,t=e.gameTiles,n=e.gridWidth,a=e.gridHeight,i=[],c=Object(o.a)(t),r=0;r<n*a;r++){var l=Math.floor(Math.random()*c.length),d=c[l],u=t.indexOf(d);i.push(u),c.splice(l,1)}return i}(),function(){for(var e=s.state.gameData,t=e.gridWidth,n=e.gridHeight,a=e.gameTiles,i=e.boardTiles,c=0;c<t*n;c++)a[i[c]].data.spinValue=0}(),s.state.gameData.gameTiles.forEach((function(e){e.data.totalSpins++})),s.state.spinning=!0,s.update();var i=0,c=setInterval((function(){var r=e.boardTiles,l=e.gameTiles;i>0&&i<=t*n&&(l[r[i-1]].data.highlight=!1);if(i>t*n)return clearInterval(c),s.state.spinning=!1,s.state.gameData.totalCoins+=s.state.gameData.boardValue,s.state.tilesToPick=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=Object(o.a)(e),a=[],i=function(e){var t=F(n),i=t.chances,c=M(0,t.chanceTotal),r=i.findIndex((function(e){return e>=c})),s=n.splice(r,1)[0];s&&a.push(m(s.config))},c=0;c<t;c++)i(c);return a}(a),s.state.gameData.modal="PickNewTile",s.update(),J(),void w();if(i<t*n){var d=l[r[i]];d.data.highlight=!0,d.data.totalAppearances++,d.data.spinValue=W(d,i)}i++;var u,f=0,j=Object(D.a)(r);try{for(j.s();!(u=j.n()).done;){f+=l[u.value].data.spinValue}}catch(b){j.e(b)}finally{j.f()}s.state.gameData.boardValue=f,s.update()}),100)}function H(e,t,n,a){return!(t<0||t>=n*a)&&((e+1!==t&&e-1!==t||Math.floor(t/n)===Math.floor(e/n))&&((e+n+1!==t&&e+n-1!==t||Math.floor(t/n)===Math.floor((e+n)/n))&&(e-n+1!==t&&e-n-1!==t||Math.floor(t/n)===Math.floor((e-n)/n))))}function U(e){var t=s.state.gameData,n=t.boardTiles,a=t.gameTiles;return e.map((function(e){return a[n[e]]}))}function W(e,t){var n=s.state.gameData,a=n.gridWidth,i=n.gridHeight,c={tile:e,gameData:n,getAdjacentIndexes:function(){return function(e,t,n){var a=[];a.push(e+t),a.push(e-t),a.push(e+1),a.push(e-1),a.push(e+t-1),a.push(e+t+1),a.push(e-t-1),a.push(e-t+1);for(var i=7;i>=0;i--)H(e,a[i],t,n)||a.splice(i,1);return a}(t,a,i)},getTiles:U};return e.config.calculateValue(c)}function F(e){var t,n=[],a=0,i=Object(D.a)(e);try{for(i.s();!(t=i.n()).done;){var c=t.value;a+=b+1-c.config.rarity,n.push(a)}}catch(r){i.e(r)}finally{i.f()}return{chances:n,chanceTotal:a}}function J(){var e=s.state.gameData,t=V[e.currentTaxPeriod];if(e.currentTaxPeriodDay++,e.currentTaxPeriodDay>=t.totalDays){e.currentTaxPeriod++,e.currentTaxPeriodDay=1;var n=e.totalCoins-t.taxAmount;n<0&&(e.roundEnded=!0,e.savedCoins+=e.totalCoins,e.lastTotalCoins=e.totalCoins),e.totalCoins=n}s.update()}function G(e){var t=e.message,n=void 0===t?"":t;s.state.gameData.events.push({id:Object(h.a)(),message:n}),console.log("GAME EVENT: ".concat(n))}function L(){var e,t=s.state.gameData,n=0,a=Object(D.a)(t.deckTiles);try{for(a.s();!(e=a.n()).done;){n+=e.value.config.rarity}}catch(i){a.e(i)}finally{a.f()}return n/t.deckTiles.length}function z(e,t){var n;e.config.onRemove&&(n=e.config.onRemove(t));var a=t.gameData.gameTiles,i=a.indexOf(e),c=m(Ee);if(n){var r=n.tiles;if(null===r||void 0===r?void 0:r.length){c=r[0];for(var s=1;s<r.length;s++)P(r[s])}n.value&&(c.data.spinValue=n.value)}a[i]=c}var Y=n.p+"static/media/key.0629d73b.png",K=n.p+"static/media/chest1.b4054229.png",Q=n.p+"static/media/chest2.d4ed67d0.png",X=n.p+"static/media/chest3.888bf5be.png",Z=n.p+"static/media/chest4.28dffa1b.png",q=function(){return O(K,Re.Small_Chest)},$=function(){return O(Q,Re.Medium_Chest)},ee=function(){return O(X,Re.Large_Chest)},te=function(){return O(Z,Re.Dark_Chest)};function ne(e){var t=e.baseValue,n=e.removeValue;return{categories:["chest"],name:"",description:function(){return Object(g.jsxs)(g.Fragment,{children:["Unlocked by the key, gives ",n," ",Object(g.jsx)(y,{})]})},calculateValue:function(e){return t},onRemove:function(e){return{value:n}}}}var ae={Key:new u({id:"2ef31449-bf1d-4cee-8e93-e0665fb9942a",name:"",description:function(){return Object(g.jsxs)(g.Fragment,{children:["The key unlocks ",Object(g.jsx)(q,{})," ",Object(g.jsx)($,{})," ",Object(g.jsx)(ee,{})," ",Object(g.jsx)(te,{}),", destroying both in the process"]})},icon:function(){return O(Y,Re.Key)},rarity:f.COMMON,categories:["key"],calculateValue:function(e){var t=!1;return C(e,(function(n){k(n,"chest")&&(z(n,e),t=!0)})),t&&z(e.tile,e),1}}),Small_Chest:new u(Object(l.a)({id:"834bf40d-0a3d-4e20-83a0-4e3aa233840c",icon:q,rarity:f.COMMON},ne({baseValue:1,removeValue:10}))),Medium_Chest:new u(Object(l.a)({id:"c87ea7e4-5479-4aa7-9033-0859d191390b",icon:$,rarity:f.UNCOMMON},ne({baseValue:2,removeValue:20}))),Large_Chest:new u(Object(l.a)({id:"8abbd4fc-1fee-4c14-b5c2-2a627de70dd1",icon:ee,rarity:f.RARE},ne({baseValue:3,removeValue:30}))),Dark_Chest:new u(Object(l.a)({id:"3422f3a8-bd1a-4549-a9ff-d0ed0621d646",icon:te,rarity:f.LEGENDARY},ne({baseValue:4,removeValue:40})))},ie=n.p+"static/media/pickaxe.9f91b8f2.png",ce=n.p+"static/media/rock.cffc8f04.png",re=n.p+"static/media/oreCoal.d3a30adc.png",se=n.p+"static/media/oreCopper.ef951831.png",oe=n.p+"static/media/oreIron.45ad7af5.png",le=n.p+"static/media/oreSilver.3e3113ee.png",de=function(){return O(ie,Re.Pickaxe)},ue=function(){return O(re,Re.Coal)},fe=function(){return O(se,Re.Copper_Ore)},je=function(){return O(oe,Re.Iron_Ore)},be=function(){return O(le,Re.Silver_Ore)},he={Pickaxe:new u({id:"102f6200-dd6b-434f-b486-67ccc425cc4d",name:"",description:function(){return Object(g.jsx)(g.Fragment,{children:"Breaks rocks, has 3 uses"})},icon:de,rarity:f.COMMON,categories:["mining"],createMeta:function(){return{uses:3}},topStat:function(e){return e.meta.uses},calculateValue:function(e){var t=!1;return C(e,(function(n){t||k(n,"rock")&&(z(n,e),console.log(e.tile.meta),e.tile.meta.uses--,0===e.tile.meta.uses&&(t=!0,G({message:"A Pickaxe broke"})))})),t&&z(e.tile,e),1}}),Rock:new u({id:"89c89fb8-b343-4767-ba9f-78b4586b4ceb",name:"",description:function(){return Object(g.jsxs)(g.Fragment,{children:["Broken by ",Object(g.jsx)(de,{}),", gives one of ",Object(g.jsx)(ue,{})," ",Object(g.jsx)(fe,{})," ",Object(g.jsx)(je,{})," ",Object(g.jsx)(be,{})]})},icon:function(){return O(ce,Re.Rock)},rarity:f.COMMON,categories:["rock"],calculateValue:function(e){return 1},onRemove:function(e){var t=m(Re.Coal);return G({message:"A broken Rock yielded a ".concat(t.config.name)}),{tiles:[t]}}}),Coal:new u({id:"48217c09-300c-44b0-803e-19f51346227b",icon:ue,rarity:f.COMMON,categories:[],calculateValue:function(e){var t=1;return C(e,(function(e){"Coal"===e.config.name&&(t+=1)})),t}}),Copper_Ore:new u({id:"35e8e354-dcfb-430c-9401-0035b775f00f",icon:fe,rarity:f.COMMON,categories:[],calculateValue:function(e){return 1}}),Iron_Ore:new u({id:"8df321a7-a16d-485e-9b41-aebe784350db",icon:je,rarity:f.COMMON,categories:[],calculateValue:function(e){return 1}}),Silver_Ore:new u({id:"7fa9e325-ca81-48cd-a7d5-8b1203354218",icon:be,rarity:f.UNCOMMON,categories:[],calculateValue:function(e){return 1}})},me="small-health-potion",ge="medium-health-potion",ve="small-mana-potion",pe="medium-mana-potion",Oe="small-elixer",xe="medium-elixer",ye=n.p+"static/media/elixer1.126eb52b.png",Te=n.p+"static/media/elixer2.f677e6cf.png",Ce=n.p+"static/media/healthPotion1.2cc42067.png",ke=n.p+"static/media/healthPotion2.8e645ab4.png",De=n.p+"static/media/manaPotion1.03ef4a80.png",Me=n.p+"static/media/manaPotion2.f6d761fd.png";function Ne(e,t){return C(e,(function(e){if(k(e,t))return e})).reduce((function(e,t){return t&&e.push(t),e}),[])}function we(e,t,n){var a=n.gameData,i=a.gameTiles,c=a.boardTiles,r=i.indexOf(e),s=c.indexOf(r);i[r]=t,t.data.spinValue=W(t,s)}function Ae(e,t){var n=Ne(t,e);return!!n.length&&(z(n[0],t),we(t.tile,m(Se.Small_Elixer),t),!0)}function Ve(e,t,n){var a=Ne(n,e);return a.length>=2&&(z(a[0],n),z(a[1],n),we(n.tile,m(t),n),!0)}var Se={Small_Health_Potion:new u({id:"e77dc97d-8d44-45e4-bbad-deb79574092d",icon:function(){return O(Ce,Re.Small_Health_Potion)},rarity:f.COMMON,categories:[me],calculateValue:function(e){return Ae(ve,e)||Ve(me,Se.Medium_Health_Potion,e)?0:1}}),Medium_Health_Potion:new u({id:"c6d67a75-f151-4503-b04d-2fb535c06c92",icon:function(){return O(ke,Re.Medium_Health_Potion)},rarity:f.UNCOMMON,categories:[ge],calculateValue:function(e){return 2}}),Small_Mana_Potion:new u({id:"d587eba7-246e-46c7-bd55-2f32b0093cf8",icon:function(){return O(De,Re.Small_Mana_Potion)},rarity:f.COMMON,categories:[ve],calculateValue:function(e){return Ae(me,e)||Ve(ve,Se.Medium_Mana_Potion,e)?0:1}}),Medium_Mana_Potion:new u({id:"6c067c0f-eefb-43ce-8f81-0aabd19cacc1",icon:function(){return O(Me,Re.Medium_Mana_Potion)},rarity:f.UNCOMMON,categories:[pe],calculateValue:function(e){return 2}}),Small_Elixer:new u({id:"93a94d4e-7a9d-4d1a-9f8a-3b1586530ca0",icon:function(){return O(ye,Re.Small_Elixer)},rarity:f.RARE,categories:[Oe],calculateValue:function(e){return Ve(Oe,Se.Medium_Elixer,e)?0:5}}),Medium_Elixer:new u({id:"1fb94f1d-880e-41eb-9a29-f14700a22928",icon:function(){return O(Te,Re.Medium_Elixer)},rarity:f.RARE,categories:[xe],calculateValue:function(e){return 10}})},_e=Se,Pe={Empty:new u({id:"04f5df2c-22d6-4e31-8e81-c81f0ba1c4c1",name:"",icon:function(){return O("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Re.Empty)},rarity:f.COMMON,categories:["empty"],calculateValue:function(e){return e.tile.data.spinValue||0}})},Ee=Pe.Empty,Re=Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},Pe),T),he),_e),ae);for(var Ie in Re){Re[Ie].name=Ie.replaceAll("_"," ")}var Be=Object(o.a)(Object.values(Re)),He=Be,Ue=new Map,We=[];function Fe(e){var t=e;return t.superUser||(t.superUser=!1),t.boardTiles||(t.boardTiles=[]),t.ownedTiles||(t.ownedTiles=[]),t.deckTileIds||(t.deckTileIds=[]),t.deckTiles||(t.deckTiles=[]),t.gameTiles||(t.gameTiles=[]),t.gridWidth||(t.gridWidth=3),t.gridHeight||(t.gridHeight=3),t.boardValue||(t.boardValue=0),t.totalCoins||(t.totalCoins=0),t.savedCoins||(t.savedCoins=0),t.lastTotalCoins||(t.lastTotalCoins=0),t.currentTaxPeriod||(t.currentTaxPeriod=0),t.currentTaxPeriodDay||(t.currentTaxPeriodDay=0),t.roundEnded||(t.roundEnded=!1),t.events||(t.events=[]),t.modal||(t.modal=""),t.flags||(t.flags={}),t}function Je(e){var t=function(e){var t=Re[e];return t||console.error(new Error('Tile name "'.concat(e,'" not found'))),t}(e);_(t),function(e){if(e){var t=s.state.gameData.deckTileIds;t.includes(e)||t.push(e)}}(null===t||void 0===t?void 0:t.id)}function Ge(){var e=Fe({});s.state.gameData=e,s.state.tilesToPick=[],Je("Coal"),Je("Pickaxe"),Je("Rock"),function(){var e=s.state.gameData,t=e.deckTileIds,n=e.ownedTiles;e.deckTiles=t.map((function(e){return S(n,e)||m(Ee)}))}(),R(),J()}function Le(){var e,t=localStorage["".concat(N)];if(null===(e=t=t?JSON.parse(t):{})||void 0===e?void 0:e.gameState){var n=Fe(t.gameState);ze(n.ownedTiles),ze(n.deckTiles),ze(n.gameTiles),s.state.gameData=t.gameState}}function ze(e){var t,n=Object(D.a)(e);try{var a=function(){var e=t.value;e.config=He.find((function(t){return t.id===e.config.id}))||Ee};for(n.s();!(t=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}}function Ye(e){var t=e.tile,n=e.showValue,a=e.onClick,i=["tile"];return t.data.highlight&&i.push("highlight"),Object(g.jsxs)("div",{className:i.join(" "),onClick:function(){s.state.selectedTile=t,s.update(),a&&a(t)},children:[!!t.config.topStat&&n&&Object(g.jsx)("div",{className:"top-stat",children:t.config.topStat(t)}),!!t.data.spinValue&&n&&Object(g.jsx)("div",{className:"value",children:t.data.spinValue}),Object(g.jsx)(t.config.icon,{})]})}function Ke(e){var t=e.tiles,n=e.onClickTile;return Object(g.jsx)("div",{className:"inventory",children:t.map((function(e){return Object(g.jsx)(Ye,{tile:e,onClick:n},e.id)}))})}function Qe(){var e=s.state.gameData;e.currentTaxPeriod=0,e.currentTaxPeriodDay=0,e.roundEnded=!1,e.boardTiles=[],e.totalCoins=0,e.events=[],R(),J(),s.state.tilesToPick=[],s.update()}function Xe(){var e=L(),t=s.state.gameData;function n(e,t){return 100*Math.pow(e+1,2)*(t+1)}function a(){var e=Object.keys(f).map((function(){return[]})),n=Object.keys(f).map((function(){return[]})),a=Object.keys(f).map((function(){return 0}));return We.forEach((function(i){n[i.config.rarity].push(i),i.config!==Ee&&(S(t.ownedTiles,i.config.id)?a[i.config.rarity]++:e[i.config.rarity].push(i))})),{availableTilesByRarity:e,allTilesByRarity:n,ownedRarityCounts:a}}var i=a(),c=i.availableTilesByRarity,r=i.allTilesByRarity,o=i.ownedRarityCounts;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"The round is over"}),Object(g.jsxs)("h2",{children:["Saved Coins: ",t.savedCoins," (",t.lastTotalCoins," earned last round)"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"This is your chance to get a new tile. Getting a new tile will increase the cost of the next tile of the same rarity"}),Object(g.jsx)("div",{className:"buy-new-card",children:Object.keys(f).map((function(e,i){var l=f[e],d=n(l,o[i]),u=c[i].length,j=["rarity"],b=!0;return(d>t.savedCoins||0===u)&&(j.push("disabled"),b=!1),Object(g.jsxs)("div",{className:j.join(" "),children:[Object(g.jsx)("div",{className:"name",children:e}),Object(g.jsx)("div",{className:"cost",children:d}),Object(g.jsxs)("div",{className:"remaining-tiles",children:[c[i].length," of"," ",r[i].length," tiles available"]}),b&&Object(g.jsx)("button",{onClick:function(){return function(e){var i=a(),c=i.availableTilesByRarity,r=i.ownedRarityCounts,o=c[e],l=M(0,o.length-1);t.savedCoins-=n(e,r[e]),_(o[l].config),s.update()}(i)},children:"Buy"})]},l)}))})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"Take this time to reorganize your deck"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Deck"}),Object(g.jsxs)("div",{style:{background:e>1?"red":"none"},children:["Deck Score: ",e.toFixed(2)]}),Object(g.jsx)(Ke,{tiles:t.deckTiles,onClickTile:function(e){var n=t.deckTiles.indexOf(e);n>=0&&t.deckTiles.splice(n,1)}})]})]}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Owned Inventory"}),Object(g.jsx)(Ke,{tiles:t.ownedTiles,onClickTile:function(e){t.deckTiles.find((function(t){return t.config.id===e.config.id}))||t.deckTiles.push(e)}})]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"All Tiles"}),Object(g.jsx)(Ke,{tiles:We,onClickTile:function(e){t.ownedTiles.find((function(t){return t.config.id===e.config.id}))||t.ownedTiles.push(m(e.config))}})]}),Object(g.jsx)("button",{onClick:Qe,children:"Next round"})]})}function Ze(e){var t=e.boardTiles,n=e.gameTiles,a=e.width,i=e.height,c={fontSize:"1.5em",gridTemplateColumns:"repeat(".concat(a,", 5em)"),gridTemplateRows:"repeat(".concat(i,", 5em)")};if(0===t.length){var r=m(Ee);return Object(g.jsx)("div",{className:"board",style:c,children:" ".repeat(a*i).split("").map((function(e,t){return Object(g.jsx)(Ye,{tile:r},t)}))})}return Object(g.jsx)("div",{className:"board",style:c,children:t.map((function(e,t){var a=n[e];return Object(g.jsx)(Ye,{tile:a,showValue:!0,onClick:function(){}},a.id)}))})}function qe(e){var t=e.tile,n=e.onClick;if(!t)return null;var a=t.config;return Object(g.jsxs)("div",{className:"tile-details",onClick:n,children:[Object(g.jsx)("div",{className:"name",children:a.name}),Object(g.jsx)("div",{className:"rarity",children:j[a.rarity]}),Object(g.jsx)(t.config.icon,{}),Object(g.jsx)("div",{className:"description",children:a.description&&a.description()})]})}function $e(e){var t=e.events;return Object(g.jsx)("div",{className:"game-events",children:t.map((function(e){return Object(g.jsx)("div",{className:"event",children:Object(g.jsx)("div",{className:"message",children:e.message})},e.id)}))})}Be.forEach((function(e){Ue.set(e.id,e),We.push(m(e))}));var et=n(10);function tt(e){s.state.gameData.modal=e,s.update()}function nt(){s.state.gameData.modal="",s.update()}function at(e){var t=e.children,n=e.style;return console.log(t),Object(g.jsx)("div",{className:"modal",children:Object(g.jsx)("div",{className:"shade",children:Object(g.jsx)("div",{className:"container",style:n,children:t})})})}function it(){var e=s.state.tilesToPick;function t(e){e&&P(e),s.state.gameData.modal="",s.state.tilesToPick=[],s.state.gameData.boardTiles=[],nt()}return Object(g.jsxs)(at,{children:[Object(g.jsx)("h1",{children:"Pick New Tile"}),Object(g.jsx)("div",{className:"pick-a-tile",children:e.map((function(e){return Object(g.jsxs)("div",{className:"option",children:[Object(g.jsx)(qe,{tile:e},e.id),Object(g.jsx)("button",{onClick:function(){t(e)},children:"Select"})]})}))}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return t()},children:"Skip"})]})}function ct(){var e=s.state.gameData,t=L();return Object(g.jsx)(at,{style:{width:"50em"},children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Inventory"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Game Tiles"}),Object(g.jsx)(Ke,{tiles:e.gameTiles})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Deck"}),Object(g.jsxs)("div",{style:{background:t>1?"red":"none"},children:["Deck Score: ",t.toFixed(2)]}),Object(g.jsx)(Ke,{tiles:e.deckTiles})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Owned Inventory"}),Object(g.jsx)(Ke,{tiles:e.ownedTiles})]}),e.superUser&&Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"All Tiles"}),Object(g.jsx)(Ke,{tiles:We,onClickTile:function(t){e.ownedTiles.find((function(e){return e.config.id===t.config.id}))||e.ownedTiles.push(m(t.config))}})]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:nt,children:"Close"})]})})}var rt=[{id:"bbe17879-f3ee-47fc-9e76-2fa8cc0ebc0d",name:"Board Width",cost:function(){return 0},buy:function(){s.state.gameData.gridWidth+=1,I(),s.update()},isComplete:function(){return!1}},{id:"1e0ab330-8ec9-4e41-933d-75251ffa5ee5",name:"Board Height",cost:function(){return 0},buy:function(){s.state.gameData.gridHeight+=1,I(),s.update()},isComplete:function(){return!1}},{id:"0245c559-dd55-4f93-a626-53cc06b17d42",name:"XYZ",cost:function(){return 0},buy:function(){},isComplete:function(){return!1}}];function st(){return Object(g.jsx)("div",{className:"upgrades",children:rt.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:e.name}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:e.buy,children:"Buy"})})]},e.id)}))})}function ot(){return Object(g.jsxs)(at,{children:[Object(g.jsx)("h1",{children:"Upgrades"}),Object(g.jsx)(st,{}),Object(g.jsx)("button",{onClick:nt,children:"Close"})]})}function lt(){var e=s.state.gameData;return Object(g.jsxs)(at,{children:[Object(g.jsx)("h1",{children:"Intro"}),Object(g.jsx)("div",{children:"this is the intro"}),Object(g.jsx)("button",{onClick:function(){e.flags.introDismissed=!0,s.update()},children:"Close"})]})}function dt(){var e=s.state.gameData,t=V[e.currentTaxPeriod];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{fontSize:"3em"},children:[e.totalCoins,Object(g.jsx)("span",{className:"icon-em",children:Object(g.jsx)(y,{})})," ","/ ",t.taxAmount,Object(g.jsx)("span",{className:"icon-em",children:Object(g.jsx)(y,{})})," ","taxes due in ",t.totalDays-e.currentTaxPeriodDay," Days"]}),Object(g.jsxs)("div",{children:["Day ",e.currentTaxPeriod]}),Object(g.jsxs)("div",{children:["Saved Coins: ",e.savedCoins]})]})}function ut(){return Object(g.jsx)(g.Fragment,{children:s.state.selectedTile&&Object(g.jsxs)("div",{style:{position:"fixed",top:"0em",left:"0em",zIndex:1e6,padding:"1em",background:"#333",boxShadow:"0em 0em 1em 0em #000"},children:[Object(g.jsx)(qe,{tile:s.state.selectedTile}),Object(g.jsx)("button",{onClick:function(){s.state.selectedTile=void 0,s.update()},children:"Close"})]})})}function ft(){switch(s.state.gameData.modal){case"PickNewTile":return Object(g.jsx)(it,{});case"Inventory":return Object(g.jsx)(ct,{});case"Upgrades":return Object(g.jsx)(ot,{})}return null}function jt(){var e=s.state.gameData;return Object(g.jsxs)("div",{className:"app",children:[!e.flags.introDismissed&&Object(g.jsx)(lt,{}),Object(g.jsx)(ft,{}),Object(g.jsx)(ut,{}),Object(g.jsxs)("div",{className:"version",children:["Version: ",et.version]}),Object(g.jsxs)("div",{className:"main-container",children:[Object(g.jsx)(dt,{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(g.jsx)(Ze,{boardTiles:e.boardTiles,gameTiles:e.gameTiles,width:e.gridWidth,height:e.gridHeight})}),Object(g.jsx)("br",{}),!s.state.spinning&&Object(g.jsx)("button",{onClick:B,children:"Spin"}),Object(g.jsxs)("div",{style:{fontSize:"2em"},children:["Board value: ",Object(g.jsx)("b",{children:!!e.boardValue&&e.boardValue||0})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Events"}),Object(g.jsx)($e,{events:e.events})]}),Object(g.jsx)("button",{onClick:function(){return tt("Inventory")},children:"Inventory"}),Object(g.jsx)("button",{onClick:function(){return tt("Upgrades")},children:"Upgrades"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){Ge(),w(),s.update()},children:"Reset all game data"}),Object(g.jsx)("button",{onClick:function(){w()},children:"Save game data"}),Object(g.jsx)("button",{onClick:function(){e.roundEnded=!0,s.update()},children:"End Round"})]})]})}Le(),Le();var bt=function(){var e=Object(a.useState)(0)[1];return Object(a.useEffect)((function(){s._update=e}),[e]),s.state.gameData||Ge(),s.state.gameData.roundEnded?Object(g.jsx)(Xe,{}):Object(g.jsx)(jt,{})};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(bt,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7460726b.chunk.js.map