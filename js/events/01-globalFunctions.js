function addEvent(obj, type, fn) {
	'use strict';
	if (obj && obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj && obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
} // End of addEvent() function.