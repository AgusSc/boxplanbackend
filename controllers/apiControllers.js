var Contact = require('../models/bpuser');
var bodyParser = require('body-parser');


let getUsers = (req, res) =>
{      
    console.log("llegue a leer");
    Contact.find(function(err,listUsers)
    {

        res.status(200).send(listUsers);
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};
let loginUser = (req, res) =>
{   
    Contact.findOne({mail:req.body.mail,password:req.body.password},function(err,results)
    {
        if(err){
            res.status(500).send(err);
            console.log(err);
        }
        else{
            res.status(200).send(results);  
            console.log(results);    
        }
    });
    
}
let getContactosByname = (req, res) =>
{   
    let name1 = {name:req.body.name};
    Contact.find(name1,function(err,results)
    {
        if(err){
            res.status(500).send(err);
            console.log(err);
        }
        else{
            res.status(200).send(results);  
            console.log(results);    
        }
    });
    
}
let searchUserbyKey = (req, res) =>
{   
    let name = {name: {'$regex' : '.*' + req.body.key + '.*'}};  
    let lastname = {lastname: {'$regex' : '.*' + req.body.key + '.*'}};
    Contact.find({$or:[name,lastname]},function(err,results)
    {
        if(err){
            res.status(500).send(err);
            console.log(err);
        }
        else{
            res.status(200).send(results);  
            console.log(results);    
        }
    });
    
}
let createUser = (req,res) =>
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
        {console.log(newContact);
            res.status(200).send(newContact); 
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}

let updateUser = (req,res) => 
{
    let id = {iduser: req.body.iduser};
   
    console.log("update",id);
    Contact.findOneAndUpdate({ iduser : req.body.iduser},{$set : {name: req.body.name}},{new:true},function(err)
    {
       res.status(200).send({estado:"Registro modificado"}); //devuelvo resultado query       
       (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    
    });
}


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
module.exports={createUser,getUsers,deleteUser, getContactosByname,searchUserbyKey,updateUser,loginUser};
