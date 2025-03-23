import { dbConnect } from '../settings/manage'

export const addTown = (name: string, city: string, description?: string): void => {
  const db = dbConnect()
  const row = db.prepare('SELECT * FROM city WHERE name LIKE ?').get(`%${city.trim()}%`) as { id: number }
  if (row) {
    const insert = db.prepare('INSERT INTO town (name, description, city_fk) VALUES (?,?,?)')
    insert.run(name, description, row.id)
    db.close()
    return
  }
  throw new Error(`City entered does not exist --> ${city}`)
}

export const getTowns = (onlyTown: string | null = null): townType | townType[] => {
  const db = dbConnect()

  // all towns ...
  if (onlyTown?.trim() === '' || onlyTown === null) {
    const towns = db.prepare('SELECT name, description FROM town').all() as townType[]
    db.close()
    return towns
  }

  // only one town ...
  const town = db.prepare('SELECT name, description FROM town WHERE name LIKE ?').get(`%${onlyTown.trim()}%`) as townType
  if (town) {
    db.close()
    return town
  }

  db.close()
  throw new Error('That town does not exist')
}