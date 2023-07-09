const express = require('express')
const { rewardAccount } = require('./config')
const { version } = require('../package.json')
const { isAddress } = require('./utils')
const router = require('./router')
const cors = require('cors')

const port = process.env.PORT || 8000

if (!isAddress(rewardAccount)) {
  throw new Error('No REWARD_ACCOUNT specified')
}
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(port, '0.0.0.0', function () {
  console.log(`Relayer ${version} started on port ${port}`)
})
