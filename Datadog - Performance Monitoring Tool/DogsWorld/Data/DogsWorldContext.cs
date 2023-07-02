using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DogsWorld.Models;

namespace DogsWorld.Data
{
    public class DogsWorldContext : DbContext
    {
        public DogsWorldContext (DbContextOptions<DogsWorldContext> options)
            : base(options)
        {
        }

        public DbSet<DogsWorld.Models.Dog> Dog { get; set; }
    }
}
