'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl() {

  // ViewModel
  var vm = this;

  var data = {
    "nodes":[
      {"id":"n1", "loaded":true, "style":{"label":"Node1"}},
      {"id":"n2", "loaded":true, "style":{"label":"Node2"}},
      {"id":"n3", "loaded":true, "style":{"label":"Node3"}}
    ],
    "links":[
      {"id":"l1","from":"n1", "to":"n2", "style":{"fillColor":"red", "toDecoration":"arrow"}},
      {"id":"l2","from":"n2", "to":"n3", "style":{"fillColor":"green", "toDecoration":"arrow"}},
      {"id":"l3","from":"n3", "to":"n1", "style":{"fillColor":"blue", "toDecoration":"arrow"}}
    ]
  };
  var t = new NetChart({
    container: document.getElementById('chart-container'),
    height: 350,
    data:
    {
      preloaded: data
    }
  });

}

controllersModule.controller('HomeCtrl', HomeCtrl);