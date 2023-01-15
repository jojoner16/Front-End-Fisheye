export default class Components {
  static SortByDropdownDOM() {
    return `
        <div class="filters">
          <label id="sortBy">Trier par</label>
          <div class="filters-dropdown">
            <button class="filters-selected" type="button" aria-labelledby="sortBy" aria-expanded="false" aria-haspopup="listbox">
              <span class="filters-value">Popularité</span>
              <span class="filters-button"><i class="fa fa-chevron-down"></i></span>
            </button>
            <ul class="filters-option" aria-labelledby="sortBy" aria-activedescendant="popularity" aria-selected="true" role="listbox">
              <li class="filters-item" data-value="popularity" aria-label="popularity" role="option" tabindex="0">Popularité</li>
              <li class="filters-item" data-value="date" aria-label="date" role="option" tabindex="0">Date</li>
              <li class="filters-item"  data-value="title" aria-label="title" role="option" tabindex="0">Titre</li>
            </ul>
          </div>
        </div>
      `;
  }

  static ContactFormDOM(name) {
    return `
      <div id="contact" class="modal-bg" aria-hidden="true">
        <div class="modal" aria-label="Contact me ${name}" aria-modal="true" role="dialog" tabindex="-1">
          <header>
            <h1>Contactez-moi ${name}</h1>
            <button class="contact-close close" aria-label="Close contact form" tabindex="0">
              <span class="icon-close" aria-hidden="true"></span>
            </button>
          </header>

          <div class="modal-body">
            <form id="contact-form" name="contact" action="#" method="get" novalidate>
              <div class="formData">
                <label id="firstname" for="firstnameInput" aria-label="firstname">Prénom</label>
                <input id="firstnameInput" class="text-control" name="firstname" type="text" required aria-labelledby="firstname" aria-required="true">
              </div>
              <div class="formData">
                <label id="lastname" for="lastnameInput" aria-label="lastname">Nom</label>
                <input id="lastnameInput" class="text-control" name="lastname" type="text" required aria-labelledby="lastname" aria-required="true">
              </div>
              <div class="formData">
                <label id="email" for="emailInput" aria-label="email">Email</label>
                <input id="emailInput" class="text-control" name="email" type="email" required aria-labelledby="email" aria-required="true">
              </div>
              <div class="formData message">
                <label id="message" for="messageInput" aria-label="message">Votre message</label>
                <textarea id="messageInput" class="text-control" name="message" required aria-labelledby="message" aria-required="true"></textarea>
              </div>

              <button class="submit-button" aria-label="Send">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}