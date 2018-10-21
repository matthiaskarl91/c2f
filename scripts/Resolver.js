class Resolver {
    resolve(id) {
        const data = JSON.parse(sessionStorage.getItem('waypoints'));
        const index = data.findIndex((waypoint) => waypoint.id === id);
        data[index].resolved = true;

        sessionStorage.setItem('waypoints', JSON.stringify(data));
    }
}

const resolver = new Resolver();
const id = parseInt(location.search.slice(1).split('=')[1]);
resolver.resolve(id);

