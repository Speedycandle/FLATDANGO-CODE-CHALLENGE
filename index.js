const filmListContainer = document.getElementById('filmListContainer');
const posterCard = document.getElementById('posterCard');
const infoCard = document.getElementById('infoCard');


let films;

// Function to fetch film data from API endpoint
async function fetchFilms() {