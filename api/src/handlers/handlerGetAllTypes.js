const getAllTypes = require("../Controllers/getAllTypes")

const handlerGetAllTypes = async (req, res) => {
    try {
        const response = await getAllTypes()
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = handlerGetAllTypes