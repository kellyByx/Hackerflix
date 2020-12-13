import './styles.scss';
import { movies } from './src/movies';

const app = document.getElementById('app');
// affichage des poster de films sur la page:
let moviesContainer = '<section class="containerFilms">';
moviesContainer += '<h1> "Films on the theme of "hacking"</h1>';
moviesContainer += '<button> Recent Film Only </button> </br>';
for (let i = 0; i < movies.length; i++) {
  if (movies[i].img) {
    moviesContainer += `  
    <img src='posters/${movies[i].imdb}.jpg' class="img"  id="${movies[i].imdb}" alt="afficheFilmHacking">
   `;
  } else {
    moviesContainer += `<img class="img imgColorer"  id="${movies[i].imdb}">`;
    // moviesContainer += `<div class="img imgColorer divImg"  id="${movies[i].imdb}">
    // <h4>${movies[i].title}</h4></div`;
  }
}
moviesContainer += '</section>';

// délégation d'évenement : on click sur les img de films = affiche popUp d'infos
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.img')) {
    // console.log(e.target);

    let popUpInfosFilm = '';
    movies.forEach((element) => {
      if (e.target.id === element.imdb) {
        popUpInfosFilm += `
          <div id="popUpInfos" class="popUp">
            <i class="far fa-times-circle"></i>
            <h3> Title: ${element.title}</h3>
            <p> Genres: </br> ${element.genres} </p>
            <p> Year: ${element.year}</p>
            <p> Note: ${element.note} /10</p>
            <p> Plot: </br> ${element.plot} </p>
          </div> `;
        // console.log(popUpInfosFilm);
        app.innerHTML += popUpInfosFilm;
      }/* else {
          console.log(" rater.. fait un meilleur code !'");
        } */
      // délégation d'évenement : on click sur les icone croix pour fermer la popUp
      document.body.addEventListener('click', (el) => {
        if (el.target.matches('.fa-times-circle')) {
          popUpInfos.remove();
        }
      });
    });
  }
});
app.innerHTML += moviesContainer;

/* // délégation d'évenement : on click sur les icone croix pour fermer la popUp
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.fa-times-circle')) {
    popUpInfosFilm.remove();
  }
}); */

// ------------------ Ancien code test ---------------------
/* Ancienne version mais plus lisible de faire avec un variable vide au depart
function popUpInfos() {
  let popUpInfosFilm = '<div id="popUpInfos" class="popUp">';
  for (let j = 0; j < movies.length; j++) {
    popUpInfosFilm += `
    <i class="far fa-times-circle"></i>
    <h3> Title: ${movies[j].title}</h3>
    <p> Genres: </br> ${movies[j].genres} </p>
    <p> Year: ${movies[j].year}</p>
    <p> Note: ${movies[j].note}</p>
    <p> Plot: </br> ${movies[j].plot} </p>
  `;
    popUpInfosFilm = '</div>';
  }
} */

/* premier test function:
 function popUpInfos() {
  let popUpInfosFilm = '';
  for (let j = 0; j < movies.length; j++) {
    if (movies[j].img) {
      popUpInfosFilm += `
    <div id="popUpInfos" class="popUp">
      <i class="far fa-times-circle"></i>
      <h3> Title: ${movies[j].title}</h3>
      <p> Genres: </br> ${movies[j].genres} </p>
      <p> Year: ${movies[j].year}</p>
      <p> Note: ${movies[j].note}</p>
      <p> Plot: </br> ${movies[j].plot} </p>
     </div>
  `;
      console.log(popUpInfosFilm);
      app.innerHTML += popUpInfosFilm;
    }
  }
}
// délégation d'évenement : on click sur les img de films = affiche popUp d'infos
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.img')) {
    console.log(e.target);
    popUpInfos();
  }
});
*/
