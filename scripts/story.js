class Story {

    getStory() {
        if (!sessionStorage.getItem('pointdata')) {
            fetch('story.json')
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('pointdata', JSON.stringify(data));
                    const story = JSON.parse(sessionStorage.getItem('pointdata')).pop();
                    document.querySelector('#image').src = story.picture;
                    document.querySelector('.description').innerHTML = story.description;
                    document.querySelector('#title').innerHTML = `${story.name}`;
                });
        } else {
            const story = JSON.parse(sessionStorage.getItem('pointdata')).pop();
            document.querySelector('#image').src = story.picture;
            document.querySelector('.description').innerHTML = story.description;
            document.querySelector('#title').innerHTML = `${story.name}`;
        }
    }
}

const story = new Story();
story.getStory();