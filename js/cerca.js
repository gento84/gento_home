function searchBooks() {
    var input, filter, ul, li, strong, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase().trim(); // Rimuove spazi bianchi e converte in maiuscolo
    ul = document.getElementById('libri-list');
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      strong = li[i].getElementsByTagName('strong')[0];
      txtValue = strong.textContent || strong.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  