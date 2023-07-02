using System;

namespace DogsWorld.Models
{
    public class Dog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public int Age { get; set; }
        public DateTime BirthDate { get; set; }
        public bool HasOwner { get; set; }
    }
}
