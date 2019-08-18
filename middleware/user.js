
const Secretary = require('../model/user')

module.exports = {
  createUser
}

async function createUser(ctx, next) {
  const payload = ctx.request.body
  const { name, age, nationality } = payload
  const newSecretary = new Secretary({
    name: name,
    age: age,
    nationality: nationality
  })
  await newSecretary.save((err, res) => {
    console.log(err)

  })

  ctx.status = 201
  await next()

}
