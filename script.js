let valueSearch=document.getElementById("valueSearch");
let city=document.getElementById("city");
let tempreture=document.getElementById("tempreture");
let description=document.getElementsByClassName("description");
let clouds=document.getElementById("clouds");
let Humoidity=document.getElementById("Humoidity");
let Pressure =document.getElementById("Pressure");
let form=document.querySelector("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();

    }
})

id ='d5df1deeca0dc0b5151dc945aeeae360';

let url=  'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather=()=>{
fetch(url+'&q='+ valueSearch.value)
.then(responsive => responsive.json())
.then(data =>{
console.log(data);

if(data.cod == 200){
    city.querySelector('figcaption').innerText =data.name;
    city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/flat/64.png';
    tempreture.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    // tempreture.querySelector('img').src ="https://openweathermap.org/img/wn/'+data.weather[0].icon'@4x.png";
    tempreture.querySelector('figcaption span').innerText=data.main.temp;
    description.innerText=data.weather[0].description;
    clouds.innerText=data.clouds.all;
    Humoidity.innerText=data.main.humidity;
    Pressure.innerText=data.main.pressure;
    
}else{
   main.classList.add('error'); 
   setTimeout(() => {
       main.classList.remove('error');
    
   }, 1000);
}

valueSearch.value='';
})
}

// const initApp =() =>{
//     valueSearch.value='Washington';
//     searchWeather();
// }

// initApp();