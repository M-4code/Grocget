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
        [Route("GetProduct/{id}")]
        [HttpGet]
        public ActionResult<Product> GetProduct(int id)
        {
            return new Product() { Id = 1, Name = "Vegetable Oil", ProdCatId = 1, Price = 203.50 };
        }

        [Route("GetProducts")]
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return new List<Product>() { new Product() { Id = 1, Name = "Vegetable Oil", ProdCatId = 1, Price = 203.50 },
            new Product() { Id = 2, Name = "Coconut Oil", ProdCatId = 1, Price = 103.70 }};
        }
    }
        

}