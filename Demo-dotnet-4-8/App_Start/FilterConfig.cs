﻿using System.Web;
using System.Web.Mvc;

namespace Demo_dotnet_4_8
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
