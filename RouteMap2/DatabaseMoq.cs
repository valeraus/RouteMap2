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
                        Latitude = 50.483148703278935,
                        Longtude = 30.396801754790605
                    },
                    Destination = new CoordinatesModel()
                    {
                        Latitude = 50.44952836682165,
                        Longtude = 30.600016080711644
                    },
                    Waypoints = new List<CoordinatesModel>()
                },
                new RouteModel()
                {
                    Id = 2,
                    Origin = new CoordinatesModel()
                    {
                        Latitude = 50.483148703278935,
                        Longtude = 30.396801754790605
                    },
                    Destination = new CoordinatesModel()
                    {
                        Latitude = 50.471563017418255,
                        Longtude = 30.519831155804976
                    },
                    Waypoints = new List<CoordinatesModel>()
                },
                new RouteModel()
                {
                    Id = 3,
                    Origin = new CoordinatesModel()
                    {
                        Latitude = 50.483148703278935,
                        Longtude = 30.396801754790605
                    },
                    Destination = new CoordinatesModel()
                    {
                        Latitude = 50.45468500400255,
                        Longtude = 30.479231286566485
                    },
                    Waypoints = new List<CoordinatesModel>()
                }
            };
        }
    }
}
