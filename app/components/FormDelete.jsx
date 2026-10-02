"use client"
import { useFetch } from './hook/useFetch.js'

import React, { useEffect } from 'react'

const FormDelete = ({id}) => { 

   const url_database=process.env.NEXT_PUBLIC_URL

   const {user,SetUser} = useFetch() 



   useEffect(()=>{ 
    
     async function deleteUser(){ 

    const response=await fetch(`${url_database}/usuarios/${id}`,{
            method:"delete",
            
        })

          const data=await response.json()

        if(data==="usuario eliminado"){ 

          SetUser(prev=>prev.filter(us=>us.id!=id))
         

        }
   } 

   deleteUser()
        
   },[id])




  return (
    <div>
      
    </div>
  )
}

export default FormDelete
