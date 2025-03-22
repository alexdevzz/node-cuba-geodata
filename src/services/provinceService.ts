import { dbConnect } from '../settings/manage'

export const addProvince = (name: string, description?: string): void => {
  const db = dbConnect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

export const getProvince = (name: string): void => {
  const db = dbConnect()
  const row = db.prepare('SELECT * FROM province WHERE name LIKE ?').get(`%${name.trim()}%`) as provinceType
  console.log(row);
}