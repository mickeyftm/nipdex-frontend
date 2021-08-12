import tokens from './tokens'
import { FarmCategory, FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'GBONE',
    lpAddresses: {
      4002: '',
      250: '0x004B122eb5632077abdD2C38e8d9392348d5cA15',
    },
    type: FarmCategory.GBONE,
    token: tokens.gbone,
    quoteToken: tokens.gbone,
    isTokenOnly: true,
  },
  {
    pid: 1,
    lpSymbol: 'Shiba-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xD7199dc9F406444808930F72701E8ed9F18c4767',
    },
    type: FarmCategory.GBONE,
    token: tokens.shiba,
    quoteToken: tokens.wftm,
  },
  // 251 on Pancake CAKE-BNB
  {
    pid: 3, 
    lpSymbol: 'Shiba-GBONE LP',
    lpAddresses: {
      4002: '',
      250: '0x76A40824e2a554349290BD53CaC78653d062Fe21',
    },
    type: FarmCategory.GBONE,
    token: tokens.shiba,
    quoteToken: tokens.gbone,
  },
  {
    pid: 4, 
    lpSymbol: 'GBONE-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x881D898BA9806D5065e5fe4dd26991d57bA32Ff0',
    },
    type: FarmCategory.GBONE,
    token: tokens.gbone,
    quoteToken: tokens.wftm,
  },
  {
    pid: 0,
    lpSymbol: 'BONE',
    lpAddresses: {
      4002: '',
      250: '0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a',
    },
    type: FarmCategory.BONE,
    token: tokens.bone,
    quoteToken: tokens.bone,
    isTokenOnly: true,
  },
  {
    pid: 15, 
    lpSymbol: 'Shiba-BONE LP',
    lpAddresses: {
      4002: '',
      250: '0x7dF481f03c3dA6A609aDcA14AB2a99F8040c4C3C',

    },
    type: FarmCategory.BONE,
    token: tokens.shiba,
    quoteToken: tokens.bone,
  },
  {
    pid: 1, 
    lpSymbol: 'BONE-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xFb6732e6b145Dd4b11eFD6725A759056Fa605EbF',
    },
    type: FarmCategory.BONE,
    token: tokens.bone,
    quoteToken: tokens.wftm,
  },
  // 252 on Pancake BUSD-BNB
  {
    pid: 2, 
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x9C2BeaC6062b843b23CF96FF53B5C63193Da92bb',
    },
    type: FarmCategory.BONE,
    token: tokens.usdc,
    quoteToken: tokens.wftm,
  },
  {
    pid: 6, 
    lpSymbol: 'DAI-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x200c4f35c03845b340629527799d38177f5fb283',
    },
    type: FarmCategory.BONE,
    token: tokens.dai,
    quoteToken: tokens.wftm,
  },
  {
    pid: 7, 
    lpSymbol: 'fUSDT-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x7de2e65476B0a08e49c5D0f30A4cF567047cd80E',
    },
    type: FarmCategory.BONE,
    token: tokens.fusdt,
    quoteToken: tokens.wftm,
  },
  {
    pid: 8, 
    lpSymbol: 'wETH-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xcaD589120FdcF8083d076b2467d884742783e5B3',
    },
    type: FarmCategory.BONE,
    token: tokens.weth,
    quoteToken: tokens.wftm,
  },
  {
    pid: 9, 
    lpSymbol: 'wBTC-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xe0D5053E2d98831F092F7289a21DA8Fc54330F4b',
    },
    type: FarmCategory.BONE,
    token: tokens.wbtc,
    quoteToken: tokens.wftm,
  },
  {
    pid: 10, 
    lpSymbol: 'BNB-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xC2FC322BaE7804d4c1a655189DCE78eBeBaECfc8',
    },
    type: FarmCategory.BONE,
    token: tokens.bnb,
    quoteToken: tokens.wftm,
  },
  {
    pid: 13, 
    lpSymbol: 'NIPS-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x9605f6CC0E930c21965241bDA304A3437CdBD94B',
    },
    type: FarmCategory.BONE,
    token: tokens.nips,
    quoteToken: tokens.wftm,
  },
  {
    pid: 11, 
    lpSymbol: 'YORO-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x5EE4cF399463D201079431cc694F80DDE396132F',
    },
    type: FarmCategory.BONE,
    token: tokens.yoro,
    quoteToken: tokens.wftm,
    isFinished: true,
  },
  {
    pid: 5, 
    lpSymbol: 'WAKA-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x83Df88197db0AaC646162ae53C5eCdBD066f6fae',
    },
    type: FarmCategory.BONE,
    token: tokens.waka,
    quoteToken: tokens.wftm,
  },
  {
    pid: 3, 
    lpSymbol: 'BOO-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x2980380598Ca85295637499D52fbB271c051d9d3',
    },
    type: FarmCategory.BONE,
    token: tokens.boo,
    quoteToken: tokens.wftm,
  },
  {
    pid: 12, 
    lpSymbol: 'LQDR-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x93C9Ca8B2C26c9D61Eb35a1ca6b464f995E48DAc',
    },
    type: FarmCategory.BONE,
    token: tokens.lqdr,
    quoteToken: tokens.wftm,
  },
  {
    pid: 16, 
    lpSymbol: 'LAIKA-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x96403B19065D604De3D3D7FC9aAE84BFe96Fd3dC',
    },
    type: FarmCategory.BONE,
    token: tokens.laika,
    quoteToken: tokens.wftm,
  },
]

export default farms
