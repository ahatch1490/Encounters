using Microsoft.EntityFrameworkCore;

namespace EncounterService.Models
{
    public interface IEncounterContext
    {
        DbSet<Encounter> Encounters { get; set; }
    }
}