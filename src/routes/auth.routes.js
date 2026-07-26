const {Router} = require('express')
const authController = require('../controllers/auth.controllers')

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login user with email and password
 * @access Public       
 */

authRouter.post("/login", authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookies and add the token in blacklist
 * @access Public       
 */

authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description Get the current logged in user details
 * @access  Private
 */
auth.router.get("/get-me",)
module.exports = authRouter

