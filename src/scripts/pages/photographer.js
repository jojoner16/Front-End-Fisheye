import PhotographerFactory from "../factories/photographer.js";
import MediaFactory from "../factories/media.js";
import PhotographerService from "../services/photographer.js";
import MediaService from "../services/media.js";
import Components from "../templates/components.js";
import Utils from "../utils/index.js";

// page photographe
class App {
  displayData(photographer, mediaList) {
    const photographerMain = document.querySelector("#main");
    const photographerBanner = document.querySelector(".photographer-banner");
    const photographerMedia = document.querySelector(".photographer-gallery");

    const photographerTemplate = new PhotographerFactory(photographer);

    // afficher le nom du photographe dans le titre de la page
    document.title = photographerTemplate.UserTitleDOM();

    // afficher le nom du photographe dans le header
    photographerBanner.innerHTML = photographerTemplate.UserBannerDOM();

    // afficher les informations du photographe
    photographerBanner.insertAdjacentHTML(
      "beforeend",
      photographerTemplate.UserInsertDOM()
    );

    // afficher les médias
    mediaList.map((media) => {
      const mediaTemplate = new MediaFactory(media);
      photographerMedia.innerHTML += mediaTemplate.MediaCardDOM();
    });

    // trier les médias avec le dropdown
    photographerMedia.insertAdjacentHTML(
      "beforebegin",
      Components.SortByDropdownDOM()
    );

    // afficher le formulaire de contact
    photographerMain.insertAdjacentHTML(
      "afterend",
      Components.ContactFormDOM(photographer.name)
    );

    // afficher la lightbox
    photographerMain.insertAdjacentHTML("afterend", Components.LightBoxDOM());
  }

  // initialiser/récupérer les données du photographe et de ses médias
  async init() {
    const URLSearchParams = new URL(window.location.href).searchParams;
    const id = URLSearchParams.get("id");

    const photographer = await PhotographerService.getPhotographerById(id);
    const media = await MediaService.getMediaByPhotographerId(id);

    this.displayData(photographer, media);

    Utils.handler();
  }
}

const app = new App();
app.init();
