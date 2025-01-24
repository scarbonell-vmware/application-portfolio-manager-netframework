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
        /*
        // GET: Application
        public ActionResult Index()
        {
            return View();
        }

        // GET: Application/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Application/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Application/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Application/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Application/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Application/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Application/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

       

        */
    }
}
