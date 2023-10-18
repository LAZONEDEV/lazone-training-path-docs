"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[5700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Understanding REST APIs"},s="Understanding REST APIs",l={unversionedId:"tutorial-basics/introduction-api-rest",id:"tutorial-basics/introduction-api-rest",title:"Understanding REST APIs",description:"Introduction to REST APIs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-basics/introduction-api-rest.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/introduction-api-rest",permalink:"/lazone-training-path-docs/en/docs/next/tutorial-basics/introduction-api-rest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/introduction-api-rest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Understanding REST APIs"},sidebar:"tutorialSidebar",previous:{title:"Git Convention",permalink:"/lazone-training-path-docs/en/docs/next/tutorial-basics/git/git-conventional-commit-rules"},next:{title:"Understanding GraphQL APIs",permalink:"/lazone-training-path-docs/en/docs/next/tutorial-basics/introduction-api-graphql"}},o={},p=[{value:"Introduction to REST APIs",id:"introduction-to-rest-apis",level:2},{value:"Resources",id:"resources",level:3},{value:"URI (Uniform Resource Identifier)",id:"uri-uniform-resource-identifier",level:3},{value:"HTTP Methods",id:"http-methods",level:3},{value:"Representations",id:"representations",level:3},{value:"Example of a Simple REST API",id:"example-of-a-simple-rest-api",level:2},{value:"Resource: Tasks",id:"resource-tasks",level:3},{value:"Interacting with the REST API",id:"interacting-with-the-rest-api",level:2},{value:"Retrieve List of Tasks",id:"retrieve-list-of-tasks",level:3},{value:"Create a New Task",id:"create-a-new-task",level:3},{value:"Retrieve Details of a Task",id:"retrieve-details-of-a-task",level:3},{value:"Update an Existing Task",id:"update-an-existing-task",level:3},{value:"Delete a Task",id:"delete-a-task",level:3},{value:"Tools for Testing REST APIs",id:"tools-for-testing-rest-apis",level:2},{value:"Postman",id:"postman",level:3},{value:"cURL",id:"curl",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-rest-apis"},"Understanding REST APIs"),(0,r.kt)("h2",{id:"introduction-to-rest-apis"},"Introduction to REST APIs"),(0,r.kt)("p",null,"REST APIs (Representational State Transfer) are an architectural style for designing web services. They rely on fundamental principles that make them simple, scalable, and easy to understand. Here are the key concepts:"),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("p",null,"A resource is an entity that you can manipulate via the API. This can be an object, data, or even a service."),(0,r.kt)("h3",{id:"uri-uniform-resource-identifier"},"URI (Uniform Resource Identifier)"),(0,r.kt)("p",null,"Each resource is uniquely identified by a URI. For example, for a user resource, the URI could be ",(0,r.kt)("inlineCode",{parentName:"p"},"/users"),"."),(0,r.kt)("h3",{id:"http-methods"},"HTTP Methods"),(0,r.kt)("p",null,"HTTP methods (GET, POST, PUT, DELETE, etc.) are used to perform actions on resources. For example, using GET on ",(0,r.kt)("inlineCode",{parentName:"p"},"/users")," can retrieve the list of users."),(0,r.kt)("h3",{id:"representations"},"Representations"),(0,r.kt)("p",null,"The data of a resource can be represented in different formats such as JSON, XML, HTML, etc."),(0,r.kt)("h2",{id:"example-of-a-simple-rest-api"},"Example of a Simple REST API"),(0,r.kt)("p",null,"Let's consider an API for managing a task list."),(0,r.kt)("h3",{id:"resource-tasks"},"Resource: Tasks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Collection URI:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/tasks"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," retrieves the list of tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")," creates a new task."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Individual URI:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/tasks/{id}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," retrieves details of a specific task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUT")," updates an existing task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," deletes a task.")))),(0,r.kt)("h2",{id:"interacting-with-the-rest-api"},"Interacting with the REST API"),(0,r.kt)("h3",{id:"retrieve-list-of-tasks"},"Retrieve List of Tasks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URI:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tasks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example Response (JSON):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {"id": 1, "title": "Go grocery shopping"},\n  {"id": 2, "title": "Learn REST API concepts"}\n]\n')))),(0,r.kt)("h3",{id:"create-a-new-task"},"Create a New Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URI:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tasks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Request Body (JSON):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"title": "Write a tutorial on REST APIs"}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example Response (JSON):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 3, "title": "Review REST concepts"}\n')))),(0,r.kt)("h3",{id:"retrieve-details-of-a-task"},"Retrieve Details of a Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URI:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tasks/3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example Response (JSON):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 3, "title": "Review REST concepts"}\n')))),(0,r.kt)("h3",{id:"update-an-existing-task"},"Update an Existing Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URI:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tasks/3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Request Body (JSON):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"title": "Review REST concepts once more"}\n')))),(0,r.kt)("h3",{id:"delete-a-task"},"Delete a Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URI:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tasks/3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Response (No Body):")," ",(0,r.kt)("inlineCode",{parentName:"li"},"204 No Content"))),(0,r.kt)("h2",{id:"tools-for-testing-rest-apis"},"Tools for Testing REST APIs"),(0,r.kt)("h3",{id:"postman"},"Postman"),(0,r.kt)("p",null,"Postman is a user-friendly tool for testing API requests and responses. You can create requests for each HTTP method and see the responses."),(0,r.kt)("h3",{id:"curl"},"cURL"),(0,r.kt)("p",null,"cURL is a command-line tool that allows you to send HTTP requests directly from the terminal."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Understanding the basic principles of REST APIs is essential for working in modern development. Continue to explore, test, and practice to master the use of REST APIs in your projects."))}d.isMDXComponent=!0}}]);