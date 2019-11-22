var mongoose = require('mongoose');
var  Schema = mongoose.Schema;
var bpworkout = require('../models/bpworkout');
var BPGWorkOfDaySchema = new Schema({
    idworkofday:String,
    date:Date,
    workouts:
    [
       { 
           type: Schema.ObjectId,
           ref: "bpworkout"
       }
    ]
});

var BpgWorkday = mongoose.model('BPGWorkOfDay',BPGWorkOfDaySchema);
console.log("se creo modelo");
module.exports = BpgWorkday;