export default class SortByUtils {
  // cree une instance de la classe SortByUtils qui prend en paramètre la galerie de photographes
  constructor(gallery) {
    this._gallery = gallery;
    this._icon = document.querySelector(".filters-button");
    this._option = document.querySelector(".filters-option");
  }

  // cree une méthode pour trier la galerie de photographes par popularité, date ou titre
  #sortByPopularity(a, b) {
    const likesA = parseInt(a.dataset.likes);
    const likesB = parseInt(b.dataset.likes);
    return likesA < likesB ? 1 : likesA == likesB ? 0 : -1;
  }

  #sortByDate(a, b) {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return dateA < dateB ? 1 : dateA == dateB ? 0 : -1;
  }

  #sortByTitle(a, b) {
    const titleA = a.dataset.title;
    const titleB = b.dataset.title;
    return titleA < titleB ? -1 : 1;
  }

  // cree une méthode pour trier la galerie de photographes par popularité, date ou titre
  sortByHandler(filtersValue) {
    switch (filtersValue) {
      case "Popularité":
        this._gallery.sort(this.#sortByPopularity);
        break;

      case "Date":
        this._gallery.sort(this.#sortByDate);
        break;

      case "Titre":
        this._gallery.sort(this.#sortByTitle);
        break;
    }

    // vide la galerie de photographes
    this._gallery.forEach((el) =>
      document.querySelector(".photographer-gallery").appendChild(el)
    );
  }

  // cree une méthode pour ouvrir et fermer le menu déroulant des filtres
  openFilters() {
    this._icon.className += " open";
    this._option.style.display = "block";
  }

  closeFilters() {
    this._icon.className = "filters-button";
    this._option.style.display = "none";
    document.querySelector(".photographer-gallery").focus();
  }

  // cree une méthode pour gérer les événements clavier sur les filtres
  filtersItemHandler(item, filtersValue, filtersOption, filtersSelected) {
    filtersValue.textContent = item.textContent;
    filtersOption.setAttribute("aria-activedescendant", item.dataset.value);

    this.sortByHandler(filtersValue.textContent);
    this.closeFilters();
    filtersSelected.setAttribute("aria-expanded", false);
  }

  // cree une méthode pour initialiser les événements clavier et click sur les filtres et les boutons
  init() {
    const filtersSelected = document.querySelector(".filters-selected");
    const filtersValue = document.querySelector(".filters-value");
    const filtersOption = document.querySelector(".filters-option");
    const filtersItem = document.querySelectorAll(".filters-item");
    let open = false;

    filtersSelected.addEventListener("click", () => {
      open = !open;
      if (open) {
        this.openFilters();
        filtersSelected.setAttribute("aria-expanded", true);
      } else {
        this.closeFilters();
        filtersSelected.setAttribute("aria-expanded", false);
      }
    });

    // gère les événements clavier et click sur les filtres
    filtersItem.forEach((item) => {
      item.addEventListener("click", () => {
        this.filtersItemHandler(
          item,
          filtersValue,
          filtersOption,
          filtersSelected
        );
        open = false;
      });

      item.addEventListener("keydown", (e) => {
        e.key === "Enter" &&
          this.filtersItemHandler(
            item,
            filtersValue,
            filtersOption,
            filtersSelected
          );
        open = false;
      });
    });

    this.sortByHandler(filtersValue.textContent);
  }
}
