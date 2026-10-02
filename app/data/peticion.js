

export  async function peticionUsuarios(){

      const reponse= await fetch("/usuarios") 
      const data= await reponse.json() 

      return data



    }
