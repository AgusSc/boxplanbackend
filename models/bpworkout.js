var mongoose = require('mongoose');
var  BPWork = mongoose.BPwork;
var BPWorkoutSchema = new BPWork({
    idbpworkout:String,
    wodType:Number,
    workoutTime:Number,
    userTime:Number,
    workoutDescription:String,
    date: Date,
    weightLifttingExercise:String,
    weightLifttingSession:[String],
    documentId:String,
    weightLiftingSession :[Object]
});

var BPWorkout = mongoose.model('BPWorkout',BPWorkoutSchema);
console.log("se creo modelo");
module.exports = BPWorkout;