var BPworkofday = require('../models/bpworkofday');
var bodyParser = require('body-parser');

let insertBPworkofday= (req,res) =>
{
    console.log(req.body);
    var newBPworkofday = BPworkofday({
        date:req.body.date,
        workouts:req.body.workouts
    });
    newBPworkofday.save().
    then
    (
        (newBPworkofday)=>
        {
            res.status(200).send(newBPworkofday); 
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}
let getBPworkofday = (req, res) =>
{      
    console.log("llegue a leer");
    BPworkofday.find(function(err,listBPworkofday)
    {
        
        res.status(200).send(listBPworkofday);
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
   
  
};
let deleteBPworkofday = (req,res)=>
{
    let id = {idworkofday: req.body.idworkofday};
    BPworkofday.deleteOne(id, function(err)
    {
        res.status(200).send({estado:"Registro eliminado"});
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }      
    });
           
   
}
module.exports={insertBPworkofday,getBPworkofday,deleteBPworkofday};