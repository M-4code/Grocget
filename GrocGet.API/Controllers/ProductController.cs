using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrocGet.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GrocGet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Product> Get()
        {
            return new Product() { Id = 1, Name = "Vegetabl Oil", ProdCatId = 1, Price = 203.50 };
        }
    }
        

}