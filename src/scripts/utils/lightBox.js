import ModalUtils from "./modal.js";

export default class LightBoxUtils extends ModalUtils {
  // cree une instance de la classe LightBoxUtils qui prend en paramètre la modal de lightbox et la galerie
  constructor(modal, gallery) {
    super(modal);
    this._gallery = gallery;
    this._currentIndex = -1;
    this._currentItem = "";
  }

  // cree une méthode pour afficher la lightbox et gérer les événements clavier
  displayMedia() {
    const mediaLightbox = document.querySelector(".lightbox-media");
    const captionLightbox = document.querySelector(".lightbox-caption");

    // si le media est une image, on affiche l'image dans la lightbox et on affiche le titre de l'image dans la légende de la lightbox
    mediaLightbox.innerHTML =
      this._currentItem.querySelector(".media").outerHTML;
    captionLightbox.textContent =
      this._currentItem.querySelector(".caption .title").textContent;
    captionLightbox.setAttribute(
      "aria-label",
      this._currentItem.querySelector(".caption .title").textContent
    );

    // si le media est une vidéo, on affiche la vidéo dans la lightbox et on affiche le titre de la vidéo dans la légende de la lightbox
    if (mediaLightbox.querySelector(".media").tagName === "VIDEO") {
      mediaLightbox.querySelector(".media").setAttribute("controls", "");

      this.controlVideo(mediaLightbox.querySelector(".media"));
    }
  }

  // cree une méthode pour gérer les événements clavier sur la vidéo
  lightboxHandler(e) {
    this._currentItem = e.target.closest("[data-id]");
    this._currentIndex = this._gallery.indexOf(this._currentItem);

    this.displayMedia();
    this.openModal(".lightbox-media");
  }

  // cree une méthode pour gérer les événements clavier sur la lightbox et les boutons de navigation de la lightbox (flèche gauche et flèche droite) et les boutons de fermeture de la lightbox (croix et touche échap)
  prev() {
    if (this._currentIndex < 1) {
      this._currentIndex = this._gallery.length - 1;
      this._currentItem = this._gallery.at(-1);
    } else {
      this._currentIndex--;
      this._currentItem = this._gallery[this._currentIndex];
    }

    this.displayMedia();
  }

  next() {
    if (this._currentIndex >= this._gallery.length - 1) {
      this._currentIndex = 0;
      this._currentItem = this._gallery.at(0);
    } else {
      this._currentIndex++;
      this._currentItem = this._gallery[this._currentIndex];
    }

    this.displayMedia();
  }

  controlsHandler(e) {
    const keyCode = e.key;

    switch (keyCode) {
      case "Escape":
        this.closeModal(".photographer-gallery", (e) =>
          this.controlsHandler(e)
        );
        break;

      case "ArrowRight":
        this.next();
        break;

      case "ArrowLeft":
        this.prev();
        break;
    }
  }

  // cree une méthode pour gérer les événements clavier sur la vidéo (espace pour mettre en pause et lecture)
  controlVideo(video) {
    document.addEventListener("keydown", (e) =>
      e.key === " " && video.paused ? video.play() : video.pause()
    );
  }

  // cree une méthode pour initialiser la lightbox et les boutons de navigation de la lightbox (flèche gauche et flèche droite) et les boutons de fermeture de la lightbox (croix et touche échap)
  init() {
    const openButton = document.querySelectorAll(".lnk-media.open");
    const closeButton = document.querySelector("#lightbox .close");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    const lightboxHandler = this.lightboxHandler.bind(this);

    openButton.forEach((el) => el.addEventListener("click", lightboxHandler));
    closeButton.addEventListener("click", () =>
      this.closeModal(".photographer-gallery", (e) => this.controlsHandler(e))
    );
    document.addEventListener("keydown", (e) => this.controlsHandler(e));
    prevButton.addEventListener("click", () => this.prev());
    nextButton.addEventListener("click", () => this.next());
  }
}
