
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
    iduser:String,
    name:String,
    lastname:String,
    mail: String,
    password:String,
    groupsID:[String],
    groupsAdmin:[String]
});

var Bpuser = mongoose.model('bpuser', contactSchema);
console.log("se creo modelo");
module.exports = Bpuser;