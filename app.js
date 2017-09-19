var app = angular.module("RFM",[]);

app.controller("RFMController",function($scope,$window){

    $scope.FooterMenu = [
        {
            id:1,
            title:"Menu - 1",
            menu:[
                {
                    id:1,
                    name:"Menu 1-1",
                },
                {
                    id:2,
                    name:"Menu 1-2",
                },
                {
                    id:3,
                    name:"Menu 1-3",
                },
                {
                    id:4,
                    name:"Menu 1-4",
                },
            ]
        },
        {
            id:2,
            title:"Menu - 2",
            menu:[
                {
                    id:1,
                    name:"Menu 2-1",
                },
                {
                    id:2,
                    name:"Menu 2-2",
                },
                {
                    id:3,
                    name:"Menu 2-3",
                },
                {
                    id:4,
                    name:"Menu 2-4",
                },
            ]
        },
        {
            id:3,
            title:"Menu - 3",
            menu:[
                {
                    id:1,
                    name:"Menu 3-1",
                },
                {
                    id:2,
                    name:"Menu 3-2",
                },
                {
                    id:3,
                    name:"Menu 3-3",
                },
                {
                    id:4,
                    name:"Menu 3-4",
                },
            ]
        },
        {
            id:4,
            title:"Menu - 4",
            menu:[
                {
                    id:1,
                    name:"Menu 4-1",
                },
                {
                    id:2,
                    name:"Menu 4-2",
                },
                {
                    id:3,
                    name:"Menu 4-3",
                },
                {
                    id:4,
                    name:"Menu 4-4",
                },
            ]
        }

    ];
    
    for(var i =0;i < $scope.FooterMenu.length;i++){
        $scope.FooterMenu[i].showList = true;
        //$scope.FooterMenu.push({showList:true});
    }

    if($window.innerWidth <= 667){
        $scope.toggleMenu = function(obj){
            for(var i =0;i < $scope.FooterMenu.length;i++){
                $scope.FooterMenu[i].showList = false;
            }
            obj.showList = true;
        };
    }

});
