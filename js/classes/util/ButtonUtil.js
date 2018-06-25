var ButtonUtil = function() {

	this.setInAndOutButton = function() {
		 EL.inBtn.disabled = true;
		 EL.outBtn.disabled = true;

		 var idx = employeeHashTable[EL.empNo.value];

		 if(employees[idx].status === "IN") {
	  			EL.outBtn.disabled = false;
	     } else {
			    EL.inBtn.disabled = false;
		 }
	}
}