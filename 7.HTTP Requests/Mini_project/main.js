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
    console.log(city);
    // Entire of request URL
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200921`;

    try{
        const response = await fetch(urlToFetch);
        if(response.ok) {
            console.log(response);
        }

    } catch(error) {
        console.log(error);
    }

};

const executeSearch = () => {

    getVenues();
    //make stop to relaod page.
    return false;
};

// Execute the main function when click ths submit button
$submit.click(executeSearch);