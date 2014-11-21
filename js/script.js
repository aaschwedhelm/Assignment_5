var map = L.map('map').setView([40.70679, -73.97872], 11);

var OpenMapSurfer_Grayscale = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
	minZoom: 0,
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

//Get external geoJSON file
$.getJSON('./js/cdistricts.geojson',function(data){
	window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		style: {
			fillColor: "rgba(0,0,0,1)",
			color: "rgba(255,0,0,1)",
			weight: "1",
			opacity: "1",
			dashArray: "5, 5",
		}
	}).addTo(map);
});

var Stamen_TonerLabels = L.tileLayer('http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20
}).addTo(map);


$.getJSON('./js/parks.geojson',function(data){
	window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		style: {
			fillColor: "rgba(0, 197, 0, 0.4)",
			color: "rgba(0, 197, 0, 0.4)",
			weight: "1",
			opacity: "0.5",
		}
	}).addTo(map);
});

$.getJSON('./js/sublines.geojson',function(data){
	window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		style: {
			color: "rgba(1, 0, 0, 1)",
			weight: "1.5",
			opacity: "0.6",
		},

		onEachFeature:function(feature){
			var routeId = feature.properties.route_id;
			if (routeId = "1") { return "red" };
		},
		

	}).addTo(map);
});


// data.bindPopup("NYC Community Districts");

 
// var geojsonLayer2 = new L.GeoJSON.AJAX("./js/parks.geojson");
// geojsonLayer2.bindPopup("NYC Parks");

// geojsonLayer2.addTo(map);

// var geojsonLayer3 = new L.GeoJSON.AJAX("./js/sublines.geojson");
// geojsonLayer3.bindPopup("Subway Lines");

// geojsonLayer3.addTo(map);


//load external geoJSON
//$.getJSON('./js/cdistricts.geojson',function(data){
//    var geojsonLayer = L.geoJson(data.features, {
//    pointToLayer: function (feature, latlng) {
//                                return L.path(latlng, {
//                                        color: "red",
//                                });
//                        }
//  }).addTo(map);
//});


