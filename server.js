// Setup empty JS object to act as endpoint for all routes
projectData = {animal:'Lion'};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
// Initialize the main project folder
app.use(express.static('website'));
app.use(cors());


// Setup Server
const port = 5500;
const server=app.listen(port,()=>{
    console.log(`Running on localhost: ${port}`);
});

app.get('/all',(req,res)=>{
    res.send(projectData);
});

app.post('/add',(req,res)=>{
    let newData={
        temperature:req.body.temperature,
        date:req.body.date,
        userResponse:req.body.userResponse
    };
    projectData.push(newData);
});
