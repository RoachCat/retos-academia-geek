const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const [
    {name: name1},
    {name: name2},
    {name: name3},
] = users

const [
    {time: time1},
    {time: time2},
    {time: time3}
] = users

console.log(`Primer puesto: ${name1}. Tiempo: ${time1}. Segundo puesto: ${name2}. Tiempo: ${time2}. Tercer puesto: ${name3}. Tiempo: ${time3} `);