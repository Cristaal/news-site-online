newsSite.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, $http, TitlesFactory, UtilitiesFactory) {
  $scope.title = UtilitiesFactory.findById(TitlesFactory.titles, $stateParams.titleId)
  $scope.addComment = function() {
    $scope.title.comments = [];
    $scope.title.comments.push({ comment: $scope.title.comment });
    debugger;
    $scope.comment = null;
  }
});
