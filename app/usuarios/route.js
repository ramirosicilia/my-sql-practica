import {NextResponse} from "next/server"
import mysql2 from "mysql2/promise"


export async function GET(){

   const connection = await mysql2.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: process.env.DB_CA
  }
});

   const [user] = await connection.query("select * from usuarios")

   return NextResponse.json(user)



}

export async function POST(request){

  const connection = await mysql2.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: process.env.DB_CA
  }
});
    const body= await request.json() 

    const {nombre,usuario,email,contrasena,fechaIngreso} =body 

    const query= await connection.query("insert into usuarios(nombre, usuario,email,contrasena,fechaingreso) values (?,?,?,?,?)",[nombre,usuario,email,contrasena,fechaIngreso]) 
    console.log(query)

    return NextResponse.json("usuario ingresado correctamente")

}