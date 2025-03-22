import { dbConnect } from './manage'

export const addProvince = (name: string, description?: string): void => {
  const db = dbConnect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

