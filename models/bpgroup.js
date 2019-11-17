var mongoose = require('mongoose');
var  BPGroup = mongoose.BPGroup;
var BPGroupSchema = new BPGroup({
    id:String,
    name:String,
    admins:[String],
    membersIds:[String],
    members:[Object]   
});

var Bpgroup = mongoose.model('Bpgroup',BPGroupSchema);
console.log("se creo modelo");
module.exports = Bpgroup;