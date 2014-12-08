angular.module('starter', [
  'ionic', 
  'widow.storage',
  'starter.services', 
  'controllers.index', 
  'controllers.login', 
  'controllers.timecheck',
  'controllers.message'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
    }
    if(window.StatusBar) {
      StatusBar.styleDefault()
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // Index.js
  .state('index', {
    url: '/',
    templateUrl: 'templates/index.html',
    controller: 'IndexCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/login.html',
    controller: 'LoginCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/login/register.html',
    controller: 'LoginCtrl'
  })

  // Timecheck.js
  .state('timecheck', {
    url: '/timecheck',
    templateUrl: 'templates/timecheck/index.html',
    controller: 'TimecheckCtrl'
  })
  .state('timecheck-select', {
    url: '/timecheck/:id',
    templateUrl: 'templates/timecheck/show.html',
    controller: 'TimecheckCtrl'
  })
  
  // Message
  .state('message', {
    url: '/message/:id',
    templateUrl: 'templates/message/index.html',
    controller: 'MessageCtrl'
  })

  $urlRouterProvider.otherwise('/')

})
