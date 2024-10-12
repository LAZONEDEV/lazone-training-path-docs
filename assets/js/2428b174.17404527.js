"use strict";(self.webpackChunklazone_learning_path=self.webpackChunklazone_learning_path||[]).push([[7225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={slug:"displaying-dynamic-value-wordpress-elementor",title:"Utilisation des shortcode de WordPress pour l'affichage de value dynamic dans Elementor",authors:["bocovo"],tags:["wordpress","elementor","shortcode"]},s=void 0,i={permalink:"/lazone-training-path-docs/blog/displaying-dynamic-value-wordpress-elementor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-12-displaying-dynamic-value-wordpress-elementor.md/index.md",source:"@site/blog/2024-10-12-displaying-dynamic-value-wordpress-elementor.md/index.md",title:"Utilisation des shortcode de WordPress pour l'affichage de value dynamic dans Elementor",description:"Dans un site WordPress, il arrive souvent que vous ayez besoin d\u2019afficher des valeurs dynamiques, c\u2019est-\xe0-dire des informations calcul\xe9es ou g\xe9n\xe9r\xe9es automatiquement en fonction de certaines conditions.",date:"2024-10-12T00:00:00.000Z",formattedDate:"12 octobre 2024",tags:[{label:"wordpress",permalink:"/lazone-training-path-docs/blog/tags/wordpress"},{label:"elementor",permalink:"/lazone-training-path-docs/blog/tags/elementor"},{label:"shortcode",permalink:"/lazone-training-path-docs/blog/tags/shortcode"}],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"Juste BOCOVO",title:"LA ZONE Core Team",url:"https://github.com/BOCOVO",imageURL:"https://avatars.githubusercontent.com/u/51182814?s=400&u=041944ac217049f73b988f8e9233155ef64a882f&v=4",key:"bocovo"}],frontMatter:{slug:"displaying-dynamic-value-wordpress-elementor",title:"Utilisation des shortcode de WordPress pour l'affichage de value dynamic dans Elementor",authors:["bocovo"],tags:["wordpress","elementor","shortcode"]}},l={authorsImageUrls:[void 0]},u=[{value:"Cr\xe9er un shortcode pour afficher une valeur dynamique",id:"cr\xe9er-un-shortcode-pour-afficher-une-valeur-dynamique",level:2},{value:"\xc9tape 1 : D\xe9claration du shortcode",id:"\xe9tape-1--d\xe9claration-du-shortcode",level:3},{value:"Explication du code",id:"explication-du-code",level:3},{value:"\xc9tape 2 : Utiliser le shortcode dans Elementor",id:"\xe9tape-2--utiliser-le-shortcode-dans-elementor",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dans un site WordPress, il arrive souvent que vous ayez besoin d\u2019afficher des valeurs dynamiques, c\u2019est-\xe0-dire des informations calcul\xe9es ou g\xe9n\xe9r\xe9es automatiquement en fonction de certaines conditions.\nSi vous utilisez Elementor pour concevoir vos pages, il existe plusieurs m\xe9thodes pour int\xe9grer ces valeurs dans vos widgets. L\u2019une des plus simples et des plus puissantes consiste \xe0 utiliser les ",(0,o.kt)("strong",{parentName:"p"},"shortcodes")," de WordPress."),(0,o.kt)("p",null,"Les shortcodes permettent de cr\xe9er du contenu dynamique que vous pouvez r\xe9utiliser facilement dans vos pages, articles, ou m\xeame dans les widgets Elementor. Que vous souhaitiez afficher une date, une diff\xe9rence de valeur (comme le nombre d'ann\xe9es d'exercice d'une entreprise), un prix calcul\xe9 ou des donn\xe9es provenant d\u2019un champ personnalis\xe9, les shortcodes offrent une solution flexible et rapide."),(0,o.kt)("h2",{id:"cr\xe9er-un-shortcode-pour-afficher-une-valeur-dynamique"},"Cr\xe9er un shortcode pour afficher une valeur dynamique"),(0,o.kt)("p",null,"Prenons un exemple o\xf9 nous voulons afficher le nombre d'ann\xe9es d'exercice de l'entreprise, sachant que celle-ci a \xe9t\xe9 cr\xe9\xe9e en 2019. Pour obtenir ce nombre, nous devons simplement soustraire l'ann\xe9e 2019 de l'ann\xe9e en cours. Nous allons cr\xe9er un shortcode dans WordPress pour effectuer cette t\xe2che."),(0,o.kt)("h3",{id:"\xe9tape-1--d\xe9claration-du-shortcode"},"\xc9tape 1 : D\xe9claration du shortcode"),(0,o.kt)("p",null,"La d\xe9claration du shortcode se fait en PHP. La fa\xe7on la plus simple est de le d\xe9clarer dans le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"functions.php")," du th\xe8me, mais cela peut \xeatre ",(0,o.kt)("strong",{parentName:"p"},"\xe9cras\xe9 en cas de mise \xe0 jour")," du th\xe8me. Une alternative est de le faire dans le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"functions.php")," d\u2019un ",(0,o.kt)("strong",{parentName:"p"},"th\xe8me enfant"),", si votre configuration WordPress en poss\xe8de un. Cependant, tous les sites n'utilisent pas de th\xe8me enfant."),(0,o.kt)("p",null,"Une troisi\xe8me option consiste \xe0 utiliser un plugin qui permet d\u2019ajouter du code PHP personnalis\xe9. Un plugin recommand\xe9 pour cela est ",(0,o.kt)("strong",{parentName:"p"},"Custom CSS, JS & PHP"),"."),(0,o.kt)("p",null,"Apr\xe8s l\u2019installation, allez depuis le backoffice WP dans ",(0,o.kt)("strong",{parentName:"p"},"Outils > Custom PHP")," pour ajouter du code PHP personnalis\xe9."),(0,o.kt)("p",null,"Pour notre exemple, voici le code \xe0 ajouter :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nfunction get_number_of_years_in_business() {\n    $annee_string = date(\"Y\");\n    $annee_int = (int) $annee_string;\n    return $annee_int - 2019;\n}\n\nadd_shortcode('number_of_years_in_business', 'get_number_of_years_in_business');\n")),(0,o.kt)("h3",{id:"explication-du-code"},"Explication du code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Nous d\xe9clarons une fonction ",(0,o.kt)("inlineCode",{parentName:"li"},"get_number_of_years_in_business")," qui calcule le nombre d'ann\xe9es d'exercice de l'entreprise et nous le retourne."),(0,o.kt)("li",{parentName:"ol"},"L'appel de la fonction ",(0,o.kt)("inlineCode",{parentName:"li"},"add_shortcode")," de WordPress nous permet d'enregistrer le shortcode sous le nom ",(0,o.kt)("inlineCode",{parentName:"li"},"number_of_years_in_business")," et de d\xe9finir ",(0,o.kt)("inlineCode",{parentName:"li"},"get_number_of_years_in_business")," comme fonction associ\xe9e.")),(0,o.kt)("h3",{id:"\xe9tape-2--utiliser-le-shortcode-dans-elementor"},"\xc9tape 2 : Utiliser le shortcode dans Elementor"),(0,o.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 le shortcode, vous pouvez l'utiliser directement dans un widget Texte ou HTML d'Elementor. Par exemple, dans un widget Texte, vous pouvez ins\xe9rer le shortcode suivant :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"[number_of_years_in_business]\n")),(0,o.kt)("p",null,"Vous pouvez suivre ce lien pour voir plus en d\xe9tail comment ajouter un shortcode dans Elementor : ",(0,o.kt)("a",{parentName:"p",href:"https://elementor.com/help/dynamic-shortcode-pro/"},"https://elementor.com/help/dynamic-shortcode-pro/")),(0,o.kt)("p",null,"Lorsque vous affichez la page sur le front-end, Elementor interpr\xe9tera le shortcode et affichera le nombre d'ann\xe9es d'exercice de l'entreprise."))}p.isMDXComponent=!0}}]);