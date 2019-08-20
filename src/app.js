const express = require('express');
const url = 'https://api.darksky.net/forecast/62b6f3d89534c3cabdee2373423dbd76/37.8267,-122.4233?';


const app = express();

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