// PAGE SWITCH
function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// CONCEPT DATA
const concepts = [
    {title: "Primary Key", desc: "Unique identifier for each record."},
    {title: "Foreign Key", desc: "Links two tables together."},
    {title: "Normalization", desc: "Reduces redundancy."},
];

let conceptDiv = document.getElementById("concepts");
concepts.forEach(c => {
    let box = document.createElement("div");
    box.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
    conceptDiv.appendChild(box);
});

// SQL SIMULATION
function runQuery() {
    let q = document.getElementById("query").value.toLowerCase();
    let out = document.getElementById("output");

    if (q.includes("select")) {
        out.innerHTML = `
        <table border="1">
        <tr><th>ID</th><th>Name</th></tr>
        <tr><td>1</td><td>Monika</td></tr>
        <tr><td>2</td><td>Alex</td></tr>
        </table>`;
    }
    else if (q.includes("insert")) {
        out.innerHTML = "✅ Insert simulated";
    }
    else {
        out.innerHTML = "⚠️ Invalid query";
    }
}

// QUIZ
const quiz = [
    {
        q: "What does DBMS stand for?",
        options: ["Data Base Mgmt System", "Data Backup System"],
        ans: 0
    },
    {
        q: "Primary key is?",
        options: ["Unique", "Duplicate"],
        ans: 0
    }
];

let current = 0;
let score = 0;

function loadQuiz() {
    let q = quiz[current];
    document.getElementById("q").innerText = q.q;

    let optDiv = document.getElementById("options");
    optDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        optDiv.appendChild(btn);
    });
}

function checkAnswer(i) {
    if (i === quiz[current].ans) score++;

    current++;
    if (current < quiz.length) loadQuiz();
    else document.getElementById("score").innerText = "Score: " + score;
}

loadQuiz();
