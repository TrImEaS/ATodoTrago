import { originalMovies } from "../data/movies.js";

const movieSelection = {
  selectedCount: 1,
  movies: originalMovies
}

//Retorna iterador de cantidad de preguntas elegidas
function getSelectedCount() {
  return movieSelection.selectedCount;
}

//Incrementa iterador
function incrementSelectedCount() {
  movieSelection.selectedCount++;
}

//Retorna las peliculas
function getMovies() {
  return movieSelection.movies;
}

//Setea array movies a uno nuevo en donde no estan las opciones elegidas, para no repetirlas.
function setMovies(newMovies) {
  movieSelection.movies = newMovies;
}

// Crea la cantidad de tarjetas iniciales, tener en cuenta que si se incializa con un valor x, tenemos que tener x * 3 imagenes (si quantity es 3, entonces tenemos que tener 9 imagenes como minimo)
export async function createCards(quantity) {
  try {
    const movies = getMovies();
    const container = document.querySelector(".cards__container");

    for (let i = 0; i < quantity; i++) {
      const card = document.createElement("article");
      const cardImg = document.createElement("img");

      card.classList.add("cards__container-item");
      card.title = movies[i].title;
      card.id = `option_${i + 1}`;
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

// Manejar selección de tarjeta
export async function selectCard(movieOptionChoisen) {
  try {
    let movies = getMovies();
    const dotsElements = document.getElementsByClassName("question__dots-item");
    const questionTitle = document.querySelector(".question__title");
    const cards = document.querySelectorAll(".cards__container-item");

    let currentDisplayedMovieIds = Array.from(cards).map((card) => parseInt(card.querySelector("img").id));
    const filteredMovies = movies.filter((movie) => !currentDisplayedMovieIds.includes(parseInt(movie.id)))
    setMovies(filteredMovies);

    if (getSelectedCount() === 1) {
      updateMovies(movieOptionChoisen, cards);
      dotsElements[0].style.backgroundColor = "transparent";
      dotsElements[1].style.backgroundColor = "#22DAA8";
      questionTitle.textContent = "QUESTION 2 OF 3:";
    } 
    
    if (getSelectedCount() === 2) {
      updateMovies(movieOptionChoisen, cards, 1);
      dotsElements[1].style.backgroundColor = "transparent";
      dotsElements[2].style.backgroundColor = "#22DAA8";
      questionTitle.textContent = "QUESTION 3 OF 3:";
    } 
    
    if (getSelectedCount() === 3) {
      finalizeSelection(movieOptionChoisen);
    }

    incrementSelectedCount();
  } catch (error) {
    console.error(error);
  }
}

// Actualizar las tarjetas según la opcion elegida, para asegurarnos que no se repitan las demas opciones a mostrar.
function updateMovies(movieOptionChoisen, cards, offset = 0) {
  let movies = getMovies();

  if (movieOptionChoisen === "option_1") {
    cards.forEach((card, index) => updateCard(card, movies[index + offset]));
  } 
  
  if (movieOptionChoisen === "option_2") {
    movies.sort((a, b) => b.id - a.id);
    cards.forEach((card, index) => updateCard(card, movies[index]));
  } 
  
  if (movieOptionChoisen === "option_3") {
    movies.sort((a, b) => a.title.localeCompare(b.title));
    cards.forEach((card, index) => updateCard(card, movies[index]));
  }
}

// Actualiza la imagen de la tarjeta y le da la animacion de parpadeo
function updateCard(card, movie) {
  const cardImg = card.querySelector("img");
  activeBlinkAnimation(cardImg);
  cardImg.src = movie.src;
  cardImg.id = movie.id;
}

// Se encarga de finalizar la selección de peliculas, desabilita los elementos demas y deja solo el modal final
function finalizeSelection(movieOptionChoisen) {
  const lastMovieSelected = document.getElementById(movieOptionChoisen).querySelector("img").id;
  setModalBtnLink(lastMovieSelected);

  document.querySelector(".cards").classList.add("not_visible");
  document.querySelector(".question").classList.add("not_visible");

  setTimeout(() => {
    document.querySelector(".cards").remove();
    document.querySelector(".question").remove();
    
    document.querySelector(".main__container").style.gap = "102px";
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".modal").classList.add("visible");
  }, 300);
}

// Animación de parpadeo para cuando se elige una opcion
function activeBlinkAnimation(element) {
  element.classList.add("blink");
  element.addEventListener("animationend", () => {
    element.classList.remove("blink");
  });
}

// Se encarga de establecerle el link final a IMDB al boton final
async function setModalBtnLink(id) {
  try {
    const movies = originalMovies;
    const movie = movies.find((movie) => parseInt(movie.id) === parseInt(id));

    document.querySelector(".modal__button").href = `${movie.IMDB}`;
  } 
  catch (error) {
    console.error("Error to set modal link");
  }
}
