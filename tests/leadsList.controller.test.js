describe('leadsListCtrl', function(){
	beforeEach(module('leadsApp'));

	describe('init()', function(){
	  var $httpBackend, $rootScope, createController
	  beforeEach(inject(function($injector) {
	     $httpBackend = $injector.get('$httpBackend');

	     $rootScope = $injector.get('$rootScope');
	     var $controller = $injector.get('$controller');

	     createController = function() {
	       return $controller('leadsListCtrl', {'$scope' : $rootScope
			  });
	     };
	   }));



	    it('should return with an id', inject(function($rootScope, $controller, $httpBackend, $http){
				  var mockedData =  [
						{
              firstName: 'Test',
              lastName: 'User',
              phoneNumber: '(123) 545-1234',
              email: 'testing@boldleads.com',
              address: '123 Fake Street',
              homeSquareFootage: 1000
        		},
						{
              firstName: 'Test2',
              lastName: 'User2',
              phoneNumber: '(123) 545-1234',
              email: 'testing@boldleads.com',
              address: '123 Fake Street',
              homeSquareFootage: 1000
        		}
						,{
              firstName: 'Test3',
              lastName: 'User3',
              phoneNumber: '(123) 545-1234',
              email: 'testing@boldleads.com',
              address: '123 Fake Street',
              homeSquareFootage: 1000
        		},{
              firstName: 'Test4',
              lastName: 'User4',
              phoneNumber: '(123) 545-1234',
              email: 'testing@boldleads.com',
              address: '123 Fake Street',
              homeSquareFootage: 1000
        		}
					]
	        var controller = createController();
					$httpBackend.when('GET', '/leadsList').respond(200, mockedData);
	         $rootScope.init();
					 $httpBackend.flush();
	         expect($rootScope.leadsList.length).to.equal(4);



	    }));
	 });
})
