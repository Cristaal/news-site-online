var newsSite = angular.module('newsSite', ['ui.router']);

newsSite.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
