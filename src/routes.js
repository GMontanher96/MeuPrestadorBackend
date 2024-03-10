const {Router} = require('express')

const UserController = require('./controller/UserController')
const ProfileController = require('./controller/ProfileController')
const LoginController = require('./controller/LoginController')
const bcrypt = require("bcrypt");

const router = Router()

// user
router.post('/myprovider/create-user', UserController.createUser)
router.put('/myprovider/update-user/:id', UserController.updateUser)
router.get('/myprovider/list-user', LoginController.verifyToken, UserController.getUser)
router.delete('/myprovider/delete-user/:id', UserController.deleteUser)

// login
router.post('/myprovider/login', LoginController.Login)

// user profile
// router.get('/myprovider/:profile_id/list-user', UserController.findByUserToProfile)

// profile
router.post('/myprovider/create-profile', ProfileController.createProfile)
router.get('/myprovider/list-profile', ProfileController.getProfile)



module.exports = router
