let flyerModal = document.getElementById("flyerModal");

let img = document.getElementById("flyer");
let modalImg = document.getElementById("flyerImg");
let captionText = document.getElementById("caption");

img.onclick = function () {
    flyerModal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    flyerModal.style.display = "none";
}