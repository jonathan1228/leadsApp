angular.module('leadsApp').controller('leadsDetailCtrl', function ($scope, $http, $routeParams) {

  $scope.init = function(){
    $http.get('/leadsDetail/' + $routeParams.id).then(function(result){
      $scope.leadsDetail = result.data;
    })
  }
  $scope.init()
});
