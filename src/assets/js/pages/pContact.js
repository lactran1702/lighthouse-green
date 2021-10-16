
//
// pContact.js
// Page module
//

'use strict';

var pContact = (function () {

  //
  // Variables
  //
  var map = document.getElementById("location--map");
  var locationMap;
  var locations = document.getElementsByClassName("location-results")[0];
  // Icon: 
  // if (typeof path_resource == "undefined") path_resource = "";
  var locIcon = L.icon({
    iconUrl: "assets/img/icons/lighthouse-pin.svg",
    iconSize: [56, 76],
    popupAnchor: [0, -19],         // The coordinates of the point from which popups will "open", relative to the icon anchor.
  });
  
  //
  // Functions
  //

  function init() {
    console.log('<pContact> => INIT!');
    //pContact.galleryInit();
    $(window).on('resize', onResize);
    onResize();
    // PRELOADER.hide();
    // alert('Ok!');

    mapInit();
  }

  function onResize(e) {
    // do your fucking resizing
    console.log('Browser size: ' + window.innerWidth + 'x' + window.innerHeight);
  }

  function mapInit() {
    console.log('INIT mapInit');

    locationMapInit();
  }

  // MAP
  function locationMapInit() {
    // if reaching limit mapbox's rate limit:https://docs.mapbox.com/api/#rate-limit-headers
    // get a cache (or screenshot-ed img) to display map    
    // mapboxAccessToken
    // var mapboxBasePath = "https://api.mapbox.com";
    // ajxcal to be for random accessToken  
    var mapboxAccessToken = "pk.eyJ1IjoiY29tbW9uZGV2IiwiYSI6ImNqc2w3N21tNTBrMWI0NG8yNDhrMGo1ankifQ.vgrGRludoNSDGzCsVGDwog";

    // set default zoom level : var zoomLevel = 12;

    var mapboxTiles = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href=\"https://www.mapbox.com/feedback/\">Mapbox</a> © <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
      id: "light-v9",
      accessToken: mapboxAccessToken
    });

    // set view with a center location and zoom amount
    locationMap = L.map(map, { zoomControl: false })
      .addLayer(mapboxTiles);

    // 	Returns	Description: setView(<LatLng> center, <Number> zoom, <Zoom/pan options> options?) : Sets the view of the map (geographical center and zoom) with the given animation options

    // $("body").on('DOMSubtreeModified', "mydiv", function() {
    //     alert('changed');
    // });
    if (locations.length > 0) {
      for (var result of locations) {
        $(result).on("DOMSubtreeModified", function () {
          updateMap();
        })
      }
    }

    updateMap();
  }

  // function updateMap(mapboxTiles, centerlat, centerlon, zoomLevel) {
  function updateMap() {

    var results = $(locations).find(".coordinates");
    var markers = [];
    var currentHeight = 0;
    console.log(`results`, results);

    results.each(function () {
      var _this = $(this);
      var lat = _this.find(".lat").text();
      var lon = _this.find(".long").text();
      var markerPopup = "<b>" + _this.find(".coordinates--label").text() + "</b><br>" + _this.find(".coordinates--address").text();

      var eachMarker = {
        lat: lat,
        lon: lon,
      }
      markers.push(eachMarker);

      var marker = L.marker([lat, lon], { icon: locIcon }).addTo(locationMap).bindPopup(markerPopup);

      _this.click(function () {
        locationMap.setView([lat, lon], 13);
        card.css("transform", "none");
        $(window).scrollTop(0);
        marker.openPopup();
      });

      currentHeight += _this.innerHeight();
    });

    if (markers.length > 0) {
      if ($(window).innerWidth() > 767) {
        locationMap.fitBounds(markers, { padding: [500, 100] });
      } else {
        locationMap.fitBounds(markers, { padding: [0, 0] });
      }
    }
    if ($(window).innerWidth() < 767) {
      if (locations.length > 0) {
        for (var result of locations) {
          result.style.maxHeight = currentHeight + "px";
        }
      }
    }

  }


  //
  // Event
  //

  init()
  //
  // Return
  //

  return true;

})();
