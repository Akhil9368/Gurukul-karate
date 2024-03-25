document.addEventListener("DOMContentLoaded", function() {
    openPopup();
});

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
}

function minimizePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

