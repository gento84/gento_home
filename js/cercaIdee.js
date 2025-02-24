function searchIdee() {
    // Ottieni il valore dell'input di ricerca
    let input = document.getElementById('search-input').value.toLowerCase();
    // Ottieni tutti gli elementi della lista
    let items = document.querySelectorAll('.nota li');
    items.forEach(item => {
      // Ottieni il titolo dell'elemento (testo dell'elemento <a>)
      let title = item.querySelector('strong a').textContent.toLowerCase();
      // Controlla se il titolo include il valore dell'input di ricerca
      if (title.includes(input)) {
        // Mostra l'elemento se corrisponde alla ricerca
        item.style.display = '';
      } else {
        // Nascondi l'elemento se non corrisponde alla ricerca
        item.style.display = 'none';
      }
    });
  }
