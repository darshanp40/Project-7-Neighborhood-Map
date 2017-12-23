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
  return {
    appModel: appModel,
    mapConfiguration: mapConfiguration
  };
})();
