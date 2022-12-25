const headerMenuClone = document.querySelector(".header__menu").cloneNode(1),
    headerWrapper = document.querySelector(".header__wrapper"),
    hamburger = document.querySelector(".hamburger"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    body = document.querySelector("body");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    popup.classList.toggle("show");
    body.classList.toggle("noscroll");
    headerWrapper.classList.toggle("padding-sm");
    popupContent.appendChild(headerMenuClone);
})