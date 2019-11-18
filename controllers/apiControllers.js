var Contact = require('../models/bpuser');
var bodyParser = require('body-parser');

   
let getUsers = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Contact.find(function(err,listUsers)
    {
        //devuelvo resultado query   
        //console.log(listaContactos); 
        res.status(200).send(listUsers);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};
/*
let getContactosById = (req, res) =>
{      
    console.log("llegue a leer con filtro");
    //Obtener id busqueda
    let idBusqueda = {dni: req.body.dniBuscado};
    console.log(idBusqueda);
    //Listar resultados
    Contactos.find(idBusqueda,function(err,todo)
    {
        (listaContactos)=>
        {
            res.status(200).send(listaContactos); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>
        {
            res.status(500).send(err);
            console.log(err);
        }
    })
      
};
*/
let getContactosByname = (req, res) =>
{      
 
    let idName = {name: req.body.name};
    console.log(idName);
    //Listar resultados
    Contact.find(idName,function(err,todo)
    {
        (listUsers)=>
        {
            res.status(200).send(listUsers);   
        },
        (err)=>
        {
            res.status(500).send(err);
            console.log(err);
        }
    })
      
};

let insertContact = (req,res) =>
{
    console.log(req.body);
    var newContact = Contact({
        name: req.body.name,
        lastname:req.body.lastname,
        mail: req.body.mail,
        password:req.body.password,
        groupsID:req.body.groupsID,
        groupsAdmin:req.body.groupsAdmin
    });
    newContact.save().
    then
    (
        (newContact)=>
        {
            res.status(200).send(newContact); 
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}
/*
let updateContacto = (req,res) => 
{
    let id = { dni : req.body.dniBuscado};
   
    console.log("update",id);
   // console.log(newContacto);
    Contactos.findOneAndUpdate({ dni : req.body.dniBuscado},{$set : {nombre: req.body.newData.nombre}},{new:true},function(err)
    {
       //console.log("respuesta",res);
       //let rta = {estado: "Ok"};
       res.status(200).send({estado:"Registro modificado"}); //devuelvo resultado query       
       (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    
    });
}
*/
let deleteUser = (req,res)=>
{
    let id = {iduser: req.body.iduser};
    Contact.deleteOne(id, function(err)
    {
        res.status(200).send({estado:"Registro eliminado"}); //devuelvo resultado  
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }      
    });
           
   
}
//module.exports = {getContactos,insertContacto,updateContacto,deleteContacto,getContactosById};
module.exports={insertContact,getUsers,deleteUser, getContactosByname};
