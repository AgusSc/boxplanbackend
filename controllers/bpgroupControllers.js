var Group = require('../models/bpgroup');
var bodyParser = require('body-parser');


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
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
    
  
};
module.exports={insertGroup,deleteGroup,getGroups};