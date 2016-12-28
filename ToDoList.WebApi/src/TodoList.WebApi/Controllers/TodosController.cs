using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoList.WebApi.Models;

namespace TodoList.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        private static int _idSequence = 0;
        private static readonly ConcurrentDictionary<int, Todo> Todos = new ConcurrentDictionary<int, Todo>();
        // GET api/values
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return Todos.Select(t => t.Value).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public Todo Post([FromBody]Todo newTodo)
        {
            newTodo.Id = _idSequence++;

            Todos.TryAdd(newTodo.Id, newTodo);

            return newTodo;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody]Todo todo)
        {

            if (Todos.ContainsKey(id))
            {
                Todos[id].Description = todo.Description;
                Todos[id].IsCompleted = todo.IsCompleted;
            }
                

            return Todos.ContainsKey(id);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Todo val;
            Todos.TryRemove(id, out val);
        }
    }
}
