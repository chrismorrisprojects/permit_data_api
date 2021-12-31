const rrc_uic = require("../models").rrc_uic

async function parseFilters(requestedFilter){
    const existingCols = Object.keys(rrc_uic.rawAttributes)
    let actualFilter = requestedFilter
    for (const [key, value] of Object.entries(actualFilter)) {
        if (!(existingCols.includes(key))){
            delete actualFilter[key]
        }

    }
    return actualFilter
}



module.exports = {
    parseFilters
}
