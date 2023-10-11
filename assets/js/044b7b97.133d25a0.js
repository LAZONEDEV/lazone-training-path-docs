"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[8782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:5,title:"API Rest vs API Graphql"},i="Comparaison entre les API REST et les API GraphQL",o={unversionedId:"tutorial-basics/comparaison-rest-and-graphql",id:"tutorial-basics/comparaison-rest-and-graphql",title:"API Rest vs API Graphql",description:"Les API REST (Representational State Transfer) et les API GraphQL sont deux approches diff\xe9rentes pour concevoir des interfaces pour les services web. Chacune a ses propres avantages et est adapt\xe9e \xe0 des cas d'utilisation sp\xe9cifiques. Voici une comparaison entre les deux :",source:"@site/docs/tutorial-basics/comparaison-rest-and-graphql.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/comparaison-rest-and-graphql",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/comparaison-rest-and-graphql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/comparaison-rest-and-graphql.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"API Rest vs API Graphql"},sidebar:"tutorialSidebar",previous:{title:"Comprendre les API Graphql",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/introduction-api-graphql"},next:{title:"NodeJS Tutorial",permalink:"/lazone-training-path-docs/docs/next/category/nodejs-tutorial"}},l={},p=[{value:"Architecture",id:"architecture",level:2},{value:"API REST",id:"api-rest",level:3},{value:"API GraphQL",id:"api-graphql",level:3},{value:"Flexibilit\xe9 des Requ\xeates",id:"flexibilit\xe9-des-requ\xeates",level:2},{value:"API REST",id:"api-rest-1",level:3},{value:"API GraphQL",id:"api-graphql-1",level:3},{value:"Performance",id:"performance",level:2},{value:"API REST",id:"api-rest-2",level:3},{value:"API GraphQL",id:"api-graphql-2",level:3},{value:"Versioning",id:"versioning",level:2},{value:"API REST",id:"api-rest-3",level:3},{value:"API GraphQL",id:"api-graphql-3",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"comparaison-entre-les-api-rest-et-les-api-graphql"},"Comparaison entre les API REST et les API GraphQL"),(0,s.kt)("p",null,"Les API REST (Representational State Transfer) et les API GraphQL sont deux approches diff\xe9rentes pour concevoir des interfaces pour les services web. Chacune a ses propres avantages et est adapt\xe9e \xe0 des cas d'utilisation sp\xe9cifiques. Voici une comparaison entre les deux :"),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("h3",{id:"api-rest"},"API REST"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Architecture bas\xe9e sur les ressources :")," Les ressources (par exemple, ",(0,s.kt)("inlineCode",{parentName:"li"},"/utilisateurs"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"/articles"),") sont expos\xe9es en tant que points d'acc\xe8s distincts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Point de terminaison unique pour chaque ressource :")," Chaque ressource a g\xe9n\xe9ralement un point de terminaison d\xe9di\xe9 (URL) pour effectuer des op\xe9rations CRUD.")),(0,s.kt)("h3",{id:"api-graphql"},"API GraphQL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Architecture bas\xe9e sur le graphe :")," Les donn\xe9es sont mod\xe9lis\xe9es sous forme de graphe, o\xf9 les relations entre les entit\xe9s sont clairement d\xe9finies."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Point de terminaison unique pour toutes les requ\xeates :")," Une seule URL est utilis\xe9e pour toutes les requ\xeates GraphQL, avec un sch\xe9ma d\xe9crivant les types et les op\xe9rations possibles.")),(0,s.kt)("h2",{id:"flexibilit\xe9-des-requ\xeates"},"Flexibilit\xe9 des Requ\xeates"),(0,s.kt)("h3",{id:"api-rest-1"},"API REST"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Donn\xe9es pr\xe9d\xe9finies :")," Les points de terminaison REST renvoient des donn\xe9es pr\xe9d\xe9finies, g\xe9n\xe9ralement dans un format JSON."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Surcharge d'informations :")," Les clients peuvent recevoir plus d'informations que n\xe9cessaire, ce qui peut entra\xeener une surcharge de bande passante.")),(0,s.kt)("h3",{id:"api-graphql-1"},"API GraphQL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Requ\xeates sur mesure :")," Les clients sp\xe9cifient exactement les donn\xe9es dont ils ont besoin, \xe9vitant ainsi la surcharge d'informations inutiles."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"R\xe9cup\xe9ration de donn\xe9es optimis\xe9e :")," Les clients peuvent obtenir toutes les donn\xe9es n\xe9cessaires en une seule requ\xeate.")),(0,s.kt)("h2",{id:"performance"},"Performance"),(0,s.kt)("h3",{id:"api-rest-2"},"API REST"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sous-fetching et sur-fetching :")," Les clients peuvent souffrir de sous-fetching (pas assez de donn\xe9es) ou de sur-fetching (trop de donn\xe9es) en fonction de la conception des points de terminaison.")),(0,s.kt)("h3",{id:"api-graphql-2"},"API GraphQL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\xc9vite le sous-fetching et le sur-fetching :")," Les clients obtiennent exactement les donn\xe9es dont ils ont besoin, \xe9vitant les probl\xe8mes de sous-fetching ou de sur-fetching.")),(0,s.kt)("h2",{id:"versioning"},"Versioning"),(0,s.kt)("h3",{id:"api-rest-3"},"API REST"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Versioning explicite :")," Souvent, le versioning est g\xe9r\xe9 en ajoutant une version \xe0 l'URL (par exemple, ",(0,s.kt)("inlineCode",{parentName:"li"},"/v1/utilisateurs"),").")),(0,s.kt)("h3",{id:"api-graphql-3"},"API GraphQL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\xc9volution du sch\xe9ma :")," Les changements dans le sch\xe9ma GraphQL peuvent \xeatre g\xe9r\xe9s de mani\xe8re plus souple, \xe9vitant le besoin de versioning explicite dans l'URL.")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"En r\xe9sum\xe9, le choix entre une API REST et une API GraphQL d\xe9pend des besoins sp\xe9cifiques du projet. Les API REST offrent une approche simple bas\xe9e sur les ressources, tandis que les API GraphQL offrent une flexibilit\xe9 accrue en permettant aux clients de sp\xe9cifier les donn\xe9es exactes dont ils ont besoin. Choisir entre les deux d\xe9pend du contexte, des besoins de l'application et des pr\xe9f\xe9rences de l'\xe9quipe de d\xe9veloppement."))}d.isMDXComponent=!0}}]);