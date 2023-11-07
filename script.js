const h2 = document.createElement('h2');
const main = document.querySelector('main');



const getAllArtist = async() => {
    h2.innerText = "Artists";
    main.appendChild(h2);
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/artists");
    const artistInfo = await response.json();
    
    for(let i =0; i < artistInfo.data.length; i++){
    console.log(artistInfo.data[i].name);
    }
}


getAllArtist();