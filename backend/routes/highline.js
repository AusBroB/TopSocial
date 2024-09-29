const express = require('express')
const {getHighline} = require('../controllers/highlineController')
// const axios = require('axios')
const highlineRouter = express.Router()

highlineRouter.get('/',getHighline)
module.exports = highlineRouter;

