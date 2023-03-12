// recupération des données photographes et export de la classe Api
export default class Api {
  static _url = "data/photographers.json"; // API baseURL

  // Récupération des données de l'API et gestion des erreurs
  static async response() {
    try {
      const response = await fetch(this._url);

      if (!response.ok) throw new Error(response.status);

      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  static get() {
    return this.response();
  } // GET Method
}
