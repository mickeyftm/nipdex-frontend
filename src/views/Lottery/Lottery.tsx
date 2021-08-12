import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import { useLottery } from 'hooks/useContract'
import Page from 'components/layout/Page'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Container'
import LotteryImage from 'assets/images/bookmarks/lottery.svg'
import PageHeader from 'components/PageHeader'
import Hero from './components/Hero'
import NextDrawPage from './NextDrawPage'
import PastDrawsPage from './PastDrawsPage'


const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const Lottery: React.FC = () => {
  const lotteryContract = useLottery()
  
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [historyData, setHistoryData] = useState([])
  const [historyError, setHistoryError] = useState(false)
  const [currentLotteryNumber, setCurrentLotteryNumber] = useState(0)
  const [mostRecentLotteryNumber, setMostRecentLotteryNumber] = useState(1)

  useEffect(() => {
    fetch(`https://shibaswap-api.vercel.app/api/lotteryHistory`)
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch(() => {
        setHistoryError(true)
      })
  }, [])

  useEffect(() => {
    const getInitialLotteryIndex = async () => {
      const index = await getLotteryIssueIndex(lotteryContract)
      const previousLotteryNumber = index - 1

      setCurrentLotteryNumber(index)
      setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (lotteryContract) {
      getInitialLotteryIndex()
    }
  }, [lotteryContract])

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <Container>
      <PageHeader 
        title={t('Lottery')}
        description={t('Always bet on blue')}
        bookmark={ LotteryImage }
      />
      <Page>
          <ButtonMenu activeIndex={activeIndex} onItemClick={handleClick} scale="sm" variant="subtle">
            <ButtonMenuItem>{t('Next draw')}</ButtonMenuItem>
            <ButtonMenuItem>{t('Past draws')}</ButtonMenuItem>
          </ButtonMenu>
        <PastLotteryDataContext.Provider
          value={{ historyError, historyData, mostRecentLotteryNumber, currentLotteryNumber }}
        >
          {activeIndex === 0 ? <NextDrawPage /> : <PastDrawsPage />}
        </PastLotteryDataContext.Provider>
      </Page>
    </Container>
  )
}

export default Lottery
