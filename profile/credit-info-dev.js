const request = require('supertest')
const expect = require('chai').expect;
const Joi = require('joi')
const moment = require('moment')
// require('dotenv').config()
const credit = require('./payloads/credit-info-dev.json')
const data_update = moment().format();
const _ = require('lodash');
const schema_credit = require('/Users/caio.cesas.m.santos/Documents/Natura-api-test/Api-test - Danilo Version/ApiTest/data/schema_credit.js')

const url = process.env.NODE_ENV

describe('Adicionando credito para as CN', () =>{ 
    it('Credito adicionado com sucesso', async()=>{
        const alteracao = {updatedAt: data_update, countryCode: 'CL'}
        const jsonUpdate = _.merge({}, credit, alteracao)
        const response = await request(url)
        .post('/credit-info')
        .set('Content-Type', 'application/json')
        .send(jsonUpdate)
       

        Joi.assert(response.body, schema_credit().credit, response.text)
        expect(response.status).to.eql(200)

    });
    
    it('fomart invalido', async()=>{

        const response = await request(profile)
        .post('/credit-info')
        .set('Content-Type', 'application/json')
        .send(credit)
    
        expect(response.status).to.eql(422)

    });

    it('credit not recente', async()=>{

        const alteracao = {countryCode: 'CL'}
        const jsonUpdate = _.merge({}, credit, alteracao)

        const response = await request(profile)
        .post('/credit-info')
        .set('Content-Type', 'application/json')
        .send(jsonUpdate)
       
        expect(response.status).to.eql(422);

    });

})