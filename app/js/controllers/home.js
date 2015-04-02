'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function HomeCtrl($scope,AppSettings) {

    $scope.data = angular.copy(AppSettings.networkData);

    $scope.viewList = [
        {value : 'all', label : '화면 1(시스템 전체 담당자 권한)'},
        {value : '경찰청', label : '화면 2(경찰청 시스템 담당자 권한)'},
        {value : '미래창조부', label : '화면 3(미래창조부 담당자 권한)'}
    ];

    $scope.viewPage = $scope.viewList[0];

    $scope.btnMsg = '표로 보기 >>';

    $scope.pageMove = function(){

        $scope.data = angular.copy(AppSettings.networkData);
        var _val = $scope.viewPage.value;
        var _arr = { 'nodes' : [], 'links' : [] };

        if(_val != 'all'){
            for(var item in $scope.data.nodes){
                if($scope.data.nodes[item].visibility[_val]){
                    _arr.nodes.push($scope.data.nodes[item]);
                }
            }

            for(var item in $scope.data.links){
                for(var node in _arr.nodes) {
                    if($scope.data.links[item].to == _arr.nodes[node].id){
                        _arr.links.push($scope.data.links[item]);
                    }
                }
            }


            $scope.data = _arr;
        }
        makeGraph($scope.data);
    }

  var makeGraph = function(val) {
      if(val){
          $scope.t = new NetChart({
              container: document.getElementById('chart-container'),
              data:
              {
                  preloaded: val
              },
              style : {
                  linkLabel:{
                      backgroundStyle:{fillColor:"#93B17F", lineColor:"blue"}
                  },
                  nodeRules:{"rule1":nodeStyle},
                  link:{fillColor:"#93B17F"}
              },
              layout:{
                  mode:"static",
                  nodeSpacing: 20
              },
              toolbar : {
                  items : [{"item":"fullscreen"}]
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

          //$scope.t.settings.layout.mode = 'static';
      }
      else{
          angular.element(document.getElementById('chart-container')).html('Error')
      }
  }

    function nodeStyle(node){
        node.image = "images/"+node.type+".png";
        node.fillColor = 'transparent';
        var bgColor = 'transparent';

        switch (node.data.group){
            case 'CCTV' :
                bgColor = '#e4be73';
                break;
            case '130000-1' :
                bgColor = '#b6e473';
                break;
            case '130000-2' :
                bgColor = '#99e5e1';
                break;
            case '160000-1' :
                bgColor = '#c099e5';
                break;
            case '150000-1' :
                bgColor = '#e59999';
                break;
            default :
                bgColor = 'transparent';
                break;
        }

        node.labelStyle = {textStyle:{font:"bold 28px NanumGothic", fillColor: "#000"}, backgroundStyle:{fillColor: bgColor}, padding : 4};

    }

    var $box = $('#box');

    $box.boxSlider({
        effect : 'fade'
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

    makeGraph($scope.data);

}

controllersModule.controller('HomeCtrl', HomeCtrl);