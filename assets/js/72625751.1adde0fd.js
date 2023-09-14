"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[280],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>v});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),p=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),u=n,v=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return o?t.createElement(v,s(s({ref:a},d),{},{components:o})):t.createElement(v,s({ref:a},d))}));function v(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7965:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=o(7462),n=(o(7294),o(3905));const r={title:"Externos"},s="Aplicativos Externos",i={unversionedId:"applications/standalone",id:"applications/standalone",title:"Externos",description:"Os aplicativos externos, diferente dos aplicativos incorporados que aparecem no Administrador de lojistas, s\xe3o solu\xe7\xf5es independentes e carregam fora do administrador de lojistas. Eles operam de forma aut\xf4noma e podem abranger uma ampla gama de funcionalidades, desde marketing at\xe9 gerenciamento de estoque.",source:"@site/docs/applications/standalone.md",sourceDirName:"applications",slug:"/applications/standalone",permalink:"/devhub-apps/docs/applications/standalone",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/applications/standalone.md",tags:[],version:"current",frontMatter:{title:"Externos"},sidebar:"sidebar",previous:{title:"Incorporados",permalink:"/devhub-apps/docs/applications/native"},next:{title:"Vis\xe3o geral",permalink:"/devhub-apps/docs/design-guidelines/overview"}},l={},p=[{value:"In\xedcio do Desenvolvimento",id:"in\xedcio-do-desenvolvimento",level:2},{value:"Desenvolvendo a partir do template",id:"desenvolvendo-a-partir-do-template",level:3},{value:"Desenvolvendo sem utilizar nosso template",id:"desenvolvendo-sem-utilizar-nosso-template",level:3},{value:"Recomenda\xe7\xf5es",id:"recomenda\xe7\xf5es",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],d={toc:p},c="wrapper";function m(e){let{components:a,...o}=e;return(0,n.kt)(c,(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aplicativos-externos"},"Aplicativos Externos"),(0,n.kt)("p",null,"Os aplicativos externos, diferente dos ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/applications/native"},"aplicativos incorporados")," que aparecem no Administrador de lojistas, s\xe3o solu\xe7\xf5es independentes e carregam fora do administrador de lojistas. Eles operam de forma aut\xf4noma e podem abranger uma ampla gama de funcionalidades, desde marketing at\xe9 gerenciamento de estoque."),(0,n.kt)("h2",{id:"in\xedcio-do-desenvolvimento"},"In\xedcio do Desenvolvimento"),(0,n.kt)("h3",{id:"desenvolvendo-a-partir-do-template"},"Desenvolvendo a partir do template"),(0,n.kt)("p",null,"Nossas ferramentas de desenvolvimento na Nuvemshop incluem ",(0,n.kt)("a",{parentName:"p",href:"../developer-tools/templates#tipos-de-template"},"templates prontos para a cria\xe7\xe3o de aplicativos"),", que abrangem toda a l\xf3gica de ",(0,n.kt)("a",{parentName:"p",href:"../applications/overview#autenticando-seu-aplicativo"},"autentica\xe7\xe3o")," e constru\xe7\xe3o."),(0,n.kt)("p",null,"Ap\xf3s selecionar o template desejado, sugerimos revisar o arquivo ",(0,n.kt)("strong",{parentName:"p"},'"README.md"')," no reposit\xf3rio correspondente. L\xe1, voc\xea encontrar\xe1 orienta\xe7\xf5es detalhadas e passos pr\xe1ticos para aproveitar ao m\xe1ximo as capacidades oferecidas pelos nossos modelos de desenvolvimento."),(0,n.kt)("h3",{id:"desenvolvendo-sem-utilizar-nosso-template"},"Desenvolvendo sem utilizar nosso template"),(0,n.kt)("p",null,"Por outro lado, se voc\xea optar por n\xe3o usar nossos templates, voc\xea pode acessar este ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/applications/authentication"},"guia")," para uma integra\xe7\xe3o manual. Nossa meta \xe9 facilitar o desenvolvimento do seu aplicativo, independentemente do caminho que voc\xea escolher."),(0,n.kt)("h2",{id:"recomenda\xe7\xf5es"},"Recomenda\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Recomendamos utilizar o nosso ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/developer-tools/nimbus"},"Design System Nimbus")," para agilizar a constru\xe7\xe3o da interface do seu aplicativo. Ele com um kit de componentes prontos para uso. \xc9 possivel criar o seu pr\xf3prio ",(0,n.kt)("a",{parentName:"li",href:"https://nimbus.nuvemshop.com.br/documentation/resources/themes"},"tema")," e assim criar a identidade visual da sua marca."),(0,n.kt)("li",{parentName:"ul"},"Recomendamos seguir os conceitos UX/UI definidos pelo nosso time de design. ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/design-guidelines/overview"},"Acesse aqui o guia completo"),"."),(0,n.kt)("li",{parentName:"ul"},"Para aplicativos publicados em nossa loja de aplicatvos recomendamos revisar o nosso ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/homologation/overview"},"checklist de homologa\xe7\xe3o"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/homologation/overview"},"Homologa\xe7\xe3o"))))}m.isMDXComponent=!0}}]);