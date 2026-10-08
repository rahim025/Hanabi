// Gestionnaire d'écrans : un seul écran visible à la fois
window.Screens = {
  current: null,
  show(name) {
    document.querySelectorAll(".screen").forEach(s =>
      s.classList.toggle("active", s.dataset.screen === name));
    this.current = name;
  }
};
