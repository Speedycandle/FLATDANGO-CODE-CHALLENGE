const filmListContainer = document.getElementById('filmListContainer');
const posterCard = document.getElementById('posterCard');
const infoCard = document.getElementById('infoCard');


let films;

// Function to fetch film data from API endpoint
async function fetchFilms() {
    // try-catch block to handle any errors that may occur while fetching data
  try {
    // send GET request to 'http://localhost:3000/films' to retrieve film data
    const response = await fetch('http://localhost:3000/films');
    films = await response.json();
    displayFilmList();
    displayFilmInfo(films[0].id);
  } catch (error) {
    console.error(error);
  }
}
