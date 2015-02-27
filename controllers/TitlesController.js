newsSite.controller('TitlesCtrl', function TitlesCtrl($scope, TitlesFactory) {
  $scope.titles = TitlesFactory.titles;
  $scope.TitlesFactory = TitlesFactory;


  $scope.upVote = function (title) {
    title.vote++;

  }

  $scope.downVote = function (title) {
    title.vote--;
  };

});
