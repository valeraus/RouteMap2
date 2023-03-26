using Microsoft.AspNetCore.Mvc;
using RouteMap2.Models;
using System.Diagnostics;

namespace RouteMap2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        public IActionResult Navigation()
        {
            return View();
        }
        public IActionResult GetRoute(int id)
        {
            var route = DatabaseMoq.Routes.FirstOrDefault(r => r.Id == id);
            if (route != null)
            {
                return Json(route);
            }
            return BadRequest();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}