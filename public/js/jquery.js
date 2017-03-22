// const drawMarker = require('/maps.js')

var drawMarker;

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
// array[array.indexOf(value)]
    $(itinerary + ':last-child').append('<span class="title">' + value + '</span>').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>')

    drawMarker(destination.slice(1, destination.indexOf('-')), findObject(array, value).place.location)
    console.log(destination.slice(1, destination.indexOf('-')))
    console.log(findObject(array, value).place.location)
  })

}


updateItinerary('#restaurant-btn', "#restaurant-choices", '#restaurant-itn', restaurants)
updateItinerary('#hotel-btn', "#hotel-choices", '#hotel-itn', hotels)
updateItinerary('#activity-btn', "#activity-choices", '#activity-itn', activities)



$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

   drawMarker = function (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    currentMap.center = latLng
    console.log(currentMap)
    marker.setMap(currentMap);
  }

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);


});
// console.log(drawMarker)
