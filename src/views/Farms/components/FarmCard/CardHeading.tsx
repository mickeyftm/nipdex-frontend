import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading } from '@pancakeswap/uikit'
import { Token } from 'config/constants/types'
import TokenPairImage from 'components/TokenPairImage'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  isTokenOnly?: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${({ theme }) => theme.radii.card};
  border-top-right-radius: ${({ theme }) => theme.radii.card};
  position: relative;
  padding: 12px;
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  width: 38px;
  height: 37px;
`

const TagWrapper = styled(Flex)`
  position: absolute;
  top: 43px;
  right: 19px;
`
const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, token, quoteToken, isTokenOnly }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      { !isTokenOnly ? (
          <TokenPairImage primaryToken={token} secondaryToken={quoteToken} width={37} height={37} />
        ): (
          <img src={`/images/tokens/${token.symbol.toLocaleLowerCase()}.png`} alt={token.symbol} width={37}/>
        )
      }
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px" color="white" mr="7px">{lpLabel.split(' ')[0]}</Heading>
        <TagWrapper justifyContent="center">
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </TagWrapper>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
