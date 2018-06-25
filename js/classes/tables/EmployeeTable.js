"use strict";

var EmployeeTable = function() {

	this.createTable = function(tableId, employees) {
		return  createTable(tableId, employees);
	};

	function createTable(tableId, employees) {

		//console.log(employees);
		var genTab = '<table id="'+tableId+'">';
		genTab += '<tr>';
		genTab +=      '<td>Employee ID</td>';
		genTab +=      '<td>Name</td>';
		genTab +=      '<td>Password</td>';
		genTab +=      '<td>Status</td>';
		genTab +=      '<td>Position</td>';
		genTab += '</tr>';

		employees.forEach(function(item, index){
			genTab += '<tr>';
					genTab += '<td>'+item.empNo+'</td>';
					genTab += '<td>'+item.name+'</td>';
					genTab += '<td>'+item.password+'</td>';
					genTab += '<td>'+item.status+'</td>';
					genTab += '<td>'+item.position+'</td>';
			genTab += '</tr>';
		});
		genTab += '</table >';


		var tableDiv = document.getElementById(tableId+'Div');
		tableDiv.innerHTML = genTab;

		var table = document.getElementById(tableId);
		table.style.width="100%";
		return genTab;
	}
}
