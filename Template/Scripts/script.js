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
  templateUrl:"./course.html"
 //controller: "courseController"
})
.when("/students", {
  templateUrl:"./students.html"
 //controller: "studentsController"
})
})
.controller("homeController",function($scope){
$scope.message="HOME PAGE";
})
.controller("homeController",function($scope){
$scope.Courses=["HTML","CSS","PHP","MYSQL","DRUPAL"];
})
.controller("homeController",function($scope,$http){
  $http.get("/angular/Template/webconfig.php")
  .then(function(response){
$scope.students=response.data;
  })
//$scope.students=[{}];
});
