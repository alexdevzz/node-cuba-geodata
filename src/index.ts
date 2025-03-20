import db from './db-manage';


const localidadesCiegoDeAvila = {
  "Ciego de Ávila": [
    "Centro Ciudad",
    "Venezuela",
    "Baraguá",
    "Primero de Enero",
    "Chambas",
    "Florencia"
  ],
  "Morón": [
    "Centro Morón",
    "Ciro Redondo",
    "Chambas",
    "Florencia",
    "Majagua",
    "Venezuela"
  ],
  "Chambas": [
    "Centro Chambas",
    "Florencia",
    "Majagua",
    "Venezuela",
    "Morón",
    "Ciro Redondo"
  ],
  "Majagua": [
    "Centro Majagua",
    "Venezuela",
    "Morón",
    "Ciro Redondo",
    "Chambas",
    "Florencia"
  ],
  "Florencia": [
    "Centro Florencia",
    "Chambas",
    "Majagua",
    "Venezuela",
    "Morón",
    "Ciro Redondo"
  ],
  "Venezuela": [
    "Centro Venezuela",
    "Baraguá",
    "Primero de Enero",
    "Ciego de Ávila",
    "Morón",
    "Chambas"
  ],
  "Baraguá": [
    "Centro Baraguá",
    "Primero de Enero",
    "Ciego de Ávila",
    "Venezuela",
    "Morón",
    "Chambas"
  ],
  "Primero de Enero": [
    "Centro Primero de Enero",
    "Ciego de Ávila",
    "Venezuela",
    "Baraguá",
    "Morón",
    "Chambas"
  ],
  "Ciro Redondo": [
    "Centro Ciro Redondo",
    "Morón",
    "Chambas",
    "Florencia",
    "Majagua",
    "Venezuela"
  ]
};

let count_total = 0

Object.entries(localidadesCiegoDeAvila).forEach(([municipio, localidades]) => {

  console.log(`\nmunicipio -> ${municipio}\n`)
  let count_loc = 0

  localidades.forEach(loc => {
    db.addTown(loc, municipio)
    console.log(`  --> (${loc}) agregada`)
    count_loc++
  })
  console.log(`---------------------------------------------- ${count_loc} - agregados -------`);

  count_total += count_loc
})
console.log(`\n************** ${count_total} - Total de Localidades Agreagadas **************`);








