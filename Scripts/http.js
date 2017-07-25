


var myApp=angular.module('myModule',[]);
myApp.controller('myController',function($scope,$http){
    $http.post('displaydata.php')
    .then(function (response){
        $scope.employees =response.data;
    });
    /* $http({method: 'GET', url: 'displaydata.php'}).success(function(data) {
        $scope.employees = data;
    });*/

});
/*var myApp = angular.module('myModule',[]);
myApp.controller('myController', function($scope, $http) {
  $http.get("displaydata.php")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
});*/