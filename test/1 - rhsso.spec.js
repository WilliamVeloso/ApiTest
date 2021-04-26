"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const {
    schema_users, schema_rhsso,  
  } = require("../data/schema_users.js");

const usersDev = require('../usersDev.json');
const request_timeout = 15000;
const URL = process.env.NODE_ENV;
const ENDPOINT = '/token';
    

describe("Login gsp-frontend via api", function() {
    it.only("Login successful",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .post(ENDPOINT)
    .set('Content-type', 'application/x-www-form-urlencoded')
    .send({
        grant_type: 'password',  
        client_id: 'gsp-frontend',
        client_secret: 'f6412823-9763-4955-802a-cafc7d29b29a', 
        username: usersDev.Peru.login, 
        password: usersDev.Peru.password
    })
    .end(function(err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schema_rhsso);
        done(err);
        });
    });

});
