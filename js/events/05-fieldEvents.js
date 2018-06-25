'use strict';

window.addEvent(EL.empNo, 'keyup', function(event){
  var reg = new RegExp('^[0-9]{3}$');

	  if (EL.empNo.value.length  <= 3) {

		  var isEmpNumValid = reg.test(EL.empNo.value);
		  if (isEmpNumValid) {

			  if (event.keyCode == 13) {
				EL.password.focus();
				EL.password.select();
			  }

		  } else {
		  		if (EL.empNo.value.length == 3) {
				  EL.errorMsg.style.display = 'block';
				  EL.errorMsg.innerHTML = 'Invalid Employee Number!';
				} else {
				  EL.errorMsg.style.display = 'none';
				  EL.errorMsg.innerHTML = '';
				}
		  }
	  }
});

window.addEvent(EL.password, 'keyup', function(event){
   if (event.keyCode == 13) {
				EL.password.focus();
				EL.password.select();
		}

		 // console.log('password '+EL.password.value.length);
		if (EL.password.value.length == 3) {
				ButtonUtil.setInAndOutButton();
		}
});




