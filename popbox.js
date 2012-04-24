(function(){
  $.fn.popbox = function(){
    var open = function(event){
      var pop = $(this)
      var box = $(this).parent().find('.box');
      var arrow = box.find('.arrow')
      var arrow_border = box.find('.arrow-border')

      var w = pop.width()
      var h = pop.height()
      var l = pop.position().left + (w/2) - (box.width()/2)
      var l = pop.width() / 2
      var t = pop.position().top  + (h*2 - (h/2))

      arrow.css({'left': box.width()/2 - 10})
      arrow_border.css({'left': box.width()/2 - 10})

      if(box.css('display')=='block'){
        close()
      } else {
        box.css({'display': 'block', 'position': 'relative', 'top': '10px', 'left': l});
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