import {NextResponse} from "next/server"
import mysql2 from "mysql2/promise"





export  async function PUT(request,{params}){ 

    const { id}= await params 

    console.log(id)
    
    const body=await request.json()

    console.log(body)

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
            const {nombre,usuario,email,contrasena,fechaIngreso} =body 
    
       const [userUpdate] = await connection.query(`update usuarios Set nombre=?, usuario=?, email=?,contrasena=?,fechaIngreso=? where id=?`,[nombre,usuario,email,contrasena,fechaIngreso,id]) 
       console.log(userUpdate)
       return NextResponse.json("usuario actualizado")



}


export async function DELETE( r,{params } ){ 

     const { id}= await params 

    console.log(id)
    
   

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

        const borrarUser= await connection.query("delete from usuarios where id=?",[id]) 
        console.log(borrarUser)

        return NextResponse.json("usuario eliminado")





} 




export async function PATCH(request, { params }) { 

    console.log("ggggg")

    const { id } = await params
 console.log(id)

    const body = await request.json() 
     const {campo,valor,tipo,habilitacion}= body

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

    if(tipo==="campo"){
        const [patchUser]= await connection.query(`update usuarios set ${campo}=? where id=?`,[valor,id])

        console.log(patchUser)

        return NextResponse.json("cambio realizado")

    } 

    else if(tipo==="check"){ 

        console.log(habilitacion,"que llega")
         const [userHabilitacion]= await connection.query(`update usuarios set habilitado=? where id=?`,[habilitacion,id])

        console.log(userHabilitacion)



    }

    
   

    await connection.end()

    return NextResponse.json({
        mensaje: "usuario actualizado"
    })
}