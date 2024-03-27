const [form, question, scoreValue, inputField] = [
    document.querySelector("form"),
    document.getElementById("question"),
    document.querySelector(".score-value"),
    document.querySelector(".input")
];
let [score, answer] = [0, questionGenerate()];

function questionGenerate() {
    const [num1, num2] = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    question.textContent = `What's ${num1} multiplied by ${num2}?`
    return num1 * num2;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    score += +inputField.value === answer ? 1 : -1;
    scoreValue.textContent = score;
    answer = questionGenerate();
    form.reset();
});