(this.webpackJsonpvikings_nft_minting_dapp=this.webpackJsonpvikings_nft_minting_dapp||[]).push([[0],{247:function(n,t){},256:function(n,t){},274:function(n,t){},276:function(n,t){},295:function(n,t){},296:function(n,t){},359:function(n,t){},361:function(n,t){},394:function(n,t){},396:function(n,t){},397:function(n,t){},402:function(n,t){},404:function(n,t){},410:function(n,t){},412:function(n,t){},425:function(n,t){},437:function(n,t){},440:function(n,t){},445:function(n,t){},453:function(n,t){},462:function(n,t){},464:function(n,t){},534:function(n,t,e){},535:function(n,t,e){"use strict";e.r(t);var c,r,a,o,i,s,l,d,u,p,x,j,b,g,h,f,O=e(1),y=e(86),m=e.n(y),C=e(57),v=e(16),w=e.n(v),A=e(43),S=e(70),E=e(14),T=e(59),N=e(69),_=e.n(N),k=e(221),D=e.n(k),M=e(71),I=e(222),L=e(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},n),{},{account:t.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},K),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},P=Object(M.b)({blockchain:F,data:U}),B=[I.a],W=Object(M.c)(M.a.apply(void 0,B)),Y=Object(M.d)(P,W),z=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(A.a)(w.a.mark((function n(t){var e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(z("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},G=function(n){return{type:"CONNECTION_FAILED",payload:n}},Q=function(n){return function(){var t=Object(A.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(H());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},X=e(15),q=X.a.div(c||(c=Object(E.a)(["\n  \n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),J=X.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=X.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=X.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=X.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),nn=X.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),tn=X.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(X.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 24px;\n  line-height: 1.6;\n"])))),cn=(X.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),rn=X.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  margin-left: 10px;\n"]))),an=(X.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),X.a.div(b||(b=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),on=X.a.img(g||(g=Object(E.a)(["\n  width: 500px;\n  @media (min-width: 767px) {\n    width: 500px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=X.a.img(h||(h=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid var(--secondary-dark);\n  background-color: var(--accent);\n  border-radius: 20px;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),ln=X.a.a(f||(f=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dn=function(){var n,t,e,c="/config/images/slow-viking-loop.gif",r=Object(T.b)(),a=Object(T.c)((function(n){return n.blockchain})),o=Object(T.c)((function(n){return n.data})),i=Object(O.useState)(!1),s=Object(S.a)(i,2),l=s[0],d=s[1],u=Object(O.useState)("Chests guarenteed with mint!"),p=Object(S.a)(u,2),x=p[0],j=p[1],b=Object(O.useState)(1),g=Object(S.a)(b,2),h=g[0],f=g[1],y=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),m=Object(S.a)(y,2),v=m[0],E=m[1],N=function(){var n=v.WEI_COST,t=v.GAS_LIMIT,e=String(n*h),c=String(t*h);console.log("Cost: ",e),console.log("Gas limit: ",c),j("Minting your ".concat(v.NFT_NAME,"...")),d(!0),a.smartContract.methods.mint(h).send({gasLimit:String(c),to:v.CONTRACT_ADDRESS,from:a.account,value:e}).once("error",(function(n){console.log(n),j("Sorry, something went wrong please try again later."),d(!1)})).then((function(n){console.log(n),j("Awesome, ".concat(v.NFT_NAME," is yours! go visit Opensea.io to view it.")),d(!1),r(H(a.account))}))},k=function(){""!==a.account&&null!==a.smartContract&&r(H(a.account))},M=function(){var n=Object(A.a)(w.a.mark((function n(){var t,e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,E(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){M()}),[]),Object(O.useEffect)((function(){k()}),[a.account]),Object(cn.jsx)(q,{style:(n={background:"#EFEFBB"},Object(C.a)(n,"background","-webkit-liniar-gradient(to right, #D4D3DD, #EFEFBB)"),Object(C.a)(n,"background","linear-gradient(to right, #D4D3DD, #EFEFBB)"),Object(C.a)(n,"display","flex"),n),children:Object(cn.jsxs)(nn,{flex:1,ai:"center",style:{padding:24},children:[Object(cn.jsx)(on,{alt:"logo",src:"/config/images/logo.png"}),Object(cn.jsx)(V,{}),Object(cn.jsxs)(an,{flex:1,style:{padding:24},test:!0,children:[Object(cn.jsx)(nn,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(sn,{alt:"viking",src:c})}),Object(cn.jsx)($,{}),Object(cn.jsxs)(nn,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px solid var(--secondary-dark)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)",minWidth:450,marginRight:15,marginLeft:15},image:v.SHOW_BACKGROUND?"/config/images/bg.jpg":null,children:[Object(cn.jsxs)(tn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"#eee",background:"#769bdf",borderRadius:"10px",margin:"15px 0 7px",padding:"5px 10px"},children:[o.totalSupply," / ",v.MAX_SUPPLY]}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(cn.jsx)(ln,{target:"_blank",href:v.SCAN_LINK,children:(t=v.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(cn.jsx)(V,{}),Number(o.totalSupply)>=v.MAX_SUPPLY?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",v.NFT_NAME," on"]}),Object(cn.jsx)(V,{}),Object(cn.jsx)(ln,{target:"_blank",href:v.MARKETPLACE_LINK,children:v.MARKETPLACE})]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",v.SYMBOL," ",v.DISPLAY_COST," ",v.NETWORK.SYMBOL]}),Object(cn.jsx)(J,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:"18px",marginTop:"-15px"},children:"Excluding gas fees"}),Object(cn.jsx)(V,{}),""===a.account||null===a.smartContract?Object(cn.jsxs)(nn,{ai:"center",jc:"center",children:[Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",v.NETWORK.NAME," network"]}),Object(cn.jsx)(V,{}),Object(cn.jsx)(rn,{onClick:function(n){n.preventDefault(),r(function(){var n=Object(A.a)(w.a.mark((function n(t){var e,c,r,a,o,i,s,l,d;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return _.a.setProvider(i),s=new D.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(d=new _.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(Q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(G("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(G("Something went wrong."));case 31:n.next=34;break;case 33:t(G("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),k()},children:"CONNECT"}),""!==a.errorMsg?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(V,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:a.errorMsg})]}):null]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(cn.jsx)(Z,{}),Object(cn.jsx)(nn,{ai:"center",jc:"center",fd:"row",children:null}),Object(cn.jsx)(V,{}),Object(cn.jsxs)(nn,{ai:"center",jc:"center",fd:"row",children:[Object(cn.jsx)(rn,{disabled:l?1:0,onClick:function(n){n.preventDefault(),f(1),N(),k()},children:l?"BUSY":"MINT 1"}),Object(cn.jsx)(rn,{disabled:l?1:0,onClick:function(n){n.preventDefault(),f(2),N(),k()},children:l?"BUSY":"MINT 2"}),Object(cn.jsx)(rn,{disabled:l?1:0,onClick:function(n){n.preventDefault(),f(3),N(),k()},children:l?"BUSY":"MINT 3"})]})]})]}),Object(cn.jsx)(Z,{})]}),Object(cn.jsx)($,{}),Object(cn.jsx)(nn,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(sn,{alt:"viking",src:c,style:{transform:"scaleX(-1)"}})})]}),Object(cn.jsx)(Z,{}),Object(cn.jsxs)(nn,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(cn.jsxs)(en,{style:{textAlign:"center",fontSize:"18px",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",v.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(cn.jsx)(V,{}),Object(cn.jsxs)(en,{style:{textAlign:"center",fontSize:"18px",color:"var(--primary-text)"},children:["We have set the gas limit to ",v.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},un=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,539)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};e(534);m.a.render(Object(cn.jsx)(T.a,{store:Y,children:Object(cn.jsx)(dn,{})}),document.getElementById("root")),un()}},[[535,1,2]]]);
//# sourceMappingURL=main.232db277.chunk.js.map