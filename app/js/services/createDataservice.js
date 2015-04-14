'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function createDataService($q, $http) {

  var createDataService = {};

  createDataService.createData = function(count) {
    var node = [];
    var link = [];

    var groundNo = count/10;
    var groundPlus = 1;

    for (var i = 0; i<count; i++) {
      var id = 'A'+i;
      var value0 = Math.floor(Math.random()*100);
      var value1 = "";
      var value2 = "";
      // if (i%100 == 0) {
      node.push({'id': id, 'value0': value0, 'value1': value1, 'value2': value2});
      // }
      // else {
      // node.push({'id': id, "parent":"A"+(i-i%100), 'value0': value0, 'value1': value1, 'value2': value2});
      // }

      var eachLinkNo = 1;// Math.floor(Math.random()*2)+1;
      for (var j = 0; j<eachLinkNo; j++) {
        var from = 'A'+i;

        var to = 'A' +  Math.floor(Math.random() * (count));

        // if (i>(groundNo*groundPlus)) {
        // 	groundPlus = groundPlus+1;
        // }
        // if (i%groundNo == 0) {
        // 	var to = 'A0';			//+(Math.floor(Math.random()*10));
        // } else if (i%groundNo == 1) {
        // 	var to = 'A'+groundNo*(groundPlus-1);		//(Math.floor(Math.random()*groundNo+groundNo*(groundPlus-1)));
        // } else if (i%groundNo == 2) {
        // 	var to = 'A'+(groundNo*(groundPlus-1)+1);		//(Math.floor(Math.random()*groundNo+groundNo*(groundPlus-1)));
        // } else {
        // 	var toValue = (Math.floor(Math.random()*groundNo+groundNo*(groundPlus-1)));
        // 	if (toValue%groundNo == 0) {
        // 		var to = 'A'+(toValue+3);			//(Math.floor(Math.random()*groundNo+groundNo*(groundPlus-1)));
        // 	} else if (toValue%groundNo == 1) {
        // 		var to = 'A'+(toValue+3);
        // 	} else if (toValue%groundNo == 2) {
        // 		var to = 'A'+(toValue+3);
        // 	}
        // 	else {
        // 		var to = 'A'+toValue;
        // 	}
        // }

        var value0 = Math.floor(Math.random()*100);
        link.push({'id': from + to ,'from': from, 'to': to, 'value0': value0});
      }

    }

    $('#log0').val(JSON.stringify(node));
    $('#log1').val(JSON.stringify(link));

    return [node, link];
  };

  return createDataService;

}

servicesModule.service('createDataService', createDataService);