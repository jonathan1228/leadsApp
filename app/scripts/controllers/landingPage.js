angular.module('leadsApp').controller('landingPageCtrl', function ($scope, $http, $window) {
  $scope.saved = '';
  $scope.submitted = '';
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
      $scope.leadsForm.id = result.data.id;
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
  $scope.getInitialID();

  $scope.saveOnChange = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(val){
      $scope.saved = true
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }

  $scope.submit = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
      $scope.submitted = true;;
      $window.location.reload();
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
});
