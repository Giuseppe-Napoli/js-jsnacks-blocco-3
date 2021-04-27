/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */


//Crea due array che hanno un numero di elementi diversi.
var numeriSingoli = [1,2,3,4,5];
var numeriDoppi = [16,17,18];


/* Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */
while (numeriSingoli.length !== numeriDoppi.length) {
  if(numeriSingoli.length < numeriDoppi.length){
    numeriSingoli.push(Math.floor(Math.random() * 100) + 1)
  }else{
    numeriDoppi.push(Math.floor(Math.random() * 100) + 1)
  }
}

console.log('Arrey numeri singoli: ' +numeriSingoli);
console.log('Arrey numeri doppi: ' +numeriDoppi);