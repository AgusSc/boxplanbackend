var BPWorkout = require('../models/bpworkout');
var bodyParser = require('body-parser');
var weightlifting = require('../models/cpweightlifting');
let createWorkout = (req,res) =>
{
    console.log(req.body);
    var newBpworkout = BPWorkout({

        wodType:req.body.wodType,
        workoutTime:req.body.workoutTime,
        userTime:req.body.userTime,
        workoutDescription:req.body.workoutDescription,
        date:req.body.date,
        weightLifttingExercise:req.body.weightLifttingExercise,
        weightLiftingSession:[req.body.weightLiftingSession]
    });
    newBpworkout.save().
    then
    (
        (newBpworkout)=>
        {
            res.status(200).send(newBpworkout); 
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}
let getBPworkout = (req, res) =>
{      
    console.log("llegue a leer");
    BPWorkout.find(function(err,listBpWorkout)
    {
        
        res.status(200).send(listBpWorkout);
    });
    
  
};
let getWorkoutCpWeightLifting = (req, res) =>
{      
    BPWorkout.find(function(err,listBpWorkout)
    {
        weightlifting.populate(listBpWorkout, {path: "weightLiftingSession"},function(err, listBpWorkout){
        res.status(200).send(listBpWorkout);
    });
    })
};

let deleteWeightLifting = (req,res)=>
{
    let id = {idbpworkout: req.body.idbpworkout};
    BPWorkout.deleteOne(id, function(err)
    {
        res.status(200).send({estado:"Registro eliminado"});
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }      
    });
           
   
}
module.exports={createWorkout,getBPworkout,getWorkoutCpWeightLifting,deleteWeightLifting};