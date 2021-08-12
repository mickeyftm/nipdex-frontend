import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  // {
  //   id: 'blink',
  //   address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
  //   isActive: false,
  //   name: 'BLINk (BLK)',
  //   poolUnlimited: {
  //     saleAmount: '100,000,000 BLINK',
  //     raiseAmount: '$1,000,000',
  //     cakeToBurn: '$500,000',
  //     distributionRatio: 1,
  //   },
  //   currency: cakeBnbLpToken,
  //   token: tokens.blink,
  //   releaseBlockNumber: 3279767,
  //   campaignId: '511010000',
  //   articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
  //   tokenOfferingPrice: null,
  //   version: 1,
  // },
]

export default ifos
