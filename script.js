function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function toggle(id){
document.getElementById(id).classList.toggle("hidden");
}

function runQuery(){
let q = document.getElementById("query").value.toLowerCase();
let out = document.getElementById("output");

if(q.includes("select")){
out.innerHTML = "Sample Data: <br>1 Monika<br>2 Ram";
}
else{
out.innerHTML = "Query executed";
}
}

const quiz=[
{q:"What is DBMS?",o:["Software","Hardware"],a:0}
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
document.getElementById("score").innerText="Score: "+score;
}

loadQuiz();
