using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Umbraco.Web.WebApi;

namespace Codegarden2018Group1.ProjectApi
{
    public class TestController : UmbracoApiController
    {
        [HttpGet]
        public string Hello()
        {
            return "Hello";
        }
    }
}