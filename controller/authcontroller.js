const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register =  (req, res) => {

    const {name, username, email, ConfEmail, password, ConfPass} = req.body;

        if(email != ConfEmail){
            res.status(400).send('Email does not match!');
        }else{
            if(password != ConfPass){
                res.status(400).send('Password does not match!');
            }else{
                
                User.findOne({username}).then(savedUser => {

                    if(savedUser){
                        res.status(400).send('Username already exist!')
                    }else{
                        User.findOne({email}).then(savedEmail => {
                            if(savedEmail){
                                res.status(400).send('Email already exist!');
                            }else{

                                bcrypt.hash(password, 12).then(hashPass => {
                                    const newUser = new User({
                                        name,
                                        username,
                                        email,
                                        password:hashPass
                                    }).save(function(err, newUser){
                                        if(err) throw err;
                                        res.status(200)
                                        res.render('Singin')
                                    })
                                }); 
                            }
                        }) 
                    }

                });
            }
        }
};

const Singin = (req, res) => {
    
    var {username, password} = req.body;

    User.findOne({username}).then(savedUser => {
        if(!savedUser){
            res.status(400).send('Invalid Username!');
        }else{
            bcrypt.compare(password, savedUser.password).then(correctCreds => {
                if(correctCreds){
                    const token = jwt.sign({username: savedUser.username}, 'secret');                
                    res.status(200)
                    console.log('User:' + savedUser);
                    res.redirect('home/' + username);
                   
                }else{
                    return res.status(400).send('Incorrect Password!')
                }
            })
        }
    })
}

module.exports = {
    register,
    Singin,
}