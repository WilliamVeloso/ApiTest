const expect = require('chai').expect;
const payment = require('../services/payment_condition')
const schema_payment = require('../data/schema_payment_profile')
const Joi = require('joi')
const request_timeout = 25000;

describe('payment', () => { 
    it('payment sucess', async() => {
        const response  = await payment.paymentConditionTrue();
       // Joi.assert(response.body, schema_payment.paymentCondition())
        expect(response.status).to.equal(200);

    }).timeout(request_timeout);


    it('payment invalid', async() => {
        const response  = await payment.paymentConditionfalse();
        expect(response.status).to.equal(200);
    }).timeout(request_timeout);
})
