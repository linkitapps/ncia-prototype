'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function HomeCtrl($scope, $timeout, AppSettings, addTEmpData, helloData, createDataService, demoGraph, demoSettings) {

    var sMode = 'scrollHorz3d';
    var isSaved = false;
    var isSaved2 = false;
    var oldNode = "";
    var drawNewChart;
    var drawChart;
    var dataObj = {};
    var nodes = [];
    var edges = [];
    var new3D = true;
    window.new3Dchart = null;
    window.space = null;
    window.bindEvent = false;

    TRIPTYCH.WebGLVisualizer.prototype.initDefaultResources = function(node){
        this.resources.defaultLineMaterial = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 1.0 } );
        this.resources.defaultLineSelectedMaterial = new THREE.LineBasicMaterial( { color: 0xffff00, opacity: 1.0 } );
        this.resources.defaultLineHighlightedMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff, opacity: 1.0 } );
        this.resources.defaultSurfaceMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,  specular:0xbbaa99, shininess:50, shading: THREE.SmoothShading } );
        this.resources.defaultSurfaceSelectedMaterial = new THREE.MeshPhongMaterial( { color: 0xffff00, specular:0xbbaa99, shininess:50, shading: THREE.SmoothShading  } );
        this.resources.defaultSurfaceHighlightedMaterial = new THREE.MeshPhongMaterial( { color: 0x00ffff, specular:0xbbaa99, shininess:50, shading: THREE.SmoothShading } );
    };

    var data = createDataService.createData(10000);

    $scope.bgClass = 'bg_a';

    if((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))) {
        sMode = 'fade';
        $scope.bgClass = 'bg_a ie';
    }

    $scope.layout1 = [
        {id : "SVE_000001","x" : 1200,"y" : -150},
        {id : "SVE_000002","x" : -500,"y" : -550},
        {id : "SVE_000003","x" : -300,"y" : -550},
        {id : "SVE_000004","x" : -100,"y" : -550},
        {id : "SVE_000005","x" : 100,"y" : -550},
        {id : "SVE_000006","x" : 300,"y" : -550},
        {id : "SVE_000007","x" : 500,"y" : -550},
        {id : "SVE_000008","x" : -1600,"y" : -300},
        {id : "SVE_000009","x" : -1600,"y" : -450},
        {id : "SVE_000010","x" : -1800,"y" : -300},
        {id : "SVE_000011","x" : -1800,"y" : -150},
        {id : "SVE_000012","x" : -1200,"y" : -150},
        {id : "SVE_000013","x" : -1000,"y" : -150},
        {id : "SVE_000014","x" : -800,"y" : -150},
        {id : "SVE_000015","x" : -600,"y" : -150},
        {id : "SVE_000016","x" : -400,"y" : -150},
        {id : "SVE_000017","x" : -200,"y" : -150},
        {id : "SVE_000045","x" : 200,"y" : -150},
        {id : "SVE_000046","x" : 400,"y" : -150},
        {id : "SVE_000047","x" : 800,"y" : -150},
        {id : "SVE_000048","x" : 600,"y" : -150},
        {id : "SVE_000049","x" : 1000,"y" : -150},
        {id : "SVE_000301","x" : 0,"y" : 200},
        {id : "SVE_000302","x" : 0,"y" : 400},
        {id : "SVE_000303","x" : 0,"y" : 600},
        {id : "SVE_000304","x" : -200,"y" : 800},
        {id : "SVE_000305","x" : 200,"y" : 800},
        {id : "SVE_000035","x" : 0,"y" : 800},
        {id : "SVE_006040","x" : -1000,"y" : 200},
        {id : "SVE_006041","x" : -1000,"y" : 400},
        {id : "SVE_006042","x" : -1000,"y" : 600},
        {id : "SVE_006043","x" : -1300,"y" : 800},
        {id : "SVE_006044","x" : -1100,"y" : 800},
        {id : "SVE_006045","x" : -900,"y" : 800},
        {id : "SVE_006046","x" : -700,"y" : 800},
        {id : "root","x" : 0,"y" : 0},
        {id : "CCTV1","x" : 600,"y" : 200},
        {id : "CCTV2","x" : 800,"y" : 200},
        {id : "CCTV3","x" : 1000,"y" : 200},
        {id : "SVE_000050","x" : 0,"y" : -400},
        {id : "SVE_000036","x" : 400,"y" : 800},
        {id : "SVE_000037","x" : 600,"y" : 800},
        {id : "SVE_000038","x" : 800,"y" : 800}
    ];


    /* 챠트 및 그리드에 사용될 원본 데이터 */
    $scope.data = angular.copy(AppSettings.networkData);

    $scope.addTEmpData = addTEmpData;

    /* 데이터 필터링시 사용 */
    $scope.viewList = [
        {value : '전체', label : '전체 네트워크 표시', desciprtion : '', idx : 0},
        {value : '경찰청', label : '화면 1(경찰청 서버담당자 권한)', desciprtion : '서버담당자인 일지매의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 1},
        {value : '경찰청', label : '화면 2(경찰청 시스템 담당자 권한)', desciprtion : '경찰청 시스템 전체 담당자인 장보고의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 2},
        {value : '경찰청', label : '화면 3(경찰청 네트워크 담당자 권한)', desciprtion : '네트워크 장비 담당자인 이수일의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 3},
        {value : '경찰청', label : '화면 4(경찰청 보안 담당자 권한)', desciprtion : '보안담당자인 나보안의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 4},
        {value : '전체', label : '화면 5(시스템 전체 담당자 권한)', desciprtion : '시스템 전체 담당자인 대조영의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 5},
        {value : '미래창조부', label : '화면 6(미래창조부 서버 담당자 권한)', desciprtion : '미래창조과학부의 서버 담당자인 이순신의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 6},
        {value : '미래창조부', label : '화면 7(미래창조부 네트워크 담당자 권한)', desciprtion : '네트워크 담당자인 이수일의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 7},
        {value : '미래창조부', label : '화면 8(미래창조부 보안 담당자 권한)', desciprtion : '보안 담당자인 나보안의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 8},
        {value : '전체', label : '화면 9(권한 별 그룹핑 화면)', desciprtion : '시스템 전체 담당자 권한', idx : 9},
        {value : '퍼포먼스 테스트', label : '화면 10(퍼포먼스 테스트)', desciprtion : '노드 10,000개', idx : 10},
        {value : '퍼포먼스 테스트', label : '화면 11(퍼포먼스 테스트 & 검색)', desciprtion : '노드 10,000개에 대한 검색 (data : A0~A9999)', idx : 11},
        {value : '3D 네트워크 시각화', label : '화면12(3D 네트워크 시각화)', desciprtion : '', idx : 12}
    ];

    var testData = {nodes : [], links : []};


    for(var i = 0 ; i < 250; i++){
        for (var item in AppSettings.networkData.nodes){
            var _inItem = angular.copy(AppSettings.networkData.nodes[item]);
            var _inLink = angular.copy(AppSettings.networkData.links[item]);

            //if(i!=0 && _inItem.id == 'root'){
            //    testData.links.push(
            //        {
            //            "id": "rootLink"+i,
            //            "from": _inItem.id+i,
            //            "to": 'root0',
            //            "type": "type1"
            //        }
            //    );
            //}

            testData.nodes.push(_inItem);
            testData.links.push(_inLink);
            _inItem.id = ''+_inItem.id+i;
            _inLink.id = ''+_inLink.id+i;
            _inLink.from = ''+_inLink.from+i;
            _inLink.to = ''+_inLink.to+i;
        }
    }

    /* 기본 필터링 셋팅 */
    $scope.viewPage = $scope.viewList[0];

    /* 챠트, 데이터 화면 전환 */
    $scope.btnMsg = '표로 보기 >>';

    $scope.graphMode = 'static';

    $scope.graphMode2 = 'preset';

    $scope.graphLayout = function() {
        $scope.graphMode == 'static' ? $scope.graphMode = 'dynamic' : $scope.graphMode = 'static';

        $scope.pageMove();
    };

    $scope.graphLayout2 = function() {

        $scope.graphMode2 == 'preset' ? $scope.graphMode2 = 'cose' : $scope.graphMode2 = 'preset';

        $scope.pageMove();

    }

    /* 필터링 갱신 함수 */
    $scope.pageMove = function(){

        window.bindEvent = false;

        if($scope.t) {
            $scope.t.remove();
            $scope.t = null;
        }

        if($scope.cy) {
            $scope.cy.destroy();
            $scope.cy = null;
        }

        if(new3Dchart) $(new3Dchart).detach();
        //$('#chart-container').empty;

        var _val = $scope.viewPage.value;
        var _idx = $scope.viewPage.idx;
        var _arr = { 'nodes' : [], 'links' : [] };

        function posSet(){
            for(var pos in $scope.layout1){
                if($scope.data.nodes[item].id == $scope.layout1[pos].id){
                    $scope.data.nodes[item].style.x = $scope.layout1[pos].x;
                    $scope.data.nodes[item].style.y = $scope.layout1[pos].y;
                }
            }
        }

        if(_idx == 0) {

            $scope.data = {};

            $scope.t = new NetChart({
                container: document.getElementById('chart-container'),
                assetsUrlBase: './css',
                data:
                {
                    preloaded: helloData
                },
                style : {
                    node:{display:"text"},
                    linkLabel:{
                        backgroundStyle:{fillColor:"#93B17F", lineColor:"blue"}
                    },
                    nodeRules:{"rule1":function(node){
                        node.labelStyle = {textStyle:{font:"bold 28px NanumGothic", fillColor: "#000"}, backgroundStyle:{fillColor: 'green'}, padding : 4};
                    }},
                    link:{fillColor:"#93B17F"}
                },
                layout:{
                    mode:$scope.graphMode,
                    nodeSpacing: 20
                },
                toolbar : {enabled : false},
                events:{
                    onClick: function(event) {

                        if (typeof event.clickNode != 'undefined') {
                            $scope.$apply(function(){
                                if(event.clickNode.type == 'police'){
                                    $scope.viewPage = $scope.viewList[1];
                                }else if(event.clickNode.type == 'future'){
                                    $scope.viewPage = $scope.viewList[6];
                                }else if(event.clickNode.type == 'cloud'){
                                    $scope.viewPage = $scope.viewList[5];
                                }

                            });

                            //$timeout(function(){$scope.pageMove();},500)
                            $scope.pageMove();
                        }
                    }

                }
            });
        }
        else if(_idx == 9) {

            $scope.data = {};

            $scope.dataDemo = angular.copy(demoSettings.networkData);

            demoGraph( $scope.dataDemo, $scope.graphMode2 ).then(function( gCy ){

                $scope.cy = gCy;

                $scope.cy.on('mouseover', 'node', function(evt){

                    var node = evt.cyTarget.data();
                    var _id = evt.cyTarget.id();
                    var _x = evt.originalEvent.clientX;
                    var _y = evt.originalEvent.clientY;

                    if(node.properties.admin){
                        $('.tooltip2').html(
                            '<table>' +
                            '<tr><th>종류</th><td>'+ (node.properties.type || '' ) +'</td></tr>'+
                            '<tr><th>서버명</th><td>'+ (node.properties.name || '' ) +'</td></tr>'+
                            '<tr><th>IP</th><td>'+ (node.properties.IP || '' ) +'</td></tr>'+
                            '<tr><th>OS</th><td>'+ (node.properties.OS || '' ) +'</td></tr>'+
                            '<tr><th>담당자</th><td>'+ (node.properties.admin_name || '' ) +'</td></tr>'+
                            '<tr><th>연락처</th><td>'+ (node.properties.admin.phone || '' ) +'</td></tr>'+
                            '</table>'
                        ).css({
                                'left' : (_x+10)+'px',
                                'top' : _y+'px'
                            }).show();
                    }
                });
                $scope.cy.on('mouseout', 'node', function(evt){
                    $('.tooltip2').hide();
                });

                // use this variable to hide ui until cy loaded if you want
                $scope.cyLoaded = true;
            });

        }
        else if(_idx == 10) {

            $scope.data = {};

            $scope.t = new NetChart({
                container: document.getElementById('chart-container'),
                assetsUrlBase: './css',
                data:
                {
                    preloaded: testData
                },
                style : {
                    linkLabel:{
                        backgroundStyle:{fillColor:"#93B17F", lineColor:"blue"}
                    },
                    nodeRules:{"rule1":nodeStyle},
                    link:{fillColor:"#93B17F"},
                    nodeClasses:[
                        {className:"국민안전처",style:{radius:20,fillColor:"#b6e473"}},
                        {className:"미래창조부",style:{radius:20,fillColor:"#e59999"}},
                        {className:"경찰청",style:{radius:20,fillColor:"#c099e5"}},
                        {className:"CCTV",style:{radius:20,fillColor:"#e4be73"}}
                    ]
                },
                layout:{
                    mode:'static',
                    nodeSpacing: 20
                },
                toolbar : {enabled : false},
                info:{
                    enabled: true,
                    nodeContentsFunction: function(itemData, item){
                        if(itemData.properties.name){
                            return '<div class="tooltip"><table>' +
                                '<tr><th>종류</th><td>'+ (itemData.properties.type || '' ) +'</td></tr>'+
                                '<tr><th>서버명</th><td>'+ (itemData.properties.name || '' ) +'</td></tr>'+
                                '<tr><th>IP</th><td>'+ (itemData.properties.IP || '' ) +'</td></tr>'+
                                '<tr><th>OS</th><td>'+ (itemData.properties.OS || '' ) +'</td></tr>'+
                                '<tr><th>담당자</th><td>'+ (itemData.properties.admin_name || '' ) +'</td></tr>'+
                                '<tr><th>연락처</th><td>'+ (itemData.properties.admin.phone || '' ) +'</td></tr>'+
                                '</table></div>';
                        }
                    }
                }
            })
        }
        else if(_idx == 11) {

            $scope.data = {};

            angular.forEach(data[0], function(arg,index) {
                nodes.push({"id":arg.id,"value0":arg.value0, "name":arg.id});
            });
            angular.forEach(data[1], function(arg) {
                if (arg.from != arg.to) {
                    edges.push({"id":arg.id,"from":arg.from,"to":arg.to});
                }
            });

            dataObj  = [nodes,edges];

            $scope.search = function() {
                $scope.$apply(function(){
                    $scope.nodeName = '';
                });
                if(data[0].filter(function (data) { return data.id == $scope.nodeName }).length > 0){
                    $scope.t.remove();
                    drawNewChart(dataObj);
                }else{
                    alert('"'+$scope.nodeName+'" 에 해당하는 노드가 없습니다.\n A0~A9999 사이의 문자로 다시 입력해 주세요.')
                }
            };

            drawChart = function(data) {
                $scope.t = new NetChart({
                    container: document.getElementById("chart-container"),
                    assetsUrlBase: './css',
                    data: {
                        preloaded: {
                            nodes: data[0],
                            links: data[1]
                        }
                    },
                    navigation: {
                        mode: "showall",
                        initialNodes: ['A0'],
                        focusNodeExpansionRadius: 5,
                        focusNodeTailExpansionRadius: 5,
                        numberOfFocusNodes: 1,
                        expandOnClick: true
                    },
                    style:{
                        nodeRules:{"rule1":nodeStyle2},
                        linkRules:{"rule1":linkStyle2}
                    },
                    events:{
                        onClick: clickEvent
                    },
                    layout: {
                        mode: "static"
                    },
                    toolbar: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    }
                });
            };

            drawNewChart = function(data,type,eventsId) {
                var initialNode = $scope.nodeName;
                if (type == 2) {
                    initialNode = eventsId;
                }
                $(document).ready(function() {
                    $scope.t = new NetChart({
                        container: document.getElementById("chart-container"),
                        assetsUrlBase: './css',
                        data: {
                            preloaded: {
                                nodes: data[0],
                                links: data[1]
                            }
                        },
                        navigation: {
                            mode: "focusnodes",
                            initialNodes: [initialNode.toString()],
                            focusNodeExpansionRadius: 5,
                            focusNodeTailExpansionRadius: 5,
                            numberOfFocusNodes: 1,
                            expandOnClick: true,
                            autoZoomOnFocus: true			//de-false
                        },
                        style:{
                            nodeRules:{"rule1":nodeStyle2},
                            linkRules:{"rule1":linkStyle2}
                        },
                        events:{
                            onClick: clickEvent2
                        },
                        layout: {
                            mode: "radial"		//"radial"
                        },
                        toolbar: {
                            enabled: false
                            // },
                            // interaction: {
                            // 	nodesMovable: true
                        },
                        credits: {
                            enabled: false
                        }
                    });
                });
            };

            drawChart(dataObj);

        }
        else if(_idx == 12) {

            window.bindEvent = true;

            if(!new3Dchart){
                $.ajax({
                    type: "GET",
                    url: "./xmlData/test.xgmml",
                    dataType: "xml",
                    success: function(data) {
                        $scope.new3dData = data;
                        window.loader = new TRIPTYCH.BasicGraphLoader();
                        window.graph = loader.loadXGMML($scope.new3dData);
                        window.visualizer = new TRIPTYCH.WebGLVisualizer();
                        window.layoutEngine = new TRIPTYCH.ForceDirectedLayoutEngine();
                        window.controls = new TRIPTYCH.BasicControls();
                        window.space = new TRIPTYCH.Space( graph,
                            visualizer,
                            layoutEngine,
                            controls
                        );
                        space.init();
                        animate();
                        $('#chart-container').append(new3Dchart);
                    }

                });
                new3D = false;
            }
            else {
                $('#chart-container').append(new3Dchart);
            }
        }
        else {
            $scope.data = angular.copy(AppSettings.networkData);
            if(_val != '전체'){
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

            if(_idx == 1 || _idx == 2){
                for(item in $scope.data.nodes) {
                    if($scope.data.nodes[item].properties.admin_name != '일지매'){
                        $scope.data.nodes[item].properties.OS = '';
                        if(_idx == 1) $scope.data.nodes[item].properties.IP = '';
                    }
                    if($scope.graphMode == 'static') posSet();
                }
            }else if (_idx == 5){
                for(item in $scope.data.nodes) {
                    if(($scope.data.nodes[item].properties.admin_name != '일지매') && ($scope.data.nodes[item].properties.admin_name != '이순신')){
                        $scope.data.nodes[item].properties.OS = '';
                    }
                    if($scope.graphMode == 'static') posSet();
                }
            }else if (_idx == 3 || _idx == 4 || _idx == 6 || _idx == 7 || _idx == 8){
                for(item in _arr.nodes) {
                    $scope.data.nodes[item].properties.OS = '';
                    if(_idx == 8 && $scope.data.nodes[item].properties.type == 'CCTV') delete $scope.data.nodes[item];
                    if($scope.graphMode == 'static') posSet();
                }
            }

            makeGraph($scope.data);
        }

        function setCameraPosition(){
            controls.camera.position.set( 0, 700, 105);
            controls.camera.up.set(0,0,1);
        }

        function animate() {
            requestAnimationFrame( animate );
            space.update();
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

        node.labelStyle = {textStyle:{font:"bold 26px NanumGothic", fillColor: "#000"}, backgroundStyle:{fillColor: bgColor}, padding : 2};

    }

    function nodeStyle2(node){
        var image = null;
        if (node.data.type == "person"){
            // image = "/dvsl/data/net-chart/node-icons-male.png";
            node.label = "Person";
        }else{
            // image = "/dvsl/data/net-chart/node-icons-case.png";
            node.label = node.id;
        }
        var sliceNo = (node.data.foreign)? 1 : 0;
        var sliceSize = 239;
        node.image = image;
        node.imageSlicing = [0, sliceNo*sliceSize,sliceSize,sliceSize];
    }
    function linkStyle2(link){
        if (link.data.type == "share"){
            link.fillColor = "limegreen";
            // link.label = (link.data.shares_perc*100).toFixed(0) + "%";
            link.radius = 5;
        } else{
            link.fillColor = "lightgray";
            link.radius = 3;
        }
    }
    function clickEvent(event){

        if (typeof event.clickNode != 'undefined') {
            $scope.$apply(function(){
                $scope.nodeName = event.clickNode.id;
            });
            $scope.t.remove();
            drawNewChart(dataObj,2,event.clickNode.id);
        }

    };

    function clickEvent2(event){

        if (typeof event.clickNode != 'undefined') {
            $scope.$apply(function(){
                $scope.nodeName = event.clickNode.id;
            });
            $scope.t.clearFocus();
            $scope.t.showNode(event.clickNode.id);
            $scope.t.addFocusNode(event.clickNode.id);

            oldNode = event.clickNode.id;
        }

    };

    /* 챠트 생성 */
    var makeGraph = function(val) {
        if($scope.btnMsg == '그래프로 보기 >>'){
            $('#next').trigger('click');
        }

        if(val){

            $scope.t = new NetChart({
                container: document.getElementById('chart-container'),
                assetsUrlBase: './css',
                data:
                {
                    preloaded: val
                },
                style : {
                    linkLabel:{
                        backgroundStyle:{fillColor:"#93B17F", lineColor:"blue"}
                    },
                    nodeRules:{"rule1":nodeStyle},
                    link:{fillColor:"#93B17F"},
                    nodeClasses:[
                        {className:"국민안전처",style:{radius:20,fillColor:"#b6e473"}},
                        {className:"미래창조부",style:{radius:20,fillColor:"#e59999"}},
                        {className:"경찰청",style:{radius:20,fillColor:"#c099e5"}},
                        {className:"CCTV",style:{radius:20,fillColor:"#e4be73"}}
                    ]
                },
                layout:{
                    mode:$scope.graphMode,
                    nodeSpacing: 20
                },
                toolbar : {enabled : false},
                info:{
                    enabled: true,
                    nodeContentsFunction: function(itemData, item){
                        if(itemData.properties.name){
                            return '<div class="tooltip"><table>' +
                                '<tr><th>종류</th><td>'+ (itemData.properties.type || '' ) +'</td></tr>'+
                                '<tr><th>서버명</th><td>'+ (itemData.properties.name || '' ) +'</td></tr>'+
                                '<tr><th>IP</th><td>'+ (itemData.properties.IP || '' ) +'</td></tr>'+
                                '<tr><th>OS</th><td>'+ (itemData.properties.OS || '' ) +'</td></tr>'+
                                '<tr><th>담당자</th><td>'+ (itemData.properties.admin_name || '' ) +'</td></tr>'+
                                '<tr><th>연락처</th><td>'+ (itemData.properties.admin.phone || '' ) +'</td></tr>'+
                                '</table></div>';
                        }
                    }
                },
                legend:{
                    enabled: true,
                    panel : {
                        side: "bottom",
                        align: "center",
                        margin: 10,
                        padding: 0
                    },
                    //height : 20,
                    lineSpacing: -10,
                    marker : {
                        alignment: "left",
                        options: "right",
                        lineColor: "#fff",
                        size: 30
                    }
                }
            })
        }
        else{
            angular.element(document.getElementById('chart-container')).html('Error')
        }
    }

    $scope.addFn = function(){
        alert('저장 되었습니다.');
        $scope.modalShown = false;

        if(!isSaved && $scope.viewPage.idx != 10){
            var _c = angular.copy($scope.addTEmpData);
            for(var item in _c.nodes){
                AppSettings.networkData.nodes.push(_c.nodes[item]);
                AppSettings.networkData.links.push(_c.links[item]);
            }
            isSaved = true;
        }else if(!isSaved2 && $scope.viewPage.idx == 10){
            var count2 = 0 ;
            for(var i = 0 ; i < 3; i++){
                for (var item in addTEmpData.nodes){
                    var _inItem = angular.copy(addTEmpData.nodes[item]);
                    var _inLink = angular.copy(addTEmpData.links[item])
                    testData.nodes.push(_inItem);
                    testData.links.push(_inLink);
                    _inItem.id = ''+_inItem.id+count2;
                    _inLink.id = ''+_inLink.id+count2;
                    _inLink.from = ''+_inLink.from+count2;
                    _inLink.to = ''+_inLink.to+count2;

                }
                count2++ ;
            }

            isSaved2 = true;
        }

        $scope.pageMove();
    }

    var $box = $('#box');

    $box.boxSlider({
        effect : sMode
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

    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    function wheelCtrl(event){


        function handle(delta) {
            if (delta < 0) controls.zoom = 1;
            else controls.zoom = -1;
            setTimeout(function(){
                controls.zoom = 0;
            },200)
        }

        if($scope.viewPage.idx == 12) {
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta/120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail/3;
            if (delta) handle(delta);
        }

    }
    /* Initialization code. */
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheelCtrl, false);
    window.onmousewheel = document.onmousewheel = wheelCtrl;

    $scope.pageMove();

}

controllersModule.controller('HomeCtrl', HomeCtrl);