class Story {

    getStory() {
        if (!localStorage.getItem('pointdata')) {
            fetch('story.json')
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('pointdata', JSON.stringify(data));
                    const story = JSON.parse(localStorage.getItem('pointdata')).pop();
                    document.querySelector('#image').src = story.picture;
                    document.querySelector('.description').innerHTML = story.description;
                    document.querySelector('#title').innerHTML = `${story.name}`;
                });
        } else {
            const story = JSON.parse(localStorage.getItem('pointdata')).pop();
            document.querySelector('#image').src = story.picture;
            document.querySelector('.description').innerHTML = story.description;
            document.querySelector('#title').innerHTML = `${story.name}`;
        }
    }
}

const story = new Story();
story.getStory();