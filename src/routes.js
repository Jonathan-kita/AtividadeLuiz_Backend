const express = require("express");


const imgController = require("./controller/imgController");
const routes = express.Router();

const rotas = require('./Routes/routes')



routes.post('/Login',async (req, res) => {rotas.login(req,res);});

routes.post('/Cadastrar',(req,res)=>{rotas.Cadastrar(req,res)})

routes.post('/Editar',(req,res)=>{rotas.Editar(req,res)})

routes.post('/Trazer',(req,res)=>{rotas.Trazer(req,res)})

routes.post('/Deletar',(req,res)=>{rotas.Deletar(req,res)})


module.exports = routes;