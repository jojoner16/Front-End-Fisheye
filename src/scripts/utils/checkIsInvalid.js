import CheckInputs from "./checkInputs.js";

export default class CheckIsInvalid extends CheckInputs {
  // Vérifie si l'entrée est invalide ou non
  firstname = (id) => this.checkInput(id, this.checkName);

  lastname = (id) => this.checkInput(id, this.checkName);

  email = (id) => this.checkInput(id, this.checkEmail);

  message = (id) => this.checkInput(id, this.checkMessage);
}
