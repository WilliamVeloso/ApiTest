require('dotenv').config
const request = require("supertest");
const personDataService = require("./person_data");

const profile = process.env.PROFILE;

const commercialInfo = async () => {
  let tokenRequest = await personDataService.personData();
 

  const response = await request(profile)
    .get('/commercial-info?businessModelId=1&systemId=1&channelId=1')
    .set('Content-type', 'application/json')
    .set('x-app-token', tokenRequest.body['x-app-token'])
    
  return response;
};
module.exports = { commercialInfo };
