'use strict';

var TimeUtil = function() {

	this.startTime = function() {
		startTime();
	}

	this.getTimeNow = function() {
	     return getTimeNow();
	}


	// --------- Private Methods -------------
	function startTime() {

		var today = new Date();
		var h = today.getHours();

		var ampm = 'AM';
		if (h > 12) {
			h = h-12;
			ampm = 'PM'
		}

	  //  if(h == 0 ){ h = 12 };
		h = (h == 0? 12 : h);

		var m = today.getMinutes();
		var s = today.getSeconds();s

		m = checkTime(m);
		s = checkTime(s);


		EL.clock.innerHTML =  h + ':' + m + ':' + s + ' '+ ampm;
		var t = setTimeout(startTime, 500);
	};

	function checkTime(i) {
		if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
		return i;
	}

	function getTimeNow() {

		var today = new Date();
		var h = today.getHours();

		var ampm = 'AM';
		if (h > 12) {
			h = h-12;
			ampm = 'PM'
		}

	  //  if(h == 0 ){ h = 12 };
		h = (h == 0? 12 : h);

		var m = today.getMinutes();
		var s = today.getSeconds();s

		m = checkTime(m);
		s = checkTime(s);


		return h + ':' + m + ':' + s + ' '+ ampm;
	}
}

