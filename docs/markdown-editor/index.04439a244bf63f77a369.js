webpackJsonp([0],[,,,function(t,e,n){"use strict";e.__esModule=!0;var r=n(1),a=n(0),s=n(4),i=n(6),u=function(){function t(){this.source=s("# Markdown Editor\n\nThis is a simple *Markdown* editor using **Mithril**."),this.compiled=this.source.map(function(t){return r(t)})}return t}(),o=function(){function t(){this.vm=new u}return t.prototype.view=function(){return a("div",{class:i.root},a("textarea",{class:i.source,value:this.vm.source(),oninput:a.withAttr("value",this.vm.source)}),a("div",{class:i.compiled},a.trust(this.vm.compiled())))},t}();a.mount(document.getElementById("app"),o)},function(t,e,n){"use strict";t.exports=n(5)},function(t,e,n){!function(){"use strict";function e(){function t(){return arguments.length>0&&arguments[0]!==x&&r(t,arguments[0]),t._state.value}return n(t),arguments.length>0&&arguments[0]!==x&&r(t,arguments[0]),t}function n(t){t.constructor=e,t._state={id:O++,value:void 0,state:0,derive:void 0,recover:void 0,deps:{},parents:[],endStream:void 0,unregister:void 0},t.map=t["fantasy-land/map"]=_,t["fantasy-land/ap"]=d,t["fantasy-land/of"]=e,t.valueOf=p,t.toJSON=v,t.toString=p,Object.defineProperties(t,{end:{get:function(){if(!t._state.endStream){var n=e();n.map(function(e){return!0===e&&(f(t),n._state.unregister=function(){f(n)}),e}),t._state.endStream=n}return t._state.endStream}}})}function r(t,e){a(t,e);for(var n in t._state.deps)s(t._state.deps[n],!1);null!=t._state.unregister&&t._state.unregister(),i(t)}function a(t,e){t._state.value=e,t._state.changed=!0,2!==t._state.state&&(t._state.state=1)}function s(t,e){var n=t._state,r=n.parents;if(r.length>0&&r.every(h)&&(e||r.some(m))){var s=t._state.derive();if(s===x)return!1;a(t,s)}}function i(t){t._state.changed=!1;for(var e in t._state.deps)t._state.deps[e]._state.changed=!1}function u(t,n){if(!n.every(l))throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");return o(e(),n,function(){return t.apply(this,n.concat([n.filter(m)]))})}function o(t,e,n){var r=t._state;return r.derive=n,r.parents=e.filter(g),c(t,r.parents),s(t,!0),t}function c(t,e){for(var n=0;n<e.length;n++)e[n]._state.deps[t._state.id]=t,c(t,e[n]._state.parents)}function f(t){for(var e=0;e<t._state.parents.length;e++){delete t._state.parents[e]._state.deps[t._state.id]}for(var n in t._state.deps){var r=t._state.deps[n],a=r._state.parents.indexOf(t);a>-1&&r._state.parents.splice(a,1)}t._state.state=2,t._state.deps={}}function _(t){return u(function(e){return t(e())},[this])}function d(t){return u(function(t,e){return t()(e())},[t,this])}function p(){return this._state.value}function v(){return null!=this._state.value&&"function"==typeof this._state.value.toJSON?this._state.value.toJSON():this._state.value}function l(t){return t._state}function h(t){return 1===t._state.state}function m(t){return t._state.changed}function g(t){return 2!==t._state.state}function y(t){return u(function(){return t.map(function(t){return t()})},t)}function S(t,e,n){var r=u(function(n){return e=t(e,n._state.value)},[n]);return 0===r._state.state&&r(e),r}function w(t,e){var n=t.map(function(t){var e=t[0];return 0===e._state.state&&e(void 0),e});return u(function(){var r=arguments[arguments.length-1];return n.forEach(function(n,a){r.indexOf(n)>-1&&(e=t[a][1](e,n._state.value))}),e},n)}var O=0,x={};e["fantasy-land/of"]=e,e.merge=y,e.combine=u,e.scan=S,e.scanMerge=w,e.HALT=x,t.exports=e}()},function(t,e){t.exports={root:"_1g6PR93MalyRHSPalaWW1k",source:"_3oaF7DpUUtNk29Q-1OQyll",compiled:"_2HetnVA_7Ycq4IFq61A_FV"}}],[3]);