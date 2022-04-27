const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const requireAuth = require('./middleware/authMiddleware')


router.post('/registration', [
    check('username', "The field is empty!").notEmpty(),
    check('password', "Password should include minimum 1 symbol").isLength({min:1}),
    check('email', "The field is empty!").notEmpty()
], controller.registration)
router.post('/login', controller.login)
router.get('/users',requireAuth, controller.getUsers)
router.get('/allUsers',requireAuth,controller.getAllUsers)
router.get('/authorization', controller.getAuthorizationPage)
router.get('/registration', controller.getRegistrationPage)

router.delete('/allUsers', requireAuth, controller.deleteUsers)
router.post('/allUsers', controller.getAllUsers)
module.exports = router
