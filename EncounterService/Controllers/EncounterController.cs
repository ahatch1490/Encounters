using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EncounterService.Models;
using EncounterService.Models.Interfaces;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EncounterService.Controllers
{
	[Route("api/[controller]")]
	public class EncounterController : Controller
	{
		private readonly IEncounterRepository _repo;
		public EncounterController(IEncounterRepository repo)
		{
			_repo = repo;
		}
		// GET: api/values
		[HttpGet]
		public ICollection<Encounter> Get()
		{
			return _repo.SearchEncountersByTitle(""); 
		}

		[HttpGet("search")]
		// GET api/search/ 
		public ICollection<Encounter> Search(string searchTerm)
		{
			return _repo.SearchEncountersByTitle(searchTerm);
		}


        // GET api/values/5
        [HttpGet("{id}")]
		public Encounter Get(int id)
        {
	        return _repo.GetEncounter(id); 
        }

        // POST api/values
        [HttpPost]
        public  void Post(Encounter encounter)
        {
	         _repo.UpdateEncounter(encounter); 
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(Encounter encounter)
        {
	        _repo.UpdateEncounter(encounter); 
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
	        _repo.DeleteEncounter(id); 
        }
    }
}
