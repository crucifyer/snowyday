# snowyday
make snow on the screen

* example https://crucifyer.github.io/snowyday/

```html
<link rel="stylesheet" href="snowyday.css">
<script src="snowyday.js"></script>
<script>
	XenoSnowyDay(function() {
		return "<div class=\"snowflakeRotate' + Math.floor(Math.random() * 6) + '\">\u2744\uFE0F</div>"; // img tag, <div style="color:~~~">*</div> ~~~ must tag.
	}, function() {
		return Math.random() * 1000 + 500;
	}, 5, 100); // snowflake object callback, snowflake make timing callback, animation interval, max objects
</script>
```