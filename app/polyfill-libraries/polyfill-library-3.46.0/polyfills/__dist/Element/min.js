!function(){function e(){return a--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(m(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}if(window.Element&&!window.HTMLElement)return void(window.HTMLElement=window.Element);window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")),r=o.contentWindow.document,c=Element.prototype=r.appendChild(r.createElement("*")),d={},m=function(e,t){var n,o,r,c=e.childNodes||[],u=-1;if(1===e.nodeType&&e.constructor!==Element){e.constructor=Element;for(n in d)o=d[n],e[n]=o}for(;r=t&&c[++u];)m(r,t);return e},u=document.getElementsByTagName("*"),i=document.createElement,a=100;c.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!Object.prototype.hasOwnProperty.call(d,n),r=c[n],m=d[n],i=-1;t=u[++i];)1===t.nodeType&&(o||t[n]===m)&&(t[n]=r);d[n]=r}),c.constructor=Element,c.hasAttribute||(c.hasAttribute=function l(e){return null!==this.getAttribute(e)}),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function p(e){var t=i(String(e).toLowerCase());return m(t)},document.removeChild(n)}();