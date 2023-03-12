export default class ModalUtils {
  // cree une instance de la classe ModalUtils qui prend en paramètre la modal de contact et la modal de lightbox
  constructor(modal) {
    this._modalBg = document.querySelector(modal);
    this._modal = document.querySelector(".modal");
    this._header = document.querySelector("#header");
    this._main = document.querySelector("#main");
  }

  // cree une méthode pour ouvrir la modal de contact et la lightbox et gérer les événements clavier
  openModal(focus, fn) {
    document.body.style.overflow = "hidden";
    this._modalBg.style.display = "block";
    this._modalBg.setAttribute("aria-hidden", false);
    this._modal.tabIndex = 0;
    this._header.setAttribute("aria-hidden", true);
    this._header.tabIndex = -1;
    this._main.setAttribute("aria-hidden", true);
    this._main.tabIndex = -1;
    document.querySelector(focus).focus();
    document.addEventListener("keydown", fn);
  }

  // cree une méthode pour fermer la modal de contact et la lightbox et gérer les événements clavier
  closeModal(focus, fn) {
    document.body.style.overflow = "auto";
    this._modalBg.style.display = "none";
    this._modalBg.setAttribute("aria-hidden", true);
    this._modal.tabIndex = -1;
    this._header.setAttribute("aria-hidden", false);
    this._header.tabIndex = 0;
    this._main.setAttribute("aria-hidden", false);
    this._main.tabIndex = 0;
    document.querySelector(focus).focus();
    document.removeEventListener("keydown", fn);
  }
}
