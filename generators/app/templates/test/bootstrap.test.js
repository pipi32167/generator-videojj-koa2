/* global before, after, beforeEach, afterEach */
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
global.Promise = require('bluebird')

before(function () {
	//add global before here
})

after(function () {
	//add global after here
})

beforeEach(function () {
	//add global beforeEach here
})

afterEach(function () {
	//add global afterEach here
})