using FullStackAPI.Controllers.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options) 
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
