const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//parse application/json
app.use(bodyParser.json());

//connect to mongodb
require('./configs/db')();


const routes = require('./routes');
app.use(routes);

app.listen(3000, () => 
    console.log('This App is running on localhost:3000')
) 


