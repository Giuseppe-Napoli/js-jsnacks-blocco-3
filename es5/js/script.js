/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */


$(function(){

  var nomi = ['luca','paolo','ennio','max','pio','amedeo','fabio'];
  var min = 1;
  var max = 5;
 prova(nomi,min,max);
  console.log(prova(nomi,min,max))
});

function prova (arr, a, b){
  //Il metodo slice() ritorna la copia di una porzione dell'array (nomi) contenente gli elementi compresi tra inzio (a) e fine (b) (fine escluso). 
  return arr.slice(a,b);
}

////////////////// METEDO 2 NON FUNZIONANTE //////////////////////
/* $(function(){
  var nomi = ['luca','paolo','ennio','max','pio','amedeo','fabio'];
  var min = 1;
  var max = 5;
  var newArray = prova(nomi,min,max);
  console.log(newArray.toString());
});



function prova(arr, a , b){
var newArray = [];
if(a < b && b <= arr.lenght ){
  for(var i = a;  i <= b; i++){
    newArray.push(i);
  }
}
return newArray.toString();
} */