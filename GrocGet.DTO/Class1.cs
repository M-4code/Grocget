using System;

namespace GrocGet.DTO
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ProdCatId { get; set; }
        public double Price { get; set; }
    }
}
