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


//******function called by renderAllArtists to get the details of an artist
const getArtistDetails = async (artistId) => {
    const response = await fetch(`${baseURL}/artists/${artistId}`);
    const jsonResponse = await response.json();
    const artistDetails = jsonResponse.data;
    console.log(artistDetails);
    renderDetails(artistDetails);
}
///****************************


//******************************************
const renderDetails = (detailsOfArtist) => {
    const html = `
        <h2>${detailsOfArtist.name}</h2>

        <img src="${detailsOfArtist.imageUrl}" alt "image of artist performing" />

        <p>${detailsOfArtist.description}</p>
    `;
    main.innerHTML = html;
}

//***********funtion that is called be getAllArtists to render all artists in main on page
const renderAllArtist = () => {

    //adds title and the framework for ordered list of artits names
    h2.innerText = "Artists";
    main.appendChild(h2);
    main.appendChild(ol);

    //makes new array with multiple list item tags and name from artists array
    const artistNames = state.allArtists.map((singleArtist) => {
        return `<li id="${singleArtist.id}">${singleArtist.name}</li>`;
    });

    //transforms the array generated above to a string for adding to page
    ol.innerHTML = artistNames.join('------');
    main.appendChild(ol);

    // gets all list items from page and adds the eventListener
    const listItems = document.querySelectorAll('li');
    listItems.forEach((artistListItem) => {
        artistListItem.addEventListener('click', (event) => {
            console.log(event.target);
            getArtistDetails(event.target.id);
        });
    });

}
//**************
    getAllArtist();