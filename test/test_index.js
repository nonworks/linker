require('chai').should();
linker = require('../lib');

describe('linker', function(){ 

    beforeEach(function(){
        linker.removeOrigin()
    });

    it('should fail if page not given', function(){
        (function() {
            linker()
        }).should.throw(/missing page/i);
    });

    it('should build links', function(){
        linker({
            page: 'bookings', 
            resource: '123', 
            action: 'create'
        }).should.be.equal('/bookings/123/create')
    });

    it('should build links without optionals', function(){
        linker({
            page: 'bookings', 
        }).should.be.equal('/bookings')
    });

    it('should fail to make absolute path if origin not given', function(){
        (function() {
            linker({page: 'bookings', absolute: true})
        }).should.throw(/origin is not set/i);
    });

    it('should build absolute links', function(){
        linker.setOrigin('http://www.example.com');

        linker({
            page: 'bookings', 
            absolute: true
        }).should.be.equal('http://www.example.com/bookings');
    });
});
