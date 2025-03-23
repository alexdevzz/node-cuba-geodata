import { dbConnect } from '../settings/manage'

export const addCity = (name: string, prov: string, description?: string): void => {
  const db = dbConnect()
  const row = db.prepare('SELECT * FROM province WHERE name LIKE ?').get(`%${prov.trim()}%`) as { id: number }
  if (row) {
    const insert = db.prepare('INSERT INTO city (name, description, province_fk) VALUES (?,?,?)')
    insert.run(name, description, row.id)
    db.close()
    return
  }
  throw new Error(`Province entered does not exist --> ${prov}`)
}

export const getCities = (onlyCtiy: string | null = null, depth: 0 | 1 = 0): unknown => {
  const db = dbConnect()

  // all cities ...
  if (onlyCtiy?.trim() === '' || onlyCtiy === null) {
    const cities = db.prepare('SELECT name, description FROM city').all() as cityType[]
    if (depth === 1) {
      cities.forEach((city) => {
        city.towns = db.prepare(`SELECT name, description FROM town WHERE city_fk = (SELECT id FROM city WHERE name = ?)`)
          .all(city.name) as cityType[]
      })
    }
    db.close()
    return cities
  }

  // only one city ...
  const city = db.prepare('SELECT name, description FROM city WHERE name LIKE ?').get(`%${onlyCtiy.trim()}%`) as cityType
  if (city) {
    if (depth === 1) {
      city.towns = db.prepare(`SELECT name, description FROM town WHERE city_fk = (SELECT id FROM city WHERE name = ?)`)
        .all(city.name) as cityType[]
    }
    db.close()
    return city
  }

  db.close()
  throw new Error('That province does not exist')
}