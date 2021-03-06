const express = require('express');
const router = express.Router();

const urlencodedParser = express.urlencoded({extended:false});

const {register, Singin} = require('../controller/authcontroller');
const {user, deleteUser, updateUser} = require('../controller/usercontroller');
const {create, getuserProduct, getProduct} = require('../controller/prodcontroller');

//user
router.route('/register').post(urlencodedParser, register);
router.route('/home').post(urlencodedParser, Singin);
router.route('/user/:username').get(urlencodedParser, user);
router.route('/update/:username').get(urlencodedParser, updateUser)
router.route('/deleteUser/:username').get(deleteUser);

//product 
router.route('/create').post(urlencodedParser, create);
router.route('/userproduct/:username').get(urlencodedParser, getuserProduct);
//router.route('/updateprod/:name').get(urlencodedParser, getProduct);

module.exports = router;
