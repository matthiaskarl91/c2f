import Waypoint from './Waypoint.js';

class MapView {
    constructor() {
        this.token = 'pk.eyJ1Ijoic2NoYWZmaSIsImEiOiJjam5odngwOXUwZ3RtM3FrZm9yemN2eHhlIn0.PxTklDfVE6zxZIkiHJwTdg';
        if (!localStorage.getItem('pointdata')) {
            fetch('story.json')
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('pointdata', JSON.stringify(data))
                });
            this.waypoints = JSON.parse(localStorage.getItem('pointdata')).pop().points.map(waypoint => new Waypoint(waypoint.lat, waypoint.lng, waypoint.id, waypoint.resolved, waypoint.picture));
            this.init();
        } else {
            this.waypoints = JSON.parse(localStorage.getItem('pointdata')).pop().points.map(waypoint => new Waypoint(waypoint.lat, waypoint.lng, waypoint.id, waypoint.resolved, waypoint.picture));
            this.init();
        }
    }

    init() {
        const startpoint = this.waypoints[0];
        this.map = L.map('map').setView(startpoint.getCoordinates(), 16);
        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.token}`, {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: this.token
        }).addTo(this.map);

        this.setWaypoints();
    }

    setWaypoints(){
        this.waypoints.filter(waypoint => waypoint.resolved).forEach((waypoint, index, array) => {
            let icon = L.divIcon({className: 'waypoint'});
            if (index === array.length - 1) {
                icon = L.divIcon({className: 'waypoint active-wp'});
            }
            L.marker(waypoint.getCoordinates(), {icon}).addTo(this.map).bindPopup(waypoint.getOverlayMarkup(), {
                keepInView: true
            });
        })
    }
};

new MapView();