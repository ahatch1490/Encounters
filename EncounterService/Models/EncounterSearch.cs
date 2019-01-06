using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Marten.Util;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace EncounterService.Models
{
    public class EncounterSearch
    {
//        private readonly  IDbConnection _configuration;
//        public EncounterSearch(IDbConnection configuration)
//        {
//            _configuration = configuration; 
//        }

        public ICollection<Encounter> SearchFor(IQueryable<Encounter> query, string searchTerm)
        {
            return query.Where(x => EF.Functions.ILike(x.title, $"%{searchTerm}%")).ToList();
        }

        /// <summary>
        /// Does not work yet can't get the @params to handle ilike
        /// </summary>
        /// <param name="searchTerms"></param>
        /// <returns></returns>
//        public ICollection<Encounter> SearchFor(ICollection<string> searchTerms)
//        {
//
//            List<Encounter> encounters = new List<Encounter>();
//            using (var conn = new NpgsqlConnection(_configuration.ConnectionString))
//            {
//                using (var cmd = new NpgsqlCommand())
//                {
//                    cmd.Connection = conn; 
//                    conn.Open();
//                    var index = 0; 
//                    foreach (var term in searchTerms)
//                    {
//                        var parameterName = "param" + index;
//                        cmd.Parameters.AddWithValue($"{parameterName}",$"'%{term}%'");
////                        index++; 
////                        parameterName = "param" + index;
////                        cmd.Parameters.AddWithValue($"{parameterName}",$"{{{term}}}");
//                        index++; 
//                    }
// 
//                    var sql = new StringBuilder($"SELECT * FROM \"Encounters\" WHERE \"title\"  ILIKE   '%' || @{cmd.Parameters[0].ParameterName} || '%'");
//                    //sql.Append($" OR \"Tags\" @> '{{@{cmd.Parameters[1].ParameterName}}}'");
//                    
//                    cmd.CommandText = sql.ToString();
//                    
//                
//                    
//                    using (var reader = cmd.ExecuteReader())
//                    {
//                        while(reader.Read())
//                        {
//                            encounters.Add(    
//                                new Encounter
//                                {
//                                    id = Convert.ToInt32(reader["id"]),
//                                    title = reader["title"].ToString(), 
//                                    Description = reader["Description"].ToString(), 
//                                    Tags = reader["Tags"] != null ? (string []) reader["Tags"] : new string[] {} 
//                                }
//                            );
//                        }
//                    }
//                }
//            }
//
//            return encounters; 
//
//        }
//
//        private void AddSearchParam(ref IQueryable<Encounter> query, string term)
//        {
//
//
//            query = query.FromSql($"Where Ilike '%{term}%' ");
//            //.Where(x => EF.Functions.ILike(x.title, $"%{term}%"));
//
//        }

//        public IQueryable<Encounter> ToQuery()
//        {
//  //          return _query; 
//        }
    }
}