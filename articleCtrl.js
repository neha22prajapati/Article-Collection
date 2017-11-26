
app.controller('articleCtrl', ['$scope', '$rootScope', '$state', 'articleFactory', function ($scope, $rootScope, $state, articleFactory) {
    $scope.articleResult = articleFactory.articleReq();
    $scope.articleData = $scope.articleResult.NewDataSet.Table1;
    $scope.home = function(){
        $state.go('app.home');
    }

    $scope.article = function (index) {
        $scope.articleNav = index;
        $state.go('app.article');
    }

}]);

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});