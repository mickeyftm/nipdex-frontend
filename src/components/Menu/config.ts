import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Swap',
    icon: 'SwapMenuIcon',
    href: 'https://swap.shibafantom.finance/#/swap',
  },
  {
    label: 'Liquidity',
    icon: 'LiquidityMenuIcon',
    href: 'https://swap.shibafantom.finance/#/pool',
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dog Park',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://info.shibafantom.finance/',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://lottery.shibafantom.finance',
    status: {
      text: t('NEW').toLocaleUpperCase(),
      color: 'primary',
    },
  },
  {
    label: 'Buy FTM',
    icon: 'BuyftmIcon',
    href: 'https://shibafantom.gitbook.io/shibafantom/how-to-get-ftm/buying-or-bridging-ftm',
  },
  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://spookyswap.finance/bridge',
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Shiba Fantom",
        href: "https://www.shibafantom.com/",
      },
      {
        label: "ShibaPunks",
        href: "https://punks.shibafantom.com",
      },
      {
        label: "Farmlands",
        href: "https://ftm.guru/LF",
      },
      {
        label: "Vote",
        href: "https://snapshot.org/#/shibafantom.eth",
      },
      {
        label: "Docs",
        href: "https://shibafantom.gitbook.io/shibafantom/",
      },
      {
        label: "Github",
        href: "https://github.com/Shiba-Fantom",
      },
      {
        label: "Fantom",
        href: "https://fantom.foundation/",
      },
    ],
  },
]

export default config
