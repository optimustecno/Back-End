export default {
    "type": "mysql",
    "entities": [
        "src/entities/*.ts"
    ],
    "host": process.env.HOST_MY_SQL,
    "port": parseInt(process.env.PORT_MY_SQL),
    "username": process.env.USR_MY_SQL,
    "password": process.env.PSW_MY_SQL,
    "database": process.env.BD_MY_SQL
}