webpackJsonp([1],[,,,function(t,s){t.exports={root:"_1g6PR93MalyRHSPalaWW1k",time:"_2tRIZrFZZ2g_O9nIL5wbXC",start:"_3Q1FzSkxXfaDjOgce9AkLS",stop:"_3ukatJcKsKVHhu_OddSoq1"}},function(t,s,e){"use strict";function i(t){return o(Math.floor(t/1e3)).format("00:00:00")+o(t%1e3/1e3).format(".000")}s.__esModule=!0;var n=e(0),o=e(1),r=e(3),a={elapsed:0,startTime:0,timer:void 0,start:function(){this.stop(),this.startTime=Date.now(),this.timer=setInterval(function(){n.redraw()},33)},stop:function(){this.timer&&(this.elapsed+=Date.now()-this.startTime,clearInterval(this.timer)),this.timer=void 0},isPaused:function(){return void 0===this.timer},getElapsed:function(){var t=this.elapsed;return this.isPaused()||(t+=Date.now()-this.startTime),t},oninit:function(){},onremove:function(){this.stop()},view:function(){var t=this;return n("div",{class:r.root},n("div",{class:r.time},i(this.getElapsed())),this.isPaused()?n("button",{class:r.start,onclick:function(){return t.start()}},"Start"):n("button",{class:r.stop,onclick:function(){return t.stop()}},"Stop"))}};n.mount(document.getElementById("app"),a)}],[4]);