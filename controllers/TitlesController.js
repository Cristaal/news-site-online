newsSite.controller('TitlesCtrl', function TitlesCtrl($scope, TitlesFactory) {
  $scope.titles = TitlesFactory.titles;
  $scope.TitlesFactory = TitlesFactory;
});
