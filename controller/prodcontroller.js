const Prod = require('../model/productoSchema');

const create =  (req, res) => {

    const {name, username, price, description} = req.body;

    const newProd = new Prod({
        name,
        username,
        price,
        description
    }).save(function(err, newProd){
        if(err) throw err;
        res.status(200).send('Product Created!')
    })
};

const getuserProduct = (req, res) =>{
    
    Prod.find({username:req.params.username},function(err,data){
        if(err){
            res.status(400).send('ERROR!');
        }else{
            res.status(200)
            res.render('userproduct',{
                data
            });
            console.log(data);
        }
    })
}

const getProduct = (req, res) => {

    Prod.findOne({name : req.params.name}), function (err, data){

    }
}

const deleteProduct = (req, res) => {

}

const products = (req, res) => {

    Prod.find({}, function (err,data){
        if(err){
            res.status(400).send("ERROR!")
        }else{
            res.status(200);
            res.render('home', {data});
            console.log(data);
        }
        
    })
}



module.exports = {
    create,
    getuserProduct,
    deleteProduct,
    getProduct,
    products,

}