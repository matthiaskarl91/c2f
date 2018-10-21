import Waypoint from './Waypoint.js';

class MapView {
    constructor() {
        this.token = 'pk.eyJ1Ijoic2NoYWZmaSIsImEiOiJjam5odngwOXUwZ3RtM3FrZm9yemN2eHhlIn0.PxTklDfVE6zxZIkiHJwTdg';
        this.waypoints = JSON.parse(sessionStorage.getItem('waypoints')).map(waypoint => new Waypoint(waypoint.lat, waypoint.long, waypoint.id, waypoint.resolved));
        this.init();
    }

    init() {
        this.map = L.map('map').setView([48.1917381, 11.648420699999999], 11);
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