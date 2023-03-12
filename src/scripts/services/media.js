import Api from "../api/index.js";

export default class MediaService extends Api {
  // récupérer les médias depuis l'API et retourner les médias
  static async getAllMedia() {
    const { media } = await this.get();

    return media;
  }

  // récupérer les médias par id de photographe depuis l'API et retourner les médias
  static async getMediaByPhotographerId(id) {
    const allMedia = await this.getAllMedia();
    const mediaList = [];
    allMedia.find((media) => {
      media.photographerId == id && mediaList.push(media);
    });

    return mediaList;
  }
}
