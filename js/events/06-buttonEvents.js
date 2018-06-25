'use strict';


window.addEvent(EL.inBtn, 'click', function() {
	 var idx = employeeHashTable[EL.empNo.value];
	 console.log(employees[idx].password+"  "+EL.password.value);
	if (employees[idx].password == EL.password.value) {
		addActivity("IN");
	} else {
		console.log('wrong username or password');
	}
});


window.addEvent(EL.outBtn, 'click', function(){
   var idx = employeeHashTable[EL.empNo.value];
	 console.log(employees[idx].password+"  "+EL.password.value);
	if (employees[idx].password == EL.password.value) {
		addActivity("OUT");
	} else {
		console.log('wrong username or password');
	}
});


function addActivity(status) {
		//var activity = new Activity("1001", "Jaizon Lubaton", "In","Date");
	 var idx = employeeHashTable[EL.empNo.value];

	if (employees[idx] == undefined) {
		 EL.errorMsg.style.display = 'block';
		 EL.errorMsg.innerHTML = 'Employee record not found!';

	} else {

		 EL.errorMsg.style.display = 'block';
		 EL.errorMsg.style.color = 'green';
		 EL.errorMsg.innerHTML = 'Employee record found!';
//empNo, name, event, time

		 if (activities.length > 11) {
		 	activities.splice(11,1);
		 }

	     var activity = new Activity();
	     activity.empNo = employees[idx].empNo;
	     activity.name = employees[idx].name;
	     activity.event = status;
	     activity.time = TimeUtil.getTimeNow();
		 activities.unshift(activity);

		 ActivityTable.addActivityTop(activity);

		 employees[idx].status = status;


		 EL.empNo.value = "";
		 EL.password.value = "";
		 EL.empNo.focus();
		 EL.inBtn.disabled = true;
		 EL.outBtn.disabled = true;


		 EmployeeTable.createTable('employeeTable', employees);

	}


}