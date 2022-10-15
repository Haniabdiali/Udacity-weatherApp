// Setup empty JS object to act as endpoint for all routes
 projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path');

//port running the server
const port = 7200;


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder

app.use(express.static('website'))

// Setup Server
app.listen(port , () => {
    console.log('server is running on port' , port)


})

app.get('/all' , (req , res) => {
   // res.send('hanaaa')
    res.send(projectData).status(200).end();

});

app.post('/add', (req, res)=> {
    const body = req.body;
    projectData = body
    console.log(projectData);
    res.send(projectData).status(200).end();

});


    


