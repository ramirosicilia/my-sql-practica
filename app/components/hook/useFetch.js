
import { useState,useEffect } from "react";
import {peticionUsuarios}from "../../data/peticion.js"


export function useFetch(){

    const [ user, SetUser] =useState ([]) 


    useEffect(()=>{ 

      async  function recibir(){ 

        const data= await peticionUsuarios() 

        SetUser(data)

        }

        recibir()



    },[])

    return{
        user,
        SetUser
    }



}