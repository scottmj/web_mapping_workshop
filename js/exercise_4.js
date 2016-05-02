// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'scottmj.019hn8fk';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1Ijoic2NvdHRtaiIsImEiOiJjaW5uc3UxZDIwenBtdWFtM3E4dTVkMmtsIn0.wJDjQPPrFlmBdG-enBPGkw';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 5);

// Great, now we have a basic web map!

//added during class=================

var dataFileToAdd = 'data/restaurants.geojson'; //access datafile
var featureLayer = L.mapbox.featureLayer(); //create data layer in map
	featureLayer.loadURL(dataFileToAdd); //add datafile to data layer
	featureLayer.addTo(map); //add data layer to the map

featureLayer.on('ready', function(){
	this.eachLayer(function(layer){
    	layer.setIcon(L.mapbox.marker.icon({
        	"marker-color": "#8834bb",
          	"marker-size": "large",
          	"marker-symbol": "restaurant"
        }))
    })
    map.fitBounds(featureLayer.getBounds()); 
})

var clickHandler = function(e){
	$('#info').empty();
  	var feature = e.target.feature;
  	$('#sidebar').fadeIn(400, function(){
    	var info = '';
      	info += '<div>';
      	info += 'h2' + feature.properties.name + '<h2>';
      	if(feature.properties.cuisine) info += '<p>' + feature.properties.cuisine + '<p>';
      	if(feature.properties.phone) info += '<p>' + feature.properties.phone + '<p>';
      	if(feature.properties.website) info += '<p><a href="' + feature.properties.website + '">' + feature.properties.website + '</a><p>';
      	info += '</div>';
    console.log(info);
    $('info').append(info);
    });
}

featureLayer.on('ready', function(){
	this.eachLayer(function(layer){
      	layer.on('click', clickHandler);
    })
})

map.on('click', function(){
	$('sidebar').fadeOut(200);
})

//featureLayer.on('ready', function(){
//	this.eachLayer(function(layer){
//    	layer.bindPopup(layer.feature.properties.name)
//    })
//})


//"addr:city": "Durham",
  //      "addr:country": "US",
    //    "addr:housenumber": "742",
      //  "addr:postcode": "27705",
        //"addr:state": "North Carolina",
        //"addr:street": "9th Street",
        //"amenity": "restaurant",
