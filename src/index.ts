import db from './db-manage';


const localidadesIslaDeJuventud = {
  "Isla de la Juventud": [
    "Nueva Gerona",
    "Santa Fe",
    "La Demajagua",
    "Cayo Largo del Sur",
    "Punta del Este",
    "Columbia"
  ]
};

let count_total = 0

Object.entries(localidadesIslaDeJuventud).forEach(([municipio, localidades]) => {

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








