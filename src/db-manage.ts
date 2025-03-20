import Database from 'better-sqlite3'

const FILE_PATH = "database/db.sqlite3"

const connect = () => {
  return new Database(FILE_PATH)
}

export const addProvince = (name: string, description?: string): void => {
  const db = connect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

export const addCity = (name: string, prov: string, description?: string): void => {
  const db = connect()
  const row = db.prepare('SELECT * FROM province WHERE name LIKE ?').get(`%${prov.trim()}%`) as { id: number }
  if (row) {
    const insert = db.prepare('INSERT INTO city (name, description, province_fk) VALUES (?,?,?)')
    insert.run(name, description, row.id)
    db.close()
    return
  }
  throw new Error(`Province entered does not exist --> ${prov}`)
}

export const addTown = (name: string, city: string, description?: string): void => {
  const db = connect()
  const row = db.prepare('SELECT * FROM city WHERE name LIKE ?').get(`%${city.trim()}%`) as { id: number }
  if (row) {
    const insert = db.prepare('INSERT INTO town (name, description, city_fk) VALUES (?,?,?)')
    insert.run(name, description, row.id)
    db.close()
    return
  }
  throw new Error(`City entered does not exist --> ${city}`)
}


export default {
  addProvince,
  addCity,
  addTown
}





