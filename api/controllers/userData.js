const users = require("../models").users
const userQryServices = require("../services/userQryService")

const userQuery = async (req, res) => {
    const validUserFilters = await userQryServices.parseFilters(req.body)
    try {
        const userCollection = await users.findAll({
            where: validUserFilters
        })
        res.status(200).json(userCollection)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

}

module.exports = {
    userQuery
}
