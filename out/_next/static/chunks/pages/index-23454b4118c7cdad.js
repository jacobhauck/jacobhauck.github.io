(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2711)}])},2207:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",u="navigate",l="restore",a="server-patch",i="prefetch",c="fast-refresh",f="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},222:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4918:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=r._(n(7294)),u=n(9413),l=n(3800),a=n(1896),i=n(4207),c=n(3331),f=n(9378),s=n(2496),d=n(5322),p=n(222),h=n(8010),_=n(2207),v=new Set;function b(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(v.has(u))return;v.add(u)}let a=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:v,children:m,prefetch:j=null,passHref:x,replace:g,shallow:C,scroll:O,locale:E,onClick:T,onMouseEnter:P,onTouchStart:N,legacyBehavior:M=!1,...R}=e;n=m,M&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let k=o.default.useContext(f.RouterContext),A=o.default.useContext(s.AppRouterContext),I=null!=k?k:A,L=!k,w=!1!==j,S=null===j?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:F,as:U}=o.default.useMemo(()=>{if(!k){let e=y(a);return{href:e,as:v?y(v):e}}let[e,t]=(0,u.resolveHref)(k,a,!0);return{href:e,as:v?(0,u.resolveHref)(k,v):t||e}},[k,a,v]),K=o.default.useRef(F),H=o.default.useRef(U);M&&(r=o.default.Children.only(n));let z=M?r&&"object"==typeof r&&r.ref:t,[D,J,W]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(H.current!==U||K.current!==F)&&(W(),H.current=U,K.current=F),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[U,z,F,W,D]);o.default.useEffect(()=>{I&&J&&w&&b(I,F,U,{locale:E},{kind:S},L)},[U,F,J,E,w,null==k?void 0:k.locale,I,L,S]);let Y={ref:V,onClick(e){M||"function"!=typeof T||T(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,u,a,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};f?o.default.startTransition(h):h()}(e,I,F,U,g,C,O,E,L,w)},onMouseEnter(e){M||"function"!=typeof P||P(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(w||!L)&&b(I,F,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)},onTouchStart(e){M||"function"!=typeof N||N(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(w||!L)&&b(I,F,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)}};if((0,i.isAbsoluteUrl)(U))Y.href=U;else if(!M||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);Y.href=t||(0,h.addBasePath)((0,c.addLocale)(U,e,null==k?void 0:k.defaultLocale))}return M?o.default.cloneElement(r,Y):o.default.createElement("a",{...R,...Y},n)}),j=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(463),u="function"==typeof IntersectionObserver,l=new Map,a=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(c||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},a.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,f,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,f,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(9008),u=n.n(o),l=n(1688),a=n.n(l),i=n(1664),c=n.n(i);function f(){return(0,r.jsx)("div",{className:a().headingContainer,children:(0,r.jsx)(c(),{className:a().heading,href:"/",children:"Jacob's Website"})})}var s=n(6109),d=n.n(s);function p(){return(0,r.jsxs)("div",{className:d().navbar,children:[(0,r.jsx)(c(),{className:d().navbutton,href:"https://runescape.com",children:"About"}),(0,r.jsx)(c(),{className:d().navbutton,href:"https://runescape.com",children:"Notes"}),(0,r.jsx)(c(),{className:d().navbutton,href:"https://runescape.com",children:"Solved Problems"})]})}var h=n(9050),_=n.n(h),v=n(6543),b=n.n(v);function y(){return(0,r.jsx)("div",{className:b().footer,children:"Last updated 12 July 2023."})}function m(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"Jacob's Website"})}),(0,r.jsxs)("section",{className:_().verticalFlex,children:[(0,r.jsx)(f,{}),(0,r.jsx)(p,{}),(0,r.jsxs)("section",{className:_().centeredText,children:[(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"Welcome to my website!"}),(0,r.jsx)("div",{children:"I'm not sure why you're here already, seeing as there is almost no content posted yet."})]}),(0,r.jsx)(y,{})]})]})}},6543:function(e){e.exports={footer:"footer_footer__e_ilT"}},6109:function(e){e.exports={navbar:"navbar_navbar__g8CqE",navbutton:"navbar_navbutton__kz6JK"}},1688:function(e){e.exports={headingContainer:"topmatter_headingContainer__Nzhon",heading:"topmatter_heading__o6Ukz"}},9050:function(e){e.exports={verticalFlex:"utils_verticalFlex__L0W7Y",centeredText:"utils_centeredText__jT7jY"}},9008:function(e,t,n){e.exports=n(8044)},1664:function(e,t,n){e.exports=n(4918)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);