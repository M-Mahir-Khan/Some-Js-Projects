const [form, question, scoreValue, inputField] = [
    document.querySelector("form"),
    document.getElementById("question"),
    document.querySelector(".score-value"),
    document.querySelector(".input")
];

let operators = ["+", "-", "*", "/"]
let operatorName = ["plus", "minus", "multiply by", "divide by"]
let [score, answer] = [0, questionGenerate()];

function questionGenerate() {
    const [num1, num2] = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let index = Math.floor(Math.random() * 3);

    question.textContent = `What's ${num1} ${operatorName[index]} ${num2}?`
    let res = eval(`${num1} ${operators[index]} ${num2}`)
    return res
}

form.addEventListener("submit", e => {
    e.preventDefault();
    score += +inputField.value === answer ? 1 : -1;
    scoreValue.textContent = score;
    answer = questionGenerate();
    form.reset();
});