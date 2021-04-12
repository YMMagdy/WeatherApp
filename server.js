// Setup empty JS object to act as endpoint for all routes
projectData = [];

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
app.use(cors());
app.use(express.static('website'));

// Setup Server
const port = 3000;//The port to be listening to
const server=app.listen(port,()=>{
    console.log(`Running on localhost: ${port}`);//Checking that the server runs on this port
});

const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';//The base URL for the fetch
const api = '55ba44213f055d67b3dd9a6db2232132';//The personal API key obtained from 

//This function is used when all of the app data is needed (Using GET)
app.get('/all',(req,res)=>{
    console.log(projectData);
    res.send(projectData);
    projectData=[];//Emptying the data
});

//This function is called when certain data needs to be added to the data in the server
app.post('/add',(req,res)=>{
    console.log(req.body);
    let newData={
        temp:req.body.temp,
        date:req.body.date,
        feel:req.body.feel
    };
    projectData.push(newData);//Pushing the new data recieved into the array of data
    res.send('newData');//Sending this back as a response
});
