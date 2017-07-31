var app=angular.module("myModule",["ui.router"])
.config(function($stateProvider){
$stateProvider
/*.state('/', {
  templateUrl: './mine.html'
})*/
.state("/home", {
  templateUrl:"./home.html",
 controller: "homeController"
})
.when("/course", {
  templateUrl:"./course.html",
 controller: "courseController"
})

/*.when("/joanna", {
  templateUrl:"./student.html",
 controller: "studentsController"
})*/
// .when("/joanna1", {
//   templateUrl:"./prema.html",
//  controller: "studentsControllermadhavi"
// })
// .otherwise({
//   redirectTo:"/mine"
// })
//$locationProvider.html5Mode(true);


})
.controller("homeController",function($scope){
$scope.message="HOME PAGE";
})
.controller("courseController",function($scope){
$scope.Courses=["HTML","CSS","PHP","MYSQL","DRUPAL"];

})
 
// .controller("studentsController",function($scope){
// $scope.Courses=["HTMLmadhavi","CSSmadhavi","PHPmadhavi","MYSQLmadhavi","DRUPALmadhavi"];
// })


/*.controller("studentsController",function($scope,$http){
 
  $http.get("./webconfig.php")
  
  .then(function(response){
$scope.accounts = response.data;});
console.log(response);
console.log('hello madhavi');
};
/*controller('studentsController1', function($scope, $http) {
   $http.get("./users_mysql.php")
   .then(function (response) {$scope.names = response.data.records;});
});
  });*/
//$scope.students=[{}];



