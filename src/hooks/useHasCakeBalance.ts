import BigNumber from 'bignumber.js'
import { getGboneAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's GBONE balance is at least the amount passed in
 */
const useHasCakeBalance = (minimumBalance: BigNumber) => {
  const { balance: cakeBalance } = useTokenBalance(getGboneAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasCakeBalance
