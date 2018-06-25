'use strict';

var DateUtil = function() {

	this.getCurrentDate = function() {
		var monthNames = [
				  "January", "February", "March",
				  "April", "May", "June", "July",
				  "August", "September", "October",
				  "November", "December"
			];
	   var today = new Date();
	   return monthNames[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear();
	}

}