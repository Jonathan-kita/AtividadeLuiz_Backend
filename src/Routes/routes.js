const ValidaSession = require('../Validacao/ValidaSession');
const Valida = new ValidaSession(); 
const ListController = require('../controller/ListController');
const listController = new ListController;
const UserController = require("../controller/UserController");
const userController = new UserController();

const express = require("express");
const routes = express.Router();

module.exports = {
 
 async login(req,res){
    const {Email} = req.body
    const {Pass} = req.body
       
      Valida.Valida_login(Email,Pass).then(
        function(results){
            res.send(results)    
        }
    ) 
},

 async Cadastrar(req,res){
       listController.Cadastrar(req,res).then(
          results => res.send(results)
       )
 },

 async Trazer(req,res){
   listController.Trazer(req,res).then(
      results => res.send(results)
   )
},
 
async Deletar(req,res){
   listController.Deletar(req,res).then(
      results => res.send(results)
   )
},
async Editar(req,res){
   listController.Editar(req,res).then(
      results => res.send(results)
   )
},

}

