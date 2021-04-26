const request = require('supertest');
const loginServices = require('./login');

const url = process.env.NODE_ENV

const personData  = async () => {
    let tokenRequest =  await loginServices.token();
    
    const response = await request(url)
        .get('/person-data')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Bearer ' + tokenRequest.body.access_token)
    

    return response;
}
module.exports = { personData }