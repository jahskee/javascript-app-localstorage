"use strict";

var DateUtil = new DateUtil();
var TimeUtil = new TimeUtil();
var ButtonUtil = new ButtonUtil();
var TestDataUtil = new TestDataUtil();
var BusinessLogic = new BusinessLogic();

var EmployeeTable = new EmployeeTable();
var ActivityTable = new ActivityTable();


var activities = JSON.parse(window.localStorage.getItem('activities'));
if (BusinessLogic.isGenerateActivities(activities)) {
	activities = new Array();
	for (var i = 0; i < 12; i++) {
		activities[i] = new Activity('', '','','');
	}
}

//activities.push(new Activity('1001', 'Jaizon Lubaton', 'In', '08:09:21' ));


var employees=JSON.parse(window.localStorage.getItem('employees'));
if (employees == null) {
   employees = TestDataUtil.generateEmployeeTestData();
}

// generate hash table for fast search
var employeeHashTable = {};
for (var i = 0; i < employees.length; i++) {
	employeeHashTable[employees[i].empNo] = i;
}


EmployeeTable.createTable('employeeTable', employees);
ActivityTable.createTable('activityTable', activities);


