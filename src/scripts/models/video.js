import MediaModel from "../models/media.js";

export default class VideoModel extends MediaModel {
  // créer un modèle de données pour le média (vidéos) et retourner le modèle
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get media() {
    // créer le template HTML pour le média (vidéo) et retourner le template
    const extension = this._video.split(".")[1];

    return `
      <video class="media" tabindex="-1">
        <source src="${this.path + this._video}" type="video/${extension}">
      </video>
    `;
  }
}
