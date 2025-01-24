using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_dotnet_4_8.Models
{
    public class Application
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Organization { get; set; }
        public string BusinessEntity { get; set; }
        public string BusinessOwner { get; set; }
        public string Identifier { get; set; }
    }
}