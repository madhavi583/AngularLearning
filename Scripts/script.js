var myApp=angular.module('myModule',[]);//this is call method
// this is call controller
// var myController=function($scope){
// $scope.message="angularjs Tutorial madhavi learning";
// }
// register into controller
myApp.controller('myController',function($scope){
    var employee ={
        firstName : "venkat",
        lastNmae : "pathapati",
        gender : "male"
    };
    $scope. employee= employee;
    var country ={
name: "USA",
capital : "washington,D.C",
flag:"/angular/Images/download.jpg"
    };
    $scope. country= country;
    //ng-repeat
    var repeat=[
        {  firstName : "venkat",  lastNmae : "pathapati", gender : "male",salary:"100000"},
         {  firstName : "Hannah",  lastNmae : "pathapati", gender : "Female",salary:"2000"},
           {  firstName : "Madhavi",  lastNmae : "pathapati", gender : "Female",salary:"1000"}
    ];
    $scope. repeat= repeat;
// $scope.message="angularjs Tutorial madhavi learning";


$scope.message="hello madhavi how are you";
//this is NEST NG_REPEAT
 var nest=[
{
    name:"UK",
    cities:[
        { name: "London"},
        {name:"Manchester"},
        {name:"Biramingham"},
        ]
},

{
    name:"USA",
    cities:[
        { name: "London"},
        {name:"Manchester"},
        {name:"Biramingham"},
        ]
},
{
    name:"INDIA",
    cities:[
        { name: "HYD"},
        {name:"BNGL"},
        {name:"AP"},
        ]
}
 ];
 $scope. nest= nest;
 //handling events in angularjs
 var technologies= [{name: "PHP",likes:"0",dislike:"0"},
 {name: "DRUPAL",likes:"0",dislike:"0"},
 {name: "MYSQL",likes:"0",dislike:"0"},
  {name: "ANGULAR",likes:"0",dislike:"0"},
 ];
 $scope. technologies= technologies;
 // increment like
$scope. incrementlikes= function(technology){

technology.likes++;
}
$scope. incrementDislikes= function(technology){

technology.incrementDislikes-- ;
}
});
