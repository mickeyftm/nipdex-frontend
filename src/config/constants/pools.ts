import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.shiba,
    earningToken: tokens.laika,
    contractAddress: {
      4002: '',
      250: '0x4bBe13635A969d603E699B8D3Fe0Fd4bB54e1Cc4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '330687',
    sortOrder: 1,
    isFinished: false,
  },

]

export default pools
