var mongoose = require('mongoose');
var  BPGWorkOfDay = mongoose.BPGWorkOfDay;
var BPGWorkOfDaySchema = new BPGWorkOfDay({
    id:String,
    date:Date,
    workouts:[Object]
});

var BpgWorkday = mongoose.model('BPGWorkOfDay',BPGWorkOfDaySchema);
console.log("se creo modelo");
module.exports = BpgWorkday;