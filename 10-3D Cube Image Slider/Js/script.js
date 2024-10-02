const cube = document.querySelector(".image-cube");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

let pos = 0;


function nextFn(){
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`;
}

function prevFn(){
    pos += 90;
    cube.style.transform = `rotateY(${pos}deg)`;
}

btnNext.addEventListener("click",nextFn)
btnPrev.addEventListener("click",prevFn)
