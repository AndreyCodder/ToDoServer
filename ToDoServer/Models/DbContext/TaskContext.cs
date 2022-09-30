using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using Microsoft.Extensions.Configuration;

namespace ToDoServer.Models
{
    class TaskContext : DbContext
    {
        public TaskContext() : base("name=ToDoMainConnection")
        {
            
        }

        public DbSet<Task> Tasks { get; set; }

    }
}
