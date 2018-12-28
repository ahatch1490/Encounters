using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace EncounterService.Models
{
	public class EncounterRepository
    {
		public EncounterRepository() { }
		private readonly EncounterContext _encounterContext;

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
			return _encounterContext.Encounters.Where(x => EF.Functions.ILike(x.title, searchParam)).ToList();
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
