const Joi = require("joi");

const paymentCondition = () => {

    const paymentTrue = Joi.object({
        paymentConditions: Joi.array().items(
            Joi.object({
                conditions: Joi.array().items(
                    Joi.object({
                        allowPayCreditBlock: Joi.boolean().required(),
                        allowPayDebitBlock: Joi.boolean().required(),
                        conditionCode: Joi.number().required(),
                        conditionDescription: Joi.string().required(),
                        conditionRate: Joi.number().required(),
                        daysToPay: Joi.number().required(),
                        installmentsQuantity: Joi.number().required(),
                        prePaid: Joi.boolean().required(),
                        requiredCostCenter: Joi.boolean().required()
                    })
                ),
                paymentDescription: Joi.string().required(),
                paymentId: Joi.number().required(),
            })
        ),

    }).required();

    return paymentTrue
};

module.exports = {
    paymentCondition
};