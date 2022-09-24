using Microsoft.AspNetCore.Mvc;
using ToDoServer.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoServer.Controllers
{
    [Route("tasks/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        // GET: api/<TasksController>
        [HttpGet]
        [Route("list/{param}")]
        public IEnumerable<ToDoServer.Models.Task> GetParamed(string param)
        {
            switch (param)
            {
                case "1":
                    return new DemoTaskList().tasksDemo.Select( p => new Models.Task { Id = Guid.NewGuid(), Text = p.Text+" changed" } );; 
                    break;
                case "2":
                    return new DemoTaskList().tasksDemo;
                    break;
                default:
                    return new DemoTaskList().tasksDemo;
                    break;
            }
        }

        [HttpGet]
        public IEnumerable<ToDoServer.Models.Task> Get()
        {
            return new DemoTaskList().tasksDemo.Select(p => new Models.Task { Text = p.Text });
        }

        // GET api/<TasksController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TasksController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TasksController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TasksController>/5  dsdawdsad asdwad sd 
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
