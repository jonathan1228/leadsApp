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

// describe('getInitialID()', function(){
//         it('should return with an id', inject(function($rootScope, $controller, $httpBackend, $http){
//       var mockedData =  {
//                       firstName: '',
//                       lastName: '',
//                       phoneNumber: '',
//                       email: '',
//                       address: '',
//                       homeSquareFootage: null
//             }
//       scope = $rootScope.$new();
//       httpBackend = $httpBackend;
//       http = $http;
//       controller = $controller;
//       httpBackend.when('POST', '/landingPage/getInitId', mockedData).respond(1);
//
//
//             $controller('landingPageCtrl',{
//             $scope: scope,
//             $http: http
//           });
//       console.log(scope.leadsForm);
//       scope.getInitialID()
//       httpBackend.flush()
//             expect(scope.leadsForm.id).to.equal(3);
//
//         }));
//     });
