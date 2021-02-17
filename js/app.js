window.addEventListener("load",()=>{
let long;
let lat;
const key="16a56b0419ea2902809ea62bbb9258fa";
const proxy="https://cors-anywhere.herokuapp.com/";
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
        long=pos.coords.longitude;
        lat=pos.coords.latitude;
        
        const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
    
        fetch(api)
        .then(response=>{
            return response.json();
        }).then(data=>{
            document.querySelector(".location-timezone").textContent=data.name;
           console.log(data.weather[0].description);
           console.log(data);
           document.querySelector(".temperature-description").textContent=data.weather[0].description;
           document.querySelector("img").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
           document.querySelector(".temperature-degree").textContent=data.main.temp;
        }

        )


    });
}

});