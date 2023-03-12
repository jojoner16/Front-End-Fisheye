export default class LikesUtils {
  // cree une instance de la classe LikesUtils
  constructor() {
    this.insertLikes = document.querySelector(".insert-likes");
    this._likes = 0;
  }

  // cree une méthode pour insérer le nombre de likes dans le DOM et gérer les likes des photographes et des médias
  insertHTML(likes) {
    return `${likes} <i class="fa fa-heart"></i>`;
  }

  // cree une méthode pour gérer les likes des photographes et des médias
  likeHandler(e) {
    const currentLike = e.target.closest("[data-user-like]");
    const captionLikeText = currentLike.querySelector(".caption .like-text");
    const captionLikeIcon = currentLike.querySelector(".caption .like-icon");
    let likesText = parseInt(captionLikeText.innerText);

    if (currentLike.dataset.userLike === "false") {
      currentLike.dataset.userLike = true;
      currentLike.dataset.likes = likesText + 1;
      captionLikeText.innerHTML = `${likesText + 1}`;
      captionLikeIcon.innerHTML = "<i class='fa fa-heart'></i>";

      this._likes++;
      this.insertLikes.innerHTML = this.insertHTML(this._likes);
    } else {
      currentLike.dataset.userLike = false;
      currentLike.dataset.likes = likesText - 1;
      captionLikeText.innerHTML = `${likesText - 1}`;
      captionLikeIcon.innerHTML = "<i class='far fa-heart'></i>";

      this._likes--;
      this.insertLikes.innerHTML = this.insertHTML(this._likes);
    }
  }

  // cree une méthode pour initialiser les likes des photographes et des médias
  init() {
    const insertBlock = document.querySelector(".insert");
    const likeText = [...document.querySelectorAll(".like-text")];
    const likeButton = [...document.querySelectorAll(".like-icon")];
    const likeHandlerBind = this.likeHandler.bind(this);

    // cree une boucle pour récupérer le nombre de likes des photographes et des médias
    likeText.map((like) => (this._likes += parseInt(like.innerText)));

    // cree une boucle pour gérer les likes des photographes et des médias et les événements clavier et souris
    likeButton.map((like) => {
      like.addEventListener("click", likeHandlerBind);

      like.addEventListener(
        "keydown",
        (e) => e.key === "Enter" && likeHandlerBind(e)
      );
    });

    // isert le nombre de likes dans le DOM et gère le focus sur le bouton
    insertBlock.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.querySelector(".btn-contact").focus();
    });

    this.insertLikes.innerHTML = this.insertHTML(this._likes);
  }
}
