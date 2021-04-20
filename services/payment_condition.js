require('dotenv').config
const request = require("supertest");
const commercialInfoService = require("../services/commercial_info")

const profile = process.env.PROFILE;

const paymentConditionTrue = async () => {
  let tokenRequest = await commercialInfoService.commercialInfo();
  const response = await request(profile)
  .get('/payment-condition?selectable=true')
  .set('Content-Type', 'application/json')
  .set('x-app-token', tokenRequest.body['x-app-token'])
    
  return response;
};

const paymentConditionfalse = async () => {
  let tokenRequest = await commercialInfoService.commercialInfo();
  const response = await request(profile)
  .get('/payment-condition?selectable=false')
  .set('Content-Type', 'application/json')
  .set('x-app-token', tokenRequest.body['x-app-token'])
    
  return response;
};
module.exports = { paymentConditionTrue, paymentConditionfalse };
