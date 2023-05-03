const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

// all data
const chef = require('./data/chef.json');
const menu = require('./data/menu.json');

app.get('/', (req, res) => {
    res.send('tasty salt server running ...')
})

// get all chef data
app.get('/chef', (req, res) => {
    res.send(chef)
})

// find single chef
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const findChef = chef.find(item => item._id == id)
    res.send(findChef)
})

// get all menu data
app.get('/menu', (req, res) => {
    res.send(menu)
})

app.listen(port, () => {
    console.log("running port is :", port)
})