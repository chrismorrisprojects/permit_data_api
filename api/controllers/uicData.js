const rrc_uic = require("../models").rrc_uic
const uicQryServices = require("../services/uicQryServices")

const uicQuery = async (req, res) => {
    const validUicFilters = await uicQryServices.parseFilters(req.body)
    try {
        const uicCollection = await rrc_uic.findAll({
            where: validUicFilters
        })
        res.status(200).json(uicCollection)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

}

module.exports = {
    uicQuery
}
