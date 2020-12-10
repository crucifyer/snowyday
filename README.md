# snowyday
make snow on the screen

* example https://crucifyer.github.io/snowyday/

```html
<style>
	@keyframes snowflakeRemove {
		from {
			opacity:1;
		}
		to {
			opacity:0;
		}
	}
	.snowflakeRemove {
		animation: snowflakeRemove 5s linear;
	}
	@keyframes snowflakeRotateRight {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes snowflakeRotateLeft {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}
	.snowflakeRotate0 {
		animation: snowflakeRotateRight 2s linear infinite;
	}
	.snowflakeRotate1 {
		animation: snowflakeRotateRight 4s linear infinite;
	}
	.snowflakeRotate2 {
		animation: snowflakeRotateRight 6s linear infinite;
	}
	.snowflakeRotate3 {
		animation: snowflakeRotateLeft 2s linear infinite;
	}
	.snowflakeRotate4 {
		animation: snowflakeRotateLeft 4s linear infinite;
	}
	.snowflakeRotate5 {
		animation: snowflakeRotateLeft 6s linear infinite;
	}
</style>
<script src="https://sladkfjaslj"></script>
<script>
	XenoSnowyDay(function() {
		return "<div class=\"snowflakeRotate' + Math.floor(Math.random() * 6) + '\">\u2744\uFE0F</div>"; // img tag, <div style="color:~~~">*</div> ~~~ must tag.
	}, function() {
		return Math.random() * 1000 + 500;
	}, 5, 100); // snowflake object callback, snowflake make timing callback, animation interval, max objects
</script>
```