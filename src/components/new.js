'use strict';

function processOsrmReply(data) {

  console.log('Received OSRM map matching reply:');
  console.log(data);

  for (var i = 0; i < data.matchings.length; i++) {
    var matching = data.matchings[i];
    var coordinates = matching.geometry.coordinates;
    var latLngs = coordinates.map(coordinate => [coordinate[1], coordinate[0]]);
    L.polyline(latLngs, { color: 'red' }).addTo(linesGroup);
  }
}

function sendOsrmRequest(lngLats) {
  // create an array of radiuses, same length as lngLats array
  var radiuses = lngLats.map(lngLat => 49);

  var url = 'https://router.project-osrm.org/match/v1/driving/' +
    lngLats.join(';') +
    '?overview=simplified' +
    '&radiuses=' +
    radiuses.join(';') +
    '&generate_hints=false' +
    '&skip_waypoints=true' +
    '&gaps=ignore' +
    '&geometries=geojson';

  console.log('Sending OSRM map matching query to the URL ' + url);

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var data = JSON.parse(this.response);
      processOsrmReply(data);
    } else {
      console.log('Error: ' + this.status);
      // remove polylines and markers
      linesGroup.clearLayers();
      markersGroup.clearLayers();
    }
  };
  request.send();
}

function processMapClick(ev) {
  // get the count of currently displayed markers
  var markersCount = markersGroup.getLayers().length;
  if (markersCount < MARKERS_MAX) {
    L.marker(ev.latlng).addTo(markersGroup);
    // remove polylines
    linesGroup.clearLayers();
    // connect all markers in the markersGroup by a blue polyline
    var latLngs = markersGroup.getLayers().map(marker => marker.getLatLng());
    L.polyline(latLngs, { color: 'blue' }).addTo(linesGroup);
    return;
  }

  // get the count of currently displayed polylines
  var linesCount = linesGroup.getLayers().length;
  if (linesCount > 1) {
    // remove polylines and markers
    linesGroup.clearLayers();
    markersGroup.clearLayers();
    return;
  }

  // create an array of string: "lng,lat" with 6 digits after comma
  var lngLats = markersGroup.getLayers().map(marker =>
    parseFloat(marker.getLatLng().lng).toFixed(6) + ',' +
    parseFloat(marker.getLatLng().lat).toFixed(6)
  );

  sendOsrmRequest(lngLats);
}

var MARKERS_MAX = 4;
var startPosition = [51.4661, 7.2491];
var map = L.map('map').setView(startPosition, 14).on('click', processMapClick);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// layer groups for markers and polylines
var markersGroup = L.layerGroup();
map.addLayer(markersGroup);
var linesGroup = L.layerGroup();
map.addLayer(linesGroup);