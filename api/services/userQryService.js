const users = require("../models").users

async function parseFilters(requestedFilter){
    const existingCols = Object.keys(users.rawAttributes)
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
