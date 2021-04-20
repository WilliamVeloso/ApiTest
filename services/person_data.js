require('dotenv').config();
const request = require('supertest');
const loginServices = require('./login');

const profile = process.env.NODE_ENV

const personData  = async () => {
    let tokenRequest =  await loginServices.token();
    
    const response = await request(profile)
        .get('/person-data')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Bearer ' + tokenRequest.body.access_token)
    

    return response;
}
module.exports = { personData }