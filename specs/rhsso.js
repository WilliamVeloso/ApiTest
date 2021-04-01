const request = require('supertest')
const expect = require('chai').expect;
const joiAssert =  require('joi-assert');
const Joi = require('joi')
require('dotenv').config()
const usersDev = require('../usersDEv.json')

const rhsso = process.env.RHSSO
const person_data = process.env.PERSON_DATA
const comercial_info = process.env.COMERCIAL_INFO
const request_timeout = 25000;

let token;

getDataUser =  async() => {
    const response = await request(person_data)
    .get('/person-data')
    .set('Content-type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Bearer ' + token)
    expect(response.status).to.equal(200)
    return response.body['x-app-token']
   // return x_app_token;

}

beforeEach(async() => {
    const response = await request(rhsso)
    .post('/token')
    .set('Content-type', 'application/x-www-form-urlencoded')
    .send({ grant_type: 'password',  client_id: 'gsp-frontend',
    client_secret: 'f6412823-9763-4955-802a-cafc7d29b29a', username: usersDev.Peru.login, password: usersDev.Peru.password})
    
    expect(response.status).equal(200)
    token = response.body.access_token;
});

describe('Login gsp-frontend via api', () =>{ 
    it('acessando o person-data', async() => {
        
        const response = await request(person_data)
       
        .get('/person-data')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Bearer ' + token)

       expect(response.status).equal(200)
    
      
    }).timeout(request_timeout);

    it('Comercial info', async() =>{
        const tokenUser = await getDataUser();
        const response  = await request(comercial_info)
        .get('/commercial-info?businessModelId=1&systemId=1&channelId=1')
        .set('Content-type', 'application/json')
        .set('x-app-token', tokenUser)

        expect(response.status).to.equal(200)

    }).timeout(request_timeout);

})
