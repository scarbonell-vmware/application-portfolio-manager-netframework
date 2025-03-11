using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using Demo_dotnet_4_8.Models;
using System.Configuration;
using Npgsql;
using Application = Demo_dotnet_4_8.Models.Application;

namespace Demo_dotnet_4_8.Services
{
    public class ApplicationRepository
    {
        private const string CacheKey = "ApplicationStore";
        private const string dbUrl= "Host=q-s0.postgres-instance.dhaka-services-subnet.service-instance-f0b88221-9b8e-413f-a596-badd53abc70e.bosh;Port=5432;Database=postgres;Username=pgadmin;Password=107Lj6J5lU28SF3v49ky;";
        public ApplicationRepository()
        {
            var ctx = HttpContext.Current;

            if (ctx != null)
            {
                if (ctx.Cache[CacheKey] == null)
                {
                    var applications = new Application[]
                    {
                new Application
                {
                    Id = 1, Name = "Glenn Block"
                },
                new Application
                {
                    Id = 2, Name = "Dan Roth"
                }
                    };

                    ctx.Cache[CacheKey] = applications;
                }
            }

            //this.dbUrl = GetConnectionStringByName("dbUrl");
     
        }

        public void saveApplication(Application app)
        {
            
           
            NpgsqlConnection objConn = new NpgsqlConnection(dbUrl);
            objConn.Open();
            var cmd = new NpgsqlCommand("INSERT INTO \"Applications\" (\"Name\", \"Description\",\"BusinessEntity\",\"BusinessOwner\",\"Identifier\", \"Organization\") VALUES ('"+app.Name+ "','"+app.Description+ "','"+app.BusinessEntity+"','"+ app.BusinessOwner + "','"+ app.Identifier + "','"+ app.Organization + "')", objConn);
            cmd.ExecuteNonQuery();
            objConn.Close();
        }

        public static string GetConnectionStringByName(string name)
        {
            // Look for the name in the connectionStrings section.
            ConnectionStringSettings settings =
                ConfigurationManager.ConnectionStrings[name];

            // If found, return the connection string (otherwise return null)
            return settings?.ConnectionString;
        }

        public List<Application> GetAllApplications()
        {

            var apps = new System.Data.DataSet();
            NpgsqlConnection objConn = new NpgsqlConnection(dbUrl);
            objConn.Open();
            string strSelectCmd = "select * from \"Applications\"";
            NpgsqlDataAdapter objDataAdapter = new NpgsqlDataAdapter(strSelectCmd, objConn);
            objDataAdapter.Fill(apps);

            List<Application> appList = new List<Application>();
            foreach (System.Data.DataRow dr in apps.Tables[0].Rows)
            {
                appList.Add(new Application
                {
                    Name = Convert.ToString(dr["Name"]),
                    Description = Convert.ToString(dr["Description"]),
                    Identifier = Convert.ToString(dr["Identifier"]),
                    BusinessEntity = Convert.ToString(dr["BusinessEntity"]),
                    BusinessOwner = Convert.ToString(dr["BusinessOwner"]),
                    Organization = Convert.ToString(dr["Organization"])
                });
            }

            objConn.Close();

            return appList;
        }
    }
}