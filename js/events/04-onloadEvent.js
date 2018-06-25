'use strict';

// create reference variables to nodes in DOM;
var EL = new Element();

window.addEventListener('load', function () {
	initialize();
	TimeUtil.startTime();
});

window.addEventListener('unload', function() {
 			window.localStorage.setItem('activities', JSON.stringify(activities));
		    window.localStorage.setItem('employees', JSON.stringify(employees));
});


function initialize() {
	EL.currentDate.innerHTML = DateUtil.getCurrentDate();
    EL.errorMsg.innerHTML = '';
	EL.errorMsg.style.display = 'none';

	EL.outBtn.disabled = true;

	EL.inBtn.disabled = true;
	EL.empNo.focus();
	EL.empNo.select();
}

