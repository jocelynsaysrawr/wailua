export default () => {
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-159.3378, 22.0388],
                [-159.3385, 22.0356],
                [-159.3373, 22.0321],
                [-159.3362, 22.0339],
                [-159.3338, 22.0419],
                [-159.3362, 22.044],
                [-159.338, 22.0426]
              ]
            ]
          },
          properties: {
            title: "Lydgate"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-159.357044, 22.046464],
                [-159.358214, 22.046331],
                [-159.360958, 22.046772],
                [-159.361694, 22.04895],
                [-159.358081, 22.048111]
              ]
            ]
          },
          properties: {
            title: "Opaekaa"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-159.359764, 22.039881],
                [-159.358528, 22.039411],
                [-159.359133, 22.037697],
                [-159.361911, 22.036781]
              ]
            ]
          },
          properties: {
            title: "Fern Grotto"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-159.336486, 22.045794],
                [-159.336922, 22.044997],
                [-159.345747, 22.048681],
                [-159.3507, 22.045231],
                [-159.360442, 22.041386],
                [-159.363939, 22.041408],
                [-159.360825, 22.046419],
                [-159.355214, 22.045258],
                [-159.344642, 22.04975],
                [-159.337778, 22.046889]
              ]
            ]
          },
          properties: {
            title: "Wailua River"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-159.335867, 22.044272],
                [-159.336231, 22.045019],
                [-159.336156, 22.045528],
                [-159.335633, 22.046811],
                [-159.334197, 22.050331],
                [-159.333392, 22.050369]
              ]
            ]
          },
          properties: {
            title: "Wailua Beach"
          }
        }
      ]
    }
  };
};
