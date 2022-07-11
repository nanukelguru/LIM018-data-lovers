// Funciones para Ordenar Peliculas:

export function sortByScore(films) {
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

export function top10Films(films) {
  let scores = films.map(item => [item.title, item.rt_score]);
  //console.log(scores)
  scores.sort((a, b) => b[1] - a[1]);
  let films10 = [], scores10 = [];
  for (let i = 0; i < 10; i++) {
    films10[i] = scores[i][0];
    scores10[i] = scores[i][1];
  }
  return [films10, scores10];
}
