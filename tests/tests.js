describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    describe('reverse',function(){ //describe your app name
    
        var reverse;    
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));
        
        it('Should reverse a string', function(){  //write tests
            expect(reverse('rose')).toBe('esor'); //pass
            expect(reverse('done')).toBe('enod'); //pass
        }); 
        it('Should reverse a string', function(){  //write tests
            expect(reverse('rose')).toBe('esro'); // this test should fail
           
        }); 
    
    });
    
});