import { createCards, selectCard } from "./functions/card.js";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    // Inicializamos la pagina con una pequeña animacion en los componentes principales
    document.querySelector(".main__container").classList.add("visible");
    document.querySelector(".footer").classList.add("footer_visible");

    // Creamos las tarjetas requeridas
    await createCards(3);

    // Agregamos el event listener después de crear las tarjetas
    const container = document.querySelector(".cards__container");
    container.addEventListener("click", (e) => {
      const clickedCard = e.target.closest(".cards__container-item");
      selectCard(clickedCard.id);
    });
  } 
  catch (error) {
    console.error("Error initializing the application:", error);
  }
});
