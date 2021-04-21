const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

const user = (req, res) => {


   User.findOne({username: req.params.username}, function (err, data){
    
    if(err){
            res.status(400).send('Error');
        }else{
            res.status(200)
            
            res.render('user' , {
                 name: data.name,
                 username: data.username,
                 email: data.email,
                 password: data.password});
            console.log('esta es la data:' + data)
            
        }
    });
}

const deleteUser = async (req, res) => {
    
    await User.deleteOne({username:req.params.username})
    res.redirect('/');
    res.status(200);
   
    console.log('deleted')
}

const updateUser = async (req, res) => {

    
    await User.updateOne({username:req.params.username}, {email: req.query.email});
    res.redirect('/')
    res.status(200);
    console.log('Updated')
    console.log(req.query);

}

module.exports = {
    user,
    deleteUser,
    updateUser,
}