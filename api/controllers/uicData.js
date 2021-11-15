const rrc_uic = require("../models").rrc_uic

module.exports = {
    async getAllUic(req, res) {
        try {
            const uicCollection = await rrc_uic.findAll({
                limit: 10
            })
            res.status(200).json(uicCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }
}
