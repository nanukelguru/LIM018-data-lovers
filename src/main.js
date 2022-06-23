import {showFilms, sortAz} from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(films, data);

// let dataFilms;               //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;


// Jalando todo los links de los posters de la data
// const posters = dataFilms.map(dataFilms => (dataFilms.poster));
sortAz(data.films)
showFilms(data.films)



let linkPeliculas = document.getElementById("linkPeliculas")
let linkInicio = document.getElementById("linkInicio")
let home = document.getElementById("home")
let films1 = document.getElementById("films")

/* Mostrar films y remover encabezado1*/
linkPeliculas.addEventListener('click',() => {
    home.style.display = "none";
    films1.style.display = "inline";
})

linkInicio.addEventListener('click', () => {
    home.style.display = "inline";
    films1.remove('films1')
   
})
// let checkboxes = document.querySelector('.checkbox');
// for(let checkbox of checkboxes){
//     checkbox.addEventListener('click', function(){
//         if(this.checked == true) {
//             console.log(this.value);
//         } else {
//             console.log('aprieta check por fa');
//         }
//     })
// }

// let checkbox = document.querySelector("filtros");
// console.log(checkbox.checked);

// if(checkbox.checked){
//     console.log("the checkbox is checked");
// }
let checkboxes = document.getElementsByName('filtros')