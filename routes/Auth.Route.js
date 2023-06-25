const express = require('express')
const router = express.Router()


/**
 * @requires email,password
 * @returns 
 */
router.post('/login', (req, res) => {
    res.send('Login Route!')
})

router.post('/register', (req, res) => {
    res.send('Register!')
})

router.post('/refresh-token', (req, res) => {
    res.send('Refresh token!')
})

router.delete('/logout', (req, res) => {
    res.send('Logout!')
})


module.exports = router

