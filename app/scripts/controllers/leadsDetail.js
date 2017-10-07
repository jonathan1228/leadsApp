angular.module('leadsApp').controller('leadsDetailCtrl', function ($scope, $http, $routeParams) {

  function init(){
    $http.get('/leadsDetail/' + $routeParams.id).then(function(result){
      console.log(result.data);
      $scope.leadsDetail = result.data;
    })
  }
  init()
});
