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
.when("/prema", {
  templateUrl:"./stu.php",
 controller: "studentsController"
})
.when("/joanna", {
  templateUrl:"./student.html",
 controller: "studentsController1"
})
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


.controller("studentsController",function($http,$route){
  var vm=this;
  vm.reloadData=function ()
  {
$route.reload();
  }
  this.displayData = function(){
  $http.get("./webconfig.php")
  
  .then(function(response){
$scope.accounts = response.data.records;});
console.log(response);
console.log('hello madhavi');
};
controller('studentsController1', function($scope, $http) {
   $http.get("./users_mysql.php")
   .then(function (response) {$scope.names = response.data.records;});
});
  });
//$scope.students=[{}];



