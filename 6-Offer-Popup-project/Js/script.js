
const container = document.querySelector(".container")
const btn = document.querySelector(".btn")
const popupContainer = document.querySelector(".popup-container")
const closebtn = document.querySelector(".close-icon")

btn.addEventListener("click",()=>{
    container.classList.add("active");
    popupContainer.classList.remove("active")
})

closebtn.addEventListener("click",()=>{
    popupContainer.classList.add("active");
    container.classList.remove("active")
})