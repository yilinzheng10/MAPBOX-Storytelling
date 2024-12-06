/* First, define what constitutes a small screen.
This will affect the zoom parameter for each chapter. */

var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Next, create two variables that will hold:
1. The different types of layers available to Mapbox and their
respective opacity attributes.
2. The possible alignments which could be applied to the vignettes.*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

/* The next two functions help turn on and off individual
layers through their opacity attributes: The first one gets
the type of layer and the second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story', 'features' and 'header' elements
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, then assign it to the 'header' element
// Note how each one of these are assigning 'innerHTML'
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If after this, the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // Adds a class to the vignette
  chapter.classList.add("br3");
  // Adds all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  // If the chapter is the first one, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // Adds the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");

// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Creates a variable to hold the starting zoom value
var startingZoom;
// If the screen size is small, it uses the `zoomSmall` value
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* This section creates the map element with the
attributes from the main section of the config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
  // Add legend container
  const legendContainer = document.createElement('div');
  legendContainer.className = 'legend-container';
  document.getElementById('map').appendChild(legendContainer);

  // Sale Price Legend
  const salePriceLegend = document.createElement('div');
  salePriceLegend.className = 'legend';
  salePriceLegend.innerHTML = `
    <h4>Sale Price</h4>
    <div class="legend-item">
      <span style="background: rgba(139, 0, 0, 0.75)"></span>$1 - $170,000
    </div>
    <div class="legend-item">
      <span style="background: #FF6347"></span>$170,001 - $317,000
    </div>
    <div class="legend-item">
      <span style="background: #FFA07A"></span>$317,001 - $399,000
    </div>
    <div class="legend-item">
      <span style="background: #FFD700"></span>$399,001 - $453,000
    </div>
    <div class="legend-item">
      <span style="background: #FFFFE0"></span>$453,001 - $500,000
    </div>
  `;

  // Flood Zones Legend
  const floodLegend = document.createElement('div');
  floodLegend.className = 'legend';
  floodLegend.innerHTML = `
    <h4>Flood Zones</h4>
    <div class="legend-item">
      <span style="background: #b3d9ff"></span>AE Zone
    </div>
    <div class="legend-item">
      <span style="background: #66b2ff"></span>AO Zone
    </div>
    <div class="legend-item">
      <span style="background: #004080"></span>VE Zone
    </div>
  `;

  // Contour Lines Legend
  const contourLegend = document.createElement('div');
  contourLegend.className = 'legend';
  contourLegend.innerHTML = `
    <h4>Elevation (ft)</h4>
    <div class="legend-item">
      <span style="background: #0000FF"></span>-2 ft
    </div>
    <div class="legend-item">
      <span style="background: #0033FF"></span>0 ft
    </div>
    <div class="legend-item">
      <span style="background: #3366FF"></span>2 ft
    </div>
    <div class="legend-item">
      <span style="background: #DAA06D"></span>6 ft
    </div>
    <div class="legend-item">
      <span style="background: #FF5F1F"></span>10+ ft
    </div>
  `;

  // Add legends to container
  legendContainer.appendChild(salePriceLegend);
  legendContainer.appendChild(floodLegend);
  legendContainer.appendChild(contourLegend);

  // Add 3d terrain if necessary
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // Add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // Add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }
  map.addLayer(
    {
      id: "salePrice",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/salePriceWithin500k.geojson",
      },
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "SALE PRICE"],
          1,
          "rgba(139, 0, 0, 0.75)",     // Dark red for 1 - 170,000
          170000,
          "#FF6347",       // Tomato color for 170,000 - 317,000
          317000,
          "#FFA07A",       // Light Salmon for 317,000 - 399,000
          399000,
          "#FFD700",       // Gold for 399,000 - 453,000
          453000,
          "#FFFFE0"        // Light Yellow for 453,000 - 500,000
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["exponential", 2],
          ["zoom"],
          10,
          ["interpolate", ["linear"], ["get", "SALE PRICE"], 1, 3, 453000, 1],
          15,
          [
            "interpolate",
            ["linear"],
            ["get", "SALE PRICE"],
            1,
            8,
            453000,
            4,
          ],
        ],
      },
    },
  );
},)

// Wait for the Map to Load
map.on("load", () => {
  console.log("Map is loaded.");

// Add Layers Dynamically Based on Chapters
config.chapters.forEach((chapter) => {
  // Check for Flood Layer
  if (chapter.onChapterEnter.some((entry) => entry.layer === "flood")) {
    if (!map.getLayer("flood")) {
      map.addLayer({
        id: "flood",
        type: "fill",
        source: {
          type: "geojson",
          data: "data/floodLevels.geojson",
        },
        paint: {
          "fill-color": [
            "match",
            ["get", "fld_zone"],
            "AE", "#b3d9ff", // Light blue
            "AO", "#66b2ff", // Medium blue
            "VE", "#004080", // Dark blue
            "rgba(255, 255, 255, 0)", // Transparent
          ],
          "fill-opacity": 0,
        },
      });
    }
  }

  // Check for Contour Layer
  if (map.getLayer("contour")) {
    map.removeLayer("contour");
    map.removeSource("contour");
  }
  
  map.addLayer({
    id: "contour",
    type: "line",
    source: {
      type: "geojson",
      data: "data/cleaned_contour_NYC_2ft.geojson",
    },
    paint: {
      "line-color": [
        "interpolate",
        ["linear"],
        ["to-number", ["get", "ELEVATION"]],
        -2, "#0000FF",   // Deep Blue for -2 ft
        0, "#0033FF",    // Darker Blue for 0 ft
        2, "#3366FF",    // Mid Blue for 2 ft
        6, "#DAA06D",    // Light Blue for 6 ft
        10, "#FF5F1F",   
        20, "#FF5F1F"    
      ],
      "line-width": 0.5, // Changed from 1 to 0.5 for thinner lines
      "line-opacity": 0.5,
    },
  });


  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      
      // Add this code to handle legend visibility and position
      const legendContainer = document.querySelector('.legend-container');
      
      // Hide legend for chapters 1, 2, and 6
      if (chapter.id === 'overallMap' || chapter.id === 'flood' || chapter.id === 'conclusion') {
        legendContainer.style.display = 'none';
      } else {
        legendContainer.style.display = 'block';
        
        // Position legend on the left for arverne chapter
        if (chapter.id === 'arverne') {
          legendContainer.style.right = 'auto';
          legendContainer.style.left = '20px';
        } else {
          legendContainer.style.left = 'auto';
          legendContainer.style.right = '20px';
        }
      }

      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);})