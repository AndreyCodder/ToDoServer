using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;
using ToDoServer.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoServer.Controllers
{
    [Route("/tasks")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private TaskContext db = new TaskContext();
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
        [Route("list")]
        public IEnumerable<ToDoServer.Models.Task> GetList()
        {
            //return new DemoTaskList().tasksDemo;
            {
                // создаем два объекта User
                //ToDoServer.Models.Task t1 = new ToDoServer.Models.Task { Id = Guid.NewGuid(), Text = "1" };
                //ToDoServer.Models.Task t2 = new ToDoServer.Models.Task { Id = Guid.NewGuid(), Text = "2" };
                //ToDoServer.Models.Task t3 = new ToDoServer.Models.Task { Id = Guid.NewGuid(), Text = "and" };
                //ToDoServer.Models.Task t4 = new ToDoServer.Models.Task { Id = Guid.NewGuid(), Text = "4" };


                // добавляем их в бд
                //db.Tasks.Add(t1);
                //db.Tasks.Add(t2);
                //db.Tasks.Add(t3);
                //db.Tasks.Add(t4);
                //db.SaveChanges();


                // получаем объекты из бд и выводим на консоль
                var tasks = db.Tasks.ToList();
                //Console.WriteLine("Список объектов:");
                return tasks;
            }
        //foreach (ToDoServer.Models.Task u in tasks)
        //{
        //    Console.WriteLine("{0}.{1} - {2}", u.Id, u.Id, u.Text);
        //}
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
        public string Post(ToDoServer.Models.Task task)
        {
                db.Tasks.Add(task);
                return "1";
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
