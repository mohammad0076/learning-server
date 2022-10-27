const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data/data.json')
const cors = require('cors');
const cat = require('./data/datad.json');
const a = b;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Learning server', port)
})
app.get('/courses', (req, res) => {
    res.send(data)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const sel = cat.find(n => n.id === id);
    res.send(sel);
})