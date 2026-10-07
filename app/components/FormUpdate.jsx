
"use client" 

 import { useEffect, useState } from "react"


const FormUpdate = ({id,SetUser}) => {

    const [form , SetForm]= useState({
        nombre:"",
        usuario:"",
        email:"",
        contrasena:"",
        fechaIngreso:""
    })   

  
     const url_database=process.env.NEXT_PUBLIC_URL


   async function actualizarPatch(campo, valor) {

  try {
    const response = await fetch(`${url_database}/usuarios/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tipo: "campo",
        campo: campo,
        valor: valor
      })
    })

    const data = await response.json()

    console.log("RESPUESTA PATCH:", data)

    if (!response.ok) {
      throw new Error("Error al actualizar")
    }   

    

    


  } catch (error) {
    console.error(error)
  }
} 


 useEffect(()=>{
  console.log("ANTES DE LIMPIAR")

      SetForm({
        nombre: "",
        usuario: "",
        email: "",
        contrasena: "",
        fechaIngreso: ""
      })

console.log("DESPUÉS DE LIMPIAR")
    // Si querés recargar, ACÁ sí se ejecuta
 

      SetUser(prev =>{
      console.log(prev,"prev")

      return prev.map(us =>{
        console.log(us.id,"id")
        console.log(id,"id nuevo")
       return  us.id == id
          ? { ...us, [campo]: valor }
          : us
      


       }
       
      )


    }
     
    )
 },[SetUser,id])




  return (



    <div>

        <form action={enviarFormUpdate}>

        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="" value={form.nombre} onChange={(e)=>SetForm(prev=>({...prev,[e.target.name]:e.target.value}))} />
             <button type="button" onClick={()=>actualizarPatch("nombre",form.nombre)}>editar</button>
         <label htmlFor="usuario">Usuario</label>
        <input type="text" name="usuario" id="" value={form.usuario} onChange={(e)=>SetForm(prev=>({...prev,[e.target.name]:e.target.value}))} />
        <button type="button" onClick={()=>actualizarPatch("usuario",form.usuario)}>editar</button>

          <label htmlFor="email">Email</label>
        <input type="email" name="email" id=""  value={form.email} onChange={(e)=>SetForm(prev=>({...prev,[e.target.name]:e.target.value}))}/>
          <button type="button" onClick={()=>actualizarPatch("email",form.email,id)}>editar</button>
         <label htmlFor="contrasena">Contraseña</label>
        <input type="password" name="contrasena" id="" value={form.contrasena} onChange={(e)=>SetForm(prev=>({...prev,[e.target.name]:e.target.value}))} />
           <button type="button" onClick={()=>actualizarPatch("contrasena",form.contrasena)}>editar</button>
          <label htmlFor="fechaIngeso">Fecha de  ingreso</label>
        <input type="date" name="fechaIngreso" id="" value={form.fechaIngreso} onChange={(e)=>SetForm(prev=>({...prev,[e.target.name]:e.target.value}))} /> 
         <button type="button" onClick={()=>actualizarPatch("fechaIngreso",form.fechaIngreso)}>editar</button>
         <input type="submit" value="Enviar" />

         



    </form>



      
    </div>
  )
}

export default FormUpdate
