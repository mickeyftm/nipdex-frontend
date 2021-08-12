import { useMasterchef } from 'hooks/useContract'
import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'

const useStakeFarms = (pid, type) => {
  const masterChefContract = useMasterchef(type)

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterChefContract, pid, amount)
      console.info(txHash)
    },
    [masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
