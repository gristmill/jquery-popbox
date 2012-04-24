(function(){

  $.fn.popbox = function(options){
    var settings = $.extend({
      'box': '.box',
      'arrow': '.arrow',
      'arrow-border': '.arrow-border',
      'popbox': '.popbox',
      'pop': '.pop',
      'cancel': '.cancel'
    }, options);

    var methods = {
      open: function(event){
        event.preventDefault();

        var pop = $(this);
        var box = $(this).parent().find(settings['box']);

        var arrow = box.find(settings['arrow']);
        var arrow_border = box.find(settings['arrow-border']);

        arrow.css({'left': box.width()/2 - 10});
        arrow_border.css({'left': box.width()/2 - 10});

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
      if(!$(event.target).closest(settings['popbox']).length){
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
