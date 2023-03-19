using System.Text.Json.Serialization;

namespace RouteMap2.Models
{
    public class CoordinatesModel
    {
        [JsonPropertyName("lat")]
        public double Latitude { get; set; }
        [JsonPropertyName("lng")]
        public double Longtude { get; set; }
    }
}
