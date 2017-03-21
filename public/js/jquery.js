// const drawMarker = require('/maps.js')



function addOptions(array, destination){
for(var i = 0; i<array.length; i++){

$(destination).prepend('<option value ="' + array[i].name +'">' + array[i].name + '</option>')

  }
}

$('#activity-choices').prepend(addOptions(activities, '#activity-choices'));
$('#hotel-choices').prepend(addOptions(hotels, '#hotel-choices'));
$('#restaurant-choices').prepend(addOptions(restaurants,'#restaurant-choices' ));


function findObject(array, name){
  for(var i = 0; i<array.length; i++){
    if(array[i].name === name) return array[i]
  }

}

function updateItinerary(destination, valueSource, itinerary, array){
  $(destination).on('click', function(){
    var value = $(valueSource).val()
array[array.indexOf(value)]
  $(itinerary + ':last-child').append('<span class="title">' + value + '</span>').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>')

  drawMarker(destination.slice(1, destination.indexOf('-')), findObject(array,value).latLng)
  })
}


updateItinerary('#hotel-btn', "#hotel-choices", '#hotel-itn', hotels)
updateItinerary('#restaurant-btn', "#restaurant-choices", '#restaurant-itn', restaurants)
updateItinerary('#activity-btn', "#activity-choices", '#activity-itn', activities)




// console.log(drawMarker)
