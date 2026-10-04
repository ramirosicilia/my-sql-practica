
"use client" 

 import { useState } from "react"


const FormUpdate = ({id,SetUser,recargar}) => {

    const [form , SetForm]= useState({
        nombre:"",
        usuario:"",
        email:"",
        contrasena:"",
        fechaIngreso:""
    })   

  
     const url_database=process.env.NEXT_PUBLIC_URL

    async function actualizarPatch(campo,valor) { 

    
    

      console.log(campo)
      console.log(valor)
      console.log(id)

      
      const response= await fetch(`${url_database}/usuarios/${id}`,{
        method:"PATCH",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({
          tipo:"campo",
          campo:campo,
          valor:valor
        })
      }) 

         const data= await response.json()

   
          await recargar

        SetUser(prev=>prev.map(us=>us.id==id?{...us,[campo]:valor} : us))

          SetForm({
        nombre:"",
        usuario:"",
        email:"",
        contrasena:"",
        fechaIngreso:""
    })

      
 
      }
    
    
    


    async function enviarFormUpdate() { 
    


        const response=await fetch(`${url_database}/usuarios/${id}`,{
            method:"put",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })

          const data=await response.json()  

         await recargar

             SetUser(prev=>prev.map(us=>us.id==id? {...us,...form}: us)) 
             
          SetForm({
             nombre:"",
             usuario:"",
             email:"",
             contrasena:"",
             fechaIngreso:""
           })

      

             return data

          

           
        
     }




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
