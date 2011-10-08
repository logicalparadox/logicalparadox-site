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



/**
 * Theme custom slider jQuery
 * 
 * @param {Object} options
 */

if (typeof jQuery != 'undefined') {
  jQuery(function($) {
    $.fn.extend({
      slider: function(options) {
        var settings = $.extend({}, $.fn.slider.defaults, options);
        return this.each(function() {
          var $$ = $(this)
            , o = $.metadata ? $.extend({}, settings, $$.metadata()) : settings;
          
          var $blocks = $('.blocks', $$)
            , $controls = $('.controls', $$)
            , $panels = $('.panels', $$);
          
          $blocks.css({ display: 'none' });
          
          $('.block', $blocks).each(function (i) {
            $(this).attr('block-index', i);
          });
          
          var rotate = function (last) {
            var len = $('.block', $blocks).length - 1
              , $curr
              , count = 0;
            
            for (var i = 0; i < settings.blocks; i ++) {
              if (last > len) last = 0;
              
              $curr = $('.block', $blocks).filter(function () {
                return $(this).attr('block-index') == last;
              })[0];
              
              $($curr).clone().appendTo($panels);
              
              log($curr, last);
              
              last++;
            }
            
            setTimeout(function() {
              //rotate(last);
            }, 5000);
            
          }
          
          log($blocks, $controls, $panels);
          rotate(0);
        });
      }
    });
    /**
     * Slider Defaults
     */
    $.fn.slider.defaults = {
      blocks: 4
    };
  }(jQuery));
}


/**
 * Theme custom slider
 */

$(document).ready(function() {
  
  $('.widget#code').slider();
  
  
});