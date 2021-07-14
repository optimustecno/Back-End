import mysql from 'serverless-mysql'

export const bancoSQL = mysql({
    config: {
        host: "localhost",
        database: process.env.BD_MY_SQL,
        user: "root",
        password: process.env.PSW_MY_SQL,
        port: 3306,
    },
})

export async function ExecuteSQL(
    q: string,
    values: (string | number)[] | string | number = []
) {
    try {
        const results = await bancoSQL.query(q, values)
        await bancoSQL.end()
        return results
    } catch (e) {
        throw Error(e.message)
    }
}