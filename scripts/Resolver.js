class Resolver {
    resolve(id) {
        const data = JSON.parse(sessionStorage.getItem('waypoints'));
        const index = data.findIndex((waypoint) => waypoint.id === id);
        data[index].resolved = true;

        sessionStorage.setItem('waypoints', JSON.stringify(data));
    }

    getDetails(id) {
        const detail = JSON.parse(sessionStorage.getItem('pointdata')).find(detail => detail.id === id);
        document.querySelector('#image').src = detail.picture;
        document.querySelector('.description').innerHTML = detail.description;
        document.querySelector('#title').innerHTML = `${id}.  ${detail.name}`;
    }
}

const resolver = new Resolver();
const id = parseInt(location.search.slice(1).split('=')[1]);
resolver.resolve(id);
resolver.getDetails(id);

