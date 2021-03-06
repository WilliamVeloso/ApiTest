const request = require('supertest')
const expect = require('chai').expect;
const Joi = require('joi')
const moment = require('moment')
// require('dotenv').config()
const comercial = require('../specs/rhsso.spec')

const url = process.env.NODE_ENV

describe('Adicionando credito para as CN', () => { 
    it('flag padrão', async() => {
        const response = await request(url)

        .get('payment-condition?selectable=true')
        .set('Content-Type', 'application/json')
        .set('x-app-token', comercial)

        console.log('Body', response.status);
    })
})