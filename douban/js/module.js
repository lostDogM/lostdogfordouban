var  layOutForDouBan = angular.module("layOutForDouBan",[])
layOutForDouBan.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
});