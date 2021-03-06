import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getGboneAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceGboneBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: cakeBalance } = useTokenBalance(getGboneAddress())
  const gbonePriceUsdc = usePriceGboneBusd()
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(gbonePriceUsdc).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(cakeBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      {gbonePriceUsdc.gt(0) ? <CardBusdValue value={busdBalance} /> : <br />}
    </>
  )
}

export default CakeWalletBalance
