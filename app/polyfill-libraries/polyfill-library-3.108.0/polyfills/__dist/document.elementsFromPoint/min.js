document.elementsFromPoint=function e(t,n){function r(e,t,n,r){e.style.setProperty?(e.style.setProperty(t,"",""),e.style.setProperty(t,n,r)):(e.style[t]=n,e.getClientRects())}if("msElementsFromPoint"in this)return this.msElementsFromPoint(t,n)||[];for(var o=[],i=document.elementFromPoint(t,n),l=/msie|trident/i.test(navigator&&navigator.userAgent),s=l?"visibility":"pointer-events",m=l?"hidden":"none";null!==i;)o.push({element:i,value:function u(e,t){return e.style.getPropertyValue?e.style.getPropertyValue(t):e.style[t]}(i,s),priority:function y(e,t){if(e.style.getPropertyPriority)return e.style.getPropertyPriority(t)}(i,s)}),r(i,s,m,"important"),i=i!==document.documentElement?document.elementFromPoint(t,n):null;return o.map(function(e){return r(e.element,s,e.value,e.priority),e.element})};