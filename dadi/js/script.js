const newMatch = document.getElementById('new-match');
const bottoneLancio = document.getElementById('lancio-utente');
const max = 6;
const min = 1;
let lancioUtente, lancioPc, output;

bottoneLancio.addEventListener('click', function(){
  document.getElementById('n-utente').classList.remove('d-none');
  document.getElementById('n-pc').classList.remove('d-none');
  
  lancioUtente = Math.floor(Math.random() * (max - min + 1) ) + min;
  document.getElementById('n-utente').innerHTML = lancioUtente;

  lancioPc = Math.floor(Math.random() * (max - min + 1) ) + min;
  document.getElementById('n-pc').innerHTML = lancioPc;


  if (lancioUtente > lancioPc) {
    output = "Vince l'utente";
  } else if (lancioUtente < lancioPc){
    output = "Vince il pc";
  } else {
    output = "Parità";
  }

  document.getElementById('esito').innerHTML = output;
  document.getElementById('esito').classList.remove('d-none');
  bottoneLancio.classList.add('d-none');
});

newMatch.addEventListener('click', function(){
  document.getElementById('esito').classList.add('d-none');
  bottoneLancio.classList.remove('d-none');
  document.getElementById('n-utente').classList.add('d-none');
  document.getElementById('n-pc').classList.add('d-none');
});