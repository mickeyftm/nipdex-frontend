import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'
import { FarmCategory } from 'config/constants/types'

const useHarvestFarm = (farmPid: number, type: FarmCategory) => {
  const masterChefContract = useMasterchef(type)

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterChefContract, farmPid)
  }, [farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
