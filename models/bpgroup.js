var mongoose = require('mongoose');
var  Schema = mongoose.Schema;
var bpuser = mongoose.model('bpuser');
var BPGroupSchema = new Schema({
    idgroup:String,
    name:String,
    admins:[String],
    membersIds:[String],
    members:[
        { type: Schema.ObjectId,
           ref: "bpuser"
         }
]   
});

var Bpgroup = mongoose.model('bpgroup',BPGroupSchema);
console.log("se creo modelo");
module.exports = Bpgroup;