using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Umbraco.Core.Services;
using Umbraco.Web.WebApi;

namespace Codegarden2018Group1.ProjectApi
{
    public class TestController : UmbracoApiController
    {
    
       
        [HttpGet]
        public List<Blogs> GetBlogs()
        {
         
            List<Blogs> result = new List<Blogs>();
            var cs = Services.ContentService;
            var blogitems = cs.GetChildren(1087);


            foreach (var blog in blogitems)
            {

                var b = new Blogs();
                b.Headline = blog.Properties["linkBlockHeadline"].Value.ToString();
            
            }
            return result;
        }
        [HttpGet]
        public string Hello()
        {
            return "Hello";
        }
        [HttpGet]
        public List<Car> GetCars()
        {
            List<Car> cars = new List<Car>();
            for (int i = 0; i < 10; i++)
            {
                cars.Add(new Car { Name = "Car " + i, Doors = i }); 
            }
            return cars;
        }
    }
    public class Car
    {
        public string Name { get; set; }
        public int Doors { get; set; }
    }
    public class Blogs
    {
        public string Headline { get; set; }
        public int Id { get; set; }
    }
}