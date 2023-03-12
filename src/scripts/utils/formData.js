export default class FormData {
  // cree une instance de la classe FormData qui prend en paramètre le formulaire
  constructor(formData) {
    this.formData = formData;
  }

  // cree une méthode pour vérifier si le champ du formulaire est valide et gérer les erreurs
  getFormData = (id) => this.formData.find((el) => el.querySelector(id));

  checkInput(id, fn) {
    const formdata = this.getFormData(id);

    // si le champ du formulaire est valide, on supprime l'attribut data-error, on supprime l'attribut aria-invalid et on supprime l'attribut aria-errormessage
    // sinon, on ajoute l'attribut data-error, on ajoute l'attribut aria-invalid et on ajoute l'attribut aria-errormessage
    try {
      fn(formdata);

      formdata.removeAttribute("data-error");
      formdata.querySelector(id).setAttribute("aria-invalid", false);
      formdata.querySelector(id).removeAttribute("aria-errormessage");
      return false;
    } catch (error) {
      formdata.setAttribute("data-error", "* " + error.message);
      formdata.querySelector(id).setAttribute("aria-invalid", true);
      formdata
        .querySelector(id)
        .setAttribute("aria-errormessage", error.message);
      return true;
    }
  }
}
