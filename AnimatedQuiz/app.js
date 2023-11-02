const quizData = [{
    question: "What is the rarest blood type among humans?",
    a: "AB negative",
    b: "O negative",
    c: "B positive",
    d: "A positive",
    correct: "a",
},
{
    question: "Which African country is the largest by land?",
    a: "Sudan",
    b: "Algeria",
    c: "Congo",
    d: "Nigeria",
    correct: "b",
},
{
    question: "First woman to fly solo across Atlantic Ocean is-",
    a: "Amelia Earhart",
    b: "Bessie coleman",
    c: "Harriet Quimby",
    d: "Jacqueline Cochram",
    correct: "a",
},
{
    question: "Which element has the highest melting point?",
    a: "Tungsten",
    b: "Carbon",
    c: "Osmium",
    d: "Rhenium",
    correct: "a",
},
{
    question: "in which year did the Titanic sink?",
    a: "1907",
    b: "1912",
    c: "1925",
    d: "1931",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);