"use client"


import Link from "next/link"
import FormUpdate from "@/app/components/FormUpdate"
import FormDelete from "@/app/components/FormDelete"
import style from "../app/components/styles/index.module.css"
import {useFetch} from "@/app/components/hook/useFetch.js"



export default function onePage(){




  const [actualizacionUser, SetActualizaciones]= useState("")  
    const [index, SetIndex]= useState(null)  

    const {user,SetUser}= useFetch()


   const url_database=process.env.NEXT_PUBLIC_URL


  function actualizar(index) { 

    SetIndex(index)

    SetActualizaciones("update")
    
  }

  function eliminar(index){ 

    SetIndex(index)

    SetActualizaciones("delete")



  }

   async function peticionInhabiliar(id,habilitacion) { 

      console.log("ANTES:", habilitacion)

    const nuevoValor=!habilitacion
      console.log("NUEVO:", nuevoValor)
   

    const response= await fetch(`${url_database}/usuarios/${id}`,{ 
      method:"PATCH",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        tipo:"check",
         habilitacion: nuevoValor
      })

    }) 

    console.log(response.json())
      
      SetUser(prev=>prev.map(user=>user.id===id?{...user,habilitado:nuevoValor}:user))
    
   }






  


  return(
   <>

   <h1 className={style.titulo}>
    hola mundo
   </h1>

    <Link href="/ingreso">Ingresar Usuario</Link>

      <table className={style.table} >

        <thead>
          <tr className={style.tr} >
            <th className={style.th}>inhabilitar</th>
            <th className={style.th}>nombre</th>
            <th className={style.th}>usuario</th>
            <th className={style.th}>email</th>
            <th className={style.th}>fecha de ingreso</th> 
            <th className={style.th}>Interacciones</th>

          </tr>

        </thead>

         <tbody > 

        {
           

   

    user.map((u,i)=>(  

    

     <tr key={i} className={style.tr}>
      <td> <input type="checkbox" checked={u.habilitado}  onChange={()=>peticionInhabiliar(u.id,u.habilitado)} className={style.input}/></td>
        <td className={style.td}>{u.nombre}</td>
         <td className={style.td}>{u.usuario}</td>
          <td className={style.td}>{u.email}</td>
          <td className={style.td}>{u.fechaIngreso}</td>
          <td className={style.td}>
           <button onClick={()=>actualizar(u.id)}>editar</button>
           <button onClick={()=>eliminar(u.id)} >borrar</button>
           </td>
      </tr>
    

   

   
    ))  

   
     
        }  

           </tbody>

         
      </table>


      { 

      actualizacionUser==="update"? <FormUpdate id={index} SetUser={SetUser}/>:actualizacionUser==="delete"? <FormDelete id={index} SetUser={SetUser}/>:null
        
      }
  
  
  
  </>)
}