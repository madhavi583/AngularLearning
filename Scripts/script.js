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
 var madhavi=[
        {  firstName : "venkat",  dateOfBirth:new Date('november 23,1980 '), lastNmae : "pathapati", gender : "male",salary:"100000"},
         {  firstName : "Hannah", dateOfBirth:new Date('may 05 23,1970 '),  lastNmae : "pathapati", gender : "Female",salary:"2000"},
           {  firstName : "Madhavi", dateOfBirth:new Date('August 15,1960 '),  lastNmae : "pathapati", gender : "Female",salary:"1000"}
    ];
    $scope.madhavi= madhavi;
 //handling events in angularjs
 var technologies= [{name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "male",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
 ];
 $scope. technologies= technologies;
 // increment like
$scope. incrementlikes= function(technology){

technology.likes++;
}
$scope. incrementDislikes= function(technology){

technology.incrementDislikes-- ;
}

    var  technologies1= [{
    firstName : "venkat", name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "male",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
 ];
//madhavi
    $scope.technologies1= technologies1;
    $scope.rowLimit=3;
// sorting order
var employeesort=[
    {
 firstName : "venkat", name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "male",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"}


];
$scope.employeesort=employeesort;
});

