// var sinon = require('sinon')
// var sinonPromise = require('sinon-promise');
//

describe('MyController', function(){
	beforeEach(module('leadsApp'));


	// describe('getInitialID()', function(){
	// 	it('should return with an id', inject(function($controller, $http){
  //     var $scope = {}
  //     var http
  //     var landingPageCtrl = $controller('landingPageCtrl',{
  //           $scope: $scope,
  //           $http: http
  //         });
  //
  //     sinonPromise(sinon);
  //
  //     var mockedData =  {
  //     				firstName: '',
  //     				lastName: '',
  //     				phoneNumber: '',
  //     				email: '',
  //     				address: '',
  //     				homeSquareFootage: null
  //           }
  //     var httpStub = sinon.stub(http, 'post').returnsPromise().resolves(1)
  //
  //     console.log(httpStub);
  //     $scope.getInitialID()
	// 		expect($scope.leadsForm.id).to.equal(3);
  //     httpStub.restore()
	// 	}));
	// });

describe('getInitialID()', function(){
  var $httpBackend, $rootScope, createController
  beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     // backend definition common for all tests

     // Get hold of a scope (i.e. the root scope)
     $rootScope = $injector.get('$rootScope');
     // The $controller service is used to create instances of controllers
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('landingPageCtrl', {'$scope' : $rootScope });
     };
   }));


   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

        it('should return with an id', inject(function($rootScope, $controller, $httpBackend, $http){
      var mockedData =  {
                      firstName: '',
                      lastName: '',
                      phoneNumber: '',
                      email: '',
                      address: '',
                      homeSquareFootage: null
            }

            var controller = createController();

             // now you don’t care about the authentication, but
             // the controller will still send the request and
             // $httpBackend will respond without you having to
             // specify the expectation and response for this request

             $httpBackend.expectPOST('/landingPage/getInitId', mockedData).respond(200, 1);
             $rootScope.getInitialID('test');
             console.log($rootScope.leadsForm.id);
             expect($rootScope.leadsForm.id).toBe('Saving...');
             $httpBackend.flush();

        }));
    });
})
