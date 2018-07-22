

employeeAppModule.controller('EmployeeCtrl', function ($scope, EmployeeService) //injected the Employee Service factory
{
	getEmployeeRecords();  //call the function

	function getEmployeeRecords() {
		EmployeeService.getEmployees() //invoking the getEmployees() method of the EmployeeService factory

			.success(function (data) { //case when records found successfully

				console.log(data);  //just for display in the console

				$scope.employees = data;

			})

			.error(function (data, status) { //if something goes wrong

				console.error('failure loading the employee record', status, data);
				$scope.employees = {}; //return blank record if something goes wrong

			});
	}
});

