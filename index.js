const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

// all chef
const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('tasty salt server running ...')
})

// get all chef data
app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log("running port is :", port)
})