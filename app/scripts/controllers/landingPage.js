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
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }

  $scope.submit = function(){
    $http.post('/landingPage/add', $scope.leadsForm).then(function(){
      // $window.location.reload();
      console.log($scope.form.myLeadsForm);
      $scope.myLeadsForm.$setPristine()
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
});
