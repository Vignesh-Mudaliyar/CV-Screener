console.log('Cv Screener');

var data = [
    {
        name: 'Vignesh Mudaliyar',
        age: 18,
        city: 'Ahmedabad',
        language: 'JavaScript',
        Framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name: 'Rahul pandey',
        age: 25,
        city: 'Banglore',
        language: 'Python',
        Framework: 'django',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Ashu ronak',
        age: 58,
        city: 'Chennai',
        language: 'C++',
        Framework: 'react',
        image: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
        name: 'Dhaval pandey',
        age: 70,
        city: 'surat',
        language: 'Java',
        Framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/men/48.jpg'
    },
    {
        name: 'Maya panchal',
        age: 19,
        city: 'mumbai',
        language: 'Ruby',
        Framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/62.jpg'
    },
    {
        name: 'Aarti chubey',
        age: 17,
        city: 'Rajkot',
        language: 'JavaScript',
        Framework: 'Node JS',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Vignesh bhavai',
        age: 18,
        city: 'vadodara',
        language: 'JavaScript',
        Framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name: 'manthan',
        age: 18,
        city: 'pune',
        language: 'Java',
        Framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Vinit',
        age: 85,
        city: 'Pondichery',
        language: 'PHP',
        Framework: 'Larawel',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    }
];
// screener();
function cviterators(profile) {
    let nextindex = 0;
    return {
        next: function () {

            if (nextindex < profile.length) {
                return {
                    value: profile[nextindex++],
                    done: false
                }
            }
            else {
                return { done: true }
            }
        }
    }
}


var iterator = cviterators(data)

let next = document.getElementById('next');
screener();
next.addEventListener('click', screener);

function screener() {

    let iterator2 = iterator.next().value;
    let img = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (iterator2 != undefined) 
    {
        img.innerHTML = `<img class="img" src="${iterator2.image}">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item pfile">Name : ${iterator2.name}</li>
        <li class="list-group-item pfile">Age :${iterator2.age}</li>
        <li class="list-group-item pfile">Lives in ${iterator2.city}</li>
        <li class="list-group-item pfile">Works in : ${iterator2.language}</li>
        <li class="list-group-item pfile">with ${iterator2.Framework} Framework</li>
        </ul>'`;
    }
    else {
        alert('All caniddate completed');
        window.location.reload();
    }
}


