using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EncounterService.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EncounterService.Controllers
{
	[Route("api/[controller]")]
	public class EncounterController : Controller
	{
		private readonly EncounterContext _context;
		EncounterController(EncounterContext context)
		{
			_context = context;
		}
		// GET: api/values
		[HttpGet]
		public List<Encounter> Get()
		{
			return _context.Encounters.ToList();
		}

		[HttpGet("searchTerm")]
		// GET api/search/"searchTerm" 
		public ICollection<Encounter> Search(string searchTerm)
		{
			return _context.Encounters.Where(x => EF.Functions.ILike(x.title, searchTerm)).ToList(); 
		}


        // GET api/values/5
        [HttpGet("{id}")]
		public Encounter Get(int id)
        {
			return _context.Encounters.First(e => e.id == id); 
        }

        // POST api/values
        [HttpPost]
        public async Task Post(Encounter encounter)
        {
			var e = await _context.Encounters.AddAsync(encounter);
			await  _context.SaveChangesAsync(); 
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(Encounter encounter)
        {
			_context.Encounters.Update(encounter); 
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
			var e = _context.Encounters.First(x => x.id == id);
			_context.Encounters.Remove(e); 
        }
    }
}
