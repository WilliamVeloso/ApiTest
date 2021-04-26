const expect = require('chai').expect;
const personDataService = require('../services/person_data')
const request_timeout = 25000;
const schema_users = require('../data/schema_users')
const Joi = require('joi');

describe('Person data', () => { 
    it('acessando o person-data', async() => {
        const response = await personDataService.personData();
        //Joi.assert(response.body, schema_users.schema_person_data, response.text)
        expect(response.status).equal(200);
     
    }).timeout(request_timeout);
})
