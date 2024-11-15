let topTitleDiv = "<h4>Mapbox Storytelling</h4>";

let titleDiv =
    "<h1>high-risk areas & people who lives there</h1></h1>";

let bylineDiv = "<p>tension between affordability, social ties, and long-term risk</p>";

let descriptionDiv =
    '<p><b>hypothesis</b>: after experiencing or showing correlated potential of disaster impact, the area would be less desirable (depreciate in value).</p>';

let footerDiv =
    '<p>This is a draft of looking at indicators of property value in relation to flood.</p>' +
    '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | by Yilin Zheng</p>';

let divChapter1 =
  "<h3>Housing Under 500k</h3>" +
  "<p>Looking at concentration of residential property price as an indicator of desirability.</p>"; 

let divChapter2 =
  "<h3>Flood Vulnerability</h3>" +
  "<p></p>" +
  '<p><img src="images/abcnews.png"></p>';

let divChapter3 =
  "<h3>Case study: Red Hook</h3>" +
  "<p>Majority of the area in the Red Hook neighboorhood are vulnerable to flood and storms, and is predicted to be in higher risk in the future because of its low-lying land.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Red Hook</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Original red hook development for Working-class housing, addressing overcrowding city in 1939.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>However, there is a significant shift in income and rent price in the area in the last decades. After reconstruction following Hurricane Sandy, the neighborhood demographic shifted.The cost of rent has skewed right (pricer), which correponds to incoming households with increasing medium income.</p>" +
  '<div class="center"><img src="images/rentChange.png"><img src="images/incomeChange.png"></div>'

let divChapter5 =
  "<h3>Climate Gentrification</h3>" +
  "<p>Arverne by the Sea is a community that has been planned to increase hurricane and sea surge resiliency. The homeowners are saving the cost of flood insurance premiums because the Arverne homes have been built at a higher grade. However, the cost of properties in this community are distinctively higher than their surrounding neighbors.</p>";

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
      onChapterEnter: [
        {
          layer: "flood",
          opacity: 0,
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
      id: "flood",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
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
          opacity: 0.5,
          duration: 300,
        },
      ],
    },
    {
      id: "redhook",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-74.01262238395982, 40.676459721525134],
        zoom: 14,
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
          opacity: 0.5,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "flood",
          opacity: 0.5,
          duration: 300,
        },
      ],
    },
    {
      id: "redhook",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
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
          opacity: 0.1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "flood",
          opacity: 0.1,
          duration: 300,
        },
      ],
    },
    {
      id: "arverne",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
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
  ],
};