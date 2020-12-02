
const Banco_List =  require("../model/ListModel");
const banco_List = new Banco_List(); 
class List{
   Cadastrar(req,res)
   {
      const {Name} = req.body;
      const {Desc} = req.body;
      const {Manha} = req.body.Periodo[0];
      const {Tarde} = req.body.Periodo[1];
      const {Noite} = req.body.Periodo[2];
   const result = banco_List.Cadastrar(Name,Desc,Manha,Tarde,Noite)
                
      return result
 
   }

   Trazer(req,res)
   {

   const result = banco_List.Trazer()
                
      return result
 
   } 

   Deletar(req,res)
   {
      const {id} = req.body;
      const result = banco_List.Deletar(id)
                
      return result
 
   } 

   Editar(req,res)
   {
     
      const {Name} = req.body;
      const {Desc} = req.body;
      const {Manha} = req.body.Periodo[0];
      const {Tarde} = req.body.Periodo[1];
      const {Noite} = req.body.Periodo[2];
      const {id} = req.body;
   const result = banco_List.Editar(Name,Desc,Manha,Tarde,Noite,id)
                
      return result
 
   }

  
}

module.exports = List

