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


