/*
$ npm install @turf/distance @turf/nearest-point @turf/boolean-point-in-polygon
$ npm i -g browserify
$ browserify turf.js -s turf > outTurf.js 
*/

module.exports = {
  distance: require("@turf/distance"),
  nearestPoint: require("@turf/nearest-point"),
  booleanPointInPolygon: require("@turf/boolean-point-in-polygon")
};


/*
npm install ajv
npm install mapbox-gl
npm install @turf/turf
*/