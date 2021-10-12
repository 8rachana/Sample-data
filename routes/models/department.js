const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const DeptSchema = mongoose.Schema({
   
    D_Id :{
        type: Number,
        required: true
    },
    Name: {
     type: String,
     required: true
    }
    
   
 });

 autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 
 DeptSchema.plugin(autoIncrement.plugin, 'department');
 module.exports = mongoose.model('department', DeptSchema);