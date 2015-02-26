newsSite.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
  $scope.title = UtilitiesFactory.findById(TitlesFactory.titles, $stateParams.titleId)
  $scope.addComment = function() {
    $scope.title.comments.push({ comment: $scope.enteredComment });
    $scope.enteredComment = null;
  }
}
