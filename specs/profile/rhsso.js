"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

// const {
//     schema_users,  
//   } = require("../data/schema_users.js");

const request_timeout = 150000;
const URL = process.env.NODE_ENV;
const ENDPOINT = '/auth/realms/Natura/protocol/openid-connect/token';


describe("Autenticaçao RHSSO", function() {
    it("Realizar autenticação no rhsso",function(done) {
    this.timeout(request_timeout);

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Postman-Token': 'de35fa4a-9c13-4888-81bc-80325e78c347',
        'cache-control': 'no-cache',
    }

    const body = {
        'grant_type': 'password',
        'client_id': 'gsp-frontend',
        'client_secret': 'f6412823-9763-4955-802a-cafc7d29b29a',
        'username': '59',
        'password': '0'
      }

    request(URL)
    .post(ENDPOINT)
    .send(body)
    .set(headers)
    .end(function(err, res) {
        console.log(res.body);
        expect(res.status).to.be.eql(200);
        //joiAssert(res.body, schema_users);
        done(err);
        });
    });
})    