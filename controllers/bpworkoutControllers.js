var BPWorkout = require('../models/bpworkout');
var bodyParser = require('body-parser');
var weightlifting = require('../models/cpweightlifting');
let insertBpworkout = (req,res) =>
{
    console.log(req.body);
    var newBpworkout = BPWorkout({

        wodType:req.body.wodType,
        workoutTime:req.body.workoutTime,
        userTime:req.body.userTime,
        workoutDescription:req.body.workoutDescription,
        date:req.body.date,
        weightLifttingExercise:req.body.weightLifttingExercise,
        weightLifttingSession:[req.body.weightLifttingSession],
        documentId:req.body.documentId
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

module.exports={insertBpworkout,getBPworkout,getWorkoutCpWeightLifting};