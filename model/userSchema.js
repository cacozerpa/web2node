const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema ({
    name: {
        type: String,
        
    },
    username:{
        type: String, 
        
    },
    password:{
        type: String, 
        
    },
    email:{
        type:String,
       
    },
    }, {timestamps:true});

    const Project = mongoose.model('Project', user)
    module.exports = Project;