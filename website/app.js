/* Global Variables */
 //const expres = require('express');


// Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// Personal API Key for OpenWeatherMap API
const apiKey = "?&appid=a9e7713d98fdeabfbc5b3b6b7c2b5761&units=metric";
const url = 'https://api.openweathermap.org/data/2.5/weather?';

/* Function to GET Web API Data*/
 const getZipCountry = async (zip) => { 
  try{
    const query = `?apikey=${apiKey}&q=${zip}`; 
    const response = await fetch(url + query); 
    const data = await response.json();
      //console.log(data)
        return data;
 }catch(err){
  console.log(err)
 };

}

// Event listener to add function to existing HTML DOM element
  document.getElementById('generate').addEventListener('click', (event)=> {
    const zip = document.getElementById("zip").value;
    getZipCountry(zip)
     .then((data) => {
        CurrentData(data)
        .then((info) =>{
          getDataTOserver('./add' , info)
          .then((getAll) =>{
            AllData('./all' ,  getAll);
            });
          });
        });
     });


/* Function called by event listener */    
  const CurrentData = async (data)=>{
    try{
      const feelings = document.getElementById("feelings");
      const temper = document.querySelector("#temp");
      const date = document.querySelector("#date");
      const content = document.querySelector("#content");
        const info = {
          Date: newDate , 
          feelings: feelings.value,
          temp: data.main.temp
        };
        console.log(info)
        temper.innerHTML = `Tempreture:  ${info.temp}`;
        content.innerHTML = `Feeling: ${info.feelings}`; 
        date.innerHTML = `date: ${info.Date}`;
        return info;
      }catch(errr){
        console.log(errr)
      };
  }

/* Function to POST data */
  const getDataTOserver = async (url = '', data = {}) => {
    const response = await fetch(url, 
        {
            method: "POST", 
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },       
            body: JSON.stringify(data), 
          }
        );

        try {
            const reselt =  await response.json();
            return reselt;
        } catch (error) {
            console.log(error);
        }
};

/* Function to Post Project Data */
  const AllData = async (url) => {
    const data = await fetch(url);
    try{
      const respon = await data.json();
      //console.log(data);
      return data
    }catch(err){
      console.log(err)
    }

    }

 








  





























  // document.getElementById("generate").addEventListener("click", (event) => {

  //   const query = `${url}${zip}${apiKey}`;
  //   generateDat(query);

  // });

  // const generateDat = async(url) =>{
  //   try{
  //     const reselt = await fetch(url);
  //     const data = reselt.json();
  //     console.log(data);
  //   }catch(err){
  //     console.log(err)

  //   }
  // };