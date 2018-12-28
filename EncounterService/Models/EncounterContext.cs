using System;
using Microsoft.EntityFrameworkCore; 

namespace EncounterService.Models
{
	public class EncounterContext : DbContext
	{
		public EncounterContext(DbContextOptions<EncounterContext> options)
               : base(options)
        { }

        public DbSet<Encounter> Encounters { get; set; } 
    }
}
