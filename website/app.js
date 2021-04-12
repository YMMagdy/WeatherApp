/* Global Variables */

const { getHeapCodeStatistics } = require ('node:v8');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//posting data from the client side using POST and async 
const postData= async (url='',data={}) =>{
    const req = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", errors);
    }
};
const baseURL ='api.openweathermap.org/data/2.5/weather?zip=';//The base URL for the fetch
const api = '55ba44213f055d67b3dd9a6db2232132';//The personal API key obtained from 

document.getElementById('generate').addEventListener('click',search);

function search(e){
const zipCode = document.getElementById('zip').value;//zip code is obtained from the text field with ID 'zip'
getData(baseURL,zipCode,api)//Call getData function
.then(async function(){//Using promises
    //Continue here
document.getElementById('date').innerHTML =data[0].date;
document.getElementById('temp').innerHTML = data[0].temperature;
document.getElementById('content').innerHTML = data[0].userResponse;
});
}

const getData = async (baseURL, zip, api) =>{
    const res=await fetch(baseURL+zip+api) 
    try{
        const data=await res.json();
        return data;
    }catch(err){
        console.log("error", err);
    }
};
