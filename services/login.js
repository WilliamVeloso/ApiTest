require('dotenv').config();
const request = require('supertest');
const usersDev = require('../usersDev.json');
 
const rhsso = process.env.RHSSO

const token  = async () => {
    const response = await request(rhsso)
        .post('/token')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send({
            grant_type: 'password',  
            client_id: 'gsp-frontend',
            client_secret: 'f6412823-9763-4955-802a-cafc7d29b29a', 
            username: usersDev.Peru.login, 
            password: usersDev.Peru.password
        });

    return response;
}
module.exports = { token }