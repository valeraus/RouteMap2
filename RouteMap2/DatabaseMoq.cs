using RouteMap2.Models;

namespace RouteMap2
{
    public static class DatabaseMoq
    {
        public static List<RouteModel> Routes { get; set; }
        static DatabaseMoq()
        {
            Routes = new List<RouteModel>()
            {
                new RouteModel()
                {
                    Id = 1,
                    Origin = new CoordinatesModel()
                    {
                        Latitude = 50.449,
                        Longtude = 30.6
                    },
                    Destination = new CoordinatesModel()
                    {
                        Latitude = 50.483,
                        Longtude = 30.397
                    },
                    Waypoints = new List<CoordinatesModel>()
                },
                new RouteModel()
                {
                    Id = 2,
                    Origin = new CoordinatesModel()
                    {
                        Latitude = 55,
                        Longtude = 33
                    },
                    Destination = new CoordinatesModel()
                    {
                        Latitude = 56,
                        Longtude = 67
                    },
                    Waypoints = new List<CoordinatesModel>()
                }
            };
        }
    }
}
