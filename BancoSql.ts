import mysql from 'serverless-mysql'

export const bancoSQL = mysql({
    config: {
        host: process.env.HOST_MY_SQL,
        database: process.env.BD_MY_SQL,
        user: process.env.USR_MY_SQL,
        password: process.env.PSW_MY_SQL,
        port: parseInt(process.env.PORT_MY_SQL),
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