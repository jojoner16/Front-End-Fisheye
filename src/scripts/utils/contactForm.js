import ModalUtils from "./modal.js";
import CheckIsInvalid from "./checkIsInvalid.js";

export default class ContactFormUtils extends ModalUtils {
  // creer un constructeur pour la classe ContactFormUtils qui hérite de la classe ModalUtils et qui prend en paramètre la modal de contact
  constructor(modal) {
    super(modal);
    this.form = document.querySelector("#contact-form");
  }

  // creer une méthode privée pour vérifier si les champs du formulaire sont valides
  #isInvalid() {
    const formData = [...document.querySelectorAll(".formData")];
    const check = new CheckIsInvalid(formData);

    check.firstname("#firstnameInput");
    check.lastname("#lastnameInput");
    check.email("#emailInput");
    check.message("#messageInput");
    return check.firstname("#firstnameInput") ||
      check.lastname("#lastnameInput") ||
      check.email("#emailInput") ||
      check.message("#messageInput")
      ? true
      : false;
  }

  // creer une méthode pour gérer l'envoi du formulaire de contact et l'envoi des données du formulaire dans la console du navigateur
  contactFormHandler(e) {
    const formData = new FormData(this.form);
    const result = Object.fromEntries(formData.entries());

    e.preventDefault();

    if (this.#isInvalid()) return;

    console.log("contact: ", result);

    this.closeModal(".btn-contact", (e) => this.controlsHandler(e));
    this.form.reset();
  }

  // creer une méthode pour gérer les événements clavier
  controlsHandler(e) {
    const keyCode = e.key;

    switch (keyCode) {
      case "Escape":
        this.closeModal(".btn-contact", (e) => this.controlsHandler(e));
        break;

      case "Enter":
        this.contactFormHandler.bind(this);
        break;
    }
  }

  // creer une méthode pour initialiser les événements du formulaire de contact
  init() {
    const openButton = document.querySelector(".btn-contact.open");
    const closeButton = document.querySelector("#contact .close");
    const contactFormHandlerBind = this.contactFormHandler.bind(this);

    this.form.addEventListener("submit", contactFormHandlerBind);
    openButton.addEventListener("click", () =>
      this.openModal("#firstname", (e) => this.controlsHandler(e))
    );
    closeButton.addEventListener("click", () =>
      this.closeModal(".btn-contact", (e) => this.controlsHandler(e))
    );
  }
}
