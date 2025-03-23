import { dbConnect } from '../settings/manage'

export const addProvince = (name: string, description?: string): void => {
  const db = dbConnect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

export const getProvinces = (onlyProvince?: string, depth: 0 | 1 | 2 = 0): provinceType | provinceType[] => {
  const db = dbConnect()

  if (!onlyProvince || onlyProvince === '') {
    const rows = db.prepare('SELECT name, description FROM province').all() as provinceType[]
    db.close()
    return rows
  }

  const province = db.prepare('SELECT * FROM province WHERE name LIKE ?').get(`%${onlyProvince.trim()}%`) as provinceType
  if (province) {
    if (depth > 0) {
      province.cities = db.prepare(`SELECT * FROM city WHERE province_fk = ?`).all(province.id) as cityType[]
    }
    if (depth === 2) {
      province.cities?.forEach((city) => {
        city.towns = db.prepare(`SELECT name, description FROM town WHERE city_fk = ?`).all(city.id) as townType[]
      })
    }
    db.close()
    return province
  }

  throw new Error('That province does not exist')
}


