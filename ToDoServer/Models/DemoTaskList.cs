using System;

namespace ToDoServer.Models
{
    public class DemoTaskList
    {
        public IEnumerable<Task> tasksDemo = new List<Task>
        {
            new() { Id = Guid.NewGuid(), Text = "Wash car" },
            new() { Id = Guid.NewGuid(), Text = "Sleep" },
            new() { Id = Guid.NewGuid(), Text = "Eat" }
        };
    }
}
