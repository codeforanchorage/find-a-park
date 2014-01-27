'use strict';
require.config({
  baseUrl: "scripts/",
  paths: {
    "jquery": "dependencies/jquery-1.10.2",
    "leaflet": "../leaflet/leaflet",
    "handlebars": "dependencies/handlebars",
    "leaflet-search": "../leaflet/leaflet-search",
    "leaflet.control.geosearch": "../leaflet/l.control.geosearch",
    "leaflet.geosearch.provider.google": "../leaflet/l.geosearch.provider.google"
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'leaflet-search': {
      deps: ['leaflet'],
      exports: 'L'
    },
    'leaflet.control.geosearch': {
      deps: ['leaflet'],
      exports: 'L'
    },
    'leaflet.geosearch.provider.google': {
      deps: ['leaflet.control.geosearch'],
      exports: 'L'
    }
  }
});

define(['jquery', 'main'], function($, main) {
  $.getJSON("config.json", function(config) {
    $.getJSON("data.geojson", function(data) {
      main(config, data);
    });
  });
});
