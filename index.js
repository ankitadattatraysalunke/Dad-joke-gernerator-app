const btnEL = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "xS3M/5o3wCvAR6VrWmrzIA==TnJ8ziD0I4ujGlfM";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updating..";
        btnEL.disabled = true;
        btnEL.innerText = "Loading..";
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
    
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke";     
    } catch (error) {

        jokeEl.innerText = "An error happened, try again later";
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke"; 
        console.log(error);  
   
    }
}

btnEL.addEventListener("click", getJoke)