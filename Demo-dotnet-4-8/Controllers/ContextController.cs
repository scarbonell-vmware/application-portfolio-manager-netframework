using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Http;
using Demo_dotnet_4_8.Services;
using Demo_dotnet_4_8.Models;
using Newtonsoft.Json;
using System.Collections;
using System.Linq;

namespace Demo_dotnet_4_8.Controllers
{
    public class ContextController : ApiController
    {

        [System.Web.Http.HttpGet()]
        [System.Web.Http.Route("api/envProps")]
        public Dictionary<string, string> EnvProps()
        {

            var entries = Environment.GetEnvironmentVariables().Cast<DictionaryEntry>();
            var map = new Dictionary<string, string>();
            foreach (var entry in entries)
            {
                map.Add(entry.Key.ToString(), entry.Value.ToString());
         
            }

            return map;
        }

        [System.Web.Http.HttpGet()]
        [System.Web.Http.Route("api/version")]
        public Dictionary<string, string> Version()
        {

            var map = new Dictionary<string, string>
            {
                { "name", "1.0.0" }
            };

            return map;
        }


    }
}
