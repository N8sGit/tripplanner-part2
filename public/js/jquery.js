// const drawMarker = require('/maps.js')



function addOptions(array, destination){
for(var i = 0; i<array.length; i++){
  console.log('<option value ="' + array[i].name +'">' + array[i].name + '</option>')
  '<option value ="Cosmopolitan Hotel"></option>'
  '<option value =Cosmopolitan Hotel></option>'
  $(destination).prepend('<option value ="' + array[i].name +'">' + array[i].name + '</option>')

  }
}

$('#activity-choices').prepend(addOptions(activities, '#activity-choices'));
$('#hotel-choices').prepend(addOptions(hotels, '#hotel-choices'));
$('#restaurant-choices').prepend(addOptions(restaurants,'#restaurant-choices' ));



function updateItinerary(destination, valueSource, itinerary, array){
  $(destination).on('click', function(){
    var value = array[14-$(valueSource)[0].selectedIndex].name
    console.log(value, $(valueSource)[0].selectedIndex)
    $(itinerary + ':last-child').append('<span class="title">' + value + '</span>')
  })
}


updateItinerary('#hotel-btn', "#hotel-choices", '#hotel-itn', hotels)
updateItinerary('#restaurant-btn', "#restaurant-choices", '#restaurant-itn', restaurants)
updateItinerary('#activity-btn', "#activity-choices", '#activity-itn', activities)




// console.log(drawMarker)
