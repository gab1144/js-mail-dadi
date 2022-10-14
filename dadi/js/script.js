const button = document.getElementById('bottone');
const max = 6;
const min = 1;
let lancioUtente, lancioPc, output;

button.addEventListener('click', function(){
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

  ticketBox.classList.remove('hide');
});