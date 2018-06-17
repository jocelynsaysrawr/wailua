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
        }
      ]
    }
  };
};
