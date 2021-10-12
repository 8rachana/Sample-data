const { number } = require('joi');
const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const validator = require('validator');
const Schema = require('mongoose').Schema;
//const deptmodel = mongoose.model("department",mongoose.Schema);
const department = require('./department');
const UserSchema = mongoose.Schema({
    
    Person_id: {
        type: Number,
        required: true,
        unique : true
    },
    Name: {
     type: String,
     required: true
    },
    Mobile: {
     type: String,
     minlength : 10,
     maxlength : 10,
     required: true,
     unique : true
    },
    Email: {
     type: String,
     required: true,
     unique : true,
    },
    DOB: {
     type: Date,
     default: Date.now
    },
    CreatedAt: {
     type: Date,
     default: Date.now
    },
    ModifiedAt: {
     type: Date,
     default: Date.now
    },
    department : 
    {
       type: mongoose.Schema.Types.ObjectId,
       ref:'department',
       required:true
    }
 });
 
 autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 
 UserSchema.plugin(autoIncrement.plugin, 'Users'); // 4. use autoIncrement
 module.exports = mongoose.model('Users', UserSchema);