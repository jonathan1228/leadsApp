angular.module('leadsApp').controller('leadsListCtrl', function ($scope, $http) {
  $scope.leadsList = [];
  $scope.init = function(){
    $http.get('/leadsList').then(function(leads){
      $scope.leadsList = leads.data.filter(function(lead){
        if(lead.firstName !== "" && lead.lastName !== "" && lead.email !== "" && lead.address !== "" && lead.phoneNumber !== "" && lead.homeSquareFootage !== ""){
          return lead
        }
      });
    }).catch(function(err){
      console.log("ERROR", err)
    })
  }
  $scope.init()
});
