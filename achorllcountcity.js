var myApp=angular.module('myModule',[])
myApp.controller('myController',function($scope,$http){
    $http.post('India.php')
    .then(function (response){
        $scope.employees =response.data;
    });