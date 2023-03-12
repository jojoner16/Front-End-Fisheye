import ImageModel from "../models/image.js";
import VideoModel from "../models/video.js";
import MediaTemplate from "../templates/media.js";

export default class MediaFactory {
  // créer un modèle de données pour le média (image ou vidéo) et retourner le modèle
  constructor(data) {
    if (data.image !== undefined) {
      this._data = new ImageModel(data);
    } else {
      this._data = new VideoModel(data);
    }

    return new MediaTemplate(this._data);
  }
}
