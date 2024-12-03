let topTitleDiv = "<h4>FLOOD VULNERABILITY</h4>";

let titleDiv = "<h1>high-risk areas & people who live there</h1>";

let bylineDiv = "<p>The tension between affordability, social ties, and long-term risk.</p>";

let descriptionDiv =
  '<p><b>Hypothesis</b>: After experiencing or showing correlated potential of disaster impact, the area would be less desirable (depreciate in value).</p>';

let footerDiv =
  '<p>This is a narrative of indicators of property value in relation to flood.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | by Yilin Zheng</p>';

let divChapter1 =
  "<h3>Housing Under 500k</h3>" +
  "<p>Looking at concentration of residential property price as an indicator of desirability.</p>" +
  '<p><img src="images/housePrice-01.png" alt="house price" class="legend"></p>';

let divChapter2 =
  "<h3>Flood Vulnerability</h3>" +
  "<p></p>" +
  '<p><img src="images/abcnews.png" alt="ABC News"><a href="https://abcnews.go.com/US/rising-sea-levels-affect-new-york-city-americas/story?id=98482167">Link to news</a></p>' +
  '<p><img src="images/flood.png" alt="flood" class="legend"></p>';

let divChapter3 =
  "<h3>Case study: Red Hook</h3>" +
  "<p>Majority of the area in the Red Hook neighborhood are vulnerable to flood and storms, and is predicted to be at higher risk in the future because of its low-lying land.</p>" +
  '<p><img src="images/elevation.png" alt="elevation" class="legend"></p>';

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center;'>Red Hook Details</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>Original Red Hook development for working-class housing, addressing overcrowding in the city in 1939.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>However, there has been a significant shift in income and rent prices in the area over the last decades. After reconstruction following Hurricane Sandy, the neighborhood demographic shifted. The cost of rent has skewed higher, corresponding to incoming households with increasing median income.</p>" +
  '<div style="text-align:center;">' +
  '<img src="images/rentChange.png" alt="Rent Change">' +
  '<img src="images/incomeChange.png" alt="Income Change" max-width="90%">' +
  "</div>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center;'>" +
  '<a href="https://commercialobserver.com/2024/08/brooklyn-residential-project-red-hook/?utm_source=chatgpt.com" target="_blank" style="color:blue; text-decoration:underline;">Read more about the Red Hook redevelopment</a>' +
  "</p>";

let divChapter5 =
  "<h3>Climate Gentrification</h3>" +
  "<p>Arverne by the Sea is a community that has been planned to increase hurricane and sea surge resiliency. The homeowners are saving the cost of flood insurance premiums because the Arverne homes have been built at a higher grade. However, the cost of properties in this community is distinctively higher than their surrounding neighbors.</p>" +
  '<p><img src="images/arverne.jpg" alt="Arverne by the Sea"><a href="https://developingresilience.uli.org/case/arverne-by-the-sea/">Link to Arverne by the Sea neighborhood</a></p>';

  
  var config = {
    style: "mapbox://styles/quiyil/cm2m8fdnz001x01qj75tm3xod",
    accessToken: "pk.eyJ1IjoicXVpeWlsIiwiYSI6ImNsemoxNHlhMTBsa2UyaXByd3pvcjM4ZjgifQ.JTxA-uHyVmgrVrRoNJiAyA",
    showMarkers: false,
    markerColor: "#3FB1CE",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    subtitle: "",
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [
      {
        id: "overallMap",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [-74, 40.725],
          zoom: 10,
          zoomSmall: 9,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: "flood",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter2,
        location: {
          center: [-74, 40.725],
          zoom: 10,
          zoomSmall: 9,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          {
            layer: "flood",
            opacity: 1,
            duration: 300,
          },
        ],
        onChapterExit: [
          {
            layer: "flood",
            opacity: 0,
            duration: 300,
          },
        ],
      },
      {
        id: "redhookOverview",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter3,
        location: {
          center: [-74.01262238395982, 40.676459721525134],
          zoom: 15, // Adjusted to reduce memory strain
          zoomSmall: 11, // Small screen adjustment
          pitch: 30, // Reduced pitch
          bearing: 0, // Neutral bearing
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          {
            layer: "flood",
            opacity: 0.5,
            duration: 300,
          },
          {
            layer: "contour",
            opacity: 1,
            duration: 300,
          },
        ],
        onChapterExit: [
          {
            layer: "contour",
            opacity: 0,
            duration: 300,
          },
          {
            layer: "flood",
            opacity: 0.5,
            duration: 300,
          },
        ],
      },
      {
        id: "redhookDetails",
        alignment: "full",
        hidden: false,
        chapterDiv: divChapter4,
        location: {
          center: [-74.01262238395982, 40.676459721525134],
          zoom: 15,
          zoomSmall: 14,
          pitch: 40,
          bearing: -7,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          {
            layer: "flood",
            opacity: 0.3,
            duration: 300,
          },
          {
            layer: "contour",
            opacity: 1,
            duration: 300,
          },
        ],
        onChapterExit: [
          {
            layer: "flood",
            opacity: 0.3,
            duration: 300,
          },
          {
            layer: "contour",
            opacity: 1,
            duration: 300,
          },
        ],
      },
      {
        id: "arverne",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter5,
        location: {
          center: [-73.79214737521615, 40.589939422779196],
          zoom: 14,
          zoomSmall: 14,
          pitch: 40,
          bearing: 8,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          {
            layer: "flood",
            opacity: 0.5,
            duration: 300,
          },
          {
            layer: "contour",
            opacity: 1,
            duration: 300,
          },
        ],
        onChapterExit: [
          {
            layer: "flood",
            opacity: 0.5,
            duration: 300,
          },
          {
            layer: "contour",
            opacity: 0,
            duration: 300,
          },
        ],
      },
    ],
  };
  
