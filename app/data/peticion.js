

export  async function peticionUsuarios(){

      const reponse= await fetch("https://my-sql-practica.vercel.app") 
      const data= await reponse.json() 

      return data



    }
