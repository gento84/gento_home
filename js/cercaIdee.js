function searchIdee() {
    // Get the search input value
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // Get all list items
    let items = document.querySelectorAll('.idee li');
    
    items.forEach(item => {
      // Check if the item's text content includes the search input value
      if (item.textContent.toLowerCase().includes(input)) {
        // Show the item if it matches the search input
        item.style.display = '';
      } else {
        // Hide the item if it doesn't match the search input
        item.style.display = 'none';
      }
    });
  }
  