const operations = require('./operations.js');
const assert = require('assert');

describe('testing', () =>{
	
	before(() => {
		console.log('before ONCE')
	})

	beforeEach(() => {
		console.log('before EACH')
	})

	after( () => {
		console.log('after ONCE')
	})

	it('correctly calculates the sum of 1 and 3', () => {
	  assert.equal(operations.add(1, 3), 4);
	});

	it('correctly calculates the sum of -1 and -1', () => {
	  assert.equal(operations.add(-1, -1), -2);
	});

	it('correctly calculates the difference of 33 and 3', () => {
	  assert.equal(operations.subtract(33, 3), 30);
	});

	it('correctly calculates the product of 12 and 12', () => {
	  assert.equal(operations.multiply(12, 12), 144);
	});

	it('correctly calculates the quotient of 10 and 2', () => {
	  assert.equal(operations.divide(10, 2), 5);
	});

})
