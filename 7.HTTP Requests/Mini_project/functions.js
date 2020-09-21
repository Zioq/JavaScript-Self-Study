// This function.js is a HTML constructor

// Venue HTML constructor 
const createVenueHTML = (name, location, iconSource)=> {
    return `<h2>${name}</h2>
            <image class= "venueimage" src = "${iconSource}"/>
            <h3>Address:</h3>
            <p>${location.address}</p>
            <p>${location.city}</p>
            <p>${location.country}</p>`;
};

// Weather HTML constructor
const createWeatherHTML = (currentDay) => {
    console.log(currentDay);
    //.getDay() method to get an integer representing the currnet day of the week.
    return `<h2>${weekDays[(new Date()).getDay()]}</h2> 
            <h2>High Temperature: ${kelvinToCelsius(currentDay.main.temp_max)}&deg;C</h2>
            <h2>Low Temperature: ${kelvinToCelsius(currentDay.main.temp_min)}&deg;C</h2>
            <h2> Condition: ${currentDay.weather[0].description}</h2>
            <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;

    
};

const kelvinToCelsius = k => {
    return (k - 273.15).toFixed(0);
};