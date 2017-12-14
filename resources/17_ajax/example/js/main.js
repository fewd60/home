console.log('sanity check');

$(document).ready(function(){
  $.ajax({
    method: 'GET',

    // The URL for the request
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',

    // The type of data we want back
    dataType: 'json',

    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    success: onSuccess
  })
})

function onSuccess(responseData, status){
  console.log(status);
  console.log(responseData);
  var displayData = JSON.stringify(responseData.features[0]);
  displayData = displayData.split(',').join(', ');
  $('#container').append(`<div> earthquake:`+ displayData +`</div>`);
}
