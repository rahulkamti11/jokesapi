//  //Fetch API
//  // Syntax:
//  /* 
//     fetch('api_url') 
//     or
//     fetch('url',{ Method_object })
//         .then((response)=>{...})
//         .catch((error)=>{...})
//  */

//Example 1:
// fetch('https://official-joke-api.appspot.com/random_joke')
// .then(response=>response.json())//1st promise is returned or promise of fetch is returned but in the form of json
// .then(data=>console.log(data))//It returns 2nd promise in the form of JS objects using the json() in the previos .then

//Example 2 using async-await:
let api= "https://official-joke-api.appspot.com/random_joke";

let btn = document.querySelector("#btn");
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let para4 = document.querySelector("#para4");

async function call(){
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
    para1.innerText = "Person 1: "+data.setup;
    setTimeout(()=>{para2.innerText = "Person 2: I don't know...";},3000)
    setTimeout(()=>{para3.innerText = "Person 1: "+data.punchline;},5000)
    setTimeout(()=>{
        let audio = new Audio('laugh.mp3');
        audio.play();
        para4.innerText = "(😂🔊 laughter...)";
    },5500)
    
}

btn.addEventListener("click",()=>{
    call();
    para1.innerText = "";
    para2.innerText = "";
    para3.innerText = "";
    para4.innerText = "";
})