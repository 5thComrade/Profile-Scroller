const data = [
    {
        name: 'John Doe',
        age: '32',
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Robert Carlos',
        age: '38',
        gender: 'male',
        lookingfor: 'female',
        location: 'Las Vegas NV',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name: 'Dirty Diana',
        age: '27',
        gender: 'female',
        lookingfor: 'male',
        location: 'New York NY',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for, ${currentProfile.lookingfor}.</li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        //No More profiles so reload the page
        window.location.reload();
    }
    
}

//Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true}
        }
    };
}