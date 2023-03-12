import Api from "../api/index.js";

export default class PhotographerService extends Api {
  // récupérer les photographes depuis l'API et retourner les photographes
  static async getPhotographers() {
    const { photographers } = await this.get();

    return photographers;
  }

  // récupérer un photographe par son id depuis l'API et retourner le photographe
  static async getPhotographerById(id) {
    const photographers = await this.getPhotographers();
    const photographerById = photographers.find(
      (photographer) => photographer.id == id
    );

    return photographerById;
  }
}
