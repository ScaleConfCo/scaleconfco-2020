// Google Map
function initMap() {
  var markers = [
    {latlng: {lat: 6.264524, lng: -75.566549}, title: 'RutaN Medellin', address: "Calle 67 Nº 52-20"},
    {latlng: {lat: 6.208972, lng: -75.5657422}, title: 'Diez Hotel', address: "Calle 10 A Nº 34 - 11"}
  ];
  
  var map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 13,
    center: {lat: 6.238385, lng: -75.5702787},
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });

  markers.forEach(function(marker) {
    var element = new google.maps.Marker({
      position: marker.latlng,
      map: map,
      title: marker.title
    });
    var windowContent = new google.maps.InfoWindow({ content: '<div class="map-window"><p class="map-title">' + marker.title + '</p><p>' + marker.address + '</p></div>' });
    element.addListener('click', function() {
      windowContent.open(map, element);
    });
  });
}

initMap();