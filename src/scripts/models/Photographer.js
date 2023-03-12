// exportation des données de chaque photographe
export default class PhotographerModel {
  // créer un modèle de données pour le photographe
  constructor(data) {
    this._name = data.name;
    this._id = data.id;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
  }

  // getters pour les données du modèle de données du photographe
  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get location() {
    return `${this._city}, ${this._country}`;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get portrait() {
    return `assets/photographers/${this._portrait}`;
  }
}
