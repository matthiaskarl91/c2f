export default class Waypoint {
    constructor(lat, long, id, resolved, picture) {
        this.lat = lat;
        this.long = long;
        this.id = id;
        this.resolved = resolved;
        this.picture = picture;
        this.url = `details.html?id=${this.id + 1 }`;
    }

    getCoordinates() {
        return [this.lat, this.long];
    }

    getOverlayMarkup() {
        return `
        <div>
            <a href="${this.url}">
                <img src="${this.picture}" alt="Frauenkirche" style="height: 120px; width: 120px;" />
            </a>
        </div>
        `;
    }
}