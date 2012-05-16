# jQuery PopBox

jQuery PopBox is a simple balloon UI element inspired by 37Signals Highrise CRM.

See it in action here: http://gristmill.github.com/jquery-popbox/example.html

# Usage
jQuery PopBox requires a specific HTML structure in order to work. There is also a small stylesheet that can be used. jQuery is a dependency.

```html
<head>
  <script type='text/javascript' charset='utf-8' src='jquery.js'></script>
  <script type='text/javascript' charset='utf-8' src='popbox.js'></script>
  <link rel='stylesheet' href='popbox.css' type='text/css'>
</head>
```

The HTML structure looks like this.
```html
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

Invoke the plugin by calling it on a selector like normal.

```html
<script type='text/javascript'>
   $(document).ready(function(){
     $('.popbox').popbox();
   });
</script>
```

If there are any CSS class name conflicts, they can be overridden.

```html
<script type='text/javascript'>
   $(document).ready(function(){
     $('.popbox').popbox({
       'open'          : '.open',
       'box'           : '.box',
       'arrow'         : '.arrow',
       'arrow_border'  : '.arrow_border',
       'close'         : '.close'
      });
   });
</script>
```

## Screenshot
![jQuery PopBox Screenshot](https://github.com/gristmill/jquery-popbox/raw/master/screenshot.png)

## Credits

jQuery PopBox developed by [Sean Behan](http://twitter.com/_sbehan) at [Gristmill.io](http://gristmill.io)

It is inspired by the balloon UI element found in 37Signals Highrise CRM.

## License

MIT license:

http://www.opensource.org/licenses/MIT
