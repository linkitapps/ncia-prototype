'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function HomeCtrl($scope,AppSettings) {

    $scope.data = AppSettings.networkData.nodes;

    $scope.btnMsg = '표로 보기 >>';

  var t = new NetChart({
    container: document.getElementById('chart-container'),
    data:
    {
      preloaded: AppSettings.networkData
    },
      style : {
          linkLabel:{
              backgroundStyle:{fillColor:"#93B17F", lineColor:"blue"}
          },
          nodeRules:{"rule1":nodeStyle},
          link:{fillColor:"#93B17F"}
      },
      info:{
        enabled: true,
            nodeContentsFunction: function(itemData, item){
                if(itemData.properties.name){
                    return '<div class="tooltip"><table>' +
                        '<tr><th>종류</th><th>서버명</th><th>IP</th></tr><tr>' +
                        '<td>'+ (itemData.properties.type || '' ) +'</td>' +
                        '<td>'+ (itemData.properties.name || '') +'</td>' +
                        '<td>'+ (itemData.properties.IP || '') +'</td>' +
                        '</tr></table>' +
                        '<table><tr><th>OS</th><th>담당자</th><th>연락처</th></tr><tr>'+
                        '<td>'+ (itemData.properties.OS || '') +'</td>' +
                        '<td>'+ (itemData.properties.admin_name || '') +'</td>' +
                        '<td>'+ (itemData.properties.admin.phone || '') +'</td>' +
                        '</tr></table></div>';
                }
        }
    }
  });

    function nodeStyle(node){
        //console.log(node.type)
        node.image = "images/"+node.type+".png";
        node.fillColor = 'transparent';
        //node.label = node.data.name;
    }

    var $box = $('#box');

    $box.boxSlider({
        effect : 'scrollHorz3d'
        , speed: 600
        , autoScroll: false
        , timeout: 5000
        , next: '#next'
        , prev: '#prev'
        , pause: '#pause'
        //, onbefore: function() {}
        , onafter: function($previousSlide, $currentSlide, currIndex, nextIndex) {
            $scope.$apply(function(){
                currIndex == 1 ? $scope.btnMsg = '표로 보기 >>' : $scope.btnMsg = '그래프로 보기 >>';
            })
        }
    });

}

controllersModule.controller('HomeCtrl', HomeCtrl);