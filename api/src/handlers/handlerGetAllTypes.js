const getAllTypes = require("../Controllers/getAllTypes")

const handlerGetAllTypes = async (req, res) => {
    try {
        const response = await getAllTypes()
        res.status(200).json(response)
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

module.exports = handlerGetAllTypes