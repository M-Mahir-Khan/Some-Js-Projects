// const slides = document.getElementById("slides")
// // const slides  = document.getElementsByTagName('img')

// function moveSlide(n){

//     return n == true ? slides.style.transform = "translateX(-100%)"  :  "translateX(0)";
// }
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll("#slides img").length;
let translateValue = 0;

function moveSlide(n) {
    if (n === true) {
        translateValue -= 100;
    } else {
        translateValue += 100;
    }
    
    // Check if slide needs to loop back to the start or end
    if (translateValue === -100 * totalSlides) {
        translateValue = 0;
    } else if (translateValue === 100) {
        translateValue = -100 * (totalSlides - 1);
    }

    slides.style.transform = `translateX(${translateValue}%)`;
}

