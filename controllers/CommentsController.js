newsSite.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, TitlesFactory, UtilitiesFactory) {
  $scope.title = UtilitiesFactory.findById(TitlesFactory.titles, $stateParams.titleId)
  $scope.addComment = function() {
    $scope.title.comments.push({ comment: $scope.enteredComment });
    $scope.enteredComment = null;
  }
});
