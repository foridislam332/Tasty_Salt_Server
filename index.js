const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('tasty salt server running ...')
})

app.listen(port, () => {
    console.log("running port is :", port)
})