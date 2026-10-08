// Sauvegarde locale (le contenu sera défini avec l'histoire)
window.Save = {
  KEY: "hanabi-heart-save",
  has() { try { return !!localStorage.getItem(this.KEY); } catch { return false; } },
  load() { try { return JSON.parse(localStorage.getItem(this.KEY)); } catch { return null; } },
  write(data) { try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {} },
  clear() { try { localStorage.removeItem(this.KEY); } catch {} }
};
