import { showFilms, sortBy, sortAz, sortZa, sortOldest, sortLessOld, filterByDirector, filterByProductor, getInformationDiv} from './data.js';
import data from './data/ghibli/ghibli.js';

// let dataFilms;             //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

const linkPeliculas = document.getElementById("linkPeliculas")
const linkInicio = document.getElementById("linkInicio")
const linkPersonajes = document.getElementById("linkPersonajes")
const linkCriaturas = document.getElementById("linkCriaturas")
const linkStats = document.getElementById("linkEstadisticas")

const home = document.getElementById("home")
const films = document.getElementById("films")
const personajes = document.getElementById("personajes")
const criaturas = document.getElementById("criaturas")
const estadisticas = document.getElementById("estadisticas")


linkPeliculas.addEventListener('click', () => { // <---- Mostrar Peliculas
    home.style.display = "none";
    personajes.style.display = "none";
    criaturas.style.display = "none";
    estadisticas.style.display = "none";
    films.style.display = "inline";
})

linkInicio.addEventListener('click', () => { //<---- Mostrar Inicio
    home.style.display = "inline";
    personajes.style.display = "none";
    criaturas.style.display = "none";
    estadisticas.style.display = "none";
    films.style.display = "none";
})

linkPersonajes.addEventListener("click", () => { //<---- Mostrar Personajes
    home.style.display = "none";
    films.style.display = "none";
    criaturas.style.display = "none";
    estadisticas.style.display = "none";
    personajes.style.display = "inline";
})

linkCriaturas.addEventListener("click", () => { //<---- Mostrar Criaturas
    home.style.display = "none";
    films.style.display = "none";
    criaturas.style.display = "inline";
    estadisticas.style.display = "none";
    personajes.style.display = "none";
})

linkStats.addEventListener("click", () => { //<---- Mostrar Stats
    home.style.display = "none";
    films.style.display = "none";
    criaturas.style.display = "none";
    estadisticas.style.display = "inline";
    personajes.style.display = "none";
})


showFilms(data.films) //----> Mostrando cards de peliculas

const inputSearch = document.getElementById("searchFilms")

inputSearch.addEventListener("keyup", e => {   //----> Funcionalidad de la busqueda
    let resultSearch = data.films.filter((film) => {
        return film.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    showFilms(resultSearch);
    
});


let popularidad = document.getElementById("Popularidad") //-----> Ordenando las peliculas por popularidad
popularidad.addEventListener("click", function () {
    showFilms(sortBy(data.films))
})

let AZ = document.getElementById("AZ"); //----> Ordenando de la A-Z
AZ.addEventListener("click", function () {
    showFilms(sortAz(data.films))
})

let ZA = document.getElementById("ZA"); //----> Ordenando de la Z-A
ZA.addEventListener("click", function () {
    showFilms(sortZa(data.films))
})

let masAntiguo = document.getElementById("masAntiguo"); //----> Ordenando por más antiguo 
masAntiguo.addEventListener("click", function () {
    showFilms(sortOldest(data.films))
})

let menosAntiguo = document.getElementById("menosAntiguo"); //----> Ordenando por menos antiguo 
menosAntiguo.addEventListener("click", function () {
    showFilms(sortLessOld(data.films))
})

let byDirector = document.getElementById("directores"); //----> Filtrando por Director
byDirector.addEventListener("click", function (event) {
    const director = event.target.innerHTML
    showFilms(filterByDirector(data.films, director))
})

let byProducer = document.getElementById("productores"); //----> Filtrando por Productor
byProducer.addEventListener("click", function (event) {
    const productor = event.target.innerHTML
    showFilms(filterByProductor(data.films, productor))
})

let showInformation = document.querySelectorAll(".filmposter");
showInformation.forEach(film => {
    film.addEventListener("click", function (event) {
        const title = event.target.id
        getInformationDiv(data.films.find((film)=> film.title === title )) //----> Mostrando la informacion de las peliculas
    })
})










// const directores = data.films.map(function(dataFilms){
//         return dataFilms.director
// })
// console.log(directores)

