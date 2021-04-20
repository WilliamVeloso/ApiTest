"use strict";

const Joi = require("joi");

const commercial_info = Joi.object({
  addresses: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      addressType: Joi.object({
        id: Joi.number().required()
      }),
      addressUse: Joi.array().items(
        Joi.object({
          id: Joi.number().required(),
          sequence: Joi.string().required()
        }),
        Joi.object({
          id: Joi.number().required(),
          sequence: Joi.string().required()
        })
      ).optional(),
      createdAt: Joi.string().optional().allow(null),
      createdBy: Joi.string().optional().allow(null),
      extraInfo: Joi.string().optional().allow(null),
      geographicalLevels: Joi.array().items(
        Joi.object({
          code: Joi.string().optional().allow(null),
          description: Joi.string().optional().allow(null),
          label: Joi.string().optional().allow(null),
          level: Joi.number().optional().allow(null),
          sequence: Joi.string().optional().allow(null)
        }).optional(),
        Joi.object({
          code: Joi.string().optional().allow(null),
          description: Joi.string().optional().allow(null),
          label: Joi.string().optional().allow(null),
          level: Joi.number().optional().allow(null),
          sequence: Joi.string().optional().allow(null)
        }).optional(),
        Joi.object({
          code: Joi.string().optional().allow(null),
          description: Joi.string().optional().allow(null),
          label: Joi.string().optional().allow(null),
          level: Joi.number().optional().allow(null),
          sequence: Joi.string().optional().allow(null)
        }).optional(),
        Joi.object({
          code: Joi.string().optional().allow(null),
          description: Joi.string().optional().allow(null),
          label: Joi.string().optional().allow(null),
          level: Joi.number().optional().allow(null),
          sequence: Joi.string().optional().allow(null)
        }).optional(),
      ),
      number: Joi.string().optional().allow(null),
      sequence: Joi.string().optional().allow(null),
      updatedAt: Joi.date().optional().allow(null),
      zipCode: Joi.string().optional().allow(null),
      deliveryModes: Joi.array().items(
        Joi.object({
          cost: Joi.number().required(),
          deliveryPolicyId: Joi.number().required(),
          handleDays: Joi.number().required(),
          scheduledDelivery: Joi.boolean().required(),
          shippingMethodDescription: Joi.string().required(),
          shippingMethodId: Joi.number().required(),
          weekDaysDescription: Joi.string().required(),
          weekDaysId: Joi.number().required()
        })
      ),
      createdAt: Joi.string().optional().allow(null),
      createdBy: Joi.string().optional().allow(null),
    })
  ),
  approvalReason: Joi.array().items(
    Joi.object({
      code: Joi.number().optional(),
      description: Joi.string().optional(),
      origin: Joi.string().optional()
    })
  ).optional().allow(null),
  blockReason: Joi.array().items().optional().allow(null),
  canApproveOrder: Joi.boolean().required(),
  canImpersonateOthers: Joi.boolean().required(),
  claimId: Joi.string().optional().allow(null),
  companyId: Joi.number().required(),
  countryCode: Joi.string().required(),
  credit: Joi.object({
    additional: Joi.number().required(),
    available: Joi.number().required(),
    limit: Joi.number().required(),
    percentages: Joi.array().items().optional().allow(null),
    profile: Joi.string().required().allow(null),
    profileCode: Joi.number().required().allow(null),
    validateCredits: Joi.boolean().required().allow(null)
  }),
  debit: Joi.object({
    overdueDebits: Joi.number().required()
  }),
  incorporations: Joi.array().items().optional(),
  isBlocked: Joi.boolean().required(),
  needsApproval: Joi.boolean().required(),
  orderProfile: Joi.object({
    addresses: Joi.array().items().optional(),
    availabilityTTL: Joi.number().required().allow(null),
    businessModelId: Joi.number().required().allow(null),
    cartTTL: Joi.number().required().allow(null),
    channelId: Joi.number().required().allow(null),
    currentCycle: Joi.object({
      cycleCode: Joi.number().required(),
      dateStart: Joi.date().required().allow(null),
      dateEnd: Joi.date().required().allow(null),
      subcycle: Joi.object({}).optional()
    }),
    currencyCode: Joi.string().required(),
    currentDate: Joi.date().required().allow(null),
    decimalPlaces: Joi.number().required(),
    growthPlan: Joi.array().items(
      Joi.object({
        growthPlanId: Joi.number().required(),
        growthPlanLevelId: Joi.number().required()
      })
    ),
    inventoryCommitmentStepId: Joi.number().required(),
    inventoryTypeId: Joi.number().required(),
    kpiCycle: Joi.object({
      cycleCode: Joi.number().optional()
    }).optional(),
    maxItemQuantity: Joi.number().required(),
    maxOrder: Joi.number().required(),
    minimumOrderSize: Joi.number().required(),
    orderCycle: Joi.object({
      cycleCode: Joi.number().required(),
      dateStart: Joi.date().required().allow(null),
      dateEnd: Joi.date().required().allow(null),
      subcycle: Joi.object({}).optional(),
    }),
    orderDate: Joi.date().required(),
    orderSizeTypeId: Joi.number().required(),
    orderTypeId: Joi.number().required(),
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
        paymentId: Joi.number().required(),
        paymentDescription: Joi.string().empty('').default('default value')
      })
    ),
    productTTL: Joi.number().required(),
    profitabilityTable: Joi.array().items(
      Joi.object({
        from: Joi.number().required().allow(null),
        isDefault: Joi.boolean().required().allow(null),
        profitability: Joi.number().required().allow(null),
        to: Joi.number().required().allow(null)
      }),
      Joi.object({
        from: Joi.number().required().allow(null),
        isDefault: Joi.boolean().required().allow(null),
        profitability: Joi.number().required().allow(null),
        to: Joi.number().required().allow(null)
      })
    ),
    quotaCommitmentStepId: Joi.number().required(),
    residualCurrentAccount: Joi.number().required(),
    roles: Joi.array().items(
      Joi.object({
        functionId: Joi.number().required(),
        roleId: Joi.number().required()
      })
    ),
    roundTypeId: Joi.number().required(),
    starterKit: Joi.object({}).optional(),
    structures: Joi.array().items(
      Joi.object({
        structureCode: Joi.number().required(),
        structureName: Joi.string().required(),
        structureTypeId: Joi.number().required(),
        structureTypeName: Joi.string().required()
      }),
      Joi.object({
        structureCode: Joi.number().required(),
        structureName: Joi.string().required(),
        structureTypeId: Joi.number().required(),
        structureTypeName: Joi.string().required()
      })
    ),
    systemId: Joi.number().required(),
    distributionCenterId: Joi.number().required()
  }),
  personId: Joi.string().required(),
  resilience: Joi.array().items(
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
    Joi.object({
      interface: Joi.string().optional(),
      module: Joi.string().optional(),
      fromUser: Joi.boolean().optional()
    }).optional(),
  ),
  segmentations: Joi.array().items(
    Joi.object({
      individualization: Joi.number().required(),
      individualizationGroup: Joi.number().required()
    })
  ),
  session: Joi.object({
    sessionPersonUid: Joi.string().required(),
    sessionUserUid: Joi.string().required()
  }),
  testProfile: Joi.boolean().required(),
  training: Joi.array().items().optional(),
  userId: Joi.string().required(),
  sessionIdentifier: Joi.string().required(),
  'x-app-token': Joi.string().required(),
  code: Joi.number().required(),
  message: Joi.string().required(),
  status: Joi.string().required()
});

module.exports = {
  commercial_info,
};
