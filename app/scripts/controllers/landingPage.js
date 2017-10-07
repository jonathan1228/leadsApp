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

  function getInitialID(){
    $http.post('/landingPage/getInitId', $scope.leadsForm).then(function(result){
      $scope.leadsForm.id = result.data.id;
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
  getInitialID();

  $scope.saveOnChange = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
      console.log($scope.leadsForm);
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }

  $scope.submit = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
      // $window.location.reload();
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
});
