var myApp=angular.module('myModule',[]);
myApp.controller('myController',function($scope,$http){
    $http.post('displaydata.php')
    .then(function (response){
        $scope.employees =response.data;
    })

});
