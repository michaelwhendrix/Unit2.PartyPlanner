const h2 = document.createElement('h2');
const ol = document.createElement('ol');
const nameArtist = document.createElement('p');
const descriptionArtist = document.createElement('p');
const imgArtist = document.createElement('img');

const main = document.querySelector('main');


const getAllArtist = async() => {

    
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/artists");
    const artistInfo = await response.json();

    h2.innerText = "Artists";
    main.appendChild(h2);
    main.appendChild(ol);

    for(let i =0; i < artistInfo.data.length; i++){

        const li = document.createElement('li');
        li.innerText = artistInfo.data[i].name;

        li.addEventListener('click', () => {
        main.innerHTML = '';
        nameArtist.innerText = artistInfo.data[i].name;
        descriptionArtist.innerText = artistInfo.data[i].description;
        imgArtist.src = artistInfo.data[i].imageUrl;

        main.appendChild(nameArtist);
        main.appendChild(descriptionArtist);
        main.appendChild(imgArtist);

        console.log(artistInfo.data[i]);
        });

        ol.appendChild(li);

        }

    
}

//const getSingleArtist = async(id) => {

//}
getAllArtist();