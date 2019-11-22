var Group = require('../models/bpgroup');
var bodyParser = require('body-parser');
var bpuser =require('../models/bpuser');


let insertGroup = (req,res) =>
{
    console.log(req.body);
    var newGroup = Group({
        name:req.body.name,
        admins:req.body.admins,
        membersIds:req.body.membersIds,
        members:req.body.members
    });
    newGroup.save().
    then
    (
        (newGroup)=>
        {
            res.status(200).send(newGroup); 
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}
let deleteGroup = (req,res)=>
{
    let id = {idgroup: req.body.idgroup};
    Group.deleteOne(id, function(err)
    {
        res.status(200).send({estado:"Registro eliminado"});
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }      
    });
           
   
}
let getGroups = (req, res) =>
{      
    console.log("llegue a leer");
    Group.find(function(err,listGroup)
    {
        
        res.status(200).send(listGroup);
    });
    
  
};
let getGroupsMembers = (req, res) =>
{      
    Group.find(function(err,listGroup)
    {
        bpuser.populate(listGroup, {path: "members"},function(err, listGroup){
        res.status(200).send(listGroup);
    });
    })
};



let searchGroupbyKey = (req, res) =>
{   
    let name = {name: {'$regex' : '.*' + req.body.key + '.*'}};  
    Group.find(name,function(err,results)
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
module.exports={insertGroup,deleteGroup,getGroups,searchGroupbyKey,getGroupsMembers};