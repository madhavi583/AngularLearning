var app = angular
  .module('MyApp', [
    'ui.router' 
  ])
.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function ($stateProvider, $urlRouterProvider,$locationProvider) {

        //$locationProvider.html5Mode({enabled:false});
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '/{lang:(?:en|he|cs)}',
                abstract: true,
                template: '<div ui-view=""></div>',
                params: {lang : { squash : true, value: 'en' }}
            })
        // States
        $stateProvider
            .state('home', {
                parent: 'root',
                url: "/",
                templateUrl: "/angular/Assets/app/templates/home.html",
                controller: 'homeController'
            })
            .state('activity', {
                parent: 'root',
                url: "/activity",
                templateUrl: "/angular/Assets/app/templates/gallery.html",
                controller: 'galleryController'
            })
            .state('page', {
                parent: 'root',
                url: '/page/:pagename',
                templateUrl: "/angular/Assets/app/templates/page.html",
                controller: 'pageController'
            });
    }
])

.controller('homeController', ['$scope', function ($scope) { }])
.controller('galleryController', ['$scope', function ($scope) { }])
.controller('pageController', ['$scope', function ($scope) { }])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])