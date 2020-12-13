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
    <img src='posters/${movies[i].imdb}.jpg' class= "img" alt="afficheFilmHacking">
   `;
  } else {
    moviesContainer += `
    <img class="img imgColorer">
    `;
  }
}
moviesContainer += '</section>';
// création de popup au click des poster pour voir les infos du film cliquer:
function popUpInfos() {
  let popUpInfosFilm = '';
  for (let j = 0; j < movies.length; j++) {
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
    app.innerHTML += popUpInfosFilm;
  }
}
// délégation d'évenement : on click sur les img de films = affiche popUp d'infos
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.img')) {
    popUpInfos();
  }
});
// délégation d'évenement : on click sur les icone croix pour fermer la popUp
/* document.body.addEventListener('click', (e) => {
  if (e.target.matches('.fa-times-circle')) {
    // remove sur ???
  }
}); */
// ajout dans le html:
app.innerHTML += moviesContainer;

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
