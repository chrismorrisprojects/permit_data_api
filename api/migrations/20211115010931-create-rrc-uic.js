'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rrc_uics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UIC_CNTL_NO: {
        type: Sequelize.INTEGER
      },
      UIC_NEXT_AVAILABLE: {
        type: Sequelize.STRING
      },
      UIC_OPER: {
        type: Sequelize.STRING
      },
      UIC_API_NUMBER: {
        type: Sequelize.INTEGER
      },
      UIC_FIELD_NO: {
        type: Sequelize.INTEGER
      },
      UIC_CLASS: {
        type: Sequelize.INTEGER
      },
      UIC_APPR_DATE: {
        type: Sequelize.DATE
      },
      UIC_W14_DATE: {
        type: Sequelize.DATE
      },
      UIC_H1_DATE: {
        type: Sequelize.DATE
      },
      UIC_LETTER_DATE: {
        type: Sequelize.DATE
      },
      UIC_PERMIT_ADDED_DATE: {
        type: Sequelize.DATE
      },
      UIC_ACTIVATED_FLAG: {
        type: Sequelize.STRING
      },
      UIC_CANCEL_DATE: {
        type: Sequelize.DATE
      },
      UIC_W2_G1_DATE: {
        type: Sequelize.DATE
      },
      UIC_W3_DATE: {
        type: Sequelize.DATE
      },
      UIC_TYPE_INJ: {
        type: Sequelize.INTEGER
      },
      UIC_TYPE_INJ_CMT: {
        type: Sequelize.STRING
      },
      UIC_TYPE_FLU_CMT: {
        type: Sequelize.STRING
      },
      UIC_BBL_VOL_INJ: {
        type: Sequelize.INTEGER
      },
      UIC_MCF_VOL_INJ: {
        type: Sequelize.INTEGER
      },
      UIC_TOP_INJ_ZONE: {
        type: Sequelize.INTEGER
      },
      UIC_BOT_INJ_ZONE: {
        type: Sequelize.INTEGER
      },
      UIC_MAX_INJ_PRESSURE: {
        type: Sequelize.INTEGER
      },
      UIC_H1_NO: {
        type: Sequelize.INTEGER
      },
      UIC_W14_NO: {
        type: Sequelize.INTEGER
      },
      UIC_INJ_SW: {
        type: Sequelize.STRING
      },
      UIC_INJ_FW: {
        type: Sequelize.STRING
      },
      UIC_INJ_FRAC_WATER: {
        type: Sequelize.STRING
      },
      UIC_INJ_NORM: {
        type: Sequelize.STRING
      },
      UIC_INJ_CO2: {
        type: Sequelize.STRING
      },
      UIC_INJ_GAS: {
        type: Sequelize.STRING
      },
      UIC_INJ_H2S: {
        type: Sequelize.STRING
      },
      UIC_INJ_POLYMER: {
        type: Sequelize.STRING
      },
      UIC_INJ_STEAM: {
        type: Sequelize.STRING
      },
      UIC_INJ_AIR: {
        type: Sequelize.STRING
      },
      UIC_INJ_NITROGEN: {
        type: Sequelize.STRING
      },
      UIC_INJ_OTHER: {
        type: Sequelize.STRING
      },
      UIC_INJ_BW: {
        type: Sequelize.STRING
      },
      UIC_INJ_LPG: {
        type: Sequelize.STRING
      },
      UIC_MAX_INJ_PRESSURE_Two: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_ANN_PRESS_TEST: {
        type: Sequelize.STRING
      },
      UIC_SPEC_ANN_RAD_TRACER_SUR: {
        type: Sequelize.STRING
      },
      UIC_SPEC_ANN_TEMP_SURVEY: {
        type: Sequelize.STRING
      },
      UIC_SPEC_DOWNHOLE_SURVEY: {
        type: Sequelize.STRING
      },
      UIC_SPEC_SEMI_ANNUAL_PT: {
        type: Sequelize.STRING
      },
      UIC_SPEC_TBG_CSG_ANNULUS: {
        type: Sequelize.STRING
      },
      UIC_SPEC_TBG_CSG_FREQ: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MONTR_PRESS: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MONTR_PRESS_CODE_1: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MONTR_PRESS_CODE_2: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MONTR_PRESS_FREQ: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MEAS_FLUID_LEVEL: {
        type: Sequelize.STRING
      },
      UIC_SPEC_MEAS_FLUID_FREQ: {
        type: Sequelize.STRING
      },
      UIC_SPEC_COMMERCIAL: {
        type: Sequelize.STRING
      },
      UIC_SPEC_CEMENT_SQZ: {
        type: Sequelize.STRING
      },
      UIC_SPEC_CEMENT_SQZ_AMT1: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_CEMENT_SQZ_AMT2: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_CEMENT_SQZ_2: {
        type: Sequelize.STRING
      },
      UIC_SPEC_CEMENT_SQZ_2_AMT1: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_CEMENT_SQZ_2_AMT2: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_BLOCK_SQZ_SX: {
        type: Sequelize.STRING
      },
      UIC_SPEC_BLOCK_SQZ_SX_AMT1: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_BLOCK_SQZ_SX_AMT2: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_BLOCK_SQZ: {
        type: Sequelize.STRING
      },
      UIC_SPEC_BLOCK_SQZ_AMT: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_SQZ_PERF: {
        type: Sequelize.STRING
      },
      UIC_SPEC_SQZ_PERF_DPTH: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_BRIDGE_PLUG: {
        type: Sequelize.STRING
      },
      UIC_SPEC_BRIDGE_PLUG_DPTH: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_FLUID_SOURCE_LIMIT: {
        type: Sequelize.STRING
      },
      UIC_SPEC_PLUG_AREA_WELLS: {
        type: Sequelize.STRING
      },
      UIC_SPEC_PLUG_AREA_WELLS_NO: {
        type: Sequelize.INTEGER
      },
      UIC_SPEC_PERMIT_EXP: {
        type: Sequelize.STRING
      },
      UIC_EXCEPTIONS: {
        type: Sequelize.STRING
      },
      UIC_DPTH_BOT_OF_TOP_ZONE: {
        type: Sequelize.INTEGER
      },
      UIC_DPTH_TOP_OF_SPLIT_ZONE: {
        type: Sequelize.INTEGER
      },
      UIC_DPTH_BOT_OF_SPLIT_ZONE: {
        type: Sequelize.INTEGER
      },
      UIC_LOCATION: {
        type: Sequelize.STRING
      },
      UIC_SURVEY_LINES: {
        type: Sequelize.STRING
      },
      UIC_STATUS: {
        type: Sequelize.STRING
      },
      UIC_GEOTHERMAL: {
        type: Sequelize.STRING
      },
      UIC_MISMATCH: {
        type: Sequelize.STRING
      },
      UIC_DEPTH_BOZ: {
        type: Sequelize.INTEGER
      },
      UIC_DEPTH_PKR: {
        type: Sequelize.INTEGER
      },
      UIC_INJ_MODE: {
        type: Sequelize.STRING
      },
      UIC_TECHNICIAN_REVIEW_DATE: {
        type: Sequelize.DATE
      },
      UIC_TECHNICIAN_INITIALS: {
        type: Sequelize.STRING
      },
      UIC_TECHNICIAN_RESULTS: {
        type: Sequelize.STRING
      },
      UIC_PROD_CASING_AMT: {
        type: Sequelize.INTEGER
      },
      UIC_PROD_CASING_FRACTION_1: {
        type: Sequelize.INTEGER
      },
      UIC_PROD_CASING_FRACTION_2: {
        type: Sequelize.INTEGER
      },
      UIC_PROD_CASING_DEPTH: {
        type: Sequelize.INTEGER
      },
      UIC_PROD_CASING_CEMENT: {
        type: Sequelize.INTEGER
      },
      UIC_PROD_CASING_TOP_CEMENT: {
        type: Sequelize.STRING
      },
      UIC_PROD_CASING_PKR_DEPTH: {
        type: Sequelize.INTEGER
      },
      UIC_GAS_PLANT_COMMENT: {
        type: Sequelize.STRING
      },
      UIC_SPECIAL_COND_CMT: {
        type: Sequelize.STRING
      },
      UIC_FILE_REVIEW_DATE: {
        type: Sequelize.DATE
      },
      UIC_FILE_REVIEW_INIT: {
        type: Sequelize.STRING
      },
      UIC_DOCKET_NO_DIST: {
        type: Sequelize.STRING
      },
      UIC_DOCKET_NO_FILLER: {
        type: Sequelize.STRING
      },
      UIC_DOCKET_NO_UIC_OLD_DOCKET_NO: {
        type: Sequelize.INTEGER
      },
      UIC_UIROOT_FILLER: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rrc_uics');
  }
};