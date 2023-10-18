"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[3037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:3,title:"Comprendre les API REST"},l="Comprendre les API REST",s={unversionedId:"tutorial-basics/introduction-api-rest",id:"tutorial-basics/introduction-api-rest",title:"Comprendre les API REST",description:"Introduction aux API REST",source:"@site/docs/tutorial-basics/introduction-api-rest.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/introduction-api-rest",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/introduction-api-rest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/introduction-api-rest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Comprendre les API REST"},sidebar:"tutorialSidebar",previous:{title:"Le protocol HTTP",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/introduction-http-protocol"},next:{title:"Comprendre les API Graphql",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/introduction-api-graphql"}},o={},u=[{value:"Introduction aux API REST",id:"introduction-aux-api-rest",level:2},{value:"Ressources",id:"ressources",level:3},{value:"URI (Uniform Resource Identifier)",id:"uri-uniform-resource-identifier",level:3},{value:"M\xe9thodes HTTP",id:"m\xe9thodes-http",level:3},{value:"Repr\xe9sentations",id:"repr\xe9sentations",level:3},{value:"Exemple d&#39;API REST Simple",id:"exemple-dapi-rest-simple",level:2},{value:"Ressource : T\xe2ches",id:"ressource--t\xe2ches",level:3},{value:"Interaction avec l&#39;API REST",id:"interaction-avec-lapi-rest",level:2},{value:"R\xe9cup\xe9rer la Liste des T\xe2ches",id:"r\xe9cup\xe9rer-la-liste-des-t\xe2ches",level:3},{value:"Cr\xe9er une Nouvelle T\xe2che",id:"cr\xe9er-une-nouvelle-t\xe2che",level:3},{value:"R\xe9cup\xe9rer les D\xe9tails d&#39;une T\xe2che",id:"r\xe9cup\xe9rer-les-d\xe9tails-dune-t\xe2che",level:3},{value:"Mettre \xe0 Jour une T\xe2che Existante",id:"mettre-\xe0-jour-une-t\xe2che-existante",level:3},{value:"Supprimer une T\xe2che",id:"supprimer-une-t\xe2che",level:3},{value:"Outils pour Tester les API REST",id:"outils-pour-tester-les-api-rest",level:2},{value:"Postman",id:"postman",level:3},{value:"Curl",id:"curl",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"comprendre-les-api-rest"},"Comprendre les API REST"),(0,i.kt)("h2",{id:"introduction-aux-api-rest"},"Introduction aux API REST"),(0,i.kt)("p",null,"Les API REST (Representational State Transfer) sont un style d'architecture pour la conception de services web. Elles reposent sur des principes fondamentaux qui les rendent simples, \xe9volutives et faciles \xe0 comprendre. Voici les concepts cl\xe9s :"),(0,i.kt)("h3",{id:"ressources"},"Ressources"),(0,i.kt)("p",null,"Une ressource est une entit\xe9 que vous pouvez manipuler via l'API. Cela peut \xeatre un objet, une donn\xe9e, ou m\xeame un service."),(0,i.kt)("h3",{id:"uri-uniform-resource-identifier"},"URI (Uniform Resource Identifier)"),(0,i.kt)("p",null,"Chaque ressource est identifi\xe9e de mani\xe8re unique par une URI. Par exemple, pour une ressource utilisateur, l'URI pourrait \xeatre ",(0,i.kt)("inlineCode",{parentName:"p"},"/utilisateurs"),"."),(0,i.kt)("h3",{id:"m\xe9thodes-http"},"M\xe9thodes HTTP"),(0,i.kt)("p",null,"Les m\xe9thodes HTTP (GET, POST, PUT, DELETE, etc.) sont utilis\xe9es pour effectuer des actions sur les ressources. Par exemple, l'utilisation de GET sur ",(0,i.kt)("inlineCode",{parentName:"p"},"/utilisateurs")," peut r\xe9cup\xe9rer la liste des utilisateurs."),(0,i.kt)("h3",{id:"repr\xe9sentations"},"Repr\xe9sentations"),(0,i.kt)("p",null,"Les donn\xe9es d'une ressource peuvent \xeatre repr\xe9sent\xe9es dans diff\xe9rents formats tels que JSON, XML, HTML, etc."),(0,i.kt)("h2",{id:"exemple-dapi-rest-simple"},"Exemple d'API REST Simple"),(0,i.kt)("p",null,"Consid\xe9rons une API pour la gestion d'une liste de t\xe2ches."),(0,i.kt)("h3",{id:"ressource--t\xe2ches"},"Ressource : T\xe2ches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"URI de la collection :")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/taches"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"M\xe9thodes :")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," r\xe9cup\xe8re la liste des t\xe2ches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")," cr\xe9e une nouvelle t\xe2che."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"URI individuelle :")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/taches/{id}"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"M\xe9thodes :")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," r\xe9cup\xe8re les d\xe9tails d'une t\xe2che sp\xe9cifique."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," met \xe0 jour une t\xe2che existante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," supprime une t\xe2che.")))),(0,i.kt)("h2",{id:"interaction-avec-lapi-rest"},"Interaction avec l'API REST"),(0,i.kt)("h3",{id:"r\xe9cup\xe9rer-la-liste-des-t\xe2ches"},"R\xe9cup\xe9rer la Liste des T\xe2ches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"M\xe9thode :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/taches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exemple de R\xe9ponse (JSON) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {"id": 1, "titre": "Faire les courses"},\n  {"id": 2, "titre": "Apprendre les API REST"}\n]\n')))),(0,i.kt)("h3",{id:"cr\xe9er-une-nouvelle-t\xe2che"},"Cr\xe9er une Nouvelle T\xe2che"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"M\xe9thode :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/taches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Corps de la Requ\xeate (JSON) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"titre": "R\xe9diger un tutoriel sur les API REST"}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exemple de R\xe9ponse (JSON) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 3, "titre": "R\xe9p\xe9ter les concepts REST"}\n')))),(0,i.kt)("h3",{id:"r\xe9cup\xe9rer-les-d\xe9tails-dune-t\xe2che"},"R\xe9cup\xe9rer les D\xe9tails d'une T\xe2che"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"M\xe9thode :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/taches/3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exemple de R\xe9ponse (JSON) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 3, "titre": "R\xe9p\xe9ter les concepts REST"}\n')))),(0,i.kt)("h3",{id:"mettre-\xe0-jour-une-t\xe2che-existante"},"Mettre \xe0 Jour une T\xe2che Existante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"M\xe9thode :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/taches/3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Corps de la Requ\xeate (JSON) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"titre": "R\xe9p\xe9ter les concepts REST une fois de plus"}\n')))),(0,i.kt)("h3",{id:"supprimer-une-t\xe2che"},"Supprimer une T\xe2che"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"M\xe9thode :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/taches/3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R\xe9ponse (Pas de Corps) :")," ",(0,i.kt)("inlineCode",{parentName:"li"},"204 No Content"))),(0,i.kt)("h2",{id:"outils-pour-tester-les-api-rest"},"Outils pour Tester les API REST"),(0,i.kt)("h3",{id:"postman"},"Postman"),(0,i.kt)("p",null,"Postman est un outil convivial pour tester les requ\xeates et les r\xe9ponses d'une API. Vous pouvez cr\xe9er des requ\xeates pour chaque m\xe9thode HTTP et voir les r\xe9ponses."),(0,i.kt)("h3",{id:"curl"},"Curl"),(0,i.kt)("p",null,"Curl est un outil en ligne de commande qui permet d'envoyer des requ\xeates HTTP directement depuis le terminal."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Comprendre les principes de base des API REST est essentiel pour travailler dans le d\xe9veloppement moderne. Continuez \xe0 explorer, \xe0 tester et \xe0 pratiquer pour ma\xeetriser l'utilisation des API REST dans vos projets."))}d.isMDXComponent=!0}}]);