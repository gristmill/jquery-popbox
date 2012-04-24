# jQuery PopBox

jQuery PopBox is a simple, balloon UI element inspired by High Rise.

# Usage
jQuery PopBox requires a specific HTML structure in order to work.

```html
<div class='popbox'>
  <a class='pop' href='#'>Click Here!</a>

  <div class='collapse'>
    <div class='box'>
      <div class='arrow'></div>
      <div class='arrow-border'></div>

      Content in PopBox goes here :)
    </div>
  </div>
</div>
```

- The ".popbox" element should wrap both the element that will trigger opening the popbox and the content inside the popbox.
- The ".collapse" element is used for collapsing the relatively positioned element (".box") so it doesn't take up any space in the document.
- The ".arrow" and ".arrow-border" classes

```html
<script type='text/javascript' charset='utf-8'>
   $(document).ready(function(){
     $('.popbox').popbox();
   });
</script>
```

## Screenshot
![jQuery PopBox Screenshot](https://github.com/gristmill/jquery-popbox/raw/master/screenshot.png)