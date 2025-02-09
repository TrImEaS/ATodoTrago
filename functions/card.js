// const API_URL_MOVIES = '../Data/Movies.json';
import { originalMovies } from "../Data/movies"; 
let selectedCount = 0;
let movies = [];

//Traemos las imagenes de la api (en este caso del json) utilizando API_URL_MOVIES como ruta
// async function getMovies() {
//   return await fetch(API_URL_MOVIES)
//   .then(res => {
//     if (!res.ok) 
//       throw new Error('Error al traer datos');
//     return res.json();  
//   })
//   .catch(error => console.error(error))
// }

//Recibe la cantidad de cards que debe de crear, siempre toma de incio las 5 primeras imagenes del array
export async function createCards(quantity) {
  try {
    // const movies = await getMovies()
    const movies = originalMovies
    const container = document.querySelector('.cards__container');

    for (let i = 0; i < quantity; i++) {
      const card = document.createElement('article');
      const cardImg = document.createElement('img');
      
      card.classList.add('cards__container-item');
      card.title = movies[i].title;
      card.id = `option_${i + 1}`
      cardImg.alt = `Movie_${i + 1}`;
      cardImg.id = movies[i].id;
      cardImg.src = movies[i].src;

      card.appendChild(cardImg);
      container.appendChild(card);
    }
  } 
  catch (error) {
    console.error(error);
  }
}

//Recibe el id del contenedor y la funcion se encarga de actualizar las diferentes opciones (dependiendo la elegida) y se encarga de no repetir las opciones, ademas controla los cambios en diferentes elementos del DOM
export async function selectCard({ movieContainerID }) {
  try {
    if (movies.length === 0)
      movies = originalMovies
      // movies = await getMovies();
    
    const dotsElements = document.getElementsByClassName('question__dots-item')
    const questionTitle = document.querySelector('.question__title')
    const cards = document.querySelectorAll('.cards__container-item');
    let currentDisplayedMovieIds = Array.from(cards).map(card => parseInt(card.querySelector('img').id));
    movies = movies.filter(movie => !currentDisplayedMovieIds.includes(parseInt(movie.id)));
    
    if(selectedCount === 0) {
      if(movieContainerID === 'option_1'){
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index].src
          cardImg.id = movies[index].id
          activeBlinkAnimation(cardImg)
        })
        movies.sort((a,b) => b.id - a.id)
      }

      if(movieContainerID === 'option_2'){
        movies.sort((a,b) => b.id - a.id)
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index].src
          cardImg.id = movies[index].id
          activeBlinkAnimation(cardImg)
        })
      }

      if(movieContainerID === 'option_3'){
        movies.sort((a, b) => b.title.localeCompare(a.title))
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index].src
          cardImg.id = movies[index].id
          activeBlinkAnimation(cardImg)
        })
      }
      
      dotsElements[0].style.backgroundColor = 'transparent'
      dotsElements[1].style.backgroundColor = '#22DAA8'
      questionTitle.textContent = 'QUESTION 2 OF 3:'
    }

    if(selectedCount === 1) {
      if(movieContainerID === 'option_1'){
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index + 1].src
          cardImg.id = movies[index + 1].id
          activeBlinkAnimation(cardImg)
        })
      }

      if(movieContainerID === 'option_2'){
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index].src
          cardImg.id = movies[index].id
          activeBlinkAnimation(cardImg)
        })
      }

      if(movieContainerID === 'option_3'){
        movies.sort((a,b) => a.id - b.id)
        cards.forEach((card, index) => {
          const cardImg = card.querySelector('img')
          cardImg.src = movies[index].src
          cardImg.id = movies[index].id
          activeBlinkAnimation(cardImg)
        })
      }
      
      dotsElements[1].style.backgroundColor = 'transparent'
      dotsElements[2].style.backgroundColor = '#22DAA8'
      questionTitle.textContent = 'QUESTION 3 OF 3:'
    }

    if(selectedCount === 2) {
      const lastMovieSelected = document.getElementById(movieContainerID).querySelector('img').id

      setModalBtnLink(lastMovieSelected)
      document.querySelector('.cards').classList.add('not_visible');
      document.querySelector('.question').classList.add('not_visible');
      
      setTimeout(() => {
        document.querySelector('.cards').remove();
        document.querySelector('.question').remove();
        document.querySelector('.main__container').style.gap = '102px';
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.modal').classList.add('visible');
      }, 300);
    }

    selectedCount++;
  } 
  catch (error) {
    console.error(error);
  }
}

function activeBlinkAnimation(element) {
  element.classList.add('blink');
  element.addEventListener('animationend', () => {
    element.classList.remove('blink');
  });
}

async function setModalBtnLink(id) {
  try {
    // const movies = await getMovies();
    const movies = originalMovies
    const movie = movies.find(movie => parseInt(movie.id) === parseInt(id))

    document.querySelector('.modal__button').href = `${movie.IMDB}`
  } 
  catch (error) {
    console.error('Error to set modal link')  
  }
}
