var map = L.map('map').setView([40.70679, -73.97872], 11);
var Stamen_Toner = L.tileLayer(
    'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        //Layers: [geojsonLayer, geojsonLayer2, geojsonLayer3, geojsonLayer4]
    }).addTo(map);
$.getJSON('./js/cdistricts.geojson', function(data) {
    window.data = data;
    var geojsonLayer = L.geoJson(data.features, {
        style: {
            fillColor: "rgba(0,0,0,.4)",
            fillOpacity: ".2",
            color: "rgba(0,0,0,1)",
            weight: "1",
            opacity: "1",
            dashArray: "5, 5",
        }
    }).addTo(map);
    $.getJSON('./js/parks.geojson', function(data) {
        window.data = data;
        var geojsonLayer2 = L.geoJson(data.features, {
            style: {
                fillColor: "rgba(0, 197, 0, .5)",
                fillOpacity: ".4",
                color: "rgba(0, 197, 0, .5)",
                weight: "1",
                opacity: "0.5",
            }
        }).addTo(map);
    });
    $.getJSON('./js/sublines.geojson', function(data) {
        window.data = data;
        var geojsonLayer3 = L.geoJson(data.features, {
            style: {
                color: "rgba(1, 0, 255, 1)",
                weight: "0.5",
                opacity: "1",
            },
            onEachFeature: function(feature) {
                var routeId = feature.properties.route_id;
                if (routeId = "1") {
                    return "red"
                };
                if (routeId = "2") {
                    return "red"
                };
                if (routeId = "3") {
                    return "red"
                };
                if (routeId = "4") {
                    return "green"
                };
                if (routeId = "5") {
                    return "green"
                };
                if (routeId = "6") {
                    return "green"
                };
                if (routeId = "7") {
                    return "purple"
                };
                if (routeId = "A") {
                    return "blue"
                };
                if (routeId = "C") {
                    return "blue"
                };
                if (routeId = "E") {
                    return "blue"
                };
                if (routeId = "B") {
                    return "orange"
                };
                if (routeId = "M") {
                    return "orange"
                };
                if (routeId = "F") {
                    return "orange"
                };
                if (routeId = "D") {
                    return "orange"
                };
                if (routeId = "FS") {
                    return "grey"
                };
                if (routeId = "G") {
                    return "green"
                };
                if (routeId = "GS") {
                    return "grey"
                };
                if (routeId = "H") {
                    return "grey"
                };
                if (routeId = "J") {
                    return "brown"
                };
                if (routeId = "Z") {
                    return "brown"
                };
                if (routeId = "L") {
                    return "grey"
                };
                if (routeId = "N") {
                    return "yellow"
                };
                if (routeId = "Q") {
                    return "yellow"
                };
                if (routeId = "R") {
                    return "yellow"
                };
                if (routeId = "Air") {
                    return "yellow"
                };
            },
            style: function(feature) {
                switch (feature.properties.route_id) {
                    case '1':
                        return {
                            color: "red",
                            opacity: "1",
                            weight: "3"
                        };
                    case '2':
                        return {
                            color: "red",
                            opacity: "1",
                            weight: "3"
                        };
                    case '3':
                        return {
                            color: "red",
                            opacity: "1",
                            weight: "3"
                        };
                    case '4':
                        return {
                            color: "green",
                            opacity: "1",
                            weight: "3"
                        };
                    case '5':
                        return {
                            color: "green",
                            opacity: "1",
                            weight: "3"
                        };
                    case '6':
                        return {
                            color: "green",
                            opacity: "1",
                            weight: "3"
                        };
                    case '7':
                        return {
                            color: "#FF00FF",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'A':
                        return {
                            color: "blue",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'C':
                        return {
                            color: "blue",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'E':
                        return {
                            color: "blue",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'B':
                        return {
                            color: "orange",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'M':
                        return {
                            color: "orange",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'F':
                        return {
                            color: "orange",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'D':
                        return {
                            color: "orange",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'FS':
                        return {
                            color: "grey",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'G':
                        return {
                            color: "#00FF00",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'GS':
                        return {
                            color: "grey",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'H':
                        return {
                            color: "grey",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'J':
                        return {
                            color: "brown",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'Z':
                        return {
                            color: "brown",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'L':
                        return {
                            color: "#585858",
                            opacity: "1",
                            weight: "4"
                        };
                    case 'N':
                        return {
                            color: "#FFFF00",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'Q':
                        return {
                            color: "#FFFF00",
                            opacity: "1",
                            weight: "3"
                        };
                    case 'R':
                        return {
                            color: "#FFFF00",
                            opacity: "1",
                            weight: "3"
                        };
                    case "Air":
                        return {
                            color: "#FFFF00",
                            opacity: "1",
                            weight: "3",
                            dashArray: "5, 5"
                        };
                    case "SI":
                        return {
                            color: "blue",
                            opacity: "1",
                            weight: "3",
                            dashArray: "5, 5"
                        };
                        //color: routeId(feature.properties.route_id),
                }
            },
        }).addTo(map);
        $.getJSON('./js/substops.geojson', function(data) {
            window.data = data;
            var geojsonLayer4 = L.geoJson(data.features, {
                style: {
                    radius: 6,
                    weight: "2",
                    opacity: "1",
                    fillOpacity: "1",
                    fillColor: "rgba(255, 255, 255, 1)",
                    color: "rgba(0, 0, 0, 1)",
                },
                pointToLayer: function(feature,
                    latlong) {
                    return L.circleMarker(
                        latlong,
                        geojsonLayer4);
                }
            }).addTo(map);
        });
    });
});

//var Hydda_RoadsAndLabels = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png', {
//	minZoom: 0,
//	maxZoom: 18,
//	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
//}).addTo(map);


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


