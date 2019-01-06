using System.Collections.Generic;

namespace EncounterService.Models.Interfaces
{
    public interface IEncounterRepository
    {
        Encounter GetEncounter(int id);
        ICollection<Encounter>SearchEncountersByTitle(string searchParam);
        Encounter UpdateEncounter(Encounter encounter);
        void DeleteEncounter(int id);
    }
}