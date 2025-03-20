import db from './db-manage';


const localidadesCienfuegos = {
  "Cienfuegos": [
    "Centro Ciudad",
    "Punta Gorda",
    "La Juanita",
    "Reina",
    "Buena Vista",
    "San Lázaro"
  ],
  "Aguada de Pasajeros": [
    "Centro Aguada",
    "Guayacanes",
    "La Sierrita",
    "Las Moscas",
    "El Francés",
    "San Fernando"
  ],
  "Rodas": [
    "Centro Rodas",
    "Aguada de Pasajeros",
    "Guayacanes",
    "La Sierrita",
    "Las Moscas",
    "El Francés"
  ],
  "Palmira": [
    "Centro Palmira",
    "Cruces",
    "Lajas",
    "Aguada de Pasajeros",
    "Rodas",
    "Guayacanes"
  ],
  "Lajas": [
    "Centro Lajas",
    "Cruces",
    "Palmira",
    "Aguada de Pasajeros",
    "Rodas",
    "Guayacanes"
  ],
  "Cruces": [
    "Centro Cruces",
    "Palmira",
    "Lajas",
    "Aguada de Pasajeros",
    "Rodas",
    "Guayacanes"
  ],
  "Cumanayagua": [
    "Centro Cumanayagua",
    "Aguada de Pasajeros",
    "Rodas",
    "Guayacanes",
    "La Sierrita",
    "Las Moscas"
  ],
  "Abreus": [
    "Centro Abreus",
    "Rodas",
    "Guayacanes",
    "La Sierrita",
    "Las Moscas",
    "El Francés"
  ],
  "Santa Isabel de las Lajas": [
    "Centro Santa Isabel",
    "Abreus",
    "Rodas",
    "Guayacanes",
    "La Sierrita",
    "Las Moscas"
  ]
};

let count_total = 0

Object.entries(localidadesCienfuegos).forEach(([municipio, localidades]) => {

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








