/* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */

//in questa array inseriro i giocatori che compongo la squadra
var squadra = [];
// i igocatori da inserire saranno 10
valPlayer (10)
//console.log(squadra +'-------------'); // per questi trattini ci ho messo un ora! mai metterli in un array di oggetti
console.log(squadra)

// ogni giocatore dovra avere tre caratteristi: un codice, la media punti fatti,  percentuale di successo per da 3 punti

function valPlayer (people){
  for( var i = 0; i < people; i++){

    var giocatore = {
      cod:genId(3),
      mpf:generatorNumber (50),
      pds:generatorNumber (100) + '%'
    }
    squadra.push(giocatore)
  }
}




//il cod giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

function genId(limit) {
  var result = [];
  var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for ( var i = 0; i < limit; i++ ) {
     result.push(lettere.charAt(Math.floor(Math.random() * lettere.length)));
     result.push(Math.floor(Math.random()* 10));
  }
  //Converto gli elementi di 'result in una stringa
  return result.join('');
}



// per calcolare 'mpf' (media punti fatti) e 'pds' (percentuale di successo) occore una funzione che mi calcoli num
function generatorNumber (num){
  return Math.floor(Math.random()* num)
}

