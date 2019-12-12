'use strict';

var map;

var initMap = function () {
  var marker = new google.maps.Marker({
    position: {lat: 59.938813, lng:  30.323058},
    map: map,
    icon: 'map-marker-svg.svg'
  });

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938813, lng: 30.323058},
    zoom: 8
  });
};
