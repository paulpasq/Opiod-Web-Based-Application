var map;
function initMap() {
  var CT = new google.maps.LatLng(41.7,-72.7);

  map = new google.maps.Map(document.getElementById('map'), {center: CT, zoom: 13});


  var request = {
    location: CT,
    radius: '800',
    types: ['cafe']
  };


  var service = new google.maps.places.PlacesService(map);
  
  service.nearbySearch(request, callback);
 
}

function callback(results) {

  if(status == google.maps.places.PlacesServiceStatus.OK){
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      
    }
  }
}

function createMarker(place){
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}

