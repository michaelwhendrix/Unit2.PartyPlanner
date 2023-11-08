/*
The baseURL is used to shorten the argument in the fetch function


*/
const baseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF`;

const state ={
    allArtists:[]
}
const h2 = document.createElement('h2');
const ol = document.createElement('ol');
const nameArtist = document.createElement('p');
const description = document.createElement('p');
const img = document.createElement('img');

const main = document.querySelector('main');

const getAllArtist = async() => {
    const response = await fetch(`${baseURL}/artists`);
    const jsonResponse = await response.json();
    state.allArtists = jsonResponse.data;
    renderAllArtist();
}

const renderAllArtist = () => {
    h2.innerText = "Artists";
    main.appendChild(h2);
    main.appendChild(ol);

    const artistNames = state.allArtists.map((singleArtist) => {
        return `<li>${singleArtist.name}</li>`;
    });
    ol.innerHTML = artistNames.join('------');
    main.appendChild(ol);
}
    getAllArtist();