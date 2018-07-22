

employeeAppModule.factory('EmployeeService', ['$http', function ($http) {

	var employeeService = {};

	var urlBase = 'http://localhost:58514/Employee'; //the base for the Employee Resources

	//invoke the service
	employeeService.getEmployees = function () {

		return $http.get(urlBase + '/EmployeeRecords');
	};

	return employeeService;

}]);