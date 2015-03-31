'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl(AppSettings) {

  var t = new NetChart({
    container: document.getElementById('chart-container'),
    height: 600,
    data:
    {
      preloaded: AppSettings.networkData
    }
  });

}

controllersModule.controller('HomeCtrl', HomeCtrl);