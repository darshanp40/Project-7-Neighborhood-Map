function initMap() {
  // Ref: https://developers.google.com/maps/documentation/javascript/markers
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var oIconConfig = {
    url: "images/metro.png",
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  // Create global variables to use in google maps
  var map, infowindow, bounds;
  //Google map elements - set map options
  map = new google.maps.Map(document.getElementById("map"), appConfig.mapConfiguration);
  infowindow = new google.maps.InfoWindow({
    maxWidth: 380,
    content: ""
  });

  bounds = new google.maps.LatLngBounds();

  // Close infowindow when clicked elsewhere on the map
  map.addListener("click", function() {
    infowindow.close(infowindow);
  });

  // Recenter map upon window resize
  window.onresize = function() {
    map.fitBounds(bounds);
  };

  // Get contect infowindows
  function getInfoWindowContent(metroStation) {
    var contentString = '<div class="image-card">'+
                            '<div class="card-header">'+
                              '<span>'+
                                '<div class="card-header-text">' + metroStation.name + '</div>'+
                              '</span>'+
                            '</div>'+
                            '<div class="card-image">'+
                              '<img src="' + metroStation.imageURL + '" alt="Place image">'+
                            '</div>'+
                            '<div class="card-footer">'+
                                '<span>'+
                                  '<div class="card-footer-text">'+
                                    '<a href="' + metroStation.placeURL + '" target="_blank">'+
                                        'Place reference: Foursquare'+
                                    '</a>'+
                                  '</div>'+
                                '</span>'+
                            '</div>'+
                        '</div>';
    return contentString;
  }

  /* Ref: https://developers.google.com/maps/documentation/javascript/examples/marker-animations */
  function addAnimation(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        marker.setAnimation(null);
      }, 700);
    }
  }

  // An object for a single metro station
  var MetroStation = function(data) {
    var self = this;
    this.name = ko.observable(data.name);
    this.location = data.location;
    this.id = data.id;
    this.placeURL = "";
    this.imageURL = "";
  };

  function ViewModel() {
    var self = this;

    // Nav button control
    this.isNavBarOpen = ko.observable(false);
    this.navClick = function() {
      this.isNavBarOpen(!this.isNavBarOpen());
    };

    this.metroStationList = ko.observableArray();
    appConfig.appModel.forEach(function(item) {
      self.metroStationList.push(new MetroStation(item));
    });

    this.metroStationList().forEach(function(metroStation) {
      var marker = new google.maps.Marker({
        map: map,
        position: metroStation.location,
        icon: oIconConfig,
        animation: google.maps.Animation.DROP
      });
      metroStation.marker = marker;
      bounds.extend(marker.position);
      marker.addListener("click", function(e) {
        infowindow.setContent(getInfoWindowContent(metroStation));
        infowindow.open(map, marker);
        addAnimation(marker);
      });
    });
    
    self.getStationInformation = ko.computed(function() {
      self.metroStationList().forEach(function(metroStation) {
        APIs.fourSquareAPI.requestDetailsAPI(metroStation.id, function(data) {
          // store the api response in localstorage to reduce the API hit count
          localStorage.setItem(metroStation.id,JSON.stringify(data));
          var response = data.response ? data.response : "";
          var venue = response.venue ? data.venue : "";
          metroStation.name = response.venue["name"];
          metroStation.placeURL = response.venue["canonicalUrl"];
          metroStation.imageURL =
            response.venue.bestPhoto["prefix"] +
            "height150" +
            response.venue.bestPhoto["suffix"];
        });
      });
    });

    this.stationClick = function(metroStation) {
      google.maps.event.trigger(metroStation.marker, "click");
    };

    self.filter = ko.observable("");

    this.filteredMetroStationList = ko.dependentObservable(function() {
      var q = this.filter().toLowerCase();
      if (!q) {
        return ko.utils.arrayFilter(self.metroStationList(), function(item) {
          item.marker.setVisible(true);
          return true;
        });
      } else {
        return ko.utils.arrayFilter(this.metroStationList(), function(item) {
          if (item.name.toLowerCase().indexOf(q) >= 0) {
            return true;
          } else {
            item.marker.setVisible(false);
            return false;
          }
        });
      }
    }, this);
  }

  // Activates knockout.js
  ko.applyBindings(new ViewModel());
}
