var instructions = document.getElementById("instructions");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("form");
var quiz = document.getElementById("quiz");
var inform = document.getElementById("inform");
var showScore = document.getElementById("showScore");
var displayScore = document.getElementById("displayScore");
var checkedRadio;
var allRadios;
var i;
var score;

var questions = [
  {
    question: "Who is credited with unifying China?",
    choices: ["Kublai Khan", "Genghis Khan", "Qin Shi Huang", "Fred Flinstone"],
    correct: 3
  },
  {
    question: "Which dynasty contributed the first written records?",
    choices: ["The Shang", "The Han", "The Qin", "The Sing"],
    correct: 1
  },
  {
    question: "Who was Genghis Khan?",
    choices: ["Chinese Emperor", "A Mongol Emperor", "Spongebob's cousin", "A world famous F1 driver"],
    correct: 2
  },
  {
    question: "What was Ancinet China's main enemy?",
    choices: ["The Mongols", "The Persians", "The Romans", "The Stig from Top Gear"],
    correct: 1
  },
    {
    question: "What were the three perfections of art?",
    choices: ["Drawing, Music, and Dance", "Painting, poetry, caligraphy", "Painting, writing, and dance", "Doing burnouts, watching TV, and drifting"],
    correct: 2
  },
  {
    question: "What was the last dynasty to rule ancient China?",
    choices: ["Yuan", "Song", "Qing", "Why does Sid make this quizes?"],
    correct: 4
  }
];

window.onload = beginQuiz;

function beginQuiz() {
    form.style.display = "block";
    instructions.style.display = "block";
    showScore.style.display = "none";
    quiz.style.display = "none";
    submitBtn.style.display = "none";
    i = 0;
    score = 0;
    displayScore.innerHTML = 0;
}

startBtn.addEventListener("click", function() {
    instructions.style.display = "none";
    submitBtn.style.display = "block";
    quiz.style.display = "block";
    getQAs();
});

submitBtn.addEventListener("click", function() {
    allRadios = document.getElementsByName("option");
    var isChecked = false;
    for (var j = 0; j < allRadios.length; j++) {
        if (allRadios[j].checked) {
            isChecked = true;
            checkedRadio = j;
            break;
        }
    }
    if (!(isChecked)) {
        alert("Please select an answer before moving on");
    } else {
        getResults();
        deselectRadios();
        i++;
        getQAs();
    }
});

function deselectRadios() {
    allRadios = document.getElementsByName("option");
    for (var p = 0; p < allRadios.length; p++) {
        allRadios[p].checked = false;
    }
}

function getResults() {
        if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
            score++;
            displayScore.innerHTML = score;
        }
}

function getQAs() {
    if (i < 5) {
        askQuestion.innerHTML = questions[i].question;
        for (var k = 0; k < 4; k++) {
            document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
        }
    } else {
        displayResults();
    }
};

function displayResults() {
    quiz.style.display = "none";
    showScore.style.display = "block";
    inform.innerHTML = "Congratulations!! You scored " + score + " out of 6 correct.";
};

resetBtn.addEventListener("click", function() {
    beginQuiz();
});