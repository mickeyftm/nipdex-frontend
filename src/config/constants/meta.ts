import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ShibaSwap',
  description:
    'The most popular AMM on Fantom by user count! Earn GBone through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens!',
  image: 'https://shibafantom.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ShibaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ShibaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ShibaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ShibaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ShibaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ShibaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ShibaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ShibaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ShibaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ShibaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ShibaSwap')}`,
      }
    default:
      return null
  }
}
