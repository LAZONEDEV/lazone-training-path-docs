"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[4225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,title:"Commencer avec NodeJs"},s="Tutoriels de d\xe9veloppement avec Node.js",i={unversionedId:"tutorial-basics/node/node-setup",id:"tutorial-basics/node/node-setup",title:"Commencer avec NodeJs",description:"Node.js est une plateforme bas\xe9e sur le moteur JavaScript V8 de Chrome, con\xe7ue pour construire des applications r\xe9seau rapides et \xe9volutives. Suivez ce tutoriel pour d\xe9marrer avec Node.js.",source:"@site/docs/tutorial-basics/node/node-setup.md",sourceDirName:"tutorial-basics/node",slug:"/tutorial-basics/node/node-setup",permalink:"/lazone-training-path-docs/docs/next/tutorial-basics/node/node-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/node/node-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Commencer avec NodeJs"},sidebar:"tutorialSidebar",previous:{title:"NodeJS Tutorial",permalink:"/lazone-training-path-docs/docs/next/category/nodejs-tutorial"},next:{title:"Tutorial - Wordpress",permalink:"/lazone-training-path-docs/docs/next/category/tutorial---wordpress"}},l={},p=[{value:"\xc9tape 1 : Installer Node.js",id:"\xe9tape-1--installer-nodejs",level:2},{value:"\xc9tape 2 : Cr\xe9er un Projet Node.js",id:"\xe9tape-2--cr\xe9er-un-projet-nodejs",level:2},{value:"\xc9tape 3 : Cr\xe9er un Premier Fichier JavaScript",id:"\xe9tape-3--cr\xe9er-un-premier-fichier-javascript",level:2},{value:"\xc9tape 4 : Ex\xe9cuter le Serveur",id:"\xe9tape-4--ex\xe9cuter-le-serveur",level:2},{value:"\xc9tape 5 : Utiliser des Modules NPM",id:"\xe9tape-5--utiliser-des-modules-npm",level:2},{value:"Exercices Pratiques avec Nodeschool",id:"exercices-pratiques-avec-nodeschool",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutoriels-de-d\xe9veloppement-avec-nodejs"},"Tutoriels de d\xe9veloppement avec Node.js"),(0,a.kt)("p",null,"Node.js est une plateforme bas\xe9e sur le moteur JavaScript V8 de Chrome, con\xe7ue pour construire des applications r\xe9seau rapides et \xe9volutives. Suivez ce tutoriel pour d\xe9marrer avec Node.js."),(0,a.kt)("h2",{id:"\xe9tape-1--installer-nodejs"},"\xc9tape 1 : Installer Node.js"),(0,a.kt)("p",null,"Commencez par installer Node.js sur votre machine. Vous pouvez le t\xe9l\xe9charger \xe0 partir du ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"site officiel de Node.js"),"."),(0,a.kt)("p",null,"V\xe9rifiez l'installation en ouvrant un terminal et ex\xe9cutez les commandes suivantes :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,a.kt)("p",null,"Ces commandes devraient afficher les versions de Node.js et npm."),(0,a.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-projet-nodejs"},"\xc9tape 2 : Cr\xe9er un Projet Node.js"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier pour votre projet :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir mon-projet-node\ncd mon-projet-node\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Initialisez votre projet Node.js en cr\xe9ant un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". R\xe9pondez aux questions interactives ou utilisez la commande suivante :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Vous avez maintenant un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," qui d\xe9finit votre projet."))),(0,a.kt)("h2",{id:"\xe9tape-3--cr\xe9er-un-premier-fichier-javascript"},"\xc9tape 3 : Cr\xe9er un Premier Fichier JavaScript"),(0,a.kt)("p",null,"Cr\xe9ez un fichier JavaScript simple, par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),", et ouvrez-le dans votre \xe9diteur de texte favori."),(0,a.kt)("p",null,"Ajoutez le code suivant pour cr\xe9er un serveur HTTP basique :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Bonjour, ceci est un serveur Node.js!\\n');\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Serveur en \xe9coute sur le port ${PORT}`);\n});\n")),(0,a.kt)("h2",{id:"\xe9tape-4--ex\xe9cuter-le-serveur"},"\xc9tape 4 : Ex\xe9cuter le Serveur"),(0,a.kt)("p",null,"De retour dans votre terminal, ex\xe9cutez le serveur avec la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node app.js\n")),(0,a.kt)("p",null,"Votre serveur est maintenant en cours d'ex\xe9cution sur ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". Ouvrez votre navigateur et visitez cette URL pour voir le message de salutation."),(0,a.kt)("h2",{id:"\xe9tape-5--utiliser-des-modules-npm"},"\xc9tape 5 : Utiliser des Modules NPM"),(0,a.kt)("p",null,"Node.js utilise npm (Node Package Manager) pour g\xe9rer les d\xe9pendances et les modules tiers. Par exemple, installez le module ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," pour cr\xe9er un serveur web plus avanc\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express\n")),(0,a.kt)("p",null,"Modifiez votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," pour utiliser Express :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst app = express();\nconst PORT = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Bonjour, ceci est un serveur Express!');\n});\n\napp.listen(PORT, () => {\n  console.log(`Serveur en \xe9coute sur le port ${PORT}`);\n});\n")),(0,a.kt)("h2",{id:"exercices-pratiques-avec-nodeschool"},"Exercices Pratiques avec Nodeschool"),(0,a.kt)("p",null,"Installer Nodeschool :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g learnyounode\nlearnyounode\n")),(0,a.kt)("p",null,"Suivez les instructions pour compl\xe9ter les exercices pratiques qui vous apprendront les bases de Node.js."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"F\xe9licitations, vous avez cr\xe9\xe9 votre premier projet Node.js! Explorez davantage en ajoutant des routes, en int\xe9grant des bases de donn\xe9es, et en d\xe9couvrant la vaste gamme de modules npm disponibles. Node.js offre une flexibilit\xe9 \xe9norme pour le d\xe9veloppement c\xf4t\xe9 serveur, et c'est une excellente comp\xe9tence \xe0 acqu\xe9rir pour les d\xe9veloppeurs web."))}d.isMDXComponent=!0}}]);