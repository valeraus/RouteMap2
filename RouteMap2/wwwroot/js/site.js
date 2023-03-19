function RouteMap(directionsService, directionsRenderer, data) {
    console.log(data);
    directionsService
        .route({
            origin: data.origin,
            destination: data.destination,
            waypoints: data.waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.WALKING, //DRIVING WALKING
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
}





function initMap() {
    var el = app.InitMapElement();

    var map = new google.maps.Map(el, {
        center: { lat: 50.44952836682165, lng: 30.600016080711644 },
        disableDefaultUI: true,
        zoom: 12,
    });

    let infoWindow = new google.maps.InfoWindow({
        content: "Моя работа!",
        position: { lat: 50.44952836682165, lng: 30.600016080711644 },
    });

    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            //JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
            "Центральная точка"
        );
        infoWindow.open(map);
    });
    el.addEventListener("view-info", (e) => {
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow(e.detail);

        infoWindow.open(map);
    });

    infoWindow.open(map);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    el.addEventListener("path-update", (e) => {

        RouteMap(directionsService, directionsRenderer, e.detail);
        directionsRenderer.setMap(map);
    });
}
window.initMap = initMap;