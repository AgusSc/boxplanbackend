
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
    name:String,
    lastname:String,
    mail: String,
    password:String,
    groupsID:[String],
    groupsAdmin:[String]
});

var Contact = mongoose.model('Contacto', contactSchema);
console.log("se creo modelo");
module.exports = Contact;