using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
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
        public IActionResult Put(int id, [FromBody]Todo todo)
        {
            if (!Todos.ContainsKey(id))
                return NotFound();

            Todos[id] = todo;

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Todo val;
            if(!Todos.TryRemove(id, out val))
                return NotFound();

            return Ok();
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, [FromBody]JsonPatchDocument<Todo> patch)
        {
            if(!Todos.ContainsKey(id))
                return NotFound();

            var todo = Todos[id];
            patch.ApplyTo(todo, ModelState);

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok();
        }
    }
}
