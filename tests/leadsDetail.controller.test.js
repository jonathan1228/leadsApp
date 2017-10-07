describe('leadsDetailCtrl', function(){
	beforeEach(module('leadsApp'));

	describe('init()', function(){
	  var $httpBackend, $rootScope, createController, $routeParams
	  beforeEach(inject(function($injector) {
	     $httpBackend = $injector.get('$httpBackend');

	     $rootScope = $injector.get('$rootScope');
	     $routeParams = $injector.get('$routeParams');
	     var $controller = $injector.get('$controller');

	     createController = function() {
	       return $controller('leadsDetailCtrl', {'$scope' : $rootScope,
				 $routeParams: $routeParams
			  });
	     };
	   }));



	    it('should return with an id', inject(function($rootScope, $controller, $httpBackend, $http){
				  var mockedData =  {
				                  firstName: 'Test',
				                  lastName: 'User',
				                  phoneNumber: '(123) 545-1234',
				                  email: 'testing@boldleads.com',
				                  address: '123 Fake Street',
				                  homeSquareFootage: 1000
				        	}
					$routeParams = {id:1}
	        var controller = createController();
					$httpBackend.when('GET', '/leadsDetail/1').respond(200, mockedData);
	         $rootScope.init();
					 $httpBackend.flush();
	         expect($rootScope.leadsDetail.firstName).to.equal("Test");
	         expect($rootScope.leadsDetail.lastName).to.equal("User");
	         expect($rootScope.leadsDetail.phoneNumber).to.equal("(123) 545-1234");
	         expect($rootScope.leadsDetail.email).to.equal("testing@boldleads.com");
	         expect($rootScope.leadsDetail.address).to.equal("123 Fake Street");
	         expect($rootScope.leadsDetail.homeSquareFootage).to.equal(1000);


	    }));
	 });
})
