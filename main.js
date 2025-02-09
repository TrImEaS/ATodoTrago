import { createCards, selectCard } from "./functions/card.js";

(() => {
  //Iniciamos los componentes dandole opacidad para obtener una linda animacion al entrar al AD 
  window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
      document.querySelector('.main__container').classList.add('visible');
      document.querySelector('.footer').classList.add('visible');
      
    }, 100);

    //Creamos las Cards necesarias (en el caso de la prueba tecnica 3)
    createCards(3);
  });
})();

document.querySelector('.cards__container').addEventListener('click', (e)=> {
  const movieContainerID = e.target.closest('.cards__container-item').id
  selectCard({ movieContainerID })
})
