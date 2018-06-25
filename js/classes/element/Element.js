'use strict';

var Element = function () {

	this.errorMsg = document.getElementById('errorMsg');
	this.empNo = document.getElementById('empNo');
	this.password = document.getElementById('password');
	this.inBtn = document.getElementById('inBtn');
	this.outBtn = document.getElementById('outBtn');
	this.currentDate = document.getElementById('currentDate');


	this.empTableDiv = document.getElementById('empTableDiv');
	this.empTable = document.getElementById('empTable');

	this.activityTableDiv = document.getElementById('activityTableDiv');
	this.activityTable = document.getElementById('activityTable');

	this.clock = document.getElementById('clock');
}