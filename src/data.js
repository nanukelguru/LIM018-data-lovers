export function getFilmDiv(film) { //<--- Creando contenedor html para las peliculas
  return `<div class="card" >
      <img id="${film.title}" class=filmposter src="${film.poster}" alt="imagen">
      <img id="star" src="images/estrellita.png">
      <p id="score">${film.rt_score}</p>
      <h2>${film.title}</h2>
      <p>${film.release_date}</p>
      </div>`
}

export function showFilms(dataFilms) {
  const filmCards = document.getElementById("filmCards") //<-- Llamando al contenedor de html
  filmCards.innerHTML = '';
  dataFilms.forEach(film => {
    filmCards.innerHTML += getFilmDiv(film)
  })
}

// Funciones para Ordenar Peliculas:

export function sortBy(films) {
  return films.sort(function (a, b) {
    return b.rt_score - a.rt_score
  })
}
export function sortAz(films) {
  return films.sort((a, b) => {
    if (a.title > b.title) { return 1 }
    if (a.title < b.title) { return -1 }
    return 0;
  });
}
export function sortZa(films) {
  return films.sort((a, b) => {
    if (a.title > b.title) { return -1 }
    if (a.title < b.title) { return 1 }
    return 0;
  });
}
export function sortLessOld(films) {
  return films.sort(function (a, b) {
    return b.release_date - a.release_date
  })
}
export function sortOldest(films) {
  return films.sort(function (a, b) {
    return a.release_date - b.release_date
  })
}

// Funciones para filtrar :

export function filterByDirector(films, director) {
  return films.filter(function (film) {
    return film.director === director
  })
}

export function filterByProductor(films, productor) {
  return films.filter(function (film) {
    return film.producer === productor
  })
}

// Funciones para mostrar informacion de las peliculas en ventana modal:

export function getInformationDiv(film) {
  const filmInformation = document.createElement("div");
  filmInformation.innerHTML = `<div class="ventanamodal">
      <h2>${film.title}</h2>
      <h3>${film.release_date}</h3>
      <p>${film.description}</p>
      </div>`
  const divFilmInformation = document.getElementById("filmInformation")
  divFilmInformation.removeChild(divFilmInformation.firstChild)
  divFilmInformation.appendChild(filmInformation)
}

// export function getCharacterDiv(people) { //<--- Creando contenedor html para las personajes
//   return `<div class="card" >
//       <img id="${people.name}" src="${people.img}" alt="imagen">
//       <h2>${people.name}</h2>
//       </div>`
// }

// export function showCharacters(dataFilms) {
//   const characterCards = document.getElementById("characters") //<-- Llamando al contenedor de html
//   characterCards.innerHTML = '';
//   dataFilms.forEach(character => {
//     characterCards.innerHTML += getCharacterDiv(character)
//   })
// }