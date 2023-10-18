"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[6504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},s="Getting Started with Node.js",l={unversionedId:"tutorial-basics/node/node-setup",id:"tutorial-basics/node/node-setup",title:"Getting Started with Node.js",description:"Node.js is a platform built on Chrome's V8 JavaScript engine, designed for building fast and scalable network applications. Follow this tutorial to get started with Node.js.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-basics/node/node-setup.md",sourceDirName:"tutorial-basics/node",slug:"/tutorial-basics/node/node-setup",permalink:"/lazone-training-path-docs/en/docs/next/tutorial-basics/node/node-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/node/node-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NodeJS Tutorial",permalink:"/lazone-training-path-docs/en/docs/next/category/nodejs-tutorial"},next:{title:"Introduction to HTTP Protocol",permalink:"/lazone-training-path-docs/en/docs/next/tutorial-basics/introduction-http-protocol"}},i={},p=[{value:"Step 1: Install Node.js",id:"step-1-install-nodejs",level:2},{value:"Step 2: Create a Node.js Project",id:"step-2-create-a-nodejs-project",level:2},{value:"Step 3: Create a First JavaScript File",id:"step-3-create-a-first-javascript-file",level:2},{value:"Step 4: Run the Server",id:"step-4-run-the-server",level:2},{value:"Step 5: Use NPM Modules",id:"step-5-use-npm-modules",level:2},{value:"Practical Exercises with Nodeschool",id:"practical-exercises-with-nodeschool",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,a.kt)("p",null,"Node.js is a platform built on Chrome's V8 JavaScript engine, designed for building fast and scalable network applications. Follow this tutorial to get started with Node.js."),(0,a.kt)("h2",{id:"step-1-install-nodejs"},"Step 1: Install Node.js"),(0,a.kt)("p",null,"Start by installing Node.js on your machine. You can download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"official Node.js website"),"."),(0,a.kt)("p",null,"Check the installation by opening a terminal and running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,a.kt)("p",null,"These commands should display the versions of Node.js and npm."),(0,a.kt)("h2",{id:"step-2-create-a-nodejs-project"},"Step 2: Create a Node.js Project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a folder for your project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-node-project\ncd my-node-project\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Initialize your Node.js project by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file. Answer the interactive questions or use the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You now have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file that defines your project."))),(0,a.kt)("h2",{id:"step-3-create-a-first-javascript-file"},"Step 3: Create a First JavaScript File"),(0,a.kt)("p",null,"Create a simple JavaScript file, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),", and open it in your favorite text editor."),(0,a.kt)("p",null,"Add the following code to create a basic HTTP server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello, this is a Node.js server!\\n');\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Server listening on port ${PORT}`);\n});\n")),(0,a.kt)("h2",{id:"step-4-run-the-server"},"Step 4: Run the Server"),(0,a.kt)("p",null,"Back in your terminal, run the server with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node app.js\n")),(0,a.kt)("p",null,"Your server is now running at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". Open your browser and visit this URL to see the greeting message."),(0,a.kt)("h2",{id:"step-5-use-npm-modules"},"Step 5: Use NPM Modules"),(0,a.kt)("p",null,"Node.js uses npm (Node Package Manager) to manage dependencies and third-party modules. For example, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," module to create a more advanced web server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express\n")),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," file to use Express:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst app = express();\nconst PORT = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello, this is an Express server!');\n});\n\napp.listen(PORT, () => {\n  console.log(`Server listening on port ${PORT}`);\n});\n")),(0,a.kt)("h2",{id:"practical-exercises-with-nodeschool"},"Practical Exercises with Nodeschool"),(0,a.kt)("p",null,"Install Nodeschool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g learnyounode\nlearnyounode\n")),(0,a.kt)("p",null,"Follow the instructions to complete practical exercises that will teach you the basics of Node.js."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulations, you've created your first Node.js project! Explore further by adding routes, integrating databases, and discovering the vast range of npm modules available. Node.js offers tremendous flexibility for server-side development, and it's a great skill to have for web developers."))}u.isMDXComponent=!0}}]);