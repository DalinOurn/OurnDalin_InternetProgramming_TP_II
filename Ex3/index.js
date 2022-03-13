const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}))

var path = require('path');
var public = path.join(__dirname, '');
app.get('/', express.static(public));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
app.use(routes);

app.listen(3000, () => {
    console.log('Your app is available at http://localhost:3000');
});