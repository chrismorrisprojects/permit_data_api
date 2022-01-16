import React, { Component } from "react";

export default class HomePage extends Component {

    render() {
        return (
            <div><p>place API options like so in the body of the request:</p>

        <span>&#123;
            "uic_ctl_no": [1, 2, 3, 4, 5],
            "uic_oper": "427618"
            &#125;}</span><br />
                    API filter options are used as AND so this would only return 1 well. Will accept an array of values which will be
                    used as COL IN (val1, val2, etc<br />
                    <br />
                        <p>column:datatypes available:</p>
                        uic_cntl_no: DataTypes.INTEGER,<br />
                        uic_next_available: DataTypes.STRING,<br />
                        uic_oper: DataTypes.STRING,<br />
                        uic_api_number: DataTypes.INTEGER,<br />
                        uic_field_no: DataTypes.INTEGER,<br />
                        uic_class: DataTypes.INTEGER,<br />
                        uic_appr_date: DataTypes.DATE,<br />
                        uic_w14_date: DataTypes.DATE,<br />
                        uic_h1_date: DataTypes.DATE,<br />
                        uic_letter_date: DataTypes.DATE,<br />
                        uic_permit_added_date: DataTypes.DATE,<br />
                        uic_activated_flag: DataTypes.STRING,<br />
                        uic_cancel_date: DataTypes.DATE,<br />
                        uic_w2_g1_date: DataTypes.DATE,<br />
                        uic_w3_date: DataTypes.DATE,<br />
                        uic_type_inj: DataTypes.INTEGER,<br />
                        uic_type_inj_cmt: DataTypes.STRING,<br />
                        uic_type_flu_cmt: DataTypes.STRING,<br />
                        uic_bbl_vol_inj: DataTypes.INTEGER,<br />
                        uic_mcf_vol_inj: DataTypes.INTEGER,<br />
                        uic_top_inj_zone: DataTypes.INTEGER,<br />
                        uic_bot_inj_zone: DataTypes.INTEGER,<br />
                        uic_max_inj_pressure: DataTypes.INTEGER,<br />
                        uic_h1_no: DataTypes.INTEGER,<br />
                        uic_w14_no: DataTypes.INTEGER,<br />
                        uic_inj_sw: DataTypes.STRING,<br />
                        uic_inj_fw: DataTypes.STRING,<br />
                        uic_inj_frac_water: DataTypes.STRING,<br />
                        uic_inj_norm: DataTypes.STRING,<br />
                        uic_inj_co2: DataTypes.STRING,<br />
                        uic_inj_gas: DataTypes.STRING,<br />
                        uic_inj_h2s: DataTypes.STRING,<br />
                        uic_inj_polymer: DataTypes.STRING,<br />
                        uic_inj_steam: DataTypes.STRING,<br />
                        uic_inj_air: DataTypes.STRING,<br />
                        uic_inj_nitrogen: DataTypes.STRING,<br />
                        uic_inj_other: DataTypes.STRING,<br />
                        uic_inj_bw: DataTypes.STRING,<br />
                        uic_inj_lpg: DataTypes.STRING,<br />
                        uic_max_inj_pressure_2: DataTypes.INTEGER,<br />
                        uic_spec_ann_press_test: DataTypes.STRING,<br />
                        uic_spec_ann_rad_tracer_sur: DataTypes.STRING,<br />
                        uic_spec_ann_temp_survey: DataTypes.STRING,<br />
                        uic_spec_downhole_survey: DataTypes.STRING,<br />
                        uic_spec_semi_annual_pt: DataTypes.STRING,<br />
                        uic_spec_tbg_csg_annulus: DataTypes.STRING,<br />
                        uic_spec_tbg_csg_freq: DataTypes.STRING,<br />
                        uic_spec_montr_press: DataTypes.STRING,<br />
                        uic_spec_montr_press_code_1: DataTypes.STRING,<br />
                        uic_spec_montr_press_code_2: DataTypes.STRING,<br />
                        uic_spec_montr_press_freq: DataTypes.STRING,<br />
                        uic_spec_meas_fluid_level: DataTypes.STRING,<br />
                        uic_spec_meas_fluid_freq: DataTypes.STRING,<br />
                        uic_spec_commercial: DataTypes.STRING,<br />
                        uic_spec_cement_sqz: DataTypes.STRING,<br />
                        uic_spec_cement_sqz_amt1: DataTypes.INTEGER,<br />
                        uic_spec_cement_sqz_amt2: DataTypes.INTEGER,<br />
                        uic_spec_cement_sqz_2: DataTypes.STRING,<br />
                        uic_spec_cement_sqz_2_amt1: DataTypes.INTEGER,<br />
                        uic_spec_cement_sqz_2_amt2: DataTypes.INTEGER,<br />
                        uic_spec_block_sqz_sx: DataTypes.STRING,<br />
                        uic_spec_block_sqz_sx_amt1: DataTypes.INTEGER,<br />
                        uic_spec_block_sqz_sx_amt2: DataTypes.INTEGER,<br />
                        uic_spec_block_sqz: DataTypes.STRING,<br />
                        uic_spec_block_sqz_amt: DataTypes.INTEGER,<br />
                        uic_spec_sqz_perf: DataTypes.STRING,<br />
                        uic_spec_sqz_perf_dpth: DataTypes.INTEGER,<br />
                        uic_spec_bridge_plug: DataTypes.STRING,<br />
                        uic_spec_bridge_plug_dpth: DataTypes.INTEGER,<br />
                        uic_spec_fluid_source_limit: DataTypes.STRING,<br />
                        uic_spec_plug_area_wells: DataTypes.STRING,<br />
                        uic_spec_plug_area_wells_no: DataTypes.INTEGER,<br />
                        uic_spec_permit_exp: DataTypes.STRING,<br />
                        uic_exceptions: DataTypes.STRING,<br />
                        uic_dpth_bot_of_top_zone: DataTypes.INTEGER,<br />
                        uic_dpth_top_of_split_zone: DataTypes.INTEGER,<br />
                        uic_dpth_bot_of_split_zone: DataTypes.INTEGER,<br />
                        uic_location: DataTypes.STRING,<br />
                        uic_survey_lines: DataTypes.STRING,<br />
                        uic_status: DataTypes.STRING,<br />
                        uic_geothermal: DataTypes.STRING,<br />
                        uic_mismatch: DataTypes.STRING,<br />
                        uic_depth_boz: DataTypes.INTEGER,<br />
                        uic_depth_pkr: DataTypes.INTEGER,<br />
                        uic_inj_mode: DataTypes.STRING,<br />
                        uic_technician_review_date: DataTypes.DATE,<br />
                        uic_technician_initials: DataTypes.STRING,<br />
                        uic_technician_results: DataTypes.STRING,<br />
                        uic_prod_casing_amt: DataTypes.INTEGER,<br />
                        uic_prod_casing_fraction_1: DataTypes.INTEGER,<br />
                        uic_prod_casing_fraction_2: DataTypes.INTEGER,<br />
                        uic_prod_casing_depth: DataTypes.INTEGER,<br />
                        uic_prod_casing_cement: DataTypes.INTEGER,<br />
                        uic_prod_casing_top_cement: DataTypes.STRING,<br />
                        uic_prod_casing_pkr_depth: DataTypes.INTEGER,<br />
                        uic_gas_plant_comment: DataTypes.STRING,<br />
                        uic_special_cond_cmt: DataTypes.STRING,<br />
                        uic_file_review_date: DataTypes.DATE,<br />
                        uic_file_review_init: DataTypes.STRING,<br />
                        uic_docket_no_dist: DataTypes.STRING,<br />
                        uic_docket_no_filler: DataTypes.STRING,<br />
                        uic_docket_no_uic_old_docket_no: DataTypes.INTEGER,<br />
                        uic_uiroot_filler: DataTypes.STRING
            </div>
        );
    }
}
