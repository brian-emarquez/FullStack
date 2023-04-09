using Microsoft.AspNetCore.Mvc;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            
        }
    }
}
