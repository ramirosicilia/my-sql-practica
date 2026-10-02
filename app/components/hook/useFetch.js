
import { useState,useEffect } from "react";
import {peticionUsuario}from "../../data/peticion.js"


export function useFetch(){

    const [ user, SetUser] = ([]) 


    useEffect(()=>{ 

      async  function recibir(){ 

        const data= await peticionUsuario() 

        SetUser(data)

        }

        recibir()



    },[])

    return{
        user,
        SetUser
    }



}