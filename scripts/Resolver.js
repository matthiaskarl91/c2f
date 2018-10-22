class Resolver {
    resolve(id) {
        const story = JSON.parse(localStorage.getItem('pointdata'));
        const data = story[0].points;
        const index = data.findIndex((waypoint) => waypoint.id === id);
        data[index].resolved = 1;
        story.points = data;
        localStorage.setItem('pointdata', JSON.stringify(story));
    }

    getDetails(id) {
        if (!localStorage.getItem('pointdata')) {
            fetch('story-jsmdh.json')
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('pointdata', JSON.stringify(data));
                    const detail = JSON.parse(localStorage.getItem('pointdata')).pop().points.find(detail => detail.id === id);
                    document.querySelector('#image').src = detail.picture;
                    document.querySelector('.description').innerHTML = detail.description;
                    document.querySelector('#title').innerHTML = `${id}.  ${detail.name}`;
                    id++;
                    resolver.resolve(id);
                });
        } else {
            const detail = JSON.parse(localStorage.getItem('pointdata')).pop().points.find(detail => detail.id === id);
            document.querySelector('#image').src = detail.picture;
            document.querySelector('.description').innerHTML = detail.description;
            document.querySelector('#title').innerHTML = `${id}.  ${detail.name}`;
            id++;
            resolver.resolve(id);
        }
    }
}

const resolver = new Resolver();
const id = parseInt(location.search.slice(1).split('=')[1]);

resolver.getDetails(id);

