const textArea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

textArea.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounter.innerText = textArea.value.length;
    remainingCounter.innerText = 150 - textArea.value.length;
}