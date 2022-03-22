const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var session = require('express-session');

app.use(cors({
    origin: 'http://localhost:3000'
}))
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'my-secured',
    resave: true,
    rolling: true,
    saveUninitialized: true,
    name: 'access_token',
    cookie: {
        maxAge: 1000 * 60 * 60 * 2, // 2hours
        sameSite: true,
        secure: false,
    }
}))

//connect to mongodb
require('./configs/db')();


const routes = require('./routes');
app.use(routes);

app.listen(3000, () => 
    console.log('This App is running on localhost:3000')
) 


