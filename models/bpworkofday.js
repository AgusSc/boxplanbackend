var mongoose = require('mongoose');
var  Schema = mongoose.Schema;
var BPGWorkOfDaySchema = new Schema({
    idworkofday:String,
    date:Date,
    workouts:[Object]
});

var BpgWorkday = mongoose.model('BPGWorkOfDay',BPGWorkOfDaySchema);
console.log("se creo modelo");
module.exports = BpgWorkday;