"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[326],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,m=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),l=o,h=d["".concat(m,".").concat(l)]||d[l]||u[l]||i;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=l;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[d]="string"==typeof t?t:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3,title:"Components and Patterns"},r="Using Components and Patterns",s={unversionedId:"design-guidelines/component-usage",id:"design-guidelines/component-usage",title:"Components and Patterns",description:"Nimbus components are elements that enable creating custom interfaces as needed and should be used when there is no standard or template that meets the use case. When applying these templates, the goal is to ensure cohesion with Nuvemshop products and maintain consistency of use with existing interfaces.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/design-guidelines/component-usage.md",sourceDirName:"design-guidelines",slug:"/design-guidelines/component-usage",permalink:"/devhub-apps/en/docs/design-guidelines/component-usage",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/design-guidelines/component-usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Components and Patterns"},sidebar:"sidebar",previous:{title:"Use of Design Templates",permalink:"/devhub-apps/en/docs/design-guidelines/template-usage"},next:{title:"UX/UI Concepts",permalink:"/devhub-apps/en/docs/design-guidelines/concept-usage"}},m={},p=[{value:"Atomic and Composite Components",id:"atomic-and-composite-components",level:2},{value:"Component Categorization",id:"component-categorization",level:3},{value:"Component Assignments",id:"component-assignments",level:3},{value:"Composition Patterns",id:"composition-patterns",level:2},{value:"What Are Nimbus Patterns?",id:"what-are-nimbus-patterns",level:3},{value:"How to Choose the Right Patterns?",id:"how-to-choose-the-right-patterns",level:3},{value:"Form Components",id:"form-components",level:2},{value:"Form Field Pattern",id:"form-field-pattern",level:3},{value:"Customization and Flexibility",id:"customization-and-flexibility",level:2},{value:"Prohibited Overrides",id:"prohibited-overrides",level:3},{value:"Pattern Construction",id:"pattern-construction",level:3},{value:"Local Component Construction",id:"local-component-construction",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-components-and-patterns"},"Using Components and Patterns"),(0,o.kt)("p",null,"Nimbus components are elements that enable creating custom interfaces as needed and should be used when there is no standard or template that meets the use case. When applying these templates, the goal is to ensure cohesion with Nuvemshop products and maintain consistency of use with existing interfaces."),(0,o.kt)("p",null,"Paying attention to component assignments is crucial to preserve consistency of experience, making navigation easier for users already familiar with Nuvemshop."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/devhub-apps/en/docs/homologation/checklist#component-and-pattern-usage---high-priority"},"Check the homologation checklist")),(0,o.kt)("h2",{id:"atomic-and-composite-components"},"Atomic and Composite Components"),(0,o.kt)("h3",{id:"component-categorization"},"Component Categorization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Atomic Components:")," are essential elements of the design system and are indivisible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Composite Components:")," are compositions of atomic components.")),(0,o.kt)("h3",{id:"component-assignments"},"Component Assignments"),(0,o.kt)("p",null,"Each component falls into a category of assignment, in order to maintain consistency of experience across different apps and products, it is necessary to follow the uses described below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Assignment"),(0,o.kt)("th",{parentName:"tr",align:null},"Components"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Navigation/Action"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/button"},"Button"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/icon-button"},"Icon Button"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/link"},"Link"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toggle"},"Toggle"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Forms"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/input"},"Input"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/textarea"},"Textarea"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/checkbox"},"Checkbox"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/radio"},"Radio"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/select"},"Select"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader"},"File Uploader"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Organization"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/box"},"Box"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/chip"},"Chip"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/list"},"List"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/popover"},"Popover"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/table"},"Table"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/accordion"},"Accordion"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/sidebar"},"Sidebar"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/card"},"Card"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/modal"},"Modal"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/pagination"},"Pagination"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/tabs"},"Tabs"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Informative/Decorative"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/title"},"Title"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/text"},"Text"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/label"},"Label"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/badge"},"Badge"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/tag"},"Tag"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toast"},"Toast"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/alert"},"Alert"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/icon"},"Icon"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/thumbnail"},"Thumbnail"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/tooltip"},"Tooltip"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/spinner"},"Spinner"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/skeleton"},"Skeleton"),".")))),(0,o.kt)("h2",{id:"composition-patterns"},"Composition Patterns"),(0,o.kt)("h3",{id:"what-are-nimbus-patterns"},"What Are Nimbus Patterns?"),(0,o.kt)("p",null,"Nimbus has a variety of patterns that essentially bring together atomic and composite components combined with Nuvemshop's business rules. These resources promote greater consistency and optimize the construction of native and partner products."),(0,o.kt)("h3",{id:"how-to-choose-the-right-patterns"},"How to Choose the Right Patterns?"),(0,o.kt)("p",null,"To understand which patterns we should use, it is necessary to analyze the experience we are designing and look for similar applications within the range of existing use cases."),(0,o.kt)("p",null,"Below, we categorize patterns by functionality. To learn more about their assignments, we recommend reading their documentation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Functionality"),(0,o.kt)("th",{parentName:"tr",align:null},"Components"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Element Organization"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/data-list"},"Data List"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/data-table"},"Data Table"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/product-updates"},"Product Updates"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/interactive-list"},"Interactive List"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/side-modal"},"Side Modal"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/layout"},"Layout"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/app-shell"},"App Shell"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"Page"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interactive"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/callout-card"},"Callout Card"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/menu"},"Menu"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/menu-button"},"Menu Button"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/nav-tabs"},"Nav Tabs"),", ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/thumbnail-with-action"},"Thumbnail with action"),", and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/formfield"},"Form Field"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Informational"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/empty-message"},"Empty Message")," and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/help-link"},"Help Link"),".")))),(0,o.kt)("p",null,"Pattern Customization Limits\nIn order to maintain consistency, which is the main focus of this resource, we must adhere to the limitations of property customization, not including or rearranging elements arbitrarily through overrides. In other words, we must always prioritize consistency with the rest of the products and applications."),(0,o.kt)("h2",{id:"form-components"},"Form Components"),(0,o.kt)("p",null,"To receive or send data, we must respect usage recommendations according to the type of information. Below, we separate form components and the corresponding types of information they can send/receive."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type of Information"),(0,o.kt)("th",{parentName:"tr",align:null},"Component"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Short Text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/input"},"Input"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Long Text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/textarea"},"Textarea"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Multiple Choice Selection"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/checkbox"},"Checkbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Single Choice Selection"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/radio"},"Radio")," and ",(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/select"},"Select"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Image and/or Files"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader"},"File Uploader"))))),(0,o.kt)("h3",{id:"form-field-pattern"},"Form Field Pattern"),(0,o.kt)("p",null,"Nimbus provides a Form Field pattern that combines the Label and Helper Text with the main form fields and their respective appearances, making it easier to implement by our teams and partners."),(0,o.kt)("p",null,"Field Specification"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Labels")," - Form fields should be clearly labeled, making it clear what type of information we expect to receive; we can do this using the Label component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Helper Text")," - Fields can also be accompanied by helper texts, guiding users to enter valid information or indicating fields that have been filled out incorrectly or incompletely."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Appearance")," - Components have standard, error, success, and danger states to support validations and should be marked whenever a validation occurs."),(0,o.kt)("h2",{id:"customization-and-flexibility"},"Customization and Flexibility"),(0,o.kt)("h3",{id:"prohibited-overrides"},"Prohibited Overrides"),(0,o.kt)("p",null,"Customization of components should be restricted to the properties available in Storybook and the UI Kit, and the practice of overrides is prohibited. If there is a need for modification or addition of properties, a discussion should be opened in the Github repository."),(0,o.kt)("h3",{id:"pattern-construction"},"Pattern Construction"),(0,o.kt)("p",null,"It is allowed to construct new compositions of components as long as there is no other pattern that can solve the imposed challenge. To ensure, it is recommended to open a discussion in the Github repository."),(0,o.kt)("h3",{id:"local-component-construction"},"Local Component Construction"),(0,o.kt)("p",null,"If the components do not meet the product's needs, it is possible to design a local component, but this feature should be used sparingly. To ensure, it is recommended to open a discussion in the Github repository."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get to know the ",(0,o.kt)("a",{parentName:"li",href:"/devhub-apps/en/docs/design-guidelines/concept-usage"},"Usage Concepts"))))}u.isMDXComponent=!0}}]);