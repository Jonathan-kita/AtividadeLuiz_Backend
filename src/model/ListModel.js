const { json } = require("express");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();  

class Banco_List extends Conexao {
           
    async Cadastrar(name,descricao,manha,tarde,noite){

        const text = "insert into Materias(name,descricao,periodo_manha,periodo_tarde,periodo_noite)values($1,$2,$3,$4,$5)"
        const values = [name,descricao,manha,tarde,noite] 
        const client = await con.Open(text)  

        if(!client){
            return erros.Client;
          }
        
          const valor = await client
          .query(text,values)
          .then(token => {return token})    
          .catch(e => console.error("Não foi possivel" + e.stack))
          .finally(() => con.End(client))           
         
        return new Promise(function(resolve,reject){
                setTimeout(function(){
                   

                resolve(valor)
                reject("Erro na promisse login");
                },1000)
        });  
    }

    async Trazer(){

        const text = "select * from Materias"
       
        const client = await con.Open(text)  

        if(!client){
            return erros.Client;
          }
        
          const valor = await client
          .query(text)
          .then(token => {return token})    
          .catch(e => console.error("Não foi possivel" + e.stack))
          .finally(() => con.End(client))           
         
        return new Promise(function(resolve,reject){
                setTimeout(function(){
                   

                resolve(valor)
                reject("Erro na promisse login");
                },1000)
        });  
    }

    
    async Deletar(id){

        const text = "Delete from Materias Where id = $1"
        const values = [id]

        const client = await con.Open(text)  

        if(!client){
            return erros.Client;
          }
        
          const valor = await client
          .query(text,values)
          .then(token => {return token})    
          .catch(e => console.error("Não foi possivel" + e.stack))
          .finally(() => con.End(client))           
         
        return new Promise(function(resolve,reject){
                setTimeout(function(){
                   

                resolve(valor)
                reject("Erro na promisse login");
                },1000)
        });  
    }

    async Editar(name,descricao,manha,tarde,noite,id){

        const text = "Update Materias set name = $1, descricao = $2, periodo_manha = $3, periodo_tarde = $4, periodo_noite = $5 where id= $6"
        const values = [name,descricao,manha,tarde,noite,id] 
        const client = await con.Open(text)  

        if(!client){
            return erros.Client;
          }
        
          const valor = await client
          .query(text,values)
          .then(token => {return token})    
          .catch(e => console.error("Não foi possivel" + e.stack))
          .finally(() => con.End(client))           
         
        return new Promise(function(resolve,reject){
                setTimeout(function(){
                   console.log(valor)

                resolve(valor)
                reject("Erro na promisse login");
                },1000)
        });  
    }
}
 
 module.exports = Banco_List

