/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//posting data from the client side using POST and async 
const postData= async (url='',data={}) =>{
    const res = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });
    try {
        //console.log(data);
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};
const baseURL ='http://api.openweathermap.org/data/2.5/weather?zip=';//The base URL for the fetch
const api = '&appid=55ba44213f055d67b3dd9a6db2232132';//The personal API key obtained from

document.getElementById('generate').addEventListener('click', search);

function search(e){
const zipCode = document.getElementById('zip').value;//zip code is obtained from the text field with ID 'zip'
const feelings = ''+document.getElementById('feelings').value;
getData(baseURL,zipCode,api,feelings)//Call getData function using the fetch. The base url, zip code and the API 
//are used to retrieve the data from the openweathermap website
.then(function(data){
    postData('/add', { temp:data.main.temp,date:newDate,feel:feelings});
    updateUI()});//Stacking promises to update the UI after the data is fetched using the API
}

const getData = async (baseURL, zip, api,feelings) =>{
    const res=await fetch(baseURL+zip+api) 
    try{
        const data=await res.json();
        return data;
    }catch(err){
        console.log("error", err);
    }
};

const updateUI=async()=>{
    const res = await fetch('/all');
    try{
    const data = await res.json();
    document.getElementById('date').innerHTML =`Date: ${data[0].date}`;
    document.getElementById('temp').innerHTML = `Temperature ${data[0].temp}`;
    document.getElementById('content').innerHTML =`Feeling: ${data[0].feel}`;
    }
    catch(err){
        console.log("error", err);
    }
}
