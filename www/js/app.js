angular.module('mainApp', ['ionic', 'onezone-datepicker', 'ngCordova', 'uiGmapgoogle-maps'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(['$ionicConfigProvider', function ($ionicConfigProvider) {

        $ionicConfigProvider.tabs.position('bottom'); // other values: top

    }])

    .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProviders) {
            GoogleMapApiProviders.configure({
                china: true
            });
        }])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('welcome', {
                cache: false,
                url: '/welcome',
                templateUrl: 'pages/welcome.html',
                controller: 'welcomeController'
            })
            .state('games', {
                cache: false,
                url: '/games',
                templateUrl: 'pages/games.html',
                controller: 'gamesController'
            })
            .state('badges', {
                cache: false,
                url: '/badges',
                templateUrl: 'pages/badges.html',
                controller: 'badgesController'
            })
            .state('about', {
                cache: false,
                url: '/about',
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })
        .state('game1', {
            cache: false,
            url: '/game1',
            templateUrl: 'pages/game1.html',
            controller: 'game1Controller'
        })
            .state('game2', {
                cache: false,
                url: '/game2',
                templateUrl: 'pages/game2.html',
                controller: 'game2Controller'
            })
            .state('game3', {
                cache: false,
                url: '/game3',
                templateUrl: 'pages/game3.html',
                controller: 'game3Controller'
            })
            .state('game4', {
                cache: false,
                url: '/game4',
                templateUrl: 'pages/game4.html',
                controller: 'game4Controller'
            });


        $urlRouterProvider.otherwise('welcome');

    });