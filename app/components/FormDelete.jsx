"use client"

import React, { useEffect } from 'react'

const FormDelete = ({id}) => { 

   const url_database=process.env.NEXT_PUBLIC_URL



   useEffect(()=>{ 
    
     async function deleteUser(){ 

    const response=await fetch(`${url_database}/usuarios/${id}`,{
            method:"delete",
            
        })

          const data=await response.json()

        if(data==="usuario eliminado"){
          window.location.reload()

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
