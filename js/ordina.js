function sortList(criteria) {
    var ul, li, i, switching, b, shouldSwitch;
    ul = document.getElementById("libri-list");
    switching = true;

    while (switching) {
        switching = false;
        li = ul.getElementsByTagName("li");
        
        for (i = 0; i < (li.length - 1); i++) {
            shouldSwitch = false;
            
            if (criteria === 'title') {
                b = li[i].getElementsByTagName("strong")[0];
                c = li[i + 1].getElementsByTagName("strong")[0];
            } else if (criteria === 'author') {
                b = li[i].getElementsByTagName("em")[0];
                c = li[i + 1].getElementsByTagName("em")[0];
            }

            if (b.innerHTML.toLowerCase() > c.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        
        if (shouldSwitch) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            switching = true;
        }
    }
}
