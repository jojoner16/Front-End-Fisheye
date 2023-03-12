import FormData from "./formData.js";

export default class CheckInputs extends FormData {
  // Vérifie si l'entrée du nom est valide ou non
  checkName(formdata) {
    const name = formdata.querySelector("input").value;
    const regex = /^[A-Za-z- ]+$/;

    if (name === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(name) === false)
      throw new Error("Veuillez saisir un nom valide");
    else if (name.length < 2)
      throw new Error(
        "Veuillez saisir 2 caractères ou plus pour le champ du nom"
      );
  }

  // Vérifie si l'entrée de l'email est valide ou non
  checkEmail(formdata) {
    const email = formdata.querySelector("input").value;
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") throw new Error("Veuillez remplir ce champ");
    else if (regex.test(email.trim()) === false)
      throw new Error("Veuillez entrer un email valide");
  }

  // Vérifie si l'entrée du message est valide ou non
  checkMessage(formdata) {
    const message = formdata.querySelector("textarea").value;

    if (message === "") throw new Error("Veuillez remplir ce champ");
  }
}
