const Bull = require('bull')

const connectQueue = name =>
  new Bull(name, {
    redis: {
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOSTNAME,
      password: process.env.REDIS_PASSWORD,
    },
  })

module.exports = { connectQueue }
