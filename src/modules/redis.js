var Redis = require('ioredis')

const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOSTNAME,
  password: process.env.REDIS_PASSWORD,
})
const redisSubscribe = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOSTNAME,
  password: process.env.REDIS_PASSWORD,
})

module.exports = {
  redis,
  redisSubscribe,
}
