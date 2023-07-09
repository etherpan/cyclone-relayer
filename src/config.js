require('dotenv').config()

const { jobType } = require('./constants')
const tornConfig = require('torn-token')
module.exports = {
  netId: Number(process.env.NET_ID) || 5,
  httpRpcUrl: process.env.HTTP_RPC_URL,
  wsRpcUrl: process.env.WS_RPC_URL,
  oracleRpcUrl: process.env.ORACLE_RPC_URL || 'https://mainnet.infura.io/',
  offchainOracleAddress: '0x07D91f5fb9Bf7798734C3f606dB065549F6893bb',
  aggregatorAddress: process.env.AGGREGATOR,
  minerMerkleTreeHeight: 20,
  privateKey: process.env.PRIVATE_KEY,
  instances: tornConfig.instances,
  torn: tornConfig,
  tornadoServiceFee: Number(process.env.REGULAR_TORNADO_WITHDRAW_FEE),
  miningServiceFee: Number(process.env.MINING_SERVICE_FEE),
  rewardAccount: process.env.REWARD_ACCOUNT,
  governanceAddress: '0xc91490001928D8C5C6E826BDc56aA2B506450A2A',
  tornadoGoerliProxy: '0xaD52EEC24888A13FEc6b87E30c26f52C43d48F10',
  tornadoEthProxy: '0x969BB4746Eb375dD15d743B3f5f3bCcD6e2A66cE',
  gasLimits: {
    [jobType.TORNADO_WITHDRAW]: 390000,
    WITHDRAW_WITH_EXTRA: 700000,
    [jobType.MINING_REWARD]: 455000,
    [jobType.MINING_WITHDRAW]: 400000,
  },
  minimumBalance: '1000000000000000000',
  baseFeeReserve: Number(process.env.BASE_FEE_RESERVE_PERCENTAGE),
}
