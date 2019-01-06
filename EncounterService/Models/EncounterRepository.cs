using System.Linq;
using System.Collections.Generic;
using System.Data;
using EncounterService.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EncounterService.Models
{

	public class EncounterRepository : IEncounterRepository
	{
		public EncounterRepository() { }
		private readonly EncounterContext _encounterContext;
		private readonly IDbConnection _dbConnection; 

        public EncounterRepository(EncounterContext context)
        {
            _encounterContext = context;
	        
        }

		public Encounter GetEncounter(int id)
		{
			return _encounterContext.Encounters.First(e => e.id == id); 
		}

		public ICollection<Encounter>SearchEncountersByTitle(string searchParam)
		{
			//var connection = _encounterContext.Database.GetDbConnection();
			var search = new EncounterSearch();
			return search.SearchFor(_encounterContext.Encounters, searchParam);
		}

        public Encounter UpdateEncounter(Encounter encounter)
		{
			_encounterContext.Update(encounter);
			_encounterContext.SaveChanges();
			return GetEncounter(encounter.id); 
		}

        public void DeleteEncounter(int id)
		{
			var encounter = GetEncounter(id);
			_encounterContext.Encounters.Remove(encounter);
			_encounterContext.SaveChanges(); 
		}
        
    }
}
