const h2 = document.createElement('h2');
const ol = document.createElement('ol');

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
        ol.appendChild(li);
    }
}


getAllArtist();