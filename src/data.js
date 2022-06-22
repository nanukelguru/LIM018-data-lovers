export function showFilms(dataFilms) {
  const filmCards = document.getElementById("filmCards") //<-- Llamando al contenedor de html
    dataFilms.forEach(film => {
        filmCards.innerHTML+= getFilmDiv(film)
    })
}

export function getFilmDiv(film) {
  return `<div class="card">
      <img src="${film.poster}" alt="imagen">
      <img id="star" src="images/estrellita.png">
      <p id="score">${film.rt_score}</p>
      <h2>${film.title}</h2>
      <p>${film.release_date}</p>
      </div>`
 }