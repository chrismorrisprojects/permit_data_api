const getUic = async (req, res) => {
    try {
        return res
            .status(200)
            .json("success")
    } catch(e){
        console.error(e);
        return res
            .status(500)
            .json(e)
    }

}

module.exports = {
    getUic
}
