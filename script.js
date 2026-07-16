// NAVIGATION
function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

// TOGGLE
function toggle(id){
let el = document.getElementById(id);
el.classList.toggle("hidden");
}

// SQL SIMULATOR
function runQuery(){
let q = document.getElementById("query").value.toLowerCase();
let out = document.getElementById("output");

if(q.includes("select")){
out.innerHTML = "📊 Showing sample table:<br>ID | Name<br>1 | Monika<br>2 | Ram";
}
else if(q.includes("insert")){
out.innerHTML = "✅ Insert successful";
}
else if(q.includes("update")){
out.innerHTML = "🔄 Update successful";
}
else if(q.includes("delete")){
out.innerHTML = "❌ Delete successful";
}
else{
out.innerHTML = "⚠️ Invalid query";
}
}

// QUIZ
const quiz=[
{q:"What is DBMS?",o:["Software","Hardware"],a:0},
{q:"1NF removes?",o:["Repeating groups","Keys"],a:0},
{q:"SQL command to fetch data?",o:["SELECT","DELETE"],a:0}
];

let i=0,score=0;

function loadQuiz(){
let q=quiz[i];
document.getElementById("q").innerText=q.q;

let opts=document.getElementById("opts");
opts.innerHTML="";

q.o.forEach((opt,index)=>{
let b=document.createElement("button");
b.innerText=opt;
b.onclick=()=>check(index);
opts.appendChild(b);
});
}

function check(ans){
if(ans===quiz[i].a) score++;
i++;
if(i<quiz.length) loadQuiz();
else document.getElementById("score").innerText="Score: "+score;
}

loadQuiz();
