const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema ({
    name: {
        type: String,
        
    },
    username:{
        type: String, 
        
    },
    price:{
        type: String, 
        
    },
    description:{
        type:String,
       
    },
    }, {timestamps:true});

    const Product = mongoose.model('Product', product)
    module.exports = Product;