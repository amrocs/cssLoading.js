/*
 *  CSS3 Loading indicator.
 *    
 *    forked from http://www.alessioatzeni.com/wp-content/tutorials/html-css/CSS3-loading-animation-loop/index.html
 *    
 *    Usage:
 *      jQueryElement.cssLoading('show');
 *      jQueryElement.cssLoading('hide');
 * 
 *    Caution:
 *      jQueryElement's position property of style is set 'relative'.
*/
'use strict';
(function($){
  var methods = {
    init : function(options){
      if(options && options.$el){
        var $el = options.$el;
      } else {
        var $el = this
      }
      $el.css('position', 'relative');
      var d = {};
      d.$loading = $("<div/>").addClass('loading').appendTo($el);
      d.$mask = $("<div/>").addClass('mask').appendTo($el);
      d.$maskMsg = $("<p/>").appendTo(d.$mask);
      
      if(options && options.size){
        if(options.size === 'small'){
          d.$loading.addClass('loading_small')
        }
        if(options.size === 'large'){
          d.$loading.addClass('loading_large')
        }
      }
      
      $el.data('cssLoading', d);
      
      return $el;
    },
    show : function(){
      var d = this.data('cssLoading');
      if(!d){
        var $el = methods.init({$el: this});
        d = $el.data('cssLoading');
      }
      d.$loading.show();
      d.$mask.show();
      
      return this;
    },
    hide : function(){
      var d = this.data('cssLoading');
      if(!d){
        var $el = methods.init({$el: this});
        d = $el.data('cssLoading');
      }
      d.$loading.hide();
      d.$mask.hide();
      
      return this;
    },
  };
  
  $.fn.cssLoading = function(methodOrOptions) {
    if( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      return methods.init.apply( this, arguments ); // Default to "init"
    }else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist. ');
    }
  };
})(jQuery);
