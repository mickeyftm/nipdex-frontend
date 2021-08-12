import { useCallback, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useLottery, useLotteryTicket } from 'hooks/useContract'
import { BIG_ZERO } from 'utils/bigNumber'
import { getLotteryAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'
import {
  getTotalRewards,
  getTotalClaim,
  getMatchingRewardLength,
  getWinningNumbers,
  getTickets,
} from '../utils/lotteryUtils'
import useLastUpdated from './useLastUpdated'


const useTickets = (lotteryNumber = null) => {
  const [tickets, setTickets] = useState([])
  const { account } = useWeb3React()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTickets(lotteryContract, ticketsContract, account, lotteryNumber)
      setTickets(res)
    }

    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, lotteryContract, ticketsContract, fastRefresh, lotteryNumber])

  return tickets
}

export const useTotalRewards = () => {
  const [rewards, setRewards] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTotalRewards(lotteryContract)
      setRewards(new BigNumber(res._hex))
    }

    if (account && lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, fastRefresh, account])

  return rewards
}

export const useTotalClaim = () => {
  const [claimAmount, setClaimAmount] = useState(BIG_ZERO)
  const [claimLoading, setClaimLoading] = useState(false)
  const { account } = useWeb3React()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  const fetchBalance = useCallback(async () => {
    setClaimLoading(true)
    const claim = await getTotalClaim(lotteryContract, ticketsContract, account)
    setClaimAmount(claim)
    setClaimLoading(false)
  }, [account, lotteryContract, ticketsContract])

  useEffect(() => {
    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, fetchBalance, lotteryContract, ticketsContract, lastUpdated])
  return { claimLoading, claimAmount, setLastUpdated }
}

export const useWinningNumbers = () => {
  const { account } = useWeb3React()
  const [winningNumbers, setWinningNumbers] = useState([0, 0, 0, 0])
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const rewards = await getWinningNumbers(lotteryContract)
      setWinningNumbers(rewards)
    }

    if (account && lotteryContract) {
      fetchBalance()
    }
  }, [account, fastRefresh, lotteryContract, setWinningNumbers])

  return winningNumbers
}

export const useMatchingRewardLength = (numbers) => {
  const { account } = useWeb3React()
  const [matchingNumbers, setMatchingNumbers] = useState(0)
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const matchedNumbers = await getMatchingRewardLength(lotteryContract, numbers)
      setMatchingNumbers(matchedNumbers)
    }

    if (account && lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, numbers, fastRefresh, account])

  return matchingNumbers
}

export default useTickets
