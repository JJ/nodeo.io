'use strict';
var assert = require("assert"),
functions = require("../../lib/functions");

suite('Functions', function() {
    var dimensions = [10, 20, 30];
	
    for (var i in dimensions) {
	test("Testing for dimension " + dimensions[i], function(){
	    var x = [];
	    for ( var j = 0; j < dimensions[i]; j++) {
		x.push(0);
	    }
	    assert.equal( functions.ackley(x), 0, "Optimum for dimension "+ dimensions[i] + " OK" );
	});
    }
    
});


/* 

test("l-trap", function(t) {
	 var a = 1,
	 b = 2;
	 var params3 = [3,a,b,2];
	 var subjects3= { '111': b,
			  '000': a,
			  '011': 0,
			  '110': 0};
	 test_trap( t, params3, subjects3);
	 var params4 = [4,a,b,3];
	 var subjects4= { '1111': b,
			  '0000': a,
			  '0111': 0,
			  '1110': 0};
	 test_trap( t, params4, subjects4);
	 t.end();
});

test("MMDP", function(t) {
	 var many_mmdp ='';
	 var sum = 0;
	 var subjects= { '111111': 1,
			  '000000111111': 2,
			  '000001': 0,
			  '100001': 0.360384,
			  '101001': 0.640576};
	 for ( var i in subjects ) {
	     many_mmdp +=i;
	     sum += subjects[i];
	     t.equal( functions.MMDP(i), subjects[i], "mmdp " + i + " = " + subjects[i]);
	 }
	 t.equal( functions.MMDP(many_mmdp), sum, "Many MMDP");

	 t.end();
});

function test_trap(t, params, subjects ) {
    var number_of_bits = params[0], 
    a = params[1], b = params[2], z  = params[3];
    console.log( params );
    var many_traps = '';
    var sum = 0;
    for ( var i in subjects ) {
	many_traps +=i;
	sum += subjects[i];
	t.equal( functions.ltrap(i, number_of_bits, a, b, z ), subjects[i], "ltrap " + i + " = " + subjects[i]);
    }

    t.equal( functions.ltrap(many_traps, number_of_bits, a, b, z ), sum, "Many l-traps");

}


*/
