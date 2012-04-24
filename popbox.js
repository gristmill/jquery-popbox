(function(){
  $.fn.popbox = function(){
    var open = function(event){
      var pop = $(this)
      var box = $(this).parent().find('.box');

      var arrow = box.find('.arrow');
      var arrow_border = box.find('.arrow-border');

      arrow.css({'left': box.width()/2 - 10});
      arrow_border.css({'left': box.width()/2 - 10});

      if(box.css('display')=='block'){
        close()
      } else {
        box.css({'display': 'block', 'top': '10px'});
      }
    }
    var close = function(){
      $('.box').fadeOut("fast")
    }

    this.each(function(){
      $('.pop', this).bind('click', open)
    });

    $('body').bind('keyup', function(event){
      if(event.keyCode == 27){
        close();
      }
    });

    $(document).bind('click', function(event){
      if(!$(event.target).closest('.popbox').length){
        close()
      }
    });
  }

}).call(this);