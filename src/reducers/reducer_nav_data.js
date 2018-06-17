export default () => {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-159.3363627, 22.038345]
        },
        properties: {
          title: "Lydgate Park",
          icon: "circle-stroked",
          location: "Lydgate"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-159.359589, 22.047907]
        },
        properties: {
          title: "Opaekaa",
          icon: "circle-stroked",
          location: "Opaekaa"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-159.359208, 22.039398]
        },
        properties: {
          title: "Fern Grotto",
          icon: "circle-stroked",
          location: "Fern-Grotto"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-159.348612, 22.048136]
        },
        properties: {
          title: "Wailua River",
          icon: "circle-stroked",
          location: "Wailua-River"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-159.335051, 22.048033]
        },
        properties: {
          title: "Wailua Beach",
          icon: "circle-stroked",
          location: "Wailua-Beach"
        }
      }
    ]
  };
};
