import './styles.scss';
import { movies } from './src/movies';

const app = document.getElementById('app');
// affichage des poster de films sur la page:
let moviesContainer = '<section class="containerFilms">';
moviesContainer += '<h1> "Films on the theme of "hacking"</h1>';
moviesContainer += '<button id="recent" class="recent"> View Recent Film Only </button> </br>';
for (let i = 0; i < movies.length; i++) {
  if (movies[i].img) {
    moviesContainer += `  
    <img src='posters/${movies[i].imdb}.jpg' class="img"  id="${movies[i].imdb}" alt="afficheFilmHacking"> `;
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
        <div class="fondPopUp">
          <div id="popUpInfos" class="popUp">
            <i class="far fa-times-circle"></i>
            <h3> Title: ${element.title}</h3>
            <p> Genres: </br> ${element.genres} </p>
            <p> Year: ${element.year}</p>
            <p> Note: ${element.note} /10</p>
            <p> Plot: </br> ${element.plot} </p>
            </div>
          </div> `;
        // console.log(popUpInfosFilm);
        app.innerHTML += popUpInfosFilm;
      }/* else {
          console.log(" rater.. fait un meilleur code !'");
        } */
    });
  }
});
// délégation d'évenement : on click sur les icone croix pour fermer la popUp
document.body.addEventListener('click', (el) => {
  if (el.target.matches('.fa-times-circle')) {
    const popupInfoToRemove = document.querySelector('.fondPopUp');
    popupInfoToRemove.remove();
  }
});
app.innerHTML += moviesContainer;

// Bouton "Recent film only" qui cache  les films réalisés avant l'an 2000
/*
document.body.addEventListener('click', (elem) => {
  if (elem.target.matches('.recent')) {
    console.log(elem.target); // = ok
    const filmsRecents = app.querySelectorAll('.img');
    // console.log(filmsRecents);
    filmsRecents.forEach((filmRecent, i) => {
      if (movies[i].year < 2000) {
        filmRecent.classList.add('d-none');
      }
    });
  }
}); */

// si reclic remet all :
// test 1: avec vérification target=> fonctionne nickel avec la popup
document.body.addEventListener('click', (elem) => {
  if (elem.target.matches('.recent')) {
    console.log(elem.target); // = ok

    const filmsRecents = app.querySelectorAll('.img');
    // console.log(filmsRecents);

    filmsRecents.forEach((filmRecent, i) => {
      if (movies[i].year < 2000) {
        if (filmRecent.classList.contains('d-none')) {
          filmRecent.classList.remove('d-none');
        } else {
          filmRecent.classList.add('d-none');
        }
      }
    });
  }
});
// --- version ou le nom bouton change nom = !!! problème avec la popup--------
/*
// test 2 : changement du boutton au click
const buttonRecent = document.getElementById('recent');
// console.log(buttonRecent);
buttonRecent.addEventListener('click', (elem) => {
  if (elem.target.matches('.recent')) {
    // console.log(elem.target);

    const filmsRecents = app.querySelectorAll('.img');
    // console.log(filmsRecents);

    filmsRecents.forEach((filmRecent, i) => {
      if (movies[i].year < 2000) {
        if (filmRecent.classList.contains('d-none')) {
          filmRecent.classList.remove('d-none');
          buttonRecent.innerHTML = 'View Recent films only';
        } else {
          filmRecent.classList.add('d-none');
          buttonRecent.innerHTML = 'View All films';
        }
      }
    });
  }
}); */

/*
// test 3 : sans vérification target = inutile de verifier car on passe par getElementById

const buttonRecent = document.getElementById('recent');
// console.log(buttonRecent);
buttonRecent.addEventListener('click', () => {
  // console.log('c est le boutton!');
  const filmsRecents = app.querySelectorAll('.img');
  // console.log(filmsRecents);

  filmsRecents.forEach((filmRecent, i) => {
    if (movies[i].year > 2000) {
      if (filmRecent.classList.contains('d-none')) {
        filmRecent.classList.remove('d-none');
        buttonRecent.innerHTML = 'View Recent films only';
      } else {
        filmRecent.classList.add('d-none');
        buttonRecent.innerHTML = 'View All films';
      }
    }
  });
});
*/
