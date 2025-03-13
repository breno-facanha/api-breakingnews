const userController = require('../controllers/user.controller');

const route = require('express').Router();

route.post("/", userController.create)
route.get("/", userController.findAll)

module.exports = route