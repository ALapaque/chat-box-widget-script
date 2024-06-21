This chatbox example widget can be injected using GoogleTagManager

```js
<script>
  (function() {
    var script = document.createElement('script');
    script.id = 'chat-box-widget';
    script.src = 'https://alapaque.github.io/chat-box-widget-script/dist/bundle.js';
    script.onload = function() {
      console.log('Bundle.js loaded successfully.');
    };
    script.onerror = function() {
      console.error('Error loading bundle.js.');
    };
    document.head.appendChild(script);
  })();
</script>
```