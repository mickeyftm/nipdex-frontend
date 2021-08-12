import { useCallback } from 'react'
import { ethers, Contract } from 'ethers'
import { useMasterchef } from 'hooks/useContract'
import { FarmCategory } from 'config/constants/types'

const useApproveFarm = (lpContract: Contract,type) => {
  const masterChefContract = useMasterchef(type)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await lpContract.approve(masterChefContract.address, ethers.constants.MaxUint256)
      const receipt = await tx.wait()
      return receipt.status
    } catch (e) {
      return false
    }
  }, [lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApproveFarm
