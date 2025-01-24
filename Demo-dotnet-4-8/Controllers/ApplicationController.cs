using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Http;
using Demo_dotnet_4_8.Services;
using Demo_dotnet_4_8.Models;
using Newtonsoft.Json;

namespace Demo_dotnet_4_8.Controllers
{
    public class ApplicationController : ApiController
    {

        private ApplicationRepository applicationRepository;

        public ApplicationController()
        {
            this.applicationRepository = new ApplicationRepository();
        }


        // POST api/values
        public void Post([FromBody] Application application)
        {
  
            //var application = JsonConvert.DeserializeObject<Application>(value);
            this.applicationRepository.saveApplication(application);
;
        }

        public List<Application> Get()
        {
            return this.applicationRepository.GetAllApplications();
        }
      
    }
}
