import mysql2 from "mysql2/promise"

async function peticionUser() {

    const conection = await mysql2.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "sass-usuarios",
        port: 3307
    })

    const [user] = await conection.query("select * from usuarios")

    console.log(user)

    await conection.end()
}

peticionUser()