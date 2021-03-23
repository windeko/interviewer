import { Pool } from 'pg'

const pool = new Pool()

export class DBUtils {
    static async query(text: string, params: []): Promise<Object> {
        return await pool.query(text, params)
    }
}
