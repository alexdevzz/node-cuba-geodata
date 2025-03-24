import Database from 'better-sqlite3'
import path from 'path';

const FILE_DATABASE_PATH = path.join(__dirname, '..', '..', 'database', 'db.sqlite3')

export const dbConnect = () => {
  return new Database(FILE_DATABASE_PATH)
}















