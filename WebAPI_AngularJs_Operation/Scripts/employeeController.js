//The below code will fetch the data from EmployeeService and will pass to the $scope variable

employeeAppModule.controller('EmployeeCtrl', function ($scope, EmployeeService) //injected the Employee Service factory
{
	getEmployeeRecords();  //call the function

	function getEmployeeRecords() {
		var employees = EmployeeService.getEmployees(); //invoking the getEmployees() method of the EmployeeService factory

		employees.success(function (data) { //case when records found successfully
			console.log(data);  //just for display in the console
			$scope.employees = data;
		})

		employees.error(function (data, status) { //if something goes wrong
			console.error('failure loading the employee record', status, data);
			$scope.employees = {}; //return blank record if something goes wrong
		});
	}
});

