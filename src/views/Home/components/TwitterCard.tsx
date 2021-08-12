import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { Heading, Card, CardBody, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/gbone-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 603px;
  background-color: white;
`

const PrimaryColorText = styled.div`
   {
    display: inline;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SecondaryColorText = styled.div`
   {
    display: inline;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const TwitterCardBody = styled(CardBody)`
  padding: 50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 30px
  }
  
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 20px
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 50px
  }
`

const TwitterCard = () => {
  const { t } = useTranslation()

  return (
    <StyledFarmStakingCard>
      <TwitterCardBody>
        <Heading scale="xl" mb="24px">
          {t('Welcome to')}
          <Text color="textSubtle" fontSize="40px"> 
          <SecondaryColorText>{t('Shiba')}</SecondaryColorText>
          <PrimaryColorText>{t('Swap')}</PrimaryColorText>
          </Text>
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'shibafantom'
          }}
          options={{
            height: '465',
            chrome: "noheader, nofooter",
            width: "502"
          }}
        />
      </TwitterCardBody>
    </StyledFarmStakingCard>
  )
}

export default TwitterCard
