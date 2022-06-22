import {films} from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(films, data);

//JALANDO DATA DESDE J.SON

// let dataFilms;
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

const ghibli = data
// // console.log(ghibli)

const dataFilms = ghibli.films
// // console.log(dataFilms)

// Jalando todo los links de los posters de la data
const posters = dataFilms.map(dataFilms => (dataFilms.poster));
// console.log(posters)

const title = dataFilms.map(dataFilms => (dataFilms.title))
// console.log(title)

const filmCards = document.getElementById("filmCards") 

posters.forEach(poster => {
filmCards.innerHTML+= `<img src="${poster}" alt="imagen">`
})

// posters.forEach((poster, title) => {
//     filmCards.innerHTML+= `
//     <img src="${poster}" alt="imagen">
//     <p>"${title}</p>`
// })

// })
let linkPeliculas = document.getElementById("linkPeliculas")
let home = document.getElementById("home");

/* Mostrar films y remover encabezado1*/
linkPeliculas.addEventListener('click',() => {
    home.style.display = "none";
    films.style.display = "inline";
})

