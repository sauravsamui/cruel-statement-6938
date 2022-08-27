const { Router } = require('express')
const routes = Router();
const { userRegistration, userLogin, userMobileVerify } = require('./userAuth')

routes.post('/auth', userMobileVerify)
routes.post('/signup', userRegistration);
routes.post('/login', userLogin)

module.exports = routes
