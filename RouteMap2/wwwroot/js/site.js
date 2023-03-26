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


const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
    var el = app.InitMapElement();

    var map = new google.maps.Map(el, {
        center: { lat: 50.44952836682165, lng: 30.600016080711644 },
        disableDefaultUI: true,
        zoom: 12,
    });

    let infoWindow = new google.maps.InfoWindow({
        content: "Моя робота!",
        position: { lat: 50.44952836682165, lng: 30.600016080711644 },
    });
    let markers = [];

    map.addListener("click", (mapsMouseEvent) => {
        if (app.edit) {
            // Close the current InfoWindow.
            infoWindow.close();
            // Create a new InfoWindow.
            infoWindow = new google.maps.InfoWindow({
                position: mapsMouseEvent.latLng,
            });
            infoWindow.setContent(
                //JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
                (labelIndex + 1) + " точка"
            );
            infoWindow.open(map);
            markers.push(
                new google.maps.Marker({
                    position: mapsMouseEvent.latLng,
                    label: labels[labelIndex++ % labels.length],
                    map: map,
                })
            )
            app.AddPoint(mapsMouseEvent.latLng.toJSON());
        }
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
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
        labelIndex = 0;
        RouteMap(directionsService, directionsRenderer, e.detail);
        directionsRenderer.setMap(map);
    });
    el.addEventListener("path-reset", (e) => {
        directionsRenderer.setMap(null);
    })


    // Add a marker at the center of the map.
    //addMarker({ lat: 50.44952836682165, lng: 30.600016080711644 }, map);
}

window.initMap = initMap;