using System;
using System.Collections.Generic;

namespace EncounterService.Models
{
    public class Encounter
    {
		public int id { get; set; }
        public string title { get; set; }
        public string Description { get; set; }
		public string[] Tags { get; set; }
    }
}
