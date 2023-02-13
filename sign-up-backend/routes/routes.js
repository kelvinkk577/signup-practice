const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })

  signedUpUser.save()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

module.exports = router