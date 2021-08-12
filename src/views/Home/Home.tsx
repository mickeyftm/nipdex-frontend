import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import TokensStats from './components/TokensStats'
import TwitterCard from './components/TwitterCard'


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`
const Wrapper = styled.div`
   {
    margin-top: 59px;
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Wrapper>
        <Cards>
          <TokensStats />
          <TwitterCard />
        </Cards>
      </Wrapper>
    </Page>
  )
}

export default Home
