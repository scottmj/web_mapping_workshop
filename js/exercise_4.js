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
