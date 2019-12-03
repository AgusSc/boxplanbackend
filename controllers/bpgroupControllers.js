var Group = require('../models/bpgroup');
var bodyParser = require('body-parser');
var bpuser =require('../models/bpuser');


let createGroup = (req,res) =>
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
        //listGroup.push(Group);
        res.status(200).send(listGroup);
    });
    
  
};


/*let Addmember = (req,res) => 
{
    //let id = {idgroup: req.body.idgroup};
    Group.findOneAndUpdate({idgroup:req.body.idgroup},{$push:{members:req.body.members}},{ new: true },function(err,listGroup)
    {
           // res.status(200).send(listGroup);
           
           console.log(listGroup);
 
        //devuelvo resultado query       
       (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    
    });
}  
*/

/*let Addmember = (req,res) => 
{
    //let id = {idgroup: req.body.idgroup};
    Group.findOne({idgroup:req.body.idgroup},{ },function(err1,group)
    {
          var newMembers=[];
         newMembers=group.members.push(req.body.members);
          console.log(newMembers);
           group.updateOne({idgroup:req.body.idgroup},{$set:{members:newMembers}},function(err2,updategroup)
           {
             res.status(200).send(updategroup);
             (err2)=>
             { 
                 res.status(500).send(err2);
                 console.log(err2);
             }
           });
          
           (err1)=>
           { 
               res.status(500).send(err1);
               console.log(err1);
           }

        //devuelvo resultado query       
  
    });
} 
*/

let removeMember = (req,res) => 
{
    let id = {idgroup : req.body.idgroup};
    var options = ({members:req.body.members});
    Group.findOneAndDelete({id},function(err)
    {
       res.status(200).send({estado:"Usuario eliminado al grupo"}); 
       console.log(id);
       console.log(options);
       //devuelvo resultado query       
       (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    
    });
}

let getGroupsMembers = (req, res) =>
{   

    let members = {members:req.body.members};  
    Group.find(members,function(err,results)
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
};

let getGroupsAdmins = (req, res) =>
{        
    let admins = {admins:req.body.admins};  
    Group.find(admins,function(err,results)
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
};


let Addmember = (req,res) => 
{

    Group.findOneAndUpdate({"_id":req.body.idgroup},{"$push": {"members": req.body.members} },{new: true, safe: true, upsert: true }).then((result) => {
        return res.status(201).json({
            status: "Success",
            message: "Resources Are Created Successfully",
            data: result
        });
    }).catch((error) => {
        return res.status(500).json({
            status: "Failed",
            message: "Database Error",
            data: error
        });
    });
}  


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
module.exports={createGroup,deleteGroup,getGroups,searchGroupbyKey,getGroupsMembers,Addmember,removeMember,getGroupsAdmins};