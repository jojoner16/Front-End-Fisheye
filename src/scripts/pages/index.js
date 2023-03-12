import PhotographerFactory from "../factories/photographer.js";
import PhotographerService from "../services/photographer.js";

// page d'accueil
class App {
  // afficher les photographes
  displayData(photographers) {
    // afficher les photographes dans la section
    const photographersSection = document.querySelector(
      ".photographer-section"
    );

    // afficher les photographes avec une boucle map
    photographers.map((photographer) => {
      const photographerTemplate = new PhotographerFactory(photographer);
      photographersSection.innerHTML += photographerTemplate.UserCardDOM();
    });
  }

  // initialisation des données de la page d'accueil et affichage des photographes
  async init() {
    const photographers = await PhotographerService.getPhotographers();

    this.displayData(photographers);
  }
}

const app = new App();
app.init();
