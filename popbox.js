(function(){

  $.fn.popbox = function(options){
    var settings = $.extend({
      'selector'      : this.selector,
      'pop'           : '.pop',
      'box'           : '.box',
      'arrow'         : '.arrow',
      'arrow-border'  : '.arrow-border',
      'cancel'        : '.cancel'
    }, options);

    var methods = {
      open: function(event){
        event.preventDefault();

        var pop = $(this);
        var box = $(this).parent().find(settings['box']);

        box.find(settings['arrow']).css({'left': box.width()/2 - 10});
        box.find(settings['arrow-border']).css({'left': box.width()/2 - 10});

        if(box.css('display') == 'block'){
          methods.close();
        } else {
          box.css({'display': 'block', 'top': 10, 'left': ((pop.parent().width()/2) -box.width()/2 )});
        }
      },

      close: function(){
        $(settings['box']).fadeOut("fast");
      }
    };

    $(document).bind('keyup', function(event){
      if(event.keyCode == 27){
        methods.close();
      }
    });

    $(document).bind('click', function(event){
      if(!$(event.target).closest(settings['selector']).length){
        methods.close();
      }
    });

    return this.each(function(){
      $(this).css({'width': $(settings['box']).width()}); // Width needs to be set otherwise popbox will not move when window resized.
      $(settings['pop'], this).bind('click', methods.open);
      $(settings['pop'], this).parent().find(settings['cancel']).bind('click', methods.close);
    });
  }

}).call(this);
