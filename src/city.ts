import { dbConnect } from './manage'

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