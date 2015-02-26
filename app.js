var newsPile = angular.module('newsPile', ['ui.router']);

newsPile.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
