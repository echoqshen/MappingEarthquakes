// Add console.log to check to see if our code is working.
// console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 4);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],    
//     [30.1900, -97.6687],
//     [43.6777, -79.6248],
//     [40.641766, -73.780968]
//   ];

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     dashArray: '1, 5',
//     weight: 4,
//     opacity: 0.5
//   }).addTo(map);

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.
// Get data from cities.js
// let cityData = cities;
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location,{
//         // color: "orange",
//         weight: 4,
//         radius: city.population/200000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  // pointToLayer: function(feature, latlng) {
  //   console.log(feature);
  //   return L.marker(latlng)
  //   .bindPopup("<h2>" + feature.properties.name
  //   + feature.properties.city + feature.properties.country + "</h2>");
  // }
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup("<h3>" + "Airport Code: "+ feature.properties.faa
      + "</h3>" + "------------------------------------------------------------------------"
      + "<h3>" +  "Airport Name: "+ feature.properties.name + "</h3>");
  }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,   
    accessToken: API_KEY

});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);