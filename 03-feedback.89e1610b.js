!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var i,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(h,t),d?g(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?b(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?g(e):(i=o=void 0,u)}function T(){var e=p(),n=S(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S=O.querySelector('input[name="email"]'),h=O.querySelector('textarea[name="message"]');O.addEventListener("input",e(t)((function(){var e={email:S.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);S.value=t.email,h.value=t.message}})),O.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.value,message:h.value};console.log("Form data submitted:",t),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.89e1610b.js.map
