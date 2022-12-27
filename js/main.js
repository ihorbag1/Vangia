// HAMBURGER START

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

// HAMBURGER END

// 

    let arrayBtns = [...document.querySelectorAll(".reciepes__btns .btns__btn")];
    let arrayWrappers = [...document.querySelectorAll(".reciepes__items-wrapper")];

    arrayBtns.forEach(elem =>{
        elem.addEventListener("click", (e) =>{
            const indexBtn = arrayBtns.indexOf(e.target);
            const indexWrapper = arrayBtns.indexOf(-1) + indexBtn + 1;
            let currentWrapper = arrayWrappers[`${indexWrapper}`];
            arrayWrappers.forEach(elem =>{
                if(!elem.classList.contains("hide")){
                    elem.classList.add("hide");
                }
            })
            currentWrapper.classList.remove("hide");
            arrayBtns.forEach(elem =>{
                if(elem.classList.contains("active")){
                    elem.classList.remove("active");
                }
            })
            elem.classList.add("active");
        })
    })



const 
    reciepesBtns = document.querySelectorAll(".reciepes__items-wrapper .btn"),
    cardCounter = document.querySelector(".card__counter");
let
    counter = 0;

    reciepesBtns.forEach(elem =>{
        elem.addEventListener("click", () =>{
            counter++;
            cardCounter.innerHTML = counter;
            if(counter > 9){
                cardCounter.innerHTML = '9+';
            }
        })
    })


    