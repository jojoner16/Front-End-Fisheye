import MediaModel from "../models/media.js";

export default class ImageModel extends MediaModel {
  // créer un modèle de données pour le média (images) et retourner le modèle
  constructor(data) {
    super(data);
    this._image = data.image;
  }

  get media() {
    // créer le template HTML pour le média (image) et retourner le template
    return `
      <figure class="media">
        <img src="${this.path + this._image}" alt="${this.title}">
      </figure>
    `;
  }
}
