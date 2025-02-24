function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}