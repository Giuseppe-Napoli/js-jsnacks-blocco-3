
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
  lunghezza: 15,
},
  {varietà: 'trombetta',
  peso: 5,
  lunghezza: 13,
},
  {varietà: 'golden',
  peso: 1,
  lunghezza: 12,
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
  lunghezza: 10,
},
  {varietà: 'verde',
  peso: 3,
  lunghezza: 11,
},
  {varietà: 'campana',
  peso: 1,
  lunghezza: 10,
},
];

var sum = 0;
for( var chiave of zucchina){
  console.log(chiave.peso)
  sum += chiave.peso;
}

console.log('questa è la somma: ' + sum)