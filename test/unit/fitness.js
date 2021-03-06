var test = require('tap').test,
trap = require(__dirname + '/../../lib/trap.js'),
mmdp = require(__dirname + '/../../lib/MMDP.js');
console.log(trap);

test('loads', function (t) {
         t.ok(trap, 'Loaded OK');
         t.end();
     });

test("l-trap", function(t) {
	 var a = 1, b = 2;
	 var params3 = { l:3,
			 a: a,
			 b: b,
			 z: 2} ;
	 var subjects3= { '111': b,
			  '000': a,
			  '011': 0,
			  '110': 0};
	 test_trap( t,  trap, params3, subjects3);
	 var params4 = { l:4,
			 a:a,
			 b:b,
			 z:3};
	 var subjects4= { '1111': b,
			  '0000': a,
			  '0111': 0,
			  '1110': 0};
	 test_trap( t, trap, params4, subjects4);
	 t.end();
});

test("MMDP", function(t) {
	 var this_mmdp = new mmdp.MMDP();
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
	     t.equal( this_mmdp.apply(i), subjects[i], "mmdp " + i + " = " + subjects[i]);
	 }
	 t.equal( this_mmdp.apply(many_mmdp), sum, "Many MMDP");

	 t.end();
});
	 
function test_trap(t, trap, params, subjects ) {
    var many_traps = '';
    var sum = 0;
    var trap = new trap.Trap( params );

    for ( var i in subjects ) {
	many_traps +=i;
	sum += subjects[i];
	t.equal( trap.apply(i ), subjects[i], "ltrap " + i + " = " + subjects[i]);
    }

    t.equal( trap.apply(many_traps ), sum, "Many l-traps");

}