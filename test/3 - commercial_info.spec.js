const expect = require('chai').expect;
const commercialInfoService = require('../services/commercial_info')
const Joi = require('joi')
const schemaCommercial = require('../data/schemar_commercial_info')
const request_timeout = 25000;

describe('commercial info', () => { 
    it('Commercial info sucess', async() => {
        const response  = await commercialInfoService.commercialInfo();
        
        expect(response.status).to.equal(200);
        // Joi.assert(response.body, schemaCommercial.commercial_info, response.text);

    }).timeout(request_timeout);
})
