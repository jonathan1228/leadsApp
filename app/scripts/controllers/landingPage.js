angular.module('leadsApp').controller('landingPageCtrl', function ($scope, $http, $window) {
  $scope.landingPage = "LANDINGPAGE";
  $scope.leadsForm = {
  				firstName: '',
  				lastName: '',
  				phoneNumber: '',
  				email: '',
  				address: '',
  				homeSquareFootage: null
        }

  $scope.getInitialID = function(){
    $http.post('/landingPage/getInitId', $scope.leadsForm).then(function(result){
      console.log(result);
      $scope.leadsForm.id = result.data.id;
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
  $scope.getInitialID();

  $scope.saveOnChange = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }

  $scope.submit = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
      console.log("testing");
      $window.location.reload();
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
});
