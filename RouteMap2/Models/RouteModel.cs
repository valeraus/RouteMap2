namespace RouteMap2.Models
{
    public class RouteModel
    {
        public int Id { get; set; }
        public CoordinatesModel Origin { get; set; }
        public CoordinatesModel Destination { get; set; }
        public List<CoordinatesModel> Waypoints { get; set; }
    }
}
