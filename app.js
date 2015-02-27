var newsSite = angular.module('newsSite', ['ui.router']);

newsSite.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/titles.html",
    controller: 'TitlesCtrl'
  });

  $stateProvider.state('comments', {
    url: "/:titleId",
    templateUrl: "partials/titles.comments.html",
    controller: 'CommentsCtrl'
  });

});
