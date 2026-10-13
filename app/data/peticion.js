

export  async function peticionUsuarios(){

      const reponse= await fetch("http://localhost:3000/usuarios") 
      const data= await reponse.json() 

      return data



    }
