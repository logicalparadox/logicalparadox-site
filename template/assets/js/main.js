/**
 * Debug Tools from HTML5 Boilerplate
 */
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

;(function(context) {
  var paradox = {};
  
  paradox.socialTrack = function (url) {
    
    var makeSocial = function (res) {
      log(res);
    };
    
    $.ajax({
      url: 'http://search.twitter.com/search.json',
      data: { q: url },
      dataType: 'jsonp',
      success: makeSocial,
      error: makeSocial
    });
  }
  
  context.paradox = paradox;
})(window);