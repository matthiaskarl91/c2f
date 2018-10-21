class Story {

    getStory() {
        const story = JSON.parse(sessionStorage.getItem('pointdata')).pop();
        document.querySelector('#image').src = story.picture;
        document.querySelector('.description').innerHTML = story.description;
        document.querySelector('#title').innerHTML = `${story.name}`;
    }
}

const story = new Story();
story.getStory();