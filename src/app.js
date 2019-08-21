const path = require('path');
const express = require('express');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello express')
});

app.get('/help', (req, res) => {
    res.send({
        name: 'davi',
        age: 38
    })
});
app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
});
app.get('/weather', (req, res) => {
    res.send([
        {
            latitude: 37.8267,
            logitude: -122.4233,
            location: 'boston'

        }
    ])
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});