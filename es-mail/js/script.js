const emailRegistrate = [
  "giovanni@gmail.com", 
  "marco@gmail.com", 
  "luca@gmail.com", 
  "martina@gmail.com", 
  "giulia@gmail.com", 
  "franco@gmail.com"
];
const button = document.getElementById('accedi');
let emailInput, trovato, output;

button.addEventListener('click', function(){
  emailInput = document.getElementById('email-input').value;
  if (emailInput !== ""){
    trovato=false;
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
    document.getElementById('output').classList.remove('d-none');
  } else {
    alert("Devi inserire un'email per poter effettuare l'accesso")
  }
  
});

reset.addEventListener('click', function(){
  document.getElementById('email-input').value="";
  document.getElementById('output').classList.add('d-none');
});