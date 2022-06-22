import {showFilms} from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(films, data);

// let dataFilms;               //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;


// Jalando todo los links de los posters de la data
// const posters = dataFilms.map(dataFilms => (dataFilms.poster));

showFilms(data.films)




//})


