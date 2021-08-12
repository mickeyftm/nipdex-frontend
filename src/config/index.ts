import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 1

// GBONE_PER_SEC details
// 0.0063376175628058 GBONE is minted per seconds
// 20 GBONE per block is sent to Burn pool (A farm just for burning gbone)
// 10 GBONE per block goes to GBONE syrup pool
// 10 GBONE per block goes to Yield farms and lottery
// GBONE_PER_SEC in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// GBONE/Block in src/views/Home/components/CakeStats.tsx = 20 (40 - Amount sent to burn pool)

export const GBONE_PER_SEC = new BigNumber(0.0063376175628058)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const CAKE_PER_YEAR = GBONE_PER_SEC.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://shibafantom.finance'
export const BASE_EXCHANGE_URL = 'https://swap.shibafantom.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://ftmscan.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 500000
export const DEFAULT_GAS_PRICE = 5
