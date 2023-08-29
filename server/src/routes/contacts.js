const express = require('express')
const router = express.Router()
const {contactUser}= require('../controllers/contacts')

router.post("/contact", contactUser);

module.exports = router

