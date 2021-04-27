var zucchina = [
  {varietà: 'alberello',
  peso: 1,
  lunghezza: 10,
},
  {varietà: 'tonda',
  peso: 3,
  lunghezza: 5,
},
  {varietà: 'fiorentine',
  peso: 2,
  lunghezza: 14,
},
  {varietà: 'trombetta',
  peso: 5,
  lunghezza: 16,
},
  {varietà: 'golden',
  peso: 1,
  lunghezza: 20,
},
  {varietà: 'spinosa',
  peso: 4,
  lunghezza: 7,
},
  {varietà: 'lunga',
  peso: 5,
  lunghezza: 16,
},
  {varietà: 'stretta',
  peso: 2,
  lunghezza: 18,
},
  {varietà: 'verde',
  peso: 3,
  lunghezza: 11,
},
  {varietà: 'campana',
  peso: 1,
  lunghezza: 20,
},
];

var over15 = [];
var under15 = [];
var sum = 0;
for( var chiave of zucchina){
  var longe = chiave.lunghezza;
  if(longe > 15){
    over15.push(chiave)
    sum = sum + over15['peso'];
  }else{
    under15.push(chiave)
    sum = sum + under15['peso'];
  }
}
console.log(over15);
console.log(under15);
console.log('questa è la somma della zucchine lunghe: ' + sum)
/* var sum = 0;
for( var key of over15){
  console.log(key['peso'])
  sum = sum + over15['peso'];
}
console.log('questa è il peso della zucchine corte: ' + sum)

for( var index of under15){
  console.log(index.peso)
  sum += index.peso;
}
console.log('questa è la somma della zucchine lunghe: ' + sum) */
