import Database from 'better-sqlite3'

const FILE_DATABASE_PATH = "database/db.sqlite3"

export const dbConnect = () => {
  return new Database(FILE_DATABASE_PATH)
}











