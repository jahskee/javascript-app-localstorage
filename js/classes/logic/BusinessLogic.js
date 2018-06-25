var BusinessLogic = function() {

	this.isGenerateActivities = function isGenerateActivities(activities) {
		var isGenerateActivities = false;
		if (activities != null) {
			if (activities.length == 0) {
				isGenerateActivities = true;
			}
		} else {
			isGenerateActivities = true;
		}
		return isGenerateActivities;
	}

	this.isGenerateEmployees = function isGenerateEmployees(employees) {
		var isGenerateEmployees = false;
		if (employees != null) {
			if (employees.length == 0) {
				isGenerateEmployees = true;
			}
		} else {
			isGenerateEmployees = true;
		}
		return isGenerateEmployees;
	}

}