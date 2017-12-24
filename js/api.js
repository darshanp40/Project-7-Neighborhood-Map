var APIs = (function() {
  // Foursquare API Url parameters in global scope
  var fsVersion = "&v=20171223",
    apiURL = "https://api.foursquare.com/v2/venues/",
    clientID = "client_id=WXZUZKVHHTRXPRFK15RWVYZ0OOFB4SYCMM22LTU2CTRJDQIY",
    clientSecret = "&client_secret=1DEZUXDCPB443WFWHJC1ZPTIGKVIKFWEAHOZJWT0WZP11ZC0";

  var fourSquareAPI = {
    requestDetailsAPI: function(locationID, successFunction) {
      var URL = apiURL + locationID + "?" + clientID + clientSecret + fsVersion;
      if (!localStorage.getItem(locationID)) {
        $.ajax({
          type: "GET",
          url: URL,
          dataType: "json",
          cache: false
        }).done(function(result) {
            successFunction(result);
        }).fail(function(error) {
             alert("Oops! something went wrong. Please try after some time");
        });
      } else {
        successFunction(JSON.parse(localStorage.getItem(locationID)));
      }
    }
  };
  return { fourSquareAPI: fourSquareAPI };
})();
