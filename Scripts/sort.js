var myApp=angular.module(myApp,[]);
myApp.controller('myController',function($scope){

//
var technologies= [
    {firstName : "venkat", name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "male",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
 ];
 $scope. technologies= technologies;
 var employee ={
        firstName : "venkat",
        lastNmae : "pathapati",
        gender : "male"
    };
    $scope. employee= employee;
});