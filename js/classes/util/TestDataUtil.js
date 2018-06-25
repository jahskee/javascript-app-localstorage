"use strict";

var TestDataUtil = function() {

	this.generateEmployeeTestData = function() {

		var employees = new Array();
		employees.push(new Employee('100', 'Nick Haroop', '111', 'Mechanic'));
		employees.push(new Employee('101', 'John Joey', '111', 'Supervisor'));
		employees.push(new Employee('102', 'Daniel Philip', '111', 'Cashier'));
		employees.push( new Employee('103', 'Michael Batista', '111', 'Accountant'));
		employees.push(new Employee('104', 'Jimmy Beal', '111', 'Security'));
		employees.push(new Employee('105', 'Shenette Morales', '111', 'Security'));
		employees.push(new Employee('106', 'Arnold Szcharzenegger', '111', 'Security'));
		employees.push(new Employee('107', 'John F. Kennedy', '111', 'Security'));
		employees.push(new Employee('108', 'Parker Higgins', '111', 'Security'));
		employees.push(new Employee('109', 'John Lemon', '111', 'Security'));

		return employees;
	}
};