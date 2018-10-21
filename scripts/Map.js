//import {Map} from '../node_modules/leaflet'; //npm package

export default class MapView {
    constructor() {
        this.map = new Map('map').setView([51.505, -0.09], 13);
    }
}