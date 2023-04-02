var app = new Vue({
    el: "#app",
    data: {
        show: false,
        edit: false,
        message: "Tut",
        origin: { lat: 50.44952836682165, lng: 30.600016080711644 },
        destination: { lat: 50.48307483695035, lng: 30.39718793209465 },
        waypoints: [],
        id: 0,
        picked: 'Авто',
        lengthpath: 0
    },
    methods: {
        MenuShow() {
            if (this.show == true) {
                this.show = false
            }
            else {
                this.show = true;
            }
            //var event = new CustomEvent("view-info", {
            //    detail: {
            //        content: "Передали",
            //        position: { lat: 50.44952836682165, lng: 30.600016080711644 },
            //    }
            //});
            //this.$refs.map.dispatchEvent(event);
        },
        InitMapElement() {
            return this.$refs.map;
        },

        InitOriginElement() {
            return this.$refs.origin;
        },

        InitDestinationElement() {
            return this.$refs.destination;
        },

        RouteMap() {
            var event = new CustomEvent("path-update", {
                detail: {
                    origin: this.origin,
                    destination: this.destination,
                    waypoints: this.waypoints
                }
            });
            this.$refs.map.dispatchEvent(event);
        },
        AddWaypoint() {
            this.waypoints.push({
                location: { lat: 50.45464393234918, lng: 30.479264484049956 },
                stopover: true
            })
        },
        BuiltRoute() {
            var params = new URLSearchParams();
            params.append("id", this.id);

            axios.get("Home/GetRoute", { params }).then((response) => {
                    this.origin = response.data.origin;
                    this.destination = response.data.destination;
                    this.waypoints = response.data.waypoints;
                    this.RouteMap();
            })
        },
        AddMarker() {
            this.show = false;
            this.edit = true;
            this.lengthpath = 0;
            this.waypoints = [];
            //path-reset
            var event = new Event("path-reset");
            this.$refs.map.dispatchEvent(event);
        },
        RoteUprove() {
            //this.show = true;
            this.edit = false;
            this.destination = this.waypoints.pop().location;
            this.RouteMap();
        },
        AddPoint(coord) {
            console.log(coord);
            if (this.lengthpath == 0) {
                this.origin = coord;
            }
            else {
                this.waypoints.push({
                    location: coord,
                    stopover: true
                })
            }
            this.lengthpath++;
        }
    }
})