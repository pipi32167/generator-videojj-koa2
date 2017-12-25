const co = require('co')
const chai = require('chai')
const { expect } = chai

describe('Example test', function() {
	
	describe('Normal test', function() {
		
		it('should pass', function() {

			expect(0).to.eq(0)
		})
	})

	describe('Callback test', function() {
		
		it('should pass', function(done) {

			expect(0).to.eq(0)
			done()
		})
	})

	describe('Promise test', function() {
		
		it('should pass', function() {
			
			return Promise.resolve()
				.then(() => expect(0).to.eq(0))
		})
	})

	describe('async/await test', function() {
		
		it('should pass', async function() {

			expect(0).to.eq(0)

			await Promise.delay(1)
		})
	})
})