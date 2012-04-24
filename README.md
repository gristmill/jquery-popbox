# jQuery PopBox

jQuery PopBox is a simple, balloon UI element inspired by High Rise.

# Usage
jQuery PopBox requires a specific HTML structure in order to work.

```html
<div class='popbox'>
  <a class='open' href='#'>Click Here!</a>

  <div class='collapse'>
    <div class='box'>
      <div class='arrow'></div>
      <div class='arrow-border'></div>

      Content in PopBox goes here :)
      <a href="#" class="cancel">close</a>
    </div>
  </div>
</div>
```

And to

```html
<script type='text/javascript'>
   $(document).ready(function(){
     $('.popbox').popbox();
   });
</script>
```

## Screenshot
![jQuery PopBox Screenshot](https://github.com/gristmill/jquery-popbox/raw/master/screenshot.png)