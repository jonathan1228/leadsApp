angular.module('leadsApp').controller('landingPageCtrl', function ($scope) {
  $scope.landingPage = "LANDINGPAGE"
  $scope.submit = function(){
    console.log($scope.leadsForm);
  }
});