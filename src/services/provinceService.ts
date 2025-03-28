import { dbConnect } from '../settings/manage'

export const addProvince = (name: string, description?: string): void => {
  const db = dbConnect()
  const insert = db.prepare('INSERT INTO province (name, description) VALUES (?,?)')
  insert.run(name, description)
  db.close()
}

export const getProvinces = (onlyProvince: string | null = null, depth: 0 | 1 | 2 = 0): provinceType | provinceType[] => {
  const db = dbConnect()

  // all provinces ...
  if (onlyProvince?.trim() === '' || onlyProvince === null) {
    const provinces = db.prepare('SELECT name, description FROM province').all() as provinceType[]
    if (depth > 0) {
      provinces.forEach((province) => {
        province.cities = db.prepare(`SELECT name, description FROM city WHERE province_fk = (SELECT id FROM province WHERE name = ?)`)
          .all(province.name) as cityType[]
        if (depth === 2) {
          province.cities.forEach((city) => {
            city.towns = db.prepare(`SELECT name, description FROM town WHERE city_fk = (SELECT id FROM city WHERE name = ?)`)
              .all(city.name) as townType[]
          })
        }
      })
    }
    db.close()
    return provinces
  }

  // only one province ...
  const province = db.prepare('SELECT name, description FROM province WHERE name LIKE ?').get(`%${onlyProvince.trim()}%`) as provinceType
  if (province) {
    if (depth > 0) {
      province.cities = db.prepare(`SELECT name, description FROM city WHERE province_fk = (SELECT id FROM province WHERE name = ?)`)
        .all(province.name) as cityType[]
    }
    if (depth === 2) {
      province.cities?.forEach((city) => {
        city.towns = db.prepare(`SELECT name, description FROM town WHERE city_fk = (SELECT id FROM city WHERE name = ?)`)
          .all(city.name) as townType[]
      })
    }
    db.close()
    return province
  }

  db.close()
  throw new Error('That province does not exist')
}


