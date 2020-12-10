(function(w, d) {
	let objCnt = 0, max = 0, objBox = d.createElement('div'), snowFlake, makeInterval, animateInterval, offsetx, sizex, offsety, sizey;

	function detectScreenOffset() {
		offsetx = d.documentElement.scrollLeft;
		sizex = d.documentElement.clientWidth - 20;
		offsety = d.documentElement.scrollTop;
		sizey = d.documentElement.clientHeight - 20;
	}
	w.addEventListener('resize', detectScreenOffset);
	w.addEventListener('scroll', detectScreenOffset);
	w.addEventListener('load', detectScreenOffset);
	setTimeout(detectScreenOffset, 1000);

	function snowflakeRemove(flake) {
		flake.className = 'snowflakeRemove';
		setTimeout(function() {
			flake.parentNode.removeChild(flake);
			objCnt --;
		}, 3000);
	}

	function snowflakeMake() {
		if(objCnt > max) {
			setTimeout(snowflakeMake, makeInterval());
			return;
		}
		objCnt ++;
		objBox.innerHTML = snowFlake();
		let flake = objBox.firstChild;
		flake.style.display = 'block';
		flake.style.position = 'absolute';
		flake._stepx = Math.random() * 4 - 2;
		flake._stepy = Math.random() * 1;
		flake._x = Math.random() * sizex + offsetx;
		flake._y = offsety;
		flake.style.left = flake._x + 'px';
		flake.style.top = flake._y + 'px';
		d.body.appendChild(flake);
		flake._idx = setInterval(function() {
			flake._stepx = Math.max(Math.min(flake._stepx + Math.random() * 1 - .5, 2), -2);
			flake._stepy = Math.min(flake._stepy + Math.random() * 1, 2);
			flake._x += flake._stepx;
			flake._y += flake._stepy;
			if(flake._x <= offsetx) flake._x = sizex + offsetx;
			if(flake._x >= sizex + offsetx) flake._x = offsetx;
			flake.style.left = flake._x + 'px';
			flake.style.top = flake._y + 'px';
			if(flake._y >= sizey + offsety) {
				snowflakeRemove(flake);
				clearInterval(flake._idx);
			}
		}, animateInterval())
		setTimeout(snowflakeMake, makeInterval());
	}

	w.XenoSnowyDay = function(getSnowflake, makeIntervalCallback, animateIntervalCallback, maxlimit) {
		snowFlake = getSnowflake;
		makeInterval = makeIntervalCallback;
		animateInterval = animateIntervalCallback;
		max = maxlimit;
		setTimeout(snowflakeMake, makeInterval());
	}
})(window, document);