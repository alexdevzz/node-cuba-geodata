import { dbConnect } from '../settings/manage'

export const addProvince = (name: string, description?: string): void => {
  const db = dbConnect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

export const getProvince = (name?: string): unknown => {
  const db = dbConnect()
  if (!name || name === '') {
    const rows = db.prepare('SELECT name, description FROM province').all() as provinceType[]
    return rows
  }
  const row = db.prepare('SELECT name, description FROM province WHERE name LIKE ?').get(`%${name.trim()}%`) as provinceType
  if (row)
    return row
  throw new Error('That province does not exist')
}


