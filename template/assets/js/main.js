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
            
            var fadeIn = function (which, delay, durr) {
              setTimeout(function () {
                $(which).fadeIn(durr);
              }, delay);
            }
            
            var fadeOut = function (which, delay, durr, next) {
              setTimeout(function () {
                $(which).animate({opacity: 0}, durr, next);
              }, delay);
            }
            
            var rotateIn = function (anim) {
              var durr = (!anim) ? 0 : 700;
              
              for (var i = 0; i < settings.blocks; i ++) {
                if (last > len) last = 0;
              
                $curr = $('.block', $blocks).filter(function () {
                  return $(this).attr('block-index') == last;
                })[0];
                
                $new_panel = $($curr)
                  .clone()
                  .css({
                    display: 'none'
                  })
                  .appendTo($panels);
                
                if (anim) {
                  fadeIn($new_panel, i * 300, durr);
                } else {
                  $new_panel.css({ display: 'block' });
                }
                
                last++;
              }
              setTimeout(function () {
                rotateOut();
              }, 10000);
            }
            
            var rotateOut = function () {
              var count = 0;
              var next = function() {
                count++;
                if ($('.block', $panels).length == count) {
                  $('.block', $panels).each(function() { $(this).remove() });
                  rotateIn(true);
                }
              }
              
              $('.block', $panels).each(function (i) {
                fadeOut(this, i * 300, 700, next);
              });
            }
            
            rotateIn();
            setTimeout(function () {
              rotateOut();
            }, 10000);
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