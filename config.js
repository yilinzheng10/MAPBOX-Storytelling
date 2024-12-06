let topTitleDiv = "<h4>FLOOD VULNERABILITY</h4>";

let titleDiv = "<h1>high-risk areas & people who live there</h1>";

let bylineDiv = "<p>The tension between affordability, social ties, and long-term risk.</p>";

let descriptionDiv =
  '<p><b>Hypothesis</b>: Areas that experience or show potential for disaster impact are expected to become less desirable, leading to depreciation in value.</p>';

let footerDiv =
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | by Yilin Zheng</p>';

let divChapter1 =
  "<h3>Housing Under 500k</h3>" +
  "<p>Examine the concentration of residential property price as an indicator of desirability, focusing on housing less than $500,000. These properties often represent affordability but may correlate with higher vulnerability to disasters.</p>";

let divChapter2 =
  "<h3>Flood Vulnerability</h3>" +
  "<p>Flood-prone areas face increasing challenges as climate change intensifies risks.</p>" +
  '<p><img src="images/abcnews.png" alt="ABC News" style="max-width: 100%;"></p>' +
  '<p>"More than 1 million people are living in or near a flood plain in New York City...More than half of the New York City residents in the floodplain zone live in areas with a median income of less than $75,120, which is considered low income for New York City for a family of three..." - <a href="https://abcnews.go.com/US/rising-sea-levels-affect-new-york-city-americas/story?id=98482167">ABC News</a></p>';

let divChapter3 =
  "<h3>Case study: Red Hook</h3>" +
  "<p>Red Hook, Brooklyn, is a predominantly low-lying area highly vulnerable to floods and storms. Its history as a working-class neighborhood has undergone significant transformation over decades, particularly after Hurricane Sandy.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center;'>Red Hook - Transformation & Challenges</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>Originally developed in 1939 to provide working-class housing and reduce overcrowding in NYC, Red Hook was targeted for redevelopment due to its strategic location near the waterfront and its potential for industrial and residential integration.</p>" +
  '<img src="images/view_from_RedHook.webp" style="max-width:600px; width:100%; margin-left:auto; margin-right:auto; display:block;">' + 
  "<figcaption style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center;color:#666; margin-top:8px;'>View from cargo facilities in the Red Hook area of Brooklyn, pictured in 1981. <br><a href='https://www.nytimes.com/2024/10/30/nyregion/red-hook-brooklyn-development.html'>Neal Boenzi/The New York Times</a></figcaption>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>Post-Hurricane Sandy, significant government and private redevelopment efforts reshaped the area. Initiatives such as flood barriers and stormwater management systems were introduced to enhance resilience. However, the progress was slow, leaving parts of the community still vulnerable to future storms and rising sea levels.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>The demographic and economic shifts, marked by rising rents and median incomes, highlight a pattern of climate gentrification. Original residents, many of whom are working-class families, face displacement due to increased living costs.</p>" +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto; text-align:center;">' +
  '<img src="images/rentChange.png" alt="Rent Change" style="max-width:100%; margin-bottom:10px;">' +
  '<img src="images/incomeChange.png" alt="Income Change" style="max-width:100%;">' + 
  "<figcaption style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center; font-style:italic; color:#666; margin-top:8px;'><a href='https://coredata.nyc/'>NYC Housing and Neighborhood Data Hub, NYU Furman Center</a></figcaption>" +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto;">Today, Red Hook residents face ongoing risks from flood events. Community initiatives, including local advocacy groups and public housing reforms, aim to address these challenges. However, the balance between improving resiliency and maintaining affordability remains tenuous. <br><br> Read more about <a href=\'https://commercialobserver.com/2024/08/brooklyn-residential-project-red-hook/\'>the Red Hook redevelopment</a> and the <a href=\'https://citylimits.org/2024/10/30/12-years-after-hurricane-sandy-nychas-red-hook-residents-still-living-in-a-construction-zone/\'>challenges post Hurricane Sandy</a>.</p></div>';

let divChapter5 =
  "<h3>Case Study: Arverne by the Sea</h3>" +
  "<p>Arverne by the Sea is a community that has been planned to increase hurricane and sea surge resiliency. The homes on higher grade is saving homeowners on flood insurance premiums while attracting higher property values. However, the cost of properties in this community is distinctively higher than their surrounding neighbors, raising questions about equity in climate-adaptive urban planning. </p>" +
  '<p><img src="images/arverne.jpg" alt="Arverne by the Sea" style="max-width: 100%;"><a href="https://developingresilience.uli.org/case/arverne-by-the-sea/">Arverne by the Sea neighborhood</a></p>' +
  '<p>While some communities are priced out of resiliency, others face increasing risks without sufficient investment</p>';

let divChapter6 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto; text-align:center;'>Climate Gentrification</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>The term 'climate gentrification' captures how investments in resiliency and adaptive infrastructure can inadvertently drive up property values, displacing vulnerable populations. Both Red Hook and Arverne by the Sea reflect aspects of this in different ways.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>The analysis invites reflection on how to balance resiliency, equity, and affordability for a more vulnerable future.</p>";

  
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
      {
        id: "conclusion",
        alignment: "full",
        hidden: false,
        chapterDiv: divChapter6,
        location: {
          center: [-74, 40.725],
          zoom: 10,
          zoomSmall: 9,
          pitch: 0,
          bearing: 0
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [],
        onChapterExit: []
      }
    ],
  };
  
