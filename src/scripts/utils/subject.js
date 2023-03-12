export default class Subject {
  // create an array of observers
  // créer un tableau d'observateurs
  constructor() {
    this.observers = [];
  }

  // ajouter un observateur au tableau
  attach(observer) {
    this.observers.push(observer);
  }

  // supprimer un observateur du tableau (si il existe, pour les filtres)
  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // notifier tous les observateurs
  notify() {
    this.observers.forEach((obs) => obs.init());
  }
}
