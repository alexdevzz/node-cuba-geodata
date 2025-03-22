import { dbConnect } from './manage'

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
