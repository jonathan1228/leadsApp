describe('landingPageCtrl', function(){
	beforeEach(module('leadsApp'));

	describe('getInitialID()', function(){
	  var $httpBackend, $rootScope, createController
	  beforeEach(inject(function($injector) {
	     $httpBackend = $injector.get('$httpBackend');

	     $rootScope = $injector.get('$rootScope');
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
	         $httpBackend.expectPOST('/landingPage/getInitId', mockedData).respond(200,{id:1})
	         $rootScope.getInitialID();
					 $httpBackend.flush();
	         expect($rootScope.leadsForm.id).to.equal(1);


	    }));
	  });
		describe('saveOnChange()', function(){
		  var $httpBackend, $rootScope, createController
		  beforeEach(inject(function($injector) {
		     $httpBackend = $injector.get('$httpBackend');

		     $rootScope = $injector.get('$rootScope');
		     var $controller = $injector.get('$controller');

		     createController = function() {
		       return $controller('landingPageCtrl', {'$scope' : $rootScope });
		     };
		   }));


		   afterEach(function() {
		     $httpBackend.verifyNoOutstandingExpectation();
		     $httpBackend.verifyNoOutstandingRequest();
		   });

		    it('should be successful and make $scope.save to be true', inject(function($rootScope, $controller, $httpBackend, $http){
					  var mockedData =  {
					                  firstName: '',
					                  lastName: '',
					                  phoneNumber: '',
					                  email: '',
					                  address: '',
					                  homeSquareFootage: null
					        	}
		        var controller = createController();
		         $httpBackend.expectPOST('/landingPage/add', mockedData).respond(200)
		         $rootScope.saveOnChange();
						 $httpBackend.flush();
						 expect($rootScope.saved).to.equal(true)

		    }));
		  });
		describe('submit()', function(){
		  var $httpBackend, $rootScope, createController
		  beforeEach(inject(function($injector) {
		     $httpBackend = $injector.get('$httpBackend');

		     $rootScope = $injector.get('$rootScope');
		     var $controller = $injector.get('$controller');

		     createController = function() {
		       return $controller('landingPageCtrl', {'$scope' : $rootScope });
		     };
		   }));


		   afterEach(function() {
		     $httpBackend.verifyNoOutstandingExpectation();
		     $httpBackend.verifyNoOutstandingRequest();
		   });

		    it('should be successful and make $scope.save to be true', inject(function($rootScope, $controller, $httpBackend, $http){
					  var mockedData =  {
					                  firstName: '',
					                  lastName: '',
					                  phoneNumber: '',
					                  email: '',
					                  address: '',
					                  homeSquareFootage: null
					        	}
		        var controller = createController();
		         $httpBackend.expectPOST('/landingPage/add', mockedData).respond(200)
		         $rootScope.submit();
						 $httpBackend.flush();
						 expect($rootScope.submitted).to.equal(true)

		    }));
		  });
})
