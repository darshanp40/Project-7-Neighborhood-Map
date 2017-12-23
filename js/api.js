var APIs = (function(){
    // Foursquare API Url parameters in global scope
    var fsVersion = "&v=20171223",
        apiURL = "https://api.foursquare.com/v2/venues/",
        clientID = "client_id=WXZUZKVHHTRXPRFK15RWVYZ0OOFB4SYCMM22LTU2CTRJDQIY",
        clientSecret = "&client_secret=1DEZUXDCPB443WFWHJC1ZPTIGKVIKFWEAHOZJWT0WZP11ZC0";
    var fourSquareAPI = {
        requestDetailsAPI: function(locationID, successFunction) {
          var URL = apiURL + locationID + "?" + clientID + clientSecret + fsVersion;
          if(!localStorage.getItem(locationID)) {
            $.ajax({
                type: "GET",
                url: URL,
                dataType: "json",
                cache: false,
                success: successFunction,
                error: function(error) {
                    if(error.statusText === "Too Many Requests") {
                        clientID = "client_id=2DCLQCBC1I024ZDBJ2ZEZBZOV2UF1CBIJQODLUCEUFDBC5JQ";
                        clientSecret = "&client_secret=G3H414IDQTG0ZLA4IOS1I22AHTYWR55XLWGIQ1ZAFSCQDTTV";
                        fourSquareAPI.requestDetailsAPI(locationID, successFunction);
                    }
                }
              });
          } else {
            successFunction(JSON.parse(localStorage.getItem(locationID)));
          }
        }
    }
    return {fourSquareAPI : fourSquareAPI};
})();