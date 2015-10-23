/*
 *  CSS3 Loading indicator.
 *      
 *      forked from http://www.alessioatzeni.com/wp-content/tutorials/html-css/CSS3-loading-animation-loop/index.html
 * 
 *      Usage:
 *          jQueryElement.cssLoading(); //initialize
 *          jQueryElement.cssLoading('show');
 *          jQueryElement.cssLoading('hide');
 * 
 *      Caution:
 *          jQueryElement's position property of style is set 'relative'.
*/
"use strict";
(function($){
    var methods = {
        init : function(options){
            this.css('position', 'relative');
            
            var d = {};
            d.$loading = $("<div/>").addClass('loading').appendTo(this);
            d.$mask = $("<div/>").addClass('mask').appendTo(this);
            d.$maskMsg = $("<p/>").appendTo(d.$mask);
            
            this.data('cssLoading', d);
        },
        show : function(){
            var d = this.data('cssLoading');
            if(!d){
                methods.init();
            }
            d.$loading.show();
            d.$mask.show();
        },
        hide : function(){
            var d = this.data('cssLoading');
            if(!d){
                methods.init();
            }
            d.$loading.hide();
            d.$mask.hide();
        },
    };

    $.fn.cssLoading = function(methodOrOptions) {
        if( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            return methods.init.apply( this, arguments ); // Default to "init"
        }else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }
    };
})(jQuery);
