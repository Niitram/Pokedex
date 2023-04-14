const { Router } = require("express")

const handlerGetAllTypes = require("../handlers/handlerGetAllTypes")

const typesRouter = Router()

typesRouter.get("/", handlerGetAllTypes)

module.exports = typesRouter