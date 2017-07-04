;
(function(angular, $) {
    var layOutForDouBan=angular.module("layOutForDouBan");
    layOutForDouBan.controller("layOutForDouBanController",["$scope","$http",function($scope,$http){
        $http.post("https://api.douban.com/v2/movie/top250").success(function(res){
        if(res.start==0){
            $scope.dataList=res.subjects;
        }
        })
    }])
})(angular, jQuery)