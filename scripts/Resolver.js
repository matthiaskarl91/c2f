class Resolver {
    resolve(id) {
        const story = JSON.parse(sessionStorage.getItem('pointdata'));
        const data = story[0].points;
        const index = data.findIndex((waypoint) => waypoint.id === id);
        data[index].resolved = 1;
        story.points = data;
        sessionStorage.setItem('pointdata', JSON.stringify(story));
    }

    getDetails(id) {
        const detail = JSON.parse(sessionStorage.getItem('pointdata')).pop().points.find(detail => detail.id === id);
        document.querySelector('#image').src = detail.picture;
        document.querySelector('.description').innerHTML = detail.description;
        document.querySelector('#title').innerHTML = `${id}.  ${detail.name}`;
    }
}

const resolver = new Resolver();
const id = parseInt(location.search.slice(1).split('=')[1]);
resolver.resolve(id);
resolver.getDetails(id);

