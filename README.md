# jQuery PopBox

jQuery PopBox is a simple balloon UI element inspired by High Rise.

# Usage
jQuery PopBox requires a specific HTML structure in order to work. There is also a small stylesheet that should be used.

```html
<script type='text/javascript' charset='utf-8' src='popbox.js'></script>
<link rel='stylesheet' href='popbox.css' type='text/css'>

<div class='popbox'>
  <a class='open' href='#'>Click Here!</a>

  <div class='collapse'>
    <div class='box'>
      <div class='arrow'></div>
      <div class='arrow-border'></div>

      Content in PopBox goes here :)
      <a href="#" class="close">close</a>
    </div>
  </div>
</div>
```

Invoke the plugin by attaching it the selector.

```html
<script type='text/javascript'>
   $(document).ready(function(){
     $('.popbox').popbox();
   });
</script>
```

If there are any naming conflicts, they can be overridden.

```html
<script type='text/javascript'>
   $(document).ready(function(){
     $('.popbox').popbox({
       'open'          : '.open',
       'box'           : '.box',
       'arrow'         : '.arrow',
       'arrow-border'  : '.arrow-border',
       'close'         : '.close'
      });
   });
</script>
```

## Screenshot
![jQuery PopBox Screenshot](https://github.com/gristmill/jquery-popbox/raw/master/screenshot.png)

## Credits

jQuery PopBox developed by [Sean Behan](http://twitter.com/_sbehan) at [Gristmill.io](http://gristmill.io)

It is inspired by the balloon UI element found in 37signals.com's HighRise CRM.
