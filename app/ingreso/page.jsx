"use client"


import { useReducer} from "react"



export default function Formulario(){ 

     const url_database=process.env.NEXT_PUBLIC_URL
     
    const objecto= {
        nombre:"",
        usuario:"",
        email:"",
        contrasena:"",
        fechaIngreso:""
    }

const [state,dispatch]=useReducer(createUser,objecto) 

function createUser(state,action) { 


    switch (action.type) {

        case "ingreso":

        return {
            ...state,
            [action.payload.name]:action.payload.value
        } 

        case "cleaner": 

        return{
            
               nombre:"",
               usuario:"",
               email:"",
               contrasena:"",
               fechaIngreso:""
                
        }
        
    
       
    }
    
}

  function insertUser(e) {

    dispatch({type:"ingreso",payload:{
        name:e.target.name,
        value:e.target.value
    }})
    
  }




    



    async function enviarForm() {

        const response= await fetch(`${url_database}/usuarios`,{
            method:"post",
            headers:{
            
                 "content-Type":"application/json"
                
            },
            body:JSON.stringify(state)
        })

         dispatch({type:"cleaner"})

          const data= await response.json() 

          return data

   
        
    }




    return(<>

    <h2>Formulario</h2>


    <form action={enviarForm}>

        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="" value={state.nombre} onChange={(e)=>insertUser(e)} />

         <label htmlFor="usuario">Usuario</label>
        <input type="text" name="usuario" id="" value={state.usuario}  onChange={(e)=>insertUser(e)}  />

          <label htmlFor="email">Email</label>
        <input type="email" name="email" id=""  value={state.email}  onChange={(e)=>insertUser(e)} />

         <label htmlFor="contrasena">Contraseña</label>
        <input type="password" name="contrasena" id="" value={state.contrasena} onChange={(e)=>insertUser(e)}  />

          <label htmlFor="fechaIngeso">Fecha de  ingreso</label>
        <input type="date" name="fechaIngreso" id="" value={state.fechaIngreso} onChange={(e)=>insertUser(e)}/> 

         <input type="submit" value="Enviar" />

         



    </form>
    
    </>)
}