import {createDataFilms} from './data.js';
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

// const filmCards = dataFilms.map(function(dataFilms){ 
//     return createDataFilms(dataFilms)
// })


const titles = dataFilms.map(dataFilms => (dataFilms.title))
// // console.log(title)


// const cards = document.getElementById("filmCards") 
// // cards.innerHTML = filmCards.join('')


const cards = document.getElementById("filmCards") 



// SI FUNCIONA
posters.forEach(poster => {
cards.innerHTML+= `<img src="${poster}" alt="imagen">`
})

titles.forEach(title => {
    cards.innerHTML+= `<p>"${title}"</p>`
    })

// dataFilms.forEach(function (elemento) {
// filmCards.innerHTML+= 
// `<img src="${poster}" alt="imagen">`


    // })




// SALE CON INDICES
// posters.forEach((poster, title) => {
//     filmCards.innerHTML+= `
//     <img src="${poster}" alt="imagen">
//     <p>"${title}</p>`
// })



// PRUEBA DE EJEMPLO DE STACKOVERFLOW
// function galeria(dataFilms) {
//     let html = '';
    
//     imagenes.forEach(function(dataFilms){
//       html += `
//         <div class="galeria-item">
//           <img src="${dataFilms.poster}" alt="imagen" width="200px" />
//           <h3>${dataFilms.tittle}</h3>
//           <p>${dataFilms.release_date}</p>
//         </div>
//       `;
//     });
    
//     $('#filmCards').html(html);
//   }
  
//   $(function() {
//     galeria(dataFilms);
//   });






// })


