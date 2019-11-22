var mongoose = require('mongoose');
var  Schema = mongoose.Schema;
var bpuser = mongoose.model('bpuser');
var BPGroupSchema = new Schema({
    idgroup:String,
    name:String,
    admins:[
      {
         type: Schema.ObjectId,
         ref: "bpuser"
      }
    ],
    members:[
        { type: Schema.ObjectId,
           ref: "bpuser"
         }
]   
});

var Bpgroup = mongoose.model('bpgroup',BPGroupSchema);
console.log("se creo modelo");
module.exports = Bpgroup;