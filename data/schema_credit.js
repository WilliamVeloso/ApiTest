const Joi = require('joi')

const schema_credit = () => {
   
   const credit =  Joi.object().keys({
        ordersToApprove: Joi.optional(),
        code: Joi.number().required(),
        message: Joi.string().required(),
        status: Joi.number().required()
   })

   const invalid_credit =  Joi.object().keys({
    code: Joi.number().required(),
    message: Joi.string().required(),
    status: Joi.number().required()
})


return {credit, invalid_credit}
}
module.exports = schema_credit;

