var app=angular.module("myModule",["ngRoute"])
.config(function($routeProvider){
$routeProvider
.when('/', {
  templateUrl: './mine.html'
})
.when("/home", {
  templateUrl:"./home.html",
 controller: "homeController"
})
.when("/course", {
  templateUrl:"./course.html",
 controller: "courseController"
})
.when("/students", {
  templateUrl:"./joanna.html",
 controller: "studentsController"
})


})
.controller("homeController",function($scope){
$scope.message="HOME PAGE";
})
.controller("courseController",function($scope){
$scope.Courses=["HTML","CSS","PHP","MYSQL","DRUPAL"];
})
.controller("studentsController",function($scope,$http){
  $http.get("./webconfig.php")
  .then(function(response){
$scope.students=response.data;
console.log(response);
  })
//$scope.students=[{}];
});
