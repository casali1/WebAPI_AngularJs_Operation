using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI_AngularJs_Operation.Models;

namespace WebAPI_AngularJs_Operation.Controllers
{
    [RoutePrefix("Employee")]
    public class EmployeeController : ApiController
    {
        // GET Employee/EmployeeData
        [Route("EmployeeRecords")]
        public List<Employee> Get()
        {
            return new List<Employee>()
            {
                new Employee { EmployeeID=1, EmployeeName="Niladri", EmailAdress="niladri@dnf.com", PhoneNumber="1111111111" }
                ,new Employee { EmployeeID=2, EmployeeName="Arina", EmailAdress="arina@dnf.com", PhoneNumber="2222222222" }
                ,new Employee { EmployeeID=3, EmployeeName="Rajlaxmi", EmailAdress="rajlaxmi@dnf.com", PhoneNumber="3333333333" }
                ,new Employee { EmployeeID=4, EmployeeName="RNA", EmailAdress="rna@dnf.com", PhoneNumber="4444444444" }

            };
        }
    }
}
