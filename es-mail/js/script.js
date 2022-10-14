const emailRegistrate = [
  "giovanni@gmail.com", 
  "marco@gmail.com", 
  "luca@gmail.com", 
  "martina@gmail.com", 
  "giulia@gmail.com", 
  "franco@gmail.com"
];
const button = document.getElementById('bottone');
let emailInput;
let trovato;
let output;

button.addEventListener('click', function(){
  trovato=false;
  emailInput = document.getElementById('email-input').value;
  for (let i=0; i < emailRegistrate.length; i++) {
    if (emailRegistrate[i] === emailInput)
    trovato = true;
  }

  if (trovato) {
    output="Accesso consentito";
  } else {
    output="Email non trovata: accesso non consentito";
  }

  document.getElementById('output').innerHTML = output;
  ticketBox.classList.remove('hide');
});