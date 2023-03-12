import PhotographerTemplate from "../templates/photographer.js";
import PhotographerModel from "../models/photographer.js";

// factory pour les photographes
export default class PhotographerFactory {
  // créer un modèle de données pour le photographe
  constructor(data) {
    this._data = new PhotographerModel(data);

    return new PhotographerTemplate(this._data);
  }
}
