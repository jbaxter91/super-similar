// TasteDive api call example:
// https://tastedive.com/api/similar?k=381371-Similar-W5E25EP7&q=pulp+fiction

// OMDb api call example:
// http://www.omdbapi.com/?apikey=20106460&t=the+princess+bride

var tasteURL =  "https://tastedive.com/api/similar?k=381371-Similar-W5E25EP7&q=";

var movieName = "";

movieName = "pulp+fiction";

// lowecase all letters
// replaced spaces with plus

tasteURL += movieName; 

$.ajax({
    url: tasteURL
}).then(function(response) {
    console.log(response)
});