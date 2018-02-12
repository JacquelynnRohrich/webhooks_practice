const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const port = process.env.PORT || 3030;

const server = express();
server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('Hello World from my ${port}')
});
server.post('/payload', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

server.listen(port, err => {
    if (err) console.error(err);
    console.log(`Magic happening on ${port}`);
});

