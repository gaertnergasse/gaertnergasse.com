/*
 * @copyright 2015 commenthol
 * @license MIT
 */
/* globals L */

'use strict';


function init () {
  var img = [
    14000,  // original width of image
    7500   // original height of image
  ];
  // create the map
  var map = L.map('map', {minZoom: 3});

  // assign map and image dimensions
  var rc = new L.RasterCoords(map, img);
  // set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
  map.setMaxZoom(6);
  // set the view in the middle of the image
  map.setView(rc.unproject([img[0] / 2 + 600, img[1] / 2 + 200]), 6);

  // the tile layer containing the image generated with gdal2tiles --leaflet ...
  L.tileLayer('/2018/radouan-zeghidour-no-future-jellyfish/nfjmap/tilesjpg/{z}/{x}/{y}.jpg', {
    noWrap: true,
    attribution: 'asdf'
  }).addTo(map);
}

document.body.onload = init