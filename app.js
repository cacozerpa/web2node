const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const views = require('./routes/views');

//express app
const app = express();

//set up template engine
app.set('view engine', 'ejs');
app.set('views','public/views');

//static files
app.use(express.static('./public'));

//server creation
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('server started!');

//db connection
const dbURI = 'mongodb+srv://carloszerpa:heliana06@nodewebproject.dz79m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));

//routes
app.use(routes);
app.use(views);



