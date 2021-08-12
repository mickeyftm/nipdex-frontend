import { useEffect, useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  getBep20Contract,
  getGboneContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getIfoV1Contract,
  getIfoV2Contract,
  getLotteryContract,
  getLotteryTicketContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSouschefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,
  getErc721Contract,
  getCakeVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getSouschefV2Contract,
  getLotteryV2Contract,
  getBunnySpecialCakeVaultContract,
  getBunnySpecialPredictionContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoV1Contract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getIfoV1Contract(address, library.getSigner()), [address, library])
}

export const useIfoV2Contract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getIfoV2Contract(address, library.getSigner()), [address, library])
}

export const useERC20 = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBep20Contract(address, library.getSigner()), [address, library])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getErc721Contract(address, library.getSigner()), [address, library])
}

export const useCake = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getGboneContract(library.getSigner()), [library])
}

export const useBunnyFactory = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnyFactoryContract(library.getSigner()), [library])
}

export const usePancakeRabbits = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeRabbitContract(library.getSigner()), [library])
}

export const useProfile = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getProfileContract(library.getSigner()), [library])
}

export const useLottery = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLotteryContract(library.getSigner()), [library])
}

export const useLotteryTicket = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLotteryTicketContract(library.getSigner()), [library])
}

export const useLotteryV2Contract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLotteryV2Contract(library.getSigner()), [library])
}

export const useMasterchef = (type) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getMasterchefContract(type, library.getSigner()), [library, type])
}

export const useSousChef = (id) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getSouschefContract(id, library.getSigner()), [id, library])
}

export const useSousChefV2 = (id) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getSouschefV2Contract(id, library.getSigner()), [id, library])
}

export const usePointCenterIfoContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPointCenterIfoContract(library.getSigner()), [library])
}

export const useBunnySpecialContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialContract(library.getSigner()), [library])
}

export const useClaimRefundContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getClaimRefundContract(library.getSigner()), [library])
}

export const useTradingCompetitionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getTradingCompetitionContract(library.getSigner()), [library])
}

export const useEasterNftContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getEasterNftContract(library.getSigner()), [library])
}

export const useCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getCakeVaultContract(library.getSigner()), [library])
}

export const usePredictionsContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPredictionsContract(library.getSigner()), [library])
}

export const useChainlinkOracleContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getChainlinkOracleContract(library.getSigner()), [library])
}

export const useSpecialBunnyCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialCakeVaultContract(library.getSigner()), [library])
}

export const useSpecialBunnyPredictionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialPredictionContract(library.getSigner()), [library])
}
