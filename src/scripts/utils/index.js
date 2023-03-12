import Subject from "./subject.js";
import ContactFormUtils from "./contactForm.js";
import SortByUtils from "./sortBy.js";
import LikesUtils from "./likes.js";
import LightBoxUtils from "./lightBox.js";

export default class Utils {
  // Singleton pattern to avoid multiple instances of the same class
  static handler() {
    const gallery = [...document.querySelectorAll("[data-id]")];

    const subject = new Subject();
    const contactFormUtils = new ContactFormUtils("#contact");
    const sortByUtils = new SortByUtils(gallery);
    const likesUtils = new LikesUtils();
    const lightBoxUtils = new LightBoxUtils("#lightbox", gallery);

    // Attach all the observers to the subject
    // Attachez tous les observateurs au sujet
    subject.attach(contactFormUtils);
    subject.attach(sortByUtils);
    subject.attach(likesUtils);
    subject.attach(lightBoxUtils);

    subject.notify();
  }
}
