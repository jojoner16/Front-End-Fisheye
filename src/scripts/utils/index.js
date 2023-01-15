import Subject from "./subject.js";
import ContactFormUtils from "./contactForm.js";
import SortByUtils from "./sortBy.js";

export default class Utils {
  static handler() {
    const gallery = [...document.querySelectorAll("[data-id]")];

    const subject = new Subject();
    const contactFormUtils = new ContactFormUtils("#contact");
    const sortByUtils = new SortByUtils(gallery);

    subject.attach(contactFormUtils);
    subject.attach(sortByUtils);

    subject.notify();
  }
}
