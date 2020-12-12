import './styles.scss';
import { movies } from './src/movies';

const app = document.getElementById('app');

let moviesContainer = '<section class="containerFilms">';
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
app.innerHTML += moviesContainer;

// every files in "static" folder can be used directly like that
// app.innerHTML += '<img src="images/kitten.jpg" style="width:100px;" />';
