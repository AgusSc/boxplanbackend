var mongoose = require('mongoose');

var CPWeightLifting = mongoose.CPWeightLifting;

var CPWeightLiftingSchema = new CPWeightLifting({
    idcpweightlifting:String,
    sets:Number,
    repetitions:Number,
    percentaje:Number,
    weight:Number
});

var CPWeight = mongoose.model('CPWeight',CPWeightLiftingSchema);
console.log("se creo modelo");
module.exports = CPWeight;