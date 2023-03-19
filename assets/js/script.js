var html = document.querySelector("html");
var card = document.querySelectorAll(".card");
var closeButtton = document.querySelector(".close-button");
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
var modalImage = document.querySelector(".modal-content img");
var modalTitle = document.querySelector(".modal-content .card-title");

function commonForEach(list) {
  var cardImageSrc = list.querySelector(".card img").getAttribute("src");
  var cardTitleText = list.querySelector(".card .card-title").innerText;

  modalTitle.innerText = cardTitleText;
  modalImage.setAttribute("src", cardImageSrc);
  html.classList.add("overflow-hidden");
  modal.classList.add("active-block");
  closeButtton.classList.add("active-block");
}

function commonClose(e) {
  e.stopPropagation();
  modalTitle.innerHTML = "";
  modalImage.setAttribute("src", "");
  html.classList.remove("overflow-hidden");
  modal.classList.remove("active-block");
  closeButtton.classList.remove("active-block");
}

card.forEach(function (list) {
  list.addEventListener("click", function () {
    commonForEach(list);
  });
});

closeButtton.addEventListener("click", function (e) {
  commonClose(e);
});

modal.addEventListener("click", function (e) {
  commonClose(e);
});

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});