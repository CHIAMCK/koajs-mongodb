'use strict'

const user = require('./middleware/user')

module.exports = (router) => {
    router.post('/user', user.createUser)
}
