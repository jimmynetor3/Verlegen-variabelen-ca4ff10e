const pi = 3.14;
const kwart = 0.25;

let changethis = document.getElementById('2');
let changethis2 = document.getElementById('3');

function getanswer(answers) {
   
   var input = document.getElementById("input").value;
   var answered = input*pi;
   console.log(answered)
    changethis.innerText = answered;
   let antwoord2 = input*input*pi*kwart;
   console.log(antwoord2);
    changethis2.innerText = antwoord2;
}


