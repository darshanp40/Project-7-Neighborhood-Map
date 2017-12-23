var appConfig = (function() {
  //JSON configuration as required for FourSquare
  var appModel = [
    {
      name: "Chakala Metro Station",
      location: { lat: 19.11143403582964, lng: 72.86888122558594 },
      id: "5208682111d2af09fc6dcc77"
    },
    {
      name: "Airport Road Metro Station",
      location: { lat: 19.110123151945217, lng: 72.87419558492329 },
      id: "51e8f8e7498e352bb65b5284"
    },
    {
      name: "Marol Naka Metro Station",
      location: { lat: 19.108142549175707, lng: 72.87937294859846 },
      id: "52a9e22c11d255b2e95e290e"
    },
    {
      name: "Saki Naka Metro Station",
      location: { lat: 19.103691584895053, lng: 72.88730742190452 },
      id: "50222e26e4b0dfad8a147981"
    },
    {
      name: "Asalpha Metro Station",
      location: { lat: 19.09621410343142, lng: 72.89501995809705 },
      id: "515ab15be4b0aa7c87b05480"
    },
    {
      name: "Jagruti Nagar Metro Station",
      location: { lat: 19.0926699497209, lng: 72.90122095772884 },
      id: "52d6350311d20d496cf884ed"
    },
    {
      name: "Ghatkopar Metro Station",
      location: { lat: 19.086372234691044, lng: 72.90767669677733 },
      id: "5066f1e2e4b01301ebe79de6"
    },
    {
      name: "Western Express Highway Metro Station",
      location: { lat: 19.11582059334937, lng: 72.85598749201714 },
      id: "539402ef498e4cf319b3802f"
    },
    {
      name: "Andheri Metro Station",
      location: { lat: 19.12035270595359, lng: 72.84869488779205 },
      id: "51f26ec1498e415c8f784d5b"
    },
    {
      name: "DN nagar Metro Station",
      location: { lat: 19.128355026245117, lng: 72.83003234863281 },
      id: "528df2f911d22cc2273bacfc"
    },
    {
      name: "Versova Metro Station",
      location: { lat: 19.130357821466525, lng: 72.82165149572715 },
      id: "51594007e4b09dec1987e9dc"
    }
  ];
  var mapConfiguration = {
    center: appModel[0].location,
    zoom: 14,
    styles: [
      {
        featureType: "landscape",
        stylers: [
          { hue: "#2e3d49" }
        ]
      },
      {
        featureType: "road.highway",
        stylers: [
          { hue: "#2e3d49" }
        ]
      },
      {
        featureType: "road.arterial",
        stylers: [
          { hue: "#2e3d49" }
        ]
      },
      {
        featureType: "road.local",
        stylers: [
          { hue: "#2e3d49" }
        ]
      },
      {
        featureType: "water",
        stylers: [
          { hue: "#2e3d49" }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          { hue: "#2e3d49" }
        ]
      }
    ]
  };
  // sample API response from Foursquare, if the API hit counts exhaust in a day and goes beyond 1000
  var sampleAPIResponse = '{"meta":{"code":200,"requestId":"5a3e522c4c1f677095dab790"},"response":{"venue":{"id":"52a9e22c11d255b2e95e290e","name":"Marol Naka Metro Station","contact":{},"location":{"address":"Andheri","lat":19.108142549175707,"lng":72.87937294859846,"labeledLatLngs":[{"label":"display","lat":19.108142549175707,"lng":72.87937294859846}],"cc":"IN","country":"India","formattedAddress":["Andheri","India"]},"canonicalUrl":"https://foursquare.com/v/marol-naka-metro-station/52a9e22c11d255b2e95e290e","categories":[{"id":"4bf58dd8d48988d1fc931735","name":"Light Rail Station","pluralName":"Light Rail Stations","shortName":"Light Rail","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/travel/lightrail_","suffix":".png"},"primary":true},{"id":"4bf58dd8d48988d129951735","name":"Train Station","pluralName":"Train Stations","shortName":"Train Station","icon":{"prefix":"https://ss3.4sqi.net/img/categories_v2/travel/trainstation_","suffix":".png"}}],"verified":false,"stats":{"checkinsCount":1485,"usersCount":1366,"tipCount":1,"visitsCount":4089},"likes":{"count":7,"groups":[{"type":"others","count":7,"items":[{"id":"83115289","firstName":"Shailesh","lastName":"Vaidya","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/83115289-Q5GHLF2T1QDSQ3FO.jpg"}},{"id":"76965158","firstName":"Manas","lastName":"Modi","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/76965158-FARAD1IBNLSP21JD.jpg"}},{"id":"191836018","firstName":"Un","lastName":"Ease","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/191836018-SIUCTQDHK43V2ZKD.jpg"}},{"id":"60916028","firstName":"Swapnil","lastName":"Bhalerao","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/60916028-F41GVJELSD0P1TUR.jpg"}}]}],"summary":"7 Likes"},"dislike":false,"ok":false,"rating":6.8,"ratingColor":"FFC800","ratingSignals":10,"venueRatingBlacklisted":true,"beenHere":{"count":0,"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"photos":{"count":19,"groups":[{"type":"venue","name":"Venue photos","count":19,"items":[{"id":"5a354ebea92d986940ab291a","createdAt":1513443006,"source":{"name":"Swarm for iOS","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/1209595_tE9wMk6jg9FJ_3Zh_nORp8UONyDpDz_C2kgpvNtl-vw.jpg","width":1440,"height":1920,"user":{"id":"1209595","firstName":"Pankaj","lastName":"A","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/1209595_FX1WC4pW_Gn36wFMiPYLeC_CRhYOH0igKTQ8Ry01mgx1NQAjevRTZZCnzoFB2v7fhtsFxNG1L.jpg"}},"visibility":"public"},{"id":"590831d116fa0443d2013546","createdAt":1493709265,"source":{"name":"Swarm for iOS","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/176038966_cpnwFEAQZD68aQqMt_fIQO8QrBNgcnvydDGTaXT-0JE.jpg","width":1440,"height":1920,"user":{"id":"176038966","firstName":"Kajal","lastName":"Mishra","gender":"female","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/176038966_ZeWCGwm-_k1G5Ut_5r10FP--sigS-Q2Ed0QOsrWVLOmxHDMHgAAQlDhC_7Z92wbZRWGhPYYYM.jpg"}},"visibility":"public"},{"id":"58d2b31c409f56651e19f0a9","createdAt":1490203420,"source":{"name":"Swarm for iOS","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/448557_WIQaAonQEwy-QFOyd6NjptLzZpBHOkGSvqf60ffDLvo.jpg","width":1440,"height":1920,"user":{"id":"448557","firstName":"Ketan","lastName":"Pandit","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/448557-JSWBOFXFPEDVIZ4B.jpg"}},"visibility":"public"},{"id":"5855278876f2ca378f1ec04d","createdAt":1481975688,"source":{"name":"Swarm for Android","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/71688401_2z2dUXPxgjxgHu13NOsk0Vqga1gGpdXKfD1ZJMNmMiQ.jpg","width":4160,"height":3120,"user":{"id":"71688401","firstName":" иεℓsοй sραятч","lastName":"dars","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/71688401_5HN2GjMP_ITbgngvjAE7TqtIg9qR_-Cyy_dcT9c6AefbAR8blIevYYW_seeWhTsn6K7qsdncN.jpg"}},"visibility":"public"},{"id":"57735e47cd106fc30fcfd19c","createdAt":1467178567,"source":{"name":"Swarm for Android","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/178685390_RYsuF0ppdd7XBL0LyuehvYqZjog8GKa4L8ttSX8be-w.jpg","width":960,"height":720,"user":{"id":"178685390","firstName":"Vikrant","lastName":"Date","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/178685390-RGHLO1MUDS5CZMSB.jpg"}},"visibility":"public"},{"id":"56238545498e28e2ce858230","createdAt":1445168453,"source":{"name":"Swarm for Android","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/8880338_OuJBmrUlU2h7KjzZAJqlvhO-rCGKBGpQB8KH57-CGQY.jpg","width":960,"height":712,"user":{"id":"8880338","firstName":"Richard","lastName":"Hu","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/DV20BHFRMPSUOUBV.jpg"}},"visibility":"public"}]}]},"reasons":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"createdAt":1386865196,"tips":{"count":1,"groups":[{"type":"others","name":"All tips","count":1,"items":[{"id":"540ce349498e564ff96ce4b9","createdAt":1410130761,"text":"www.ServicedApartmentsMumbai.com Serviced Apartments near here","entities":[{"indices":[0,32],"type":"url","object":{"url":"http://www.ServicedApartmentsMumbai.com"}}],"type":"user","canonicalUrl":"https://foursquare.com/item/540ce349498e564ff96ce4b9","likes":{"count":1,"groups":[{"type":"others","count":1,"items":[{"id":"94317459","firstName":"Serviced Apartments","lastName":"Mumbai","gender":"none","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/94317459-HDQDELOVBMRLXFLM"}}]}],"summary":"1 like"},"logView":true,"agreeCount":1,"disagreeCount":0,"todo":{"count":1},"user":{"id":"94317459","firstName":"Serviced Apartments","lastName":"Mumbai","gender":"none","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/94317459-HDQDELOVBMRLXFLM"}}}]}]},"shortUrl":"http://4sq.com/1bZarvP","timeZone":"Asia/Kolkata","listed":{"count":3,"groups":[{"type":"others","name":"Lists from other people","count":3,"items":[{"id":"539554b4498ef9d3e96bd118","name":"Line 1 (Mumbai Metro)","description":"Line 1, also referred to as Metro I of the Mumbai Metro is part of the metro system for Mumbai, India. The 11.40 km line is fully elevated, and consists of 12 stations from Versova to Ghatkopar.","type":"others","user":{"id":"2650611","firstName":"Vivek","lastName":"Venkatram","gender":"male","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/2650611-4MPLB5LIDLRGZY1N.jpg"}},"editable":false,"public":true,"collaborative":false,"url":"/metal_senpai/list/line-1-mumbai-metro","canonicalUrl":"https://foursquare.com/metal_senpai/list/line-1-mumbai-metro","createdAt":1402295476,"updatedAt":1402306776,"followers":{"count":142},"listItems":{"count":12,"items":[{"id":"v52a9e22c11d255b2e95e290e","createdAt":1402295684}]}},{"id":"540ce189498eb8d748867b15","name":"Serviced Apartments in Andheri East, Mumbai","description":"1 and 2 Bedroom Serviced Apartments in Marol Andheri East, near the International Airport. Near SEEPZ, 10 minutes from Powai","entities":[{"indices":[137,169],"type":"url","object":{"url":"http://www.servicedapartmentsmumbai.com"}}],"type":"others","user":{"id":"94317459","firstName":"Serviced Apartments","lastName":"Mumbai","gender":"none","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/94317459-HDQDELOVBMRLXFLM"}},"editable":false,"public":true,"collaborative":false,"url":"/user/94317459/list/serviced-apartments-in-andheri-east-mumbai","canonicalUrl":"https://foursquare.com/user/94317459/list/serviced-apartments-in-andheri-east-mumbai","createdAt":1410130313,"updatedAt":1467663875,"photo":{"id":"540ce2f6498e8b833d25fc3f","createdAt":1410130678,"prefix":"https://igx.4sqi.net/img/general/","suffix":"/94317459_NkQxaGinWEg2kgcWPNZTCcpxLtGJe9UBeIiBFPDvr_Q.jpg","width":800,"height":600,"user":{"id":"94317459","firstName":"Serviced Apartments","lastName":"Mumbai","gender":"none","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/94317459-HDQDELOVBMRLXFLM"}},"visibility":"public"},"followers":{"count":1},"listItems":{"count":18,"items":[{"id":"t540ce349498e564ff96ce4b9","createdAt":1411071982,"photo":{"id":"540ce2f6498e8b833d25fc3f","createdAt":1410130678,"prefix":"https://igx.4sqi.net/img/general/","suffix":"/94317459_NkQxaGinWEg2kgcWPNZTCcpxLtGJe9UBeIiBFPDvr_Q.jpg","width":800,"height":600,"user":{"id":"94317459","firstName":"Serviced Apartments","lastName":"Mumbai","gender":"none","photo":{"prefix":"https://igx.4sqi.net/img/user/","suffix":"/94317459-HDQDELOVBMRLXFLM"}},"visibility":"public"}}]}}]}]},"hours":{"status":"Open until Midnight","richStatus":{"entities":[],"text":"Open until Midnight"},"isOpen":true,"isLocalHoliday":false,"dayData":[],"timeframes":[{"days":"Mon–Sun","includesToday":true,"open":[{"renderedTime":"5:30 AM–Midnight"}],"segments":[]}]},"popular":{"status":"Likely open","richStatus":{"entities":[],"text":"Likely open"},"isOpen":true,"isLocalHoliday":false,"timeframes":[{"days":"Today","includesToday":true,"open":[{"renderedTime":"Noon–3:00 PM"},{"renderedTime":"5:00 PM–8:00 PM"}],"segments":[]},{"days":"Sun","open":[{"renderedTime":"None"}],"segments":[]},{"days":"Mon","open":[{"renderedTime":"9:00 AM–1:00 PM"},{"renderedTime":"7:00 PM–9:00 PM"}],"segments":[]},{"days":"Tue","open":[{"renderedTime":"8:00 AM–1:00 PM"},{"renderedTime":"6:00 PM–10:00 PM"}],"segments":[]},{"days":"Wed","open":[{"renderedTime":"8:00 AM–1:00 PM"},{"renderedTime":"6:00 PM–9:00 PM"}],"segments":[]},{"days":"Thu","open":[{"renderedTime":"8:00 AM–1:00 PM"},{"renderedTime":"6:00 PM–10:00 PM"}],"segments":[]},{"days":"Fri","open":[{"renderedTime":"8:00 AM–1:00 PM"},{"renderedTime":"7:00 PM–10:00 PM"}],"segments":[]}]},"pageUpdates":{"count":0,"items":[]},"inbox":{"count":0,"items":[]},"venueChains":[],"attributes":{"groups":[{"type":"payments","name":"Credit Cards","summary":"No Credit Cards","count":5,"items":[{"displayName":"Credit Cards","displayValue":"No"}]}]},"bestPhoto":{"id":"5a354ebea92d986940ab291a","createdAt":1513443006,"source":{"name":"Swarm for iOS","url":"https://www.swarmapp.com"},"prefix":"https://igx.4sqi.net/img/general/","suffix":"/1209595_tE9wMk6jg9FJ_3Zh_nORp8UONyDpDz_C2kgpvNtl-vw.jpg","width":1440,"height":1920,"visibility":"public"}}}}';

  return {
    appModel: appModel,
    sampleAPIResponse: sampleAPIResponse,
    mapConfiguration: mapConfiguration
  };
})();
