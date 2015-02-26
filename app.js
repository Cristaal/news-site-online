var newsSite = angular.module('newsSite', ['ui.router']);

newsSite.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('titles', {
    url: "/titles",
    templateUrl: "partials/titles.html",
    controller: 'TitlesCtrl'
  });

  $stateProvider.state('titles.comments', {
    url: "/:titleId",
    templateUrl: "partials/titles.comments.html",
    controller: 'CommentsCtrl'
  });

});
