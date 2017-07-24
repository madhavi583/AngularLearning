var myApp=angular.module('myModule',[])
//this create custom filter
.filter("gender",function (){
return function(gender){
switch(gender){
case 1:
return "Male";
case 2:
return "FeMale";
case 3:
return "Not di";
}
}
})
myApp.controller('myController',function($scope){

//
var technologies= [
 {firstName : "venkat", name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "male",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
 ];
 $scope. technologies= technologies;
 $scope.sortCOlumn="name";
 $scope.reverseSort =false;
 $scope.sortData= function(column){
 $scope.reverseSort=($scope.sortCOlumn == column)? !$scope.reverseSort :false;
$scope.sortCOlumn = column;
 }
 $scope.getSortClass =function(column){
if($scope.sortCOlumn == column){
    return $scope.reverseSort ? 'arrow-down':'arrow-up'

}
return '';
 }

//  var employee ={
//         firstName : "venkat",
//         lastNmae : "pathapati",
//         gender : "male"
//     };
    // $scope. employee= employee;
   var employee=  [
 {firstName : "venkat", name: "PHP",likes:"0",dislike:"0",dateOfBirth:new Date('november 23,1980 '),gender : "1",salary:"100000"},
 {firstName : "venkat",name: "DRUPAL",likes:"0",dislike:"0", dateOfBirth:new Date('may 05 23,1970 '), gender : "2",salary:"2000"},
 {firstName : "Hannah",name: "MYSQL",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"},
  { firstName : "Madhavi",name: "ANGULAR",likes:"0",dislike:"0",dateOfBirth:new Date('August 15,1960 '),gender : "Female",salary:"1000"}
 ];
 $scope. employee= employee;
 $scope.search=function(item){
if($scope.searchText == undefined)
{
return true;
}
else{
    if(item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1 || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1)
    {
        return true;
    }
    return false;
}
 }
  var customfilter=[{ 
      name : "Ben",dateOfBirth:new Date('november 23,1980 '),gender : "male -1",salary:"100000"},
 {name : "sara", dateOfBirth:new Date('may 05 23,1970 '), gender : "Female -2",salary:"2000"},
 {name : "mark",dateOfBirth:new Date('August 15,1960 '),gender : "Female-1",salary:"1000"},
  { name : "pam",dateOfBirth:new Date('August 15,1960 '),gender : "Female-2 ",salary:"1000"},
  { name : "todd",dateOfBirth:new Date('August 15,1960 '),gender : "Female-3 ",salary:"1000"}
 ];
 $scope.customfilter=customfilter;
 var salary=[
     {name:'venkat',gender:'male',city:'london',salary:'10000000'},
 {name:'Srinu',gender:'male',city:'krishna',salary:'1000'},
 {name:'hannah',gender:'female',city:'banglore',salary:'1000000'},
 {name:'prema',gender:'female',city:'hydrabad',salary:'10000'}

 ];
 $scope.salary=salary;
 $scope.salaryView="EmployeeTable.html";

  var country=[
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
 $scope. country=country;
 

});