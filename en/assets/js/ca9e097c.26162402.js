"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[8545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4,title:"Understanding GraphQL APIs"},o="Introduction to GraphQL APIs",l={unversionedId:"tutorial-basics/introduction-api-graphql",id:"version-1.0/tutorial-basics/introduction-api-graphql",title:"Understanding GraphQL APIs",description:"Understanding GraphQL",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/tutorial-basics/introduction-api-graphql.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/introduction-api-graphql",permalink:"/lazone-training-path-docs/en/docs/tutorial-basics/introduction-api-graphql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/tutorial-basics/introduction-api-graphql.md",tags:[],version:"1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Understanding GraphQL APIs"},sidebar:"tutorialSidebar",previous:{title:"Understanding REST APIs",permalink:"/lazone-training-path-docs/en/docs/tutorial-basics/introduction-api-rest"},next:{title:"REST API vs GraphQL API",permalink:"/lazone-training-path-docs/en/docs/tutorial-basics/comparaison-rest-and-graphql"}},s={},p=[{value:"Understanding GraphQL",id:"understanding-graphql",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:3},{value:"GraphQL Queries",id:"graphql-queries",level:3},{value:"GraphQL Mutations",id:"graphql-mutations",level:3},{value:"Example of a Simple GraphQL API",id:"example-of-a-simple-graphql-api",level:2},{value:"GraphQL Schema",id:"graphql-schema-1",level:3},{value:"GraphQL Queries and Mutations",id:"graphql-queries-and-mutations",level:3},{value:"Retrieve List of Books",id:"retrieve-list-of-books",level:4},{value:"Retrieve a Specific Book",id:"retrieve-a-specific-book",level:4},{value:"Add a New Book",id:"add-a-new-book",level:4},{value:"Delete a Book",id:"delete-a-book",level:4},{value:"Tools for Testing GraphQL APIs",id:"tools-for-testing-graphql-apis",level:2},{value:"GraphiQL",id:"graphiql",level:3},{value:"Insomnia",id:"insomnia",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-graphql-apis"},"Introduction to GraphQL APIs"),(0,r.kt)("h2",{id:"understanding-graphql"},"Understanding GraphQL"),(0,r.kt)("p",null,"GraphQL is a query language and an execution server for APIs, created by Facebook. It allows clients to specify exactly the data they need and nothing more. Here are the key concepts:"),(0,r.kt)("h3",{id:"graphql-schema"},"GraphQL Schema"),(0,r.kt)("p",null,"A schema defines the types of data available and the relationships between them. It serves as a contract between the client and the server."),(0,r.kt)("p",null,"Example GraphQL schema for a blog application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Article {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n}\n\ntype User {\n  id: ID!\n  name: String!\n  articles: [Article!]!\n}\n\ntype Query {\n  articles: [Article!]!\n  user(id: ID!): User!\n}\n")),(0,r.kt)("h3",{id:"graphql-queries"},"GraphQL Queries"),(0,r.kt)("p",null,"Clients send GraphQL queries to request specific data. The query resembles the shape of the desired data."),(0,r.kt)("p",null,"Example GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  articles {\n    title\n    content\n    author {\n      name\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"graphql-mutations"},"GraphQL Mutations"),(0,r.kt)("p",null,"Mutations are used to make modifications to server data, such as creating, updating, or deleting."),(0,r.kt)("p",null,"Example GraphQL mutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createArticle(title: "New Article", content: "Article content", authorId: "1") {\n    id\n    title\n    content\n  }\n}\n')),(0,r.kt)("h2",{id:"example-of-a-simple-graphql-api"},"Example of a Simple GraphQL API"),(0,r.kt)("p",null,"Let's consider a GraphQL API for a library."),(0,r.kt)("h3",{id:"graphql-schema-1"},"GraphQL Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Book {\n  id: ID!\n  title: String!\n  author: String!\n}\n\ntype Query {\n  books: [Book!]!\n  book(id: ID!): Book!\n}\n\ntype Mutation {\n  addBook(title: String!, author: String!): Book!\n  deleteBook(id: ID!): ID!\n}\n")),(0,r.kt)("h3",{id:"graphql-queries-and-mutations"},"GraphQL Queries and Mutations"),(0,r.kt)("h4",{id:"retrieve-list-of-books"},"Retrieve List of Books"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  books {\n    title\n    author\n  }\n}\n")),(0,r.kt)("h4",{id:"retrieve-a-specific-book"},"Retrieve a Specific Book"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  book(id: "1") {\n    title\n    author\n  }\n}\n')),(0,r.kt)("h4",{id:"add-a-new-book"},"Add a New Book"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addBook(title: "GraphQL 101", author: "Unknown Author") {\n    title\n    author\n  }\n}\n')),(0,r.kt)("h4",{id:"delete-a-book"},"Delete a Book"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  deleteBook(id: "1")\n}\n')),(0,r.kt)("h2",{id:"tools-for-testing-graphql-apis"},"Tools for Testing GraphQL APIs"),(0,r.kt)("h3",{id:"graphiql"},"GraphiQL"),(0,r.kt)("p",null,"GraphiQL is an interactive interface for exploring and testing GraphQL APIs. It is often integrated into GraphQL servers."),(0,r.kt)("h3",{id:"insomnia"},"Insomnia"),(0,r.kt)("p",null,"Insomnia is an API testing tool that supports GraphQL. You can send requests and see responses in a clear manner."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"GraphQL provides increased flexibility compared to REST APIs by allowing clients to specify exactly the data they need. Explore, test, and practice to fully understand and master the use of GraphQL APIs in your projects."))}d.isMDXComponent=!0}}]);