function addOptions(array, destination){
for(var i = 0; i<array.length; i++){
  $(destination).prepend('<option value =' + array[i].name +'>' + array[i].name + '</option>')
  }
}

$('#activity-choices').prepend(addOptions(activities, '#activity-choices'));
$('#hotel-choices').prepend(addOptions(hotels, '#hotel-choices'));
$('#restaurant-choices').prepend(addOptions(restaurants,'#restaurant-choices' ));



function updateItinerary(destination, itinerary){
$(destination).on('click', function(){
  var value = (destination).val()

  $(itinerary).append(value)
})

}


updateItinerary('#hotel-choices', '#hotel-itn')
updateItinerary('#restaurant-choices', '#restaurant-itn')
updateItinerary('#activity-choices', '#activity-itn')
