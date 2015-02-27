newsSite.controller('TitlesCtrl', function TitlesCtrl($scope, TitlesFactory) {
  $scope.titles = TitlesFactory.titles;
  $scope.TitlesFactory = TitlesFactory;
  $scope.vote = 0;

  $scope.upVote = function () {
    $scope.vote++;

  }

  $scope.downVote = function () {
    $scope.vote--;
  };

});
