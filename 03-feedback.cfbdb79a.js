!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire4c75=r);var l=r("1WSnx"),o="feedback-form-state",i=document.querySelector(".feedback-form"),u=localStorage.getItem(o);if(u){var s=JSON.parse(u);i.email.value=s.email,i.message.value=s.message}function f(e){var t=e.elements,a=t.email,n=t.message;return{email:a.value,message:n.value}}i.addEventListener("input",e(l).throttle((function(e){!function(e){e.preventDefault();var t=f(i);localStorage.setItem(o,JSON.stringify(t))}(e)}),500)),i.addEventListener("submit",(function(e){e.preventDefault();var t=f(i);""===t.email&&""===t.message||console.log(t);e.target.email.value="",e.target.message.value="",localStorage.removeItem(o)}))}();
//# sourceMappingURL=03-feedback.cfbdb79a.js.map