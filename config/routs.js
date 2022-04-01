const authController = require('../controllers/auth');
const router = require('express').Router();


module.exports = (app) => {
    router.post('/register', authController.register);
    // app.use('/auth', authController)
}