// Set the Foursquare API 
const clientId = 'HAADIKSZIZXTBTEMDQPEY42OLRME2UPO23OM5LR5Y3U2Q4QY';
const clientSecret = 'Z4VNFUULXBP0R1L52JYD0KECM1K5JC1Y3AWKIVOHINCA4QVK';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';


// Set the OpenWeather API
const openWeatherKey = 'fd3ee3aacf7b96f369c35f9b11b46187';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), ("#venue2"), ("#venue3")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// AJAX Function
const getVenues = async () => {
    // Save the value from the user's input filed on the page
    const city = $input.val();
    // Entire of request URL
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200921`;

    try{
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            //Filter data what we need in the jsonRespoonse
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            console.log(venues);
            
            return venues;
        }

    } catch(error) {
        console.log(error);
    }

};

const getWeather = async() => {

    try{
        // Set request url
        const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

        // Get the response
        const response = await fetch(urlToFetch);

        // Check the status of response
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            
            return jsonResponse;
        }

    } catch(error) {
        console.log(error);
    }
};


// Runder Function
const renderVenues = (venues) => {
    // $veneuDivs is an array of the <div>s in index.html where I will render the information returned in the response from the Foursquare API
    $venueDivs.forEach(($venue,index) => {
        console.log($venue);
    });

};

// Execute functions
const executeSearch = () => {

    getVenues();
    getWeather();
    renderVenues();
    //make stop to relaod page.
    return false;
};

// Execute the main function when click ths submit button
$submit.click(executeSearch);