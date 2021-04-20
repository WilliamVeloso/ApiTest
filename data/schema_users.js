"use strict";

const Joi = require("joi");


const schema_rhsso = Joi.object({
  access_token: Joi.string().required(),
  expires_in: Joi.number().required(),
  refresh_expires_in: Joi.number().required(),
  refresh_token: Joi.string().required(),
  token_type: Joi.string().required(),
  session_state: Joi.string().required(),
  "not-before-policy": Joi.number().allow(),
});

const schema_person_data = Joi.object({
  companyId: Joi.number().required(),
  countryCode: Joi.string().required(),
  isBlocked: Joi.boolean().required(),
  needsApproval: Joi.boolean().required(),
  personData: Joi.object({
    addresses: Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        addressType: Joi.object({
          id: Joi.number().required(),
        }),
        addressUse: Joi.array().items(
          Joi.object({
            id: Joi.number(),
            sequence: Joi.string(),
          }).optional(),
          Joi.object({
            id: Joi.number(),
            sequence: Joi.string(),
          }).optional()
        ),
        createdAt: Joi.date().required().allow(null),
        createdBy: Joi.string().required().allow(null),
        extraInfo: Joi.string().allow(null),
        geographicalLevels: Joi.array().items(
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
        ),
        number: Joi.string().required().allow(null),
        sequence: Joi.string().required(),
        updatedAt: Joi.string().required().allow(null),
        zipCode: Joi.string().required().allow(null),
      }),
      Joi.object({
        id: Joi.number().required(),
        addressType: Joi.object({
          id: Joi.number().required(),
        }),
        addressUse: Joi.array().items(
          Joi.object({
            id: Joi.number().required(),
            sequence: Joi.string().required(),
          })
        ),
        createdAt: Joi.date().required().allow(null),
        createdBy: Joi.string().required().allow(null),
        extraInfo: Joi.string().allow(null),
        geographicalLevels: Joi.array().items(
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),
          Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          }),Joi.object({
            code: Joi.string().optional().allow(null),
            description: Joi.string().optional().allow(null),
            label: Joi.string().optional().allow(null),
            level: Joi.string().optional().allow(null),
            sequence: Joi.string().optional().allow(null),
            type: Joi.string().optional().allow(null),
          })
        ),
        number: Joi.string().required(),
        sequence: Joi.string().required(),
        updatedAt: Joi.string().required(),
        zipCode: Joi.string().required(),
      })
    ),
    businessRelationships: Joi.array().items(
      Joi.object({
        businessModelId: Joi.number().required(),
        cycle: Joi.object({
          cycleCode: Joi.number().required(),
          dateStart: Joi.date().required(),
          dateEnd: Joi.date().required(),
        }),
        status: Joi.object({
          statusCode: Joi.number().required(),
        }),
        structures: Joi.array().items(
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          })
        ),
        approvalReason: Joi.array().items(),
        blockReason: Joi.array().items(),
        isBlocked: Joi.boolean().required(),
        needsApproval: Joi.boolean().required(),
      }),
      Joi.object({
        businessModelId: Joi.number().required(),
        cycle: Joi.object({
          cycleCode: Joi.number().required(),
          dateStart: Joi.date().required(),
          dateEnd: Joi.date().required(),
        }),
        status: Joi.object({
          statusCode: Joi.number().required(),
          description: Joi.string().required(),
        }),
        structures: Joi.array().items(
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          }),
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          }),
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          })
        ),
        approvalReason: Joi.array().items(),
        blockReason: Joi.array().items(),
        isBlocked: Joi.boolean().required(),
        needsApproval: Joi.boolean().required(),
      })
    ),
    currentCycle: Joi.object({}),
    currentDate: Joi.string().required(),
    naturaCode: Joi.string().required(),
    orderDate: Joi.string().required(),
    paymentPlan: Joi.object({
      createdAt: Joi.string().required(),
      creditLine: Joi.string().allow(null),
      description: Joi.string().optional().allow(null),
      id: Joi.number().required(),
      personId: Joi.string().required(),
    }),
    kpiCycle: Joi.object({}),
    orderCycle: Joi.object({}),
    personId: Joi.string().required(),
    phones: Joi.array().items(
      Joi.object({
        areaCode: Joi.string().required(),
        countryCode: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        typeId: Joi.number().required(),
      })
    ),
    roles: Joi.array().items(
      Joi.object({
        businessModelId: Joi.number().required(),
        createdAt: Joi.string().required(),
        endDate: Joi.string().allow(null),
        functionId: Joi.number().required(),
        personRolesId: Joi.string().required(),
        rejectionReasonId: Joi.string().allow(null),
        roleId: Joi.number().required(),
        salesHierarchyId: Joi.string().allow(null),
        sourceSystem: Joi.number().required(),
        startDate: Joi.string().required(),
        status: Joi.number().required(),
        substatus: Joi.number().required(),
        updatedAt: Joi.date().allow(null),
      }),
      Joi.object({
        businessModelId: Joi.number().required(),
        createdAt: Joi.string().required(),
        endDate: Joi.string().allow(null),
        functionId: Joi.number().required(),
        personRolesId: Joi.string().required(),
        rejectionReasonId: Joi.string().allow(null),
        roleId: Joi.number().required(),
        salesHierarchyId: Joi.string().allow(null),
        sourceSystem: Joi.number().required(),
        startDate: Joi.string().required(),
        status: Joi.number().required(),
        substatus: Joi.number().required(),
        updatedAt: Joi.date().allow(null),
      })
    ),
    segmentations: Joi.array().items(),
    userName: Joi.string().required(),
  }),
  resilience: Joi.array().items(
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    }),
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    }),
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    }),
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    }),
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    }),
    Joi.object({
      interface: Joi.string().required(),
      module: Joi.string().required(),
      fromUser: Joi.boolean().required(),
    })
  ),
  session: Joi.object({
    sessionPersonUid: Joi.string().required(),
    sessionUserUid: Joi.string().required(),
  }),
  userProfile: Joi.object({
    businessRelationships: Joi.array().items(
      Joi.object({
        businessModelId: Joi.number().required(),
        cycle: Joi.object({
          cycleCode: Joi.number().required(),
          dateStart: Joi.string().required(),
          dateEnd: Joi.string().required(),
        }),
        status: Joi.object({
          statusCode: Joi.number().required(),
        }),
        structures: Joi.array().items(
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          })
        ),
      }),
      Joi.object({
        businessModelId: Joi.number().required(),
        cycle: Joi.object({
          cycleCode: Joi.number().required(),
          dateStart: Joi.string().required(),
          dateEnd: Joi.string().required(),
        }),
        status: Joi.object({
          statusCode: Joi.number().required(),
          description: Joi.string().required(),
        }),
        structures: Joi.array().items(
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          }),
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          }),
          Joi.object({
            structureCode: Joi.number().required(),
            structureName: Joi.string().required(),
            structureTypeId: Joi.number().required(),
            structureTypeName: Joi.string().required(),
          })
        ),
      })
    ),
    canApproveOrder: Joi.boolean().required(),
    canImpersonateOthers: Joi.boolean().required(),
    canTest: Joi.boolean().required(),
    naturaCode: Joi.string().required(),
    roles: Joi.array().items(
      Joi.object({
        businessModelId: Joi.number().required(),
        createdAt: Joi.string().required(),
        endDate: Joi.string().allow(null),
        functionId: Joi.number().required(),
        personRolesId: Joi.string().required(),
        rejectionReasonId: Joi.string().allow(null),
        roleId: Joi.number().required(),
        salesHierarchyId: Joi.string().allow(null),
        sourceSystem: Joi.number().required(),
        startDate: Joi.string().required(),
        status: Joi.number().required(),
        substatus: Joi.number().required(),
        updatedAt: Joi.date().allow(null),
      }),
      Joi.object({
        businessModelId: Joi.number().required(),
        createdAt: Joi.string().required(),
        endDate: Joi.string().allow(null),
        functionId: Joi.number().required(),
        personRolesId: Joi.string().required(),
        rejectionReasonId: Joi.string().allow(null),
        roleId: Joi.number().required(),
        salesHierarchyId: Joi.string().allow(null),
        sourceSystem: Joi.number().required(),
        startDate: Joi.string().required(),
        status: Joi.number().required(),
        substatus: Joi.number().required(),
        updatedAt: Joi.date().allow(null),
      })
    ),
    userId: Joi.string().required()
  }),
  'x-app-token': Joi.string().required(),
  code: Joi.number().required(),
  message: Joi.string().required(),
  status: Joi.string().required()
});

module.exports = {
  schema_rhsso,
  schema_person_data,
};