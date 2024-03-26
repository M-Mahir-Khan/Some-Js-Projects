
const form = document.querySelector(".form");
const scoreval = document.querySelector(".score-value");
const question = document.querySelector("#question");
const input = document.querySelector(".input");

let score = 0; 

let ans = generateQuestion(); 

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    question.innerHTML = `What is ${num1} Multiply by ${num2}`;
    return num1 * num2;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const userAns = parseInt(input.value); 
    
    if (userAns === ans) {
        score++; 
        scoreval.textContent = score;

    } else {
        score--; 
        scoreval.textContent = score;
    }
    
    ans = generateQuestion()
    input.value = "";
});


