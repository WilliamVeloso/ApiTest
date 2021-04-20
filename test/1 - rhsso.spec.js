const expect = require('chai').expect;
const loginService = require('../services/login');
const schema_rhsso = require('../data/schema_users');
const Joi = require('joi');
const request_timeout = 25000;

describe('Login gsp-frontend via api', () => { 
    it('Login successful',  async () => {
       const response = await loginService.token();
       Joi.assert(response.body, schema_rhsso.schema_rhsso);
       expect(response.status).equal(200);
    }).timeout(request_timeout);
})
