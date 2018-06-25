"use strict";

var ActivityTable = function() {

	this.createTable = function(tableId, activities) {
		this.activities = activities;
		return  createTable(tableId, activities);
	};

	this.addActivityTop = function(activity) {
		 var table = document.getElementById('activityTable');

		 var row = table.insertRow(1);

		 var cell1 = row.insertCell(0);
		 var cell2 = row.insertCell(1);
		 var cell3 = row.insertCell(2);
		 var cell4 = row.insertCell(3);

		 cell1.innerHTML = activity.empNo;
		 cell2.innerHTML = activity.name;
		 cell3.innerHTML = activity.event;
		 cell4.innerHTML = activity.time;

		 var rowLength = table.getElementsByTagName("tr").length
		 if (rowLength > 12) {
			 table.deleteRow(rowLength-1);
		 }

		 console.log("Employee "+activity.empNo+" "+activity.event+" added on top");
		 EL.empNo.focus();
		 EL.empNo.select();
	};


	function createTable(tableId, activities) {
			var table = document.getElementById(tableId);
			var tableDiv = document.getElementById(tableId+'Div');


			var genTab = '<table id="'+tableId+'">';
			genTab += '<tr>';
			genTab +=      '<td>Employee ID</td>';
			genTab +=      '<td>Name</td>';
			genTab +=      '<td>Event</td>';
			genTab +=      '<td>Time</td>';
			genTab += '</tr>';


			activities.forEach(function(item, index){
				genTab += '<tr>';
						genTab += '<td>'+item.empNo+'</td>';
						genTab += '<td>'+item.name+'</td>';
						genTab += '<td>'+item.event+'</td>';
						genTab += '<td>'+item.time+'</td>';
				genTab += '</tr>';
				//console.log(index+' '+ item.empNo+', '+item.name);
			});
			genTab += '</table >';

			var tableDiv = document.getElementById(tableId+'Div');
			tableDiv.innerHTML = genTab;

			var table = document.getElementById(tableId);
			table.style.width="100%";
			return genTab;
	}
}