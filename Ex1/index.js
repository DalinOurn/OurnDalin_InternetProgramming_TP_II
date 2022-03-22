const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors({
    origin: 'http://localhost:3000'
}))
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//parse application/json
app.use(bodyParser.json());
//connect to mongodb
require('./configs/db')();
//mongoose.connect('mongodb://localhost:27017/mg_database');

//const routes = ;
//app.use(require('./routes');
const routes = require('./routes');
app.use(routes);

app.listen(3000, () => 
    console.log('This App is running on localhost:3000')
) 


